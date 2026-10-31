import { createRoute, z } from '@hono/zod-openapi'

const InsufficientPrivilegesExceptionSchema = z.any().openapi('InsufficientPrivilegesException')

const StringSchema = z.string().openapi('String')

const ActionTypeSchema = z
  .enum(['InstanceRefresh', 'PlatformUpdate', 'Unknown'])
  .openapi('ActionType')

const ApplyEnvironmentManagedActionResultSchema = z
  .object({
    ActionId: StringSchema.and(
      z.any().openapi({ description: 'The action ID of the managed action.' }),
    ).exactOptional(),
    ActionDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the managed action.' }),
    ).exactOptional(),
    ActionType: ActionTypeSchema.and(
      z.any().openapi({ description: 'The type of managed action.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of the managed action.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The result message containing information about the managed action.',
    required: [],
  })
  .openapi('ApplyEnvironmentManagedActionResult')

const ElasticBeanstalkServiceExceptionSchema = z.any().openapi('ElasticBeanstalkServiceException')

const ManagedActionInvalidStateExceptionSchema = z
  .any()
  .openapi('ManagedActionInvalidStateException')

const CnameAvailabilitySchema = z.boolean().openapi('CnameAvailability')

const DNSCnameSchema = z.string().min(1).max(255).openapi('DNSCname')

const CheckDNSAvailabilityResultMessageSchema = z
  .object({
    Available: CnameAvailabilitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if the specified CNAME is available:</p> <ul> <li> <p> <code>true</code> : The CNAME is available.</p> </li> <li> <p> <code>false</code> : The CNAME is not available.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FullyQualifiedCNAME: DNSCnameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The fully qualified CNAME to reserve when <a>CreateEnvironment</a> is called with the provided prefix.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: { Available: true, FullyQualifiedCNAME: 'my-cname.us-west-2.elasticbeanstalk.com' },
    description: 'Indicates if the specified CNAME is available.',
    required: [],
  })
  .openapi('CheckDNSAvailabilityResultMessage')

const EnvironmentNameSchema = z.string().min(4).max(40).openapi('EnvironmentName')

const EnvironmentIdSchema = z.string().openapi('EnvironmentId')

const ApplicationNameSchema = z.string().min(1).max(100).openapi('ApplicationName')

const VersionLabelSchema = z.string().min(1).max(100).openapi('VersionLabel')

const SolutionStackNameSchema = z.string().openapi('SolutionStackName')

const PlatformArnSchema = z.string().openapi('PlatformArn')

const ConfigurationTemplateNameSchema = z
  .string()
  .min(1)
  .max(100)
  .openapi('ConfigurationTemplateName')

const DescriptionSchema = z.string().max(200).openapi('Description')

const EndpointURLSchema = z.string().openapi('EndpointURL')

const CreationDateSchema = z.iso.datetime({ offset: true }).openapi('CreationDate')

const UpdateDateSchema = z.iso.datetime({ offset: true }).openapi('UpdateDate')

const EnvironmentStatusSchema = z
  .enum([
    'Aborting',
    'Launching',
    'Updating',
    'LinkingFrom',
    'LinkingTo',
    'Ready',
    'Terminating',
    'Terminated',
  ])
  .openapi('EnvironmentStatus')

const AbortableOperationInProgressSchema = z.boolean().openapi('AbortableOperationInProgress')

const EnvironmentHealthSchema = z
  .enum(['Green', 'Yellow', 'Red', 'Grey'])
  .openapi('EnvironmentHealth')

const EnvironmentHealthStatusSchema = z
  .enum([
    'NoData',
    'Unknown',
    'Pending',
    'Ok',
    'Info',
    'Warning',
    'Degraded',
    'Severe',
    'Suspended',
  ])
  .openapi('EnvironmentHealthStatus')

const IntegerSchema = z.int().openapi('Integer')

const ListenerSchema = z
  .object({
    Protocol: StringSchema.and(
      z.any().openapi({ description: 'The protocol that is used by the Listener.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z.any().openapi({ description: 'The port that is used by the Listener.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the properties of a Listener for the LoadBalancer.',
    required: [],
  })
  .openapi('Listener')

const LoadBalancerListenersDescriptionSchema = z
  .array(ListenerSchema)
  .openapi('LoadBalancerListenersDescription')

const LoadBalancerDescriptionSchema = z
  .object({
    LoadBalancerName: StringSchema.and(
      z.any().openapi({ description: 'The name of the LoadBalancer.' }),
    ).exactOptional(),
    Domain: StringSchema.and(
      z.any().openapi({ description: 'The domain name of the LoadBalancer.' }),
    ).exactOptional(),
    Listeners: LoadBalancerListenersDescriptionSchema.and(
      z.any().openapi({ description: 'A list of Listeners used by the LoadBalancer.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the details of a LoadBalancer.', required: [] })
  .openapi('LoadBalancerDescription')

const EnvironmentResourcesDescriptionSchema = z
  .object({
    LoadBalancer: LoadBalancerDescriptionSchema.and(
      z.any().openapi({ description: 'Describes the LoadBalancer.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the AWS resources in use by this environment. This data is not live data.',
    required: [],
  })
  .openapi('EnvironmentResourcesDescription')

const EnvironmentTierSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>WebServer</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>Worker</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>Standard</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>SQS/HTTP</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.</p> <note> <p>This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the properties of an environment tier', required: [] })
  .openapi('EnvironmentTier')

const EnvironmentLinkSchema = z
  .object({
    LinkName: StringSchema.and(
      z.any().openapi({ description: 'The name of the link.' }),
    ).exactOptional(),
    EnvironmentName: StringSchema.and(
      z.any().openapi({ description: 'The name of the linked environment (the dependency).' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A link to another environment, defined in the environment\'s manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
    required: [],
  })
  .openapi('EnvironmentLink')

const EnvironmentLinksSchema = z.array(EnvironmentLinkSchema).openapi('EnvironmentLinks')

const EnvironmentArnSchema = z.string().openapi('EnvironmentArn')

const OperationsRoleSchema = z.string().min(1).max(256).openapi('OperationsRole')

const EnvironmentDescriptionSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of this environment.' }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The ID of this environment.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the application associated with this environment.' }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z.any().openapi({ description: 'The application version deployed in this environment.' }),
    ).exactOptional(),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the <code>SolutionStack</code> deployed with this environment. ',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration template used to originally launch this environment.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Describes this environment.' }),
    ).exactOptional(),
    EndpointURL: EndpointURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'For load-balanced, autoscaling environments, the URL to the LoadBalancer. For single-instance environments, the IP address of the instance.',
        }),
    ).exactOptional(),
    CNAME: DNSCnameSchema.and(
      z.any().openapi({ description: 'The URL to the CNAME for this environment.' }),
    ).exactOptional(),
    DateCreated: CreationDateSchema.and(
      z.any().openapi({ description: 'The creation date for this environment.' }),
    ).exactOptional(),
    DateUpdated: UpdateDateSchema.and(
      z.any().openapi({ description: 'The last modified date for this environment.' }),
    ).exactOptional(),
    Status: EnvironmentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current operational status of the environment:</p> <ul> <li> <p> <code>Launching</code>: Environment is in the process of initial deployment.</p> </li> <li> <p> <code>Updating</code>: Environment is in the process of updating its configuration settings or application version.</p> </li> <li> <p> <code>Ready</code>: Environment is available to have an action performed on it, such as update or terminate.</p> </li> <li> <p> <code>Terminating</code>: Environment is in the shut-down process.</p> </li> <li> <p> <code>Terminated</code>: Environment is not running.</p> </li> </ul>',
        }),
    ).exactOptional(),
    AbortableOperationInProgress: AbortableOperationInProgressSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates if there is an in-progress environment configuration update or application version deployment that you can cancel.</p> <p> <code>true:</code> There is an update in progress. </p> <p> <code>false:</code> There are no updates currently in progress. </p>',
        }),
    ).exactOptional(),
    Health: EnvironmentHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the health status of the environment. AWS Elastic Beanstalk indicates the failure levels for a running environment:</p> <ul> <li> <p> <code>Red</code>: Indicates the environment is not responsive. Occurs when three or more consecutive failures occur for an environment.</p> </li> <li> <p> <code>Yellow</code>: Indicates that something is wrong. Occurs when two consecutive failures occur for an environment.</p> </li> <li> <p> <code>Green</code>: Indicates the environment is healthy and fully functional.</p> </li> <li> <p> <code>Grey</code>: Default health for a new environment. The environment is not fully launched and health checks have not started or health checks are suspended during an <code>UpdateEnvironment</code> or <code>RestartEnvironment</code> request.</p> </li> </ul> <p> Default: <code>Grey</code> </p>',
        }),
    ).exactOptional(),
    HealthStatus: EnvironmentHealthStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the health status of the application running in your environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.',
        }),
    ).exactOptional(),
    Resources: EnvironmentResourcesDescriptionSchema.and(
      z
        .any()
        .openapi({ description: 'The description of the AWS resources used by this environment.' }),
    ).exactOptional(),
    Tier: EnvironmentTierSchema.and(
      z.any().openapi({ description: 'Describes the current tier of this environment.' }),
    ).exactOptional(),
    EnvironmentLinks: EnvironmentLinksSchema.and(
      z.any().openapi({ description: 'A list of links to other environments in the same group.' }),
    ).exactOptional(),
    EnvironmentArn: EnvironmentArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.",
        }),
    ).exactOptional(),
    OperationsRole: OperationsRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the environment\'s operations role. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      AbortableOperationInProgress: true,
      ApplicationName: 'my-app',
      CNAME: 'my-env.elasticbeanstalk.com',
      DateCreated: '2015-08-07T20:48:49.599Z',
      DateUpdated: '2015-08-12T18:15:23.804Z',
      EndpointURL: 'awseb-e-w-AWSEBLoa-14XB83101Q4L-104QXY80921.sa-east-1.elb.amazonaws.com',
      EnvironmentId: 'e-wtp2rpqsej',
      EnvironmentName: 'my-env',
      Health: 'Grey',
      SolutionStackName: '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8',
      Status: 'Updating',
      Tier: { Name: 'WebServer', Type: 'Standard', Version: ' ' },
      VersionLabel: '7f58-stage-150812_025409',
    },
    description: 'Describes the properties of an environment.',
    required: [],
  })
  .openapi('EnvironmentDescription')

const EnvironmentDescriptionsListSchema = z
  .array(EnvironmentDescriptionSchema)
  .openapi('EnvironmentDescriptionsList')

const TokenSchema = z.string().openapi('Token')

const EnvironmentDescriptionsMessageSchema = z
  .object({
    Environments: EnvironmentDescriptionsListSchema.and(
      z.any().openapi({ description: ' Returns an <a>EnvironmentDescription</a> list. ' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'In a paginated request, the token that you can pass in a subsequent request to get the next response page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Environments: [
        {
          AbortableOperationInProgress: false,
          ApplicationName: 'my-app',
          CNAME: 'my-env.elasticbeanstalk.com',
          DateCreated: '2015-08-07T20:48:49.599Z',
          DateUpdated: '2015-08-12T18:16:55.019Z',
          EndpointURL: 'awseb-e-w-AWSEBLoa-1483140XB0Q4L-109QXY8121.us-west-2.elb.amazonaws.com',
          EnvironmentId: 'e-rpqsewtp2j',
          EnvironmentName: 'my-env',
          Health: 'Green',
          SolutionStackName: '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8',
          Status: 'Ready',
          Tier: { Name: 'WebServer', Type: 'Standard', Version: ' ' },
          VersionLabel: '7f58-stage-150812_025409',
        },
      ],
    },
    description: 'Result message containing a list of environment descriptions.',
    required: [],
  })
  .openapi('EnvironmentDescriptionsMessage')

const TooManyEnvironmentsExceptionSchema = z.any().openapi('TooManyEnvironmentsException')

const ApplicationArnSchema = z.string().openapi('ApplicationArn')

const VersionLabelsListSchema = z.array(VersionLabelSchema).openapi('VersionLabelsList')

const ConfigurationTemplateNamesListSchema = z
  .array(ConfigurationTemplateNameSchema)
  .openapi('ConfigurationTemplateNamesList')

const BoxedBooleanSchema = z.boolean().openapi('BoxedBoolean')

const BoxedIntSchema = z.int().openapi('BoxedInt')

const MaxCountRuleSchema = z
  .object({
    Enabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
        }),
    ),
    MaxCount: BoxedIntSchema.and(
      z
        .any()
        .openapi({ description: 'Specify the maximum number of application versions to retain.' }),
    ).exactOptional(),
    DeleteSourceFromS3: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      'A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.',
  })
  .openapi('MaxCountRule')

const MaxAgeRuleSchema = z
  .object({
    Enabled: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
        }),
    ),
    MaxAgeInDays: BoxedIntSchema.and(
      z
        .any()
        .openapi({ description: 'Specify the number of days to retain an application versions.' }),
    ).exactOptional(),
    DeleteSourceFromS3: BoxedBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Enabled'],
    description:
      'A lifecycle rule that deletes application versions after the specified number of days.',
  })
  .openapi('MaxAgeRule')

const ApplicationVersionLifecycleConfigSchema = z
  .object({
    MaxCountRule: MaxCountRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a max count rule to restrict the number of application versions that are retained for an application.',
        }),
    ).exactOptional(),
    MaxAgeRule: MaxAgeRuleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a max age rule to restrict the length of time that application versions are retained for an application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>",
    required: [],
  })
  .openapi('ApplicationVersionLifecycleConfig')

const ApplicationResourceLifecycleConfigSchema = z
  .object({
    ServiceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>",
        }),
    ).exactOptional(),
    VersionLifecycleConfig: ApplicationVersionLifecycleConfigSchema.and(
      z.any().openapi({ description: 'Defines lifecycle settings for application versions.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.',
    required: [],
  })
  .openapi('ApplicationResourceLifecycleConfig')

const ApplicationDescriptionSchema = z
  .object({
    ApplicationArn: ApplicationArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the application.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'User-defined description of the application.' }),
    ).exactOptional(),
    DateCreated: CreationDateSchema.and(
      z.any().openapi({ description: 'The date when the application was created.' }),
    ).exactOptional(),
    DateUpdated: UpdateDateSchema.and(
      z.any().openapi({ description: 'The date when the application was last modified.' }),
    ).exactOptional(),
    Versions: VersionLabelsListSchema.and(
      z.any().openapi({ description: 'The names of the versions for this application.' }),
    ).exactOptional(),
    ConfigurationTemplates: ConfigurationTemplateNamesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The names of the configuration templates associated with this application.',
        }),
    ).exactOptional(),
    ResourceLifecycleConfig: ApplicationResourceLifecycleConfigSchema.and(
      z.any().openapi({ description: 'The lifecycle settings for the application.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the properties of an application.', required: [] })
  .openapi('ApplicationDescription')

const ApplicationDescriptionMessageSchema = z
  .object({
    Application: ApplicationDescriptionSchema.and(
      z.any().openapi({ description: ' The <a>ApplicationDescription</a> of the application. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Application: {
        ApplicationName: 'my-app',
        ConfigurationTemplates: [],
        DateCreated: '2015-08-13T19:15:50.449Z',
        DateUpdated: '2015-08-20T22:34:56.195Z',
        Description: 'my Elastic Beanstalk application',
        Versions: [
          '2fba-stage-150819_234450',
          'bf07-stage-150820_214945',
          '93f8',
          'fd7c-stage-150820_000431',
          '22a0-stage-150819_185942',
        ],
      },
    },
    description: 'Result message containing a single description of an application.',
    required: [],
  })
  .openapi('ApplicationDescriptionMessage')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })).exactOptional(),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a tag applied to a resource in an environment.',
    required: [],
  })
  .openapi('Tag')

const TooManyApplicationsExceptionSchema = z.any().openapi('TooManyApplicationsException')

const ApplicationVersionArnSchema = z.string().openapi('ApplicationVersionArn')

const SourceTypeSchema = z.enum(['Git', 'Zip']).openapi('SourceType')

const SourceRepositorySchema = z.enum(['CodeCommit', 'S3']).openapi('SourceRepository')

const SourceLocationSchema = z
  .string()
  .regex(/.+\/.+/)
  .min(3)
  .max(255)
  .openapi('SourceLocation')

const SourceBuildInformationSchema = z
  .object({
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of repository.</p> <ul> <li> <p> <code>Git</code> </p> </li> <li> <p> <code>Zip</code> </p> </li> </ul>',
        }),
    ),
    SourceRepository: SourceRepositorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Location where the repository is stored.</p> <ul> <li> <p> <code>CodeCommit</code> </p> </li> <li> <p> <code>S3</code> </p> </li> </ul>',
        }),
    ),
    SourceLocation: SourceLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code> </p> <ul> <li> <p>For <code>CodeCommit</code>, the format is the repository name and commit ID, separated by a forward slash. For example, <code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p> </li> <li> <p>For <code>S3</code>, the format is the S3 bucket name and object key, separated by a forward slash. For example, <code>my-s3-bucket/Folders/my-source-file</code>.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['SourceType', 'SourceRepository', 'SourceLocation'],
    description: 'Location of the source code for an application version.',
  })
  .openapi('SourceBuildInformation')

const S3BucketSchema = z.string().max(255).openapi('S3Bucket')

const S3KeySchema = z.string().max(1024).openapi('S3Key')

const S3LocationSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket where the data is located.' }),
    ).exactOptional(),
    S3Key: S3KeySchema.and(
      z.any().openapi({ description: 'The Amazon S3 key where the data is located.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The bucket and key of an item stored in Amazon S3.', required: [] })
  .openapi('S3Location')

const ApplicationVersionStatusSchema = z
  .enum(['Processed', 'Unprocessed', 'Failed', 'Processing', 'Building'])
  .openapi('ApplicationVersionStatus')

const ApplicationVersionDescriptionSchema = z
  .object({
    ApplicationVersionArn: ApplicationVersionArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the application version.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application to which the application version belongs.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the application version.' }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z.any().openapi({ description: 'A unique identifier for the application version.' }),
    ).exactOptional(),
    SourceBuildInformation: SourceBuildInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the version's source code was retrieved from AWS CodeCommit, the location of the source code for the application version.",
        }),
    ).exactOptional(),
    BuildArn: StringSchema.and(
      z.any().openapi({ description: 'Reference to the artifact from the AWS CodeBuild build.' }),
    ).exactOptional(),
    SourceBundle: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The storage location of the application version's source bundle in Amazon S3.",
        }),
    ).exactOptional(),
    DateCreated: CreationDateSchema.and(
      z.any().openapi({ description: 'The creation date of the application version.' }),
    ).exactOptional(),
    DateUpdated: UpdateDateSchema.and(
      z.any().openapi({ description: 'The last modified date of the application version.' }),
    ).exactOptional(),
    Status: ApplicationVersionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The processing status of the application version. Reflects the state of the application version during its creation. Many of the values are only applicable if you specified <code>True</code> for the <code>Process</code> parameter of the <code>CreateApplicationVersion</code> action. The following list describes the possible values.</p> <ul> <li> <p> <code>Unprocessed</code> – Application version wasn't pre-processed or validated. Elastic Beanstalk will validate configuration files during deployment of the application version to an environment.</p> </li> <li> <p> <code>Processing</code> – Elastic Beanstalk is currently processing the application version.</p> </li> <li> <p> <code>Building</code> – Application version is currently undergoing an AWS CodeBuild build.</p> </li> <li> <p> <code>Processed</code> – Elastic Beanstalk was successfully pre-processed and validated.</p> </li> <li> <p> <code>Failed</code> – Either the AWS CodeBuild build failed or configuration files didn't pass validation. This application version isn't usable.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the properties of an application version.', required: [] })
  .openapi('ApplicationVersionDescription')

const ApplicationVersionDescriptionMessageSchema = z
  .object({
    ApplicationVersion: ApplicationVersionDescriptionSchema.and(
      z
        .any()
        .openapi({
          description: ' The <a>ApplicationVersionDescription</a> of the application version. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationVersion: {
        ApplicationName: 'my-app',
        DateCreated: '2015-08-19T18:59:17.646Z',
        DateUpdated: '2015-08-20T22:53:28.871Z',
        Description: 'new description',
        SourceBundle: {
          S3Bucket: 'elasticbeanstalk-us-west-2-0123456789012',
          S3Key: 'my-app/22a0-stage-150819_185942.war',
        },
        VersionLabel: '22a0-stage-150819_185942',
      },
    },
    description: 'Result message wrapping a single description of an application version.',
    required: [],
  })
  .openapi('ApplicationVersionDescriptionMessage')

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .openapi('NonEmptyString')

const ComputeTypeSchema = z
  .enum(['BUILD_GENERAL1_SMALL', 'BUILD_GENERAL1_MEDIUM', 'BUILD_GENERAL1_LARGE'])
  .openapi('ComputeType')

const TooManyApplicationVersionsExceptionSchema = z
  .any()
  .openapi('TooManyApplicationVersionsException')

const S3LocationNotInServiceRegionExceptionSchema = z
  .any()
  .openapi('S3LocationNotInServiceRegionException')

const CodeBuildNotInServiceRegionExceptionSchema = z
  .any()
  .openapi('CodeBuildNotInServiceRegionException')

const ConfigurationDeploymentStatusSchema = z
  .enum(['deployed', 'pending', 'failed'])
  .openapi('ConfigurationDeploymentStatus')

const ResourceNameSchema = z.string().min(1).max(256).openapi('ResourceName')

const OptionNamespaceSchema = z.string().openapi('OptionNamespace')

const ConfigurationOptionNameSchema = z.string().openapi('ConfigurationOptionName')

const ConfigurationOptionValueSchema = z.string().openapi('ConfigurationOptionValue')

const ConfigurationOptionSettingSchema = z
  .object({
    ResourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique resource name for the option setting. Use it for a time–based scaling configuration option.',
        }),
    ).exactOptional(),
    Namespace: OptionNamespaceSchema.and(
      z
        .any()
        .openapi({
          description: "A unique namespace that identifies the option's associated AWS resource.",
        }),
    ).exactOptional(),
    OptionName: ConfigurationOptionNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration option.' }),
    ).exactOptional(),
    Value: ConfigurationOptionValueSchema.and(
      z.any().openapi({ description: 'The current value for the configuration option.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. ',
    required: [],
  })
  .openapi('ConfigurationOptionSetting')

const ConfigurationOptionSettingsListSchema = z
  .array(ConfigurationOptionSettingSchema)
  .openapi('ConfigurationOptionSettingsList')

const ConfigurationSettingsDescriptionSchema = z
  .object({
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the solution stack this configuration set uses.' }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application associated with this configuration set.',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If not <code>null</code>, the name of the configuration template for this configuration set. ',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Describes this configuration set.' }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If not <code>null</code>, the name of the environment for this configuration set. ',
        }),
    ).exactOptional(),
    DeploymentStatus: ConfigurationDeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> If this configuration set is associated with an environment, the <code>DeploymentStatus</code> parameter indicates the deployment status of this configuration set: </p> <ul> <li> <p> <code>null</code>: This configuration is not associated with a running environment.</p> </li> <li> <p> <code>pending</code>: This is a draft configuration that is not deployed to the associated environment but is in the process of deploying.</p> </li> <li> <p> <code>deployed</code>: This is the configuration that is currently deployed to the associated running environment.</p> </li> <li> <p> <code>failed</code>: This is a draft configuration that failed to successfully deploy.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DateCreated: CreationDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in UTC time) when this configuration set was created.',
        }),
    ).exactOptional(),
    DateUpdated: UpdateDateSchema.and(
      z
        .any()
        .openapi({
          description: 'The date (in UTC time) when this configuration set was last modified.',
        }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the configuration options and their values in this configuration set.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationName: 'my-app',
      DateCreated: '2015-08-20T22:39:31Z',
      DateUpdated: '2015-08-20T22:43:11Z',
      SolutionStackName: '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8',
      TemplateName: 'my-template',
    },
    description: 'Describes the settings for a configuration set.',
    required: [],
  })
  .openapi('ConfigurationSettingsDescription')

const TooManyBucketsExceptionSchema = z.any().openapi('TooManyBucketsException')

const TooManyConfigurationTemplatesExceptionSchema = z
  .any()
  .openapi('TooManyConfigurationTemplatesException')

const OptionSpecificationSchema = z
  .object({
    ResourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique resource name for a time-based scaling configuration option.',
        }),
    ).exactOptional(),
    Namespace: OptionNamespaceSchema.and(
      z
        .any()
        .openapi({
          description: "A unique namespace identifying the option's associated AWS resource.",
        }),
    ).exactOptional(),
    OptionName: ConfigurationOptionNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration option.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A specification identifying an individual configuration option.',
    required: [],
  })
  .openapi('OptionSpecification')

const PlatformOwnerSchema = z.string().openapi('PlatformOwner')

const PlatformStatusSchema = z
  .enum(['Creating', 'Failed', 'Ready', 'Deleting', 'Deleted'])
  .openapi('PlatformStatus')

const PlatformCategorySchema = z.string().openapi('PlatformCategory')

const OperatingSystemNameSchema = z.string().openapi('OperatingSystemName')

const OperatingSystemVersionSchema = z.string().openapi('OperatingSystemVersion')

const SupportedTierSchema = z.string().openapi('SupportedTier')

const SupportedTierListSchema = z.array(SupportedTierSchema).openapi('SupportedTierList')

const SupportedAddonSchema = z.string().openapi('SupportedAddon')

const SupportedAddonListSchema = z.array(SupportedAddonSchema).openapi('SupportedAddonList')

const PlatformLifecycleStateSchema = z.string().openapi('PlatformLifecycleState')

const PlatformVersionSchema = z.string().openapi('PlatformVersion')

const BranchNameSchema = z.string().openapi('BranchName')

const PlatformBranchLifecycleStateSchema = z.string().openapi('PlatformBranchLifecycleState')

const PlatformSummarySchema = z
  .object({
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    PlatformOwner: PlatformOwnerSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS account ID of the person who created the platform version.',
        }),
    ).exactOptional(),
    PlatformStatus: PlatformStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the platform version. You can create an environment from the platform version once it is ready.',
        }),
    ).exactOptional(),
    PlatformCategory: PlatformCategorySchema.and(
      z.any().openapi({ description: 'The category of platform version.' }),
    ).exactOptional(),
    OperatingSystemName: OperatingSystemNameSchema.and(
      z.any().openapi({ description: 'The operating system used by the platform version.' }),
    ).exactOptional(),
    OperatingSystemVersion: OperatingSystemVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the operating system used by the platform version.',
        }),
    ).exactOptional(),
    SupportedTierList: SupportedTierListSchema.and(
      z.any().openapi({ description: 'The tiers in which the platform version runs.' }),
    ).exactOptional(),
    SupportedAddonList: SupportedAddonListSchema.and(
      z.any().openapi({ description: 'The additions associated with the platform version.' }),
    ).exactOptional(),
    PlatformLifecycleState: PlatformLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the platform version in its lifecycle.</p> <p>Possible values: <code>recommended</code> | empty</p> <p>If an empty value is returned, the platform version is supported but isn't the recommended one for its branch.</p>",
        }),
    ).exactOptional(),
    PlatformVersion: PlatformVersionSchema.and(
      z.any().openapi({ description: 'The version string of the platform version.' }),
    ).exactOptional(),
    PlatformBranchName: BranchNameSchema.and(
      z
        .any()
        .openapi({ description: 'The platform branch to which the platform version belongs.' }),
    ).exactOptional(),
    PlatformBranchLifecycleState: PlatformBranchLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the platform version's branch in its lifecycle.</p> <p>Possible values: <code>beta</code> | <code>supported</code> | <code>deprecated</code> | <code>retired</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a platform version.', required: [] })
  .openapi('PlatformSummary')

const ARNSchema = z.string().openapi('ARN')

const BuilderSchema = z
  .object({
    ARN: ARNSchema.and(z.any().openapi({ description: 'The ARN of the builder.' })).exactOptional(),
  })
  .openapi({ description: 'The builder used to build the custom platform.', required: [] })
  .openapi('Builder')

const CreatePlatformVersionResultSchema = z
  .object({
    PlatformSummary: PlatformSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Detailed information about the new version of the custom platform.',
        }),
    ).exactOptional(),
    Builder: BuilderSchema.and(
      z.any().openapi({ description: 'The builder used to create the custom platform.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreatePlatformVersionResult')

const TooManyPlatformsExceptionSchema = z.any().openapi('TooManyPlatformsException')

const CreateStorageLocationResultMessageSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The name of the Amazon S3 bucket created.' }),
    ).exactOptional(),
  })
  .openapi({
    example: { S3Bucket: 'elasticbeanstalk-us-west-2-0123456789012' },
    description: 'Results of a <a>CreateStorageLocationResult</a> call.',
    required: [],
  })
  .openapi('CreateStorageLocationResultMessage')

const S3SubscriptionRequiredExceptionSchema = z.any().openapi('S3SubscriptionRequiredException')

const OperationInProgressExceptionSchema = z.any().openapi('OperationInProgressException')

const SourceBundleDeletionExceptionSchema = z.any().openapi('SourceBundleDeletionException')

const DeletePlatformVersionResultSchema = z
  .object({
    PlatformSummary: PlatformSummarySchema.and(
      z
        .any()
        .openapi({ description: 'Detailed information about the version of the custom platform.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeletePlatformVersionResult')

const PlatformVersionStillReferencedExceptionSchema = z
  .any()
  .openapi('PlatformVersionStillReferencedException')

const ResourceQuotaSchema = z
  .object({
    Maximum: BoxedIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances of this Elastic Beanstalk resource type that an AWS account can use.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.",
    required: [],
  })
  .openapi('ResourceQuota')

const ResourceQuotasSchema = z
  .object({
    ApplicationQuota: ResourceQuotaSchema.and(
      z.any().openapi({ description: 'The quota for applications in the AWS account.' }),
    ).exactOptional(),
    ApplicationVersionQuota: ResourceQuotaSchema.and(
      z.any().openapi({ description: 'The quota for application versions in the AWS account.' }),
    ).exactOptional(),
    EnvironmentQuota: ResourceQuotaSchema.and(
      z.any().openapi({ description: 'The quota for environments in the AWS account.' }),
    ).exactOptional(),
    ConfigurationTemplateQuota: ResourceQuotaSchema.and(
      z.any().openapi({ description: 'The quota for configuration templates in the AWS account.' }),
    ).exactOptional(),
    CustomPlatformQuota: ResourceQuotaSchema.and(
      z.any().openapi({ description: 'The quota for custom platforms in the AWS account.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.',
    required: [],
  })
  .openapi('ResourceQuotas')

const DescribeAccountAttributesResultSchema = z
  .object({
    ResourceQuotas: ResourceQuotasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Elastic Beanstalk resource quotas associated with the calling AWS account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAccountAttributesResult')

const ApplicationVersionDescriptionListSchema = z
  .array(ApplicationVersionDescriptionSchema)
  .openapi('ApplicationVersionDescriptionList')

const ApplicationVersionDescriptionsMessageSchema = z
  .object({
    ApplicationVersions: ApplicationVersionDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of <code>ApplicationVersionDescription</code> objects sorted in order of creation.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'In a paginated request, the token that you can pass in a subsequent request to get the next response page.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationVersions: [
        {
          ApplicationName: 'my-app',
          DateCreated: '2015-07-23T01:32:26.079Z',
          DateUpdated: '2015-07-23T01:32:26.079Z',
          Description: 'update cover page',
          SourceBundle: {
            S3Bucket: 'elasticbeanstalk-us-west-2-015321684451',
            S3Key: 'my-app/5026-stage-150723_224258.war',
          },
          VersionLabel: 'v2',
        },
        {
          ApplicationName: 'my-app',
          DateCreated: '2015-07-23T22:26:10.816Z',
          DateUpdated: '2015-07-23T22:26:10.816Z',
          Description: 'initial version',
          SourceBundle: {
            S3Bucket: 'elasticbeanstalk-us-west-2-015321684451',
            S3Key: 'my-app/5026-stage-150723_222618.war',
          },
          VersionLabel: 'v1',
        },
      ],
    },
    description: 'Result message wrapping a list of application version descriptions.',
    required: [],
  })
  .openapi('ApplicationVersionDescriptionsMessage')

const ApplicationDescriptionListSchema = z
  .array(ApplicationDescriptionSchema)
  .openapi('ApplicationDescriptionList')

const ApplicationDescriptionsMessageSchema = z
  .object({
    Applications: ApplicationDescriptionListSchema.and(
      z
        .any()
        .openapi({
          description: 'This parameter contains a list of <a>ApplicationDescription</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Applications: [
        {
          ApplicationName: 'ruby',
          ConfigurationTemplates: [],
          DateCreated: '2015-08-13T21:05:44.376Z',
          DateUpdated: '2015-08-13T21:05:44.376Z',
          Versions: ['Sample Application'],
        },
        {
          ApplicationName: 'pythonsample',
          ConfigurationTemplates: [],
          DateCreated: '2015-08-13T19:05:43.637Z',
          DateUpdated: '2015-08-13T19:05:43.637Z',
          Description: 'Application created from the EB CLI using "eb init"',
          Versions: ['Sample Application'],
        },
        {
          ApplicationName: 'nodejs-example',
          ConfigurationTemplates: [],
          DateCreated: '2015-08-06T17:50:02.486Z',
          DateUpdated: '2015-08-06T17:50:02.486Z',
          Versions: ['add elasticache', 'First Release'],
        },
      ],
    },
    description: 'Result message containing a list of application descriptions.',
    required: [],
  })
  .openapi('ApplicationDescriptionsMessage')

const ConfigurationOptionDefaultValueSchema = z.string().openapi('ConfigurationOptionDefaultValue')

const ConfigurationOptionSeveritySchema = z.string().openapi('ConfigurationOptionSeverity')

const UserDefinedOptionSchema = z.boolean().openapi('UserDefinedOption')

const ConfigurationOptionValueTypeSchema = z
  .enum(['Scalar', 'List'])
  .openapi('ConfigurationOptionValueType')

const ConfigurationOptionPossibleValueSchema = z
  .string()
  .openapi('ConfigurationOptionPossibleValue')

const ConfigurationOptionPossibleValuesSchema = z
  .array(ConfigurationOptionPossibleValueSchema)
  .openapi('ConfigurationOptionPossibleValues')

const OptionRestrictionMinValueSchema = z.int().openapi('OptionRestrictionMinValue')

const OptionRestrictionMaxValueSchema = z.int().openapi('OptionRestrictionMaxValue')

const OptionRestrictionMaxLengthSchema = z.int().openapi('OptionRestrictionMaxLength')

const RegexPatternSchema = z.string().openapi('RegexPattern')

const RegexLabelSchema = z.string().openapi('RegexLabel')

const OptionRestrictionRegexSchema = z
  .object({
    Pattern: RegexPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'The regular expression pattern that a string configuration option value with this restriction must match.',
        }),
    ).exactOptional(),
    Label: RegexLabelSchema.and(
      z.any().openapi({ description: 'A unique name representing this regular expression.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A regular expression representing a restriction on a string configuration option value.',
    required: [],
  })
  .openapi('OptionRestrictionRegex')

const ConfigurationOptionDescriptionSchema = z
  .object({
    Namespace: OptionNamespaceSchema.and(
      z
        .any()
        .openapi({
          description: "A unique namespace identifying the option's associated AWS resource.",
        }),
    ).exactOptional(),
    Name: ConfigurationOptionNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration option.' }),
    ).exactOptional(),
    DefaultValue: ConfigurationOptionDefaultValueSchema.and(
      z.any().openapi({ description: 'The default value for this configuration option.' }),
    ).exactOptional(),
    ChangeSeverity: ConfigurationOptionSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An indication of which action is required if the value for this configuration option changes:</p> <ul> <li> <p> <code>NoInterruption</code> : There is no interruption to the environment or application availability.</p> </li> <li> <p> <code>RestartEnvironment</code> : The environment is entirely restarted, all AWS resources are deleted and recreated, and the environment is unavailable during the process.</p> </li> <li> <p> <code>RestartApplicationServer</code> : The environment is available the entire time. However, a short application outage occurs when the application servers on the running Amazon EC2 instances are restarted.</p> </li> </ul>',
        }),
    ).exactOptional(),
    UserDefined: UserDefinedOptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An indication of whether the user defined this configuration option:</p> <ul> <li> <p> <code>true</code> : This configuration option was defined by the user. It is a valid choice for specifying if this as an <code>Option to Remove</code> when updating configuration settings. </p> </li> <li> <p> <code>false</code> : This configuration was not defined by the user.</p> </li> </ul> <p> Constraint: You can remove only <code>UserDefined</code> options from a configuration. </p> <p> Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    ValueType: ConfigurationOptionValueTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An indication of which type of values this option has and whether it is allowable to select one or more than one of the possible values:</p> <ul> <li> <p> <code>Scalar</code> : Values for this option are a single selection from the possible values, or an unformatted string, or numeric value governed by the <code>MIN/MAX/Regex</code> constraints.</p> </li> <li> <p> <code>List</code> : Values for this option are multiple selections from the possible values.</p> </li> <li> <p> <code>Boolean</code> : Values for this option are either <code>true</code> or <code>false</code> .</p> </li> <li> <p> <code>Json</code> : Values for this option are a JSON representation of a <code>ConfigDocument</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ValueOptions: ConfigurationOptionPossibleValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, values for the configuration option are selected from this list.',
        }),
    ).exactOptional(),
    MinValue: OptionRestrictionMinValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, the configuration option must be a numeric value greater than this value.',
        }),
    ).exactOptional(),
    MaxValue: OptionRestrictionMaxValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, the configuration option must be a numeric value less than this value.',
        }),
    ).exactOptional(),
    MaxLength: OptionRestrictionMaxLengthSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, the configuration option must be a string value no longer than this value.',
        }),
    ).exactOptional(),
    Regex: OptionRestrictionRegexSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, the configuration option must be a string value that satisfies this regular expression.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the possible values for a configuration option.',
    required: [],
  })
  .openapi('ConfigurationOptionDescription')

const ConfigurationOptionDescriptionsListSchema = z
  .array(ConfigurationOptionDescriptionSchema)
  .openapi('ConfigurationOptionDescriptionsList')

const ConfigurationOptionsDescriptionSchema = z
  .object({
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the solution stack these configuration options belong to.',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    Options: ConfigurationOptionDescriptionsListSchema.and(
      z.any().openapi({ description: ' A list of <a>ConfigurationOptionDescription</a>. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Options: [
        {
          ChangeSeverity: 'NoInterruption',
          DefaultValue: '30',
          MaxValue: 300,
          MinValue: 5,
          Name: 'Interval',
          Namespace: 'aws:elb:healthcheck',
          UserDefined: false,
          ValueType: 'Scalar',
        },
        {
          ChangeSeverity: 'NoInterruption',
          DefaultValue: '2000000',
          MinValue: 0,
          Name: 'LowerThreshold',
          Namespace: 'aws:autoscaling:trigger',
          UserDefined: false,
          ValueType: 'Scalar',
        },
      ],
    },
    description: 'Describes the settings for a specified configuration set.',
    required: [],
  })
  .openapi('ConfigurationOptionsDescription')

const ConfigurationSettingsDescriptionListSchema = z
  .array(ConfigurationSettingsDescriptionSchema)
  .openapi('ConfigurationSettingsDescriptionList')

const ConfigurationSettingsDescriptionsSchema = z
  .object({
    ConfigurationSettings: ConfigurationSettingsDescriptionListSchema.and(
      z.any().openapi({ description: ' A list of <a>ConfigurationSettingsDescription</a>. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ConfigurationSettings: [
        {
          ApplicationName: 'my-app',
          DateCreated: '2015-08-13T19:16:25Z',
          DateUpdated: '2015-08-13T23:30:07Z',
          DeploymentStatus: 'deployed',
          Description: 'Environment created from the EB CLI using "eb create"',
          EnvironmentName: 'my-env',
          OptionSettings: [
            {
              Namespace: 'aws:autoscaling:asg',
              OptionName: 'Availability Zones',
              ResourceName: 'AWSEBAutoScalingGroup',
              Value: 'Any',
            },
            {
              Namespace: 'aws:autoscaling:asg',
              OptionName: 'Cooldown',
              ResourceName: 'AWSEBAutoScalingGroup',
              Value: '360',
            },
            {
              Namespace: 'aws:elb:policies',
              OptionName: 'ConnectionDrainingTimeout',
              ResourceName: 'AWSEBLoadBalancer',
              Value: '20',
            },
            {
              Namespace: 'aws:elb:policies',
              OptionName: 'ConnectionSettingIdleTimeout',
              ResourceName: 'AWSEBLoadBalancer',
              Value: '60',
            },
          ],
          SolutionStackName: '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8',
        },
      ],
    },
    description:
      'The results from a request to change the configuration settings of an environment.',
    required: [],
  })
  .openapi('ConfigurationSettingsDescriptions')

const CauseSchema = z.string().min(1).max(255).openapi('Cause')

const CausesSchema = z.array(CauseSchema).openapi('Causes')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const RequestCountSchema = z.int().openapi('RequestCount')

const StatusCodesSchema = z
  .object({
    Status2xx: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of requests over the last 10 seconds that resulted in a 2xx (200, 201, etc.) status code.',
        }),
    ).exactOptional(),
    Status3xx: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of requests over the last 10 seconds that resulted in a 3xx (300, 301, etc.) status code.',
        }),
    ).exactOptional(),
    Status4xx: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of requests over the last 10 seconds that resulted in a 4xx (400, 401, etc.) status code.',
        }),
    ).exactOptional(),
    Status5xx: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of requests over the last 10 seconds that resulted in a 5xx (500, 501, etc.) status code.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.',
    required: [],
  })
  .openapi('StatusCodes')

const NullableDoubleSchema = z.float64().openapi('NullableDouble')

const LatencySchema = z
  .object({
    P999: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 0.1 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P99: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 1 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P95: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 5 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P90: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 10 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P85: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 15 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P75: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 25 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P50: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 50 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
    P10: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The average latency for the slowest 90 percent of requests over the last 10 seconds.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the average latency for the slowest X percent of requests over the last 10 seconds.',
    required: [],
  })
  .openapi('Latency')

const ApplicationMetricsSchema = z
  .object({
    Duration: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time that the metrics cover (usually 10 seconds). For example, you might have 5 requests (<code>request_count</code>) within the most recent time slice of 10 seconds (<code>duration</code>).',
        }),
    ).exactOptional(),
    RequestCount: RequestCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'Average number of requests handled by the web server per second over the last 10 seconds.',
        }),
    ).exactOptional(),
    StatusCodes: StatusCodesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response.',
        }),
    ).exactOptional(),
    Latency: LatencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the average latency for the slowest X percent of requests over the last 10 seconds. Latencies are in seconds with one millisecond resolution.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Application request metrics for an AWS Elastic Beanstalk environment.',
    required: [],
  })
  .openapi('ApplicationMetrics')

const InstanceHealthSummarySchema = z
  .object({
    NoData: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Grey.</b> AWS Elastic Beanstalk and the health agent are reporting no data on an instance.',
        }),
    ).exactOptional(),
    Unknown: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Grey.</b> AWS Elastic Beanstalk and the health agent are reporting an insufficient amount of data on an instance.',
        }),
    ).exactOptional(),
    Pending: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Grey.</b> An operation is in progress on an instance within the command timeout.',
        }),
    ).exactOptional(),
    Ok: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Green.</b> An instance is passing health checks and the health agent is not reporting any problems.',
        }),
    ).exactOptional(),
    Info: NullableIntegerSchema.and(
      z
        .any()
        .openapi({ description: ' <b>Green.</b> An operation is in progress on an instance.' }),
    ).exactOptional(),
    Warning: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Yellow.</b> The health agent is reporting a moderate number of request failures or other issues for an instance or environment.',
        }),
    ).exactOptional(),
    Degraded: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Red.</b> The health agent is reporting a high number of request failures or other issues for an instance or environment.',
        }),
    ).exactOptional(),
    Severe: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <b>Red.</b> The health agent is reporting a very high number of request failures or other issues for an instance or environment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents summary information about the health of an instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.',
    required: [],
  })
  .openapi('InstanceHealthSummary')

const RefreshedAtSchema = z.iso.datetime({ offset: true }).openapi('RefreshedAt')

const DescribeEnvironmentHealthResultSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: "The environment's name." }),
    ).exactOptional(),
    HealthStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health status</a> of the environment. For example, <code>Ok</code>.',
        }),
    ).exactOptional(),
    Status: EnvironmentHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            "The environment's operational status. <code>Ready</code>, <code>Launching</code>, <code>Updating</code>, <code>Terminating</code>, or <code>Terminated</code>.",
        }),
    ).exactOptional(),
    Color: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health color</a> of the environment.',
        }),
    ).exactOptional(),
    Causes: CausesSchema.and(
      z
        .any()
        .openapi({
          description:
            "Descriptions of the data that contributed to the environment's current health status.",
        }),
    ).exactOptional(),
    ApplicationMetrics: ApplicationMetricsSchema.and(
      z.any().openapi({ description: 'Application request metrics for the environment.' }),
    ).exactOptional(),
    InstancesHealth: InstanceHealthSummarySchema.and(
      z
        .any()
        .openapi({
          description: 'Summary health information for the instances in the environment.',
        }),
    ).exactOptional(),
    RefreshedAt: RefreshedAtSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the health information was retrieved.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ApplicationMetrics: {
        Duration: 10,
        Latency: {
          P10: 0.001,
          P50: 0.001,
          P75: 0.002,
          P85: 0.003,
          P90: 0.003,
          P95: 0.004,
          P99: 0.004,
          P999: 0.004,
        },
        RequestCount: 45,
        StatusCodes: { Status2xx: 45, Status3xx: 0, Status4xx: 0, Status5xx: 0 },
      },
      Causes: [],
      Color: 'Green',
      EnvironmentName: 'my-env',
      HealthStatus: 'Ok',
      InstancesHealth: {
        Degraded: 0,
        Info: 0,
        NoData: 0,
        Ok: 1,
        Pending: 0,
        Severe: 0,
        Unknown: 0,
        Warning: 0,
      },
      RefreshedAt: '2015-08-20T21:09:18Z',
    },
    description: 'Health details for an AWS Elastic Beanstalk environment.',
    required: [],
  })
  .openapi('DescribeEnvironmentHealthResult')

const EnvironmentHealthAttributeSchema = z
  .enum([
    'Status',
    'Color',
    'Causes',
    'ApplicationMetrics',
    'InstancesHealth',
    'All',
    'HealthStatus',
    'RefreshedAt',
  ])
  .openapi('EnvironmentHealthAttribute')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const FailureTypeSchema = z
  .enum([
    'UpdateCancelled',
    'CancellationFailed',
    'RollbackFailed',
    'RollbackSuccessful',
    'InternalFailure',
    'InvalidEnvironmentState',
    'PermissionsError',
  ])
  .openapi('FailureType')

const ActionHistoryStatusSchema = z
  .enum(['Completed', 'Failed', 'Unknown'])
  .openapi('ActionHistoryStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ManagedActionHistoryItemSchema = z
  .object({
    ActionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the managed action.' }),
    ).exactOptional(),
    ActionType: ActionTypeSchema.and(
      z.any().openapi({ description: 'The type of the managed action.' }),
    ).exactOptional(),
    ActionDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the managed action.' }),
    ).exactOptional(),
    FailureType: FailureTypeSchema.and(
      z.any().openapi({ description: 'If the action failed, the type of failure.' }),
    ).exactOptional(),
    Status: ActionHistoryStatusSchema.and(
      z.any().openapi({ description: 'The status of the action.' }),
    ).exactOptional(),
    FailureDescription: StringSchema.and(
      z.any().openapi({ description: 'If the action failed, a description of the failure.' }),
    ).exactOptional(),
    ExecutedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the action started executing.' }),
    ).exactOptional(),
    FinishedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the action finished executing.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The record of a completed or failed managed action.', required: [] })
  .openapi('ManagedActionHistoryItem')

const ManagedActionHistoryItemsSchema = z
  .array(ManagedActionHistoryItemSchema)
  .min(1)
  .max(100)
  .openapi('ManagedActionHistoryItems')

const DescribeEnvironmentManagedActionHistoryResultSchema = z
  .object({
    ManagedActionHistoryItems: ManagedActionHistoryItemsSchema.and(
      z.any().openapi({ description: 'A list of completed and failed managed actions.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A pagination token that you pass to <a>DescribeEnvironmentManagedActionHistory</a> to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A result message containing a list of completed and failed managed actions.',
    required: [],
  })
  .openapi('DescribeEnvironmentManagedActionHistoryResult')

const ActionStatusSchema = z
  .enum(['Scheduled', 'Pending', 'Running', 'Unknown'])
  .openapi('ActionStatus')

const ManagedActionSchema = z
  .object({
    ActionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the managed action.' }),
    ).exactOptional(),
    ActionDescription: StringSchema.and(
      z.any().openapi({ description: 'A description of the managed action.' }),
    ).exactOptional(),
    ActionType: ActionTypeSchema.and(
      z.any().openapi({ description: 'The type of managed action.' }),
    ).exactOptional(),
    Status: ActionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the managed action. If the action is <code>Scheduled</code>, you can apply it immediately with <a>ApplyEnvironmentManagedAction</a>.',
        }),
    ).exactOptional(),
    WindowStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time of the maintenance window in which the managed action will execute.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The record of an upcoming or in-progress managed action.',
    required: [],
  })
  .openapi('ManagedAction')

const ManagedActionsSchema = z.array(ManagedActionSchema).min(1).max(100).openapi('ManagedActions')

const DescribeEnvironmentManagedActionsResultSchema = z
  .object({
    ManagedActions: ManagedActionsSchema.and(
      z.any().openapi({ description: 'A list of upcoming and in-progress managed actions.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The result message containing a list of managed actions.',
    required: [],
  })
  .openapi('DescribeEnvironmentManagedActionsResult')

const ResourceIdSchema = z.string().openapi('ResourceId')

const AutoScalingGroupSchema = z
  .object({
    Name: ResourceIdSchema.and(
      z.any().openapi({ description: 'The name of the <code>AutoScalingGroup</code> . ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Auto Scaling launch configuration.', required: [] })
  .openapi('AutoScalingGroup')

const AutoScalingGroupListSchema = z.array(AutoScalingGroupSchema).openapi('AutoScalingGroupList')

const InstanceSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon EC2 instance.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The description of an Amazon EC2 instance.', required: [] })
  .openapi('Instance')

const InstanceListSchema = z.array(InstanceSchema).openapi('InstanceList')

const LaunchConfigurationSchema = z
  .object({
    Name: ResourceIdSchema.and(
      z.any().openapi({ description: 'The name of the launch configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Auto Scaling launch configuration.', required: [] })
  .openapi('LaunchConfiguration')

const LaunchConfigurationListSchema = z
  .array(LaunchConfigurationSchema)
  .openapi('LaunchConfigurationList')

const LaunchTemplateSchema = z
  .object({
    Id: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the launch template.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an Amazon EC2 launch template.', required: [] })
  .openapi('LaunchTemplate')

const LaunchTemplateListSchema = z.array(LaunchTemplateSchema).openapi('LaunchTemplateList')

const LoadBalancerSchema = z
  .object({
    Name: ResourceIdSchema.and(
      z.any().openapi({ description: 'The name of the LoadBalancer.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a LoadBalancer.', required: [] })
  .openapi('LoadBalancer')

const LoadBalancerListSchema = z.array(LoadBalancerSchema).openapi('LoadBalancerList')

const TriggerSchema = z
  .object({
    Name: ResourceIdSchema.and(
      z.any().openapi({ description: 'The name of the trigger.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a trigger.', required: [] })
  .openapi('Trigger')

const TriggerListSchema = z.array(TriggerSchema).openapi('TriggerList')

const QueueSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the queue.' }),
    ).exactOptional(),
    URL: StringSchema.and(
      z.any().openapi({ description: 'The URL of the queue.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a queue.', required: [] })
  .openapi('Queue')

const QueueListSchema = z.array(QueueSchema).openapi('QueueList')

const EnvironmentResourceDescriptionSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of the environment.' }),
    ).exactOptional(),
    AutoScalingGroups: AutoScalingGroupListSchema.and(
      z
        .any()
        .openapi({ description: ' The <code>AutoScalingGroups</code> used by this environment. ' }),
    ).exactOptional(),
    Instances: InstanceListSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 instances used by this environment.' }),
    ).exactOptional(),
    LaunchConfigurations: LaunchConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Auto Scaling launch configurations in use by this environment.',
        }),
    ).exactOptional(),
    LaunchTemplates: LaunchTemplateListSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon EC2 launch templates in use by this environment.' }),
    ).exactOptional(),
    LoadBalancers: LoadBalancerListSchema.and(
      z.any().openapi({ description: 'The LoadBalancers in use by this environment.' }),
    ).exactOptional(),
    Triggers: TriggerListSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>AutoScaling</code> triggers in use by this environment. ',
        }),
    ).exactOptional(),
    Queues: QueueListSchema.and(
      z.any().openapi({ description: 'The queues used by this environment.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes the AWS resources in use by this environment. This data is live.',
    required: [],
  })
  .openapi('EnvironmentResourceDescription')

const EnvironmentResourceDescriptionsMessageSchema = z
  .object({
    EnvironmentResources: EnvironmentResourceDescriptionSchema.and(
      z.any().openapi({ description: ' A list of <a>EnvironmentResourceDescription</a>. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      EnvironmentResources: {
        AutoScalingGroups: [
          { Name: 'awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingGroup-QSB2ZO88SXZT' },
        ],
        EnvironmentName: 'my-env',
        Instances: [{ Id: 'i-0c91c786' }],
        LaunchConfigurations: [
          { Name: 'awseb-e-qu3fyyjyjs-stack-AWSEBAutoScalingLaunchConfiguration-1UUVQIBC96TQ2' },
        ],
        LoadBalancers: [{ Name: 'awseb-e-q-AWSEBLoa-1EEPZ0K98BIF0' }],
        Queues: [],
        Triggers: [],
      },
    },
    description: 'Result message containing a list of environment resource descriptions.',
    required: [],
  })
  .openapi('EnvironmentResourceDescriptionsMessage')

const EventDateSchema = z.iso.datetime({ offset: true }).openapi('EventDate')

const EventMessageSchema = z.string().openapi('EventMessage')

const RequestIdSchema = z.string().openapi('RequestId')

const EventSeveritySchema = z
  .enum(['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'])
  .openapi('EventSeverity')

const EventDescriptionSchema = z
  .object({
    EventDate: EventDateSchema.and(
      z.any().openapi({ description: 'The date when the event occurred.' }),
    ).exactOptional(),
    Message: EventMessageSchema.and(
      z.any().openapi({ description: 'The event message.' }),
    ).exactOptional(),
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The application associated with the event.' }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description: 'The release label for the application version associated with this event.',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration associated with this event.' }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of the environment associated with this event.' }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    RequestId: RequestIdSchema.and(
      z
        .any()
        .openapi({ description: 'The web service request ID for the activity of this event.' }),
    ).exactOptional(),
    Severity: EventSeveritySchema.and(
      z.any().openapi({ description: 'The severity level of this event.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an event.', required: [] })
  .openapi('EventDescription')

const EventDescriptionListSchema = z.array(EventDescriptionSchema).openapi('EventDescriptionList')

const EventDescriptionsMessageSchema = z
  .object({
    Events: EventDescriptionListSchema.and(
      z.any().openapi({ description: ' A list of <a>EventDescription</a>. ' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If returned, this indicates that there are more results to obtain. Use this token in the next <a>DescribeEvents</a> call to get the next batch of events. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      Events: [
        {
          ApplicationName: 'my-app',
          EnvironmentName: 'my-env',
          EventDate: '2015-08-20T07:06:53.535Z',
          Message: 'Environment health has transitioned from Info to Ok.',
          Severity: 'INFO',
        },
        {
          ApplicationName: 'my-app',
          EnvironmentName: 'my-env',
          EventDate: '2015-08-20T07:06:02.049Z',
          Message: 'Environment update completed successfully.',
          RequestId: 'b7f3960b-4709-11e5-ba1e-07e16200da41',
          Severity: 'INFO',
        },
        {
          ApplicationName: 'my-app',
          EnvironmentName: 'my-env',
          EventDate: '2015-08-13T19:16:27.561Z',
          Message:
            'Using elasticbeanstalk-us-west-2-012445113685 as Amazon S3 storage bucket for environment data.',
          RequestId: 'ca8dfbf6-41ef-11e5-988b-651aa638f46b',
          Severity: 'INFO',
        },
        {
          ApplicationName: 'my-app',
          EnvironmentName: 'my-env',
          EventDate: '2015-08-13T19:16:26.581Z',
          Message: 'createEnvironment is starting.',
          RequestId: 'cdfba8f6-41ef-11e5-988b-65638f41aa6b',
          Severity: 'INFO',
        },
      ],
    },
    description: 'Result message wrapping a list of event descriptions.',
    required: [],
  })
  .openapi('EventDescriptionsMessage')

const InstanceIdSchema = z.string().min(1).max(255).openapi('InstanceId')

const LaunchedAtSchema = z.iso.datetime({ offset: true }).openapi('LaunchedAt')

const CPUUtilizationSchema = z
  .object({
    User: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Percentage of time that the CPU has spent in the <code>User</code> state over the last 10 seconds.',
        }),
    ).exactOptional(),
    Nice: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>Nice</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
    System: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>System</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
    Idle: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Percentage of time that the CPU has spent in the <code>Idle</code> state over the last 10 seconds.',
        }),
    ).exactOptional(),
    IOWait: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>I/O Wait</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
    IRQ: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>IRQ</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
    SoftIRQ: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Linux environments only.</p> <p>Percentage of time that the CPU has spent in the <code>SoftIRQ</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
    Privileged: NullableDoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Available on Windows environments only.</p> <p>Percentage of time that the CPU has spent in the <code>Privileged</code> state over the last 10 seconds.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'CPU utilization metrics for an instance.', required: [] })
  .openapi('CPUUtilization')

const LoadAverageValueSchema = z.float64().openapi('LoadAverageValue')

const LoadAverageSchema = z.array(LoadAverageValueSchema).openapi('LoadAverage')

const SystemStatusSchema = z
  .object({
    CPUUtilization: CPUUtilizationSchema.and(
      z.any().openapi({ description: 'CPU utilization metrics for the instance.' }),
    ).exactOptional(),
    LoadAverage: LoadAverageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Load average in the last 1-minute, 5-minute, and 15-minute periods. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-metrics.html#health-enhanced-metrics-os">Operating System Metrics</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'CPU utilization and load average metrics for an Amazon EC2 instance.',
    required: [],
  })
  .openapi('SystemStatus')

const NullableLongSchema = z.int().openapi('NullableLong')

const DeploymentTimestampSchema = z.iso.datetime({ offset: true }).openapi('DeploymentTimestamp')

const DeploymentSchema = z
  .object({
    VersionLabel: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version label of the application version in the deployment.',
        }),
    ).exactOptional(),
    DeploymentId: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the deployment. This number increases by one each time that you deploy source code or change instance configuration settings.',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the deployment:</p> <ul> <li> <p> <code>In Progress</code> : The deployment is in progress.</p> </li> <li> <p> <code>Deployed</code> : The deployment succeeded.</p> </li> <li> <p> <code>Failed</code> : The deployment failed.</p> </li> </ul>',
        }),
    ).exactOptional(),
    DeploymentTime: DeploymentTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For in-progress deployments, the time that the deployment started.</p> <p>For completed deployments, the time that the deployment ended.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an application version deployment.', required: [] })
  .openapi('Deployment')

const SingleInstanceHealthSchema = z
  .object({
    InstanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon EC2 instance.' }),
    ).exactOptional(),
    HealthStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the health status of the specified instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.',
        }),
    ).exactOptional(),
    Color: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the color indicator that gives you information about the health of the EC2 instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.',
        }),
    ).exactOptional(),
    Causes: CausesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the causes, which provide more information about the current health status.',
        }),
    ).exactOptional(),
    LaunchedAt: LaunchedAtSchema.and(
      z.any().openapi({ description: 'The time at which the EC2 instance was launched.' }),
    ).exactOptional(),
    ApplicationMetrics: ApplicationMetricsSchema.and(
      z.any().openapi({ description: 'Request metrics from your application.' }),
    ).exactOptional(),
    System: SystemStatusSchema.and(
      z.any().openapi({ description: 'Operating system metrics from the instance.' }),
    ).exactOptional(),
    Deployment: DeploymentSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the most recent deployment to an instance.' }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z.any().openapi({ description: 'The availability zone in which the instance runs.' }),
    ).exactOptional(),
    InstanceType: StringSchema.and(
      z.any().openapi({ description: "The instance's type." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.',
    required: [],
  })
  .openapi('SingleInstanceHealth')

const InstanceHealthListSchema = z.array(SingleInstanceHealthSchema).openapi('InstanceHealthList')

const NextTokenSchema = z.string().min(1).max(100).openapi('NextToken')

const DescribeInstancesHealthResultSchema = z
  .object({
    InstanceHealthList: InstanceHealthListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Detailed health information about each instance.</p> <p>The output differs slightly between Linux and Windows environments. There is a difference in the members that are supported under the <code>&lt;CPUUtilization&gt;</code> type.</p>',
        }),
    ).exactOptional(),
    RefreshedAt: RefreshedAtSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the health information was retrieved.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'Pagination token for the next page of results, if available.' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      InstanceHealthList: [
        {
          ApplicationMetrics: {
            Duration: 10,
            Latency: {
              P10: 0,
              P50: 0.001,
              P75: 0.002,
              P85: 0.003,
              P90: 0.004,
              P95: 0.005,
              P99: 0.006,
              P999: 0.006,
            },
            RequestCount: 48,
            StatusCodes: { Status2xx: 47, Status3xx: 0, Status4xx: 1, Status5xx: 0 },
          },
          Causes: [],
          Color: 'Green',
          HealthStatus: 'Ok',
          InstanceId: 'i-08691cc7',
          LaunchedAt: '2015-08-13T19:17:09Z',
          System: {
            CPUUtilization: {
              IOWait: 0.2,
              IRQ: 0,
              Idle: 97.8,
              Nice: 0.1,
              SoftIRQ: 0.1,
              System: 0.3,
              User: 1.5,
            },
            LoadAverage: [0, 0.02, 0.05],
          },
        },
      ],
      RefreshedAt: '2015-08-20T21:09:08Z',
    },
    description:
      'Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.',
    required: [],
  })
  .openapi('DescribeInstancesHealthResult')

const InstancesHealthAttributeSchema = z
  .enum([
    'HealthStatus',
    'Color',
    'Causes',
    'ApplicationMetrics',
    'RefreshedAt',
    'LaunchedAt',
    'System',
    'Deployment',
    'AvailabilityZone',
    'InstanceType',
    'All',
  ])
  .openapi('InstancesHealthAttribute')

const PlatformNameSchema = z.string().openapi('PlatformName')

const MaintainerSchema = z.string().openapi('Maintainer')

const PlatformProgrammingLanguageSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the programming language.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'The version of the programming language.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A programming language supported by the platform.', required: [] })
  .openapi('PlatformProgrammingLanguage')

const PlatformProgrammingLanguagesSchema = z
  .array(PlatformProgrammingLanguageSchema)
  .openapi('PlatformProgrammingLanguages')

const PlatformFrameworkSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The name of the framework.' }),
    ).exactOptional(),
    Version: StringSchema.and(
      z.any().openapi({ description: 'The version of the framework.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A framework supported by the platform.', required: [] })
  .openapi('PlatformFramework')

const PlatformFrameworksSchema = z.array(PlatformFrameworkSchema).openapi('PlatformFrameworks')

const VirtualizationTypeSchema = z.string().openapi('VirtualizationType')

const ImageIdSchema = z.string().openapi('ImageId')

const CustomAmiSchema = z
  .object({
    VirtualizationType: VirtualizationTypeSchema.and(
      z.any().openapi({ description: 'The type of virtualization used to create the custom AMI.' }),
    ).exactOptional(),
    ImageId: ImageIdSchema.and(
      z.any().openapi({ description: 'THe ID of the image used to create the custom AMI.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A custom AMI available to platforms.', required: [] })
  .openapi('CustomAmi')

const CustomAmiListSchema = z.array(CustomAmiSchema).openapi('CustomAmiList')

const PlatformDescriptionSchema = z
  .object({
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
    PlatformOwner: PlatformOwnerSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS account ID of the person who created the platform version.',
        }),
    ).exactOptional(),
    PlatformName: PlatformNameSchema.and(
      z.any().openapi({ description: 'The name of the platform version.' }),
    ).exactOptional(),
    PlatformVersion: PlatformVersionSchema.and(
      z.any().openapi({ description: 'The version of the platform version.' }),
    ).exactOptional(),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the solution stack used by the platform version.' }),
    ).exactOptional(),
    PlatformStatus: PlatformStatusSchema.and(
      z.any().openapi({ description: 'The status of the platform version.' }),
    ).exactOptional(),
    DateCreated: CreationDateSchema.and(
      z.any().openapi({ description: 'The date when the platform version was created.' }),
    ).exactOptional(),
    DateUpdated: UpdateDateSchema.and(
      z.any().openapi({ description: 'The date when the platform version was last updated.' }),
    ).exactOptional(),
    PlatformCategory: PlatformCategorySchema.and(
      z.any().openapi({ description: 'The category of the platform version.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the platform version.' }),
    ).exactOptional(),
    Maintainer: MaintainerSchema.and(
      z.any().openapi({ description: 'Information about the maintainer of the platform version.' }),
    ).exactOptional(),
    OperatingSystemName: OperatingSystemNameSchema.and(
      z.any().openapi({ description: 'The operating system used by the platform version.' }),
    ).exactOptional(),
    OperatingSystemVersion: OperatingSystemVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the operating system used by the platform version.',
        }),
    ).exactOptional(),
    ProgrammingLanguages: PlatformProgrammingLanguagesSchema.and(
      z
        .any()
        .openapi({ description: 'The programming languages supported by the platform version.' }),
    ).exactOptional(),
    Frameworks: PlatformFrameworksSchema.and(
      z.any().openapi({ description: 'The frameworks supported by the platform version.' }),
    ).exactOptional(),
    CustomAmiList: CustomAmiListSchema.and(
      z.any().openapi({ description: 'The custom AMIs supported by the platform version.' }),
    ).exactOptional(),
    SupportedTierList: SupportedTierListSchema.and(
      z.any().openapi({ description: 'The tiers supported by the platform version.' }),
    ).exactOptional(),
    SupportedAddonList: SupportedAddonListSchema.and(
      z.any().openapi({ description: 'The additions supported by the platform version.' }),
    ).exactOptional(),
    PlatformLifecycleState: PlatformLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the platform version in its lifecycle.</p> <p>Possible values: <code>Recommended</code> | <code>null</code> </p> <p>If a null value is returned, the platform version isn't the recommended one for its branch. Each platform branch has a single recommended platform version, typically the most recent one.</p>",
        }),
    ).exactOptional(),
    PlatformBranchName: BranchNameSchema.and(
      z
        .any()
        .openapi({ description: 'The platform branch to which the platform version belongs.' }),
    ).exactOptional(),
    PlatformBranchLifecycleState: PlatformBranchLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state of the platform version's branch in its lifecycle.</p> <p>Possible values: <code>Beta</code> | <code>Supported</code> | <code>Deprecated</code> | <code>Retired</code> </p>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Detailed information about a platform version.', required: [] })
  .openapi('PlatformDescription')

const DescribePlatformVersionResultSchema = z
  .object({
    PlatformDescription: PlatformDescriptionSchema.and(
      z.any().openapi({ description: 'Detailed information about the platform version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePlatformVersionResult')

const AvailableSolutionStackNamesListSchema = z
  .array(SolutionStackNameSchema)
  .openapi('AvailableSolutionStackNamesList')

const FileTypeExtensionSchema = z.string().min(1).max(100).openapi('FileTypeExtension')

const SolutionStackFileTypeListSchema = z
  .array(FileTypeExtensionSchema)
  .openapi('SolutionStackFileTypeList')

const SolutionStackDescriptionSchema = z
  .object({
    SolutionStackName: SolutionStackNameSchema.and(
      z.any().openapi({ description: 'The name of the solution stack.' }),
    ).exactOptional(),
    PermittedFileTypes: SolutionStackFileTypeListSchema.and(
      z.any().openapi({ description: 'The permitted file types allowed for a solution stack.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the solution stack.', required: [] })
  .openapi('SolutionStackDescription')

const AvailableSolutionStackDetailsListSchema = z
  .array(SolutionStackDescriptionSchema)
  .openapi('AvailableSolutionStackDetailsList')

const ListAvailableSolutionStacksResultMessageSchema = z
  .object({
    SolutionStacks: AvailableSolutionStackNamesListSchema.and(
      z.any().openapi({ description: 'A list of available solution stacks.' }),
    ).exactOptional(),
    SolutionStackDetails: AvailableSolutionStackDetailsListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of available solution stacks and their <a>SolutionStackDescription</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      SolutionStackDetails: [
        {
          PermittedFileTypes: ['zip'],
          SolutionStackName: '64bit Amazon Linux 2015.03 v2.0.0 running Node.js',
        },
      ],
      SolutionStacks: [
        '64bit Amazon Linux 2015.03 v2.0.0 running Node.js',
        '64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.6',
        '64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.5',
        '64bit Amazon Linux 2015.03 v2.0.0 running PHP 5.4',
        '64bit Amazon Linux 2015.03 v2.0.0 running Python 3.4',
        '64bit Amazon Linux 2015.03 v2.0.0 running Python 2.7',
        '64bit Amazon Linux 2015.03 v2.0.0 running Python',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Puma)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.2 (Passenger Standalone)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Puma)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.1 (Passenger Standalone)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Puma)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 2.0 (Passenger Standalone)',
        '64bit Amazon Linux 2015.03 v2.0.0 running Ruby 1.9.3',
        '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 8 Java 8',
        '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 7',
        '64bit Amazon Linux 2015.03 v2.0.0 running Tomcat 7 Java 6',
        '64bit Windows Server Core 2012 R2 running IIS 8.5',
        '64bit Windows Server 2012 R2 running IIS 8.5',
        '64bit Windows Server 2012 running IIS 8',
        '64bit Windows Server 2008 R2 running IIS 7.5',
        '64bit Amazon Linux 2015.03 v2.0.0 running Docker 1.6.2',
        '64bit Amazon Linux 2015.03 v2.0.0 running Multi-container Docker 1.6.2 (Generic)',
        '64bit Debian jessie v2.0.0 running GlassFish 4.1 Java 8 (Preconfigured - Docker)',
        '64bit Debian jessie v2.0.0 running GlassFish 4.0 Java 7 (Preconfigured - Docker)',
        '64bit Debian jessie v2.0.0 running Go 1.4 (Preconfigured - Docker)',
        '64bit Debian jessie v2.0.0 running Go 1.3 (Preconfigured - Docker)',
        '64bit Debian jessie v2.0.0 running Python 3.4 (Preconfigured - Docker)',
      ],
    },
    description: 'A list of available AWS Elastic Beanstalk solution stacks.',
    required: [],
  })
  .openapi('ListAvailableSolutionStacksResultMessage')

const BranchOrderSchema = z.int().openapi('BranchOrder')

const PlatformBranchSummarySchema = z
  .object({
    PlatformName: PlatformNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the platform to which this platform branch belongs.',
        }),
    ).exactOptional(),
    BranchName: BranchNameSchema.and(
      z.any().openapi({ description: 'The name of the platform branch.' }),
    ).exactOptional(),
    LifecycleState: PlatformBranchLifecycleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The support life cycle state of the platform branch.</p> <p>Possible values: <code>beta</code> | <code>supported</code> | <code>deprecated</code> | <code>retired</code> </p>',
        }),
    ).exactOptional(),
    BranchOrder: BranchOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An ordinal number that designates the order in which platform branches have been added to a platform. This can be helpful, for example, if your code calls the <code>ListPlatformBranches</code> action and then displays a list of platform branches.</p> <p>A larger <code>BranchOrder</code> value designates a newer platform branch within the platform.</p>',
        }),
    ).exactOptional(),
    SupportedTierList: SupportedTierListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The environment tiers that platform versions in this branch support.</p> <p>Possible values: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Summary information about a platform branch.', required: [] })
  .openapi('PlatformBranchSummary')

const PlatformBranchSummaryListSchema = z
  .array(PlatformBranchSummarySchema)
  .openapi('PlatformBranchSummaryList')

const ListPlatformBranchesResultSchema = z
  .object({
    PlatformBranchSummaryList: PlatformBranchSummaryListSchema.and(
      z.any().openapi({ description: 'Summary information about the platform branches.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "In a paginated request, if this value isn't <code>null</code>, it's the token that you can pass in a subsequent request to get the next response page.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPlatformBranchesResult')

const SearchFilterAttributeSchema = z.string().openapi('SearchFilterAttribute')

const SearchFilterOperatorSchema = z.string().openapi('SearchFilterOperator')

const SearchFilterValueSchema = z.string().openapi('SearchFilterValue')

const SearchFilterValuesSchema = z.array(SearchFilterValueSchema).openapi('SearchFilterValues')

const SearchFilterSchema = z
  .object({
    Attribute: SearchFilterAttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The result attribute to which the filter values are applied. Valid values vary by API action.',
        }),
    ).exactOptional(),
    Operator: SearchFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to apply to the <code>Attribute</code> with each of the <code>Values</code>. Valid values vary by <code>Attribute</code>.',
        }),
    ).exactOptional(),
    Values: SearchFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of values applied to the <code>Attribute</code> and <code>Operator</code> attributes. Number of values and valid values vary by <code>Attribute</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes criteria to restrict a list of results.</p> <p>For operators that apply a single value to the attribute, the filter is evaluated as follows: <code>Attribute Operator Values[1]</code> </p> <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...</code> </p> <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For valid values, see the reference page for the API action you're calling that takes a <code>SearchFilter</code> parameter.</p>",
    required: [],
  })
  .openapi('SearchFilter')

const PlatformSummaryListSchema = z.array(PlatformSummarySchema).openapi('PlatformSummaryList')

const ListPlatformVersionsResultSchema = z
  .object({
    PlatformSummaryList: PlatformSummaryListSchema.and(
      z.any().openapi({ description: 'Summary information about the platform versions.' }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "In a paginated request, if this value isn't <code>null</code>, it's the token that you can pass in a subsequent request to get the next response page.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPlatformVersionsResult')

const PlatformFilterTypeSchema = z.string().openapi('PlatformFilterType')

const PlatformFilterOperatorSchema = z.string().openapi('PlatformFilterOperator')

const PlatformFilterValueSchema = z.string().openapi('PlatformFilterValue')

const PlatformFilterValueListSchema = z
  .array(PlatformFilterValueSchema)
  .openapi('PlatformFilterValueList')

const PlatformFilterSchema = z
  .object({
    Type: PlatformFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The platform version attribute to which the filter values are applied.</p> <p>Valid values: <code>PlatformName</code> | <code>PlatformVersion</code> | <code>PlatformStatus</code> | <code>PlatformBranchName</code> | <code>PlatformLifecycleState</code> | <code>PlatformOwner</code> | <code>SupportedTier</code> | <code>SupportedAddon</code> | <code>ProgrammingLanguageName</code> | <code>OperatingSystemName</code> </p>',
        }),
    ).exactOptional(),
    Operator: PlatformFilterOperatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operator to apply to the <code>Type</code> with each of the <code>Values</code>.</p> <p>Valid values: <code>=</code> | <code>!=</code> | <code>&lt;</code> | <code>&lt;=</code> | <code>&gt;</code> | <code>&gt;=</code> | <code>contains</code> | <code>begins_with</code> | <code>ends_with</code> </p>',
        }),
    ).exactOptional(),
    Values: PlatformFilterValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The list of values applied to the filtering platform version attribute. Only one value is supported for all current operators.</p> <p>The following list shows valid filter values for some filter attributes.</p> <ul> <li> <p> <code>PlatformStatus</code>: <code>Creating</code> | <code>Failed</code> | <code>Ready</code> | <code>Deleting</code> | <code>Deleted</code> </p> </li> <li> <p> <code>PlatformLifecycleState</code>: <code>recommended</code> </p> </li> <li> <p> <code>SupportedTier</code>: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code> </p> </li> <li> <p> <code>SupportedAddon</code>: <code>Log/S3</code> | <code>Monitoring/Healthd</code> | <code>WorkerDaemon/SQSD</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes criteria to restrict the results when listing platform versions.</p> <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code> </p>',
    required: [],
  })
  .openapi('PlatformFilter')

const ResourceArnSchema = z.string().openapi('ResourceArn')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ResourceTagsDescriptionMessageSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource for which a tag list was requested.',
        }),
    ).exactOptional(),
    ResourceTags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tag key-value pairs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceTagsDescriptionMessage')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceTypeNotSupportedExceptionSchema = z.any().openapi('ResourceTypeNotSupportedException')

const EnvironmentInfoTypeSchema = z.enum(['tail', 'bundle']).openapi('EnvironmentInfoType')

const Ec2InstanceIdSchema = z.string().openapi('Ec2InstanceId')

const SampleTimestampSchema = z.iso.datetime({ offset: true }).openapi('SampleTimestamp')

const MessageSchema = z.string().openapi('Message')

const EnvironmentInfoDescriptionSchema = z
  .object({
    InfoType: EnvironmentInfoTypeSchema.and(
      z.any().openapi({ description: 'The type of information retrieved.' }),
    ).exactOptional(),
    Ec2InstanceId: Ec2InstanceIdSchema.and(
      z.any().openapi({ description: 'The Amazon EC2 Instance ID for this information.' }),
    ).exactOptional(),
    SampleTimestamp: SampleTimestampSchema.and(
      z.any().openapi({ description: 'The time stamp when this information was retrieved.' }),
    ).exactOptional(),
    Message: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The retrieved information. Currently contains a presigned Amazon S3 URL. The files are deleted after 15 minutes.</p> <p>Anyone in possession of this URL can access the files before they are deleted. Make the URL available only to trusted parties.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The information retrieved from the Amazon EC2 instances.',
    required: [],
  })
  .openapi('EnvironmentInfoDescription')

const EnvironmentInfoDescriptionListSchema = z
  .array(EnvironmentInfoDescriptionSchema)
  .openapi('EnvironmentInfoDescriptionList')

const RetrieveEnvironmentInfoResultMessageSchema = z
  .object({
    EnvironmentInfo: EnvironmentInfoDescriptionListSchema.and(
      z
        .any()
        .openapi({ description: ' The <a>EnvironmentInfoDescription</a> of the environment. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      EnvironmentInfo: [
        {
          Ec2InstanceId: 'i-09c1c867',
          InfoType: 'tail',
          Message:
            'https://elasticbeanstalk-us-west-2-0123456789012.s3.amazonaws.com/resources/environments/logs/tail/e-fyqyju3yjs/i-09c1c867/TailLogs-1440109397703.out?AWSAccessKeyId=AKGPT4J56IAJ2EUBL5CQ&Expires=1440195891&Signature=n%2BEalOV6A2HIOx4Rcfb7LT16bBM%3D',
          SampleTimestamp: '2015-08-20T22:23:17.703Z',
        },
      ],
    },
    description: 'Result message containing a description of the requested environment info.',
    required: [],
  })
  .openapi('RetrieveEnvironmentInfoResultMessage')

const ApplicationResourceLifecycleDescriptionMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ).exactOptional(),
    ResourceLifecycleConfig: ApplicationResourceLifecycleConfigSchema.and(
      z.any().openapi({ description: 'The lifecycle configuration.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplicationResourceLifecycleDescriptionMessage')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const ValidationMessageStringSchema = z.string().openapi('ValidationMessageString')

const ValidationSeveritySchema = z.enum(['error', 'warning']).openapi('ValidationSeverity')

const ValidationMessageSchema = z
  .object({
    Message: ValidationMessageStringSchema.and(
      z.any().openapi({ description: 'A message describing the error or warning.' }),
    ).exactOptional(),
    Severity: ValidationSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An indication of the severity of this message:</p> <ul> <li> <p> <code>error</code>: This message indicates that this is not a valid setting for an option.</p> </li> <li> <p> <code>warning</code>: This message is providing information you should take into account.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Namespace: OptionNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace to which the option belongs.' }),
    ).exactOptional(),
    OptionName: ConfigurationOptionNameSchema.and(
      z.any().openapi({ description: 'The name of the option.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An error or warning for a desired configuration option value.',
    required: [],
  })
  .openapi('ValidationMessage')

const ValidationMessagesListSchema = z
  .array(ValidationMessageSchema)
  .openapi('ValidationMessagesList')

const ConfigurationSettingsValidationMessagesSchema = z
  .object({
    Messages: ValidationMessagesListSchema.and(
      z.any().openapi({ description: ' A list of <a>ValidationMessage</a>. ' }),
    ).exactOptional(),
  })
  .openapi({
    example: { Messages: [] },
    description: 'Provides a list of validation messages.',
    required: [],
  })
  .openapi('ConfigurationSettingsValidationMessages')

const AbortEnvironmentUpdateMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies the ID of the environment with the in-progress update that you want to cancel.',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies the name of the environment with the in-progress update that you want to cancel.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'AbortEnvironmentUpdateMessage', description: '<p/>', required: [] })
  .openapi('AbortEnvironmentUpdateMessage')

const ApplicationNamesListSchema = z.array(ApplicationNameSchema).openapi('ApplicationNamesList')

const ApplicationVersionProccessSchema = z.boolean().openapi('ApplicationVersionProccess')

const ApplyEnvironmentManagedActionRequestSchema = z
  .object({
    EnvironmentName: StringSchema.and(
      z.any().openapi({ description: 'The name of the target environment.' }),
    ).exactOptional(),
    EnvironmentId: StringSchema.and(
      z.any().openapi({ description: 'The environment ID of the target environment.' }),
    ).exactOptional(),
    ActionId: StringSchema.and(
      z.any().openapi({ description: 'The action ID of the scheduled managed action to execute.' }),
    ),
  })
  .openapi({
    required: ['ActionId'],
    title: 'ApplyEnvironmentManagedActionRequest',
    description: 'Request to execute a scheduled managed action immediately.',
  })
  .openapi('ApplyEnvironmentManagedActionRequest')

const AssociateEnvironmentOperationsRoleMessageSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the environment to which to set the operations role.',
        }),
    ),
    OperationsRole: OperationsRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.",
        }),
    ),
  })
  .openapi({
    required: ['EnvironmentName', 'OperationsRole'],
    title: 'AssociateEnvironmentOperationsRoleMessage',
    description: 'Request to add or change the operations role used by an environment.',
  })
  .openapi('AssociateEnvironmentOperationsRoleMessage')

const AutoCreateApplicationSchema = z.boolean().openapi('AutoCreateApplication')

const BuildConfigurationSchema = z
  .object({
    ArtifactName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the artifact of the CodeBuild build. If provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>-<i>artifact-name</i>.zip. If not provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>.zip. ',
        }),
    ).exactOptional(),
    CodeBuildServiceRole: NonEmptyStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.',
        }),
    ),
    ComputeType: ComputeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the compute resources the build project will use.</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Image: NonEmptyStringSchema.and(
      z.any().openapi({ description: 'The ID of the Docker image to use for this build project.' }),
    ),
    TimeoutInMinutes: BoxedIntSchema.and(
      z
        .any()
        .openapi({
          description:
            'How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['CodeBuildServiceRole', 'Image'],
    description: 'Settings for an AWS CodeBuild build.',
  })
  .openapi('BuildConfiguration')

const DNSCnamePrefixSchema = z.string().min(4).max(63).openapi('DNSCnamePrefix')

const CheckDNSAvailabilityMessageSchema = z
  .object({
    CNAMEPrefix: DNSCnamePrefixSchema.and(
      z.any().openapi({ description: 'The prefix used when this CNAME is reserved.' }),
    ),
  })
  .openapi({
    required: ['CNAMEPrefix'],
    title: 'CheckDNSAvailabilityMessage',
    description: 'Results message indicating whether a CNAME is available.',
  })
  .openapi('CheckDNSAvailabilityMessage')

const GroupNameSchema = z.string().min(1).max(19).openapi('GroupName')

const VersionLabelsSchema = z.array(VersionLabelSchema).openapi('VersionLabels')

const ComposeEnvironmentsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application to which the specified source bundles belong.',
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment\'s manifest ends with a + (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
        }),
    ).exactOptional(),
    VersionLabels: VersionLabelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ComposeEnvironmentsMessage',
    description: 'Request to create or update a group of environments.',
    required: [],
  })
  .openapi('ComposeEnvironmentsMessage')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const CreateApplicationMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application. Must be unique within your account.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Your description of the application.' }),
    ).exactOptional(),
    ResourceLifecycleConfig: ApplicationResourceLifecycleConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the tags applied to the application.</p> <p>Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'CreateApplicationMessage',
    description: 'Request to create an application.',
  })
  .openapi('CreateApplicationMessage')

const CreateApplicationVersionMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the application. If no application is found with this name, and <code>AutoCreateApplication</code> is <code>false</code>, returns an <code>InvalidParameterValue</code> error. ',
        }),
    ),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A label identifying this version.</p> <p>Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of this application version.' }),
    ).exactOptional(),
    SourceBuildInformation: SourceBuildInformationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.',
        }),
    ).exactOptional(),
    SourceBundle: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket and key that identify the location of the source bundle for this version.</p> <note> <p>The Amazon S3 bucket must be in the same region as the environment.</p> </note> <p>Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with <code>SourceBuildInformation</code>), but not both. If neither <code>SourceBundle</code> nor <code>SourceBuildInformation</code> are provided, Elastic Beanstalk uses a sample application.</p>',
        }),
    ).exactOptional(),
    BuildConfiguration: BuildConfigurationSchema.and(
      z.any().openapi({ description: 'Settings for an AWS CodeBuild build.' }),
    ).exactOptional(),
    AutoCreateApplication: AutoCreateApplicationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Set to <code>true</code> to create an application with the specified name if it doesn't already exist.",
        }),
    ).exactOptional(),
    Process: ApplicationVersionProccessSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Pre-processes and validates the environment manifest (<code>env.yaml</code>) and configuration files (<code>*.config</code> files in the <code>.ebextensions</code> folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.</p> <p>You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.</p> <note> <p>The <code>Process</code> option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.</p> </note>",
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the tags applied to the application version.</p> <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'VersionLabel'],
    title: 'CreateApplicationVersionMessage',
    description: '<p/>',
  })
  .openapi('CreateApplicationVersionMessage')

const SourceConfigurationSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the application associated with the configuration.' }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration template.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A specification for an environment configuration.', required: [] })
  .openapi('SourceConfiguration')

const CreateConfigurationTemplateMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Elastic Beanstalk application to associate with this configuration template.',
        }),
    ),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the configuration template.</p> <p>Constraint: This name must be unique per application.</p>',
        }),
    ),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, <code>64bit Amazon Linux 2013.09 running Tomcat 7 Java 7</code>. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Supported Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <p>You must specify <code>SolutionStackName</code> if you don\'t specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SourceConfiguration</code>.</p> <p>Use the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html"> <code>ListAvailableSolutionStacks</code> </a> API to obtain a list of available solution stacks.</p>',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the custom platform. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html"> Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, then don\'t specify <code>SolutionStackName</code>.</p> </note>',
        }),
    ).exactOptional(),
    SourceConfiguration: SourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.</p> <p>Values specified in <code>OptionSettings</code> override any values obtained from the <code>SourceConfiguration</code>.</p> <p>You must specify <code>SourceConfiguration</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SolutionStackName</code>.</p> <p>Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.</p>",
        }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of an environment whose settings you want to use to create the configuration template. You must specify <code>EnvironmentId</code> if you don't specify <code>PlatformArn</code>, <code>SolutionStackName</code>, or <code>SourceConfiguration</code>.",
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for this configuration.' }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'Specifies the tags applied to the configuration template.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'TemplateName'],
    title: 'CreateConfigurationTemplateMessage',
    description: 'Request to create a configuration template.',
  })
  .openapi('CreateConfigurationTemplateMessage')

const OptionsSpecifierListSchema = z
  .array(OptionSpecificationSchema)
  .openapi('OptionsSpecifierList')

const CreateEnvironmentMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application that is associated with this environment.',
        }),
    ),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique name for the environment.</p> <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>If you don't specify the <code>CNAMEPrefix</code> parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.</p>",
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the group to which the target environment belongs. Specify a group name only if the environment\'s name is specified in an environment manifest and not with the environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'Your description for this environment.' }),
    ).exactOptional(),
    CNAMEPrefix: DNSCnamePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.',
        }),
    ).exactOptional(),
    Tier: EnvironmentTierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the tags applied to resources in the environment.' }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the application version to deploy.</p> <p>Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.</p>',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the Elastic Beanstalk configuration template to use with the environment.</p> <note> <p>If you specify <code>TemplateName</code>, then don't specify <code>SolutionStackName</code>.</p> </note>",
        }),
    ).exactOptional(),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html">Elastic Beanstalk Supported Platforms</a> in the <i>AWS Elastic Beanstalk Platforms</i> guide.</p> <note> <p>If you specify <code>SolutionStackName</code>, don\'t specify <code>PlatformArn</code> or <code>TemplateName</code>.</p> </note>',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html">Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, don\'t specify <code>SolutionStackName</code>.</p> </note>',
        }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.',
        }),
    ).exactOptional(),
    OptionsToRemove: OptionsSpecifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom user-defined configuration options to remove from the configuration set for this new environment.',
        }),
    ).exactOptional(),
    OperationsRole: OperationsRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment\'s operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the <code>iam:PassRole</code> permission for the role. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'CreateEnvironmentMessage',
    description: '<p/>',
  })
  .openapi('CreateEnvironmentMessage')

const CreatePlatformVersionRequestSchema = z
  .object({
    PlatformName: PlatformNameSchema.and(
      z.any().openapi({ description: 'The name of your custom platform.' }),
    ),
    PlatformVersion: PlatformVersionSchema.and(
      z.any().openapi({ description: 'The number, such as 1.0.2, for the new platform version.' }),
    ),
    PlatformDefinitionBundle: S3LocationSchema.and(
      z
        .any()
        .openapi({ description: 'The location of the platform definition archive in Amazon S3.' }),
    ),
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of the builder environment.' }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration option settings to apply to the builder environment.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the tags applied to the new platform version.</p> <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PlatformName', 'PlatformVersion', 'PlatformDefinitionBundle'],
    title: 'CreatePlatformVersionRequest',
    description: 'Request to create a new platform version.',
  })
  .openapi('CreatePlatformVersionRequest')

const TerminateEnvForceSchema = z.boolean().openapi('TerminateEnvForce')

const DeleteApplicationMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application to delete.' }),
    ),
    TerminateEnvByForce: TerminateEnvForceSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to true, running environments will be terminated before deleting the application.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'DeleteApplicationMessage',
    description: 'Request to delete an application.',
  })
  .openapi('DeleteApplicationMessage')

const DeleteSourceBundleSchema = z.boolean().openapi('DeleteSourceBundle')

const DeleteApplicationVersionMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application to which the version belongs.' }),
    ),
    VersionLabel: VersionLabelSchema.and(
      z.any().openapi({ description: 'The label of the version to delete.' }),
    ),
    DeleteSourceBundle: DeleteSourceBundleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set to <code>true</code> to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'VersionLabel'],
    title: 'DeleteApplicationVersionMessage',
    description: 'Request to delete an application version.',
  })
  .openapi('DeleteApplicationVersionMessage')

const DeleteConfigurationTemplateMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application to delete the configuration template from.',
        }),
    ),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration template to delete.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'TemplateName'],
    title: 'DeleteConfigurationTemplateMessage',
    description: 'Request to delete a configuration template.',
  })
  .openapi('DeleteConfigurationTemplateMessage')

const DeleteEnvironmentConfigurationMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application the environment is associated with.',
        }),
    ),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the environment to delete the draft configuration from.',
        }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'EnvironmentName'],
    title: 'DeleteEnvironmentConfigurationMessage',
    description: 'Request to delete a draft environment configuration.',
  })
  .openapi('DeleteEnvironmentConfigurationMessage')

const DeletePlatformVersionRequestSchema = z
  .object({
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the version of the custom platform.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeletePlatformVersionRequest', required: [] })
  .openapi('DeletePlatformVersionRequest')

const MaxRecordsSchema = z.int().min(1).max(1000).openapi('MaxRecords')

const DescribeApplicationVersionsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify an application name to show only application versions for that application.',
        }),
    ).exactOptional(),
    VersionLabels: VersionLabelsListSchema.and(
      z
        .any()
        .openapi({
          description: 'Specify a version label to show a specific application version.',
        }),
    ).exactOptional(),
    MaxRecords: MaxRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a maximum number of application versions to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available application versions are retrieved in a single response.</p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeApplicationVersionsMessage',
    description: 'Request to describe application versions.',
    required: [],
  })
  .openapi('DescribeApplicationVersionsMessage')

const DescribeApplicationsMessageSchema = z
  .object({
    ApplicationNames: ApplicationNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeApplicationsMessage',
    description: 'Request to describe one or more applications.',
    required: [],
  })
  .openapi('DescribeApplicationsMessage')

const DescribeConfigurationOptionsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration template whose configuration options you want to describe.',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment whose configuration options you want to describe.',
        }),
    ).exactOptional(),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the solution stack whose configuration options you want to describe.',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the custom platform.' }),
    ).exactOptional(),
    Options: OptionsSpecifierListSchema.and(
      z
        .any()
        .openapi({
          description: 'If specified, restricts the descriptions to only the specified options.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeConfigurationOptionsMessage',
    description: 'Result message containing a list of application version descriptions.',
    required: [],
  })
  .openapi('DescribeConfigurationOptionsMessage')

const DescribeConfigurationSettingsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({ description: 'The application for the environment or configuration template.' }),
    ),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the configuration template to describe.</p> <p> Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to describe.</p> <p> Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'DescribeConfigurationSettingsMessage',
    description:
      'Result message containing all of the configuration settings for a specified solution stack or configuration template.',
  })
  .openapi('DescribeConfigurationSettingsMessage')

const EnvironmentHealthAttributesSchema = z
  .array(EnvironmentHealthAttributeSchema)
  .openapi('EnvironmentHealthAttributes')

const DescribeEnvironmentHealthRequestSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>',
        }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>',
        }),
    ).exactOptional(),
    AttributeNames: EnvironmentHealthAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEnvironmentHealthRequest',
    description: 'See the example below to learn how to create a request body.',
    required: [],
  })
  .openapi('DescribeEnvironmentHealthRequest')

const ManagedActionHistoryMaxItemsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ManagedActionHistoryMaxItems')

const DescribeEnvironmentManagedActionHistoryRequestSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'The environment ID of the target environment.' }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'The name of the target environment.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'The pagination token returned by a previous request.' }),
    ).exactOptional(),
    MaxItems: ManagedActionHistoryMaxItemsSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of items to return for a single request.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEnvironmentManagedActionHistoryRequest',
    description: 'Request to list completed and failed managed actions.',
    required: [],
  })
  .openapi('DescribeEnvironmentManagedActionHistoryRequest')

const DescribeEnvironmentManagedActionsRequestSchema = z
  .object({
    EnvironmentName: StringSchema.and(
      z.any().openapi({ description: 'The name of the target environment.' }),
    ).exactOptional(),
    EnvironmentId: StringSchema.and(
      z.any().openapi({ description: 'The environment ID of the target environment.' }),
    ).exactOptional(),
    Status: ActionStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'To show only actions with a particular status, specify a status.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEnvironmentManagedActionsRequest',
    description: "Request to list an environment's upcoming and in-progress managed actions.",
    required: [],
  })
  .openapi('DescribeEnvironmentManagedActionsRequest')

const DescribeEnvironmentResourcesMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEnvironmentResourcesMessage',
    description: 'Request to describe the resources in an environment.',
    required: [],
  })
  .openapi('DescribeEnvironmentResourcesMessage')

const EnvironmentIdListSchema = z.array(EnvironmentIdSchema).openapi('EnvironmentIdList')

const EnvironmentNamesListSchema = z.array(EnvironmentNameSchema).openapi('EnvironmentNamesList')

const IncludeDeletedSchema = z.boolean().openapi('IncludeDeleted')

const IncludeDeletedBackToSchema = z.iso.datetime({ offset: true }).openapi('IncludeDeletedBackTo')

const DescribeEnvironmentsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.',
        }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.',
        }),
    ).exactOptional(),
    EnvironmentIds: EnvironmentIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.',
        }),
    ).exactOptional(),
    EnvironmentNames: EnvironmentNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.',
        }),
    ).exactOptional(),
    IncludeDeleted: IncludeDeletedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to include deleted environments:</p> <p> <code>true</code>: Environments that have been deleted after <code>IncludedDeletedBackTo</code> are displayed.</p> <p> <code>false</code>: Do not include deleted environments.</p>',
        }),
    ).exactOptional(),
    IncludedDeletedBackTo: IncludeDeletedBackToSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then environments deleted after this date are displayed. ',
        }),
    ).exactOptional(),
    MaxRecords: MaxRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a maximum number of environments to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available environments are retrieved in a single response.</p>',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEnvironmentsMessage',
    description: 'Request to describe one or more environments.',
    required: [],
  })
  .openapi('DescribeEnvironmentsMessage')

const TimeFilterStartSchema = z.iso.datetime({ offset: true }).openapi('TimeFilterStart')

const TimeFilterEndSchema = z.iso.datetime({ offset: true }).openapi('TimeFilterEnd')

const DescribeEventsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.',
        }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.',
        }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.',
        }),
    ).exactOptional(),
    RequestId: RequestIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.',
        }),
    ).exactOptional(),
    Severity: EventSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, limits the events returned from this call to include only those with the specified severity or higher.',
        }),
    ).exactOptional(),
    StartTime: TimeFilterStartSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.',
        }),
    ).exactOptional(),
    EndTime: TimeFilterEndSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. ',
        }),
    ).exactOptional(),
    MaxRecords: MaxRecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of events that can be returned, beginning with the most recent event.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Pagination token. If specified, the events return the next batch of results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeEventsMessage',
    description: 'Request to retrieve a list of events for an environment.',
    required: [],
  })
  .openapi('DescribeEventsMessage')

const InstancesHealthAttributesSchema = z
  .array(InstancesHealthAttributeSchema)
  .openapi('InstancesHealthAttributes')

const DescribeInstancesHealthRequestSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z.any().openapi({ description: 'Specify the AWS Elastic Beanstalk environment by name.' }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z.any().openapi({ description: 'Specify the AWS Elastic Beanstalk environment by ID.' }),
    ).exactOptional(),
    AttributeNames: InstancesHealthAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'Specify the pagination token returned by a previous call.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeInstancesHealthRequest',
    description: 'Parameters for a call to <code>DescribeInstancesHealth</code>.',
    required: [],
  })
  .openapi('DescribeInstancesHealthRequest')

const DescribePlatformVersionRequestSchema = z
  .object({
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform version.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePlatformVersionRequest', required: [] })
  .openapi('DescribePlatformVersionRequest')

const DisassociateEnvironmentOperationsRoleMessageSchema = z
  .object({
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the environment from which to disassociate the operations role.',
        }),
    ),
  })
  .openapi({
    required: ['EnvironmentName'],
    title: 'DisassociateEnvironmentOperationsRoleMessage',
    description: 'Request to disassociate the operations role from an environment.',
  })
  .openapi('DisassociateEnvironmentOperationsRoleMessage')

const ForceTerminateSchema = z.boolean().openapi('ForceTerminate')

const SearchFiltersSchema = z.array(SearchFilterSchema).openapi('SearchFilters')

const PlatformBranchMaxRecordsSchema = z.int().min(1).openapi('PlatformBranchMaxRecords')

const ListPlatformBranchesRequestSchema = z
  .object({
    Filters: SearchFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate <code>SearchFilter</code> terms.</p> <p>The following list shows valid attribute values for each of the <code>SearchFilter</code> terms. Most operators take a single value. The <code>in</code> and <code>not_in</code> operators can take multiple values.</p> <ul> <li> <p> <code>Attribute = BranchName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = LifecycleState</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>in</code> | <code>not_in</code> </p> </li> <li> <p> <code>Values</code>: <code>beta</code> | <code>supported</code> | <code>deprecated</code> | <code>retired</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = PlatformName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = TierType</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> </p> </li> <li> <p> <code>Values</code>: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code> </p> </li> </ul> </li> </ul> <p>Array size: limited to 10 <code>SearchFilter</code> objects.</p> <p>Within each <code>SearchFilter</code> item, the <code>Values</code> array is limited to 10 items.</p>',
        }),
    ).exactOptional(),
    MaxRecords: PlatformBranchMaxRecordsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of platform branch values returned in one call.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPlatformBranchesRequest', required: [] })
  .openapi('ListPlatformBranchesRequest')

const PlatformFiltersSchema = z.array(PlatformFilterSchema).openapi('PlatformFilters')

const PlatformMaxRecordsSchema = z.int().min(1).openapi('PlatformMaxRecords')

const ListPlatformVersionsRequestSchema = z
  .object({
    Filters: PlatformFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code> terms.',
        }),
    ).exactOptional(),
    MaxRecords: PlatformMaxRecordsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of platform version values returned in one call.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPlatformVersionsRequest', required: [] })
  .openapi('ListPlatformVersionsRequest')

const ListTagsForResourceMessageSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceMessage' })
  .openapi('ListTagsForResourceMessage')

const RebuildEnvironmentMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RebuildEnvironmentMessage', description: '<p/>', required: [] })
  .openapi('RebuildEnvironmentMessage')

const RequestEnvironmentInfoMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    InfoType: EnvironmentInfoTypeSchema.and(
      z.any().openapi({ description: 'The type of information to request.' }),
    ),
  })
  .openapi({
    required: ['InfoType'],
    title: 'RequestEnvironmentInfoMessage',
    description:
      'Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket.',
  })
  .openapi('RequestEnvironmentInfoMessage')

const RestartAppServerMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RestartAppServerMessage', description: '<p/>', required: [] })
  .openapi('RestartAppServerMessage')

const RetrieveEnvironmentInfoMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>",
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>",
        }),
    ).exactOptional(),
    InfoType: EnvironmentInfoTypeSchema.and(
      z.any().openapi({ description: 'The type of information to retrieve.' }),
    ),
  })
  .openapi({
    required: ['InfoType'],
    title: 'RetrieveEnvironmentInfoMessage',
    description: 'Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.',
  })
  .openapi('RetrieveEnvironmentInfoMessage')

const SwapEnvironmentCNAMEsMessageSchema = z
  .object({
    SourceEnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentId</code>, you must specify the <code>DestinationEnvironmentId</code>. </p>',
        }),
    ).exactOptional(),
    SourceEnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentName</code>, you must specify the <code>DestinationEnvironmentName</code>. </p>',
        }),
    ).exactOptional(),
    DestinationEnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>',
        }),
    ).exactOptional(),
    DestinationEnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'SwapEnvironmentCNAMEsMessage',
    description: 'Swaps the CNAMEs of two environments.',
    required: [],
  })
  .openapi('SwapEnvironmentCNAMEsMessage')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TerminateEnvironmentResourcesSchema = z.boolean().openapi('TerminateEnvironmentResources')

const TerminateEnvironmentMessageSchema = z
  .object({
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    TerminateResources: TerminateEnvironmentResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the associated AWS resources should shut down when the environment is terminated:</p> <ul> <li> <p> <code>true</code>: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.</p> </li> <li> <p> <code>false</code>: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/"> AWS Elastic Beanstalk User Guide. </a> </p> <p> Default: <code>true</code> </p> <p> Valid Values: <code>true</code> | <code>false</code> </p>',
        }),
    ).exactOptional(),
    ForceTerminate: ForceTerminateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Terminates the target environment even if another environment in the same group is dependent on it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'TerminateEnvironmentMessage',
    description: 'Request to terminate an environment.',
    required: [],
  })
  .openapi('TerminateEnvironmentMessage')

const UpdateApplicationMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. ',
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName'],
    title: 'UpdateApplicationMessage',
    description: 'Request to update an application.',
  })
  .openapi('UpdateApplicationMessage')

const UpdateApplicationResourceLifecycleMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z.any().openapi({ description: 'The name of the application.' }),
    ),
    ResourceLifecycleConfig: ApplicationResourceLifecycleConfigSchema.and(
      z.any().openapi({ description: 'The lifecycle configuration.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'ResourceLifecycleConfig'],
    title: 'UpdateApplicationResourceLifecycleMessage',
  })
  .openapi('UpdateApplicationResourceLifecycleMessage')

const UpdateApplicationVersionMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the application associated with this version.</p> <p> If no application is found with this name, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.</p>',
        }),
    ),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the version to update.</p> <p>If no application version is found with this label, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. </p>',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for this version.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'VersionLabel'],
    title: 'UpdateApplicationVersionMessage',
    description: '<p/>',
  })
  .openapi('UpdateApplicationVersionMessage')

const UpdateConfigurationTemplateMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the application associated with the configuration template to update.</p> <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>',
        }),
    ),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the configuration template to update.</p> <p> If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the configuration.' }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of configuration option settings to update with the new specified option value.',
        }),
    ).exactOptional(),
    OptionsToRemove: OptionsSpecifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of configuration options to remove from the configuration set.</p> <p> Constraint: You can remove only <code>UserDefined</code> configuration options. </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApplicationName', 'TemplateName'],
    title: 'UpdateConfigurationTemplateMessage',
    description: 'The result message containing the options for the specified solution stack.',
  })
  .openapi('UpdateConfigurationTemplateMessage')

const UpdateEnvironmentMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the application with which the environment is associated.',
        }),
    ).exactOptional(),
    EnvironmentId: EnvironmentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the environment to update.</p> <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
        }),
    ).exactOptional(),
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the group to which the target environment belongs. Specify a group name only if the environment\'s name is specified in an environment manifest and not with the environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.',
        }),
    ).exactOptional(),
    Tier: EnvironmentTierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This specifies the tier to use to update the environment.</p> <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns <code>InvalidParameterValue</code> error. </p>',
        }),
    ).exactOptional(),
    VersionLabel: VersionLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an <code>InvalidParameterValue</code> error. ',
        }),
    ).exactOptional(),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. ',
        }),
    ).exactOptional(),
    SolutionStackName: SolutionStackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'This specifies the platform version that the environment will run after the environment is updated.',
        }),
    ).exactOptional(),
    PlatformArn: PlatformArnSchema.and(
      z.any().openapi({ description: 'The ARN of the platform, if used.' }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.',
        }),
    ).exactOptional(),
    OptionsToRemove: OptionsSpecifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of custom user-defined configuration options to remove from the configuration set for this environment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateEnvironmentMessage',
    description: 'Request to update an environment.',
    required: [],
  })
  .openapi('UpdateEnvironmentMessage')

const UpdateTagsForResourceMessageSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>',
        }),
    ),
    TagsToAdd: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>",
        }),
    ).exactOptional(),
    TagsToRemove: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'UpdateTagsForResourceMessage' })
  .openapi('UpdateTagsForResourceMessage')

const ValidateConfigurationSettingsMessageSchema = z
  .object({
    ApplicationName: ApplicationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the application that the configuration template or environment belongs to.',
        }),
    ),
    TemplateName: ConfigurationTemplateNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the configuration template to validate the settings against.</p> <p>Condition: You cannot specify both this and an environment name.</p>',
        }),
    ).exactOptional(),
    EnvironmentName: EnvironmentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the environment to validate the settings against.</p> <p>Condition: You cannot specify both this and a configuration template name.</p>',
        }),
    ).exactOptional(),
    OptionSettings: ConfigurationOptionSettingsListSchema.and(
      z.any().openapi({ description: 'A list of the options and desired values to evaluate.' }),
    ),
  })
  .openapi({
    required: ['ApplicationName', 'OptionSettings'],
    title: 'ValidateConfigurationSettingsMessage',
    description: 'A list of validation messages for a specified configuration template.',
  })
  .openapi('ValidateConfigurationSettingsMessage')

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

export const getActionAbortEnvironmentUpdateRoute = createRoute({
  method: 'get',
  path: '/#Action=AbortEnvironmentUpdate',
  description:
    'Cancels in-progress environment configuration update or application version deployment.',
  operationId: 'GET_AbortEnvironmentUpdate',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              'This specifies the ID of the environment with the in-progress update that you want to cancel.',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              'This specifies the name of the environment with the in-progress update that you want to cancel.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('AbortEnvironmentUpdate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AbortEnvironmentUpdate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionAbortEnvironmentUpdateRoute = createRoute({
  method: 'post',
  path: '/#Action=AbortEnvironmentUpdate',
  description:
    'Cancels in-progress environment configuration update or application version deployment.',
  operationId: 'POST_AbortEnvironmentUpdate',
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
      Action: z
        .literal('AbortEnvironmentUpdate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AbortEnvironmentUpdate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AbortEnvironmentUpdateMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionApplyEnvironmentManagedActionRoute = createRoute({
  method: 'get',
  path: '/#Action=ApplyEnvironmentManagedAction',
  description:
    'Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.',
  operationId: 'GET_ApplyEnvironmentManagedAction',
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
      EnvironmentName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description: 'The name of the target environment.',
            schema: { type: 'string' },
          },
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description: 'The environment ID of the target environment.',
            schema: { type: 'string' },
          },
        }),
      ActionId: z
        .string()
        .openapi({
          param: {
            name: 'ActionId',
            in: 'query',
            required: true,
            description: 'The action ID of the scheduled managed action to execute.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ApplyEnvironmentManagedAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplyEnvironmentManagedAction'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplyEnvironmentManagedActionResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    481: {
      description: 'ManagedActionInvalidStateException',
      content: { 'text/xml': { schema: ManagedActionInvalidStateExceptionSchema } },
    },
  },
})

export const postActionApplyEnvironmentManagedActionRoute = createRoute({
  method: 'post',
  path: '/#Action=ApplyEnvironmentManagedAction',
  description:
    'Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.',
  operationId: 'POST_ApplyEnvironmentManagedAction',
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
      Action: z
        .literal('ApplyEnvironmentManagedAction')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ApplyEnvironmentManagedAction'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ApplyEnvironmentManagedActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplyEnvironmentManagedActionResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    481: {
      description: 'ManagedActionInvalidStateException',
      content: { 'text/xml': { schema: ManagedActionInvalidStateExceptionSchema } },
    },
  },
})

export const getActionAssociateEnvironmentOperationsRoleRoute = createRoute({
  method: 'get',
  path: '/#Action=AssociateEnvironmentOperationsRole',
  description:
    'Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
  operationId: 'GET_AssociateEnvironmentOperationsRole',
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
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: true,
            description: 'The name of the environment to which to set the operations role.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      OperationsRole: z
        .string()
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'OperationsRole',
            in: 'query',
            required: true,
            description:
              "The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.",
            schema: { type: 'string', minLength: 1, maxLength: 256 },
          },
        }),
      Action: z
        .literal('AssociateEnvironmentOperationsRole')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AssociateEnvironmentOperationsRole'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionAssociateEnvironmentOperationsRoleRoute = createRoute({
  method: 'post',
  path: '/#Action=AssociateEnvironmentOperationsRole',
  description:
    'Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
  operationId: 'POST_AssociateEnvironmentOperationsRole',
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
      Action: z
        .literal('AssociateEnvironmentOperationsRole')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['AssociateEnvironmentOperationsRole'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: AssociateEnvironmentOperationsRoleMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionCheckDNSAvailabilityRoute = createRoute({
  method: 'get',
  path: '/#Action=CheckDNSAvailability',
  description: 'Checks if the specified CNAME is available.',
  operationId: 'GET_CheckDNSAvailability',
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
      CNAMEPrefix: z
        .string()
        .min(4)
        .max(63)
        .openapi({
          param: {
            name: 'CNAMEPrefix',
            in: 'query',
            required: true,
            description: 'The prefix used when this CNAME is reserved.',
            schema: { type: 'string', minLength: 4, maxLength: 63 },
          },
        }),
      Action: z
        .literal('CheckDNSAvailability')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CheckDNSAvailability'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CheckDNSAvailabilityResultMessageSchema } },
    },
  },
})

export const postActionCheckDNSAvailabilityRoute = createRoute({
  method: 'post',
  path: '/#Action=CheckDNSAvailability',
  description: 'Checks if the specified CNAME is available.',
  operationId: 'POST_CheckDNSAvailability',
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
      Action: z
        .literal('CheckDNSAvailability')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CheckDNSAvailability'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CheckDNSAvailabilityMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CheckDNSAvailabilityResultMessageSchema } },
    },
  },
})

export const getActionComposeEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/#Action=ComposeEnvironments',
  description:
    'Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.',
  operationId: 'GET_ComposeEnvironments',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: false,
            description:
              'The name of the application to which the specified source bundles belong.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      GroupName: z
        .string()
        .min(1)
        .max(19)
        .exactOptional()
        .openapi({
          param: {
            name: 'GroupName',
            in: 'query',
            required: false,
            description:
              'The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment\'s manifest ends with a + (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
            schema: { type: 'string', minLength: 1, maxLength: 19 },
          },
        }),
      VersionLabels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(VersionLabelSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VersionLabels',
            in: 'query',
            required: false,
            description:
              'A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/VersionLabel' } },
          },
        }),
      Action: z
        .literal('ComposeEnvironments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ComposeEnvironments'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionsMessageSchema } },
    },
    480: {
      description: 'TooManyEnvironmentsException',
      content: { 'text/xml': { schema: TooManyEnvironmentsExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionComposeEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/#Action=ComposeEnvironments',
  description:
    'Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.',
  operationId: 'POST_ComposeEnvironments',
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
      Action: z
        .literal('ComposeEnvironments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ComposeEnvironments'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ComposeEnvironmentsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionsMessageSchema } },
    },
    480: {
      description: 'TooManyEnvironmentsException',
      content: { 'text/xml': { schema: TooManyEnvironmentsExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionCreateApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateApplication',
  description:
    'Creates an application that has one configuration template named <code>default</code> and no application versions.',
  operationId: 'GET_CreateApplication',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['ServiceRole', ['ResourceLifecycleConfig']],
          ['VersionLifecycleConfig', ['ResourceLifecycleConfig']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          ApplicationName: z
            .string()
            .min(1)
            .max(100)
            .openapi({
              param: {
                name: 'ApplicationName',
                in: 'query',
                required: true,
                description: 'The name of the application. Must be unique within your account.',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          Description: z
            .string()
            .max(200)
            .exactOptional()
            .openapi({
              param: {
                name: 'Description',
                in: 'query',
                required: false,
                description: 'Your description of the application.',
                schema: { type: 'string', maxLength: 200 },
              },
            }),
          ResourceLifecycleConfig: z
            .object({
              ServiceRole: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "<p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>",
                  }),
              ).exactOptional(),
              VersionLifecycleConfig: z
                .object({
                  MaxCountRule: z
                    .object({
                      Enabled: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                            }),
                        ),
                      MaxCount: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          BoxedIntSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify the maximum number of application versions to retain.',
                            }),
                        )
                        .exactOptional(),
                      DeleteSourceFromS3: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({
                      required: ['Enabled'],
                      description:
                        'A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.',
                    })
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specify a max count rule to restrict the number of application versions that are retained for an application.',
                        }),
                    )
                    .exactOptional(),
                  MaxAgeRule: z
                    .object({
                      Enabled: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                            }),
                        ),
                      MaxAgeInDays: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          BoxedIntSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify the number of days to retain an application versions.',
                            }),
                        )
                        .exactOptional(),
                      DeleteSourceFromS3: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({
                      required: ['Enabled'],
                      description:
                        'A lifecycle rule that deletes application versions after the specified number of days.',
                    })
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specify a max age rule to restrict the length of time that application versions are retained for an application.',
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  description:
                    "<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>",
                  required: [],
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description: 'Defines lifecycle settings for application versions.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'ResourceLifecycleConfig',
                in: 'query',
                required: false,
                description:
                  'Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.',
                schema: {
                  type: 'object',
                  properties: {
                    ServiceRole: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            "<p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>",
                        },
                      ],
                    },
                    VersionLifecycleConfig: {
                      allOf: [
                        {
                          type: 'object',
                          properties: {
                            MaxCountRule: {
                              allOf: [
                                {
                                  type: 'object',
                                  required: ['Enabled'],
                                  properties: {
                                    Enabled: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                                        },
                                      ],
                                    },
                                    MaxCount: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedInt' },
                                        {
                                          description:
                                            'Specify the maximum number of application versions to retain.',
                                        },
                                      ],
                                    },
                                    DeleteSourceFromS3: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                                        },
                                      ],
                                    },
                                  },
                                  description:
                                    'A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.',
                                },
                                {
                                  description:
                                    'Specify a max count rule to restrict the number of application versions that are retained for an application.',
                                },
                              ],
                            },
                            MaxAgeRule: {
                              allOf: [
                                {
                                  type: 'object',
                                  required: ['Enabled'],
                                  properties: {
                                    Enabled: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                                        },
                                      ],
                                    },
                                    MaxAgeInDays: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedInt' },
                                        {
                                          description:
                                            'Specify the number of days to retain an application versions.',
                                        },
                                      ],
                                    },
                                    DeleteSourceFromS3: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                                        },
                                      ],
                                    },
                                  },
                                  description:
                                    'A lifecycle rule that deletes application versions after the specified number of days.',
                                },
                                {
                                  description:
                                    'Specify a max age rule to restrict the length of time that application versions are retained for an application.',
                                },
                              ],
                            },
                          },
                          description:
                            "<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>",
                        },
                        { description: 'Defines lifecycle settings for application versions.' },
                      ],
                    },
                  },
                  description:
                    'The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.',
                },
              },
              description:
                'The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.',
              required: [],
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(TagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  "<p>Specifies the tags applied to the application.</p> <p>Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.</p>",
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
              },
            }),
          Action: z
            .literal('CreateApplication')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateApplication'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionMessageSchema } },
    },
    480: {
      description: 'TooManyApplicationsException',
      content: { 'text/xml': { schema: TooManyApplicationsExceptionSchema } },
    },
  },
})

export const postActionCreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateApplication',
  description:
    'Creates an application that has one configuration template named <code>default</code> and no application versions.',
  operationId: 'POST_CreateApplication',
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
      Action: z
        .literal('CreateApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateApplication'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateApplicationMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionMessageSchema } },
    },
    480: {
      description: 'TooManyApplicationsException',
      content: { 'text/xml': { schema: TooManyApplicationsExceptionSchema } },
    },
  },
})

export const getActionCreateApplicationVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateApplicationVersion',
  description:
    "<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>",
  operationId: 'GET_CreateApplicationVersion',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['SourceType', ['SourceBuildInformation']],
          ['SourceRepository', ['SourceBuildInformation']],
          ['SourceLocation', ['SourceBuildInformation']],
          ['S3Bucket', ['SourceBundle']],
          ['S3Key', ['SourceBundle']],
          ['ArtifactName', ['BuildConfiguration']],
          ['CodeBuildServiceRole', ['BuildConfiguration']],
          ['ComputeType', ['BuildConfiguration']],
          ['Image', ['BuildConfiguration']],
          ['TimeoutInMinutes', ['BuildConfiguration']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          ApplicationName: z
            .string()
            .min(1)
            .max(100)
            .openapi({
              param: {
                name: 'ApplicationName',
                in: 'query',
                required: true,
                description:
                  ' The name of the application. If no application is found with this name, and <code>AutoCreateApplication</code> is <code>false</code>, returns an <code>InvalidParameterValue</code> error. ',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          VersionLabel: z
            .string()
            .min(1)
            .max(100)
            .openapi({
              param: {
                name: 'VersionLabel',
                in: 'query',
                required: true,
                description:
                  '<p>A label identifying this version.</p> <p>Constraint: Must be unique per application. If an application version already exists with this label for the specified application, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          Description: z
            .string()
            .max(200)
            .exactOptional()
            .openapi({
              param: {
                name: 'Description',
                in: 'query',
                required: false,
                description: 'A description of this application version.',
                schema: { type: 'string', maxLength: 200 },
              },
            }),
          SourceBuildInformation: z
            .object({
              SourceType: SourceTypeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The type of repository.</p> <ul> <li> <p> <code>Git</code> </p> </li> <li> <p> <code>Zip</code> </p> </li> </ul>',
                  }),
              ),
              SourceRepository: SourceRepositorySchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>Location where the repository is stored.</p> <ul> <li> <p> <code>CodeCommit</code> </p> </li> <li> <p> <code>S3</code> </p> </li> </ul>',
                  }),
              ),
              SourceLocation: SourceLocationSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code> </p> <ul> <li> <p>For <code>CodeCommit</code>, the format is the repository name and commit ID, separated by a forward slash. For example, <code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p> </li> <li> <p>For <code>S3</code>, the format is the S3 bucket name and object key, separated by a forward slash. For example, <code>my-s3-bucket/Folders/my-source-file</code>.</p> </li> </ul>',
                  }),
              ),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'SourceBuildInformation',
                in: 'query',
                required: false,
                description:
                  'Specify a commit in an AWS CodeCommit Git repository to use as the source code for the application version.',
                schema: {
                  type: 'object',
                  required: ['SourceType', 'SourceRepository', 'SourceLocation'],
                  properties: {
                    SourceType: {
                      allOf: [
                        { $ref: '#/components/schemas/SourceType' },
                        {
                          description:
                            '<p>The type of repository.</p> <ul> <li> <p> <code>Git</code> </p> </li> <li> <p> <code>Zip</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    SourceRepository: {
                      allOf: [
                        { $ref: '#/components/schemas/SourceRepository' },
                        {
                          description:
                            '<p>Location where the repository is stored.</p> <ul> <li> <p> <code>CodeCommit</code> </p> </li> <li> <p> <code>S3</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    SourceLocation: {
                      allOf: [
                        { $ref: '#/components/schemas/SourceLocation' },
                        {
                          description:
                            '<p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code> </p> <ul> <li> <p>For <code>CodeCommit</code>, the format is the repository name and commit ID, separated by a forward slash. For example, <code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p> </li> <li> <p>For <code>S3</code>, the format is the S3 bucket name and object key, separated by a forward slash. For example, <code>my-s3-bucket/Folders/my-source-file</code>.</p> </li> </ul>',
                        },
                      ],
                    },
                  },
                  description: 'Location of the source code for an application version.',
                },
              },
              required: ['SourceType', 'SourceRepository', 'SourceLocation'],
              description: 'Location of the source code for an application version.',
            }),
          SourceBundle: z
            .object({
              S3Bucket: S3BucketSchema.and(
                z.any().openapi({ description: 'The Amazon S3 bucket where the data is located.' }),
              ).exactOptional(),
              S3Key: S3KeySchema.and(
                z.any().openapi({ description: 'The Amazon S3 key where the data is located.' }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'SourceBundle',
                in: 'query',
                required: false,
                description:
                  '<p>The Amazon S3 bucket and key that identify the location of the source bundle for this version.</p> <note> <p>The Amazon S3 bucket must be in the same region as the environment.</p> </note> <p>Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with <code>SourceBuildInformation</code>), but not both. If neither <code>SourceBundle</code> nor <code>SourceBuildInformation</code> are provided, Elastic Beanstalk uses a sample application.</p>',
                schema: {
                  type: 'object',
                  properties: {
                    S3Bucket: {
                      allOf: [
                        { $ref: '#/components/schemas/S3Bucket' },
                        { description: 'The Amazon S3 bucket where the data is located.' },
                      ],
                    },
                    S3Key: {
                      allOf: [
                        { $ref: '#/components/schemas/S3Key' },
                        { description: 'The Amazon S3 key where the data is located.' },
                      ],
                    },
                  },
                  description: 'The bucket and key of an item stored in Amazon S3.',
                },
              },
              description: 'The bucket and key of an item stored in Amazon S3.',
              required: [],
            }),
          BuildConfiguration: z
            .object({
              ArtifactName: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The name of the artifact of the CodeBuild build. If provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>-<i>artifact-name</i>.zip. If not provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>.zip. ',
                  }),
              ).exactOptional(),
              CodeBuildServiceRole: NonEmptyStringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.',
                  }),
              ),
              ComputeType: ComputeTypeSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>Information about the compute resources the build project will use.</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds</code> </p> </li> </ul>',
                  }),
              ).exactOptional(),
              Image: NonEmptyStringSchema.and(
                z
                  .any()
                  .openapi({
                    description: 'The ID of the Docker image to use for this build project.',
                  }),
              ),
              TimeoutInMinutes: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  BoxedIntSchema,
                )
                .and(
                  z
                    .any()
                    .openapi({
                      description:
                        'How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.',
                    }),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'BuildConfiguration',
                in: 'query',
                required: false,
                description: 'Settings for an AWS CodeBuild build.',
                schema: {
                  type: 'object',
                  required: ['CodeBuildServiceRole', 'Image'],
                  properties: {
                    ArtifactName: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            'The name of the artifact of the CodeBuild build. If provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>-<i>artifact-name</i>.zip. If not provided, Elastic Beanstalk stores the build artifact in the S3 location <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>.zip. ',
                        },
                      ],
                    },
                    CodeBuildServiceRole: {
                      allOf: [
                        { $ref: '#/components/schemas/NonEmptyString' },
                        {
                          description:
                            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.',
                        },
                      ],
                    },
                    ComputeType: {
                      allOf: [
                        { $ref: '#/components/schemas/ComputeType' },
                        {
                          description:
                            '<p>Information about the compute resources the build project will use.</p> <ul> <li> <p> <code>BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code> </p> </li> <li> <p> <code>BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    Image: {
                      allOf: [
                        { $ref: '#/components/schemas/NonEmptyString' },
                        {
                          description: 'The ID of the Docker image to use for this build project.',
                        },
                      ],
                    },
                    TimeoutInMinutes: {
                      allOf: [
                        { $ref: '#/components/schemas/BoxedInt' },
                        {
                          description:
                            'How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.',
                        },
                      ],
                    },
                  },
                  description: 'Settings for an AWS CodeBuild build.',
                },
              },
              required: ['CodeBuildServiceRole', 'Image'],
              description: 'Settings for an AWS CodeBuild build.',
            }),
          AutoCreateApplication: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'AutoCreateApplication',
                in: 'query',
                required: false,
                description:
                  "Set to <code>true</code> to create an application with the specified name if it doesn't already exist.",
                schema: { type: 'boolean' },
              },
            }),
          Process: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'Process',
                in: 'query',
                required: false,
                description:
                  "<p>Pre-processes and validates the environment manifest (<code>env.yaml</code>) and configuration files (<code>*.config</code> files in the <code>.ebextensions</code> folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.</p> <p>You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.</p> <note> <p>The <code>Process</code> option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.</p> </note>",
                schema: { type: 'boolean' },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(TagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  "<p>Specifies the tags applied to the application version.</p> <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.</p>",
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
              },
            }),
          Action: z
            .literal('CreateApplicationVersion')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateApplicationVersion'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionMessageSchema } },
    },
    480: {
      description: 'TooManyApplicationsException',
      content: { 'text/xml': { schema: TooManyApplicationsExceptionSchema } },
    },
    481: {
      description: 'TooManyApplicationVersionsException',
      content: { 'text/xml': { schema: TooManyApplicationVersionsExceptionSchema } },
    },
    482: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    483: {
      description: 'S3LocationNotInServiceRegionException',
      content: { 'text/xml': { schema: S3LocationNotInServiceRegionExceptionSchema } },
    },
    484: {
      description: 'CodeBuildNotInServiceRegionException',
      content: { 'text/xml': { schema: CodeBuildNotInServiceRegionExceptionSchema } },
    },
  },
})

export const postActionCreateApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateApplicationVersion',
  description:
    "<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>",
  operationId: 'POST_CreateApplicationVersion',
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
      Action: z
        .literal('CreateApplicationVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateApplicationVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateApplicationVersionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionMessageSchema } },
    },
    480: {
      description: 'TooManyApplicationsException',
      content: { 'text/xml': { schema: TooManyApplicationsExceptionSchema } },
    },
    481: {
      description: 'TooManyApplicationVersionsException',
      content: { 'text/xml': { schema: TooManyApplicationVersionsExceptionSchema } },
    },
    482: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    483: {
      description: 'S3LocationNotInServiceRegionException',
      content: { 'text/xml': { schema: S3LocationNotInServiceRegionExceptionSchema } },
    },
    484: {
      description: 'CodeBuildNotInServiceRegionException',
      content: { 'text/xml': { schema: CodeBuildNotInServiceRegionExceptionSchema } },
    },
  },
})

export const getActionCreateConfigurationTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateConfigurationTemplate',
  description:
    "<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>",
  operationId: 'GET_CreateConfigurationTemplate',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description:
              'The name of the Elastic Beanstalk application to associate with this configuration template.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the configuration template.</p> <p>Constraint: This name must be unique per application.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      SolutionStackName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SolutionStackName',
            in: 'query',
            required: false,
            description:
              '<p>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, <code>64bit Amazon Linux 2013.09 running Tomcat 7 Java 7</code>. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Supported Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <p>You must specify <code>SolutionStackName</code> if you don\'t specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SourceConfiguration</code>.</p> <p>Use the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html"> <code>ListAvailableSolutionStacks</code> </a> API to obtain a list of available solution stacks.</p>',
            schema: { type: 'string' },
          },
        }),
      PlatformArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PlatformArn',
            in: 'query',
            required: false,
            description:
              '<p>The Amazon Resource Name (ARN) of the custom platform. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html"> Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, then don\'t specify <code>SolutionStackName</code>.</p> </note>',
            schema: { type: 'string' },
          },
        }),
      SourceConfiguration: z
        .object({
          ApplicationName: ApplicationNameSchema.and(
            z
              .any()
              .openapi({
                description: 'The name of the application associated with the configuration.',
              }),
          ).exactOptional(),
          TemplateName: ConfigurationTemplateNameSchema.and(
            z.any().openapi({ description: 'The name of the configuration template.' }),
          ).exactOptional(),
        })
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceConfiguration',
            in: 'query',
            required: false,
            description:
              "<p>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.</p> <p>Values specified in <code>OptionSettings</code> override any values obtained from the <code>SourceConfiguration</code>.</p> <p>You must specify <code>SourceConfiguration</code> if you don't specify <code>PlatformArn</code>, <code>EnvironmentId</code>, or <code>SolutionStackName</code>.</p> <p>Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.</p>",
            schema: {
              type: 'object',
              properties: {
                ApplicationName: {
                  allOf: [
                    { $ref: '#/components/schemas/ApplicationName' },
                    {
                      description: 'The name of the application associated with the configuration.',
                    },
                  ],
                },
                TemplateName: {
                  allOf: [
                    { $ref: '#/components/schemas/ConfigurationTemplateName' },
                    { description: 'The name of the configuration template.' },
                  ],
                },
              },
              description: 'A specification for an environment configuration.',
            },
          },
          description: 'A specification for an environment configuration.',
          required: [],
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              "The ID of an environment whose settings you want to use to create the configuration template. You must specify <code>EnvironmentId</code> if you don't specify <code>PlatformArn</code>, <code>SolutionStackName</code>, or <code>SourceConfiguration</code>.",
            schema: { type: 'string' },
          },
        }),
      Description: z
        .string()
        .max(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'Description',
            in: 'query',
            required: false,
            description: 'An optional description for this configuration.',
            schema: { type: 'string', maxLength: 200 },
          },
        }),
      OptionSettings: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConfigurationOptionSettingSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OptionSettings',
            in: 'query',
            required: false,
            description:
              'Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
            },
          },
        }),
      Tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Tags',
            in: 'query',
            required: false,
            description: 'Specifies the tags applied to the configuration template.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      Action: z
        .literal('CreateConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
    482: {
      description: 'TooManyConfigurationTemplatesException',
      content: { 'text/xml': { schema: TooManyConfigurationTemplatesExceptionSchema } },
    },
  },
})

export const postActionCreateConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateConfigurationTemplate',
  description:
    "<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>",
  operationId: 'POST_CreateConfigurationTemplate',
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
      Action: z
        .literal('CreateConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateConfigurationTemplateMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
    482: {
      description: 'TooManyConfigurationTemplatesException',
      content: { 'text/xml': { schema: TooManyConfigurationTemplatesExceptionSchema } },
    },
  },
})

export const getActionCreateEnvironmentRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateEnvironment',
  description:
    'Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.',
  operationId: 'GET_CreateEnvironment',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Name', ['Tier']],
          ['Type', ['Tier']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          ApplicationName: z
            .string()
            .min(1)
            .max(100)
            .openapi({
              param: {
                name: 'ApplicationName',
                in: 'query',
                required: true,
                description:
                  'The name of the application that is associated with this environment.',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          EnvironmentName: z
            .string()
            .min(4)
            .max(40)
            .exactOptional()
            .openapi({
              param: {
                name: 'EnvironmentName',
                in: 'query',
                required: false,
                description:
                  "<p>A unique name for the environment.</p> <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>If you don't specify the <code>CNAMEPrefix</code> parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.</p>",
                schema: { type: 'string', minLength: 4, maxLength: 40 },
              },
            }),
          GroupName: z
            .string()
            .min(1)
            .max(19)
            .exactOptional()
            .openapi({
              param: {
                name: 'GroupName',
                in: 'query',
                required: false,
                description:
                  'The name of the group to which the target environment belongs. Specify a group name only if the environment\'s name is specified in an environment manifest and not with the environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
                schema: { type: 'string', minLength: 1, maxLength: 19 },
              },
            }),
          Description: z
            .string()
            .max(200)
            .exactOptional()
            .openapi({
              param: {
                name: 'Description',
                in: 'query',
                required: false,
                description: 'Your description for this environment.',
                schema: { type: 'string', maxLength: 200 },
              },
            }),
          CNAMEPrefix: z
            .string()
            .min(4)
            .max(63)
            .exactOptional()
            .openapi({
              param: {
                name: 'CNAMEPrefix',
                in: 'query',
                required: false,
                description:
                  'If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.',
                schema: { type: 'string', minLength: 4, maxLength: 63 },
              },
            }),
          Tier: z
            .object({
              Name: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>WebServer</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>Worker</code> </p> </li> </ul>',
                  }),
              ).exactOptional(),
              Type: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The type of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>Standard</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>SQS/HTTP</code> </p> </li> </ul>',
                  }),
              ).exactOptional(),
              Version: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "<p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.</p> <note> <p>This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.</p> </note>",
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Tier',
                in: 'query',
                required: false,
                description:
                  'Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.',
                schema: {
                  type: 'object',
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            '<p>The name of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>WebServer</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>Worker</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    Type: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            '<p>The type of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>Standard</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>SQS/HTTP</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    Version: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            "<p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.</p> <note> <p>This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.</p> </note>",
                        },
                      ],
                    },
                  },
                  description: 'Describes the properties of an environment tier',
                },
              },
              description: 'Describes the properties of an environment tier',
              required: [],
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(TagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description: 'Specifies the tags applied to resources in the environment.',
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
              },
            }),
          VersionLabel: z
            .string()
            .min(1)
            .max(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'VersionLabel',
                in: 'query',
                required: false,
                description:
                  '<p>The name of the application version to deploy.</p> <p>Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.</p>',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          TemplateName: z
            .string()
            .min(1)
            .max(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'TemplateName',
                in: 'query',
                required: false,
                description:
                  "<p>The name of the Elastic Beanstalk configuration template to use with the environment.</p> <note> <p>If you specify <code>TemplateName</code>, then don't specify <code>SolutionStackName</code>.</p> </note>",
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          SolutionStackName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'SolutionStackName',
                in: 'query',
                required: false,
                description:
                  '<p>The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html">Elastic Beanstalk Supported Platforms</a> in the <i>AWS Elastic Beanstalk Platforms</i> guide.</p> <note> <p>If you specify <code>SolutionStackName</code>, don\'t specify <code>PlatformArn</code> or <code>TemplateName</code>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          PlatformArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'PlatformArn',
                in: 'query',
                required: false,
                description:
                  '<p>The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html">Custom Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p> <note> <p>If you specify <code>PlatformArn</code>, don\'t specify <code>SolutionStackName</code>.</p> </note>',
                schema: { type: 'string' },
              },
            }),
          OptionSettings: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(ConfigurationOptionSettingSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionSettings',
                in: 'query',
                required: false,
                description:
                  'If specified, AWS Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
                },
              },
            }),
          OptionsToRemove: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(OptionSpecificationSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionsToRemove',
                in: 'query',
                required: false,
                description:
                  'A list of custom user-defined configuration options to remove from the configuration set for this new environment.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/OptionSpecification' },
                },
              },
            }),
          OperationsRole: z
            .string()
            .min(1)
            .max(256)
            .exactOptional()
            .openapi({
              param: {
                name: 'OperationsRole',
                in: 'query',
                required: false,
                description:
                  'The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment\'s operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the <code>iam:PassRole</code> permission for the role. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
                schema: { type: 'string', minLength: 1, maxLength: 256 },
              },
            }),
          Action: z
            .literal('CreateEnvironment')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreateEnvironment'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'TooManyEnvironmentsException',
      content: { 'text/xml': { schema: TooManyEnvironmentsExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionCreateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateEnvironment',
  description:
    'Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.',
  operationId: 'POST_CreateEnvironment',
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
      Action: z
        .literal('CreateEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateEnvironmentMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'TooManyEnvironmentsException',
      content: { 'text/xml': { schema: TooManyEnvironmentsExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionCreatePlatformVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=CreatePlatformVersion',
  description: 'Create a new version of your custom platform.',
  operationId: 'GET_CreatePlatformVersion',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['S3Bucket', ['PlatformDefinitionBundle']],
          ['S3Key', ['PlatformDefinitionBundle']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          PlatformName: z
            .string()
            .openapi({
              param: {
                name: 'PlatformName',
                in: 'query',
                required: true,
                description: 'The name of your custom platform.',
                schema: { type: 'string' },
              },
            }),
          PlatformVersion: z
            .string()
            .openapi({
              param: {
                name: 'PlatformVersion',
                in: 'query',
                required: true,
                description: 'The number, such as 1.0.2, for the new platform version.',
                schema: { type: 'string' },
              },
            }),
          PlatformDefinitionBundle: z
            .object({
              S3Bucket: S3BucketSchema.and(
                z.any().openapi({ description: 'The Amazon S3 bucket where the data is located.' }),
              ).exactOptional(),
              S3Key: S3KeySchema.and(
                z.any().openapi({ description: 'The Amazon S3 key where the data is located.' }),
              ).exactOptional(),
            })
            .openapi({
              param: {
                name: 'PlatformDefinitionBundle',
                in: 'query',
                required: true,
                description: 'The location of the platform definition archive in Amazon S3.',
                schema: {
                  type: 'object',
                  properties: {
                    S3Bucket: {
                      allOf: [
                        { $ref: '#/components/schemas/S3Bucket' },
                        { description: 'The Amazon S3 bucket where the data is located.' },
                      ],
                    },
                    S3Key: {
                      allOf: [
                        { $ref: '#/components/schemas/S3Key' },
                        { description: 'The Amazon S3 key where the data is located.' },
                      ],
                    },
                  },
                  description: 'The bucket and key of an item stored in Amazon S3.',
                },
              },
              description: 'The bucket and key of an item stored in Amazon S3.',
              required: [],
            }),
          EnvironmentName: z
            .string()
            .min(4)
            .max(40)
            .exactOptional()
            .openapi({
              param: {
                name: 'EnvironmentName',
                in: 'query',
                required: false,
                description: 'The name of the builder environment.',
                schema: { type: 'string', minLength: 4, maxLength: 40 },
              },
            }),
          OptionSettings: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(ConfigurationOptionSettingSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionSettings',
                in: 'query',
                required: false,
                description:
                  'The configuration option settings to apply to the builder environment.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
                },
              },
            }),
          Tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(TagSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'Tags',
                in: 'query',
                required: false,
                description:
                  "<p>Specifies the tags applied to the new platform version.</p> <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</p>",
                schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
              },
            }),
          Action: z
            .literal('CreatePlatformVersion')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['CreatePlatformVersion'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreatePlatformVersionResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    482: {
      description: 'TooManyPlatformsException',
      content: { 'text/xml': { schema: TooManyPlatformsExceptionSchema } },
    },
  },
})

export const postActionCreatePlatformVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=CreatePlatformVersion',
  description: 'Create a new version of your custom platform.',
  operationId: 'POST_CreatePlatformVersion',
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
      Action: z
        .literal('CreatePlatformVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreatePlatformVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreatePlatformVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreatePlatformVersionResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    482: {
      description: 'TooManyPlatformsException',
      content: { 'text/xml': { schema: TooManyPlatformsExceptionSchema } },
    },
  },
})

export const getActionCreateStorageLocationRoute = createRoute({
  method: 'get',
  path: '/#Action=CreateStorageLocation',
  description:
    'Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.',
  operationId: 'GET_CreateStorageLocation',
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
      Action: z
        .literal('CreateStorageLocation')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateStorageLocation'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateStorageLocationResultMessageSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
    481: {
      description: 'S3SubscriptionRequiredException',
      content: { 'text/xml': { schema: S3SubscriptionRequiredExceptionSchema } },
    },
    482: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionCreateStorageLocationRoute = createRoute({
  method: 'post',
  path: '/#Action=CreateStorageLocation',
  description:
    'Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.',
  operationId: 'POST_CreateStorageLocation',
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
      Action: z
        .literal('CreateStorageLocation')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateStorageLocation'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: CreateStorageLocationResultMessageSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
    481: {
      description: 'S3SubscriptionRequiredException',
      content: { 'text/xml': { schema: S3SubscriptionRequiredExceptionSchema } },
    },
    482: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionDeleteApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteApplication',
  description:
    '<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>',
  operationId: 'GET_DeleteApplication',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description: 'The name of the application to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TerminateEnvByForce: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'TerminateEnvByForce',
            in: 'query',
            required: false,
            description:
              'When set to true, running environments will be terminated before deleting the application.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DeleteApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteApplication'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
  },
})

export const postActionDeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteApplication',
  description:
    '<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>',
  operationId: 'POST_DeleteApplication',
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
      Action: z
        .literal('DeleteApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteApplication'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteApplicationMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
  },
})

export const getActionDeleteApplicationVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteApplicationVersion',
  description:
    '<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>',
  operationId: 'GET_DeleteApplicationVersion',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description: 'The name of the application to which the version belongs.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      VersionLabel: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'VersionLabel',
            in: 'query',
            required: true,
            description: 'The label of the version to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      DeleteSourceBundle: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'DeleteSourceBundle',
            in: 'query',
            required: false,
            description:
              'Set to <code>true</code> to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('DeleteApplicationVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteApplicationVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'SourceBundleDeletionException',
      content: { 'text/xml': { schema: SourceBundleDeletionExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    482: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    483: {
      description: 'S3LocationNotInServiceRegionException',
      content: { 'text/xml': { schema: S3LocationNotInServiceRegionExceptionSchema } },
    },
  },
})

export const postActionDeleteApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteApplicationVersion',
  description:
    '<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>',
  operationId: 'POST_DeleteApplicationVersion',
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
      Action: z
        .literal('DeleteApplicationVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteApplicationVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteApplicationVersionMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'SourceBundleDeletionException',
      content: { 'text/xml': { schema: SourceBundleDeletionExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    482: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    483: {
      description: 'S3LocationNotInServiceRegionException',
      content: { 'text/xml': { schema: S3LocationNotInServiceRegionExceptionSchema } },
    },
  },
})

export const getActionDeleteConfigurationTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteConfigurationTemplate',
  description:
    "<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>",
  operationId: 'GET_DeleteConfigurationTemplate',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description: 'The name of the application to delete the configuration template from.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description: 'The name of the configuration template to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      Action: z
        .literal('DeleteConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
  },
})

export const postActionDeleteConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteConfigurationTemplate',
  description:
    "<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>",
  operationId: 'POST_DeleteConfigurationTemplate',
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
      Action: z
        .literal('DeleteConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteConfigurationTemplateMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
  },
})

export const getActionDeleteEnvironmentConfigurationRoute = createRoute({
  method: 'get',
  path: '/#Action=DeleteEnvironmentConfiguration',
  description:
    '<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>',
  operationId: 'GET_DeleteEnvironmentConfiguration',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description: 'The name of the application the environment is associated with.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: true,
            description: 'The name of the environment to delete the draft configuration from.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('DeleteEnvironmentConfiguration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEnvironmentConfiguration'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionDeleteEnvironmentConfigurationRoute = createRoute({
  method: 'post',
  path: '/#Action=DeleteEnvironmentConfiguration',
  description:
    '<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>',
  operationId: 'POST_DeleteEnvironmentConfiguration',
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
      Action: z
        .literal('DeleteEnvironmentConfiguration')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeleteEnvironmentConfiguration'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeleteEnvironmentConfigurationMessageSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionDeletePlatformVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=DeletePlatformVersion',
  description: 'Deletes the specified version of a custom platform.',
  operationId: 'GET_DeletePlatformVersion',
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
      PlatformArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PlatformArn',
            in: 'query',
            required: false,
            description: 'The ARN of the version of the custom platform.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DeletePlatformVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeletePlatformVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeletePlatformVersionResultSchema } },
    },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    482: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    483: {
      description: 'PlatformVersionStillReferencedException',
      content: { 'text/xml': { schema: PlatformVersionStillReferencedExceptionSchema } },
    },
  },
})

export const postActionDeletePlatformVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=DeletePlatformVersion',
  description: 'Deletes the specified version of a custom platform.',
  operationId: 'POST_DeletePlatformVersion',
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
      Action: z
        .literal('DeletePlatformVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DeletePlatformVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DeletePlatformVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DeletePlatformVersionResultSchema } },
    },
    480: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    481: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    482: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
    483: {
      description: 'PlatformVersionStillReferencedException',
      content: { 'text/xml': { schema: PlatformVersionStillReferencedExceptionSchema } },
    },
  },
})

export const getActionDescribeAccountAttributesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeAccountAttributes',
  description:
    '<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>',
  operationId: 'GET_DescribeAccountAttributes',
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
      Action: z
        .literal('DescribeAccountAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountAttributesResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionDescribeAccountAttributesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeAccountAttributes',
  description:
    '<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>',
  operationId: 'POST_DescribeAccountAttributes',
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
      Action: z
        .literal('DescribeAccountAttributes')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeAccountAttributes'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeAccountAttributesResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionDescribeApplicationVersionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeApplicationVersions',
  description: 'Retrieve a list of application versions.',
  operationId: 'GET_DescribeApplicationVersions',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: false,
            description:
              'Specify an application name to show only application versions for that application.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      VersionLabels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(VersionLabelSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'VersionLabels',
            in: 'query',
            required: false,
            description: 'Specify a version label to show a specific application version.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/VersionLabel' } },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a maximum number of application versions to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available application versions are retrieved in a single response.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeApplicationVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeApplicationVersions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionsMessageSchema } },
    },
  },
})

export const postActionDescribeApplicationVersionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeApplicationVersions',
  description: 'Retrieve a list of application versions.',
  operationId: 'POST_DescribeApplicationVersions',
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
      Action: z
        .literal('DescribeApplicationVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeApplicationVersions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeApplicationVersionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionsMessageSchema } },
    },
  },
})

export const getActionDescribeApplicationsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeApplications',
  description: 'Returns the descriptions of existing applications.',
  operationId: 'GET_DescribeApplications',
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
      ApplicationNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ApplicationNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationNames',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/ApplicationName' } },
          },
        }),
      Action: z
        .literal('DescribeApplications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeApplications'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionsMessageSchema } },
    },
  },
})

export const postActionDescribeApplicationsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeApplications',
  description: 'Returns the descriptions of existing applications.',
  operationId: 'POST_DescribeApplications',
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
      Action: z
        .literal('DescribeApplications')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeApplications'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeApplicationsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionsMessageSchema } },
    },
  },
})

export const getActionDescribeConfigurationOptionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeConfigurationOptions',
  description:
    'Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.',
  operationId: 'GET_DescribeConfigurationOptions',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: false,
            description:
              'The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: false,
            description:
              'The name of the configuration template whose configuration options you want to describe.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              'The name of the environment whose configuration options you want to describe.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      SolutionStackName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SolutionStackName',
            in: 'query',
            required: false,
            description:
              'The name of the solution stack whose configuration options you want to describe.',
            schema: { type: 'string' },
          },
        }),
      PlatformArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PlatformArn',
            in: 'query',
            required: false,
            description: 'The ARN of the custom platform.',
            schema: { type: 'string' },
          },
        }),
      Options: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(OptionSpecificationSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Options',
            in: 'query',
            required: false,
            description: 'If specified, restricts the descriptions to only the specified options.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/OptionSpecification' } },
          },
        }),
      Action: z
        .literal('DescribeConfigurationOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationOptionsDescriptionSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const postActionDescribeConfigurationOptionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeConfigurationOptions',
  description:
    'Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.',
  operationId: 'POST_DescribeConfigurationOptions',
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
      Action: z
        .literal('DescribeConfigurationOptions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationOptions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeConfigurationOptionsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationOptionsDescriptionSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const getActionDescribeConfigurationSettingsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeConfigurationSettings',
  description:
    '<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>',
  operationId: 'GET_DescribeConfigurationSettings',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description: 'The application for the environment or configuration template.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the configuration template to describe.</p> <p> Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to describe.</p> <p> Condition: You must specify either this or a TemplateName, but not both. If you specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('DescribeConfigurationSettings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationSettings'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionsSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const postActionDescribeConfigurationSettingsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeConfigurationSettings',
  description:
    '<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>',
  operationId: 'POST_DescribeConfigurationSettings',
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
      Action: z
        .literal('DescribeConfigurationSettings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeConfigurationSettings'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeConfigurationSettingsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionsSchema } },
    },
    480: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const getActionDescribeEnvironmentHealthRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEnvironmentHealth',
  description:
    'Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.',
  operationId: 'GET_DescribeEnvironmentHealth',
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
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>',
            schema: { type: 'string' },
          },
        }),
      AttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EnvironmentHealthAttributeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeNames',
            in: 'query',
            required: false,
            description:
              'Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/EnvironmentHealthAttribute' },
            },
          },
        }),
      Action: z
        .literal('DescribeEnvironmentHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentHealth'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentHealthResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'text/xml': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionDescribeEnvironmentHealthRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEnvironmentHealth',
  description:
    'Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.',
  operationId: 'POST_DescribeEnvironmentHealth',
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
      Action: z
        .literal('DescribeEnvironmentHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentHealth'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEnvironmentHealthRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentHealthResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'text/xml': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionDescribeEnvironmentManagedActionHistoryRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEnvironmentManagedActionHistory',
  description: "Lists an environment's completed and failed managed actions.",
  operationId: 'GET_DescribeEnvironmentManagedActionHistory',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description: 'The environment ID of the target environment.',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description: 'The name of the target environment.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'The pagination token returned by a previous request.',
            schema: { type: 'string' },
          },
        }),
      MaxItems: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return for a single request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      Action: z
        .literal('DescribeEnvironmentManagedActionHistory')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentManagedActionHistory'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentManagedActionHistoryResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionDescribeEnvironmentManagedActionHistoryRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEnvironmentManagedActionHistory',
  description: "Lists an environment's completed and failed managed actions.",
  operationId: 'POST_DescribeEnvironmentManagedActionHistory',
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
      MaxItems: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxItems',
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
      Action: z
        .literal('DescribeEnvironmentManagedActionHistory')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentManagedActionHistory'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DescribeEnvironmentManagedActionHistoryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentManagedActionHistoryResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionDescribeEnvironmentManagedActionsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEnvironmentManagedActions',
  description: "Lists an environment's upcoming and in-progress managed actions.",
  operationId: 'GET_DescribeEnvironmentManagedActions',
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
      EnvironmentName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description: 'The name of the target environment.',
            schema: { type: 'string' },
          },
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description: 'The environment ID of the target environment.',
            schema: { type: 'string' },
          },
        }),
      Status: z
        .enum(['Scheduled', 'Pending', 'Running', 'Unknown'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Status',
            in: 'query',
            required: false,
            description: 'To show only actions with a particular status, specify a status.',
            schema: { type: 'string', enum: ['Scheduled', 'Pending', 'Running', 'Unknown'] },
          },
        }),
      Action: z
        .literal('DescribeEnvironmentManagedActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentManagedActions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentManagedActionsResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionDescribeEnvironmentManagedActionsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEnvironmentManagedActions',
  description: "Lists an environment's upcoming and in-progress managed actions.",
  operationId: 'POST_DescribeEnvironmentManagedActions',
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
      Action: z
        .literal('DescribeEnvironmentManagedActions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentManagedActions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEnvironmentManagedActionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeEnvironmentManagedActionsResultSchema } },
    },
    480: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionDescribeEnvironmentResourcesRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEnvironmentResources',
  description: 'Returns AWS resources for this environment.',
  operationId: 'GET_DescribeEnvironmentResources',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to retrieve AWS resource usage data.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('DescribeEnvironmentResources')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentResources'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentResourceDescriptionsMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionDescribeEnvironmentResourcesRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEnvironmentResources',
  description: 'Returns AWS resources for this environment.',
  operationId: 'POST_DescribeEnvironmentResources',
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
      Action: z
        .literal('DescribeEnvironmentResources')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironmentResources'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEnvironmentResourcesMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentResourceDescriptionsMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionDescribeEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEnvironments',
  description: 'Returns descriptions for existing environments.',
  operationId: 'GET_DescribeEnvironments',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      VersionLabel: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'VersionLabel',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EnvironmentIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentIds',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/EnvironmentId' } },
          },
        }),
      EnvironmentNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(EnvironmentNameSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentNames',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/EnvironmentName' } },
          },
        }),
      IncludeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeDeleted',
            in: 'query',
            required: false,
            description:
              '<p>Indicates whether to include deleted environments:</p> <p> <code>true</code>: Environments that have been deleted after <code>IncludedDeletedBackTo</code> are displayed.</p> <p> <code>false</code>: Do not include deleted environments.</p>',
            schema: { type: 'boolean' },
          },
        }),
      IncludedDeletedBackTo: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludedDeletedBackTo',
            in: 'query',
            required: false,
            description:
              ' If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then environments deleted after this date are displayed. ',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a maximum number of environments to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available environments are retrieved in a single response.</p>',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEnvironments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironments'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionsMessageSchema } },
    },
  },
})

export const postActionDescribeEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEnvironments',
  description: 'Returns descriptions for existing environments.',
  operationId: 'POST_DescribeEnvironments',
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
      Action: z
        .literal('DescribeEnvironments')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEnvironments'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEnvironmentsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionsMessageSchema } },
    },
  },
})

export const getActionDescribeEventsRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeEvents',
  description:
    '<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>',
  operationId: 'GET_DescribeEvents',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      VersionLabel: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'VersionLabel',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      PlatformArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PlatformArn',
            in: 'query',
            required: false,
            description:
              'The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.',
            schema: { type: 'string' },
          },
        }),
      RequestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'RequestId',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.',
            schema: { type: 'string' },
          },
        }),
      Severity: z
        .enum(['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'Severity',
            in: 'query',
            required: false,
            description:
              'If specified, limits the events returned from this call to include only those with the specified severity or higher.',
            schema: { type: 'string', enum: ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'] },
          },
        }),
      StartTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'StartTime',
            in: 'query',
            required: false,
            description:
              'If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      EndTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'EndTime',
            in: 'query',
            required: false,
            description:
              ' If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>. ',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description:
              'Specifies the maximum number of events that can be returned, beginning with the most recent event.',
            schema: { type: 'integer', minimum: 1, maximum: 1000 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              'Pagination token. If specified, the events return the next batch of results.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribeEvents')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEvents'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventDescriptionsMessageSchema } },
    },
  },
})

export const postActionDescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeEvents',
  description:
    '<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>',
  operationId: 'POST_DescribeEvents',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('DescribeEvents')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeEvents'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeEventsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EventDescriptionsMessageSchema } },
    },
  },
})

export const getActionDescribeInstancesHealthRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribeInstancesHealth',
  description:
    'Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.',
  operationId: 'GET_DescribeInstancesHealth',
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
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description: 'Specify the AWS Elastic Beanstalk environment by name.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description: 'Specify the AWS Elastic Beanstalk environment by ID.',
            schema: { type: 'string' },
          },
        }),
      AttributeNames: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(InstancesHealthAttributeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AttributeNames',
            in: 'query',
            required: false,
            description:
              'Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/InstancesHealthAttribute' },
            },
          },
        }),
      NextToken: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: 'Specify the pagination token returned by a previous call.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      Action: z
        .literal('DescribeInstancesHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInstancesHealth'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeInstancesHealthResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'text/xml': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionDescribeInstancesHealthRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribeInstancesHealth',
  description:
    'Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.',
  operationId: 'POST_DescribeInstancesHealth',
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
      Action: z
        .literal('DescribeInstancesHealth')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribeInstancesHealth'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribeInstancesHealthRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribeInstancesHealthResultSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'text/xml': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionDescribePlatformVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=DescribePlatformVersion',
  description:
    '<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'GET_DescribePlatformVersion',
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
      PlatformArn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PlatformArn',
            in: 'query',
            required: false,
            description: 'The ARN of the platform version.',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('DescribePlatformVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribePlatformVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribePlatformVersionResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionDescribePlatformVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=DescribePlatformVersion',
  description:
    '<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'POST_DescribePlatformVersion',
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
      Action: z
        .literal('DescribePlatformVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DescribePlatformVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: DescribePlatformVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: DescribePlatformVersionResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionDisassociateEnvironmentOperationsRoleRoute = createRoute({
  method: 'get',
  path: '/#Action=DisassociateEnvironmentOperationsRole',
  description:
    'Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller\'s permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
  operationId: 'GET_DisassociateEnvironmentOperationsRole',
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
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: true,
            description:
              'The name of the environment from which to disassociate the operations role.',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('DisassociateEnvironmentOperationsRole')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisassociateEnvironmentOperationsRole'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionDisassociateEnvironmentOperationsRoleRoute = createRoute({
  method: 'post',
  path: '/#Action=DisassociateEnvironmentOperationsRole',
  description:
    'Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller\'s permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.',
  operationId: 'POST_DisassociateEnvironmentOperationsRole',
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
      Action: z
        .literal('DisassociateEnvironmentOperationsRole')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['DisassociateEnvironmentOperationsRole'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: {
      content: { 'text/xml': { schema: DisassociateEnvironmentOperationsRoleMessageSchema } },
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionListAvailableSolutionStacksRoute = createRoute({
  method: 'get',
  path: '/#Action=ListAvailableSolutionStacks',
  description:
    'Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.',
  operationId: 'GET_ListAvailableSolutionStacks',
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
      Action: z
        .literal('ListAvailableSolutionStacks')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListAvailableSolutionStacks'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListAvailableSolutionStacksResultMessageSchema } },
    },
  },
})

export const postActionListAvailableSolutionStacksRoute = createRoute({
  method: 'post',
  path: '/#Action=ListAvailableSolutionStacks',
  description:
    'Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.',
  operationId: 'POST_ListAvailableSolutionStacks',
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
      Action: z
        .literal('ListAvailableSolutionStacks')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListAvailableSolutionStacks'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListAvailableSolutionStacksResultMessageSchema } },
    },
  },
})

export const getActionListPlatformBranchesRoute = createRoute({
  method: 'get',
  path: '/#Action=ListPlatformBranches',
  description:
    '<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'GET_ListPlatformBranches',
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
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SearchFilterSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              '<p>Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate <code>SearchFilter</code> terms.</p> <p>The following list shows valid attribute values for each of the <code>SearchFilter</code> terms. Most operators take a single value. The <code>in</code> and <code>not_in</code> operators can take multiple values.</p> <ul> <li> <p> <code>Attribute = BranchName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = LifecycleState</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>in</code> | <code>not_in</code> </p> </li> <li> <p> <code>Values</code>: <code>beta</code> | <code>supported</code> | <code>deprecated</code> | <code>retired</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = PlatformName</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code> | <code>ends_with</code> | <code>contains</code> | <code>in</code> | <code>not_in</code> </p> </li> </ul> </li> <li> <p> <code>Attribute = TierType</code>:</p> <ul> <li> <p> <code>Operator</code>: <code>=</code> | <code>!=</code> </p> </li> <li> <p> <code>Values</code>: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code> </p> </li> </ul> </li> </ul> <p>Array size: limited to 10 <code>SearchFilter</code> objects.</p> <p>Within each <code>SearchFilter</code> item, the <code>Values</code> array is limited to 10 items.</p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SearchFilter' } },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description: 'The maximum number of platform branch values returned in one call.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListPlatformBranches')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformBranches'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformBranchesResultSchema } },
    },
  },
})

export const postActionListPlatformBranchesRoute = createRoute({
  method: 'post',
  path: '/#Action=ListPlatformBranches',
  description:
    '<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'POST_ListPlatformBranches',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('ListPlatformBranches')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformBranches'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListPlatformBranchesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformBranchesResultSchema } },
    },
  },
})

export const getActionListPlatformVersionsRoute = createRoute({
  method: 'get',
  path: '/#Action=ListPlatformVersions',
  description:
    '<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'GET_ListPlatformVersions',
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
      Filters: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PlatformFilterSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'Filters',
            in: 'query',
            required: false,
            description:
              'Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code> terms.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PlatformFilter' } },
          },
        }),
      MaxRecords: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
            in: 'query',
            required: false,
            description: 'The maximum number of platform version values returned in one call.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description:
              '<p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListPlatformVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformVersions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformVersionsResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const postActionListPlatformVersionsRoute = createRoute({
  method: 'post',
  path: '/#Action=ListPlatformVersions',
  description:
    '<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>',
  operationId: 'POST_ListPlatformVersions',
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
      MaxRecords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxRecords',
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
      Action: z
        .literal('ListPlatformVersions')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListPlatformVersions'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListPlatformVersionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ListPlatformVersionsResultSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ElasticBeanstalkServiceException',
      content: { 'text/xml': { schema: ElasticBeanstalkServiceExceptionSchema } },
    },
  },
})

export const getActionListTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=ListTagsForResource',
  description:
    '<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>',
  operationId: 'GET_ListTagsForResource',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>',
            schema: { type: 'string' },
          },
        }),
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ResourceTagsDescriptionMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceTypeNotSupportedException',
      content: { 'text/xml': { schema: ResourceTypeNotSupportedExceptionSchema } },
    },
  },
})

export const postActionListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=ListTagsForResource',
  description:
    '<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>',
  operationId: 'POST_ListTagsForResource',
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
      Action: z
        .literal('ListTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListTagsForResourceMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ResourceTagsDescriptionMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ResourceTypeNotSupportedException',
      content: { 'text/xml': { schema: ResourceTypeNotSupportedExceptionSchema } },
    },
  },
})

export const getActionRebuildEnvironmentRoute = createRoute({
  method: 'get',
  path: '/#Action=RebuildEnvironment',
  description:
    'Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.',
  operationId: 'GET_RebuildEnvironment',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to rebuild.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('RebuildEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebuildEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionRebuildEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#Action=RebuildEnvironment',
  description:
    'Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.',
  operationId: 'POST_RebuildEnvironment',
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
      Action: z
        .literal('RebuildEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RebuildEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RebuildEnvironmentMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionRequestEnvironmentInfoRoute = createRoute({
  method: 'get',
  path: '/#Action=RequestEnvironmentInfo',
  description:
    '<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>',
  operationId: 'GET_RequestEnvironmentInfo',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment of the requested data.</p> <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      InfoType: z
        .enum(['tail', 'bundle'])
        .openapi({
          param: {
            name: 'InfoType',
            in: 'query',
            required: true,
            description: 'The type of information to request.',
            schema: { type: 'string', enum: ['tail', 'bundle'] },
          },
        }),
      Action: z
        .literal('RequestEnvironmentInfo')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RequestEnvironmentInfo'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionRequestEnvironmentInfoRoute = createRoute({
  method: 'post',
  path: '/#Action=RequestEnvironmentInfo',
  description:
    '<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>',
  operationId: 'POST_RequestEnvironmentInfo',
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
      Action: z
        .literal('RequestEnvironmentInfo')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RequestEnvironmentInfo'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RequestEnvironmentInfoMessageSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionRestartAppServerRoute = createRoute({
  method: 'get',
  path: '/#Action=RestartAppServer',
  description:
    'Causes the environment to restart the application container server running on each Amazon EC2 instance.',
  operationId: 'GET_RestartAppServer',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to restart the server for.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('RestartAppServer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestartAppServer'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionRestartAppServerRoute = createRoute({
  method: 'post',
  path: '/#Action=RestartAppServer',
  description:
    'Causes the environment to restart the application container server running on each Amazon EC2 instance.',
  operationId: 'POST_RestartAppServer',
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
      Action: z
        .literal('RestartAppServer')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RestartAppServer'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RestartAppServerMessageSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionRetrieveEnvironmentInfoRoute = createRoute({
  method: 'get',
  path: '/#Action=RetrieveEnvironmentInfo',
  description:
    '<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>',
  operationId: 'GET_RetrieveEnvironmentInfo',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              "<p>The ID of the data's environment.</p> <p>If no such environment is found, returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.</p>",
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              "<p>The name of the data's environment.</p> <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>",
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      InfoType: z
        .enum(['tail', 'bundle'])
        .openapi({
          param: {
            name: 'InfoType',
            in: 'query',
            required: true,
            description: 'The type of information to retrieve.',
            schema: { type: 'string', enum: ['tail', 'bundle'] },
          },
        }),
      Action: z
        .literal('RetrieveEnvironmentInfo')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RetrieveEnvironmentInfo'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RetrieveEnvironmentInfoResultMessageSchema } },
    },
  },
})

export const postActionRetrieveEnvironmentInfoRoute = createRoute({
  method: 'post',
  path: '/#Action=RetrieveEnvironmentInfo',
  description:
    '<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>',
  operationId: 'POST_RetrieveEnvironmentInfo',
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
      Action: z
        .literal('RetrieveEnvironmentInfo')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['RetrieveEnvironmentInfo'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: RetrieveEnvironmentInfoMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: RetrieveEnvironmentInfoResultMessageSchema } },
    },
  },
})

export const getActionSwapEnvironmentCNAMEsRoute = createRoute({
  method: 'get',
  path: '/#Action=SwapEnvironmentCNAMEs',
  description: 'Swaps the CNAMEs of two environments.',
  operationId: 'GET_SwapEnvironmentCNAMEs',
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
      SourceEnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceEnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentId</code>, you must specify the <code>DestinationEnvironmentId</code>. </p>',
            schema: { type: 'string' },
          },
        }),
      SourceEnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'SourceEnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the source environment.</p> <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the <code>SourceEnvironmentName</code>. You may also specify both. If you specify the <code>SourceEnvironmentName</code>, you must specify the <code>DestinationEnvironmentName</code>. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      DestinationEnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'DestinationEnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>',
            schema: { type: 'string' },
          },
        }),
      DestinationEnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'DestinationEnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the destination environment.</p> <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      Action: z
        .literal('SwapEnvironmentCNAMEs')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SwapEnvironmentCNAMEs'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const postActionSwapEnvironmentCNAMEsRoute = createRoute({
  method: 'post',
  path: '/#Action=SwapEnvironmentCNAMEs',
  description: 'Swaps the CNAMEs of two environments.',
  operationId: 'POST_SwapEnvironmentCNAMEs',
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
      Action: z
        .literal('SwapEnvironmentCNAMEs')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['SwapEnvironmentCNAMEs'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: SwapEnvironmentCNAMEsMessageSchema } } },
  },
  responses: { 200: { description: 'Success' } },
})

export const getActionTerminateEnvironmentRoute = createRoute({
  method: 'get',
  path: '/#Action=TerminateEnvironment',
  description: 'Terminates the specified environment.',
  operationId: 'GET_TerminateEnvironment',
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
      EnvironmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string' },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to terminate.</p> <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      TerminateResources: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'TerminateResources',
            in: 'query',
            required: false,
            description:
              '<p>Indicates whether the associated AWS resources should shut down when the environment is terminated:</p> <ul> <li> <p> <code>true</code>: The specified environment as well as the associated AWS resources, such as Auto Scaling group and LoadBalancer, are terminated.</p> </li> <li> <p> <code>false</code>: AWS Elastic Beanstalk resource management is removed from the environment, but the AWS resources continue to operate.</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/"> AWS Elastic Beanstalk User Guide. </a> </p> <p> Default: <code>true</code> </p> <p> Valid Values: <code>true</code> | <code>false</code> </p>',
            schema: { type: 'boolean' },
          },
        }),
      ForceTerminate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'ForceTerminate',
            in: 'query',
            required: false,
            description:
              'Terminates the target environment even if another environment in the same group is dependent on it.',
            schema: { type: 'boolean' },
          },
        }),
      Action: z
        .literal('TerminateEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TerminateEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionTerminateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#Action=TerminateEnvironment',
  description: 'Terminates the specified environment.',
  operationId: 'POST_TerminateEnvironment',
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
      Action: z
        .literal('TerminateEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['TerminateEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: TerminateEnvironmentMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionUpdateApplicationRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateApplication',
  description:
    '<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>',
  operationId: 'GET_UpdateApplication',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description:
              'The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. ',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      Description: z
        .string()
        .max(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'Description',
            in: 'query',
            required: false,
            description:
              '<p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>',
            schema: { type: 'string', maxLength: 200 },
          },
        }),
      Action: z
        .literal('UpdateApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateApplication'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionMessageSchema } },
    },
  },
})

export const postActionUpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateApplication',
  description:
    '<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>',
  operationId: 'POST_UpdateApplication',
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
      Action: z
        .literal('UpdateApplication')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateApplication'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateApplicationMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationDescriptionMessageSchema } },
    },
  },
})

export const getActionUpdateApplicationResourceLifecycleRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateApplicationResourceLifecycle',
  description: 'Modifies lifecycle settings for an application.',
  operationId: 'GET_UpdateApplicationResourceLifecycle',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['ServiceRole', ['ResourceLifecycleConfig']],
          ['VersionLifecycleConfig', ['ResourceLifecycleConfig']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          ApplicationName: z
            .string()
            .min(1)
            .max(100)
            .openapi({
              param: {
                name: 'ApplicationName',
                in: 'query',
                required: true,
                description: 'The name of the application.',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          ResourceLifecycleConfig: z
            .object({
              ServiceRole: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "<p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>",
                  }),
              ).exactOptional(),
              VersionLifecycleConfig: z
                .object({
                  MaxCountRule: z
                    .object({
                      Enabled: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                            }),
                        ),
                      MaxCount: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          BoxedIntSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify the maximum number of application versions to retain.',
                            }),
                        )
                        .exactOptional(),
                      DeleteSourceFromS3: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({
                      required: ['Enabled'],
                      description:
                        'A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.',
                    })
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specify a max count rule to restrict the number of application versions that are retained for an application.',
                        }),
                    )
                    .exactOptional(),
                  MaxAgeRule: z
                    .object({
                      Enabled: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                            }),
                        ),
                      MaxAgeInDays: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          BoxedIntSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                'Specify the number of days to retain an application versions.',
                            }),
                        )
                        .exactOptional(),
                      DeleteSourceFromS3: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          BoxedBooleanSchema,
                        )
                        .and(
                          z
                            .any()
                            .openapi({
                              description:
                                "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({
                      required: ['Enabled'],
                      description:
                        'A lifecycle rule that deletes application versions after the specified number of days.',
                    })
                    .and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Specify a max age rule to restrict the length of time that application versions are retained for an application.',
                        }),
                    )
                    .exactOptional(),
                })
                .openapi({
                  description:
                    "<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>",
                  required: [],
                })
                .and(
                  z
                    .any()
                    .openapi({
                      description: 'Defines lifecycle settings for application versions.',
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              param: {
                name: 'ResourceLifecycleConfig',
                in: 'query',
                required: true,
                description: 'The lifecycle configuration.',
                schema: {
                  type: 'object',
                  properties: {
                    ServiceRole: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            "<p>The ARN of an IAM service role that Elastic Beanstalk has permission to assume.</p> <p>The <code>ServiceRole</code> property is required the first time that you provide a <code>VersionLifecycleConfig</code> for the application in one of the supporting calls (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in subsequent calls to change the Service Role to another value.</p>",
                        },
                      ],
                    },
                    VersionLifecycleConfig: {
                      allOf: [
                        {
                          type: 'object',
                          properties: {
                            MaxCountRule: {
                              allOf: [
                                {
                                  type: 'object',
                                  required: ['Enabled'],
                                  properties: {
                                    Enabled: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                                        },
                                      ],
                                    },
                                    MaxCount: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedInt' },
                                        {
                                          description:
                                            'Specify the maximum number of application versions to retain.',
                                        },
                                      ],
                                    },
                                    DeleteSourceFromS3: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                                        },
                                      ],
                                    },
                                  },
                                  description:
                                    'A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.',
                                },
                                {
                                  description:
                                    'Specify a max count rule to restrict the number of application versions that are retained for an application.',
                                },
                              ],
                            },
                            MaxAgeRule: {
                              allOf: [
                                {
                                  type: 'object',
                                  required: ['Enabled'],
                                  properties: {
                                    Enabled: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            'Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.',
                                        },
                                      ],
                                    },
                                    MaxAgeInDays: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedInt' },
                                        {
                                          description:
                                            'Specify the number of days to retain an application versions.',
                                        },
                                      ],
                                    },
                                    DeleteSourceFromS3: {
                                      allOf: [
                                        { $ref: '#/components/schemas/BoxedBoolean' },
                                        {
                                          description:
                                            "Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.",
                                        },
                                      ],
                                    },
                                  },
                                  description:
                                    'A lifecycle rule that deletes application versions after the specified number of days.',
                                },
                                {
                                  description:
                                    'Specify a max age rule to restrict the length of time that application versions are retained for an application.',
                                },
                              ],
                            },
                          },
                          description:
                            "<p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>",
                        },
                        { description: 'Defines lifecycle settings for application versions.' },
                      ],
                    },
                  },
                  description:
                    'The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.',
                },
              },
              description:
                'The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.',
              required: [],
            }),
          Action: z
            .literal('UpdateApplicationResourceLifecycle')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateApplicationResourceLifecycle'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationResourceLifecycleDescriptionMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const postActionUpdateApplicationResourceLifecycleRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateApplicationResourceLifecycle',
  description: 'Modifies lifecycle settings for an application.',
  operationId: 'POST_UpdateApplicationResourceLifecycle',
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
      Action: z
        .literal('UpdateApplicationResourceLifecycle')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateApplicationResourceLifecycle'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateApplicationResourceLifecycleMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationResourceLifecycleDescriptionMessageSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
  },
})

export const getActionUpdateApplicationVersionRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateApplicationVersion',
  description:
    '<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>',
  operationId: 'GET_UpdateApplicationVersion',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the application associated with this version.</p> <p> If no application is found with this name, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      VersionLabel: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'VersionLabel',
            in: 'query',
            required: true,
            description:
              '<p>The name of the version to update.</p> <p>If no application version is found with this label, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error. </p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      Description: z
        .string()
        .max(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'Description',
            in: 'query',
            required: false,
            description: 'A new description for this version.',
            schema: { type: 'string', maxLength: 200 },
          },
        }),
      Action: z
        .literal('UpdateApplicationVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateApplicationVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionMessageSchema } },
    },
  },
})

export const postActionUpdateApplicationVersionRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateApplicationVersion',
  description:
    '<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>',
  operationId: 'POST_UpdateApplicationVersion',
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
      Action: z
        .literal('UpdateApplicationVersion')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateApplicationVersion'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateApplicationVersionMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ApplicationVersionDescriptionMessageSchema } },
    },
  },
})

export const getActionUpdateConfigurationTemplateRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateConfigurationTemplate',
  description:
    '<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>',
  operationId: 'GET_UpdateConfigurationTemplate',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the application associated with the configuration template to update.</p> <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: true,
            description:
              '<p>The name of the configuration template to update.</p> <p> If no configuration template is found with this name, <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code> error. </p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      Description: z
        .string()
        .max(200)
        .exactOptional()
        .openapi({
          param: {
            name: 'Description',
            in: 'query',
            required: false,
            description: 'A new description for the configuration.',
            schema: { type: 'string', maxLength: 200 },
          },
        }),
      OptionSettings: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConfigurationOptionSettingSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OptionSettings',
            in: 'query',
            required: false,
            description:
              'A list of configuration option settings to update with the new specified option value.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
            },
          },
        }),
      OptionsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(OptionSpecificationSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OptionsToRemove',
            in: 'query',
            required: false,
            description:
              '<p>A list of configuration options to remove from the configuration set.</p> <p> Constraint: You can remove only <code>UserDefined</code> configuration options. </p>',
            schema: { type: 'array', items: { $ref: '#/components/schemas/OptionSpecification' } },
          },
        }),
      Action: z
        .literal('UpdateConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const postActionUpdateConfigurationTemplateRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateConfigurationTemplate',
  description:
    '<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>',
  operationId: 'POST_UpdateConfigurationTemplate',
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
      Action: z
        .literal('UpdateConfigurationTemplate')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateConfigurationTemplate'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateConfigurationTemplateMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const getActionUpdateEnvironmentRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateEnvironment',
  description:
    '<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>',
  operationId: 'GET_UpdateEnvironment',
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
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['Name', ['Tier']],
          ['Type', ['Tier']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          ApplicationName: z
            .string()
            .min(1)
            .max(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'ApplicationName',
                in: 'query',
                required: false,
                description:
                  'The name of the application with which the environment is associated.',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          EnvironmentId: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'EnvironmentId',
                in: 'query',
                required: false,
                description:
                  '<p>The ID of the environment to update.</p> <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error.</p> <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
                schema: { type: 'string' },
              },
            }),
          EnvironmentName: z
            .string()
            .min(4)
            .max(40)
            .exactOptional()
            .openapi({
              param: {
                name: 'EnvironmentName',
                in: 'query',
                required: false,
                description:
                  '<p>The name of the environment to update. If no environment with this name exists, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p> <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error. </p>',
                schema: { type: 'string', minLength: 4, maxLength: 40 },
              },
            }),
          GroupName: z
            .string()
            .min(1)
            .max(19)
            .exactOptional()
            .openapi({
              param: {
                name: 'GroupName',
                in: 'query',
                required: false,
                description:
                  'The name of the group to which the target environment belongs. Specify a group name only if the environment\'s name is specified in an environment manifest and not with the environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.',
                schema: { type: 'string', minLength: 1, maxLength: 19 },
              },
            }),
          Description: z
            .string()
            .max(200)
            .exactOptional()
            .openapi({
              param: {
                name: 'Description',
                in: 'query',
                required: false,
                description:
                  'If this parameter is specified, AWS Elastic Beanstalk updates the description of this environment.',
                schema: { type: 'string', maxLength: 200 },
              },
            }),
          Tier: z
            .object({
              Name: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The name of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>WebServer</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>Worker</code> </p> </li> </ul>',
                  }),
              ).exactOptional(),
              Type: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      '<p>The type of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>Standard</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>SQS/HTTP</code> </p> </li> </ul>',
                  }),
              ).exactOptional(),
              Version: StringSchema.and(
                z
                  .any()
                  .openapi({
                    description:
                      "<p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.</p> <note> <p>This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.</p> </note>",
                  }),
              ).exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'Tier',
                in: 'query',
                required: false,
                description:
                  '<p>This specifies the tier to use to update the environment.</p> <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic Beanstalk returns <code>InvalidParameterValue</code> error. </p>',
                schema: {
                  type: 'object',
                  properties: {
                    Name: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            '<p>The name of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>WebServer</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>Worker</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    Type: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            '<p>The type of this environment tier.</p> <p>Valid values:</p> <ul> <li> <p>For <i>Web server tier</i> – <code>Standard</code> </p> </li> <li> <p>For <i>Worker tier</i> – <code>SQS/HTTP</code> </p> </li> </ul>',
                        },
                      ],
                    },
                    Version: {
                      allOf: [
                        { $ref: '#/components/schemas/String' },
                        {
                          description:
                            "<p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.</p> <note> <p>This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.</p> </note>",
                        },
                      ],
                    },
                  },
                  description: 'Describes the properties of an environment tier',
                },
              },
              description: 'Describes the properties of an environment tier',
              required: [],
            }),
          VersionLabel: z
            .string()
            .min(1)
            .max(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'VersionLabel',
                in: 'query',
                required: false,
                description:
                  'If this parameter is specified, AWS Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an <code>InvalidParameterValue</code> error. ',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          TemplateName: z
            .string()
            .min(1)
            .max(100)
            .exactOptional()
            .openapi({
              param: {
                name: 'TemplateName',
                in: 'query',
                required: false,
                description:
                  'If this parameter is specified, AWS Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. ',
                schema: { type: 'string', minLength: 1, maxLength: 100 },
              },
            }),
          SolutionStackName: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'SolutionStackName',
                in: 'query',
                required: false,
                description:
                  'This specifies the platform version that the environment will run after the environment is updated.',
                schema: { type: 'string' },
              },
            }),
          PlatformArn: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                name: 'PlatformArn',
                in: 'query',
                required: false,
                description: 'The ARN of the platform, if used.',
                schema: { type: 'string' },
              },
            }),
          OptionSettings: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(ConfigurationOptionSettingSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionSettings',
                in: 'query',
                required: false,
                description:
                  'If specified, AWS Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
                },
              },
            }),
          OptionsToRemove: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(OptionSpecificationSchema),
            )
            .exactOptional()
            .openapi({
              param: {
                name: 'OptionsToRemove',
                in: 'query',
                required: false,
                description:
                  'A list of custom user-defined configuration options to remove from the configuration set for this environment.',
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/OptionSpecification' },
                },
              },
            }),
          Action: z
            .literal('UpdateEnvironment')
            .openapi({
              param: {
                name: 'Action',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['UpdateEnvironment'] },
              },
            }),
          Version: z
            .literal('2010-12-01')
            .openapi({
              param: {
                name: 'Version',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['2010-12-01'] },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const postActionUpdateEnvironmentRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateEnvironment',
  description:
    '<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>',
  operationId: 'POST_UpdateEnvironment',
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
      Action: z
        .literal('UpdateEnvironment')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateEnvironment'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateEnvironmentMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: EnvironmentDescriptionSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const getActionUpdateTagsForResourceRoute = createRoute({
  method: 'get',
  path: '/#Action=UpdateTagsForResource',
  description:
    '<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>',
  operationId: 'GET_UpdateTagsForResource',
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
      ResourceArn: z
        .string()
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'query',
            required: true,
            description:
              '<p>The Amazon Resource Name (ARN) of the resouce to be updated.</p> <p>Must be the ARN of an Elastic Beanstalk resource.</p>',
            schema: { type: 'string' },
          },
        }),
      TagsToAdd: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'TagsToAdd',
            in: 'query',
            required: false,
            description:
              "<p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>",
            schema: { type: 'array', items: { $ref: '#/components/schemas/Tag' } },
          },
        }),
      TagsToRemove: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'TagsToRemove',
            in: 'query',
            required: false,
            description:
              "<p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p> <p>Specify at least one of these parameters: <code>TagsToAdd</code>, <code>TagsToRemove</code>.</p>",
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
      Action: z
        .literal('UpdateTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceTypeNotSupportedException',
      content: { 'text/xml': { schema: ResourceTypeNotSupportedExceptionSchema } },
    },
  },
})

export const postActionUpdateTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#Action=UpdateTagsForResource',
  description:
    '<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>',
  operationId: 'POST_UpdateTagsForResource',
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
      Action: z
        .literal('UpdateTagsForResource')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateTagsForResource'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateTagsForResourceMessageSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'OperationInProgressException',
      content: { 'text/xml': { schema: OperationInProgressExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'text/xml': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'text/xml': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceTypeNotSupportedException',
      content: { 'text/xml': { schema: ResourceTypeNotSupportedExceptionSchema } },
    },
  },
})

export const getActionValidateConfigurationSettingsRoute = createRoute({
  method: 'get',
  path: '/#Action=ValidateConfigurationSettings',
  description:
    '<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>',
  operationId: 'GET_ValidateConfigurationSettings',
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
      ApplicationName: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'ApplicationName',
            in: 'query',
            required: true,
            description:
              'The name of the application that the configuration template or environment belongs to.',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      TemplateName: z
        .string()
        .min(1)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'TemplateName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the configuration template to validate the settings against.</p> <p>Condition: You cannot specify both this and an environment name.</p>',
            schema: { type: 'string', minLength: 1, maxLength: 100 },
          },
        }),
      EnvironmentName: z
        .string()
        .min(4)
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            name: 'EnvironmentName',
            in: 'query',
            required: false,
            description:
              '<p>The name of the environment to validate the settings against.</p> <p>Condition: You cannot specify both this and a configuration template name.</p>',
            schema: { type: 'string', minLength: 4, maxLength: 40 },
          },
        }),
      OptionSettings: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(ConfigurationOptionSettingSchema),
        )
        .openapi({
          param: {
            name: 'OptionSettings',
            in: 'query',
            required: true,
            description: 'A list of the options and desired values to evaluate.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/ConfigurationOptionSetting' },
            },
          },
        }),
      Action: z
        .literal('ValidateConfigurationSettings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ValidateConfigurationSettings'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsValidationMessagesSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})

export const postActionValidateConfigurationSettingsRoute = createRoute({
  method: 'post',
  path: '/#Action=ValidateConfigurationSettings',
  description:
    '<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>',
  operationId: 'POST_ValidateConfigurationSettings',
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
      Action: z
        .literal('ValidateConfigurationSettings')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ValidateConfigurationSettings'] },
          },
        }),
      Version: z
        .literal('2010-12-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-12-01'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ValidateConfigurationSettingsMessageSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: ConfigurationSettingsValidationMessagesSchema } },
    },
    480: {
      description: 'InsufficientPrivilegesException',
      content: { 'text/xml': { schema: InsufficientPrivilegesExceptionSchema } },
    },
    481: {
      description: 'TooManyBucketsException',
      content: { 'text/xml': { schema: TooManyBucketsExceptionSchema } },
    },
  },
})
