import { createRoute, z } from '@hono/zod-openapi'

const ScalingPlanVersionSchema = z.int().openapi('ScalingPlanVersion')

const CreateScalingPlanResponseSchema = z
  .object({
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the scaling plan. This value is always <code>1</code>. Currently, you cannot have multiple scaling plan versions.',
        }),
    ),
  })
  .openapi({ required: ['ScalingPlanVersion'] })
  .openapi('CreateScalingPlanResponse')

const ScalingPlanNameSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ pattern: '[\\p{Print}&&[^|:/]]+' })
  .openapi('ScalingPlanName')

const XmlStringSchema = z
  .string()
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlString')

const XmlStringMaxLen128Schema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlStringMaxLen128')

const XmlStringMaxLen256Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlStringMaxLen256')

const TagValuesSchema = z.array(XmlStringMaxLen256Schema).openapi('TagValues')

const TagFilterSchema = z
  .object({
    Key: XmlStringMaxLen128Schema.and(
      z.any().openapi({ description: 'The tag key.' }),
    ).exactOptional(),
    Values: TagValuesSchema.and(
      z.any().openapi({ description: 'The tag values (0 to 20).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a tag.', required: [] })
  .openapi('TagFilter')

const TagFiltersSchema = z.array(TagFilterSchema).openapi('TagFilters')

const ApplicationSourceSchema = z
  .object({
    CloudFormationStackARN: XmlStringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of a AWS CloudFormation stack.' }),
    ).exactOptional(),
    TagFilters: TagFiltersSchema.and(
      z.any().openapi({ description: 'A set of tags (up to 50).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an application source.', required: [] })
  .openapi('ApplicationSource')

const ServiceNamespaceSchema = z
  .enum(['autoscaling', 'ecs', 'ec2', 'rds', 'dynamodb'])
  .openapi('ServiceNamespace')

const ResourceIdMaxLen1600Schema = z
  .string()
  .min(1)
  .max(1600)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('ResourceIdMaxLen1600')

const ScalableDimensionSchema = z
  .enum([
    'autoscaling:autoScalingGroup:DesiredCapacity',
    'ecs:service:DesiredCount',
    'ec2:spot-fleet-request:TargetCapacity',
    'rds:cluster:ReadReplicaCount',
    'dynamodb:table:ReadCapacityUnits',
    'dynamodb:table:WriteCapacityUnits',
    'dynamodb:index:ReadCapacityUnits',
    'dynamodb:index:WriteCapacityUnits',
  ])
  .openapi('ScalableDimension')

const ResourceCapacitySchema = z.int().openapi('ResourceCapacity')

const ScalingMetricTypeSchema = z
  .enum([
    'ASGAverageCPUUtilization',
    'ASGAverageNetworkIn',
    'ASGAverageNetworkOut',
    'DynamoDBReadCapacityUtilization',
    'DynamoDBWriteCapacityUtilization',
    'ECSServiceAverageCPUUtilization',
    'ECSServiceAverageMemoryUtilization',
    'ALBRequestCountPerTarget',
    'RDSReaderAverageCPUUtilization',
    'RDSReaderAverageDatabaseConnections',
    'EC2SpotFleetRequestAverageCPUUtilization',
    'EC2SpotFleetRequestAverageNetworkIn',
    'EC2SpotFleetRequestAverageNetworkOut',
  ])
  .openapi('ScalingMetricType')

const ResourceLabelSchema = z.string().min(1).max(1023).openapi('ResourceLabel')

const PredefinedScalingMetricSpecificationSchema = z
  .object({
    PredefinedScalingMetricType: ScalingMetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.',
        }),
    ),
    ResourceLabel: ResourceLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.</p> <p>You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul> <p>This is an example: app/EC2Co-EcsEl-1TKLTMITMM0EO/f37c06a68c1748aa/targetgroup/EC2Co-Defau-LDNM7Q3ZH1ZN/6d4ea56ca2d6a18d.</p> <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PredefinedScalingMetricType'],
    description:
      'Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.',
  })
  .openapi('PredefinedScalingMetricSpecification')

const MetricNameSchema = z.string().openapi('MetricName')

const MetricNamespaceSchema = z.string().openapi('MetricNamespace')

const MetricDimensionNameSchema = z.string().openapi('MetricDimensionName')

const MetricDimensionValueSchema = z.string().openapi('MetricDimensionValue')

const MetricDimensionSchema = z
  .object({
    Name: MetricDimensionNameSchema.and(
      z.any().openapi({ description: 'The name of the dimension.' }),
    ),
    Value: MetricDimensionValueSchema.and(
      z.any().openapi({ description: 'The value of the dimension.' }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description: 'Represents a dimension for a customized metric.',
  })
  .openapi('MetricDimension')

const MetricDimensionsSchema = z.array(MetricDimensionSchema).openapi('MetricDimensions')

const MetricStatisticSchema = z
  .enum(['Average', 'Minimum', 'Maximum', 'SampleCount', 'Sum'])
  .openapi('MetricStatistic')

const MetricUnitSchema = z.string().openapi('MetricUnit')

const CustomizedScalingMetricSpecificationSchema = z
  .object({
    MetricName: MetricNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
    Namespace: MetricNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ),
    Dimensions: MetricDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized scaling metric specification.</p>',
        }),
    ).exactOptional(),
    Statistic: MetricStatisticSchema.and(
      z.any().openapi({ description: 'The statistic of the metric.' }),
    ),
    Unit: MetricUnitSchema.and(
      z.any().openapi({ description: 'The unit of the metric. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MetricName', 'Namespace', 'Statistic'],
    description:
      '<p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>',
  })
  .openapi('CustomizedScalingMetricSpecification')

const MetricScaleSchema = z.float64().openapi('MetricScale')

const DisableScaleInSchema = z.boolean().openapi('DisableScaleIn')

const CooldownSchema = z.int().openapi('Cooldown')

const TargetTrackingConfigurationSchema = z
  .object({
    PredefinedScalingMetricSpecification: PredefinedScalingMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A predefined metric. You can specify either a predefined metric or a customized metric.',
        }),
    ).exactOptional(),
    CustomizedScalingMetricSpecification: CustomizedScalingMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customized metric. You can specify either a predefined metric or a customized metric. ',
        }),
    ).exactOptional(),
    TargetValue: MetricScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360.",
        }),
    ),
    DisableScaleIn: DisableScaleInSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Indicates whether scale in by the target tracking scaling policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. </p> <p>The default value is <code>false</code>.</p>",
        }),
    ).exactOptional(),
    ScaleOutCooldown: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, to wait for a previous scale-out activity to take effect. This property is not used if the scalable resource is an Auto Scaling group.</p> <p>With the <i>scale-out cooldown period</i>, the intention is to continuously (but not excessively) scale out. After Auto Scaling successfully scales out using a target tracking scaling policy, it starts to calculate the cooldown time. The scaling policy won't increase the desired capacity again unless either a larger scale out is triggered or the cooldown period ends.</p>",
        }),
    ).exactOptional(),
    ScaleInCooldown: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. This property is not used if the scalable resource is an Auto Scaling group.</p> <p>With the <i>scale-in cooldown period</i>, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the scale-in cooldown period, Auto Scaling scales out the target immediately. In this case, the scale-in cooldown period stops and doesn't complete.</p>",
        }),
    ).exactOptional(),
    EstimatedInstanceWarmup: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            'The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetValue'],
    description:
      'Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.',
  })
  .openapi('TargetTrackingConfiguration')

const TargetTrackingConfigurationsSchema = z
  .array(TargetTrackingConfigurationSchema)
  .openapi('TargetTrackingConfigurations')

const LoadMetricTypeSchema = z
  .enum([
    'ASGTotalCPUUtilization',
    'ASGTotalNetworkIn',
    'ASGTotalNetworkOut',
    'ALBTargetGroupRequestCount',
  ])
  .openapi('LoadMetricType')

const PredefinedLoadMetricSpecificationSchema = z
  .object({
    PredefinedLoadMetricType: LoadMetricTypeSchema.and(
      z.any().openapi({ description: 'The metric type.' }),
    ),
    ResourceLabel: ResourceLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is <code>ALBTargetGroupRequestCount</code> and there is a target group for an Application Load Balancer attached to the Auto Scaling group.</p> <p>You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul> <p>This is an example: app/EC2Co-EcsEl-1TKLTMITMM0EO/f37c06a68c1748aa/targetgroup/EC2Co-Defau-LDNM7Q3ZH1ZN/6d4ea56ca2d6a18d.</p> <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PredefinedLoadMetricType'],
    description:
      '<p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>',
  })
  .openapi('PredefinedLoadMetricSpecification')

const CustomizedLoadMetricSpecificationSchema = z
  .object({
    MetricName: MetricNameSchema.and(z.any().openapi({ description: 'The name of the metric.' })),
    Namespace: MetricNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ),
    Dimensions: MetricDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dimensions of the metric.</p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.</p>',
        }),
    ).exactOptional(),
    Statistic: MetricStatisticSchema.and(
      z
        .any()
        .openapi({
          description: 'The statistic of the metric. The only valid value is <code>Sum</code>.',
        }),
    ),
    Unit: MetricUnitSchema.and(
      z.any().openapi({ description: 'The unit of the metric.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MetricName', 'Namespace', 'Statistic'],
    description:
      '<p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group. </p> <p>If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p>',
  })
  .openapi('CustomizedLoadMetricSpecification')

const ScheduledActionBufferTimeSchema = z.int().min(0).openapi('ScheduledActionBufferTime')

const PredictiveScalingMaxCapacityBehaviorSchema = z
  .enum([
    'SetForecastCapacityToMaxCapacity',
    'SetMaxCapacityToForecastCapacity',
    'SetMaxCapacityAboveForecastCapacity',
  ])
  .openapi('PredictiveScalingMaxCapacityBehavior')

const PredictiveScalingModeSchema = z
  .enum(['ForecastAndScale', 'ForecastOnly'])
  .openapi('PredictiveScalingMode')

const ScalingPolicyUpdateBehaviorSchema = z
  .enum(['KeepExternalPolicies', 'ReplaceExternalPolicies'])
  .openapi('ScalingPolicyUpdateBehavior')

const DisableDynamicScalingSchema = z.boolean().openapi('DisableDynamicScaling')

const ScalingInstructionSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the AWS service.' }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension associated with the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> </ul>',
        }),
    ),
    MinCapacity: ResourceCapacitySchema.and(
      z.any().openapi({ description: 'The minimum capacity of the resource. ' }),
    ),
    MaxCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for <b>PredictiveScalingMaxCapacityBehavior</b>. ',
        }),
    ),
    TargetTrackingConfigurations: TargetTrackingConfigurationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target tracking configurations (up to 10). Each of these structures must specify a unique scaling metric and a target value for the metric. ',
        }),
    ),
    PredefinedLoadMetricSpecification: PredefinedLoadMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The predefined load metric to use for predictive scaling. This parameter or a <b>CustomizedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. ',
        }),
    ).exactOptional(),
    CustomizedLoadMetricSpecification: CustomizedLoadMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customized load metric to use for predictive scaling. This parameter or a <b>PredefinedLoadMetricSpecification</b> is required when configuring predictive scaling, and cannot be used otherwise. ',
        }),
    ).exactOptional(),
    ScheduledActionBufferTime: ScheduledActionBufferTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete. </p> <p>The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. </p> <p>Only valid when configuring predictive scaling. </p>',
        }),
    ).exactOptional(),
    PredictiveScalingMaxCapacityBehavior: PredictiveScalingMaxCapacityBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is <code>SetForecastCapacityToMaxCapacity</code>.</p> <p>The following are possible values:</p> <ul> <li> <p> <code>SetForecastCapacityToMaxCapacity</code> - AWS Auto Scaling cannot scale resource capacity higher than the maximum capacity. The maximum capacity is enforced as a hard limit. </p> </li> <li> <p> <code>SetMaxCapacityToForecastCapacity</code> - AWS Auto Scaling may scale resource capacity higher than the maximum capacity to equal but not exceed forecast capacity.</p> </li> <li> <p> <code>SetMaxCapacityAboveForecastCapacity</code> - AWS Auto Scaling may scale resource capacity higher than the maximum capacity by a specified buffer value. The intention is to give the target tracking scaling policy extra capacity if unexpected traffic occurs. </p> </li> </ul> <p>Only valid when configuring predictive scaling.</p>',
        }),
    ).exactOptional(),
    PredictiveScalingMaxCapacityBuffer: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.</p> <p>Only valid when configuring predictive scaling. Required if the <b>PredictiveScalingMaxCapacityBehavior</b> is set to <code>SetMaxCapacityAboveForecastCapacity</code>, and cannot be used otherwise.</p> <p>The range is 1-100.</p>',
        }),
    ).exactOptional(),
    PredictiveScalingMode: PredictiveScalingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The predictive scaling mode. The default value is <code>ForecastAndScale</code>. Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions based on the capacity forecast. ',
        }),
    ).exactOptional(),
    ScalingPolicyUpdateBehavior: ScalingPolicyUpdateBehaviorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Controls whether a resource's externally created scaling policies are kept or replaced. </p> <p>The default value is <code>KeepExternalPolicies</code>. If the parameter is set to <code>ReplaceExternalPolicies</code>, any scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created. </p> <p>Only valid when configuring dynamic scaling. </p> <p>Condition: The number of existing policies to be replaced must be less than or equal to 50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies and does not create new ones.</p>",
        }),
    ).exactOptional(),
    DisableDynamicScaling: DisableDynamicScalingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. </p> <p>The default is enabled (<code>false</code>). </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'MinCapacity',
      'MaxCapacity',
      'TargetTrackingConfigurations',
    ],
    description:
      '<p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>',
  })
  .openapi('ScalingInstruction')

const ScalingInstructionsSchema = z.array(ScalingInstructionSchema).openapi('ScalingInstructions')

const CreateScalingPlanRequestSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.',
        }),
    ),
    ApplicationSource: ApplicationSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A CloudFormation stack or set of tags. You can create one scaling plan per application source.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ApplicationSource.html">ApplicationSource</a> in the <i>AWS Auto Scaling API Reference</i>.</p>',
        }),
    ),
    ScalingInstructions: ScalingInstructionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling instructions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html">ScalingInstruction</a> in the <i>AWS Auto Scaling API Reference</i>.</p>',
        }),
    ),
  })
  .openapi({
    required: ['ScalingPlanName', 'ApplicationSource', 'ScalingInstructions'],
    title: 'CreateScalingPlanRequest',
  })
  .openapi('CreateScalingPlanRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ConcurrentUpdateExceptionSchema = z.any().openapi('ConcurrentUpdateException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const DeleteScalingPlanResponseSchema = z.object({}).openapi('DeleteScalingPlanResponse')

const DeleteScalingPlanRequestSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the scaling plan. Currently, the only valid value is <code>1</code>.',
        }),
    ),
  })
  .openapi({
    required: ['ScalingPlanName', 'ScalingPlanVersion'],
    title: 'DeleteScalingPlanRequest',
  })
  .openapi('DeleteScalingPlanRequest')

const ObjectNotFoundExceptionSchema = z.any().openapi('ObjectNotFoundException')

const PolicyNameSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ pattern: '\\p{Print}+' })
  .openapi('PolicyName')

const PolicyTypeSchema = z.literal('TargetTrackingScaling').openapi('PolicyType')

const ScalingPolicySchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling policy.' }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z.any().openapi({ description: 'The type of scaling policy.' }),
    ),
    TargetTrackingConfiguration: TargetTrackingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target tracking scaling policy. Includes support for predefined or customized metrics.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyName', 'PolicyType'], description: 'Represents a scaling policy.' })
  .openapi('ScalingPolicy')

const ScalingPoliciesSchema = z.array(ScalingPolicySchema).openapi('ScalingPolicies')

const ScalingStatusCodeSchema = z
  .enum(['Inactive', 'PartiallyActive', 'Active'])
  .openapi('ScalingStatusCode')

const ScalingPlanResourceSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z.any().openapi({ description: 'The version number of the scaling plan.' }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the AWS service.' }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the resource. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>Auto Scaling group - The resource type is <code>autoScalingGroup</code> and the unique identifier is the name of the Auto Scaling group. Example: <code>autoScalingGroup/my-asg</code>.</p> </li> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet request - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the resource ID. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the resource ID. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension for the resource.</p> <ul> <li> <p> <code>autoscaling:autoScalingGroup:DesiredCapacity</code> - The desired capacity of an Auto Scaling group.</p> </li> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet request.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> </ul>',
        }),
    ),
    ScalingPolicies: ScalingPoliciesSchema.and(
      z.any().openapi({ description: 'The scaling policies.' }),
    ).exactOptional(),
    ScalingStatusCode: ScalingStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling status of the resource.</p> <ul> <li> <p> <code>Active</code> - The scaling configuration is active.</p> </li> <li> <p> <code>Inactive</code> - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information.</p> </li> <li> <p> <code>PartiallyActive</code> - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information.</p> </li> </ul>',
        }),
    ),
    ScalingStatusMessage: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A simple message about the current scaling status of the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ScalingPlanName',
      'ScalingPlanVersion',
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'ScalingStatusCode',
    ],
    description: 'Represents a scalable resource.',
  })
  .openapi('ScalingPlanResource')

const ScalingPlanResourcesSchema = z
  .array(ScalingPlanResourceSchema)
  .openapi('ScalingPlanResources')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeScalingPlanResourcesResponseSchema = z
  .object({
    ScalingPlanResources: ScalingPlanResourcesSchema.and(
      z.any().openapi({ description: 'Information about the scalable resources.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeScalingPlanResourcesResponse')

const MaxResultsSchema = z.int().openapi('MaxResults')

const DescribeScalingPlanResourcesRequestSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the scaling plan. Currently, the only valid value is <code>1</code>.',
        }),
    ),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of scalable resources to return. The value must be between 1 and 50. The default value is 50.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScalingPlanName', 'ScalingPlanVersion'],
    title: 'DescribeScalingPlanResourcesRequest',
  })
  .openapi('DescribeScalingPlanResourcesRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ScalingPlanStatusCodeSchema = z
  .enum([
    'Active',
    'ActiveWithProblems',
    'CreationInProgress',
    'CreationFailed',
    'DeletionInProgress',
    'DeletionFailed',
    'UpdateInProgress',
    'UpdateFailed',
  ])
  .openapi('ScalingPlanStatusCode')

const TimestampTypeSchema = z.iso.datetime({ offset: true }).openapi('TimestampType')

const ScalingPlanSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z.any().openapi({ description: 'The version number of the scaling plan.' }),
    ),
    ApplicationSource: ApplicationSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A CloudFormation stack or a set of tags. You can create one scaling plan per application source.',
        }),
    ),
    ScalingInstructions: ScalingInstructionsSchema.and(
      z.any().openapi({ description: 'The scaling instructions.' }),
    ),
    StatusCode: ScalingPlanStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the scaling plan.</p> <ul> <li> <p> <code>Active</code> - The scaling plan is active.</p> </li> <li> <p> <code>ActiveWithProblems</code> - The scaling plan is active, but the scaling configuration for one or more resources could not be applied.</p> </li> <li> <p> <code>CreationInProgress</code> - The scaling plan is being created.</p> </li> <li> <p> <code>CreationFailed</code> - The scaling plan could not be created.</p> </li> <li> <p> <code>DeletionInProgress</code> - The scaling plan is being deleted.</p> </li> <li> <p> <code>DeletionFailed</code> - The scaling plan could not be deleted.</p> </li> <li> <p> <code>UpdateInProgress</code> - The scaling plan is being updated.</p> </li> <li> <p> <code>UpdateFailed</code> - The scaling plan could not be updated.</p> </li> </ul>',
        }),
    ),
    StatusMessage: XmlStringSchema.and(
      z
        .any()
        .openapi({ description: 'A simple message about the current status of the scaling plan.' }),
    ).exactOptional(),
    StatusStartTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix time stamp when the scaling plan entered the current status.',
        }),
    ).exactOptional(),
    CreationTime: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The Unix time stamp when the scaling plan was created.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ScalingPlanName',
      'ScalingPlanVersion',
      'ApplicationSource',
      'ScalingInstructions',
      'StatusCode',
    ],
    description: 'Represents a scaling plan.',
  })
  .openapi('ScalingPlan')

const ScalingPlansSchema = z.array(ScalingPlanSchema).openapi('ScalingPlans')

const DescribeScalingPlansResponseSchema = z
  .object({
    ScalingPlans: ScalingPlansSchema.and(
      z.any().openapi({ description: 'Information about the scaling plans.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeScalingPlansResponse')

const ScalingPlanNamesSchema = z.array(ScalingPlanNameSchema).openapi('ScalingPlanNames')

const ApplicationSourcesSchema = z.array(ApplicationSourceSchema).openapi('ApplicationSources')

const DescribeScalingPlansRequestSchema = z
  .object({
    ScalingPlanNames: ScalingPlanNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names.',
        }),
    ).exactOptional(),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of the scaling plan. Currently, the only valid value is <code>1</code>.</p> <note> <p>If you specify a scaling plan version, you must also specify a scaling plan name.</p> </note>',
        }),
    ).exactOptional(),
    ApplicationSources: ApplicationSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeScalingPlansRequest', required: [] })
  .openapi('DescribeScalingPlansRequest')

const DatapointSchema = z
  .object({
    Timestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time stamp for the data point in UTC format.' }),
    ).exactOptional(),
    Value: MetricScaleSchema.and(
      z.any().openapi({ description: 'The value of the data point.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a single value in the forecast data used for predictive scaling.',
    required: [],
  })
  .openapi('Datapoint')

const DatapointsSchema = z.array(DatapointSchema).openapi('Datapoints')

const GetScalingPlanResourceForecastDataResponseSchema = z
  .object({
    Datapoints: DatapointsSchema.and(
      z.any().openapi({ description: 'The data points to return.' }),
    ),
  })
  .openapi({ required: ['Datapoints'] })
  .openapi('GetScalingPlanResourceForecastDataResponse')

const ForecastDataTypeSchema = z
  .enum([
    'CapacityForecast',
    'LoadForecast',
    'ScheduledActionMinCapacity',
    'ScheduledActionMaxCapacity',
  ])
  .openapi('ForecastDataType')

const GetScalingPlanResourceForecastDataRequestSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the scaling plan. Currently, the only valid value is <code>1</code>.',
        }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the AWS service. The only valid value is <code>autoscaling</code>. ',
        }),
    ),
    ResourceId: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the resource. This string consists of a prefix (<code>autoScalingGroup</code>) followed by the name of a specified Auto Scaling group (<code>my-asg</code>). Example: <code>autoScalingGroup/my-asg</code>. ',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The scalable dimension for the resource. The only valid value is <code>autoscaling:autoScalingGroup:DesiredCapacity</code>. ',
        }),
    ),
    ForecastDataType: ForecastDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of forecast data to get.</p> <ul> <li> <p> <code>LoadForecast</code>: The load metric forecast. </p> </li> <li> <p> <code>CapacityForecast</code>: The capacity forecast. </p> </li> <li> <p> <code>ScheduledActionMinCapacity</code>: The minimum capacity for each scheduled scaling action. This data is calculated as the larger of two values: the capacity forecast or the minimum capacity in the scaling instruction.</p> </li> <li> <p> <code>ScheduledActionMaxCapacity</code>: The maximum capacity for each scheduled scaling action. The calculation used is determined by the predictive scaling maximum capacity behavior setting in the scaling instruction.</p> </li> </ul>',
        }),
    ),
    StartTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive start time of the time range for the forecast data to get. The date and time can be at most 56 days before the current date and time. ',
        }),
    ),
    EndTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is seven days. </p> <p>Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. AWS Auto Scaling only issues forecasts for periods of two days in advance.</p>',
        }),
    ),
  })
  .openapi({
    required: [
      'ScalingPlanName',
      'ScalingPlanVersion',
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'ForecastDataType',
      'StartTime',
      'EndTime',
    ],
    title: 'GetScalingPlanResourceForecastDataRequest',
  })
  .openapi('GetScalingPlanResourceForecastDataRequest')

const UpdateScalingPlanResponseSchema = z.object({}).openapi('UpdateScalingPlanResponse')

const UpdateScalingPlanRequestSchema = z
  .object({
    ScalingPlanName: ScalingPlanNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling plan.' }),
    ),
    ScalingPlanVersion: ScalingPlanVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version number of the scaling plan. The only valid value is <code>1</code>. Currently, you cannot have multiple scaling plan versions.',
        }),
    ),
    ApplicationSource: ApplicationSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A CloudFormation stack or set of tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ApplicationSource.html">ApplicationSource</a> in the <i>AWS Auto Scaling API Reference</i>.</p>',
        }),
    ).exactOptional(),
    ScalingInstructions: ScalingInstructionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling instructions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html">ScalingInstruction</a> in the <i>AWS Auto Scaling API Reference</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ScalingPlanName', 'ScalingPlanVersion'],
    title: 'UpdateScalingPlanRequest',
  })
  .openapi('UpdateScalingPlanRequest')

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

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan',
    description: 'Creates a scaling plan. ',
    operationId: 'CreateScalingPlan',
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
          .literal('AnyScaleScalingPlannerFrontendService.CreateScalingPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.CreateScalingPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateScalingPlanRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateScalingPlanResponseSchema } },
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
        description: 'ConcurrentUpdateException',
        content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
      },
      483: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan',
    description:
      '<p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>',
    operationId: 'DeleteScalingPlan',
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
          .literal('AnyScaleScalingPlannerFrontendService.DeleteScalingPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteScalingPlanRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteScalingPlanResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ObjectNotFoundException',
        content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
      },
      482: {
        description: 'ConcurrentUpdateException',
        content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
      },
      483: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
    description: 'Describes the scalable resources in the specified scaling plan.',
    operationId: 'DescribeScalingPlanResources',
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
          .literal('AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeScalingPlanResourcesRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeScalingPlanResourcesResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'ConcurrentUpdateException',
        content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
      },
      483: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans',
    description: 'Describes one or more of your scaling plans.',
    operationId: 'DescribeScalingPlans',
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
          .literal('AnyScaleScalingPlannerFrontendService.DescribeScalingPlans')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeScalingPlansRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeScalingPlansResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'ConcurrentUpdateException',
        content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
      },
      483: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
    description:
      '<p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>',
    operationId: 'GetScalingPlanResourceForecastData',
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
          .literal('AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetScalingPlanResourceForecastDataRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetScalingPlanResourceForecastDataResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan',
    description:
      '<p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>',
    operationId: 'UpdateScalingPlan',
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
          .literal('AnyScaleScalingPlannerFrontendService.UpdateScalingPlan')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateScalingPlanRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateScalingPlanResponseSchema } },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'ConcurrentUpdateException',
        content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
      },
      482: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      483: {
        description: 'ObjectNotFoundException',
        content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
      },
    },
  })
