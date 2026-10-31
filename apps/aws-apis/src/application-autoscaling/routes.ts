import { createRoute, z } from '@hono/zod-openapi'

const DeleteScalingPolicyResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteScalingPolicyResponse')

const ResourceIdMaxLen1600Schema = z
  .string()
  .min(1)
  .max(1600)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('ResourceIdMaxLen1600')

const ServiceNamespaceSchema = z
  .enum([
    'ecs',
    'elasticmapreduce',
    'ec2',
    'appstream',
    'dynamodb',
    'rds',
    'sagemaker',
    'custom-resource',
    'comprehend',
    'lambda',
    'cassandra',
    'kafka',
    'elasticache',
    'neptune',
  ])
  .openapi('ServiceNamespace')

const ScalableDimensionSchema = z
  .enum([
    'ecs:service:DesiredCount',
    'ec2:spot-fleet-request:TargetCapacity',
    'elasticmapreduce:instancegroup:InstanceCount',
    'appstream:fleet:DesiredCapacity',
    'dynamodb:table:ReadCapacityUnits',
    'dynamodb:table:WriteCapacityUnits',
    'dynamodb:index:ReadCapacityUnits',
    'dynamodb:index:WriteCapacityUnits',
    'rds:cluster:ReadReplicaCount',
    'sagemaker:variant:DesiredInstanceCount',
    'custom-resource:ResourceType:Property',
    'comprehend:document-classifier-endpoint:DesiredInferenceUnits',
    'comprehend:entity-recognizer-endpoint:DesiredInferenceUnits',
    'lambda:function:ProvisionedConcurrency',
    'cassandra:table:ReadCapacityUnits',
    'cassandra:table:WriteCapacityUnits',
    'kafka:broker-storage:VolumeSize',
    'elasticache:replication-group:NodeGroups',
    'elasticache:replication-group:Replicas',
    'neptune:cluster:ReadReplicaCount',
  ])
  .openapi('ScalableDimension')

const DeleteScalingPolicyRequestSchema = z
  .object({
    PolicyName: ResourceIdMaxLen1600Schema.and(
      z.any().openapi({ description: 'The name of the scaling policy.' }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['PolicyName', 'ServiceNamespace', 'ResourceId', 'ScalableDimension'],
    title: 'DeleteScalingPolicyRequest',
  })
  .openapi('DeleteScalingPolicyRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ObjectNotFoundExceptionSchema = z.any().openapi('ObjectNotFoundException')

const ConcurrentUpdateExceptionSchema = z.any().openapi('ConcurrentUpdateException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const DeleteScheduledActionResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeleteScheduledActionResponse')

const DeleteScheduledActionRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ScheduledActionName: ResourceIdMaxLen1600Schema.and(
      z.any().openapi({ description: 'The name of the scheduled action.' }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ServiceNamespace', 'ScheduledActionName', 'ResourceId', 'ScalableDimension'],
    title: 'DeleteScheduledActionRequest',
  })
  .openapi('DeleteScheduledActionRequest')

const DeregisterScalableTargetResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('DeregisterScalableTargetResponse')

const DeregisterScalableTargetRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension'],
    title: 'DeregisterScalableTargetRequest',
  })
  .openapi('DeregisterScalableTargetRequest')

const ResourceCapacitySchema = z.int().openapi('ResourceCapacity')

const TimestampTypeSchema = z.iso.datetime({ offset: true }).openapi('TimestampType')

const ScalingSuspendedSchema = z.boolean().openapi('ScalingSuspended')

const SuspendedStateSchema = z
  .object({
    DynamicScalingInSuspended: ScalingSuspendedSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is <code>false</code>. ",
        }),
    ).exactOptional(),
    DynamicScalingOutSuspended: ScalingSuspendedSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is <code>false</code>. ",
        }),
    ).exactOptional(),
    ScheduledScalingSuspended: ScalingSuspendedSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether scheduled scaling is suspended. Set the value to <code>true</code> if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is <code>false</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies whether the scaling activities for a scalable target are in a suspended state. ',
    required: [],
  })
  .openapi('SuspendedState')

const XmlStringSchema = z
  .string()
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('XmlString')

const ScalableTargetSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource, or a <code>custom-resource</code>.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    MinCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum value to scale to in response to a scale-in activity.',
        }),
    ),
    MaxCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum value to scale to in response to a scale-out activity.',
        }),
    ),
    RoleARN: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf.',
        }),
    ),
    CreationTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp for when the scalable target was created.' }),
    ),
    SuspendedState: SuspendedStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the scaling activities for a scalable target are in a suspended state.',
        }),
    ).exactOptional(),
    ScalableTargetARN: XmlStringSchema.and(
      z.any().openapi({ description: 'The ARN of the scalable target.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'MinCapacity',
      'MaxCapacity',
      'RoleARN',
      'CreationTime',
    ],
    description: 'Represents a scalable target.',
  })
  .openapi('ScalableTarget')

const ScalableTargetsSchema = z.array(ScalableTargetSchema).openapi('ScalableTargets')

const DescribeScalableTargetsResponseSchema = z
  .object({
    ScalableTargets: ScalableTargetsSchema.and(
      z.any().openapi({ description: 'The scalable targets that match the request parameters.' }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ScalableTargets: [
        {
          CreationTime: '2019-05-06T11:21:46.199Z',
          MaxCapacity: 10,
          MinCapacity: 1,
          ResourceId: 'service/default/web-app',
          RoleARN:
            'arn:aws:iam::012345678910:role/aws-service-role/ecs.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_ECSService',
          ScalableDimension: 'ecs:service:DesiredCount',
          ServiceNamespace: 'ecs',
          SuspendedState: {
            DynamicScalingInSuspended: false,
            DynamicScalingOutSuspended: false,
            ScheduledScalingSuspended: false,
          },
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeScalableTargetsResponse')

const ResourceIdsMaxLen1600Schema = z
  .array(ResourceIdMaxLen1600Schema)
  .max(50)
  .openapi('ResourceIdsMaxLen1600')

const MaxResultsSchema = z.int().openapi('MaxResults')

const DescribeScalableTargetsRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceIds: ResourceIdsMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>',
        }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceNamespace'], title: 'DescribeScalableTargetsRequest' })
  .openapi('DescribeScalableTargetsRequest')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ResourceIdSchema = z
  .string()
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('ResourceId')

const ScalingActivityStatusCodeSchema = z
  .enum(['Pending', 'InProgress', 'Successful', 'Overridden', 'Unfulfilled', 'Failed'])
  .openapi('ScalingActivityStatusCode')

const NotScaledReasonSchema = z
  .object({
    Code: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A code that represents the reason for not scaling.</p> <p>Valid values:</p> <ul> <li> <p>AutoScalingAnticipatedFlapping</p> </li> <li> <p>TargetServicePutResourceAsUnscalable</p> </li> <li> <p>AlreadyAtMaxCapacity</p> </li> <li> <p>AlreadyAtMinCapacity</p> </li> <li> <p>AlreadyAtDesiredCapacity</p> </li> </ul>',
        }),
    ),
    MaxCapacity: ResourceCapacitySchema.and(
      z.any().openapi({ description: 'The maximum capacity.' }),
    ).exactOptional(),
    MinCapacity: ResourceCapacitySchema.and(
      z.any().openapi({ description: 'The minimum capacity.' }),
    ).exactOptional(),
    CurrentCapacity: ResourceCapacitySchema.and(
      z.any().openapi({ description: 'The current capacity.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Code'],
    description:
      'Describes the reason for an activity that isn\'t scaled (<i>not scaled activity</i>), in machine-readable format. For help interpreting the not scaled reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.',
  })
  .openapi('NotScaledReason')

const NotScaledReasonsSchema = z.array(NotScaledReasonSchema).openapi('NotScaledReasons')

const ScalingActivitySchema = z
  .object({
    ActivityId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The unique identifier of the scaling activity.' }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource, or a <code>custom-resource</code>.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    Description: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A simple description of what action the scaling activity intends to accomplish.',
        }),
    ),
    Cause: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A simple description of what caused the scaling activity to happen.',
        }),
    ),
    StartTime: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The Unix timestamp for when the scaling activity began.' }),
    ),
    EndTime: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The Unix timestamp for when the scaling activity ended.' }),
    ).exactOptional(),
    StatusCode: ScalingActivityStatusCodeSchema.and(
      z.any().openapi({ description: 'Indicates the status of the scaling activity.' }),
    ),
    StatusMessage: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A simple message about the current status of the scaling activity.',
        }),
    ).exactOptional(),
    Details: XmlStringSchema.and(
      z.any().openapi({ description: 'The details about the scaling activity.' }),
    ).exactOptional(),
    NotScaledReasons: NotScaledReasonsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Machine-readable data that describes the reason for a not scaled activity. Only available when <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html">DescribeScalingActivities</a> includes not scaled activities.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ActivityId',
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'Description',
      'Cause',
      'StartTime',
      'StatusCode',
    ],
    description: 'Represents a scaling activity.',
  })
  .openapi('ScalingActivity')

const ScalingActivitiesSchema = z.array(ScalingActivitySchema).openapi('ScalingActivities')

const DescribeScalingActivitiesResponseSchema = z
  .object({
    ScalingActivities: ScalingActivitiesSchema.and(
      z.any().openapi({ description: 'A list of scaling activity objects.' }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ScalingActivities: [
        {
          ActivityId: 'e6c5f7d1-dbbb-4a3f-89b2-51f33e766399',
          Cause:
            'monitor alarm web-app-cpu-lt-25 in state ALARM triggered policy web-app-cpu-lt-25',
          Description: 'Setting desired count to 1.',
          EndTime: '2019-05-06T16:04:32.111Z',
          ResourceId: 'service/default/web-app',
          ScalableDimension: 'ecs:service:DesiredCount',
          ServiceNamespace: 'ecs',
          StartTime: '2019-05-06T16:03:58.171Z',
          StatusCode: 'Successful',
          StatusMessage:
            'Successfully set desired count to 1. Change successfully fulfilled by ecs.',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeScalingActivitiesResponse')

const IncludeNotScaledActivitiesSchema = z.boolean().openapi('IncludeNotScaledActivities')

const DescribeScalingActivitiesRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling activity. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of scalable targets. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>',
        }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
    IncludeNotScaledActivities: IncludeNotScaledActivitiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to include activities that aren\'t scaled (<i>not scaled activities</i>) in the response. Not scaled activities are activities that aren\'t completed or started for various reasons, such as preventing infinite scaling loops. For help interpreting the not scaled reason details in the response, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceNamespace'], title: 'DescribeScalingActivitiesRequest' })
  .openapi('DescribeScalingActivitiesRequest')

const PolicyNameSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ pattern: '\\p{Print}+' })
  .openapi('PolicyName')

const PolicyTypeSchema = z.enum(['StepScaling', 'TargetTrackingScaling']).openapi('PolicyType')

const AdjustmentTypeSchema = z
  .enum(['ChangeInCapacity', 'PercentChangeInCapacity', 'ExactCapacity'])
  .openapi('AdjustmentType')

const MetricScaleSchema = z.float64().openapi('MetricScale')

const ScalingAdjustmentSchema = z.int().openapi('ScalingAdjustment')

const StepAdjustmentSchema = z
  .object({
    MetricIntervalLowerBound: MetricScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            "The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it's exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.",
        }),
    ).exactOptional(),
    MetricIntervalUpperBound: MetricScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it's inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.</p> <p>The upper bound must be greater than the lower bound.</p>",
        }),
    ).exactOptional(),
    ScalingAdjustment: ScalingAdjustmentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value.',
        }),
    ),
  })
  .openapi({
    required: ['ScalingAdjustment'],
    description:
      "<p>Represents a step adjustment for a <a href=\"https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html\">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of <code>0</code> and an upper bound of <code>10</code>.</p> </li> <li> <p>To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of <code>-10</code> and an upper bound of <code>0</code>.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul>",
  })
  .openapi('StepAdjustment')

const StepAdjustmentsSchema = z.array(StepAdjustmentSchema).openapi('StepAdjustments')

const MinAdjustmentMagnitudeSchema = z.int().openapi('MinAdjustmentMagnitude')

const CooldownSchema = z.int().openapi('Cooldown')

const MetricAggregationTypeSchema = z
  .enum(['Average', 'Minimum', 'Maximum'])
  .openapi('MetricAggregationType')

const StepScalingPolicyConfigurationSchema = z
  .object({
    AdjustmentType: AdjustmentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how the <code>ScalingAdjustment</code> value in a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepAdjustment.html">StepAdjustment</a> is interpreted (for example, an absolute number or a percentage). The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>. </p> <p> <code>AdjustmentType</code> is required if you are adding a new step scaling policy configuration.</p>',
        }),
    ).exactOptional(),
    StepAdjustments: StepAdjustmentsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p> <p>At least one step adjustment is required if you are adding a new step scaling policy configuration.</p>',
        }),
    ).exactOptional(),
    MinAdjustmentMagnitude: MinAdjustmentMagnitudeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minimum value to scale by when the adjustment type is <code>PercentChangeInCapacity</code>. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Application Auto Scaling scales out the service by 2 tasks.',
        }),
    ).exactOptional(),
    Cooldown: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, to wait for a previous scaling activity to take effect. </p> <p>With scale-out policies, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a step scaling policy, it starts to calculate the cooldown time. The scaling policy won't increase the desired capacity again unless either a larger scale out is triggered or the cooldown period ends. While the cooldown period is in effect, capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity. For example, when an alarm triggers a step scaling policy to increase the capacity by 2, the scaling activity completes successfully, and a cooldown period starts. If the alarm triggers again during the cooldown period but at a more aggressive step adjustment of 3, the previous increase of 2 is considered part of the current capacity. Therefore, only 1 is added to the capacity.</p> <p>With scale-in policies, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the cooldown period after a scale-in activity, Application Auto Scaling scales out the target immediately. In this case, the cooldown period for the scale-in activity stops and doesn't complete.</p> <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:</p> <ul> <li> <p>AppStream 2.0 fleets</p> </li> <li> <p>Aurora DB clusters</p> </li> <li> <p>ECS services</p> </li> <li> <p>EMR clusters</p> </li> <li> <p> Neptune clusters</p> </li> <li> <p>SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets</p> </li> <li> <p>Custom resources</p> </li> </ul> <p>For all other scalable targets, the default value is 0:</p> <ul> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>DynamoDB tables and global secondary indexes</p> </li> <li> <p>Amazon Keyspaces tables</p> </li> <li> <p>Lambda provisioned concurrency</p> </li> <li> <p>Amazon MSK broker storage</p> </li> </ul>",
        }),
    ).exactOptional(),
    MetricAggregationType: MetricAggregationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregation type for the CloudWatch metrics. Valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a step scaling policy configuration to use with Application Auto Scaling.',
    required: [],
  })
  .openapi('StepScalingPolicyConfiguration')

const MetricTypeSchema = z
  .enum([
    'DynamoDBReadCapacityUtilization',
    'DynamoDBWriteCapacityUtilization',
    'ALBRequestCountPerTarget',
    'RDSReaderAverageCPUUtilization',
    'RDSReaderAverageDatabaseConnections',
    'EC2SpotFleetRequestAverageCPUUtilization',
    'EC2SpotFleetRequestAverageNetworkIn',
    'EC2SpotFleetRequestAverageNetworkOut',
    'SageMakerVariantInvocationsPerInstance',
    'ECSServiceAverageCPUUtilization',
    'ECSServiceAverageMemoryUtilization',
    'AppStreamAverageCapacityUtilization',
    'ComprehendInferenceUtilization',
    'LambdaProvisionedConcurrencyUtilization',
    'CassandraReadCapacityUtilization',
    'CassandraWriteCapacityUtilization',
    'KafkaBrokerStorageUtilization',
    'ElastiCachePrimaryEngineCPUUtilization',
    'ElastiCacheReplicaEngineCPUUtilization',
    'ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage',
    'NeptuneReaderAverageCPUUtilization',
  ])
  .openapi('MetricType')

const ResourceLabelSchema = z.string().min(1).max(1023).openapi('ResourceLabel')

const PredefinedMetricSpecificationSchema = z
  .object({
    PredefinedMetricType: MetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric type. The <code>ALBRequestCountPerTarget</code> metric type applies only to Spot Fleets and ECS services.',
        }),
    ),
    ResourceLabel: ResourceLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a target group attached to the Spot Fleet or ECS service.</p> <p>You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:</p> <p> <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p> <p>Where:</p> <ul> <li> <p>app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN</p> </li> <li> <p>targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.</p> </li> </ul> <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PredefinedMetricType'],
    description:
      '<p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you\'re using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  })
  .openapi('PredefinedMetricSpecification')

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
    description: 'Describes the dimension names and values associated with a metric.',
  })
  .openapi('MetricDimension')

const MetricDimensionsSchema = z.array(MetricDimensionSchema).openapi('MetricDimensions')

const MetricStatisticSchema = z
  .enum(['Average', 'Minimum', 'Maximum', 'SampleCount', 'Sum'])
  .openapi('MetricStatistic')

const MetricUnitSchema = z.string().openapi('MetricUnit')

const ExpressionSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('Expression')

const IdSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('Id')

const TargetTrackingMetricDimensionNameSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TargetTrackingMetricDimensionName')

const TargetTrackingMetricDimensionValueSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TargetTrackingMetricDimensionValue')

const TargetTrackingMetricDimensionSchema = z
  .object({
    Name: TargetTrackingMetricDimensionNameSchema.and(
      z.any().openapi({ description: 'The name of the dimension.' }),
    ),
    Value: TargetTrackingMetricDimensionValueSchema.and(
      z.any().openapi({ description: 'The value of the dimension.' }),
    ),
  })
  .openapi({ required: ['Name', 'Value'], description: 'Describes the dimension of a metric.' })
  .openapi('TargetTrackingMetricDimension')

const TargetTrackingMetricDimensionsSchema = z
  .array(TargetTrackingMetricDimensionSchema)
  .openapi('TargetTrackingMetricDimensions')

const TargetTrackingMetricNameSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TargetTrackingMetricName')

const TargetTrackingMetricNamespaceSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TargetTrackingMetricNamespace')

const TargetTrackingMetricSchema = z
  .object({
    Dimensions: TargetTrackingMetricDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dimensions for the metric. For the list of available dimensions, see the Amazon Web Services documentation available from the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.</p>',
        }),
    ).exactOptional(),
    MetricName: TargetTrackingMetricNameSchema.and(
      z.any().openapi({ description: 'The name of the metric.' }),
    ).exactOptional(),
    Namespace: TargetTrackingMetricNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the metric. For more information, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a specific metric.</p> <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p>',
    required: [],
  })
  .openapi('TargetTrackingMetric')

const TargetTrackingMetricUnitSchema = z
  .string()
  .min(1)
  .max(1023)
  .openapi({
    'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\r\\n\\t]*',
  })
  .openapi('TargetTrackingMetricUnit')

const TargetTrackingMetricStatSchema = z
  .object({
    Metric: TargetTrackingMetricSchema.and(
      z
        .any()
        .openapi({
          description:
            'The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that is returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.',
        }),
    ),
    Stat: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>The most commonly used metric for scaling is <code>Average</code>.</p>',
        }),
    ),
    Unit: TargetTrackingMetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a> data type in the <i>Amazon CloudWatch API Reference</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Metric', 'Stat'],
    description:
      '<p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>',
  })
  .openapi('TargetTrackingMetricStat')

const ReturnDataSchema = z.boolean().openapi('ReturnData')

const TargetTrackingMetricDataQuerySchema = z
  .object({
    Expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the <code>Id</code> of the other metrics to refer to those metrics, and can also use the <code>Id</code> of other expressions to use the result of those expressions. </p> <p>Conditional: Within each <code>TargetTrackingMetricDataQuery</code> object, you must specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</p>',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A short name that identifies the object's results in the response. This name must be unique among all <code>MetricDataQuery</code> objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter. ",
        }),
    ),
    Label: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.',
        }),
    ).exactOptional(),
    MetricStat: TargetTrackingMetricStatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the metric data to return.</p> <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</p>',
        }),
    ).exactOptional(),
    ReturnData: ReturnDataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether to return the timestamps and raw data values of this metric. </p> <p>If you use any math expressions, specify <code>true</code> for this value for only the final math expression that the metric specification is based on. You must specify <code>false</code> for <code>ReturnData</code> for all the other metrics and expressions used in the metric specification.</p> <p>If you are only retrieving metrics and not performing any math expressions, do not specify anything for <code>ReturnData</code>. This sets it to its default (<code>true</code>).</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Id'],
    description:
      '<p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  })
  .openapi('TargetTrackingMetricDataQuery')

const TargetTrackingMetricDataQueriesSchema = z
  .array(TargetTrackingMetricDataQuerySchema)
  .openapi('TargetTrackingMetricDataQueries')

const CustomizedMetricSpecificationSchema = z
  .object({
    MetricName: MetricNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that\'s returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.',
        }),
    ).exactOptional(),
    Namespace: MetricNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the metric.' }),
    ).exactOptional(),
    Dimensions: MetricDimensionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The dimensions of the metric. </p> <p>Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.</p>',
        }),
    ).exactOptional(),
    Statistic: MetricStatisticSchema.and(
      z.any().openapi({ description: 'The statistic of the metric.' }),
    ).exactOptional(),
    Unit: MetricUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of the metric. For a complete list of the units that CloudWatch supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a> data type in the <i>Amazon CloudWatch API Reference</i>.',
        }),
    ).exactOptional(),
    Metrics: TargetTrackingMetricDataQueriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>',
    required: [],
  })
  .openapi('CustomizedMetricSpecification')

const DisableScaleInSchema = z.boolean().openapi('DisableScaleIn')

const TargetTrackingScalingPolicyConfigurationSchema = z
  .object({
    TargetValue: MetricScaleSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out. </p> <note> <p>If the scaling policy specifies the <code>ALBRequestCountPerTarget</code> predefined metric, specify the target utilization as the optimal average request count per target during any one-minute interval.</p> </note>",
        }),
    ),
    PredefinedMetricSpecification: PredefinedMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A predefined metric. You can specify either a predefined metric or a customized metric.',
        }),
    ).exactOptional(),
    CustomizedMetricSpecification: CustomizedMetricSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A customized metric. You can specify either a predefined metric or a customized metric.',
        }),
    ).exactOptional(),
    ScaleOutCooldown: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, to wait for a previous scale-out activity to take effect.</p> <p>With the <i>scale-out cooldown period</i>, the intention is to continuously (but not excessively) scale out. After Application Auto Scaling successfully scales out using a target tracking scaling policy, it starts to calculate the cooldown time. The scaling policy won't increase the desired capacity again unless either a larger scale out is triggered or the cooldown period ends. While the cooldown period is in effect, the capacity added by the initiating scale-out activity is calculated as part of the desired capacity for the next scale-out activity.</p> <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:</p> <ul> <li> <p>AppStream 2.0 fleets</p> </li> <li> <p>Aurora DB clusters</p> </li> <li> <p>ECS services</p> </li> <li> <p>EMR clusters</p> </li> <li> <p> Neptune clusters</p> </li> <li> <p>SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets</p> </li> <li> <p>Custom resources</p> </li> </ul> <p>For all other scalable targets, the default value is 0:</p> <ul> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>DynamoDB tables and global secondary indexes</p> </li> <li> <p>Amazon Keyspaces tables</p> </li> <li> <p>Lambda provisioned concurrency</p> </li> <li> <p>Amazon MSK broker storage</p> </li> </ul>",
        }),
    ).exactOptional(),
    ScaleInCooldown: CooldownSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.</p> <p>With the <i>scale-in cooldown period</i>, the intention is to scale in conservatively to protect your application’s availability, so scale-in activities are blocked until the cooldown period has expired. However, if another alarm triggers a scale-out activity during the scale-in cooldown period, Application Auto Scaling scales out the target immediately. In this case, the scale-in cooldown period stops and doesn't complete.</p> <p>Application Auto Scaling provides a default value of 600 for Amazon ElastiCache replication groups and a default value of 300 for the following scalable targets:</p> <ul> <li> <p>AppStream 2.0 fleets</p> </li> <li> <p>Aurora DB clusters</p> </li> <li> <p>ECS services</p> </li> <li> <p>EMR clusters</p> </li> <li> <p> Neptune clusters</p> </li> <li> <p>SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets</p> </li> <li> <p>Custom resources</p> </li> </ul> <p>For all other scalable targets, the default value is 0:</p> <ul> <li> <p>Amazon Comprehend document classification and entity recognizer endpoints</p> </li> <li> <p>DynamoDB tables and global secondary indexes</p> </li> <li> <p>Amazon Keyspaces tables</p> </li> <li> <p>Lambda provisioned concurrency</p> </li> <li> <p>Amazon MSK broker storage</p> </li> </ul>",
        }),
    ).exactOptional(),
    DisableScaleIn: DisableScaleInSchema.and(
      z
        .any()
        .openapi({
          description:
            "Indicates whether scale in by the target tracking scaling policy is disabled. If the value is <code>true</code>, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is <code>false</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetValue'],
    description:
      'Represents a target tracking scaling policy configuration to use with Application Auto Scaling.',
  })
  .openapi('TargetTrackingScalingPolicyConfiguration')

const AlarmSchema = z
  .object({
    AlarmName: ResourceIdSchema.and(z.any().openapi({ description: 'The name of the alarm.' })),
    AlarmARN: ResourceIdSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the alarm.' }),
    ),
  })
  .openapi({
    required: ['AlarmName', 'AlarmARN'],
    description: 'Represents a CloudWatch alarm associated with a scaling policy.',
  })
  .openapi('Alarm')

const AlarmsSchema = z.array(AlarmSchema).openapi('Alarms')

const ScalingPolicySchema = z
  .object({
    PolicyARN: ResourceIdMaxLen1600Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the scaling policy.' }),
    ),
    PolicyName: PolicyNameSchema.and(
      z.any().openapi({ description: 'The name of the scaling policy.' }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource, or a <code>custom-resource</code>.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling policy type.</p> <p>The following policy types are supported: </p> <p> <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p> <p> <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.</p>',
        }),
    ),
    StepScalingPolicyConfiguration: StepScalingPolicyConfigurationSchema.and(
      z.any().openapi({ description: 'A step scaling policy.' }),
    ).exactOptional(),
    TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfigurationSchema.and(
      z.any().openapi({ description: 'A target tracking scaling policy.' }),
    ).exactOptional(),
    Alarms: AlarmsSchema.and(
      z.any().openapi({ description: 'The CloudWatch alarms associated with the scaling policy.' }),
    ).exactOptional(),
    CreationTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The Unix timestamp for when the scaling policy was created.' }),
    ),
  })
  .openapi({
    required: [
      'PolicyARN',
      'PolicyName',
      'ServiceNamespace',
      'ResourceId',
      'ScalableDimension',
      'PolicyType',
      'CreationTime',
    ],
    description:
      '<p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services that you can use with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  })
  .openapi('ScalingPolicy')

const ScalingPoliciesSchema = z.array(ScalingPolicySchema).openapi('ScalingPolicies')

const DescribeScalingPoliciesResponseSchema = z
  .object({
    ScalingPolicies: ScalingPoliciesSchema.and(
      z.any().openapi({ description: 'Information about the scaling policies.' }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      NextToken: '',
      ScalingPolicies: [
        {
          Alarms: [
            {
              AlarmARN: 'arn:aws:cloudwatch:us-west-2:012345678910:alarm:web-app-cpu-gt-75',
              AlarmName: 'web-app-cpu-gt-75',
            },
          ],
          CreationTime: '2019-05-06T12:11:39.230Z',
          PolicyARN:
            'arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/web-app-cpu-gt-75',
          PolicyName: 'web-app-cpu-gt-75',
          PolicyType: 'StepScaling',
          ResourceId: 'service/default/web-app',
          ScalableDimension: 'ecs:service:DesiredCount',
          ServiceNamespace: 'ecs',
          StepScalingPolicyConfiguration: {
            AdjustmentType: 'PercentChangeInCapacity',
            Cooldown: 60,
            StepAdjustments: [{ MetricIntervalLowerBound: 0, ScalingAdjustment: 200 }],
          },
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeScalingPoliciesResponse')

const DescribeScalingPoliciesRequestSchema = z
  .object({
    PolicyNames: ResourceIdsMaxLen1600Schema.and(
      z.any().openapi({ description: 'The names of the scaling policies to describe.' }),
    ).exactOptional(),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of scalable targets. This value can be between 1 and 10. The default value is 10.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 10 results and a <code>NextToken</code> value, if applicable.</p>',
        }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceNamespace'], title: 'DescribeScalingPoliciesRequest' })
  .openapi('DescribeScalingPoliciesRequest')

const FailedResourceAccessExceptionSchema = z.any().openapi('FailedResourceAccessException')

const ScheduledActionNameSchema = z
  .string()
  .regex(/(?!((^[ ]+.*)|(.*([\u0000-\u001f]|[\u007f-\u009f]|[:\/|])+.*)|(.*[ ]+$))).+/)
  .min(1)
  .max(256)
  .openapi('ScheduledActionName')

const ScalableTargetActionSchema = z
  .object({
    MinCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum capacity.</p> <p>When the scheduled action runs, the resource will have at least this much capacity, but it might have more depending on other settings, such as the target utilization level of a target tracking scaling policy.</p>',
        }),
    ).exactOptional(),
    MaxCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum capacity.</p> <p>Although you can specify a large maximum capacity, note that service quotas may impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the minimum and maximum capacity for a scheduled action.',
    required: [],
  })
  .openapi('ScalableTargetAction')

const ScheduledActionSchema = z
  .object({
    ScheduledActionName: ScheduledActionNameSchema.and(
      z.any().openapi({ description: 'The name of the scheduled action.' }),
    ),
    ScheduledActionARN: ResourceIdMaxLen1600Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the scheduled action.' }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource, or a <code>custom-resource</code>.',
        }),
    ),
    Schedule: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schedule for this action. The following formats are supported:</p> <ul> <li> <p>At expressions - "<code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code>"</p> </li> <li> <p>Rate expressions - "<code>rate(<i>value</i> <i>unit</i>)</code>"</p> </li> <li> <p>Cron expressions - "<code>cron(<i>fields</i>)</code>"</p> </li> </ul> <p>At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.</p> <p>At and cron expressions use Universal Coordinated Time (UTC) by default.</p> <p>The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].</p> <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/examples-scheduled-actions.html">Example scheduled actions for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ),
    Timezone: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            'The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.',
        }),
    ).exactOptional(),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    StartTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the action is scheduled to begin, in UTC.',
        }),
    ).exactOptional(),
    EndTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the action is scheduled to end, in UTC.' }),
    ).exactOptional(),
    ScalableTargetAction: ScalableTargetActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.',
        }),
    ).exactOptional(),
    CreationTime: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The date and time that the scheduled action was created.' }),
    ),
  })
  .openapi({
    required: [
      'ScheduledActionName',
      'ScheduledActionARN',
      'ServiceNamespace',
      'Schedule',
      'ResourceId',
      'CreationTime',
    ],
    description: 'Represents a scheduled action.',
  })
  .openapi('ScheduledAction')

const ScheduledActionsSchema = z.array(ScheduledActionSchema).openapi('ScheduledActions')

const DescribeScheduledActionsResponseSchema = z
  .object({
    ScheduledActions: ScheduledActionsSchema.and(
      z.any().openapi({ description: 'Information about the scheduled actions.' }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({
    example: {
      ScheduledActions: [
        {
          CreationTime: 1561571888.361,
          ResourceId: 'table/my-table',
          ScalableDimension: 'dynamodb:table:WriteCapacityUnits',
          ScalableTargetAction: { MaxCapacity: 20, MinCapacity: 15 },
          Schedule: 'at(2019-05-20T18:35:00)',
          ScheduledActionARN:
            'arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-first-scheduled-action',
          ScheduledActionName: 'my-first-scheduled-action',
          ServiceNamespace: 'dynamodb',
        },
        {
          CreationTime: 1561571946.021,
          ResourceId: 'table/my-table',
          ScalableDimension: 'dynamodb:table:WriteCapacityUnits',
          ScalableTargetAction: { MaxCapacity: 10, MinCapacity: 5 },
          Schedule: 'at(2019-05-20T18:40:00)',
          ScheduledActionARN:
            'arn:aws:autoscaling:us-west-2:123456789012:scheduledAction:2d36aa3b-cdf9-4565-b290-81db519b227d:resource/dynamodb/table/my-table:scheduledActionName/my-second-scheduled-action',
          ScheduledActionName: 'my-second-scheduled-action',
          ServiceNamespace: 'dynamodb',
        },
      ],
    },
    required: [],
  })
  .openapi('DescribeScheduledActionsResponse')

const DescribeScheduledActionsRequestSchema = z
  .object({
    ScheduledActionNames: ResourceIdsMaxLen1600Schema.and(
      z.any().openapi({ description: 'The names of the scheduled actions to describe.' }),
    ).exactOptional(),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. If you specify a scalable dimension, you must also specify a resource ID.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of scheduled action results. This value can be between 1 and 50. The default value is 50.</p> <p>If this parameter is used, the operation returns up to <code>MaxResults</code> results at a time, along with a <code>NextToken</code> value. To get the next set of results, include the <code>NextToken</code> value in a subsequent call. If this parameter is not used, the operation returns up to 50 results and a <code>NextToken</code> value, if applicable.</p>',
        }),
    ).exactOptional(),
    NextToken: XmlStringSchema.and(
      z.any().openapi({ description: 'The token for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceNamespace'], title: 'DescribeScheduledActionsRequest' })
  .openapi('DescribeScheduledActionsRequest')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagMapSchema = z.record(z.string(), TagValueSchema).openapi('TagMap')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tags. Each tag consists of a tag key and a tag value.',
        }),
    ).exactOptional(),
  })
  .openapi({ example: { Tags: { environment: 'production' } }, required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z
  .string()
  .regex(/^arn:.+:application-autoscaling:.+:[0-9]+:scalable-target\/[a-zA-Z0-9-]+$/)
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
            '<p>Specify the ARN of the scalable target.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const PutScalingPolicyResponseSchema = z
  .object({
    PolicyARN: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the resulting scaling policy.',
        }),
    ),
    Alarms: AlarmsSchema.and(
      z
        .any()
        .openapi({
          description: 'The CloudWatch alarms created for the target tracking scaling policy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyARN'],
    example: {
      Alarms: [
        {
          AlarmARN:
            'arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca',
          AlarmName:
            'TargetTracking-service/default/web-app-AlarmHigh-d4f0770c-b46e-434a-a60f-3b36d653feca',
        },
        {
          AlarmARN:
            'arn:aws:cloudwatch:us-west-2:012345678910:alarm:TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d',
          AlarmName:
            'TargetTracking-service/default/web-app-AlarmLow-1b437334-d19b-4a63-a812-6c67aaf2910d',
        },
      ],
      PolicyARN:
        'arn:aws:autoscaling:us-west-2:012345678910:scalingPolicy:6d8972f3-efc8-437c-92d1-6270f29a66e7:resource/ecs/service/default/web-app:policyName/cpu75-target-tracking-scaling-policy',
    },
  })
  .openapi('PutScalingPolicyResponse')

const PutScalingPolicyRequestSchema = z
  .object({
    PolicyName: PolicyNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the scaling policy.</p> <p>You cannot change the name of a scaling policy, but you can delete the original scaling policy and create a new scaling policy with the same settings and a different name.</p>',
        }),
    ),
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scaling policy type. This parameter is required if you are creating a scaling policy.</p> <p>The following policy types are supported: </p> <p> <code>TargetTrackingScaling</code>—Not supported for Amazon EMR</p> <p> <code>StepScaling</code>—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ).exactOptional(),
    StepScalingPolicyConfiguration: StepScalingPolicyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A step scaling policy.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>StepScaling</code>.</p>',
        }),
    ).exactOptional(),
    TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p> <p>This parameter is required if you are creating a policy and the policy type is <code>TargetTrackingScaling</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyName', 'ServiceNamespace', 'ResourceId', 'ScalableDimension'],
    title: 'PutScalingPolicyRequest',
  })
  .openapi('PutScalingPolicyRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const PutScheduledActionResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('PutScheduledActionResponse')

const PutScheduledActionRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    Schedule: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schedule for this action. The following formats are supported:</p> <ul> <li> <p>At expressions - "<code>at(<i>yyyy</i>-<i>mm</i>-<i>dd</i>T<i>hh</i>:<i>mm</i>:<i>ss</i>)</code>"</p> </li> <li> <p>Rate expressions - "<code>rate(<i>value</i> <i>unit</i>)</code>"</p> </li> <li> <p>Cron expressions - "<code>cron(<i>fields</i>)</code>"</p> </li> </ul> <p>At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.</p> <p>At and cron expressions use Universal Coordinated Time (UTC) by default.</p> <p>The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].</p> <p>For rate expressions, <i>value</i> is a positive integer and <i>unit</i> is <code>minute</code> | <code>minutes</code> | <code>hour</code> | <code>hours</code> | <code>day</code> | <code>days</code>.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/examples-scheduled-actions.html">Example scheduled actions for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Timezone: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies the time zone used when setting a scheduled action by using an at or cron expression. If a time zone is not provided, UTC is used by default.</p> <p>Valid values are the canonical names of the IANA time zones supported by Joda-Time (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For more information, see <a href="https://www.joda.org/joda-time/timezones.html">https://www.joda.org/joda-time/timezones.html</a>.</p>',
        }),
    ).exactOptional(),
    ScheduledActionName: ScheduledActionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target. ',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource associated with the scheduled action. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    StartTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time for this scheduled action to start, in UTC.' }),
    ).exactOptional(),
    EndTime: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time for the recurring schedule to end, in UTC.' }),
    ).exactOptional(),
    ScalableTargetAction: ScalableTargetActionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceNamespace', 'ScheduledActionName', 'ResourceId', 'ScalableDimension'],
    title: 'PutScheduledActionRequest',
  })
  .openapi('PutScheduledActionRequest')

const RegisterScalableTargetResponseSchema = z
  .object({
    ScalableTargetARN: XmlStringSchema.and(
      z.any().openapi({ description: 'The ARN of the scalable target.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterScalableTargetResponse')

const RegisterScalableTargetRequestSchema = z
  .object({
    ServiceNamespace: ServiceNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use <code>custom-resource</code> instead.',
        }),
    ),
    ResourceId: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier.</p> <ul> <li> <p>ECS service - The resource type is <code>service</code> and the unique identifier is the cluster name and service name. Example: <code>service/default/sample-webapp</code>.</p> </li> <li> <p>Spot Fleet - The resource type is <code>spot-fleet-request</code> and the unique identifier is the Spot Fleet request ID. Example: <code>spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE</code>.</p> </li> <li> <p>EMR cluster - The resource type is <code>instancegroup</code> and the unique identifier is the cluster ID and instance group ID. Example: <code>instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0</code>.</p> </li> <li> <p>AppStream 2.0 fleet - The resource type is <code>fleet</code> and the unique identifier is the fleet name. Example: <code>fleet/sample-fleet</code>.</p> </li> <li> <p>DynamoDB table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>table/my-table</code>.</p> </li> <li> <p>DynamoDB global secondary index - The resource type is <code>index</code> and the unique identifier is the index name. Example: <code>table/my-table/index/my-table-index</code>.</p> </li> <li> <p>Aurora DB cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:my-db-cluster</code>.</p> </li> <li> <p>SageMaker endpoint variant - The resource type is <code>variant</code> and the unique identifier is the resource ID. Example: <code>endpoint/my-end-point/variant/KMeansClustering</code>.</p> </li> <li> <p>Custom resources are not supported with a resource type. This parameter must specify the <code>OutputValue</code> from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our <a href="https://github.com/aws/aws-auto-scaling-custom-resource">GitHub repository</a>.</p> </li> <li> <p>Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: <code>arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE</code>.</p> </li> <li> <p>Lambda provisioned concurrency - The resource type is <code>function</code> and the unique identifier is the function name with a function version or alias name suffix that is not <code>$LATEST</code>. Example: <code>function:my-function:prod</code> or <code>function:my-function:1</code>.</p> </li> <li> <p>Amazon Keyspaces table - The resource type is <code>table</code> and the unique identifier is the table name. Example: <code>keyspace/mykeyspace/table/mytable</code>.</p> </li> <li> <p>Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: <code>arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5</code>.</p> </li> <li> <p>Amazon ElastiCache replication group - The resource type is <code>replication-group</code> and the unique identifier is the replication group name. Example: <code>replication-group/mycluster</code>.</p> </li> <li> <p>Neptune cluster - The resource type is <code>cluster</code> and the unique identifier is the cluster name. Example: <code>cluster:mycluster</code>.</p> </li> </ul>',
        }),
    ),
    ScalableDimension: ScalableDimensionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.</p> <ul> <li> <p> <code>ecs:service:DesiredCount</code> - The desired task count of an ECS service.</p> </li> <li> <p> <code>elasticmapreduce:instancegroup:InstanceCount</code> - The instance count of an EMR Instance Group.</p> </li> <li> <p> <code>ec2:spot-fleet-request:TargetCapacity</code> - The target capacity of a Spot Fleet.</p> </li> <li> <p> <code>appstream:fleet:DesiredCapacity</code> - The desired capacity of an AppStream 2.0 fleet.</p> </li> <li> <p> <code>dynamodb:table:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:table:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB table.</p> </li> <li> <p> <code>dynamodb:index:ReadCapacityUnits</code> - The provisioned read capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>dynamodb:index:WriteCapacityUnits</code> - The provisioned write capacity for a DynamoDB global secondary index.</p> </li> <li> <p> <code>rds:cluster:ReadReplicaCount</code> - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.</p> </li> <li> <p> <code>sagemaker:variant:DesiredInstanceCount</code> - The number of EC2 instances for a SageMaker model endpoint variant.</p> </li> <li> <p> <code>custom-resource:ResourceType:Property</code> - The scalable dimension for a custom resource provided by your own application or service.</p> </li> <li> <p> <code>comprehend:document-classifier-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend document classification endpoint.</p> </li> <li> <p> <code>comprehend:entity-recognizer-endpoint:DesiredInferenceUnits</code> - The number of inference units for an Amazon Comprehend entity recognizer endpoint.</p> </li> <li> <p> <code>lambda:function:ProvisionedConcurrency</code> - The provisioned concurrency for a Lambda function.</p> </li> <li> <p> <code>cassandra:table:ReadCapacityUnits</code> - The provisioned read capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>cassandra:table:WriteCapacityUnits</code> - The provisioned write capacity for an Amazon Keyspaces table.</p> </li> <li> <p> <code>kafka:broker-storage:VolumeSize</code> - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.</p> </li> <li> <p> <code>elasticache:replication-group:NodeGroups</code> - The number of node groups for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>elasticache:replication-group:Replicas</code> - The number of replicas per node group for an Amazon ElastiCache replication group.</p> </li> <li> <p> <code>neptune:cluster:ReadReplicaCount</code> - The count of read replicas in an Amazon Neptune DB cluster.</p> </li> </ul>',
        }),
    ),
    MinCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand. This property is required when registering a new scalable target.</p> <p>For the following resources, the minimum value allowed is 0.</p> <ul> <li> <p>AppStream 2.0 fleets</p> </li> <li> <p> Aurora DB clusters</p> </li> <li> <p>ECS services</p> </li> <li> <p>EMR clusters</p> </li> <li> <p>Lambda provisioned concurrency</p> </li> <li> <p>SageMaker endpoint variants</p> </li> <li> <p>Spot Fleets</p> </li> <li> <p>custom resources</p> </li> </ul> <p>It's strongly recommended that you specify a value greater than 0. A value greater than 0 means that data points are continuously reported to CloudWatch that scaling policies can use to scale on a metric like average CPU utilization.</p> <p>For all other resources, the minimum allowed value depends on the type of resource that you are using. If you provide a value that is lower than what a resource can accept, an error occurs. In which case, the error message will provide the minimum value that the resource can accept.</p>",
        }),
    ).exactOptional(),
    MaxCapacity: ResourceCapacitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand. This property is required when registering a new scalable target.</p> <p>Although you can specify a large maximum capacity, note that service quotas might impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html">Service endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>',
        }),
    ).exactOptional(),
    RoleARN: ResourceIdMaxLen1600Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. </p> <p>If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles">Application Auto Scaling IAM roles</a>.</p>',
        }),
    ).exactOptional(),
    SuspendedState: SuspendedStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to <code>true</code> suspends the specified scaling activities. Setting it to <code>false</code> (default) resumes the specified scaling activities. </p> <p> <b>Suspension Outcomes</b> </p> <ul> <li> <p>For <code>DynamicScalingInSuspended</code>, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.</p> </li> <li> <p>For <code>DynamicScalingOutSuspended</code>, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.</p> </li> <li> <p>For <code>ScheduledScalingSuspended</code>, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html">Suspending and resuming scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Assigns one or more tags to the scalable target. Use this parameter to tag the scalable target when it is created. To tag an existing scalable target, use the <a>TagResource</a> operation.</p> <p>Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required. You cannot have more than one tag on a scalable target with the same tag key.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceNamespace', 'ResourceId', 'ScalableDimension'],
    title: 'RegisterScalableTargetRequest',
  })
  .openapi('RegisterScalableTargetRequest')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the Application Auto Scaling scalable target that you want to apply tags to.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>',
        }),
    ),
    Tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The tags assigned to the resource. A tag is a label that you assign to an AWS resource.</p> <p>Each tag consists of a tag key and a tag value.</p> <p>You cannot have more than one tag on an Application Auto Scaling scalable target with the same tag key. If you specify an existing tag key with a different tag value, Application Auto Scaling replaces the current tag value with the specified one.</p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-defined tag restrictions</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ example: {} })
  .openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceARN: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Identifies the Application Auto Scaling scalable target from which to remove tags.</p> <p>For example: <code>arn:aws:application-autoscaling:us-east-1:123456789012:scalable-target/1234abcd56ab78cd901ef1234567890ab123</code> </p> <p>To get the ARN for a scalable target, use <a>DescribeScalableTargets</a>.</p>',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description: 'One or more tag keys. Specify only the tag keys, not the tag values.',
        }),
    ),
  })
  .openapi({ required: ['ResourceARN', 'TagKeys'], title: 'UntagResourceRequest' })
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

export const postXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy',
  description:
    '<p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  operationId: 'DeleteScalingPolicy',
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
        .literal('AnyScaleFrontendService.DeleteScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DeleteScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteScalingPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteScalingPolicyResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction',
  description:
    '<p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  operationId: 'DeleteScheduledAction',
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
        .literal('AnyScaleFrontendService.DeleteScheduledAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DeleteScheduledAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteScheduledActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteScheduledActionResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget',
  description:
    '<p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>',
  operationId: 'DeregisterScalableTarget',
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
        .literal('AnyScaleFrontendService.DeregisterScalableTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DeregisterScalableTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeregisterScalableTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterScalableTargetResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets',
  description:
    '<p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>',
  operationId: 'DescribeScalableTargets',
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
        .literal('AnyScaleFrontendService.DescribeScalableTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DescribeScalableTargets'] },
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
      content: { 'application/json': { schema: DescribeScalableTargetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScalableTargetsResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities',
  description:
    '<p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>',
  operationId: 'DescribeScalingActivities',
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
        .literal('AnyScaleFrontendService.DescribeScalingActivities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DescribeScalingActivities'] },
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
      content: { 'application/json': { schema: DescribeScalingActivitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScalingActivitiesResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies',
  description:
    '<p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  operationId: 'DescribeScalingPolicies',
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
        .literal('AnyScaleFrontendService.DescribeScalingPolicies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DescribeScalingPolicies'] },
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
      content: { 'application/json': { schema: DescribeScalingPoliciesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScalingPoliciesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'FailedResourceAccessException',
      content: { 'application/json': { schema: FailedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'ConcurrentUpdateException',
      content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions',
  description:
    '<p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
  operationId: 'DescribeScheduledActions',
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
        .literal('AnyScaleFrontendService.DescribeScheduledActions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.DescribeScheduledActions'] },
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
      content: { 'application/json': { schema: DescribeScheduledActionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeScheduledActionsResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource',
  description:
    '<p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>',
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
        .literal('AnyScaleFrontendService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.ListTagsForResource'] },
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
  },
})

export const postXAmzTargetAnyScaleFrontendServicePutScalingPolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy',
  description:
    '<p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>',
  operationId: 'PutScalingPolicy',
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
        .literal('AnyScaleFrontendService.PutScalingPolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.PutScalingPolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutScalingPolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutScalingPolicyResponseSchema } },
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
      description: 'ObjectNotFoundException',
      content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentUpdateException',
      content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
    },
    484: {
      description: 'FailedResourceAccessException',
      content: { 'application/json': { schema: FailedResourceAccessExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAnyScaleFrontendServicePutScheduledActionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction',
  description:
    '<p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don\'t specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>',
  operationId: 'PutScheduledAction',
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
        .literal('AnyScaleFrontendService.PutScheduledAction')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.PutScheduledAction'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutScheduledActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutScheduledActionResponseSchema } },
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
      description: 'ObjectNotFoundException',
      content: { 'application/json': { schema: ObjectNotFoundExceptionSchema } },
    },
    483: {
      description: 'ConcurrentUpdateException',
      content: { 'application/json': { schema: ConcurrentUpdateExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget',
  description:
    '<p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource\'s current capacity. Otherwise, it changes the resource\'s current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don\'t specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it\'s below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don\'t include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>',
  operationId: 'RegisterScalableTarget',
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
        .literal('AnyScaleFrontendService.RegisterScalableTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.RegisterScalableTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterScalableTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterScalableTargetResponseSchema } },
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

export const postXAmzTargetAnyScaleFrontendServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.TagResource',
  description:
    '<p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>',
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
        .literal('AnyScaleFrontendService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.TagResource'] },
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

export const postXAmzTargetAnyScaleFrontendServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AnyScaleFrontendService.UntagResource',
  description:
    'Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.',
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
        .literal('AnyScaleFrontendService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AnyScaleFrontendService.UntagResource'] },
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
