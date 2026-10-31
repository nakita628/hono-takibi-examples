import { createRoute, z } from '@hono/zod-openapi'

const ResourceGroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9\.\-_]*/)
  .min(1)
  .max(256)
  .openapi('ResourceGroupName')

const LifeCycleSchema = z.string().openapi('LifeCycle')

const OpsItemSNSTopicArnSchema = z
  .string()
  .regex(/^arn:aws(-\w+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:\/].+)*$/)
  .min(20)
  .max(300)
  .openapi('OpsItemSNSTopicArn')

const OpsCenterEnabledSchema = z.boolean().openapi('OpsCenterEnabled')

const CWEMonitorEnabledSchema = z.boolean().openapi('CWEMonitorEnabled')

const RemarksSchema = z.string().openapi('Remarks')

const AutoConfigEnabledSchema = z.boolean().openapi('AutoConfigEnabled')

const DiscoveryTypeSchema = z
  .enum(['RESOURCE_GROUP_BASED', 'ACCOUNT_BASED'])
  .openapi('DiscoveryType')

const ApplicationInfoSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group used for the application.' }),
    ).exactOptional(),
    LifeCycle: LifeCycleSchema.and(
      z.any().openapi({ description: 'The lifecycle of the application. ' }),
    ).exactOptional(),
    OpsItemSNSTopicArn: OpsItemSNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates. ',
        }),
    ).exactOptional(),
    OpsCenterEnabled: OpsCenterEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application. ',
        }),
    ).exactOptional(),
    CWEMonitorEnabled: CWEMonitorEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others. ',
        }),
    ).exactOptional(),
    Remarks: RemarksSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The issues on the user side that block Application Insights from successfully monitoring an application. Example remarks include:</p> <ul> <li> <p>“Configuring application, detected 1 Errors, 3 Warnings”</p> </li> <li> <p>“Configuring application, detected 1 Unconfigured Components”</p> </li> </ul>',
        }),
    ).exactOptional(),
    AutoConfigEnabled: AutoConfigEnabledSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates whether auto-configuration is turned on for this application. ',
        }),
    ).exactOptional(),
    DiscoveryType: DiscoveryTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The method used by Application Insights to onboard your resources. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the status of the application.', required: [] })
  .openapi('ApplicationInfo')

const CreateApplicationResponseSchema = z
  .object({
    ApplicationInfo: ApplicationInfoSchema.and(
      z.any().openapi({ description: 'Information about the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApplicationResponse')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            "The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don't want an application to have a specific tag value, don't specify a value for this parameter.",
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      "<p>An object that defines the tags associated with an application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. </p> </li> </ul>",
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const AutoCreateSchema = z.boolean().openapi('AutoCreate')

const GroupingTypeSchema = z.literal('ACCOUNT_BASED').openapi('GroupingType')

const CreateApplicationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    OpsCenterEnabled: OpsCenterEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' When set to <code>true</code>, creates opsItems for any problems detected on an application. ',
        }),
    ).exactOptional(),
    CWEMonitorEnabled: CWEMonitorEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others. ',
        }),
    ).exactOptional(),
    OpsItemSNSTopicArn: OpsItemSNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem. ',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of tags to add to the application. tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.',
        }),
    ).exactOptional(),
    AutoConfigEnabled: AutoConfigEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Application Insights automatically configures unmonitored resources in the resource group. ',
        }),
    ).exactOptional(),
    AutoCreate: AutoCreateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Configures all of the resources in the resource group by applying the recommended configurations. ',
        }),
    ).exactOptional(),
    GroupingType: GroupingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to <code>ACCOUNT_BASED</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateApplicationRequest', required: [] })
  .openapi('CreateApplicationRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const TagsAlreadyExistExceptionSchema = z.any().openapi('TagsAlreadyExistException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const CreateComponentResponseSchema = z.object({}).openapi('CreateComponentResponse')

const CustomComponentNameSchema = z
  .string()
  .regex(/^[\d\w\-_\.+]*$/)
  .min(1)
  .max(128)
  .openapi('CustomComponentName')

const ResourceARNSchema = z
  .string()
  .regex(/^arn:aws(-\w+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:\/].+)*$/)
  .min(1)
  .max(1011)
  .openapi('ResourceARN')

const ResourceListSchema = z.array(ResourceARNSchema).openapi('ResourceList')

const CreateComponentRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: CustomComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
    ResourceList: ResourceListSchema.and(
      z.any().openapi({ description: 'The list of resource ARNs that belong to the component.' }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'ComponentName', 'ResourceList'],
    title: 'CreateComponentRequest',
  })
  .openapi('CreateComponentRequest')

const LogPatternSetNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9\.\-_]*/)
  .min(1)
  .max(30)
  .openapi('LogPatternSetName')

const LogPatternNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9\.\-_]*/)
  .min(1)
  .max(50)
  .openapi('LogPatternName')

const LogPatternRegexSchema = z
  .string()
  .regex(/[\S\s]+/)
  .min(1)
  .max(50)
  .openapi('LogPatternRegex')

const LogPatternRankSchema = z.int().openapi('LogPatternRank')

const LogPatternSchema = z
  .object({
    PatternSetName: LogPatternSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the log pattern. A log pattern name can contain as many as 30 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.',
        }),
    ).exactOptional(),
    PatternName: LogPatternNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the log pattern. A log pattern name can contain as many as 50 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.',
        }),
    ).exactOptional(),
    Pattern: LogPatternRegexSchema.and(
      z
        .any()
        .openapi({
          description:
            'A regular expression that defines the log pattern. A log pattern can contain as many as 50 characters, and it cannot be empty. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.',
        }),
    ).exactOptional(),
    Rank: LogPatternRankSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that defines the log patterns that belongs to a <code>LogPatternSet</code>.',
    required: [],
  })
  .openapi('LogPattern')

const CreateLogPatternResponseSchema = z
  .object({
    LogPattern: LogPatternSchema.and(
      z.any().openapi({ description: 'The successfully created log pattern.' }),
    ).exactOptional(),
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLogPatternResponse')

const CreateLogPatternRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    PatternSetName: LogPatternSetNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern set.' }),
    ),
    PatternName: LogPatternNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern.' }),
    ),
    Pattern: LogPatternRegexSchema.and(
      z
        .any()
        .openapi({
          description:
            'The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.',
        }),
    ),
    Rank: LogPatternRankSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns. ',
        }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'PatternSetName', 'PatternName', 'Pattern', 'Rank'],
    title: 'CreateLogPatternRequest',
  })
  .openapi('CreateLogPatternRequest')

const DeleteApplicationResponseSchema = z.object({}).openapi('DeleteApplicationResponse')

const DeleteApplicationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'DeleteApplicationRequest' })
  .openapi('DeleteApplicationRequest')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const DeleteComponentResponseSchema = z.object({}).openapi('DeleteComponentResponse')

const DeleteComponentRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: CustomComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
  })
  .openapi({ required: ['ResourceGroupName', 'ComponentName'], title: 'DeleteComponentRequest' })
  .openapi('DeleteComponentRequest')

const DeleteLogPatternResponseSchema = z.object({}).openapi('DeleteLogPatternResponse')

const DeleteLogPatternRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    PatternSetName: LogPatternSetNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern set.' }),
    ),
    PatternName: LogPatternNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern.' }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
    title: 'DeleteLogPatternRequest',
  })
  .openapi('DeleteLogPatternRequest')

const DescribeApplicationResponseSchema = z
  .object({
    ApplicationInfo: ApplicationInfoSchema.and(
      z.any().openapi({ description: 'Information about the application.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeApplicationResponse')

const DescribeApplicationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'DescribeApplicationRequest' })
  .openapi('DescribeApplicationRequest')

const ComponentNameSchema = z
  .string()
  .regex(/(?:^[\d\w\-_\.+]*$)|(?:^arn:aws(-\w+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:\/].+)*$)/)
  .min(1)
  .max(1011)
  .openapi('ComponentName')

const ResourceTypeSchema = z
  .string()
  .regex(/[0-9a-zA-Z:_]*/)
  .min(1)
  .max(50)
  .openapi('ResourceType')

const OsTypeSchema = z.enum(['WINDOWS', 'LINUX']).openapi('OsType')

const TierSchema = z
  .enum([
    'CUSTOM',
    'DEFAULT',
    'DOT_NET_CORE',
    'DOT_NET_WORKER',
    'DOT_NET_WEB_TIER',
    'DOT_NET_WEB',
    'SQL_SERVER',
    'SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP',
    'MYSQL',
    'POSTGRESQL',
    'JAVA_JMX',
    'ORACLE',
    'SAP_HANA_MULTI_NODE',
    'SAP_HANA_SINGLE_NODE',
    'SAP_HANA_HIGH_AVAILABILITY',
    'SQL_SERVER_FAILOVER_CLUSTER_INSTANCE',
    'SHAREPOINT',
    'ACTIVE_DIRECTORY',
  ])
  .openapi('Tier')

const MonitorSchema = z.boolean().openapi('Monitor')

const MetaDataValueSchema = z.string().openapi('MetaDataValue')

const WorkloadMetaDataSchema = z.record(z.string(), MetaDataValueSchema).openapi('WorkloadMetaData')

const DetectedWorkloadSchema = z
  .record(z.string(), WorkloadMetaDataSchema)
  .openapi('DetectedWorkload')

const ApplicationComponentSchema = z
  .object({
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ).exactOptional(),
    ComponentRemarks: RemarksSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If logging is supported for the resource type, indicates whether the component has configured logs to be monitored. ',
        }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.',
        }),
    ).exactOptional(),
    OsType: OsTypeSchema.and(
      z.any().openapi({ description: ' The operating system of the component. ' }),
    ).exactOptional(),
    Tier: TierSchema.and(
      z.any().openapi({ description: 'The stack tier of the application component.' }),
    ).exactOptional(),
    Monitor: MonitorSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether the application component is monitored. ' }),
    ).exactOptional(),
    DetectedWorkload: DetectedWorkloadSchema.and(
      z.any().openapi({ description: ' Workloads detected in the application component. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a standalone resource or similarly grouped resources that the application is made up of.',
    required: [],
  })
  .openapi('ApplicationComponent')

const DescribeComponentResponseSchema = z
  .object({
    ApplicationComponent: ApplicationComponentSchema.exactOptional(),
    ResourceList: ResourceListSchema.and(
      z.any().openapi({ description: 'The list of resource ARNs that belong to the component.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeComponentResponse')

const DescribeComponentRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
  })
  .openapi({ required: ['ResourceGroupName', 'ComponentName'], title: 'DescribeComponentRequest' })
  .openapi('DescribeComponentRequest')

const ComponentConfigurationSchema = z
  .string()
  .regex(/[\S\s]+/)
  .min(1)
  .max(10000)
  .openapi('ComponentConfiguration')

const DescribeComponentConfigurationResponseSchema = z
  .object({
    Monitor: MonitorSchema.and(
      z.any().openapi({ description: 'Indicates whether the application component is monitored.' }),
    ).exactOptional(),
    Tier: TierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tier of the application component. Supported tiers include <code>DOT_NET_CORE</code>, <code>DOT_NET_WORKER</code>, <code>DOT_NET_WEB</code>, <code>SQL_SERVER</code>, and <code>DEFAULT</code> ',
        }),
    ).exactOptional(),
    ComponentConfiguration: ComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings of the component. The value is the escaped JSON of the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeComponentConfigurationResponse')

const DescribeComponentConfigurationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'ComponentName'],
    title: 'DescribeComponentConfigurationRequest',
  })
  .openapi('DescribeComponentConfigurationRequest')

const DescribeComponentConfigurationRecommendationResponseSchema = z
  .object({
    ComponentConfiguration: ComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The recommended configuration settings of the component. The value is the escaped JSON of the configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeComponentConfigurationRecommendationResponse')

const DescribeComponentConfigurationRecommendationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
    Tier: TierSchema.and(
      z.any().openapi({ description: 'The tier of the application component.' }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'ComponentName', 'Tier'],
    title: 'DescribeComponentConfigurationRecommendationRequest',
  })
  .openapi('DescribeComponentConfigurationRecommendationRequest')

const DescribeLogPatternResponseSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    LogPattern: LogPatternSchema.and(
      z.any().openapi({ description: 'The successfully created log pattern.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeLogPatternResponse')

const DescribeLogPatternRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    PatternSetName: LogPatternSetNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern set.' }),
    ),
    PatternName: LogPatternNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern.' }),
    ),
  })
  .openapi({
    required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
    title: 'DescribeLogPatternRequest',
  })
  .openapi('DescribeLogPatternRequest')

const ObservationIdSchema = z
  .string()
  .regex(/o-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/)
  .length(38)
  .openapi('ObservationId')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const SourceTypeSchema = z.string().openapi('SourceType')

const SourceARNSchema = z.string().openapi('SourceARN')

const LogGroupSchema = z.string().openapi('LogGroup')

const LineTimeSchema = z.iso.datetime({ offset: true }).openapi('LineTime')

const LogTextSchema = z.string().openapi('LogText')

const LogFilterSchema = z.enum(['ERROR', 'WARN', 'INFO']).openapi('LogFilter')

const MetricNamespaceSchema = z.string().openapi('MetricNamespace')

const MetricNameSchema = z.string().openapi('MetricName')

const UnitSchema = z.string().openapi('Unit')

const ValueSchema = z.float64().openapi('Value')

const CloudWatchEventIdSchema = z.string().openapi('CloudWatchEventId')

const CloudWatchEventSourceSchema = z
  .enum(['EC2', 'CODE_DEPLOY', 'HEALTH', 'RDS'])
  .openapi('CloudWatchEventSource')

const CloudWatchEventDetailTypeSchema = z.string().openapi('CloudWatchEventDetailType')

const HealthEventArnSchema = z.string().openapi('HealthEventArn')

const HealthServiceSchema = z.string().openapi('HealthService')

const HealthEventTypeCodeSchema = z.string().openapi('HealthEventTypeCode')

const HealthEventTypeCategorySchema = z.string().openapi('HealthEventTypeCategory')

const HealthEventDescriptionSchema = z.string().openapi('HealthEventDescription')

const CodeDeployDeploymentIdSchema = z.string().openapi('CodeDeployDeploymentId')

const CodeDeployDeploymentGroupSchema = z.string().openapi('CodeDeployDeploymentGroup')

const CodeDeployStateSchema = z.string().openapi('CodeDeployState')

const CodeDeployApplicationSchema = z.string().openapi('CodeDeployApplication')

const CodeDeployInstanceGroupIdSchema = z.string().openapi('CodeDeployInstanceGroupId')

const Ec2StateSchema = z.string().openapi('Ec2State')

const RdsEventCategoriesSchema = z.string().openapi('RdsEventCategories')

const RdsEventMessageSchema = z.string().openapi('RdsEventMessage')

const S3EventNameSchema = z.string().openapi('S3EventName')

const StatesExecutionArnSchema = z.string().openapi('StatesExecutionArn')

const StatesArnSchema = z.string().openapi('StatesArn')

const StatesStatusSchema = z.string().openapi('StatesStatus')

const StatesInputSchema = z.string().openapi('StatesInput')

const EbsEventSchema = z.string().openapi('EbsEvent')

const EbsResultSchema = z.string().openapi('EbsResult')

const EbsCauseSchema = z.string().openapi('EbsCause')

const EbsRequestIdSchema = z.string().openapi('EbsRequestId')

const XRayFaultPercentSchema = z.int().openapi('XRayFaultPercent')

const XRayThrottlePercentSchema = z.int().openapi('XRayThrottlePercent')

const XRayErrorPercentSchema = z.int().openapi('XRayErrorPercent')

const XRayRequestCountSchema = z.int().openapi('XRayRequestCount')

const XRayRequestAverageLatencySchema = z.int().openapi('XRayRequestAverageLatency')

const XRayNodeNameSchema = z.string().openapi('XRayNodeName')

const XRayNodeTypeSchema = z.string().openapi('XRayNodeType')

const ObservationSchema = z
  .object({
    Id: ObservationIdSchema.and(
      z.any().openapi({ description: 'The ID of the observation type.' }),
    ).exactOptional(),
    StartTime: StartTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the observation was first detected, in epoch seconds.',
        }),
    ).exactOptional(),
    EndTime: EndTimeSchema.and(
      z.any().openapi({ description: 'The time when the observation ended, in epoch seconds.' }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z.any().openapi({ description: 'The source type of the observation.' }),
    ).exactOptional(),
    SourceARN: SourceARNSchema.and(
      z.any().openapi({ description: 'The source resource ARN of the observation.' }),
    ).exactOptional(),
    LogGroup: LogGroupSchema.and(
      z.any().openapi({ description: 'The log group name.' }),
    ).exactOptional(),
    LineTime: LineTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp in the CloudWatch Logs that specifies when the matched line occurred.',
        }),
    ).exactOptional(),
    LogText: LogTextSchema.and(
      z.any().openapi({ description: 'The log text of the observation.' }),
    ).exactOptional(),
    LogFilter: LogFilterSchema.and(
      z.any().openapi({ description: 'The log filter of the observation.' }),
    ).exactOptional(),
    MetricNamespace: MetricNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the observation metric.' }),
    ).exactOptional(),
    MetricName: MetricNameSchema.and(
      z.any().openapi({ description: 'The name of the observation metric.' }),
    ).exactOptional(),
    Unit: UnitSchema.and(
      z.any().openapi({ description: 'The unit of the source observation metric.' }),
    ).exactOptional(),
    Value: ValueSchema.and(
      z.any().openapi({ description: 'The value of the source observation metric.' }),
    ).exactOptional(),
    CloudWatchEventId: CloudWatchEventIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the CloudWatch Event-based observation related to the detected problem. ',
        }),
    ).exactOptional(),
    CloudWatchEventSource: CloudWatchEventSourceSchema.and(
      z.any().openapi({ description: ' The source of the CloudWatch Event. ' }),
    ).exactOptional(),
    CloudWatchEventDetailType: CloudWatchEventDetailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The detail type of the CloudWatch Event-based observation, for example, <code>EC2 Instance State-change Notification</code>. ',
        }),
    ).exactOptional(),
    HealthEventArn: HealthEventArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the AWS Health Event-based observation.',
        }),
    ).exactOptional(),
    HealthService: HealthServiceSchema.and(
      z
        .any()
        .openapi({
          description: ' The service to which the AWS Health Event belongs, such as EC2. ',
        }),
    ).exactOptional(),
    HealthEventTypeCode: HealthEventTypeCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of the AWS Health event, for example, <code>AWS_EC2_POWER_CONNECTIVITY_ISSUE</code>. ',
        }),
    ).exactOptional(),
    HealthEventTypeCategory: HealthEventTypeCategorySchema.and(
      z
        .any()
        .openapi({
          description: ' The category of the AWS Health event, such as <code>issue</code>. ',
        }),
    ).exactOptional(),
    HealthEventDescription: HealthEventDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The description of the AWS Health event provided by the service, such as Amazon EC2. ',
        }),
    ).exactOptional(),
    CodeDeployDeploymentId: CodeDeployDeploymentIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The deployment ID of the CodeDeploy-based observation related to the detected problem. ',
        }),
    ).exactOptional(),
    CodeDeployDeploymentGroup: CodeDeployDeploymentGroupSchema.and(
      z
        .any()
        .openapi({
          description: ' The deployment group to which the CodeDeploy deployment belongs. ',
        }),
    ).exactOptional(),
    CodeDeployState: CodeDeployStateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the CodeDeploy deployment, for example <code>SUCCESS</code> or <code> FAILURE</code>. ',
        }),
    ).exactOptional(),
    CodeDeployApplication: CodeDeployApplicationSchema.and(
      z
        .any()
        .openapi({ description: ' The CodeDeploy application to which the deployment belongs. ' }),
    ).exactOptional(),
    CodeDeployInstanceGroupId: CodeDeployInstanceGroupIdSchema.and(
      z
        .any()
        .openapi({ description: ' The instance group to which the CodeDeploy instance belongs. ' }),
    ).exactOptional(),
    Ec2State: Ec2StateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The state of the instance, such as <code>STOPPING</code> or <code>TERMINATING</code>. ',
        }),
    ).exactOptional(),
    RdsEventCategories: RdsEventCategoriesSchema.and(
      z.any().openapi({ description: ' The category of an RDS event. ' }),
    ).exactOptional(),
    RdsEventMessage: RdsEventMessageSchema.and(
      z.any().openapi({ description: ' The message of an RDS event. ' }),
    ).exactOptional(),
    S3EventName: S3EventNameSchema.and(
      z.any().openapi({ description: ' The name of the S3 CloudWatch Event-based observation. ' }),
    ).exactOptional(),
    StatesExecutionArn: StatesExecutionArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the step function execution-based observation. ',
        }),
    ).exactOptional(),
    StatesArn: StatesArnSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the step function-based observation. ',
        }),
    ).exactOptional(),
    StatesStatus: StatesStatusSchema.and(
      z.any().openapi({ description: ' The status of the step function-related observation. ' }),
    ).exactOptional(),
    StatesInput: StatesInputSchema.and(
      z.any().openapi({ description: ' The input to the step function-based observation. ' }),
    ).exactOptional(),
    EbsEvent: EbsEventSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of EBS CloudWatch event, such as <code>createVolume</code>, <code>deleteVolume</code> or <code>attachVolume</code>. ',
        }),
    ).exactOptional(),
    EbsResult: EbsResultSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The result of an EBS CloudWatch event, such as <code>failed</code> or <code>succeeded</code>. ',
        }),
    ).exactOptional(),
    EbsCause: EbsCauseSchema.and(
      z.any().openapi({ description: ' The cause of an EBS CloudWatch event. ' }),
    ).exactOptional(),
    EbsRequestId: EbsRequestIdSchema.and(
      z.any().openapi({ description: ' The request ID of an EBS CloudWatch event. ' }),
    ).exactOptional(),
    XRayFaultPercent: XRayFaultPercentSchema.and(
      z.any().openapi({ description: ' The X-Ray request fault percentage for this node. ' }),
    ).exactOptional(),
    XRayThrottlePercent: XRayThrottlePercentSchema.and(
      z.any().openapi({ description: ' The X-Ray request throttle percentage for this node. ' }),
    ).exactOptional(),
    XRayErrorPercent: XRayErrorPercentSchema.and(
      z.any().openapi({ description: ' The X-Ray request error percentage for this node. ' }),
    ).exactOptional(),
    XRayRequestCount: XRayRequestCountSchema.and(
      z.any().openapi({ description: ' The X-Ray request count for this node. ' }),
    ).exactOptional(),
    XRayRequestAverageLatency: XRayRequestAverageLatencySchema.and(
      z.any().openapi({ description: ' The X-Ray node request average latency for this node. ' }),
    ).exactOptional(),
    XRayNodeName: XRayNodeNameSchema.and(
      z.any().openapi({ description: ' The name of the X-Ray node. ' }),
    ).exactOptional(),
    XRayNodeType: XRayNodeTypeSchema.and(
      z.any().openapi({ description: ' The type of the X-Ray node. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an anomaly or error with the application.', required: [] })
  .openapi('Observation')

const DescribeObservationResponseSchema = z
  .object({
    Observation: ObservationSchema.and(
      z.any().openapi({ description: 'Information about the observation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeObservationResponse')

const DescribeObservationRequestSchema = z
  .object({
    ObservationId: ObservationIdSchema.and(
      z.any().openapi({ description: 'The ID of the observation.' }),
    ),
  })
  .openapi({ required: ['ObservationId'], title: 'DescribeObservationRequest' })
  .openapi('DescribeObservationRequest')

const ProblemIdSchema = z
  .string()
  .regex(/p-[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/)
  .length(38)
  .openapi('ProblemId')

const TitleSchema = z.string().openapi('Title')

const InsightsSchema = z.string().openapi('Insights')

const StatusSchema = z.enum(['IGNORE', 'RESOLVED', 'PENDING', 'RECURRING']).openapi('Status')

const AffectedResourceSchema = z.string().openapi('AffectedResource')

const SeverityLevelSchema = z
  .enum(['Informative', 'Low', 'Medium', 'High'])
  .openapi('SeverityLevel')

const FeedbackValueSchema = z
  .enum(['NOT_SPECIFIED', 'USEFUL', 'NOT_USEFUL'])
  .openapi('FeedbackValue')

const FeedbackSchema = z
  .record(z.string(), FeedbackValueSchema)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('Feedback')

const RecurringCountSchema = z.int().openapi('RecurringCount')

const LastRecurrenceTimeSchema = z.iso.datetime({ offset: true }).openapi('LastRecurrenceTime')

const ProblemSchema = z
  .object({
    Id: ProblemIdSchema.and(
      z.any().openapi({ description: 'The ID of the problem.' }),
    ).exactOptional(),
    Title: TitleSchema.and(
      z.any().openapi({ description: 'The name of the problem.' }),
    ).exactOptional(),
    Insights: InsightsSchema.and(
      z
        .any()
        .openapi({ description: 'A detailed analysis of the problem using machine learning.' }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'The status of the problem.' }),
    ).exactOptional(),
    AffectedResource: AffectedResourceSchema.and(
      z.any().openapi({ description: 'The resource affected by the problem.' }),
    ).exactOptional(),
    StartTime: StartTimeSchema.and(
      z.any().openapi({ description: 'The time when the problem started, in epoch seconds.' }),
    ).exactOptional(),
    EndTime: EndTimeSchema.and(
      z.any().openapi({ description: 'The time when the problem ended, in epoch seconds.' }),
    ).exactOptional(),
    SeverityLevel: SeverityLevelSchema.and(
      z.any().openapi({ description: 'A measure of the level of impact of the problem.' }),
    ).exactOptional(),
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group affected by the problem.' }),
    ).exactOptional(),
    Feedback: FeedbackSchema.and(
      z.any().openapi({ description: 'Feedback provided by the user about the problem.' }),
    ).exactOptional(),
    RecurringCount: RecurringCountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of times that the same problem reoccurred after the first time it was resolved. ',
        }),
    ).exactOptional(),
    LastRecurrenceTime: LastRecurrenceTimeSchema.and(
      z
        .any()
        .openapi({
          description: ' The last time that the problem reoccurred after its last resolution. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes a problem that is detected by correlating observations.',
    required: [],
  })
  .openapi('Problem')

const DescribeProblemResponseSchema = z
  .object({
    Problem: ProblemSchema.and(
      z.any().openapi({ description: 'Information about the problem. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProblemResponse')

const DescribeProblemRequestSchema = z
  .object({
    ProblemId: ProblemIdSchema.and(z.any().openapi({ description: 'The ID of the problem.' })),
  })
  .openapi({ required: ['ProblemId'], title: 'DescribeProblemRequest' })
  .openapi('DescribeProblemRequest')

const ObservationListSchema = z.array(ObservationSchema).openapi('ObservationList')

const RelatedObservationsSchema = z
  .object({
    ObservationList: ObservationListSchema.and(
      z.any().openapi({ description: 'The list of observations related to the problem.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes observations related to the problem.', required: [] })
  .openapi('RelatedObservations')

const DescribeProblemObservationsResponseSchema = z
  .object({
    RelatedObservations: RelatedObservationsSchema.and(
      z.any().openapi({ description: 'Observations related to the problem.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeProblemObservationsResponse')

const DescribeProblemObservationsRequestSchema = z
  .object({
    ProblemId: ProblemIdSchema.and(z.any().openapi({ description: 'The ID of the problem.' })),
  })
  .openapi({ required: ['ProblemId'], title: 'DescribeProblemObservationsRequest' })
  .openapi('DescribeProblemObservationsRequest')

const ApplicationInfoListSchema = z.array(ApplicationInfoSchema).openapi('ApplicationInfoList')

const PaginationTokenSchema = z.string().regex(/.+/).min(1).max(1024).openapi('PaginationToken')

const ListApplicationsResponseSchema = z
  .object({
    ApplicationInfoList: ApplicationInfoListSchema.and(
      z.any().openapi({ description: 'The list of applications.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationsResponse')

const MaxEntitiesSchema = z.int().min(1).max(40).openapi('MaxEntities')

const ListApplicationsRequestSchema = z
  .object({
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationsRequest', required: [] })
  .openapi('ListApplicationsRequest')

const ApplicationComponentListSchema = z
  .array(ApplicationComponentSchema)
  .openapi('ApplicationComponentList')

const ListComponentsResponseSchema = z
  .object({
    ApplicationComponentList: ApplicationComponentListSchema.and(
      z.any().openapi({ description: 'The list of application components.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListComponentsResponse')

const ListComponentsRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'ListComponentsRequest' })
  .openapi('ListComponentsRequest')

const ConfigurationEventMonitoredResourceARNSchema = z
  .string()
  .openapi('ConfigurationEventMonitoredResourceARN')

const ConfigurationEventStatusSchema = z
  .enum(['INFO', 'WARN', 'ERROR'])
  .openapi('ConfigurationEventStatus')

const ConfigurationEventResourceTypeSchema = z
  .enum(['CLOUDWATCH_ALARM', 'CLOUDWATCH_LOG', 'CLOUDFORMATION', 'SSM_ASSOCIATION'])
  .openapi('ConfigurationEventResourceType')

const ConfigurationEventTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ConfigurationEventTime')

const ConfigurationEventDetailSchema = z.string().openapi('ConfigurationEventDetail')

const ConfigurationEventResourceNameSchema = z.string().openapi('ConfigurationEventResourceName')

const ConfigurationEventSchema = z
  .object({
    MonitoredResourceARN: ConfigurationEventMonitoredResourceARNSchema.and(
      z.any().openapi({ description: ' The resource monitored by Application Insights. ' }),
    ).exactOptional(),
    EventStatus: ConfigurationEventStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the configuration update event. Possible values include INFO, WARN, and ERROR. ',
        }),
    ).exactOptional(),
    EventResourceType: ConfigurationEventResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The resource type that Application Insights attempted to configure, for example, CLOUDWATCH_ALARM. ',
        }),
    ).exactOptional(),
    EventTime: ConfigurationEventTimeSchema.and(
      z.any().openapi({ description: ' The timestamp of the event. ' }),
    ).exactOptional(),
    EventDetail: ConfigurationEventDetailSchema.and(
      z.any().openapi({ description: ' The details of the event in plain text. ' }),
    ).exactOptional(),
    EventResourceName: ConfigurationEventResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The name of the resource Application Insights attempted to configure. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The event information. ', required: [] })
  .openapi('ConfigurationEvent')

const ConfigurationEventListSchema = z
  .array(ConfigurationEventSchema)
  .openapi('ConfigurationEventList')

const ListConfigurationHistoryResponseSchema = z
  .object({
    EventList: ConfigurationEventListSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of configuration events and their corresponding details. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value to include in a future <code>ListConfigurationHistory</code> request. When the results of a <code>ListConfigurationHistory</code> request exceed <code>MaxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConfigurationHistoryResponse')

const ListConfigurationHistoryRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'Resource group to which the application belongs. ' }),
    ).exactOptional(),
    StartTime: StartTimeSchema.and(
      z.any().openapi({ description: 'The start time of the event. ' }),
    ).exactOptional(),
    EndTime: EndTimeSchema.and(
      z.any().openapi({ description: 'The end time of the event.' }),
    ).exactOptional(),
    EventStatus: ConfigurationEventStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the configuration update event. Possible values include INFO, WARN, and ERROR.',
        }),
    ).exactOptional(),
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of results returned by <code>ListConfigurationHistory</code> in paginated output. When this parameter is used, <code>ListConfigurationHistory</code> returns only <code>MaxResults</code> in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListConfigurationHistory</code> request with the returned <code>NextToken</code> value. If this parameter is not used, then <code>ListConfigurationHistory</code> returns all results. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>NextToken</code> value returned from a previous paginated <code>ListConfigurationHistory</code> request where <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>NextToken</code> value. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConfigurationHistoryRequest', required: [] })
  .openapi('ListConfigurationHistoryRequest')

const LogPatternSetListSchema = z.array(LogPatternSetNameSchema).openapi('LogPatternSetList')

const ListLogPatternSetsResponseSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    LogPatternSets: LogPatternSetListSchema.and(
      z.any().openapi({ description: 'The list of log pattern sets.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLogPatternSetsResponse')

const ListLogPatternSetsRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'ListLogPatternSetsRequest' })
  .openapi('ListLogPatternSetsRequest')

const LogPatternListSchema = z.array(LogPatternSchema).openapi('LogPatternList')

const ListLogPatternsResponseSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    LogPatterns: LogPatternListSchema.and(
      z.any().openapi({ description: 'The list of log patterns.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLogPatternsResponse')

const ListLogPatternsRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    PatternSetName: LogPatternSetNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern set.' }),
    ).exactOptional(),
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'ListLogPatternsRequest' })
  .openapi('ListLogPatternsRequest')

const ProblemListSchema = z.array(ProblemSchema).openapi('ProblemList')

const ListProblemsResponseSchema = z
  .object({
    ProblemList: ProblemListSchema.and(
      z.any().openapi({ description: 'The list of problems. ' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. ',
        }),
    ).exactOptional(),
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: ' The name of the resource group. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProblemsResponse')

const ListProblemsRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    StartTime: StartTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.",
        }),
    ).exactOptional(),
    EndTime: EndTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.',
        }),
    ).exactOptional(),
    MaxResults: MaxEntitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: ' The name of the component. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProblemsRequest', required: [] })
  .openapi('ListProblemsRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists all the tags that are associated with the application. Each tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z
  .string()
  .regex(/^arn:aws(-\w+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:\/].+)*$/)
  .min(1)
  .max(1011)
  .openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the application that you want to retrieve tag information for.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the application that you want to add one or more tags to.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags that to add to the application. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the application that you want to remove one or more tags from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the application, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. </p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApplicationResponseSchema = z
  .object({
    ApplicationInfo: ApplicationInfoSchema.and(
      z.any().openapi({ description: 'Information about the application. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApplicationResponse')

const RemoveSNSTopicSchema = z.boolean().openapi('RemoveSNSTopic')

const UpdateApplicationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    OpsCenterEnabled: OpsCenterEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' When set to <code>true</code>, creates opsItems for any problems detected on an application. ',
        }),
    ).exactOptional(),
    CWEMonitorEnabled: CWEMonitorEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as <code>instance terminated</code>, <code>failed deployment</code>, and others. ',
        }),
    ).exactOptional(),
    OpsItemSNSTopicArn: OpsItemSNSTopicArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.',
        }),
    ).exactOptional(),
    RemoveSNSTopic: RemoveSNSTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Disassociates the SNS topic from the opsItem created for detected problems.',
        }),
    ).exactOptional(),
    AutoConfigEnabled: AutoConfigEnabledSchema.and(
      z.any().openapi({ description: ' Turns auto-configuration on or off. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceGroupName'], title: 'UpdateApplicationRequest' })
  .openapi('UpdateApplicationRequest')

const UpdateComponentResponseSchema = z.object({}).openapi('UpdateComponentResponse')

const UpdateComponentRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: CustomComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
    NewComponentName: CustomComponentNameSchema.and(
      z.any().openapi({ description: 'The new name of the component.' }),
    ).exactOptional(),
    ResourceList: ResourceListSchema.and(
      z.any().openapi({ description: 'The list of resource ARNs that belong to the component.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceGroupName', 'ComponentName'], title: 'UpdateComponentRequest' })
  .openapi('UpdateComponentRequest')

const UpdateComponentConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateComponentConfigurationResponse')

const UpdateComponentConfigurationRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    ComponentName: ComponentNameSchema.and(
      z.any().openapi({ description: 'The name of the component.' }),
    ),
    Monitor: MonitorSchema.and(
      z.any().openapi({ description: 'Indicates whether the application component is monitored.' }),
    ).exactOptional(),
    Tier: TierSchema.and(
      z.any().openapi({ description: 'The tier of the application component.' }),
    ).exactOptional(),
    ComponentConfiguration: ComponentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/working-with-json.html">Working with JSON</a>. You can send a request to <code>DescribeComponentConfigurationRecommendation</code> to see the recommended configuration for a component. For the complete format of the component configuration file, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config.html">Component Configuration</a>.',
        }),
    ).exactOptional(),
    AutoConfigEnabled: AutoConfigEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Automatically configures the component by applying the recommended configurations. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceGroupName', 'ComponentName'],
    title: 'UpdateComponentConfigurationRequest',
  })
  .openapi('UpdateComponentConfigurationRequest')

const UpdateLogPatternResponseSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    LogPattern: LogPatternSchema.and(
      z.any().openapi({ description: 'The successfully created log pattern.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateLogPatternResponse')

const UpdateLogPatternRequestSchema = z
  .object({
    ResourceGroupName: ResourceGroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ),
    PatternSetName: LogPatternSetNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern set.' }),
    ),
    PatternName: LogPatternNameSchema.and(
      z.any().openapi({ description: 'The name of the log pattern.' }),
    ),
    Pattern: LogPatternRegexSchema.and(
      z
        .any()
        .openapi({
          description:
            'The log pattern. The pattern must be DFA compatible. Patterns that utilize forward lookahead or backreference constructions are not supported.',
        }),
    ).exactOptional(),
    Rank: LogPatternRankSchema.and(
      z
        .any()
        .openapi({
          description:
            'Rank of the log pattern. Must be a value between <code>1</code> and <code>1,000,000</code>. The patterns are sorted by rank, so we recommend that you set your highest priority patterns with the lowest rank. A pattern of rank <code>1</code> will be the first to get matched to a log line. A pattern of rank <code>1,000,000</code> will be last to get matched. When you configure custom log patterns from the console, a <code>Low</code> severity pattern translates to a <code>750,000</code> rank. A <code>Medium</code> severity pattern translates to a <code>500,000</code> rank. And a <code>High</code> severity pattern translates to a <code>250,000</code> rank. Rank values less than <code>1</code> or greater than <code>1,000,000</code> are reserved for AWS-provided patterns. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceGroupName', 'PatternSetName', 'PatternName'],
    title: 'UpdateLogPatternRequest',
  })
  .openapi('UpdateLogPatternRequest')

const FeedbackKeySchema = z.literal('INSIGHTS_FEEDBACK').openapi('FeedbackKey')

const MetaDataKeySchema = z.string().openapi('MetaDataKey')

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

export const postXAmzTargetEC2WindowsBarleyServiceCreateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.CreateApplication',
  description: 'Adds an application that is created from a resource group.',
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
        .literal('EC2WindowsBarleyService.CreateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.CreateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApplicationResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
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
    484: {
      description: 'TagsAlreadyExistException',
      content: { 'application/json': { schema: TagsAlreadyExistExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceCreateComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.CreateComponent',
  description: 'Creates a custom component by grouping similar standalone instances to monitor.',
  operationId: 'CreateComponent',
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
        .literal('EC2WindowsBarleyService.CreateComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.CreateComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateComponentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateComponentResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceCreateLogPatternRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern',
  description: 'Adds an log pattern to a <code>LogPatternSet</code>.',
  operationId: 'CreateLogPattern',
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
        .literal('EC2WindowsBarleyService.CreateLogPattern')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.CreateLogPattern'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLogPatternRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLogPatternResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDeleteApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication',
  description:
    'Removes the specified application from monitoring. Does not delete the application.',
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
        .literal('EC2WindowsBarleyService.DeleteApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DeleteApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteApplicationResponseSchema } },
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceDeleteComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent',
  description:
    'Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.',
  operationId: 'DeleteComponent',
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
        .literal('EC2WindowsBarleyService.DeleteComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DeleteComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteComponentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteComponentResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern',
  description: 'Removes the specified log pattern from a <code>LogPatternSet</code>.',
  operationId: 'DeleteLogPattern',
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
        .literal('EC2WindowsBarleyService.DeleteLogPattern')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DeleteLogPattern'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLogPatternRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLogPatternResponseSchema } },
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceDescribeApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication',
  description: 'Describes the application.',
  operationId: 'DescribeApplication',
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
        .literal('EC2WindowsBarleyService.DescribeApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DescribeApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent',
  description:
    'Describes a component and lists the resources that are grouped together in a component.',
  operationId: 'DescribeComponent',
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
        .literal('EC2WindowsBarleyService.DescribeComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DescribeComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeComponentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeComponentResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration',
    description: 'Describes the monitoring configuration of the component.',
    operationId: 'DescribeComponentConfiguration',
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
          .literal('EC2WindowsBarleyService.DescribeComponentConfiguration')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['EC2WindowsBarleyService.DescribeComponentConfiguration'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeComponentConfigurationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeComponentConfigurationResponseSchema } },
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
  },
)

export const postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRecommendationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation',
    description: 'Describes the recommended monitoring configuration of the component.',
    operationId: 'DescribeComponentConfigurationRecommendation',
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
          .literal('EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeComponentConfigurationRecommendationRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DescribeComponentConfigurationRecommendationResponseSchema,
          },
        },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern',
  description: 'Describe a specific log pattern from a <code>LogPatternSet</code>.',
  operationId: 'DescribeLogPattern',
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
        .literal('EC2WindowsBarleyService.DescribeLogPattern')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DescribeLogPattern'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeLogPatternRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLogPatternResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeObservationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation',
  description: 'Describes an anomaly or error with the application.',
  operationId: 'DescribeObservation',
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
        .literal('EC2WindowsBarleyService.DescribeObservation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DescribeObservation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeObservationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeObservationResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeProblemRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem',
  description: 'Describes an application problem.',
  operationId: 'DescribeProblem',
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
        .literal('EC2WindowsBarleyService.DescribeProblem')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.DescribeProblem'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProblemRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProblemResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceDescribeProblemObservationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations',
  description: 'Describes the anomalies or errors associated with the problem.',
  operationId: 'DescribeProblemObservations',
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
        .literal('EC2WindowsBarleyService.DescribeProblemObservations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['EC2WindowsBarleyService.DescribeProblemObservations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeProblemObservationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProblemObservationsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListApplicationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListApplications',
  description: 'Lists the IDs of the applications that you are monitoring. ',
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
        .literal('EC2WindowsBarleyService.ListApplications')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListApplications'] },
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
      content: { 'application/json': { schema: ListApplicationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListComponentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListComponents',
  description: 'Lists the auto-grouped, standalone, and custom components of the application.',
  operationId: 'ListComponents',
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
        .literal('EC2WindowsBarleyService.ListComponents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListComponents'] },
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
      content: { 'application/json': { schema: ListComponentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListComponentsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListConfigurationHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory',
  description:
    '<p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>',
  operationId: 'ListConfigurationHistory',
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
        .literal('EC2WindowsBarleyService.ListConfigurationHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListConfigurationHistory'] },
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
      content: { 'application/json': { schema: ListConfigurationHistoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigurationHistoryResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets',
  description: 'Lists the log pattern sets in the specific application.',
  operationId: 'ListLogPatternSets',
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
        .literal('EC2WindowsBarleyService.ListLogPatternSets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListLogPatternSets'] },
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
      content: { 'application/json': { schema: ListLogPatternSetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLogPatternSetsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListLogPatternsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns',
  description: 'Lists the log patterns in the specific log <code>LogPatternSet</code>.',
  operationId: 'ListLogPatterns',
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
        .literal('EC2WindowsBarleyService.ListLogPatterns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListLogPatterns'] },
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
      content: { 'application/json': { schema: ListLogPatternsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLogPatternsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListProblemsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListProblems',
  description: 'Lists the problems with your application.',
  operationId: 'ListProblems',
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
        .literal('EC2WindowsBarleyService.ListProblems')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListProblems'] },
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
      content: { 'application/json': { schema: ListProblemsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProblemsResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource',
  description:
    'Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.',
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
        .literal('EC2WindowsBarleyService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.ListTagsForResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.TagResource',
  description:
    '<p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>',
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
        .literal('EC2WindowsBarleyService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.TagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.UntagResource',
  description: 'Remove one or more tags (keys and values) from a specified application.',
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
        .literal('EC2WindowsBarleyService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.UntagResource'] },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceUpdateApplicationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication',
  description: 'Updates the application.',
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
        .literal('EC2WindowsBarleyService.UpdateApplication')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.UpdateApplication'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateApplicationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApplicationResponseSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postXAmzTargetEC2WindowsBarleyServiceUpdateComponentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent',
  description:
    'Updates the custom component name and/or the list of resources that make up the component.',
  operationId: 'UpdateComponent',
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
        .literal('EC2WindowsBarleyService.UpdateComponent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.UpdateComponent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateComponentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateComponentResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration',
  description:
    'Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. ',
  operationId: 'UpdateComponentConfiguration',
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
        .literal('EC2WindowsBarleyService.UpdateComponentConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['EC2WindowsBarleyService.UpdateComponentConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateComponentConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateComponentConfigurationResponseSchema } },
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

export const postXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern',
  description: 'Adds a log pattern to a <code>LogPatternSet</code>.',
  operationId: 'UpdateLogPattern',
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
        .literal('EC2WindowsBarleyService.UpdateLogPattern')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['EC2WindowsBarleyService.UpdateLogPattern'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateLogPatternRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateLogPatternResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
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
