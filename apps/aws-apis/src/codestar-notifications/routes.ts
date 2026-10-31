import { createRoute, z } from '@hono/zod-openapi'

const NotificationRuleArnSchema = z
  .string()
  .regex(/^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/)
  .openapi('NotificationRuleArn')

const CreateNotificationRuleResultSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNotificationRuleResult')

const EventTypeIdSchema = z.string().min(1).max(200).openapi('EventTypeId')

const TargetTypeSchema = z
  .string()
  .regex(/^[A-Za-z]+$/)
  .openapi('TargetType')

const TargetAddressSchema = z.string().min(1).max(320).openapi('TargetAddress')

const TargetSchema = z
  .object({
    TargetType: TargetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target type. Can be an Chatbot topic or Chatbot client.</p> <ul> <li> <p>Chatbot topics are specified as <code>SNS</code>.</p> </li> <li> <p>Chatbot clients are specified as <code>AWSChatbotSlack</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TargetAddress: TargetAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the Chatbot topics or Chatbot clients associated with a notification rule.',
    required: [],
  })
  .openapi('Target')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .max(256)
  .openapi('TagValue')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ConfigurationExceptionSchema = z.any().openapi('ConfigurationException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DeleteNotificationRuleResultSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the deleted notification rule.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteNotificationRuleResult')

const DeleteTargetResultSchema = z.object({}).openapi('DeleteTargetResult')

const NotificationRuleNameSchema = z
  .string()
  .regex(/[A-Za-z0-9\-_ ]+$/)
  .min(1)
  .max(64)
  .openapi('NotificationRuleName')

const ServiceNameSchema = z.string().openapi('ServiceName')

const EventTypeNameSchema = z.string().openapi('EventTypeName')

const ResourceTypeSchema = z
  .string()
  .regex(/^([a-zA-Z0-9-])+$/)
  .min(1)
  .openapi('ResourceType')

const EventTypeSummarySchema = z
  .object({
    EventTypeId: EventTypeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The system-generated ID of the event. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>.',
        }),
    ).exactOptional(),
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the service for which the event applies.' }),
    ).exactOptional(),
    EventTypeName: EventTypeNameSchema.and(
      z.any().openapi({ description: 'The name of the event.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the event.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns information about an event that has triggered a notification rule.',
    required: [],
  })
  .openapi('EventTypeSummary')

const EventTypeBatchSchema = z.array(EventTypeSummarySchema).openapi('EventTypeBatch')

const NotificationRuleResourceSchema = z
  .string()
  .regex(/^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$/)
  .openapi('NotificationRuleResource')

const TargetStatusSchema = z
  .enum(['PENDING', 'ACTIVE', 'UNREACHABLE', 'INACTIVE', 'DEACTIVATED'])
  .openapi('TargetStatus')

const TargetSummarySchema = z
  .object({
    TargetAddress: TargetAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client.',
        }),
    ).exactOptional(),
    TargetType: TargetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the target (for example, <code>SNS</code>).</p> <ul> <li> <p>Chatbot topics are specified as <code>SNS</code>.</p> </li> <li> <p>Chatbot clients are specified as <code>AWSChatbotSlack</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    TargetStatus: TargetStatusSchema.and(
      z.any().openapi({ description: 'The status of the target.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the targets specified for a notification rule.',
    required: [],
  })
  .openapi('TargetSummary')

const TargetsBatchSchema = z.array(TargetSummarySchema).openapi('TargetsBatch')

const DetailTypeSchema = z.enum(['BASIC', 'FULL']).openapi('DetailType')

const NotificationRuleCreatedBySchema = z.string().min(1).openapi('NotificationRuleCreatedBy')

const NotificationRuleStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('NotificationRuleStatus')

const CreatedTimestampSchema = z.iso.datetime({ offset: true }).openapi('CreatedTimestamp')

const LastModifiedTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi('LastModifiedTimestamp')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const DescribeNotificationRuleResultSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ),
    Name: NotificationRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the notification rule.' }),
    ).exactOptional(),
    EventTypes: EventTypeBatchSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the event types associated with the notification rule.',
        }),
    ).exactOptional(),
    Resource: NotificationRuleResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource associated with the notification rule.',
        }),
    ).exactOptional(),
    Targets: TargetsBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the Chatbot topics and Chatbot clients associated with the notification rule.',
        }),
    ).exactOptional(),
    DetailType: DetailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of detail included in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.',
        }),
    ).exactOptional(),
    CreatedBy: NotificationRuleCreatedBySchema.and(
      z
        .any()
        .openapi({
          description: 'The name or email alias of the person who created the notification rule.',
        }),
    ).exactOptional(),
    Status: NotificationRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the notification rule. Valid statuses are on (sending notifications) or off (not sending notifications).',
        }),
    ).exactOptional(),
    CreatedTimestamp: CreatedTimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time the notification rule was created, in timestamp format.',
        }),
    ).exactOptional(),
    LastModifiedTimestamp: LastModifiedTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the notification rule was most recently updated, in timestamp format.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with the notification rule.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'] })
  .openapi('DescribeNotificationRuleResult')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const NextTokenSchema = z
  .string()
  .regex(/^[\w\/+=]+$/)
  .openapi('NextToken')

const ListEventTypesResultSchema = z
  .object({
    EventTypes: EventTypeBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about each event, including service name, resource type, event ID, and event name.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventTypesResult')

const ListEventTypesFilterNameSchema = z
  .enum(['RESOURCE_TYPE', 'SERVICE_NAME'])
  .openapi('ListEventTypesFilterName')

const ListEventTypesFilterValueSchema = z.string().openapi('ListEventTypesFilterValue')

const ListEventTypesFilterSchema = z
  .object({
    Name: ListEventTypesFilterNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The system-generated name of the filter type you want to filter by.',
        }),
    ),
    Value: ListEventTypesFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the resource type (for example, pipeline) or service name (for example, CodePipeline) that you want to filter by.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.',
  })
  .openapi('ListEventTypesFilter')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const NotificationRuleIdSchema = z.string().min(1).max(40).openapi('NotificationRuleId')

const NotificationRuleSummarySchema = z
  .object({
    Id: NotificationRuleIdSchema.and(
      z.any().openapi({ description: 'The unique ID of the notification rule.' }),
    ).exactOptional(),
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a specified notification rule.', required: [] })
  .openapi('NotificationRuleSummary')

const NotificationRuleBatchSchema = z
  .array(NotificationRuleSummarySchema)
  .openapi('NotificationRuleBatch')

const ListNotificationRulesResultSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of the results.',
        }),
    ).exactOptional(),
    NotificationRules: NotificationRuleBatchSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of notification rules for the Amazon Web Services account, by Amazon Resource Name (ARN) and ID. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNotificationRulesResult')

const ListNotificationRulesFilterNameSchema = z
  .enum(['EVENT_TYPE_ID', 'CREATED_BY', 'RESOURCE', 'TARGET_ADDRESS'])
  .openapi('ListNotificationRulesFilterName')

const ListNotificationRulesFilterValueSchema = z
  .string()
  .max(2048)
  .openapi('ListNotificationRulesFilterValue')

const ListNotificationRulesFilterSchema = z
  .object({
    Name: ListNotificationRulesFilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the attribute you want to use to filter the returned notification rules.',
        }),
    ),
    Value: ListNotificationRulesFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by <i>RESOURCE</i> in Name, you might specify the ARN of a pipeline in CodePipeline for the value.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.',
  })
  .openapi('ListNotificationRulesFilter')

const ListTagsForResourceResultSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with the notification rule.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResult')

const ListTargetsResultSchema = z
  .object({
    Targets: TargetsBatchSchema.and(
      z.any().openapi({ description: 'The list of notification rule targets. ' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that can be used in a request to return the next batch of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTargetsResult')

const ListTargetsFilterNameSchema = z
  .enum(['TARGET_TYPE', 'TARGET_ADDRESS', 'TARGET_STATUS'])
  .openapi('ListTargetsFilterName')

const ListTargetsFilterValueSchema = z.string().max(2048).openapi('ListTargetsFilterValue')

const ListTargetsFilterSchema = z
  .object({
    Name: ListTargetsFilterNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the attribute you want to use to filter the returned targets.',
        }),
    ),
    Value: ListTargetsFilterValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the attribute you want to use to filter the returned targets. For example, if you specify <code>SNS</code> for the Target type, you could specify an Amazon Resource Name (ARN) for a topic as the value.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      'Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Chatbot topics as targets, you could specify a ListTargetsFilter Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of <code>ACTIVE</code>.',
  })
  .openapi('ListTargetsFilter')

const SubscribeResultSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscribeResult')

const TagResourceResultSchema = z
  .object({
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The list of tags associated with the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagResourceResult')

const UnsubscribeResultSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.',
        }),
    ),
  })
  .openapi({ required: ['Arn'] })
  .openapi('UnsubscribeResult')

const UntagResourceResultSchema = z.object({}).openapi('UntagResourceResult')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateNotificationRuleResultSchema = z.object({}).openapi('UpdateNotificationRuleResult')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[\w:\/-]+$/)
  .min(1)
  .max(256)
  .openapi('ClientRequestToken')

const EventTypeIdsSchema = z.array(EventTypeIdSchema).openapi('EventTypeIds')

const TargetsSchema = z.array(TargetSchema).max(10).openapi('Targets')

const CreateNotificationRuleRequestSchema = z
  .object({
    Name: NotificationRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.',
        }),
    ),
    EventTypeIds: EventTypeIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.',
        }),
    ),
    Resource: NotificationRuleResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.',
        }),
    ),
    Targets: TargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the notification rule.',
        }),
    ),
    DetailType: DetailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.',
        }),
    ),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". ',
        }),
    ).exactOptional(),
    Status: NotificationRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'EventTypeIds', 'Resource', 'Targets', 'DetailType'],
    title: 'CreateNotificationRuleRequest',
  })
  .openapi('CreateNotificationRuleRequest')

const DeleteNotificationRuleRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the notification rule you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'DeleteNotificationRuleRequest' })
  .openapi('DeleteNotificationRuleRequest')

const ForceUnsubscribeAllSchema = z.boolean().openapi('ForceUnsubscribeAll')

const DeleteTargetRequestSchema = z
  .object({
    TargetAddress: TargetAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.',
        }),
    ),
    ForceUnsubscribeAll: ForceUnsubscribeAllSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetAddress'], title: 'DeleteTargetRequest' })
  .openapi('DeleteTargetRequest')

const DescribeNotificationRuleRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'DescribeNotificationRuleRequest' })
  .openapi('DescribeNotificationRuleRequest')

const ListEventTypesFiltersSchema = z
  .array(ListEventTypesFilterSchema)
  .openapi('ListEventTypesFilters')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListEventTypesRequestSchema = z
  .object({
    Filters: ListEventTypesFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'The filters to use to return information by service or resource type.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEventTypesRequest', required: [] })
  .openapi('ListEventTypesRequest')

const ListNotificationRulesFiltersSchema = z
  .array(ListNotificationRulesFilterSchema)
  .openapi('ListNotificationRulesFilters')

const ListNotificationRulesRequestSchema = z
  .object({
    Filters: ListNotificationRulesFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNotificationRulesRequest', required: [] })
  .openapi('ListNotificationRulesRequest')

const ListTagsForResourceRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the notification rule.' }),
    ),
  })
  .openapi({ required: ['Arn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTargetsFiltersSchema = z.array(ListTargetsFilterSchema).openapi('ListTargetsFilters')

const ListTargetsRequestSchema = z
  .object({
    Filters: ListTargetsFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTargetsRequest', required: [] })
  .openapi('ListTargetsRequest')

const SubscribeRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.',
        }),
    ),
    Target: TargetSchema,
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An enumeration token that, when provided in a request, returns the next batch of the results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn', 'Target'], title: 'SubscribeRequest' })
  .openapi('SubscribeRequest')

const TagKeysSchema = z.array(TagKeySchema).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the notification rule to tag.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".',
        }),
    ),
  })
  .openapi({ required: ['Arn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnsubscribeRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ),
    TargetAddress: TargetAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the Chatbot topic to unsubscribe from the notification rule.',
        }),
    ),
  })
  .openapi({ required: ['Arn', 'TargetAddress'], title: 'UnsubscribeRequest' })
  .openapi('UnsubscribeRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateNotificationRuleRequestSchema = z
  .object({
    Arn: NotificationRuleArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the notification rule.' }),
    ),
    Name: NotificationRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the notification rule.' }),
    ).exactOptional(),
    Status: NotificationRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).',
        }),
    ).exactOptional(),
    EventTypeIds: EventTypeIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of event types associated with this notification rule. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>.',
        }),
    ).exactOptional(),
    Targets: TargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The address and type of the targets to receive notifications from this notification rule.',
        }),
    ).exactOptional(),
    DetailType: DetailTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Arn'], title: 'UpdateNotificationRuleRequest' })
  .openapi('UpdateNotificationRuleRequest')

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

export const postCreateNotificationRuleRoute = createRoute({
  method: 'post',
  path: '/createNotificationRule',
  description:
    'Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.',
  operationId: 'CreateNotificationRule',
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
                .regex(/[A-Za-z0-9\-_ ]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.',
                }),
              EventTypeIds: z
                .array(EventTypeIdSchema)
                .openapi({
                  description:
                    'A list of event types associated with this notification rule. For a list of allowed events, see <a>EventTypeSummary</a>.',
                }),
              Resource: z
                .string()
                .regex(/^arn:aws[^:\s]*:[^:\s]*:[^:\s]*:[0-9]{12}:[^\s]+$/)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.',
                }),
              Targets: z
                .array(TargetSchema)
                .max(10)
                .openapi({
                  description:
                    'A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the notification rule.',
                }),
              DetailType: z
                .enum(['BASIC', 'FULL'])
                .openapi({
                  description:
                    'The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[\w:\/-]+$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.</p> <note> <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.</p> </note>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". ',
                }),
              Status: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "The status of the notification rule. The default value is <code>ENABLED</code>. If the status is set to <code>DISABLED</code>, notifications aren't sent for the notification rule.",
                }),
            })
            .openapi({ required: ['Name', 'EventTypeIds', 'Resource', 'Targets', 'DetailType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNotificationRuleResultSchema } },
    },
    480: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ConfigurationException',
      content: { 'application/json': { schema: ConfigurationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDeleteNotificationRuleRoute = createRoute({
  method: 'post',
  path: '/deleteNotificationRule',
  description: 'Deletes a notification rule for a resource.',
  operationId: 'DeleteNotificationRule',
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
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the notification rule you want to delete.',
                }),
            })
            .openapi({ required: ['Arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNotificationRuleResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postDeleteTargetRoute = createRoute({
  method: 'post',
  path: '/deleteTarget',
  description: 'Deletes a specified target for notifications.',
  operationId: 'DeleteTarget',
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
              TargetAddress: z
                .string()
                .min(1)
                .max(320)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.',
                }),
              ForceUnsubscribeAll: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted.',
                }),
            })
            .openapi({ required: ['TargetAddress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTargetResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postDescribeNotificationRuleRoute = createRoute({
  method: 'post',
  path: '/describeNotificationRule',
  description: 'Returns information about a specified notification rule.',
  operationId: 'DescribeNotificationRule',
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
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the notification rule.',
                }),
            })
            .openapi({ required: ['Arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNotificationRuleResultSchema } },
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

export const postListEventTypesRoute = createRoute({
  method: 'post',
  path: '/listEventTypes',
  description: 'Returns information about the event types available for configuring notifications.',
  operationId: 'ListEventTypes',
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
      content: {
        'application/json': {
          schema: z
            .object({
              Filters: z
                .array(ListEventTypesFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The filters to use to return information by service or resource type.',
                }),
              NextToken: z
                .string()
                .regex(/^[\w\/+=]+$/)
                .exactOptional()
                .openapi({
                  description:
                    'An enumeration token that, when provided in a request, returns the next batch of the results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.',
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
      content: { 'application/json': { schema: ListEventTypesResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListNotificationRulesRoute = createRoute({
  method: 'post',
  path: '/listNotificationRules',
  description: 'Returns a list of the notification rules for an Amazon Web Services account.',
  operationId: 'ListNotificationRules',
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
      content: {
        'application/json': {
          schema: z
            .object({
              Filters: z
                .array(ListNotificationRulesFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The filters to use to return information by service or resource type. For valid values, see <a>ListNotificationRulesFilter</a>.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>',
                }),
              NextToken: z
                .string()
                .regex(/^[\w\/+=]+$/)
                .exactOptional()
                .openapi({
                  description:
                    'An enumeration token that, when provided in a request, returns the next batch of the results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.',
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
      content: { 'application/json': { schema: ListNotificationRulesResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/listTagsForResource',
  description: 'Returns a list of the tags associated with a notification rule.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description: 'The Amazon Resource Name (ARN) for the notification rule.',
                }),
            })
            .openapi({ required: ['Arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResultSchema } },
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

export const postListTargetsRoute = createRoute({
  method: 'post',
  path: '/listTargets',
  description:
    'Returns a list of the notification rule targets for an Amazon Web Services account.',
  operationId: 'ListTargets',
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
      content: {
        'application/json': {
          schema: z
            .object({
              Filters: z
                .array(ListTargetsFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.</p> <note> <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p> </note>',
                }),
              NextToken: z
                .string()
                .regex(/^[\w\/+=]+$/)
                .exactOptional()
                .openapi({
                  description:
                    'An enumeration token that, when provided in a request, returns the next batch of the results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.',
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
      content: { 'application/json': { schema: ListTargetsResultSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postSubscribeRoute = createRoute({
  method: 'post',
  path: '/subscribe',
  description:
    'Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.',
  operationId: 'Subscribe',
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
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.',
                }),
              Target: z
                .object({
                  TargetType: TargetTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The target type. Can be an Chatbot topic or Chatbot client.</p> <ul> <li> <p>Chatbot topics are specified as <code>SNS</code>.</p> </li> <li> <p>Chatbot clients are specified as <code>AWSChatbotSlack</code>.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  TargetAddress: TargetAddressSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Information about the Chatbot topics or Chatbot clients associated with a notification rule.',
                  required: [],
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[\w:\/-]+$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'An enumeration token that, when provided in a request, returns the next batch of the results.',
                }),
            })
            .openapi({ required: ['Arn', 'Target'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubscribeResultSchema } },
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
      description: 'ConfigurationException',
      content: { 'application/json': { schema: ConfigurationExceptionSchema } },
    },
  },
})

export const postTagResourceRoute = createRoute({
  method: 'post',
  path: '/tagResource',
  description: 'Associates a set of provided tags with a notification rule.',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the notification rule to tag.',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .openapi({
                  description:
                    'The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".',
                }),
            })
            .openapi({ required: ['Arn', 'Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/unsubscribe',
  description:
    'Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.',
  operationId: 'Unsubscribe',
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
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the notification rule.',
                }),
              TargetAddress: z
                .string()
                .min(1)
                .max(320)
                .openapi({
                  description:
                    'The ARN of the Chatbot topic to unsubscribe from the notification rule.',
                }),
            })
            .openapi({ required: ['Arn', 'TargetAddress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnsubscribeResultSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postUntagResourceResourceArnTagKeysRoute = createRoute({
  method: 'post',
  path: '/untagResource/{resourceArn}#tagKeys',
  description: 'Removes the association between one or more provided tags and a notification rule.',
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
        .regex(/^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws[^:\\s]*:codestar-notifications:[^:\\s]+:\\d{12}:notificationrule\\/(.*\\S)?$',
            },
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
            description: 'The key names of the tags to remove.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/TagKey' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResultSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postUpdateNotificationRuleRoute = createRoute({
  method: 'post',
  path: '/updateNotificationRule',
  description:
    '<p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>',
  operationId: 'UpdateNotificationRule',
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
              Arn: z
                .string()
                .regex(
                  /^arn:aws[^:\s]*:codestar-notifications:[^:\s]+:\d{12}:notificationrule\/(.*\S)?$/,
                )
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the notification rule.',
                }),
              Name: z
                .string()
                .regex(/[A-Za-z0-9\-_ ]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The name of the notification rule.' }),
              Status: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    'The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).',
                }),
              EventTypeIds: z
                .array(EventTypeIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of event types associated with this notification rule. For a complete list of event types and IDs, see <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a> in the <i>Developer Tools Console User Guide</i>.',
                }),
              Targets: z
                .array(TargetSchema)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'The address and type of the targets to receive notifications from this notification rule.',
                }),
              DetailType: z
                .enum(['BASIC', 'FULL'])
                .exactOptional()
                .openapi({
                  description:
                    'The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.',
                }),
            })
            .openapi({ required: ['Arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNotificationRuleResultSchema } },
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
      description: 'ConfigurationException',
      content: { 'application/json': { schema: ConfigurationExceptionSchema } },
    },
  },
})
