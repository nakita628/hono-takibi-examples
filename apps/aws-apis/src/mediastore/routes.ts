import { createRoute, z } from '@hono/zod-openapi'

const EndpointSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(255)
  .openapi('Endpoint')

const TimeStampSchema = z.iso.datetime({ offset: true }).openapi('TimeStamp')

const ContainerARNSchema = z
  .string()
  .regex(/arn:aws:mediastore:[a-z]+-[a-z]+-\d:\d{12}:container\/[\w-]{1,255}/)
  .min(1)
  .max(1024)
  .openapi('ContainerARN')

const ContainerNameSchema = z
  .string()
  .regex(/[\w-]+/)
  .min(1)
  .max(255)
  .openapi('ContainerName')

const ContainerStatusSchema = z.enum(['ACTIVE', 'CREATING', 'DELETING']).openapi('ContainerStatus')

const ContainerAccessLoggingEnabledSchema = z.boolean().openapi('ContainerAccessLoggingEnabled')

const ContainerSchema = z
  .object({
    Endpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change.',
        }),
    ).exactOptional(),
    CreationTime: TimeStampSchema.and(
      z.any().openapi({ description: 'Unix timestamp.' }),
    ).exactOptional(),
    ARN: ContainerARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the container. The ARN has the following format:</p> <p>arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt; </p> <p>For example: arn:aws:mediastore:us-west-2:111122223333:container/movies </p>',
        }),
    ).exactOptional(),
    Name: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container.' }),
    ).exactOptional(),
    Status: ContainerStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of container creation or deletion. The status is one of the following: <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the service is creating the container, the status is <code>CREATING</code>. When the endpoint is available, the status changes to <code>ACTIVE</code>.',
        }),
    ).exactOptional(),
    AccessLoggingEnabled: ContainerAccessLoggingEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of access logging on the container. This value is <code>false</code> by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to <code>true</code>, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'This section describes operations that you can perform on an AWS Elemental MediaStore container.',
    required: [],
  })
  .openapi('Container')

const CreateContainerOutputSchema = z
  .object({
    Container: ContainerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>ContainerARN: The Amazon Resource Name (ARN) of the newly created container. The ARN has the following format: arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt;. For example: arn:aws:mediastore:us-west-2:111122223333:container/movies </p> <p>ContainerName: The container name as specified in the request.</p> <p>CreationTime: Unix time stamp.</p> <p>Status: The status of container creation or deletion. The status is one of the following: <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the service is creating the container, the status is <code>CREATING</code>. When an endpoint is available, the status changes to <code>ACTIVE</code>.</p> <p>The return value does not include the container's endpoint. To make downstream requests, you must obtain this value by using <a>DescribeContainer</a> or <a>ListContainers</a>.</p>",
        }),
    ),
  })
  .openapi({ required: ['Container'] })
  .openapi('CreateContainerOutput')

const TagKeySchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/[\p{L}\p{Z}\p{N}_.:\/=+\-@]*/u)
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
            'Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Key'],
    description:
      'A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(200).openapi('TagList')

const CreateContainerInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the container. The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named <code>movies</code> in every region, as long as you don’t have an existing container with that name.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key:value pairs that you define. These values can be anything that you want. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ContainerName'], title: 'CreateContainerInput' })
  .openapi('CreateContainerInput')

const ContainerInUseExceptionSchema = z.any().openapi('ContainerInUseException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const DeleteContainerOutputSchema = z.object({}).openapi('DeleteContainerOutput')

const DeleteContainerInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container to delete. ' }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'DeleteContainerInput' })
  .openapi('DeleteContainerInput')

const ContainerNotFoundExceptionSchema = z.any().openapi('ContainerNotFoundException')

const DeleteContainerPolicyOutputSchema = z.object({}).openapi('DeleteContainerPolicyOutput')

const DeleteContainerPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container that holds the policy.' }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'DeleteContainerPolicyInput' })
  .openapi('DeleteContainerPolicyInput')

const PolicyNotFoundExceptionSchema = z.any().openapi('PolicyNotFoundException')

const DeleteCorsPolicyOutputSchema = z.object({}).openapi('DeleteCorsPolicyOutput')

const DeleteCorsPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container to remove the policy from.' }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'DeleteCorsPolicyInput' })
  .openapi('DeleteCorsPolicyInput')

const CorsPolicyNotFoundExceptionSchema = z.any().openapi('CorsPolicyNotFoundException')

const DeleteLifecyclePolicyOutputSchema = z.object({}).openapi('DeleteLifecyclePolicyOutput')

const DeleteLifecyclePolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that holds the object lifecycle policy.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'DeleteLifecyclePolicyInput' })
  .openapi('DeleteLifecyclePolicyInput')

const DeleteMetricPolicyOutputSchema = z.object({}).openapi('DeleteMetricPolicyOutput')

const DeleteMetricPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container that is associated with the metric policy that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'DeleteMetricPolicyInput' })
  .openapi('DeleteMetricPolicyInput')

const DescribeContainerOutputSchema = z
  .object({
    Container: ContainerSchema.and(
      z.any().openapi({ description: 'The name of the queried container.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeContainerOutput')

const DescribeContainerInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container to query.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeContainerInput', required: [] })
  .openapi('DescribeContainerInput')

const ContainerPolicySchema = z
  .string()
  .regex(/[\x00-\x7F]+/)
  .min(1)
  .max(8192)
  .openapi('ContainerPolicy')

const GetContainerPolicyOutputSchema = z
  .object({
    Policy: ContainerPolicySchema.and(
      z.any().openapi({ description: 'The contents of the access policy.' }),
    ),
  })
  .openapi({ required: ['Policy'] })
  .openapi('GetContainerPolicyOutput')

const GetContainerPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container. ' }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'GetContainerPolicyInput' })
  .openapi('GetContainerPolicyInput')

const OriginSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(2048)
  .openapi('Origin')

const AllowedOriginsSchema = z.array(OriginSchema).min(1).max(100).openapi('AllowedOrigins')

const MethodNameSchema = z.enum(['PUT', 'GET', 'DELETE', 'HEAD']).openapi('MethodName')

const AllowedMethodsSchema = z.array(MethodNameSchema).min(1).max(4).openapi('AllowedMethods')

const HeaderSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(1)
  .max(8192)
  .openapi('Header')

const AllowedHeadersSchema = z.array(HeaderSchema).min(0).max(100).openapi('AllowedHeaders')

const MaxAgeSecondsSchema = z.int().min(0).max(2147483647).openapi('MaxAgeSeconds')

const ExposeHeadersSchema = z.array(HeaderSchema).min(0).max(100).openapi('ExposeHeaders')

const CorsRuleSchema = z
  .object({
    AllowedOrigins: AllowedOriginsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>Each CORS rule must have at least one <code>AllowedOrigins</code> element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.</p>',
        }),
    ),
    AllowedMethods: AllowedMethodsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.</p> <p>Each CORS rule must contain at least one <code>AllowedMethods</code> and one <code>AllowedOrigins</code> element.</p>',
        }),
    ).exactOptional(),
    AllowedHeaders: AllowedHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which headers are allowed in a preflight <code>OPTIONS</code> request through the <code>Access-Control-Request-Headers</code> header. Each header name that is specified in <code>Access-Control-Request-Headers</code> must have a corresponding entry in the rule. Only the headers that were requested are sent back. </p> <p>This element can contain only one wildcard character (*).</p>',
        }),
    ),
    MaxAgeSeconds: MaxAgeSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time in seconds that your browser caches the preflight response for the specified resource.</p> <p>A CORS rule can have only one <code>MaxAgeSeconds</code> element.</p>',
        }),
    ).exactOptional(),
    ExposeHeaders: ExposeHeadersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p> <p>This element is optional for each rule.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AllowedOrigins', 'AllowedHeaders'],
    description:
      'A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.',
  })
  .openapi('CorsRule')

const CorsPolicySchema = z
  .array(CorsRuleSchema)
  .min(1)
  .max(100)
  .openapi({ description: 'The CORS policy of the container. ' })
  .openapi('CorsPolicy')

const GetCorsPolicyOutputSchema = z
  .object({
    CorsPolicy: CorsPolicySchema.and(
      z.any().openapi({ description: 'The CORS policy assigned to the container.' }),
    ),
  })
  .openapi({ required: ['CorsPolicy'] })
  .openapi('GetCorsPolicyOutput')

const GetCorsPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container that the policy is assigned to.' }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'GetCorsPolicyInput' })
  .openapi('GetCorsPolicyInput')

const LifecyclePolicySchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u00FF]+/)
  .min(0)
  .max(8192)
  .openapi('LifecyclePolicy')

const GetLifecyclePolicyOutputSchema = z
  .object({
    LifecyclePolicy: LifecyclePolicySchema.and(
      z
        .any()
        .openapi({ description: 'The object lifecycle policy that is assigned to the container.' }),
    ),
  })
  .openapi({ required: ['LifecyclePolicy'] })
  .openapi('GetLifecyclePolicyOutput')

const GetLifecyclePolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that the object lifecycle policy is assigned to.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'GetLifecyclePolicyInput' })
  .openapi('GetLifecyclePolicyInput')

const ContainerLevelMetricsSchema = z.enum(['ENABLED', 'DISABLED']).openapi('ContainerLevelMetrics')

const ObjectGroupSchema = z
  .string()
  .regex(/\/?(?:[A-Za-z0-9_=:\.\-\~\*]+\/){0,10}(?:[A-Za-z0-9_=:\.\-\~\*]+)?\/?/)
  .min(1)
  .max(900)
  .openapi('ObjectGroup')

const ObjectGroupNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_]+/)
  .min(1)
  .max(30)
  .openapi('ObjectGroupName')

const MetricPolicyRuleSchema = z
  .object({
    ObjectGroup: ObjectGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'A path or file name that defines which objects to include in the group. Wildcards (*) are acceptable.',
        }),
    ),
    ObjectGroupName: ObjectGroupNameSchema.and(
      z.any().openapi({ description: 'A name that allows you to refer to the object group.' }),
    ),
  })
  .openapi({
    required: ['ObjectGroup', 'ObjectGroupName'],
    description:
      'A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.',
  })
  .openapi('MetricPolicyRule')

const MetricPolicyRulesSchema = z
  .array(MetricPolicyRuleSchema)
  .min(1)
  .max(300)
  .openapi('MetricPolicyRules')

const MetricPolicySchema = z
  .object({
    ContainerLevelMetrics: ContainerLevelMetricsSchema.and(
      z
        .any()
        .openapi({ description: 'A setting to enable or disable metrics at the container level.' }),
    ),
    MetricPolicyRules: MetricPolicyRulesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A parameter that holds an array of rules that enable metrics at the object level. This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ContainerLevelMetrics'],
    description:
      '<p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>',
  })
  .openapi('MetricPolicy')

const GetMetricPolicyOutputSchema = z
  .object({
    MetricPolicy: MetricPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'The metric policy that is associated with the specific container.',
        }),
    ),
  })
  .openapi({ required: ['MetricPolicy'] })
  .openapi('GetMetricPolicyOutput')

const GetMetricPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that is associated with the metric policy.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'GetMetricPolicyInput' })
  .openapi('GetMetricPolicyInput')

const ContainerListSchema = z.array(ContainerSchema).openapi('ContainerList')

const PaginationTokenSchema = z
  .string()
  .regex(/[0-9A-Za-z=\/+]+/)
  .min(1)
  .max(1024)
  .openapi('PaginationToken')

const ListContainersOutputSchema = z
  .object({
    Containers: ContainerListSchema.and(
      z.any().openapi({ description: 'The names of the containers.' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <code>NextToken</code> is the token to use in the next call to <code>ListContainers</code>. This token is returned only if you included the <code>MaxResults</code> tag in the original command, and only if there are still containers to return. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Containers'] })
  .openapi('ListContainersOutput')

const ContainerListLimitSchema = z.int().min(1).max(100).openapi('ContainerListLimit')

const ListContainersInputSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Only if you used <code>MaxResults</code> in the first command, enter the token (which was included in the previous response) to obtain the next set of containers. This token is included in a response only if there actually are more containers to list.',
        }),
    ).exactOptional(),
    MaxResults: ContainerListLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enter the maximum number of containers in the response. Use from 1 to 255 characters. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListContainersInput', required: [] })
  .openapi('ListContainersInput')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of key:value pairs that are assigned to the container.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const ListTagsForResourceInputSchema = z
  .object({
    Resource: ContainerARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the container.' }),
    ),
  })
  .openapi({ required: ['Resource'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const PutContainerPolicyOutputSchema = z.object({}).openapi('PutContainerPolicyOutput')

const PutContainerPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z.any().openapi({ description: 'The name of the container.' }),
    ),
    Policy: ContainerPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The contents of the policy, which includes the following: </p> <ul> <li> <p>One <code>Version</code> tag</p> </li> <li> <p>One <code>Statement</code> tag that contains the standard tags for the policy.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({ required: ['ContainerName', 'Policy'], title: 'PutContainerPolicyInput' })
  .openapi('PutContainerPolicyInput')

const PutCorsPolicyOutputSchema = z.object({}).openapi('PutCorsPolicyOutput')

const PutCorsPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that you want to assign the CORS policy to.',
        }),
    ),
    CorsPolicy: CorsPolicySchema.and(
      z.any().openapi({ description: 'The CORS policy to apply to the container. ' }),
    ),
  })
  .openapi({ required: ['ContainerName', 'CorsPolicy'], title: 'PutCorsPolicyInput' })
  .openapi('PutCorsPolicyInput')

const PutLifecyclePolicyOutputSchema = z.object({}).openapi('PutLifecyclePolicyOutput')

const PutLifecyclePolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the container that you want to assign the object lifecycle policy to.',
        }),
    ),
    LifecyclePolicy: LifecyclePolicySchema.and(
      z.any().openapi({ description: 'The object lifecycle policy to apply to the container.' }),
    ),
  })
  .openapi({ required: ['ContainerName', 'LifecyclePolicy'], title: 'PutLifecyclePolicyInput' })
  .openapi('PutLifecyclePolicyInput')

const PutMetricPolicyOutputSchema = z.object({}).openapi('PutMetricPolicyOutput')

const PutMetricPolicyInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that you want to add the metric policy to.',
        }),
    ),
    MetricPolicy: MetricPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The metric policy that you want to associate with the container. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include up to five rules to define groups of objects that you want MediaStore to send object-level metrics for. If you include rules in the policy, construct each rule with both of the following:</p> <ul> <li> <p>An object group that defines which objects to include in the group. The definition can be a path or a file name, but it can't have more than 900 characters. Valid characters are: a-z, A-Z, 0-9, _ (underscore), = (equal), : (colon), . (period), - (hyphen), ~ (tilde), / (forward slash), and * (asterisk). Wildcards (*) are acceptable.</p> </li> <li> <p>An object group name that allows you to refer to the object group. The name can't have more than 30 characters. Valid characters are: a-z, A-Z, 0-9, and _ (underscore).</p> </li> </ul>",
        }),
    ),
  })
  .openapi({ required: ['ContainerName', 'MetricPolicy'], title: 'PutMetricPolicyInput' })
  .openapi('PutMetricPolicyInput')

const StartAccessLoggingOutputSchema = z.object({}).openapi('StartAccessLoggingOutput')

const StartAccessLoggingInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that you want to start access logging on.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'StartAccessLoggingInput' })
  .openapi('StartAccessLoggingInput')

const StopAccessLoggingOutputSchema = z.object({}).openapi('StopAccessLoggingOutput')

const StopAccessLoggingInputSchema = z
  .object({
    ContainerName: ContainerNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the container that you want to stop access logging on.',
        }),
    ),
  })
  .openapi({ required: ['ContainerName'], title: 'StopAccessLoggingInput' })
  .openapi('StopAccessLoggingInput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const TagResourceInputSchema = z
  .object({
    Resource: ContainerARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the container. ' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of key:value pairs that you want to add to the container. You need to specify only the tags that you want to add or update. For example, suppose a container already has two tags (customer:CompanyA and priority:High). You want to change the priority tag and also add a third tag (type:Contract). For TagResource, you specify the following tags: priority:Medium, type:Contract. The result is that your container has three tags: customer:CompanyA, priority:Medium, and type:Contract.',
        }),
    ),
  })
  .openapi({ required: ['Resource', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceInputSchema = z
  .object({
    Resource: ContainerARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the container.' }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of keys for tags that you want to remove from the container. For example, if your container has two tags (customer:CompanyA and priority:High) and you want to remove one of the tags (priority:High), you specify the key for the tag that you want to remove (priority).',
        }),
    ),
  })
  .openapi({ required: ['Resource', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

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

export const postXAmzTargetMediaStore20170901CreateContainerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.CreateContainer',
  description:
    'Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.',
  operationId: 'CreateContainer',
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
        .literal('MediaStore_20170901.CreateContainer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.CreateContainer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContainerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContainerOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DeleteContainerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DeleteContainer',
  description:
    'Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. ',
  operationId: 'DeleteContainer',
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
        .literal('MediaStore_20170901.DeleteContainer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DeleteContainer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContainerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContainerOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DeleteContainerPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy',
  description: 'Deletes the access policy that is associated with the specified container.',
  operationId: 'DeleteContainerPolicy',
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
        .literal('MediaStore_20170901.DeleteContainerPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DeleteContainerPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContainerPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContainerPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DeleteCorsPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy',
  description:
    '<p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>',
  operationId: 'DeleteCorsPolicy',
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
        .literal('MediaStore_20170901.DeleteCorsPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DeleteCorsPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteCorsPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCorsPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'CorsPolicyNotFoundException',
      content: { 'application/json': { schema: CorsPolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DeleteLifecyclePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy',
  description:
    'Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.',
  operationId: 'DeleteLifecyclePolicy',
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
        .literal('MediaStore_20170901.DeleteLifecyclePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DeleteLifecyclePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteLifecyclePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLifecyclePolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DeleteMetricPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy',
  description:
    "Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.",
  operationId: 'DeleteMetricPolicy',
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
        .literal('MediaStore_20170901.DeleteMetricPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DeleteMetricPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteMetricPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMetricPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901DescribeContainerRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.DescribeContainer',
  description:
    "Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.",
  operationId: 'DescribeContainer',
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
        .literal('MediaStore_20170901.DescribeContainer')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.DescribeContainer'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeContainerInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeContainerOutputSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901GetContainerPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.GetContainerPolicy',
  description:
    'Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.',
  operationId: 'GetContainerPolicy',
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
        .literal('MediaStore_20170901.GetContainerPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.GetContainerPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetContainerPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContainerPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901GetCorsPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.GetCorsPolicy',
  description:
    '<p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>',
  operationId: 'GetCorsPolicy',
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
        .literal('MediaStore_20170901.GetCorsPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.GetCorsPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetCorsPolicyInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCorsPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'CorsPolicyNotFoundException',
      content: { 'application/json': { schema: CorsPolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901GetLifecyclePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy',
  description: 'Retrieves the object lifecycle policy that is assigned to a container.',
  operationId: 'GetLifecyclePolicy',
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
        .literal('MediaStore_20170901.GetLifecyclePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.GetLifecyclePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetLifecyclePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLifecyclePolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901GetMetricPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.GetMetricPolicy',
  description: 'Returns the metric policy for the specified container. ',
  operationId: 'GetMetricPolicy',
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
        .literal('MediaStore_20170901.GetMetricPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.GetMetricPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetMetricPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMetricPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'PolicyNotFoundException',
      content: { 'application/json': { schema: PolicyNotFoundExceptionSchema } },
    },
    482: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    483: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901ListContainersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.ListContainers',
  description:
    '<p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>',
  operationId: 'ListContainers',
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
        .literal('MediaStore_20170901.ListContainers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.ListContainers'] },
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
      content: { 'application/json': { schema: ListContainersInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContainersOutputSchema } },
    },
    480: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.ListTagsForResource',
  description: 'Returns a list of the tags assigned to the specified container. ',
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
        .literal('MediaStore_20170901.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.ListTagsForResource'] },
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
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901PutContainerPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.PutContainerPolicy',
  description:
    '<p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>',
  operationId: 'PutContainerPolicy',
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
        .literal('MediaStore_20170901.PutContainerPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.PutContainerPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutContainerPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutContainerPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901PutCorsPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.PutCorsPolicy',
  description:
    '<p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser\'s XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>',
  operationId: 'PutCorsPolicy',
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
        .literal('MediaStore_20170901.PutCorsPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.PutCorsPolicy'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PutCorsPolicyInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutCorsPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    481: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901PutLifecyclePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy',
  description:
    '<p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>',
  operationId: 'PutLifecyclePolicy',
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
        .literal('MediaStore_20170901.PutLifecyclePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.PutLifecyclePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutLifecyclePolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLifecyclePolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901PutMetricPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.PutMetricPolicy',
  description:
    'The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.',
  operationId: 'PutMetricPolicy',
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
        .literal('MediaStore_20170901.PutMetricPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.PutMetricPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutMetricPolicyInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutMetricPolicyOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901StartAccessLoggingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.StartAccessLogging',
  description:
    'Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.',
  operationId: 'StartAccessLogging',
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
        .literal('MediaStore_20170901.StartAccessLogging')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.StartAccessLogging'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartAccessLoggingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartAccessLoggingOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901StopAccessLoggingRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.StopAccessLogging',
  description:
    'Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.',
  operationId: 'StopAccessLogging',
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
        .literal('MediaStore_20170901.StopAccessLogging')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.StopAccessLogging'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopAccessLoggingInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopAccessLoggingOutputSchema } },
    },
    480: {
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.TagResource',
  description:
    'Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.',
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
        .literal('MediaStore_20170901.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.TagResource'] },
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
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postXAmzTargetMediaStore20170901UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MediaStore_20170901.UntagResource',
  description:
    'Removes tags from the specified container. You can specify one or more tags to remove. ',
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
        .literal('MediaStore_20170901.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MediaStore_20170901.UntagResource'] },
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
      description: 'ContainerInUseException',
      content: { 'application/json': { schema: ContainerInUseExceptionSchema } },
    },
    481: {
      description: 'ContainerNotFoundException',
      content: { 'application/json': { schema: ContainerNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
  },
})
