import { createRoute, z } from '@hono/zod-openapi'

const StatusSchema = z.string().openapi('Status')

const S3LocationSchema = z.string().openapi('S3Location')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const DescribeReportCreationOutputSchema = z
  .object({
    Status: StatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Reports the status of the operation.</p> <p>The operation status can be one of the following:</p> <ul> <li> <p> <code>RUNNING</code> - Report creation is in progress.</p> </li> <li> <p> <code>SUCCEEDED</code> - Report creation is complete. You can open the report from the Amazon S3 bucket that you specified when you ran <code>StartReportCreation</code>.</p> </li> <li> <p> <code>FAILED</code> - Report creation timed out or the Amazon S3 bucket is not accessible. </p> </li> <li> <p> <code>NO REPORT</code> - No report was generated in the last 90 days.</p> </li> </ul>',
        }),
    ).exactOptional(),
    S3Location: S3LocationSchema.and(
      z
        .any()
        .openapi({
          description: 'The path to the Amazon S3 bucket where the report was stored on creation.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'Details of the common errors that all operations return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeReportCreationOutput')

const DescribeReportCreationInputSchema = z
  .object({})
  .openapi({ title: 'DescribeReportCreationInput' })
  .openapi('DescribeReportCreationInput')

const ConstraintViolationExceptionSchema = z.any().openapi('ConstraintViolationException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const ThrottledExceptionSchema = z.any().openapi('ThrottledException')

const LastUpdatedSchema = z.string().openapi('LastUpdated')

const TargetIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9-]*/)
  .min(6)
  .max(68)
  .openapi('TargetId')

const TargetIdTypeSchema = z.enum(['ACCOUNT', 'OU', 'ROOT']).openapi('TargetIdType')

const RegionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(256)
  .openapi('Region')

const AmazonResourceTypeSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(256)
  .openapi('AmazonResourceType')

const NonCompliantResourcesSchema = z.int().openapi('NonCompliantResources')

const SummarySchema = z
  .object({
    LastUpdated: LastUpdatedSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp that shows when this summary was generated in this Region. ',
        }),
    ).exactOptional(),
    TargetId: TargetIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account identifier or the root identifier of the organization. If you don\'t know the root ID, you can call the Organizations <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html">ListRoots</a> API.',
        }),
    ).exactOptional(),
    TargetIdType: TargetIdTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Whether the target is an account, an OU, or the organization root.',
        }),
    ).exactOptional(),
    Region: RegionSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Web Services Region that the summary applies to.' }),
    ).exactOptional(),
    ResourceType: AmazonResourceTypeSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services resource type.' }),
    ).exactOptional(),
    NonCompliantResources: NonCompliantResourcesSchema.and(
      z.any().openapi({ description: 'The count of noncompliant resources.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A count of noncompliant resources.', required: [] })
  .openapi('Summary')

const SummaryListSchema = z.array(SummarySchema).openapi('SummaryList')

const PaginationTokenSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(2048)
  .openapi('PaginationToken')

const GetComplianceSummaryOutputSchema = z
  .object({
    SummaryList: SummaryListSchema.and(
      z.any().openapi({ description: 'A table that shows counts of noncompliant resources.' }),
    ).exactOptional(),
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetComplianceSummaryOutput')

const TargetIdFilterListSchema = z
  .array(TargetIdSchema)
  .min(1)
  .max(100)
  .openapi('TargetIdFilterList')

const RegionFilterListSchema = z.array(RegionSchema).min(1).max(100).openapi('RegionFilterList')

const ResourceTypeFilterListSchema = z
  .array(AmazonResourceTypeSchema)
  .openapi('ResourceTypeFilterList')

const TagKeySchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagKeyFilterListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyFilterList')

const GroupByAttributeSchema = z
  .enum(['TARGET_ID', 'REGION', 'RESOURCE_TYPE'])
  .openapi('GroupByAttribute')

const GroupBySchema = z.array(GroupByAttributeSchema).openapi('GroupBy')

const MaxResultsGetComplianceSummarySchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi('MaxResultsGetComplianceSummary')

const GetComplianceSummaryInputSchema = z
  .object({
    TargetIdFilters: TargetIdFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies target identifiers (usually, specific account IDs) to limit the output by. If you use this parameter, the count of returned noncompliant resources includes only resources with the specified target IDs.',
        }),
    ).exactOptional(),
    RegionFilters: RegionFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of Amazon Web Services Regions to limit the output to. If you use this parameter, the count of returned noncompliant resources includes only resources in the specified Regions.',
        }),
    ).exactOptional(),
    ResourceTypeFilters: ResourceTypeFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies that you want the response to include information for only resources of the specified types. The format of each resource type is <code>service[:resourceType]</code>. For example, specifying a resource type of <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of <code>ec2:instance</code> returns only EC2 instances.</p> <p>The string for each service name and resource type is the same as that embedded in a resource\'s Amazon Resource Name (ARN). Consult the <i> <a href="https://docs.aws.amazon.com/general/latest/gr/">Amazon Web Services General Reference</a> </i> for the following:</p> <ul> <li> <p>For a list of service name strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services Service Namespaces</a>.</p> </li> <li> <p>For resource type strings, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arns-syntax">Example ARNs</a>.</p> </li> <li> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p> </li> </ul> <p>You can specify multiple resource types by using a comma separated array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter. </p>',
        }),
    ).exactOptional(),
    TagKeyFilters: TagKeyFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that you want the response to include information for only resources that have tags with the specified tag keys. If you use this parameter, the count of returned noncompliant resources includes only resources that have the specified tag keys.',
        }),
    ).exactOptional(),
    GroupBy: GroupBySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of attributes to group the counts of noncompliant resources by. If supplied, the counts are sorted by those attributes.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsGetComplianceSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of results to be returned in each page. A query can return fewer than this maximum, even if there are more results still to return. You should always check the <code>PaginationToken</code> response value to see if there are more results. You can specify a minimum of 1 and a maximum value of 100.',
        }),
    ).exactOptional(),
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a <code>PaginationToken</code> response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetComplianceSummaryInput', required: [] })
  .openapi('GetComplianceSummaryInput')

const ResourceARNSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(1011)
  .openapi('ResourceARN')

const TagValueSchema = z
  .string()
  .regex(/[\s\S]*/)
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
            'One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const ComplianceStatusSchema = z.boolean().openapi('ComplianceStatus')

const ComplianceDetailsSchema = z
  .object({
    NoncompliantKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'These tag keys on the resource are noncompliant with the effective tag policy.',
        }),
    ).exactOptional(),
    KeysWithNoncompliantValues: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'These are keys defined in the effective policy that are on the resource with either incorrect case treatment or noncompliant values. ',
        }),
    ).exactOptional(),
    ComplianceStatus: ComplianceStatusSchema.and(
      z
        .any()
        .openapi({ description: 'Whether a resource is compliant with the effective tag policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.',
    required: [],
  })
  .openapi('ComplianceDetails')

const ResourceTagMappingSchema = z
  .object({
    ResourceARN: ResourceARNSchema.and(
      z.any().openapi({ description: 'The ARN of the resource.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that have been applied to one or more Amazon Web Services resources.',
        }),
    ).exactOptional(),
    ComplianceDetails: ComplianceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of resource ARNs and the tags (keys and values) that are associated with each.',
    required: [],
  })
  .openapi('ResourceTagMapping')

const ResourceTagMappingListSchema = z
  .array(ResourceTagMappingSchema)
  .openapi('ResourceTagMappingList')

const GetResourcesOutputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page.',
        }),
    ).exactOptional(),
    ResourceTagMappingList: ResourceTagMappingListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource ARNs and the tags (keys and values) associated with each.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcesOutput')

const TagValueListSchema = z.array(TagValueSchema).min(0).max(20).openapi('TagValueList')

const TagFilterSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.',
        }),
    ).exactOptional(),
    Values: TagValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list of tags (keys and values) that are used to specify the associated resources.',
    required: [],
  })
  .openapi('TagFilter')

const TagFilterListSchema = z.array(TagFilterSchema).min(0).max(50).openapi('TagFilterList')

const ResourcesPerPageSchema = z.int().openapi('ResourcesPerPage')

const TagsPerPageSchema = z.int().openapi('TagsPerPage')

const IncludeComplianceDetailsSchema = z.boolean().openapi('IncludeComplianceDetails')

const ExcludeCompliantResourcesSchema = z.boolean().openapi('ExcludeCompliantResources')

const ResourceARNListForGetSchema = z
  .array(ResourceARNSchema)
  .min(1)
  .max(100)
  .openapi('ResourceARNListForGet')

const GetResourcesInputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a <code>PaginationToken</code> response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.',
        }),
    ).exactOptional(),
    TagFilters: TagFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a list of TagFilters (keys and values) to restrict the output to only those resources that have tags with the specified keys and, if included, the specified values. Each <code>TagFilter</code> must contain a key with values optional. A request can include up to 50 keys, and each key can include up to 20 values. </p> <p>Note the following when deciding how to use TagFilters:</p> <ul> <li> <p>If you <i>don't</i> specify a <code>TagFilter</code>, the response includes all resources that are currently tagged or ever had a tag. Resources that currently don't have tags are shown with an empty tag set, like this: <code>\"Tags\": []</code>.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns only those resources that satisfy all filters.</p> </li> <li> <p>If you specify a filter that contains more than one value for a key, the response returns resources that match <i>any</i> of the specified values for that key.</p> </li> <li> <p>If you don't specify a value for a key, the response returns all resources that are tagged with that key, with any or no value.</p> <p>For example, for the following filters: <code>filter1= {keyA,{value1}}</code>, <code>filter2={keyB,{value2,value3,value4}}</code>, <code>filter3= {keyC}</code>:</p> <ul> <li> <p> <code>GetResources({filter1})</code> returns resources tagged with <code>key1=value1</code> </p> </li> <li> <p> <code>GetResources({filter2})</code> returns resources tagged with <code>key2=value2</code> or <code>key2=value3</code> or <code>key2=value4</code> </p> </li> <li> <p> <code>GetResources({filter3})</code> returns resources tagged with any tag with the key <code>key3</code>, and with any or no value</p> </li> <li> <p> <code>GetResources({filter1,filter2,filter3})</code> returns resources tagged with <code>(key1=value1) and (key2=value2 or key2=value3 or key2=value4) and (key3, any or no value)</code> </p> </li> </ul> </li> </ul>",
        }),
    ).exactOptional(),
    ResourcesPerPage: ResourcesPerPageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of results to be returned in each page. A query can return fewer than this maximum, even if there are more results still to return. You should always check the <code>PaginationToken</code> response value to see if there are more results. You can specify a minimum of 1 and a maximum value of 100.',
        }),
    ).exactOptional(),
    TagsPerPage: TagsPerPageSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Web Services recommends using <code>ResourcesPerPage</code> instead of this parameter.</p> <p>A limit that restricts the number of tags (key and value pairs) returned by <code>GetResources</code> in paginated output. A resource with no tags is counted as having one tag (one key and value pair).</p> <p> <code>GetResources</code> does not split a resource and its associated tags across pages. If the specified <code>TagsPerPage</code> would cause such a break, a <code>PaginationToken</code> is returned in place of the affected resource and its tags. Use that token in another request to get the remaining data. For example, if you specify a <code>TagsPerPage</code> of <code>100</code> and the account has 22 resources with 10 tags each (meaning that each resource has 10 key and value pairs), the output will consist of three pages. The first page displays the first 10 resources, each with its 10 tags. The second page displays the next 10 resources, each with its 10 tags. The third page displays the remaining 2 resources, each with its 10 tags.</p> <p>You can set <code>TagsPerPage</code> to a minimum of 100 items up to a maximum of 500 items.</p>',
        }),
    ).exactOptional(),
    ResourceTypeFilters: ResourceTypeFilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the resource types that you want included in the response. The format of each resource type is <code>service[:resourceType]</code>. For example, specifying a resource type of <code>ec2</code> returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of <code>ec2:instance</code> returns only EC2 instances. </p> <p>The string for each service name and resource type is the same as that embedded in a resource\'s Amazon Resource Name (ARN). For the list of services whose resources you can use in this parameter, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>.</p> <p>You can specify multiple resource types by using an array. The array can include up to 100 items. Note that the length constraint requirement applies to each resource type filter. For example, the following string would limit the response to only Amazon EC2 instances, Amazon S3 buckets, or any Audit Manager resource:</p> <p> <code>ec2:instance,s3:bucket,auditmanager</code> </p>',
        }),
    ).exactOptional(),
    IncludeComplianceDetails: IncludeComplianceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to include details regarding the compliance with the effective tag policy. Set this to <code>true</code> to determine whether resources are compliant with the tag policy and to get details.',
        }),
    ).exactOptional(),
    ExcludeCompliantResources: ExcludeCompliantResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether to exclude resources that are compliant with the tag policy. Set this to <code>true</code> if you are interested in retrieving information on noncompliant resources only.</p> <p>You can use this parameter only if the <code>IncludeComplianceDetails</code> parameter is also set to <code>true</code>.</p>',
        }),
    ).exactOptional(),
    ResourceARNList: ResourceARNListForGetSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies a list of ARNs of resources for which you want to retrieve tag data. You can't specify both this parameter and any of the pagination parameters (<code>ResourcesPerPage</code>, <code>TagsPerPage</code>, <code>PaginationToken</code>) in the same request. If you specify both, you get an <code>Invalid Parameter</code> exception.</p> <p>If a resource specified by this parameter doesn't exist, it doesn't generate an error; it simply isn't included in the response.</p> <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see <a href=\"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html\">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetResourcesInput', required: [] })
  .openapi('GetResourcesInput')

const PaginationTokenExpiredExceptionSchema = z.any().openapi('PaginationTokenExpiredException')

const GetTagKeysOutputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page.',
        }),
    ).exactOptional(),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of all tag keys in the Amazon Web Services account.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTagKeysOutput')

const GetTagKeysInputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a <code>PaginationToken</code> response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetTagKeysInput', required: [] })
  .openapi('GetTagKeysInput')

const TagValuesOutputListSchema = z.array(TagValueSchema).openapi('TagValuesOutputList')

const GetTagValuesOutputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that indicates that there is more data available than this response contains. To receive the next part of the response, specify this response value as the <code>PaginationToken</code> value in the request for the next page.',
        }),
    ).exactOptional(),
    TagValues: TagValuesOutputListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of all tag values for the specified key currently used in the specified Amazon Web Services Region for the calling account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTagValuesOutput')

const GetTagValuesInputSchema = z
  .object({
    PaginationToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a <code>PaginationToken</code> response value from a previous request to indicate that you want the next page of results. Leave this parameter empty in your initial request.',
        }),
    ).exactOptional(),
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the tag key for which you want to list all existing values that are currently used in the specified Amazon Web Services Region for the calling account.',
        }),
    ),
  })
  .openapi({ required: ['Key'], title: 'GetTagValuesInput' })
  .openapi('GetTagValuesInput')

const StartReportCreationOutputSchema = z.object({}).openapi('StartReportCreationOutput')

const S3BucketSchema = z
  .string()
  .regex(/[a-z0-9.-]*/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const StartReportCreationInputSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket where the report will be stored; for example:</p> <p> <code>awsexamplebucket</code> </p> <p>For more information on S3 bucket requirements, including an example bucket policy, see the example S3 bucket policy on this page.</p>',
        }),
    ),
  })
  .openapi({ required: ['S3Bucket'], title: 'StartReportCreationInput' })
  .openapi('StartReportCreationInput')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const StatusCodeSchema = z.int().openapi('StatusCode')

const ErrorCodeSchema = z
  .enum(['InternalServiceException', 'InvalidParameterException'])
  .openapi('ErrorCode')

const FailureInfoSchema = z
  .object({
    StatusCode: StatusCodeSchema.and(
      z.any().openapi({ description: 'The HTTP status code of the common error.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The code of the common error. Valid values include <code>InternalServiceException</code>, <code>InvalidParameterException</code>, and any valid error code returned by the Amazon Web Services service that hosts the resource that you want to tag.',
        }),
    ).exactOptional(),
    ErrorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The message of the common error.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other Amazon Web Services services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn\'t receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it\'s safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service. </p>',
    required: [],
  })
  .openapi('FailureInfo')

const FailedResourcesMapSchema = z
  .record(z.string(), FailureInfoSchema)
  .openapi('FailedResourcesMap')

const TagResourcesOutputSchema = z
  .object({
    FailedResourcesMap: FailedResourcesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map containing a key-value pair for each failed item that couldn't be tagged. The key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object that contains an error code, a status code, and an error message. If there are no errors, the <code>FailedResourcesMap</code> is empty.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagResourcesOutput')

const ResourceARNListForTagUntagSchema = z
  .array(ResourceARNSchema)
  .min(1)
  .max(20)
  .openapi('ResourceARNListForTagUntag')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const TagResourcesInputSchema = z
  .object({
    ResourceARNList: ResourceARNListForTagUntagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the list of ARNs of the resources that you want to apply tags to.</p> <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of tags that you want to add to the specified resources. A tag consists of a key and a value that you define.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARNList', 'Tags'], title: 'TagResourcesInput' })
  .openapi('TagResourcesInput')

const UntagResourcesOutputSchema = z
  .object({
    FailedResourcesMap: FailedResourcesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A map containing a key-value pair for each failed item that couldn't be untagged. The key is the ARN of the failed resource. The value is a <code>FailureInfo</code> object that contains an error code, a status code, and an error message. If there are no errors, the <code>FailedResourcesMap</code> is empty.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UntagResourcesOutput')

const TagKeyListForUntagSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyListForUntag')

const UntagResourcesInputSchema = z
  .object({
    ResourceARNList: ResourceARNListForTagUntagSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies a list of ARNs of the resources that you want to remove tags from.</p> <p>An ARN (Amazon Resource Name) uniquely identifies a resource. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ),
    TagKeys: TagKeyListForUntagSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a list of tag keys that you want to remove from the specified resources.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARNList', 'TagKeys'], title: 'UntagResourcesInput' })
  .openapi('UntagResourcesInput')

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

export const postXAmzTargetResourceGroupsTaggingAPI20170126DescribeReportCreationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation',
    description:
      "<p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>",
    operationId: 'DescribeReportCreation',
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
          .literal('ResourceGroupsTaggingAPI_20170126.DescribeReportCreation')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ResourceGroupsTaggingAPI_20170126.DescribeReportCreation'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeReportCreationInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeReportCreationOutputSchema } },
      },
      480: {
        description: 'ConstraintViolationException',
        content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
      },
      481: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      483: {
        description: 'ThrottledException',
        content: { 'application/json': { schema: ThrottledExceptionSchema } },
      },
    },
  })

export const postXAmzTargetResourceGroupsTaggingAPI20170126GetComplianceSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary',
  description:
    '<p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization\'s management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>',
  operationId: 'GetComplianceSummary',
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
        .literal('ResourceGroupsTaggingAPI_20170126.GetComplianceSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ResourceGroupsTaggingAPI_20170126.GetComplianceSummary'],
            },
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
      PaginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PaginationToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetComplianceSummaryInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComplianceSummaryOutputSchema } },
    },
    480: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    481: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    483: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126GetResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources',
  description:
    '<p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account\'s effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>',
  operationId: 'GetResources',
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
        .literal('ResourceGroupsTaggingAPI_20170126.GetResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ResourceGroupsTaggingAPI_20170126.GetResources'] },
          },
        }),
    }),
    query: z.object({
      ResourcesPerPage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ResourcesPerPage',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      PaginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PaginationToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetResourcesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'PaginationTokenExpiredException',
      content: { 'application/json': { schema: PaginationTokenExpiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126GetTagKeysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys',
  description:
    '<p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>',
  operationId: 'GetTagKeys',
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
        .literal('ResourceGroupsTaggingAPI_20170126.GetTagKeys')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ResourceGroupsTaggingAPI_20170126.GetTagKeys'] },
          },
        }),
    }),
    query: z.object({
      PaginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PaginationToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetTagKeysInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTagKeysOutputSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'PaginationTokenExpiredException',
      content: { 'application/json': { schema: PaginationTokenExpiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126GetTagValuesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues',
  description:
    '<p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>',
  operationId: 'GetTagValues',
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
        .literal('ResourceGroupsTaggingAPI_20170126.GetTagValues')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ResourceGroupsTaggingAPI_20170126.GetTagValues'] },
          },
        }),
    }),
    query: z.object({
      PaginationToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'PaginationToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetTagValuesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTagValuesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'PaginationTokenExpiredException',
      content: { 'application/json': { schema: PaginationTokenExpiredExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126StartReportCreationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation',
  description:
    "<p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>",
  operationId: 'StartReportCreation',
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
        .literal('ResourceGroupsTaggingAPI_20170126.StartReportCreation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ResourceGroupsTaggingAPI_20170126.StartReportCreation'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartReportCreationInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartReportCreationOutputSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'ConstraintViolationException',
      content: { 'application/json': { schema: ConstraintViolationExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    484: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126TagResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources',
  description:
    '<p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn\'t yet support this operation, the resource\'s service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>',
  operationId: 'TagResources',
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
        .literal('ResourceGroupsTaggingAPI_20170126.TagResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ResourceGroupsTaggingAPI_20170126.TagResources'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourcesInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourcesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetResourceGroupsTaggingAPI20170126UntagResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources',
  description:
    '<p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>',
  operationId: 'UntagResources',
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
        .literal('ResourceGroupsTaggingAPI_20170126.UntagResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ResourceGroupsTaggingAPI_20170126.UntagResources'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourcesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourcesOutputSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ThrottledException',
      content: { 'application/json': { schema: ThrottledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})
