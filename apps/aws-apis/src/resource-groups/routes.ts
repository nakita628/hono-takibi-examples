import { createRoute, z } from '@hono/zod-openapi'

const GroupArnSchema = z
  .string()
  .regex(
    /arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/[a-zA-Z0-9_\.-]{1,300}/,
  )
  .min(12)
  .max(1600)
  .openapi('GroupArn')

const GroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_\.-]+/)
  .min(1)
  .max(300)
  .openapi('GroupName')

const DescriptionSchema = z
  .string()
  .regex(/[\sa-zA-Z0-9_\.-]*/)
  .max(1024)
  .openapi('Description')

const GroupSchema = z
  .object({
    GroupArn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource group.' }),
    ),
    Name: GroupNameSchema.and(z.any().openapi({ description: 'The name of the resource group.' })),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the resource group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['GroupArn', 'Name'],
    description:
      '<p>A resource group that contains Amazon Web Services resources. You can assign resources to the group by associating either of the following elements with the group:</p> <ul> <li> <p> <a>ResourceQuery</a> - Use a resource query to specify a set of tag keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that have those keys with the same values are included in the group. You can add a resource query when you create the group, or later by using the <a>PutGroupConfiguration</a> operation.</p> </li> <li> <p> <a>GroupConfiguration</a> - Use a service configuration to associate the group with an Amazon Web Services service. The configuration specifies which resource types can be included in the group.</p> </li> </ul>',
  })
  .openapi('Group')

const QueryTypeSchema = z.enum(['TAG_FILTERS_1_0', 'CLOUDFORMATION_STACK_1_0']).openapi('QueryType')

const QuerySchema = z
  .string()
  .regex(/[\s\S]*/)
  .max(4096)
  .openapi('Query')

const ResourceQuerySchema = z
  .object({
    Type: QueryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the query to perform. This can have one of two values:</p> <ul> <li> <p> <i> <code>CLOUDFORMATION_STACK_1_0:</code> </i> Specifies that you want the group to contain the members of an CloudFormation stack. The <code>Query</code> contains a <code>StackIdentifier</code> element with an ARN for a CloudFormation stack.</p> </li> <li> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> Specifies that you want the group to include resource that have tags that match the query. </p> </li> </ul>',
        }),
    ),
    Query: QuerySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The query that defines a group or a search. The contents depends on the value of the <code>Type</code> element.</p> <ul> <li> <p> <code>ResourceTypeFilters</code> – Applies to all <code>ResourceQuery</code> objects of either <code>Type</code>. This element contains one of the following two items:</p> <ul> <li> <p>The value <code>AWS::AllSupported</code>. This causes the ResourceQuery to match resources of any resource type that also match the query.</p> </li> <li> <p>A list (a JSON array) of resource type identifiers that limit the query to only resources of the specified types. For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>.</p> </li> </ul> <p>Example: <code>"ResourceTypeFilters": ["AWS::AllSupported"]</code> or <code>"ResourceTypeFilters": ["AWS::EC2::Instance", "AWS::S3::Bucket"]</code> </p> </li> <li> <p> <code>TagFilters</code> – applicable only if <code>Type</code> = <code>TAG_FILTERS_1_0</code>. The <code>Query</code> contains a JSON string that represents a collection of simple tag filters. The JSON string uses a syntax similar to the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> </code> operation, but uses only the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-ResourceTypeFilters"> ResourceTypeFilters</a> </code> and <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-TagFiltersTagFilters">TagFilters</a> </code> fields. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p> <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each:</p> <p> <code>[{"Stage":["Test","Deploy"]},{"Version":["1","2"]}]</code> </p> <p>The results of this resource query could include the following.</p> <ul> <li> <p>An Amazon EC2 instance that has the following two tags: <code>{"Stage":"Deploy"}</code>, and <code>{"Version":"2"}</code> </p> </li> <li> <p>An S3 bucket that has the following two tags: <code>{"Stage":"Test"}</code>, and <code>{"Version":"1"}</code> </p> </li> </ul> <p>The resource query results would <i>not</i> include the following items in the results, however. </p> <ul> <li> <p>An Amazon EC2 instance that has only the following tag: <code>{"Stage":"Deploy"}</code>.</p> <p>The instance does not have <b>all</b> of the tag keys specified in the filter, so it is excluded from the results.</p> </li> <li> <p>An RDS database that has the following two tags: <code>{"Stage":"Archived"}</code> and <code>{"Version":"4"}</code> </p> <p>The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.</p> </li> </ul> <p>Example: <code>"TagFilters": [ { "Key": "Stage", "Values": [ "Gamma", "Beta" ] }</code> </p> </li> <li> <p> <code>StackIdentifier</code> – applicable only if <code>Type</code> = <code>CLOUDFORMATION_STACK_1_0</code>. The value of this parameter is the Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included in the group.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Query'],
    description:
      '<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query \'{"Type":"TAG_FILTERS_1_0","Query":"{\\"ResourceTypeFilters\\":[\\"AWS::AllSupported\\"],\\"TagFilters\\":[{\\"Key\\":\\"Stage\\",\\"Values\\":[\\"Test\\"]}]}"}\'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>',
  })
  .openapi('ResourceQuery')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagsSchema = z.record(z.string(), TagValueSchema).openapi('Tags')

const GroupConfigurationTypeSchema = z
  .string()
  .regex(/AWS::[a-zA-Z0-9]+::[a-zA-Z0-9]+/)
  .max(40)
  .openapi('GroupConfigurationType')

const GroupConfigurationParameterNameSchema = z
  .string()
  .regex(/[a-z-]+/)
  .min(1)
  .max(80)
  .openapi('GroupConfigurationParameterName')

const GroupConfigurationParameterValueSchema = z
  .string()
  .regex(/[a-zA-Z0-9:\/\._-]+/)
  .min(1)
  .max(256)
  .openapi('GroupConfigurationParameterValue')

const GroupConfigurationParameterValueListSchema = z
  .array(GroupConfigurationParameterValueSchema)
  .openapi('GroupConfigurationParameterValueList')

const GroupConfigurationParameterSchema = z
  .object({
    Name: GroupConfigurationParameterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the group configuration parameter. For the list of parameters that you can use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and parameters</a>.',
        }),
    ),
    Values: GroupConfigurationParameterValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value or values to be used for the specified parameter. For the list of values you can use with each parameter, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and parameters</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'A parameter for a group configuration item. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.',
  })
  .openapi('GroupConfigurationParameter')

const GroupParameterListSchema = z
  .array(GroupConfigurationParameterSchema)
  .openapi('GroupParameterList')

const GroupConfigurationItemSchema = z
  .object({
    Type: GroupConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the type of group configuration item. Each item must have a unique value for <code>type</code>. For the list of types that you can specify for a configuration item, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and parameters</a>.',
        }),
    ),
    Parameters: GroupParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A collection of parameters for this group configuration item. For the list of parameters that you can use with each configuration item type, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types">Supported resource types and parameters</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      'An item in a group configuration. A group service configuration can have one or more items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.',
  })
  .openapi('GroupConfigurationItem')

const GroupConfigurationListSchema = z
  .array(GroupConfigurationItemSchema)
  .max(2)
  .openapi('GroupConfigurationList')

const GroupConfigurationStatusSchema = z
  .enum(['UPDATING', 'UPDATE_COMPLETE', 'UPDATE_FAILED'])
  .openapi('GroupConfigurationStatus')

const GroupConfigurationFailureReasonSchema = z.string().openapi('GroupConfigurationFailureReason')

const GroupConfigurationSchema = z
  .object({
    Configuration: GroupConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description: 'The configuration currently associated with the group and in effect.',
        }),
    ).exactOptional(),
    ProposedConfiguration: GroupConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, the new configuration that is in the process of being applied to the group.',
        }),
    ).exactOptional(),
    Status: GroupConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of an attempt to update the group configuration.',
        }),
    ).exactOptional(),
    FailureReason: GroupConfigurationFailureReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, the reason why a request to update the group configuration failed.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A service configuration associated with a resource group. The configuration options are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies which resources can be included in the group. You can add a service configuration when you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>.',
    required: [],
  })
  .openapi('GroupConfiguration')

const CreateGroupOutputSchema = z
  .object({
    Group: GroupSchema.and(
      z.any().openapi({ description: 'The description of the resource group.' }),
    ).exactOptional(),
    ResourceQuery: ResourceQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource query associated with the group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>. ',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with the group.' }),
    ).exactOptional(),
    GroupConfiguration: GroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service configuration associated with the resource group. For details about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateGroupOutput')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const MethodNotAllowedExceptionSchema = z.any().openapi('MethodNotAllowedException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const DeleteGroupOutputSchema = z
  .object({
    Group: GroupSchema.and(
      z.any().openapi({ description: 'A full description of the deleted resource group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteGroupOutput')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const GroupLifecycleEventsDesiredStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('GroupLifecycleEventsDesiredStatus')

const GroupLifecycleEventsStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'IN_PROGRESS', 'ERROR'])
  .openapi('GroupLifecycleEventsStatus')

const GroupLifecycleEventsStatusMessageSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('GroupLifecycleEventsStatusMessage')

const AccountSettingsSchema = z
  .object({
    GroupLifecycleEventsDesiredStatus: GroupLifecycleEventsDesiredStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The desired target status of the group lifecycle events feature. If',
        }),
    ).exactOptional(),
    GroupLifecycleEventsStatus: GroupLifecycleEventsStatusSchema.and(
      z.any().openapi({ description: 'The current status of the group lifecycle events feature.' }),
    ).exactOptional(),
    GroupLifecycleEventsStatusMessage: GroupLifecycleEventsStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text of any error message occurs during an attempt to turn group lifecycle events on or off.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The Resource Groups settings for this Amazon Web Services account.',
    required: [],
  })
  .openapi('AccountSettings')

const GetAccountSettingsOutputSchema = z
  .object({
    AccountSettings: AccountSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'The current settings for the optional features in Resource Groups.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountSettingsOutput')

const GetGroupOutputSchema = z
  .object({
    Group: GroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that contains the metadata details for the specified resource group. Use <a>GetGroupQuery</a> and <a>GetGroupConfiguration</a> to get those additional details of the resource group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupOutput')

const GetGroupConfigurationOutputSchema = z
  .object({
    GroupConfiguration: GroupConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that describes the service configuration attached with the specified group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupConfigurationOutput')

const GroupQuerySchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the resource group that is associated with the specified resource query.',
        }),
    ),
    ResourceQuery: ResourceQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource query that determines which Amazon Web Services resources are members of the associated resource group.',
        }),
    ),
  })
  .openapi({
    required: ['GroupName', 'ResourceQuery'],
    description:
      'A mapping of a query attached to a resource group that determines the Amazon Web Services resources that are members of the group.',
  })
  .openapi('GroupQuery')

const GetGroupQueryOutputSchema = z
  .object({
    GroupQuery: GroupQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource query associated with the specified group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetGroupQueryOutput')

const GetTagsOutputSchema = z
  .object({
    Arn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the tagged resource group.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ description: 'The tags associated with the specified resource group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTagsOutput')

const ResourceArnSchema = z
  .string()
  .regex(/arn:aws(-[a-z]+)*:[a-z0-9\-]*:([a-z]{2}(-[a-z]+)+-\d{1})?:([0-9]{12})?:.+/)
  .openapi('ResourceArn')

const ResourceArnListSchema = z.array(ResourceArnSchema).min(1).max(10).openapi('ResourceArnList')

const ErrorMessageSchema = z.string().min(1).max(1024).openapi('ErrorMessage')

const ErrorCodeSchema = z.string().min(1).max(128).openapi('ErrorCode')

const FailedResourceSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the resource that failed to be added or removed.' }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message text associated with the failure.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code associated with the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A resource that failed to be added to or removed from a group.',
    required: [],
  })
  .openapi('FailedResource')

const FailedResourceListSchema = z.array(FailedResourceSchema).openapi('FailedResourceList')

const PendingResourceSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon resource name (ARN) of the resource that's in a pending state.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A structure that identifies a resource that is currently pending addition to the group as a member. Adding a resource to a resource group happens asynchronously as a background task and this one isn't completed yet.",
    required: [],
  })
  .openapi('PendingResource')

const PendingResourceListSchema = z.array(PendingResourceSchema).openapi('PendingResourceList')

const GroupResourcesOutputSchema = z
  .object({
    Succeeded: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ARNs of the resources that this operation successfully added to the group.',
        }),
    ).exactOptional(),
    Failed: FailedResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ARNs of any resources that this operation failed to add to the group.',
        }),
    ).exactOptional(),
    Pending: PendingResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of ARNs of any resources that this operation is still in the process adding to the group. These pending additions continue asynchronously. You can check the status of pending additions by using the <code> <a>ListGroupResources</a> </code> operation, and checking the <code>Resources</code> array in the response and the <code>Status</code> field of each object in that array. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupResourcesOutput')

const ResourceTypeSchema = z
  .string()
  .regex(/AWS::[a-zA-Z0-9]+::\w+/)
  .openapi('ResourceType')

const ResourceIdentifierSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z.any().openapi({ description: 'The ARN of a resource.' }),
    ).exactOptional(),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type of a resource, such as <code>AWS::EC2::Instance</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains the ARN of a resource and its resource type.',
    required: [],
  })
  .openapi('ResourceIdentifier')

const ResourceStatusValueSchema = z.literal('PENDING').openapi('ResourceStatusValue')

const ResourceStatusSchema = z
  .object({
    Name: ResourceStatusValueSchema.and(
      z.any().openapi({ description: 'The current status.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "A structure that identifies the current group membership status for a resource. Adding a resource to a resource group is performed asynchronously as a background task. A <code>PENDING</code> status indicates, for this resource, that the process isn't completed yet.",
    required: [],
  })
  .openapi('ResourceStatus')

const ListGroupResourcesItemSchema = z
  .object({
    Identifier: ResourceIdentifierSchema.exactOptional(),
    Status: ResourceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A structure that contains the status of this resource's membership in the group.</p> <note> <p>This field is present in the response only if the group is of type <code>AWS::EC2::HostManagement</code>.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure returned by the <a>ListGroupResources</a> operation that contains identity and group membership status information for one of the resources in the group.',
    required: [],
  })
  .openapi('ListGroupResourcesItem')

const ListGroupResourcesItemListSchema = z
  .array(ListGroupResourcesItemSchema)
  .openapi('ListGroupResourcesItemList')

const ResourceIdentifierListSchema = z
  .array(ResourceIdentifierSchema)
  .openapi('ResourceIdentifierList')

const NextTokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+\/]*={0,2}$/)
  .min(0)
  .max(8192)
  .openapi('NextToken')

const QueryErrorCodeSchema = z
  .enum([
    'CLOUDFORMATION_STACK_INACTIVE',
    'CLOUDFORMATION_STACK_NOT_EXISTING',
    'CLOUDFORMATION_STACK_UNASSUMABLE_ROLE',
  ])
  .openapi('QueryErrorCode')

const QueryErrorMessageSchema = z.string().openapi('QueryErrorMessage')

const QueryErrorSchema = z
  .object({
    ErrorCode: QueryErrorCodeSchema.and(
      z.any().openapi({ description: 'Specifies the error code that was raised.' }),
    ).exactOptional(),
    Message: QueryErrorMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that explains the <code>ErrorCode</code> value. Messages might state that the specified CloudFront stack does not exist (or no longer exists). For <code>CLOUDFORMATION_STACK_INACTIVE</code>, the message typically states that the CloudFront stack has a status that is not (or no longer) active, such as <code>CREATE_FAILED</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFront stack-based queries. The error occurs if the CloudFront stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that Resource Groups could not complete the operation, but the resulting group might have no member resources.',
    required: [],
  })
  .openapi('QueryError')

const QueryErrorListSchema = z.array(QueryErrorSchema).openapi('QueryErrorList')

const ListGroupResourcesOutputSchema = z
  .object({
    Resources: ListGroupResourcesItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of resources from which you can determine each resource's identity, type, and group membership status.",
        }),
    ).exactOptional(),
    ResourceIdentifiers: ResourceIdentifierListSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "<important> <p> <b> <i>Deprecated - don't use this parameter. Use the <code>Resources</code> response field instead.</i> </b> </p> </important>This field is deprecated, use Resources instead.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
    QueryErrors: QueryErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>QueryError</code> objects. Each error is an object that contains <code>ErrorCode</code> and <code>Message</code> structures. Possible values for <code>ErrorCode</code> are <code>CLOUDFORMATION_STACK_INACTIVE</code> and <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupResourcesOutput')

const ResourceFilterNameSchema = z.literal('resource-type').openapi('ResourceFilterName')

const ResourceFilterValueSchema = z
  .string()
  .regex(/AWS::[a-zA-Z0-9]+::[a-zA-Z0-9]+/)
  .min(1)
  .max(128)
  .openapi('ResourceFilterValue')

const ResourceFilterValuesSchema = z
  .array(ResourceFilterValueSchema)
  .min(1)
  .max(5)
  .openapi('ResourceFilterValues')

const ResourceFilterSchema = z
  .object({
    Name: ResourceFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the filter. Filter names are case-sensitive.' }),
    ),
    Values: ResourceFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more filter values. Allowed filter values vary by resource filter name, and are case-sensitive.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      'A filter name and value pair that is used to obtain more specific results from a list of resources.',
  })
  .openapi('ResourceFilter')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const GroupIdentifierSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z.any().openapi({ description: 'The name of the resource group.' }),
    ).exactOptional(),
    GroupArn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the resource group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The unique identifiers for a resource group.', required: [] })
  .openapi('GroupIdentifier')

const GroupIdentifierListSchema = z.array(GroupIdentifierSchema).openapi('GroupIdentifierList')

const GroupListSchema = z.array(GroupSchema).openapi('GroupList')

const ListGroupsOutputSchema = z
  .object({
    GroupIdentifiers: GroupIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <a>GroupIdentifier</a> objects. Each identifier is an object that contains both the <code>Name</code> and the <code>GroupArn</code>.',
        }),
    ).exactOptional(),
    Groups: GroupListSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "<important> <p> <i> <b>Deprecated - don't use this field. Use the <code>GroupIdentifiers</code> response field instead.</b> </i> </p> </important>This field is deprecated, use GroupIdentifiers instead.",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListGroupsOutput')

const GroupFilterNameSchema = z
  .enum(['resource-type', 'configuration-type'])
  .openapi('GroupFilterName')

const GroupFilterValueSchema = z
  .string()
  .regex(/AWS::(AllSupported|[a-zA-Z0-9]+::[a-zA-Z0-9]+)/)
  .min(1)
  .max(128)
  .openapi('GroupFilterValue')

const GroupFilterValuesSchema = z
  .array(GroupFilterValueSchema)
  .min(1)
  .max(5)
  .openapi('GroupFilterValues')

const GroupFilterSchema = z
  .object({
    Name: GroupFilterNameSchema.and(
      z.any().openapi({ description: 'The name of the filter. Filter names are case-sensitive.' }),
    ),
    Values: GroupFilterValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more filter values. Allowed filter values vary by group filter name, and are case-sensitive.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Values'],
    description:
      'A filter collection that you can use to restrict the results from a <code>List</code> operation to only those you want to include.',
  })
  .openapi('GroupFilter')

const PutGroupConfigurationOutputSchema = z.object({}).openapi('PutGroupConfigurationOutput')

const SearchResourcesOutputSchema = z
  .object({
    ResourceIdentifiers: ResourceIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs and resource types of resources that are members of the group that you specified.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If present, indicates that more output is available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.',
        }),
    ).exactOptional(),
    QueryErrors: QueryErrorListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>QueryError</code> objects. Each error is an object that contains <code>ErrorCode</code> and <code>Message</code> structures.</p> <p>Possible values for <code>ErrorCode</code>:</p> <ul> <li> <p> <code>CLOUDFORMATION_STACK_INACTIVE</code> </p> </li> <li> <p> <code>CLOUDFORMATION_STACK_NOT_EXISTING</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResourcesOutput')

const TagOutputSchema = z
  .object({
    Arn: GroupArnSchema.and(
      z.any().openapi({ description: 'The ARN of the tagged resource.' }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'The tags that have been added to the specified resource group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagOutput')

const UngroupResourcesOutputSchema = z
  .object({
    Succeeded: ResourceArnListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resources that were successfully removed from the group by this operation.',
        }),
    ).exactOptional(),
    Failed: FailedResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of any resources that failed to be removed from the group by this operation.',
        }),
    ).exactOptional(),
    Pending: PendingResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of any resources that are still in the process of being removed from the group by this operation. These pending removals continue asynchronously. You can check the status of pending removals by using the <code> <a>ListGroupResources</a> </code> operation. After the resource is successfully removed, it no longer appears in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UngroupResourcesOutput')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagOutputSchema = z
  .object({
    Arn: GroupArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the resource group from which tags have been removed.',
        }),
    ).exactOptional(),
    Keys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags that were removed.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UntagOutput')

const UpdateAccountSettingsOutputSchema = z
  .object({
    AccountSettings: AccountSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A structure that displays the status of the optional features in the account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAccountSettingsOutput')

const UpdateGroupOutputSchema = z
  .object({
    Group: GroupSchema.and(
      z.any().openapi({ description: 'The update description of the resource group.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGroupOutput')

const UpdateGroupQueryOutputSchema = z
  .object({
    GroupQuery: GroupQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The updated resource query associated with the resource group after the update.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateGroupQueryOutput')

const CreateGroupInputSchema = z
  .object({
    Name: GroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.",
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.',
        }),
    ).exactOptional(),
    ResourceQuery: ResourceQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource query that determines which Amazon Web Services resources are members of this group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>. </p> <note> <p>A resource group can contain either a <code>ResourceQuery</code> or a <code>Configuration</code>, but not both.</p> </note>',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({ description: 'The tags to add to the group. A tag is key-value pair string.' }),
    ).exactOptional(),
    Configuration: GroupConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements. For details about the syntax of service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateGroupInput' })
  .openapi('CreateGroupInput')

const GroupStringSchema = z
  .string()
  .regex(
    /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
  )
  .min(1)
  .max(1600)
  .openapi('GroupString')

const DeleteGroupInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "Deprecated - don't use this parameter. Use <code>Group</code> instead.This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group to delete.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteGroupInput', required: [] })
  .openapi('DeleteGroupInput')

const GetGroupConfigurationInputSchema = z
  .object({
    Group: GroupStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or the ARN of the resource group for which you want to retrive the service configuration.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetGroupConfigurationInput', required: [] })
  .openapi('GetGroupConfigurationInput')

const GetGroupInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "Deprecated - don't use this parameter. Use <code>Group</code> instead.This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetGroupInput', required: [] })
  .openapi('GetGroupInput')

const GetGroupQueryInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "Don't use this parameter. Use <code>Group</code> instead.This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group to query.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetGroupQueryInput', required: [] })
  .openapi('GetGroupQueryInput')

const GetTagsInputSchema = z.object({}).openapi({ title: 'GetTagsInput' }).openapi('GetTagsInput')

const GroupFilterListSchema = z.array(GroupFilterSchema).openapi('GroupFilterList')

const GroupResourcesInputSchema = z
  .object({
    Group: GroupStringSchema.and(
      z
        .any()
        .openapi({ description: 'The name or the ARN of the resource group to add resources to.' }),
    ),
    ResourceArns: ResourceArnListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of ARNs of the resources to be added to the group. ' }),
    ),
  })
  .openapi({ required: ['Group', 'ResourceArns'], title: 'GroupResourcesInput' })
  .openapi('GroupResourcesInput')

const ResourceFilterListSchema = z.array(ResourceFilterSchema).openapi('ResourceFilterList')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListGroupResourcesInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "<important> <p> <i> <b>Deprecated - don't use this parameter. Use the <code>Group</code> request field instead.</b> </i> </p> </important>This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group' }),
    ).exactOptional(),
    Filters: ResourceFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply to a <code>ListGroupResources</code> operation. Filters the results to include only those of the specified resource types.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format <code>AWS::ServiceCode::ResourceType</code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>. </p> </li> </ul> <p>When you specify a <code>resource-type</code> filter for <code>ListGroupResources</code>, Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a <code>ListGroupResources</code> request returns a <code>BadRequestException</code> error with a message similar to the following:</p> <p> <code>The resource types specified as filters in the request are not valid.</code> </p> <p>The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies <code>AWS::AllSupported</code>, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or Amazon CloudFront stack-based queries).</p>",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGroupResourcesInput', required: [] })
  .openapi('ListGroupResourcesInput')

const ListGroupsInputSchema = z
  .object({
    Filters: GroupFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to a <code>ListGroups</code> operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i> </code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.</p> </li> <li> <p> <code>configuration-type</code> - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:</p> <ul> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListGroupsInput', required: [] })
  .openapi('ListGroupsInput')

const PutGroupConfigurationInputSchema = z
  .object({
    Group: GroupStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or ARN of the resource group with the configuration that you want to update.',
        }),
    ).exactOptional(),
    Configuration: GroupConfigurationListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new configuration to associate with the specified group. A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p> <p>For information about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutGroupConfigurationInput', required: [] })
  .openapi('PutGroupConfigurationInput')

const SearchResourcesInputSchema = z
  .object({
    ResourceQuery: ResourceQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            'The search query, using the same formats that are supported for resource group definition. For more information, see <a>CreateGroup</a>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceQuery'], title: 'SearchResourcesInput' })
  .openapi('SearchResourcesInput')

const TagInputSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagInput' })
  .openapi('TagInput')

const UngroupResourcesInputSchema = z
  .object({
    Group: GroupStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or the ARN of the resource group from which to remove the resources.',
        }),
    ),
    ResourceArns: ResourceArnListSchema.and(
      z.any().openapi({ description: 'The ARNs of the resources to be removed from the group.' }),
    ),
  })
  .openapi({ required: ['Group', 'ResourceArns'], title: 'UngroupResourcesInput' })
  .openapi('UngroupResourcesInput')

const UntagInputSchema = z
  .object({
    Keys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({ required: ['Keys'], title: 'UntagInput' })
  .openapi('UntagInput')

const UpdateAccountSettingsInputSchema = z
  .object({
    GroupLifecycleEventsDesiredStatus: GroupLifecycleEventsDesiredStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAccountSettingsInput', required: [] })
  .openapi('UpdateAccountSettingsInput')

const UpdateGroupInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "Don't use this parameter. Use <code>Group</code> instead.This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group to modify.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGroupInput', required: [] })
  .openapi('UpdateGroupInput')

const UpdateGroupQueryInputSchema = z
  .object({
    GroupName: GroupNameSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            "Don't use this parameter. Use <code>Group</code> instead.This field is deprecated, use Group instead.",
        }),
    ).exactOptional(),
    Group: GroupStringSchema.and(
      z.any().openapi({ description: 'The name or the ARN of the resource group to query.' }),
    ).exactOptional(),
    ResourceQuery: ResourceQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource query to determine which Amazon Web Services resources are members of this resource group.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['ResourceQuery'], title: 'UpdateGroupQueryInput' })
  .openapi('UpdateGroupQueryInput')

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

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  description:
    '<p>Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i>. For more information about service-linked groups and service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:CreateGroup</code> </p> </li> </ul>',
  operationId: 'CreateGroup',
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
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .openapi({
                  description:
                    "The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.",
                }),
              Description: z
                .string()
                .regex(/[\sa-zA-Z0-9_\.-]*/)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.',
                }),
              ResourceQuery: z
                .object({
                  Type: QueryTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of the query to perform. This can have one of two values:</p> <ul> <li> <p> <i> <code>CLOUDFORMATION_STACK_1_0:</code> </i> Specifies that you want the group to contain the members of an CloudFormation stack. The <code>Query</code> contains a <code>StackIdentifier</code> element with an ARN for a CloudFormation stack.</p> </li> <li> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> Specifies that you want the group to include resource that have tags that match the query. </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Query: QuerySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The query that defines a group or a search. The contents depends on the value of the <code>Type</code> element.</p> <ul> <li> <p> <code>ResourceTypeFilters</code> – Applies to all <code>ResourceQuery</code> objects of either <code>Type</code>. This element contains one of the following two items:</p> <ul> <li> <p>The value <code>AWS::AllSupported</code>. This causes the ResourceQuery to match resources of any resource type that also match the query.</p> </li> <li> <p>A list (a JSON array) of resource type identifiers that limit the query to only resources of the specified types. For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>.</p> </li> </ul> <p>Example: <code>"ResourceTypeFilters": ["AWS::AllSupported"]</code> or <code>"ResourceTypeFilters": ["AWS::EC2::Instance", "AWS::S3::Bucket"]</code> </p> </li> <li> <p> <code>TagFilters</code> – applicable only if <code>Type</code> = <code>TAG_FILTERS_1_0</code>. The <code>Query</code> contains a JSON string that represents a collection of simple tag filters. The JSON string uses a syntax similar to the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> </code> operation, but uses only the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-ResourceTypeFilters"> ResourceTypeFilters</a> </code> and <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-TagFiltersTagFilters">TagFilters</a> </code> fields. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p> <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each:</p> <p> <code>[{"Stage":["Test","Deploy"]},{"Version":["1","2"]}]</code> </p> <p>The results of this resource query could include the following.</p> <ul> <li> <p>An Amazon EC2 instance that has the following two tags: <code>{"Stage":"Deploy"}</code>, and <code>{"Version":"2"}</code> </p> </li> <li> <p>An S3 bucket that has the following two tags: <code>{"Stage":"Test"}</code>, and <code>{"Version":"1"}</code> </p> </li> </ul> <p>The resource query results would <i>not</i> include the following items in the results, however. </p> <ul> <li> <p>An Amazon EC2 instance that has only the following tag: <code>{"Stage":"Deploy"}</code>.</p> <p>The instance does not have <b>all</b> of the tag keys specified in the filter, so it is excluded from the results.</p> </li> <li> <p>An RDS database that has the following two tags: <code>{"Stage":"Archived"}</code> and <code>{"Version":"4"}</code> </p> <p>The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.</p> </li> </ul> <p>Example: <code>"TagFilters": [ { "Key": "Stage", "Values": [ "Gamma", "Beta" ] }</code> </p> </li> <li> <p> <code>StackIdentifier</code> – applicable only if <code>Type</code> = <code>CLOUDFORMATION_STACK_1_0</code>. The value of this parameter is the Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included in the group.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query \'{"Type":"TAG_FILTERS_1_0","Query":"{\\"ResourceTypeFilters\\":[\\"AWS::AllSupported\\"],\\"TagFilters\\":[{\\"Key\\":\\"Stage\\",\\"Values\\":[\\"Test\\"]}]}"}\'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>',
                  required: [],
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .exactOptional()
                .openapi({
                  description: 'The tags to add to the group. A tag is key-value pair string.',
                }),
              Configuration: z
                .array(GroupConfigurationItemSchema)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements. For details about the syntax of service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGroupOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postDeleteGroupRoute = createRoute({
  method: 'post',
  path: '/delete-group',
  description:
    '<p>Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:DeleteGroup</code> </p> </li> </ul>',
  operationId: 'DeleteGroup',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    "Deprecated - don't use this parameter. Use <code>Group</code> instead.",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group to delete.' }),
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
      content: { 'application/json': { schema: DeleteGroupOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGetAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/get-account-settings',
  description: 'Retrieves the current status of optional features in Resource Groups.',
  operationId: 'GetAccountSettings',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountSettingsOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGetGroupRoute = createRoute({
  method: 'post',
  path: '/get-group',
  description:
    '<p>Returns information about a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroup</code> </p> </li> </ul>',
  operationId: 'GetGroup',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    "Deprecated - don't use this parameter. Use <code>Group</code> instead.",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group to retrieve.' }),
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
      content: { 'application/json': { schema: GetGroupOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGetGroupConfigurationRoute = createRoute({
  method: 'post',
  path: '/get-group-configuration',
  description:
    '<p>Retrieves the service configuration associated with the specified resource group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupConfiguration</code> </p> </li> </ul>',
  operationId: 'GetGroupConfiguration',
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
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({
                  description:
                    'The name or the ARN of the resource group for which you want to retrive the service configuration.',
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
      content: { 'application/json': { schema: GetGroupConfigurationOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGetGroupQueryRoute = createRoute({
  method: 'post',
  path: '/get-group-query',
  description:
    '<p>Retrieves the resource query associated with the specified resource group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupQuery</code> </p> </li> </ul>',
  operationId: 'GetGroupQuery',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description: "Don't use this parameter. Use <code>Group</code> instead.",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group to query.' }),
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
      content: { 'application/json': { schema: GetGroupQueryOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getResourcesArnTagsRoute = createRoute({
  method: 'get',
  path: '/resources/{Arn}/tags',
  description:
    '<p>Returns a list of tags that are associated with a resource group, specified by an ARN.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetTags</code> </p> </li> </ul>',
  operationId: 'GetTags',
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
      Arn: z
        .string()
        .regex(
          /arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/[a-zA-Z0-9_\.-]{1,300}/,
        )
        .min(12)
        .max(1600)
        .openapi({
          param: {
            name: 'Arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource group whose tags you want to retrieve.',
            schema: {
              type: 'string',
              pattern:
                'arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\\d{1}:[0-9]{12}:group/[a-zA-Z0-9_\\.-]{1,300}',
              minLength: 12,
              maxLength: 1600,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTagsOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putResourcesArnTagsRoute = createRoute({
  method: 'put',
  path: '/resources/{Arn}/tags',
  description:
    '<p>Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.</p> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Tag</code> </p> </li> </ul>',
  operationId: 'Tag',
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
      Arn: z
        .string()
        .regex(
          /arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/[a-zA-Z0-9_\.-]{1,300}/,
        )
        .min(12)
        .max(1600)
        .openapi({
          param: {
            name: 'Arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource group to which to add tags.',
            schema: {
              type: 'string',
              pattern:
                'arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\\d{1}:[0-9]{12}:group/[a-zA-Z0-9_\\.-]{1,300}',
              minLength: 12,
              maxLength: 1600,
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
                .openapi({
                  description:
                    'The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.',
                }),
            })
            .openapi({ required: ['Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TagOutputSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const patchResourcesArnTagsRoute = createRoute({
  method: 'patch',
  path: '/resources/{Arn}/tags',
  description:
    '<p>Deletes tags from a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Untag</code> </p> </li> </ul>',
  operationId: 'Untag',
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
      Arn: z
        .string()
        .regex(
          /arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/[a-zA-Z0-9_\.-]{1,300}/,
        )
        .min(12)
        .max(1600)
        .openapi({
          param: {
            name: 'Arn',
            in: 'path',
            required: true,
            description:
              'The ARN of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.',
            schema: {
              type: 'string',
              pattern:
                'arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\\d{1}:[0-9]{12}:group/[a-zA-Z0-9_\\.-]{1,300}',
              minLength: 12,
              maxLength: 1600,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Keys: z
                .array(TagKeySchema)
                .openapi({ description: 'The keys of the tags to be removed.' }),
            })
            .openapi({ required: ['Keys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UntagOutputSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGroupResourcesRoute = createRoute({
  method: 'post',
  path: '/group-resources',
  description:
    "<p>Adds the specified resources to the specified group.</p> <important> <p>You can use this operation with only resource groups that are configured with the following types:</p> <ul> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> </ul> <p>Other resource group type and resource types aren't currently supported by this operation.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GroupResources</code> </p> </li> </ul>",
  operationId: 'GroupResources',
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
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .openapi({
                  description: 'The name or the ARN of the resource group to add resources to.',
                }),
              ResourceArns: z
                .array(ResourceArnSchema)
                .min(1)
                .max(10)
                .openapi({
                  description: 'The list of ARNs of the resources to be added to the group. ',
                }),
            })
            .openapi({ required: ['Group', 'ResourceArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResourcesOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postListGroupResourcesRoute = createRoute({
  method: 'post',
  path: '/list-group-resources',
  description:
    '<p>Returns a list of ARNs of the resources that are members of a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroupResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>',
  operationId: 'ListGroupResources',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description:
                    "<important> <p> <i> <b>Deprecated - don't use this parameter. Use the <code>Group</code> request field instead.</b> </i> </p> </important>",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group' }),
              Filters: z
                .array(ResourceFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply to a <code>ListGroupResources</code> operation. Filters the results to include only those of the specified resource types.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format <code>AWS::ServiceCode::ResourceType</code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>. </p> </li> </ul> <p>When you specify a <code>resource-type</code> filter for <code>ListGroupResources</code>, Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a <code>ListGroupResources</code> request returns a <code>BadRequestException</code> error with a message similar to the following:</p> <p> <code>The resource types specified as filters in the request are not valid.</code> </p> <p>The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies <code>AWS::AllSupported</code>, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or Amazon CloudFront stack-based queries).</p>",
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/]*={0,2}$/)
                .min(0)
                .max(8192)
                .exactOptional()
                .openapi({
                  description:
                    "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.",
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
      content: { 'application/json': { schema: ListGroupResourcesOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postGroupsListRoute = createRoute({
  method: 'post',
  path: '/groups-list',
  description:
    '<p>Returns a list of existing Resource Groups in your account.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroups</code> </p> </li> </ul>',
  operationId: 'ListGroups',
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[a-zA-Z0-9+\/]*={0,2}$/)
        .min(0)
        .max(8192)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.",
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9+/]*={0,2}$',
              minLength: 0,
              maxLength: 8192,
            },
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Filters: z
                .array(GroupFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to a <code>ListGroups</code> operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i> </code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.</p> </li> <li> <p> <code>configuration-type</code> - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:</p> <ul> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> </ul> </li> </ul>',
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
      content: { 'application/json': { schema: ListGroupsOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postPutGroupConfigurationRoute = createRoute({
  method: 'post',
  path: '/put-group-configuration',
  description:
    '<p>Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use <a>GetGroupConfiguration</a> to check the status of the update.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:PutGroupConfiguration</code> </p> </li> </ul>',
  operationId: 'PutGroupConfiguration',
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
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({
                  description:
                    'The name or ARN of the resource group with the configuration that you want to update.',
                }),
              Configuration: z
                .array(GroupConfigurationItemSchema)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The new configuration to associate with the specified group. A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p> <p>For information about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: PutGroupConfigurationOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postResourcesSearchRoute = createRoute({
  method: 'post',
  path: '/resources/search',
  description:
    '<p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The query uses the same format as a resource query in a <a>CreateGroup</a> or <a>UpdateGroupQuery</a> operation.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:SearchResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>',
  operationId: 'SearchResources',
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
              ResourceQuery: z
                .object({
                  Type: QueryTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of the query to perform. This can have one of two values:</p> <ul> <li> <p> <i> <code>CLOUDFORMATION_STACK_1_0:</code> </i> Specifies that you want the group to contain the members of an CloudFormation stack. The <code>Query</code> contains a <code>StackIdentifier</code> element with an ARN for a CloudFormation stack.</p> </li> <li> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> Specifies that you want the group to include resource that have tags that match the query. </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Query: QuerySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The query that defines a group or a search. The contents depends on the value of the <code>Type</code> element.</p> <ul> <li> <p> <code>ResourceTypeFilters</code> – Applies to all <code>ResourceQuery</code> objects of either <code>Type</code>. This element contains one of the following two items:</p> <ul> <li> <p>The value <code>AWS::AllSupported</code>. This causes the ResourceQuery to match resources of any resource type that also match the query.</p> </li> <li> <p>A list (a JSON array) of resource type identifiers that limit the query to only resources of the specified types. For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>.</p> </li> </ul> <p>Example: <code>"ResourceTypeFilters": ["AWS::AllSupported"]</code> or <code>"ResourceTypeFilters": ["AWS::EC2::Instance", "AWS::S3::Bucket"]</code> </p> </li> <li> <p> <code>TagFilters</code> – applicable only if <code>Type</code> = <code>TAG_FILTERS_1_0</code>. The <code>Query</code> contains a JSON string that represents a collection of simple tag filters. The JSON string uses a syntax similar to the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> </code> operation, but uses only the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-ResourceTypeFilters"> ResourceTypeFilters</a> </code> and <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-TagFiltersTagFilters">TagFilters</a> </code> fields. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p> <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each:</p> <p> <code>[{"Stage":["Test","Deploy"]},{"Version":["1","2"]}]</code> </p> <p>The results of this resource query could include the following.</p> <ul> <li> <p>An Amazon EC2 instance that has the following two tags: <code>{"Stage":"Deploy"}</code>, and <code>{"Version":"2"}</code> </p> </li> <li> <p>An S3 bucket that has the following two tags: <code>{"Stage":"Test"}</code>, and <code>{"Version":"1"}</code> </p> </li> </ul> <p>The resource query results would <i>not</i> include the following items in the results, however. </p> <ul> <li> <p>An Amazon EC2 instance that has only the following tag: <code>{"Stage":"Deploy"}</code>.</p> <p>The instance does not have <b>all</b> of the tag keys specified in the filter, so it is excluded from the results.</p> </li> <li> <p>An RDS database that has the following two tags: <code>{"Stage":"Archived"}</code> and <code>{"Version":"4"}</code> </p> <p>The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.</p> </li> </ul> <p>Example: <code>"TagFilters": [ { "Key": "Stage", "Values": [ "Gamma", "Beta" ] }</code> </p> </li> <li> <p> <code>StackIdentifier</code> – applicable only if <code>Type</code> = <code>CLOUDFORMATION_STACK_1_0</code>. The value of this parameter is the Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included in the group.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query \'{"Type":"TAG_FILTERS_1_0","Query":"{\\"ResourceTypeFilters\\":[\\"AWS::AllSupported\\"],\\"TagFilters\\":[{\\"Key\\":\\"Stage\\",\\"Values\\":[\\"Test\\"]}]}"}\'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.',
                }),
              NextToken: z
                .string()
                .regex(/^[a-zA-Z0-9+\/]*={0,2}$/)
                .min(0)
                .max(8192)
                .exactOptional()
                .openapi({
                  description:
                    "The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.",
                }),
            })
            .openapi({ required: ['ResourceQuery'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResourcesOutputSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postUngroupResourcesRoute = createRoute({
  method: 'post',
  path: '/ungroup-resources',
  description:
    "<p>Removes the specified resources from the specified group. This operation works only with static groups that you populated using the <a>GroupResources</a> operation. It doesn't work with any resource groups that are automatically populated by tag-based or CloudFormation stack-based queries.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UngroupResources</code> </p> </li> </ul>",
  operationId: 'UngroupResources',
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
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    'The name or the ARN of the resource group from which to remove the resources.',
                }),
              ResourceArns: z
                .array(ResourceArnSchema)
                .min(1)
                .max(10)
                .openapi({
                  description: 'The ARNs of the resources to be removed from the group.',
                }),
            })
            .openapi({ required: ['Group', 'ResourceArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UngroupResourcesOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postUpdateAccountSettingsRoute = createRoute({
  method: 'post',
  path: '/update-account-settings',
  description:
    '<p>Turns on or turns off optional features in Resource Groups.</p> <p>The preceding example shows that the request to turn on group lifecycle events is <code>IN_PROGRESS</code>. You can call the <a>GetAccountSettings</a> operation to check for completion by looking for <code>GroupLifecycleEventsStatus</code> to change to <code>ACTIVE</code>.</p>',
  operationId: 'UpdateAccountSettings',
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
              GroupLifecycleEventsDesiredStatus: z
                .enum(['ACTIVE', 'INACTIVE'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off.',
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
      content: { 'application/json': { schema: UpdateAccountSettingsOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postUpdateGroupRoute = createRoute({
  method: 'post',
  path: '/update-group',
  description:
    '<p>Updates the description for an existing group. You cannot update the name of a resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroup</code> </p> </li> </ul>',
  operationId: 'UpdateGroup',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description: "Don't use this parameter. Use <code>Group</code> instead.",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group to modify.' }),
              Description: z
                .string()
                .regex(/[\sa-zA-Z0-9_\.-]*/)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    'The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.',
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
      content: { 'application/json': { schema: UpdateGroupOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const postUpdateGroupQueryRoute = createRoute({
  method: 'post',
  path: '/update-group-query',
  description:
    '<p>Updates the resource query of a group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroupQuery</code> </p> </li> </ul>',
  operationId: 'UpdateGroupQuery',
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
              GroupName: z
                .string()
                .regex(/[a-zA-Z0-9_\.-]+/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({
                  description: "Don't use this parameter. Use <code>Group</code> instead.",
                }),
              Group: z
                .string()
                .regex(
                  /(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group\/)?[a-zA-Z0-9_\.-]{1,300}/,
                )
                .min(1)
                .max(1600)
                .exactOptional()
                .openapi({ description: 'The name or the ARN of the resource group to query.' }),
              ResourceQuery: z
                .object({
                  Type: QueryTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The type of the query to perform. This can have one of two values:</p> <ul> <li> <p> <i> <code>CLOUDFORMATION_STACK_1_0:</code> </i> Specifies that you want the group to contain the members of an CloudFormation stack. The <code>Query</code> contains a <code>StackIdentifier</code> element with an ARN for a CloudFormation stack.</p> </li> <li> <p> <i> <code>TAG_FILTERS_1_0:</code> </i> Specifies that you want the group to include resource that have tags that match the query. </p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  Query: QuerySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The query that defines a group or a search. The contents depends on the value of the <code>Type</code> element.</p> <ul> <li> <p> <code>ResourceTypeFilters</code> – Applies to all <code>ResourceQuery</code> objects of either <code>Type</code>. This element contains one of the following two items:</p> <ul> <li> <p>The value <code>AWS::AllSupported</code>. This causes the ResourceQuery to match resources of any resource type that also match the query.</p> </li> <li> <p>A list (a JSON array) of resource type identifiers that limit the query to only resources of the specified types. For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>.</p> </li> </ul> <p>Example: <code>"ResourceTypeFilters": ["AWS::AllSupported"]</code> or <code>"ResourceTypeFilters": ["AWS::EC2::Instance", "AWS::S3::Bucket"]</code> </p> </li> <li> <p> <code>TagFilters</code> – applicable only if <code>Type</code> = <code>TAG_FILTERS_1_0</code>. The <code>Query</code> contains a JSON string that represents a collection of simple tag filters. The JSON string uses a syntax similar to the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> </code> operation, but uses only the <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-ResourceTypeFilters"> ResourceTypeFilters</a> </code> and <code> <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html#resourcegrouptagging-GetResources-request-TagFiltersTagFilters">TagFilters</a> </code> fields. If you specify more than one tag key, only resources that match all tag keys, and at least one value of each specified tag key, are returned in your query. If you specify more than one value for a tag key, a resource matches the filter if it has a tag key value that matches <i>any</i> of the specified values.</p> <p>For example, consider the following sample query for resources that have two tags, <code>Stage</code> and <code>Version</code>, with two values each:</p> <p> <code>[{"Stage":["Test","Deploy"]},{"Version":["1","2"]}]</code> </p> <p>The results of this resource query could include the following.</p> <ul> <li> <p>An Amazon EC2 instance that has the following two tags: <code>{"Stage":"Deploy"}</code>, and <code>{"Version":"2"}</code> </p> </li> <li> <p>An S3 bucket that has the following two tags: <code>{"Stage":"Test"}</code>, and <code>{"Version":"1"}</code> </p> </li> </ul> <p>The resource query results would <i>not</i> include the following items in the results, however. </p> <ul> <li> <p>An Amazon EC2 instance that has only the following tag: <code>{"Stage":"Deploy"}</code>.</p> <p>The instance does not have <b>all</b> of the tag keys specified in the filter, so it is excluded from the results.</p> </li> <li> <p>An RDS database that has the following two tags: <code>{"Stage":"Archived"}</code> and <code>{"Version":"4"}</code> </p> <p>The database has all of the tag keys, but none of those keys has an associated value that matches at least one of the specified values in the filter.</p> </li> </ul> <p>Example: <code>"TagFilters": [ { "Key": "Stage", "Values": [ "Gamma", "Beta" ] }</code> </p> </li> <li> <p> <code>StackIdentifier</code> – applicable only if <code>Type</code> = <code>CLOUDFORMATION_STACK_1_0</code>. The value of this parameter is the Amazon Resource Name (ARN) of the CloudFormation stack whose resources you want included in the group.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query \'{"Type":"TAG_FILTERS_1_0","Query":"{\\"ResourceTypeFilters\\":[\\"AWS::AllSupported\\"],\\"TagFilters\\":[{\\"Key\\":\\"Stage\\",\\"Values\\":[\\"Test\\"]}]}"}\'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>',
                  required: [],
                }),
            })
            .openapi({ required: ['ResourceQuery'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGroupQueryOutputSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'MethodNotAllowedException',
      content: { 'application/json': { schema: MethodNotAllowedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})
