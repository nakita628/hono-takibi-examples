import { createRoute, z } from '@hono/zod-openapi'

const ResourceIdSchema = z
  .string()
  .regex(/^[\w\-]+$/)
  .min(1)
  .max(255)
  .openapi('ResourceId')

const ARNSchema = z
  .string()
  .regex(/^[a-zA-Z0-9:*\/-]+$/)
  .min(1)
  .max(2048)
  .openapi('ARN')

const CancelChangeSetResponseSchema = z
  .object({
    ChangeSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the change set referenced in this request.',
        }),
    ).exactOptional(),
    ChangeSetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN associated with the change set referenced in this request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CancelChangeSetResponse')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const DeleteResourcePolicyResponseSchema = z.object({}).openapi('DeleteResourcePolicyResponse')

const ChangeSetNameSchema = z
  .string()
  .regex(/^[\w\s+=.:@-]+$/)
  .min(1)
  .max(100)
  .openapi('ChangeSetName')

const DateTimeISO8601Schema = z
  .string()
  .regex(
    /^([\d]{4})\-(1[0-2]|0[1-9])\-(3[01]|0[1-9]|[12][\d])T(2[0-3]|[01][\d]):([0-5][\d]):([0-5][\d])Z$/,
  )
  .length(20)
  .openapi('DateTimeISO8601')

const ChangeStatusSchema = z
  .enum(['PREPARING', 'APPLYING', 'SUCCEEDED', 'CANCELLED', 'FAILED'])
  .openapi('ChangeStatus')

const FailureCodeSchema = z.enum(['CLIENT_ERROR', 'SERVER_FAULT']).openapi('FailureCode')

const ExceptionMessageContentSchema = z
  .string()
  .regex(/^(.)+$/)
  .min(1)
  .max(2048)
  .openapi('ExceptionMessageContent')

const ChangeTypeSchema = z
  .string()
  .regex(/^[A-Z][\w]*$/)
  .min(1)
  .max(255)
  .openapi('ChangeType')

const EntityTypeSchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(255)
  .openapi('EntityType')

const IdentifierSchema = z
  .string()
  .regex(/^[\w\-@]+$/)
  .min(1)
  .max(255)
  .openapi('Identifier')

const EntitySchema = z
  .object({
    Type: EntityTypeSchema.and(z.any().openapi({ description: 'The type of entity.' })),
    Identifier: IdentifierSchema.and(
      z.any().openapi({ description: 'The identifier for the entity.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      'An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. ',
  })
  .openapi('Entity')

const JsonSchema = z
  .string()
  .regex(/^[\s]*\{[\s\S]*\}[\s]*$/)
  .min(2)
  .max(16384)
  .openapi('Json')

const ErrorCodeStringSchema = z
  .string()
  .regex(/^[a-zA-Z_]+$/)
  .min(1)
  .max(72)
  .openapi('ErrorCodeString')

const ErrorDetailSchema = z
  .object({
    ErrorCode: ErrorCodeStringSchema.and(
      z.any().openapi({ description: 'The error code that identifies the type of error.' }),
    ).exactOptional(),
    ErrorMessage: ExceptionMessageContentSchema.and(
      z.any().openapi({ description: 'The message for the error.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the error.', required: [] })
  .openapi('ErrorDetail')

const ErrorDetailListSchema = z.array(ErrorDetailSchema).openapi('ErrorDetailList')

const ChangeNameSchema = z
  .string()
  .regex(/^[a-zA-Z]$/)
  .min(1)
  .max(72)
  .openapi('ChangeName')

const ChangeSummarySchema = z
  .object({
    ChangeType: ChangeTypeSchema.and(
      z.any().openapi({ description: 'The type of the change.' }),
    ).exactOptional(),
    Entity: EntitySchema.and(
      z.any().openapi({ description: 'The entity to be changed.' }),
    ).exactOptional(),
    Details: JsonSchema.and(
      z
        .any()
        .openapi({
          description:
            'This object contains details specific to the change type of the requested change.',
        }),
    ).exactOptional(),
    ErrorDetailList: ErrorDetailListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>ErrorDetail</code> objects associated with the change.',
        }),
    ).exactOptional(),
    ChangeName: ChangeNameSchema.and(
      z.any().openapi({ description: 'Optional name for the change.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.",
    required: [],
  })
  .openapi('ChangeSummary')

const ChangeSetDescriptionSchema = z.array(ChangeSummarySchema).openapi('ChangeSetDescription')

const DescribeChangeSetResponseSchema = z
  .object({
    ChangeSetId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. The unique identifier for the change set referenced in this request.',
        }),
    ).exactOptional(),
    ChangeSetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN associated with the unique identifier for the change set referenced in this request.',
        }),
    ).exactOptional(),
    ChangeSetName: ChangeSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional name provided in the <code>StartChangeSet</code> request. If you do not provide a name, one is set by default.',
        }),
    ).exactOptional(),
    StartTime: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started. ',
        }),
    ).exactOptional(),
    EndTime: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned to a terminal state. The change cannot transition to a different state. Null if the request is not in a terminal state. ',
        }),
    ).exactOptional(),
    Status: ChangeStatusSchema.and(
      z.any().openapi({ description: 'The status of the change request.' }),
    ).exactOptional(),
    FailureCode: FailureCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned if the change set is in <code>FAILED</code> status. Can be either <code>CLIENT_ERROR</code>, which means that there are issues with the request (see the <code>ErrorDetailList</code>), or <code>SERVER_FAULT</code>, which means that there is a problem in the system, and you should retry your request.',
        }),
    ).exactOptional(),
    FailureDescription: ExceptionMessageContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned if there is a failure on the change set, but that failure is not related to any of the changes in the request.',
        }),
    ).exactOptional(),
    ChangeSet: ChangeSetDescriptionSchema.and(
      z.any().openapi({ description: 'An array of <code>ChangeSummary</code> objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeChangeSetResponse')

const DescribeEntityResponseSchema = z
  .object({
    EntityType: EntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The named type of the entity, in the format of <code>EntityType@Version</code>.',
        }),
    ).exactOptional(),
    EntityIdentifier: IdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the entity, in the format of <code>EntityId@RevisionId</code>.',
        }),
    ).exactOptional(),
    EntityArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN associated to the unique identifier for the entity referenced in this request.',
        }),
    ).exactOptional(),
    LastModifiedDate: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The last modified date of the entity, in ISO 8601 format (2018-02-27T13:45:22Z).',
        }),
    ).exactOptional(),
    Details: JsonSchema.and(
      z
        .any()
        .openapi({
          description: 'This stringified JSON object includes the details of the entity.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntityResponse')

const ResourceNotSupportedExceptionSchema = z.any().openapi('ResourceNotSupportedException')

const ResourcePolicyJsonSchema = z
  .string()
  .regex(/^[\u0009\u000A\u000D\u0020-\u00FF]+$/)
  .min(1)
  .max(10240)
  .openapi('ResourcePolicyJson')

const GetResourcePolicyResponseSchema = z
  .object({
    Policy: ResourcePolicyJsonSchema.and(
      z.any().openapi({ description: 'The policy document to set; formatted in JSON.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcePolicyResponse')

const ResourceIdListSchema = z.array(ResourceIdSchema).openapi('ResourceIdList')

const ChangeSetSummaryListItemSchema = z
  .object({
    ChangeSetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a change set.' }),
    ).exactOptional(),
    ChangeSetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN associated with the unique identifier for the change set referenced in this request.',
        }),
    ).exactOptional(),
    ChangeSetName: ChangeSetNameSchema.and(
      z.any().openapi({ description: 'The non-unique name for the change set.' }),
    ).exactOptional(),
    StartTime: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was started.',
        }),
    ).exactOptional(),
    EndTime: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was finished.',
        }),
    ).exactOptional(),
    Status: ChangeStatusSchema.and(
      z.any().openapi({ description: 'The current status of the change set.' }),
    ).exactOptional(),
    EntityIdList: ResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This object is a list of entity IDs (string) that are a part of a change set. The entity ID list is a maximum of 20 entities. It must contain at least one entity.',
        }),
    ).exactOptional(),
    FailureCode: FailureCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned if the change set is in <code>FAILED</code> status. Can be either <code>CLIENT_ERROR</code>, which means that there are issues with the request (see the <code>ErrorDetailList</code> of <code>DescribeChangeSet</code>), or <code>SERVER_FAULT</code>, which means that there is a problem in the system, and you should retry your request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.',
    required: [],
  })
  .openapi('ChangeSetSummaryListItem')

const ChangeSetSummaryListSchema = z
  .array(ChangeSetSummaryListItemSchema)
  .openapi('ChangeSetSummaryList')

const NextTokenSchema = z
  .string()
  .regex(/^[\w+=.:@\-\/]$/)
  .min(1)
  .max(2048)
  .openapi('NextToken')

const ListChangeSetsResponseSchema = z
  .object({
    ChangeSetSummaryList: ChangeSetSummaryListSchema.and(
      z.any().openapi({ description: ' Array of <code>ChangeSetSummaryListItem</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the next token, if it exists. Null if there are no more results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListChangeSetsResponse')

const FilterNameSchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(255)
  .openapi('FilterName')

const FilterValueContentSchema = z
  .string()
  .regex(/^(.)+$/)
  .min(1)
  .max(255)
  .openapi('FilterValueContent')

const ValueListSchema = z.array(FilterValueContentSchema).min(1).max(10).openapi('ValueList')

const FilterSchema = z
  .object({
    Name: FilterNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For <code>ListEntities</code>, the supported value for this is an <code>EntityId</code>.</p> <p>For <code>ListChangeSets</code>, the supported values are as follows:</p>',
        }),
    ).exactOptional(),
    ValueList: ValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>ListEntities</code> - This is a list of unique <code>EntityId</code>s.</p> <p> <code>ListChangeSets</code> - The supported filter names and associated <code>ValueList</code>s is as follows:</p> <ul> <li> <p> <code>ChangeSetName</code> - The supported <code>ValueList</code> is a list of non-unique <code>ChangeSetName</code>s. These are defined when you call the <code>StartChangeSet</code> action.</p> </li> <li> <p> <code>Status</code> - The supported <code>ValueList</code> is a list of statuses for all change set requests.</p> </li> <li> <p> <code>EntityId</code> - The supported <code>ValueList</code> is a list of unique <code>EntityId</code>s.</p> </li> <li> <p> <code>BeforeStartTime</code> - The supported <code>ValueList</code> is a list of all change sets that started before the filter value.</p> </li> <li> <p> <code>AfterStartTime</code> - The supported <code>ValueList</code> is a list of all change sets that started after the filter value.</p> </li> <li> <p> <code>BeforeEndTime</code> - The supported <code>ValueList</code> is a list of all change sets that ended before the filter value.</p> </li> <li> <p> <code>AfterEndTime</code> - The supported <code>ValueList</code> is a list of all change sets that ended after the filter value.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions.',
    required: [],
  })
  .openapi('Filter')

const SortBySchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(255)
  .openapi('SortBy')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const EntityNameStringSchema = z
  .string()
  .regex(/^\\S+[\\S\\s]*/)
  .min(1)
  .max(255)
  .openapi('EntityNameString')

const VisibilityValueSchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(64)
  .openapi('VisibilityValue')

const EntitySummarySchema = z
  .object({
    Name: EntityNameStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the entity. This value is not unique. It is defined by the seller.',
        }),
    ).exactOptional(),
    EntityType: EntityTypeSchema.and(
      z.any().openapi({ description: 'The type of the entity.' }),
    ).exactOptional(),
    EntityId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the entity.' }),
    ).exactOptional(),
    EntityArn: ARNSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN associated with the unique identifier for the entity.' }),
    ).exactOptional(),
    LastModifiedDate: DateTimeISO8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The last time the entity was published, using ISO 8601 format (2018-02-27T13:45:22Z).',
        }),
    ).exactOptional(),
    Visibility: VisibilityValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The visibility status of the entity to buyers. This value can be <code>Public</code> (everyone can view the entity), <code>Limited</code> (the entity is visible to limited accounts only), or <code>Restricted</code> (the entity was published and then unpublished and only existing buyers can view it). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.",
    required: [],
  })
  .openapi('EntitySummary')

const EntitySummaryListSchema = z.array(EntitySummarySchema).openapi('EntitySummaryList')

const ListEntitiesResponseSchema = z
  .object({
    EntitySummaryList: EntitySummaryListSchema.and(
      z.any().openapi({ description: ' Array of <code>EntitySummary</code> object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the next token if it exists. Null if there is no more result.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntitiesResponse')

const ResourceARNSchema = z
  .string()
  .regex(/^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/)
  .min(1)
  .max(255)
  .openapi('ResourceARN')

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
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key associated with the tag.' })),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value associated with the tag.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A list of objects specifying each key name and value.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(200).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    ResourceArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description: 'Required. The ARN associated with the resource you want to list tags on.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutResourcePolicyResponseSchema = z.object({}).openapi('PutResourcePolicyResponse')

const StartChangeSetResponseSchema = z
  .object({
    ChangeSetId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Unique identifier generated for the request.' }),
    ).exactOptional(),
    ChangeSetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN associated to the unique identifier generated for the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartChangeSetResponse')

const ChangeSchema = z
  .object({
    ChangeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Change types are single string values that describe your intention for the change. Each change type is unique for each <code>EntityType</code> provided in the change\'s scope. For more information on change types available for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.',
        }),
    ),
    Entity: EntitySchema.and(z.any().openapi({ description: 'The entity to be changed.' })),
    EntityTags: TagListSchema.and(
      z.any().openapi({ description: 'The tags associated with the change.' }),
    ).exactOptional(),
    Details: JsonSchema.and(
      z
        .any()
        .openapi({
          description:
            'This object contains details specific to the change type of the requested change. For more information on change types available for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.',
        }),
    ),
    ChangeName: ChangeNameSchema.and(
      z.any().openapi({ description: 'Optional name for the change.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ChangeType', 'Entity', 'Details'],
    description:
      'An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.',
  })
  .openapi('Change')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const CatalogSchema = z
  .string()
  .regex(/^[a-zA-Z]+$/)
  .min(1)
  .max(64)
  .openapi('Catalog')

const CancelChangeSetRequestSchema = z
  .object({})
  .openapi({ title: 'CancelChangeSetRequest' })
  .openapi('CancelChangeSetRequest')

const ClientRequestTokenSchema = z
  .string()
  .regex(/^[!-~]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestToken')

const DeleteResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourcePolicyRequest' })
  .openapi('DeleteResourcePolicyRequest')

const DescribeChangeSetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeChangeSetRequest' })
  .openapi('DescribeChangeSetRequest')

const DescribeEntityRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEntityRequest' })
  .openapi('DescribeEntityRequest')

const FilterListSchema = z.array(FilterSchema).min(1).max(8).openapi('FilterList')

const GetResourcePolicyRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourcePolicyRequest' })
  .openapi('GetResourcePolicyRequest')

const ListChangeSetsMaxResultIntegerSchema = z
  .int()
  .min(1)
  .max(20)
  .openapi('ListChangeSetsMaxResultInteger')

const SortSchema = z
  .object({
    SortBy: SortBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For <code>ListEntities</code>, supported attributes include <code>LastModifiedDate</code> (default), <code>Visibility</code>, <code>EntityId</code>, and <code>Name</code>.</p> <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code> and <code>EndTime</code>.</p>',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.',
    required: [],
  })
  .openapi('Sort')

const ListChangeSetsRequestSchema = z
  .object({
    Catalog: CatalogSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
        }),
    ),
    FilterList: FilterListSchema.and(
      z.any().openapi({ description: 'An array of filter objects.' }),
    ).exactOptional(),
    Sort: SortSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.',
        }),
    ).exactOptional(),
    MaxResults: ListChangeSetsMaxResultIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Catalog'], title: 'ListChangeSetsRequest' })
  .openapi('ListChangeSetsRequest')

const ListEntitiesMaxResultIntegerSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListEntitiesMaxResultInteger')

const OwnershipTypeSchema = z.enum(['SELF', 'SHARED']).openapi('OwnershipType')

const ListEntitiesRequestSchema = z
  .object({
    Catalog: CatalogSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
        }),
    ),
    EntityType: EntityTypeSchema.and(
      z.any().openapi({ description: 'The type of entities to retrieve.' }),
    ),
    FilterList: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.',
        }),
    ).exactOptional(),
    Sort: SortSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the next token, if it exists. Null if there are no more results.',
        }),
    ).exactOptional(),
    MaxResults: ListEntitiesMaxResultIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.",
        }),
    ).exactOptional(),
    OwnershipType: OwnershipTypeSchema.exactOptional(),
  })
  .openapi({ required: ['Catalog', 'EntityType'], title: 'ListEntitiesRequest' })
  .openapi('ListEntitiesRequest')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutResourcePolicyRequestSchema = z
  .object({
    ResourceArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Entity resource you want to associate with a resource policy. ',
        }),
    ),
    Policy: ResourcePolicyJsonSchema.and(
      z.any().openapi({ description: 'The policy document to set; formatted in JSON.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Policy'], title: 'PutResourcePolicyRequest' })
  .openapi('PutResourcePolicyRequest')

const RequestedChangeListSchema = z
  .array(ChangeSchema)
  .min(1)
  .max(20)
  .openapi('RequestedChangeList')

const StartChangeSetRequestSchema = z
  .object({
    Catalog: CatalogSchema.and(
      z
        .any()
        .openapi({
          description:
            'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
        }),
    ),
    ChangeSet: RequestedChangeListSchema.and(
      z.any().openapi({ description: 'Array of <code>change</code> object.' }),
    ),
    ChangeSetName: ChangeSetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets. ',
        }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({ description: 'A unique token to identify the request to ensure idempotency.' }),
    ).exactOptional(),
    ChangeSetTags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of objects specifying each key name and value for the <code>ChangeSetTags</code> property.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Catalog', 'ChangeSet'], title: 'StartChangeSetRequest' })
  .openapi('StartChangeSetRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
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

export const patchCancelChangeSetCatalogChangeSetIdRoute = createRoute({
  method: 'patch',
  path: '/CancelChangeSet#catalog&changeSetId',
  description:
    'Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.',
  operationId: 'CancelChangeSet',
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
      catalog: z
        .string()
        .regex(/^[a-zA-Z]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'catalog',
            in: 'query',
            required: true,
            description:
              'Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code>.',
            schema: { type: 'string', pattern: '^[a-zA-Z]+$', minLength: 1, maxLength: 64 },
          },
        }),
      changeSetId: z
        .string()
        .regex(/^[\w\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'changeSetId',
            in: 'query',
            required: true,
            description:
              'Required. The unique identifier of the <code>StartChangeSet</code> request that you want to cancel.',
            schema: { type: 'string', pattern: '^[\\w\\-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelChangeSetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDeleteResourcePolicyResourceArnRoute = createRoute({
  method: 'delete',
  path: '/DeleteResourcePolicy#resourceArn',
  description:
    'Deletes a resource-based policy on an Entity that is identified by its resource ARN.',
  operationId: 'DeleteResourcePolicy',
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
      resourceArn: z
        .string()
        .regex(
          /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
        )
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.',
            schema: {
              type: 'string',
              pattern:
                '^arn:[\\w+=/,.@-]+:aws-marketplace:[\\w+=/,.@-]*:[0-9]+:[\\w+=,.@-]+(/[\\w+=,.@-]+)*$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDescribeChangeSetCatalogChangeSetIdRoute = createRoute({
  method: 'get',
  path: '/DescribeChangeSet#catalog&changeSetId',
  description: 'Provides information about a given change set.',
  operationId: 'DescribeChangeSet',
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
      catalog: z
        .string()
        .regex(/^[a-zA-Z]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'catalog',
            in: 'query',
            required: true,
            description:
              'Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
            schema: { type: 'string', pattern: '^[a-zA-Z]+$', minLength: 1, maxLength: 64 },
          },
        }),
      changeSetId: z
        .string()
        .regex(/^[\w\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'changeSetId',
            in: 'query',
            required: true,
            description:
              'Required. The unique identifier for the <code>StartChangeSet</code> request that you want to describe the details for.',
            schema: { type: 'string', pattern: '^[\\w\\-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChangeSetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDescribeEntityCatalogEntityIdRoute = createRoute({
  method: 'get',
  path: '/DescribeEntity#catalog&entityId',
  description: 'Returns the metadata and content of the entity.',
  operationId: 'DescribeEntity',
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
      catalog: z
        .string()
        .regex(/^[a-zA-Z]+$/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'catalog',
            in: 'query',
            required: true,
            description:
              'Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
            schema: { type: 'string', pattern: '^[a-zA-Z]+$', minLength: 1, maxLength: 64 },
          },
        }),
      entityId: z
        .string()
        .regex(/^[\w\-]+$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'entityId',
            in: 'query',
            required: true,
            description: 'Required. The unique ID of the entity to describe.',
            schema: { type: 'string', pattern: '^[\\w\\-]+$', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEntityResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotSupportedException',
      content: { 'application/json': { schema: ResourceNotSupportedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getGetResourcePolicyResourceArnRoute = createRoute({
  method: 'get',
  path: '/GetResourcePolicy#resourceArn',
  description: 'Gets a resource-based policy of an Entity that is identified by its resource ARN.',
  operationId: 'GetResourcePolicy',
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
      resourceArn: z
        .string()
        .regex(
          /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
        )
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.',
            schema: {
              type: 'string',
              pattern:
                '^arn:[\\w+=/,.@-]+:aws-marketplace:[\\w+=/,.@-]*:[0-9]+:[\\w+=,.@-]+(/[\\w+=,.@-]+)*$',
              minLength: 1,
              maxLength: 255,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListChangeSetsRoute = createRoute({
  method: 'post',
  path: '/ListChangeSets',
  description:
    '<p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>',
  operationId: 'ListChangeSets',
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
              Catalog: z
                .string()
                .regex(/^[a-zA-Z]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
                }),
              FilterList: z
                .array(FilterSchema)
                .min(1)
                .max(8)
                .exactOptional()
                .openapi({ description: 'An array of filter objects.' }),
              Sort: z
                .object({
                  SortBy: SortBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>For <code>ListEntities</code>, supported attributes include <code>LastModifiedDate</code> (default), <code>Visibility</code>, <code>EntityId</code>, and <code>Name</code>.</p> <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code> and <code>EndTime</code>.</p>',
                      }),
                  ).exactOptional(),
                  SortOrder: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.',
                  required: [],
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.',
                }),
              NextToken: z
                .string()
                .regex(/^[\w+=.:@\-\/]$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The token value retrieved from a previous call to access the next page of results.',
                }),
            })
            .openapi({ required: ['Catalog'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListChangeSetsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListEntitiesRoute = createRoute({
  method: 'post',
  path: '/ListEntities',
  description: 'Provides the list of entities of a given type.',
  operationId: 'ListEntities',
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
              Catalog: z
                .string()
                .regex(/^[a-zA-Z]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
                }),
              EntityType: z
                .string()
                .regex(/^[a-zA-Z]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The type of entities to retrieve.' }),
              FilterList: z
                .array(FilterSchema)
                .min(1)
                .max(8)
                .exactOptional()
                .openapi({
                  description:
                    'An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.',
                }),
              Sort: z
                .object({
                  SortBy: SortBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>For <code>ListEntities</code>, supported attributes include <code>LastModifiedDate</code> (default), <code>Visibility</code>, <code>EntityId</code>, and <code>Name</code>.</p> <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code> and <code>EndTime</code>.</p>',
                      }),
                  ).exactOptional(),
                  SortOrder: SortOrderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.',
                  required: [],
                }),
              NextToken: z
                .string()
                .regex(/^[\w+=.:@\-\/]$/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The value of the next token, if it exists. Null if there are no more results.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.",
                }),
              OwnershipType: z
                .enum(['SELF', 'SHARED'])
                .exactOptional()
                .openapi({ description: '' }),
            })
            .openapi({ required: ['Catalog', 'EntityType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntitiesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/ListTagsForResource',
  description:
    'Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).',
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
              ResourceArn: z
                .string()
                .regex(
                  /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
                )
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.',
                }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/PutResourcePolicy',
  description:
    'Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.',
  operationId: 'PutResourcePolicy',
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
              ResourceArn: z
                .string()
                .regex(
                  /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
                )
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the Entity resource you want to associate with a resource policy. ',
                }),
              Policy: z
                .string()
                .regex(/^[\u0009\u000A\u000D\u0020-\u00FF]+$/)
                .min(1)
                .max(10240)
                .openapi({ description: 'The policy document to set; formatted in JSON.' }),
            })
            .openapi({ required: ['ResourceArn', 'Policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postStartChangeSetRoute = createRoute({
  method: 'post',
  path: '/StartChangeSet',
  description:
    '<p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can\'t start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can\'t start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>',
  operationId: 'StartChangeSet',
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
              Catalog: z
                .string()
                .regex(/^[a-zA-Z]+$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The catalog related to the request. Fixed value: <code>AWSMarketplace</code> ',
                }),
              ChangeSet: z
                .array(ChangeSchema)
                .min(1)
                .max(20)
                .openapi({ description: 'Array of <code>change</code> object.' }),
              ChangeSetName: z
                .string()
                .regex(/^[\w\s+=.:@-]+$/)
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets. ',
                }),
              ClientRequestToken: z
                .string()
                .regex(/^[!-~]+$/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'A unique token to identify the request to ensure idempotency.',
                }),
              ChangeSetTags: z
                .array(TagSchema)
                .min(1)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A list of objects specifying each key name and value for the <code>ChangeSetTags</code> property.',
                }),
            })
            .openapi({ required: ['Catalog', 'ChangeSet'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartChangeSetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postTagResourceRoute = createRoute({
  method: 'post',
  path: '/TagResource',
  description:
    'Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).',
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
              ResourceArn: z
                .string()
                .regex(
                  /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
                )
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.',
                }),
              Tags: z
                .array(TagSchema)
                .min(1)
                .max(200)
                .openapi({
                  description:
                    'Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.',
                }),
            })
            .openapi({ required: ['ResourceArn', 'Tags'] }),
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postUntagResourceRoute = createRoute({
  method: 'post',
  path: '/UntagResource',
  description:
    'Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .regex(
                  /^arn:[\w+=\/,.@-]+:aws-marketplace:[\w+=\/,.@-]*:[0-9]+:[\w+=,.@-]+(\/[\w+=,.@-]+)*$/,
                )
                .min(1)
                .max(255)
                .openapi({
                  description:
                    'Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.',
                }),
              TagKeys: z
                .array(TagKeySchema)
                .min(1)
                .max(200)
                .openapi({
                  description:
                    'Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.',
                }),
            })
            .openapi({ required: ['ResourceArn', 'TagKeys'] }),
        },
      },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
