import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const IntegerOptionalSchema = z.int().openapi('IntegerOptional')

const IntegerSchema = z.int().openapi('Integer')

const EndpointSchema = z
  .object({
    Address: StringSchema.and(
      z.any().openapi({ description: 'The DNS hostname of the endpoint.' }),
    ).exactOptional(),
    Port: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The port number that applications should use to connect to the endpoint.',
        }),
    ).exactOptional(),
    URL: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL that applications should use to connect to the endpoint. The default ports are 8111 for the "dax" protocol and 9111 for the "daxs" protocol.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the information required for client programs to connect to the endpoint for a DAX cluster.',
    required: [],
  })
  .openapi('Endpoint')

const NodeIdentifierListSchema = z.array(StringSchema).openapi('NodeIdentifierList')

const TStampSchema = z.iso.datetime({ offset: true }).openapi('TStamp')

const NodeSchema = z
  .object({
    NodeId: StringSchema.and(
      z.any().openapi({ description: 'A system-generated identifier for the node.' }),
    ).exactOptional(),
    Endpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint for the node, consisting of a DNS name and a port number. Client applications can connect directly to a node endpoint, if desired (as an alternative to allowing DAX client software to intelligently route requests and responses to nodes in the DAX cluster.',
        }),
    ).exactOptional(),
    NodeCreateTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time (in UNIX epoch format) when the node was launched.',
        }),
    ).exactOptional(),
    AvailabilityZone: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Availability Zone (AZ) in which the node has been deployed.',
        }),
    ).exactOptional(),
    NodeStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The current status of the node. For example: <code>available</code>.',
        }),
    ).exactOptional(),
    ParameterGroupStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the parameter group associated with this node. For example, <code>in-sync</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an individual node within a DAX cluster.', required: [] })
  .openapi('Node')

const NodeListSchema = z.array(NodeSchema).openapi('NodeList')

const NotificationConfigurationSchema = z
  .object({
    TopicArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) that identifies the topic. ' }),
    ).exactOptional(),
    TopicStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the topic. A value of “active” means that notifications will be sent to the topic. A value of “inactive” means that notifications will not be sent to the topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).',
    required: [],
  })
  .openapi('NotificationConfiguration')

const SecurityGroupMembershipSchema = z
  .object({
    SecurityGroupIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The unique ID for this security group.' }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The status of this security group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An individual VPC security group and its status.', required: [] })
  .openapi('SecurityGroupMembership')

const SecurityGroupMembershipListSchema = z
  .array(SecurityGroupMembershipSchema)
  .openapi('SecurityGroupMembershipList')

const ParameterGroupStatusSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter group.' }),
    ).exactOptional(),
    ParameterApplyStatus: StringSchema.and(
      z.any().openapi({ description: 'The status of parameter updates. ' }),
    ).exactOptional(),
    NodeIdsToReboot: NodeIdentifierListSchema.and(
      z.any().openapi({ description: 'The node IDs of one or more nodes to be rebooted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The status of a parameter group.', required: [] })
  .openapi('ParameterGroupStatus')

const SSEStatusSchema = z
  .enum(['ENABLING', 'ENABLED', 'DISABLING', 'DISABLED'])
  .openapi('SSEStatus')

const SSEDescriptionSchema = z
  .object({
    Status: SSEStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current state of server-side encryption:</p> <ul> <li> <p> <code>ENABLING</code> - Server-side encryption is being enabled.</p> </li> <li> <p> <code>ENABLED</code> - Server-side encryption is enabled.</p> </li> <li> <p> <code>DISABLING</code> - Server-side encryption is being disabled.</p> </li> <li> <p> <code>DISABLED</code> - Server-side encryption is disabled.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The description of the server-side encryption status on the specified DAX cluster.',
    required: [],
  })
  .openapi('SSEDescription')

const ClusterEndpointEncryptionTypeSchema = z
  .enum(['NONE', 'TLS'])
  .openapi('ClusterEndpointEncryptionType')

const ClusterSchema = z
  .object({
    ClusterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DAX cluster.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the cluster.' }),
    ).exactOptional(),
    ClusterArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) that uniquely identifies the cluster. ',
        }),
    ).exactOptional(),
    TotalNodes: IntegerOptionalSchema.and(
      z.any().openapi({ description: 'The total number of nodes in the cluster.' }),
    ).exactOptional(),
    ActiveNodes: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of nodes in the cluster that are active (i.e., capable of serving requests).',
        }),
    ).exactOptional(),
    NodeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)',
        }),
    ).exactOptional(),
    Status: StringSchema.and(
      z.any().openapi({ description: 'The current status of the cluster.' }),
    ).exactOptional(),
    ClusterDiscoveryEndpoint: EndpointSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint for this DAX cluster, consisting of a DNS name, a port number, and a URL. Applications should use the URL to configure the DAX client to find their cluster.',
        }),
    ).exactOptional(),
    NodeIdsToRemove: NodeIdentifierListSchema.and(
      z.any().openapi({ description: 'A list of nodes to be removed from the cluster.' }),
    ).exactOptional(),
    Nodes: NodeListSchema.and(
      z.any().openapi({ description: 'A list of nodes that are currently in the cluster.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A range of time when maintenance of DAX cluster software will be performed. For example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.',
        }),
    ).exactOptional(),
    NotificationConfiguration: NotificationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).',
        }),
    ).exactOptional(),
    SubnetGroup: StringSchema.and(
      z.any().openapi({ description: 'The subnet group where the DAX cluster is running.' }),
    ).exactOptional(),
    SecurityGroups: SecurityGroupMembershipListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of security groups, and the status of each, for the nodes in the cluster.',
        }),
    ).exactOptional(),
    IamRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.",
        }),
    ).exactOptional(),
    ParameterGroup: ParameterGroupStatusSchema.and(
      z.any().openapi({ description: 'The parameter group being used by nodes in the cluster.' }),
    ).exactOptional(),
    SSEDescription: SSEDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the server-side encryption status on the specified DAX cluster.',
        }),
    ).exactOptional(),
    ClusterEndpointEncryptionType: ClusterEndpointEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of encryption supported by the cluster's endpoint. Values are:</p> <ul> <li> <p> <code>NONE</code> for no encryption</p> <p> <code>TLS</code> for Transport Layer Security</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains all of the attributes of a specific DAX cluster.',
    required: [],
  })
  .openapi('Cluster')

const CreateClusterResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z.any().openapi({ description: 'A description of the DAX cluster that you have created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateClusterResponse')

const AvailabilityZoneListSchema = z.array(StringSchema).openapi('AvailabilityZoneList')

const SecurityGroupIdentifierListSchema = z
  .array(StringSchema)
  .openapi('SecurityGroupIdentifierList')

const TagSchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key for the tag. Tag keys are case sensitive. Every DAX cluster can only have one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.',
        }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value of the tag. Tag values are case-sensitive and can be null. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p>',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const SSEEnabledSchema = z.boolean().openapi('SSEEnabled')

const SSESpecificationSchema = z
  .object({
    Enabled: SSEEnabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.',
        }),
    ),
  })
  .openapi({
    required: ['Enabled'],
    description: 'Represents the settings used to enable server-side encryption.',
  })
  .openapi('SSESpecification')

const CreateClusterRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The cluster identifier. This parameter is stored as a lowercase string.</p> <p> <b>Constraints:</b> </p> <ul> <li> <p>A name must contain from 1 to 20 alphanumeric characters or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>A name cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>',
        }),
    ),
    NodeType: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The compute and memory capacity of the nodes in the cluster.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the cluster.' }),
    ).exactOptional(),
    ReplicationFactor: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of nodes in the DAX cluster. A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set <code>ReplicationFactor</code> to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas). <code>If the AvailabilityZones</code> parameter is provided, its length must equal the <code>ReplicationFactor</code>.</p> <note> <p>AWS recommends that you have at least two read replicas per cluster.</p> </note>',
        }),
    ),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated. If provided, the length of this list must equal the <code>ReplicationFactor</code> parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.',
        }),
    ).exactOptional(),
    SubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the subnet group to be used for the replication group.</p> <important> <p>DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC.</p> </important>',
        }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the security group ID is system-generated.)</p> <p>If this parameter is not specified, DAX assigns the default VPC security group to each node.</p>',
        }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the weekly time range during which maintenance on the DAX cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for <code>ddd</code> are:</p> <ul> <li> <p> <code>sun</code> </p> </li> <li> <p> <code>mon</code> </p> </li> <li> <p> <code>tue</code> </p> </li> <li> <p> <code>wed</code> </p> </li> <li> <p> <code>thu</code> </p> </li> <li> <p> <code>fri</code> </p> </li> <li> <p> <code>sat</code> </p> </li> </ul> <p>Example: <code>sun:05:00-sun:09:00</code> </p> <note> <p>If you don't specify a preferred maintenance window when you create or modify a cache cluster, DAX assigns a 60-minute maintenance window on a randomly selected day of the week.</p> </note>",
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.</p> <note> <p>The Amazon SNS topic owner must be same as the DAX cluster owner.</p> </note>',
        }),
    ).exactOptional(),
    IamRoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.",
        }),
    ),
    ParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The parameter group to be associated with the DAX cluster.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A set of tags to associate with the DAX cluster. ' }),
    ).exactOptional(),
    SSESpecification: SSESpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents the settings used to enable server-side encryption on the cluster.',
        }),
    ).exactOptional(),
    ClusterEndpointEncryptionType: ClusterEndpointEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The type of encryption the cluster's endpoint should support. Values are:</p> <ul> <li> <p> <code>NONE</code> for no encryption</p> </li> <li> <p> <code>TLS</code> for Transport Layer Security</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterName', 'NodeType', 'ReplicationFactor', 'IamRoleArn'],
    title: 'CreateClusterRequest',
  })
  .openapi('CreateClusterRequest')

const ClusterAlreadyExistsFaultSchema = z.any().openapi('ClusterAlreadyExistsFault')

const InvalidClusterStateFaultSchema = z.any().openapi('InvalidClusterStateFault')

const InsufficientClusterCapacityFaultSchema = z.any().openapi('InsufficientClusterCapacityFault')

const SubnetGroupNotFoundFaultSchema = z.any().openapi('SubnetGroupNotFoundFault')

const InvalidParameterGroupStateFaultSchema = z.any().openapi('InvalidParameterGroupStateFault')

const ParameterGroupNotFoundFaultSchema = z.any().openapi('ParameterGroupNotFoundFault')

const ClusterQuotaForCustomerExceededFaultSchema = z
  .any()
  .openapi('ClusterQuotaForCustomerExceededFault')

const NodeQuotaForClusterExceededFaultSchema = z.any().openapi('NodeQuotaForClusterExceededFault')

const NodeQuotaForCustomerExceededFaultSchema = z.any().openapi('NodeQuotaForCustomerExceededFault')

const InvalidVPCNetworkStateFaultSchema = z.any().openapi('InvalidVPCNetworkStateFault')

const TagQuotaPerResourceExceededSchema = z.any().openapi('TagQuotaPerResourceExceeded')

const ServiceLinkedRoleNotFoundFaultSchema = z.any().openapi('ServiceLinkedRoleNotFoundFault')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const InvalidParameterCombinationExceptionSchema = z
  .any()
  .openapi('InvalidParameterCombinationException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ParameterGroupSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter group.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the parameter group.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A named set of parameters that are applied to all of the nodes in a DAX cluster.',
    required: [],
  })
  .openapi('ParameterGroup')

const CreateParameterGroupResponseSchema = z
  .object({
    ParameterGroup: ParameterGroupSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the output of a <i>CreateParameterGroup</i> action.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateParameterGroupResponse')

const CreateParameterGroupRequestSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the parameter group to apply to all of the clusters in this replication group.',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the parameter group.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParameterGroupName'], title: 'CreateParameterGroupRequest' })
  .openapi('CreateParameterGroupRequest')

const ParameterGroupQuotaExceededFaultSchema = z.any().openapi('ParameterGroupQuotaExceededFault')

const ParameterGroupAlreadyExistsFaultSchema = z.any().openapi('ParameterGroupAlreadyExistsFault')

const SubnetSchema = z
  .object({
    SubnetIdentifier: StringSchema.and(
      z.any().openapi({ description: 'The system-assigned identifier for the subnet.' }),
    ).exactOptional(),
    SubnetAvailabilityZone: StringSchema.and(
      z.any().openapi({ description: 'The Availability Zone (AZ) for the subnet.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.',
    required: [],
  })
  .openapi('Subnet')

const SubnetListSchema = z.array(SubnetSchema).openapi('SubnetList')

const SubnetGroupSchema = z
  .object({
    SubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the subnet group.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the subnet group.' }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Virtual Private Cloud identifier (VPC ID) of the subnet group.',
        }),
    ).exactOptional(),
    Subnets: SubnetListSchema.and(
      z.any().openapi({ description: 'A list of subnets associated with the subnet group. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>',
    required: [],
  })
  .openapi('SubnetGroup')

const CreateSubnetGroupResponseSchema = z
  .object({
    SubnetGroup: SubnetGroupSchema.and(
      z
        .any()
        .openapi({ description: 'Represents the output of a <i>CreateSubnetGroup</i> operation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSubnetGroupResponse')

const SubnetIdentifierListSchema = z.array(StringSchema).openapi('SubnetIdentifierList')

const CreateSubnetGroupRequestSchema = z
  .object({
    SubnetGroupName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A name for the subnet group. This value is stored as a lowercase string. ',
        }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description for the subnet group' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'A list of VPC subnet IDs for the subnet group.' }),
    ),
  })
  .openapi({ required: ['SubnetGroupName', 'SubnetIds'], title: 'CreateSubnetGroupRequest' })
  .openapi('CreateSubnetGroupRequest')

const SubnetGroupAlreadyExistsFaultSchema = z.any().openapi('SubnetGroupAlreadyExistsFault')

const SubnetGroupQuotaExceededFaultSchema = z.any().openapi('SubnetGroupQuotaExceededFault')

const SubnetQuotaExceededFaultSchema = z.any().openapi('SubnetQuotaExceededFault')

const InvalidSubnetSchema = z.any().openapi('InvalidSubnet')

const DecreaseReplicationFactorResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the DAX cluster, after you have decreased its replication factor.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DecreaseReplicationFactorResponse')

const DecreaseReplicationFactorRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DAX cluster from which you want to remove nodes.',
        }),
    ),
    NewReplicationFactor: IntegerSchema.and(
      z.any().openapi({ description: 'The new number of nodes for the DAX cluster.' }),
    ),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z.any().openapi({ description: 'The Availability Zone(s) from which to remove nodes.' }),
    ).exactOptional(),
    NodeIdsToRemove: NodeIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifiers of the nodes to be removed from the cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterName', 'NewReplicationFactor'],
    title: 'DecreaseReplicationFactorRequest',
  })
  .openapi('DecreaseReplicationFactorRequest')

const ClusterNotFoundFaultSchema = z.any().openapi('ClusterNotFoundFault')

const NodeNotFoundFaultSchema = z.any().openapi('NodeNotFoundFault')

const DeleteClusterResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z.any().openapi({ description: 'A description of the DAX cluster that is being deleted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteClusterResponse')

const DeleteClusterRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the cluster to be deleted.' }),
    ),
  })
  .openapi({ required: ['ClusterName'], title: 'DeleteClusterRequest' })
  .openapi('DeleteClusterRequest')

const DeleteParameterGroupResponseSchema = z
  .object({
    DeletionMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-specified message for this action (i.e., a reason for deleting the parameter group).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteParameterGroupResponse')

const DeleteParameterGroupRequestSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter group to delete.' }),
    ),
  })
  .openapi({ required: ['ParameterGroupName'], title: 'DeleteParameterGroupRequest' })
  .openapi('DeleteParameterGroupRequest')

const DeleteSubnetGroupResponseSchema = z
  .object({
    DeletionMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A user-specified message for this action (i.e., a reason for deleting the subnet group).',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSubnetGroupResponse')

const DeleteSubnetGroupRequestSchema = z
  .object({
    SubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the subnet group to delete.' }),
    ),
  })
  .openapi({ required: ['SubnetGroupName'], title: 'DeleteSubnetGroupRequest' })
  .openapi('DeleteSubnetGroupRequest')

const SubnetGroupInUseFaultSchema = z.any().openapi('SubnetGroupInUseFault')

const ClusterListSchema = z.array(ClusterSchema).openapi('ClusterList')

const DescribeClustersResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Clusters: ClusterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The descriptions of your DAX clusters, in response to a <i>DescribeClusters</i> request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClustersResponse')

const ClusterNameListSchema = z.array(StringSchema).openapi('ClusterNameList')

const DescribeClustersRequestSchema = z
  .object({
    ClusterNames: ClusterNameListSchema.and(
      z.any().openapi({ description: 'The names of the DAX clusters being described.' }),
    ).exactOptional(),
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeClustersRequest', required: [] })
  .openapi('DescribeClustersRequest')

const ParameterTypeSchema = z.enum(['DEFAULT', 'NODE_TYPE_SPECIFIC']).openapi('ParameterType')

const NodeTypeSpecificValueSchema = z
  .object({
    NodeType: StringSchema.and(
      z.any().openapi({ description: 'A node type to which the parameter value applies.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The parameter value for this node type.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a parameter value that is applicable to a particular node type.',
    required: [],
  })
  .openapi('NodeTypeSpecificValue')

const NodeTypeSpecificValueListSchema = z
  .array(NodeTypeSpecificValueSchema)
  .openapi('NodeTypeSpecificValueList')

const IsModifiableSchema = z.enum(['TRUE', 'FALSE', 'CONDITIONAL']).openapi('IsModifiable')

const ChangeTypeSchema = z.enum(['IMMEDIATE', 'REQUIRES_REBOOT']).openapi('ChangeType')

const ParameterSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    ParameterType: ParameterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether the parameter can be applied to any nodes, or only nodes of a particular type.',
        }),
    ).exactOptional(),
    ParameterValue: StringSchema.and(
      z.any().openapi({ description: 'The value for the parameter.' }),
    ).exactOptional(),
    NodeTypeSpecificValues: NodeTypeSpecificValueListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of node types, and specific parameter values for each node.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the parameter' }),
    ).exactOptional(),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How the parameter is defined. For example, <code>system</code> denotes a system-defined parameter.',
        }),
    ).exactOptional(),
    DataType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The data type of the parameter. For example, <code>integer</code>:',
        }),
    ).exactOptional(),
    AllowedValues: StringSchema.and(
      z.any().openapi({ description: 'A range of values within which the parameter can be set.' }),
    ).exactOptional(),
    IsModifiable: IsModifiableSchema.and(
      z.any().openapi({ description: 'Whether the customer is allowed to modify the parameter.' }),
    ).exactOptional(),
    ChangeType: ChangeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The conditions under which changes to this parameter can be applied. For example, <code>requires-reboot</code> indicates that a new value for this parameter will only take effect if a node is rebooted.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Describes an individual setting that controls some aspect of DAX behavior.',
    required: [],
  })
  .openapi('Parameter')

const ParameterListSchema = z.array(ParameterSchema).openapi('ParameterList')

const DescribeDefaultParametersResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Parameters: ParameterListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of parameters. Each element in the list represents one parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDefaultParametersResponse')

const DescribeDefaultParametersRequestSchema = z
  .object({
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeDefaultParametersRequest', required: [] })
  .openapi('DescribeDefaultParametersRequest')

const SourceTypeSchema = z
  .enum(['CLUSTER', 'PARAMETER_GROUP', 'SUBNET_GROUP'])
  .openapi('SourceType')

const EventSchema = z
  .object({
    SourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the event. For example, if the event occurred at the node level, the source would be the node ID.',
        }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the origin of this event - a cluster, a parameter group, a node ID, etc.',
        }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'A user-defined message associated with the event.' }),
    ).exactOptional(),
    Date: TStampSchema.and(
      z.any().openapi({ description: 'The date and time when the event occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.',
    required: [],
  })
  .openapi('Event')

const EventListSchema = z.array(EventSchema).openapi('EventList')

const DescribeEventsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Events: EventListSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of events. Each element in the array represents one event.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEventsResponse')

const DescribeEventsRequestSchema = z
  .object({
    SourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the event source for which events will be returned. If not specified, then all sources are included in the response.',
        }),
    ).exactOptional(),
    SourceType: SourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The event source to retrieve events for. If no value is specified, all events are returned.',
        }),
    ).exactOptional(),
    StartTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The beginning of the time interval to retrieve events for, specified in ISO 8601 format.',
        }),
    ).exactOptional(),
    EndTime: TStampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end of the time interval for which to retrieve events, specified in ISO 8601 format.',
        }),
    ).exactOptional(),
    Duration: IntegerOptionalSchema.and(
      z.any().openapi({ description: "The number of minutes' worth of events to retrieve." }),
    ).exactOptional(),
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeEventsRequest', required: [] })
  .openapi('DescribeEventsRequest')

const ParameterGroupListSchema = z.array(ParameterGroupSchema).openapi('ParameterGroupList')

const DescribeParameterGroupsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    ParameterGroups: ParameterGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of parameter groups. Each element in the array represents one parameter group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeParameterGroupsResponse')

const ParameterGroupNameListSchema = z.array(StringSchema).openapi('ParameterGroupNameList')

const DescribeParameterGroupsRequestSchema = z
  .object({
    ParameterGroupNames: ParameterGroupNameListSchema.and(
      z.any().openapi({ description: 'The names of the parameter groups.' }),
    ).exactOptional(),
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeParameterGroupsRequest', required: [] })
  .openapi('DescribeParameterGroupsRequest')

const DescribeParametersResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    Parameters: ParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of parameters within a parameter group. Each element in the list represents one parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeParametersResponse')

const DescribeParametersRequestSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter group.' }),
    ),
    Source: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'How the parameter is defined. For example, <code>system</code> denotes a system-defined parameter.',
        }),
    ).exactOptional(),
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ParameterGroupName'], title: 'DescribeParametersRequest' })
  .openapi('DescribeParametersRequest')

const SubnetGroupListSchema = z.array(SubnetGroupSchema).openapi('SubnetGroupList')

const DescribeSubnetGroupsResponseSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides an identifier to allow retrieval of paginated results.',
        }),
    ).exactOptional(),
    SubnetGroups: SubnetGroupListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of subnet groups. Each element in the array represents a single subnet group.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSubnetGroupsResponse')

const SubnetGroupNameListSchema = z.array(StringSchema).openapi('SubnetGroupNameList')

const DescribeSubnetGroupsRequestSchema = z
  .object({
    SubnetGroupNames: SubnetGroupNameListSchema.and(
      z.any().openapi({ description: 'The name of the subnet group.' }),
    ).exactOptional(),
    MaxResults: IntegerOptionalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p> <p>The value for <code>MaxResults</code> must be between 20 and 100.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeSubnetGroupsRequest', required: [] })
  .openapi('DescribeSubnetGroupsRequest')

const IncreaseReplicationFactorResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the DAX cluster. with its new replication factor.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IncreaseReplicationFactorResponse')

const IncreaseReplicationFactorRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DAX cluster that will receive additional nodes.',
        }),
    ),
    NewReplicationFactor: IntegerSchema.and(
      z.any().openapi({ description: 'The new number of nodes for the DAX cluster.' }),
    ),
    AvailabilityZones: AvailabilityZoneListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Availability Zones (AZs) in which the cluster nodes will be created. All nodes belonging to the cluster are placed in these Availability Zones. Use this parameter if you want to distribute the nodes across multiple AZs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ClusterName', 'NewReplicationFactor'],
    title: 'IncreaseReplicationFactorRequest',
  })
  .openapi('IncreaseReplicationFactorRequest')

const ListTagsResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'A list of tags currently associated with the DAX cluster.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If this value is present, there are additional results to be displayed. To retrieve them, call <code>ListTags</code> again, with <code>NextToken</code> set to this value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsResponse')

const ListTagsRequestSchema = z
  .object({
    ResourceName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DAX resource to which the tags belong.' }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceName'], title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const InvalidARNFaultSchema = z.any().openapi('InvalidARNFault')

const RebootNodeResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the DAX cluster after a node has been rebooted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RebootNodeResponse')

const RebootNodeRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DAX cluster containing the node to be rebooted.',
        }),
    ),
    NodeId: StringSchema.and(
      z.any().openapi({ description: 'The system-assigned ID of the node to be rebooted.' }),
    ),
  })
  .openapi({ required: ['ClusterName', 'NodeId'], title: 'RebootNodeRequest' })
  .openapi('RebootNodeRequest')

const TagResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({ description: 'The list of tags that are associated with the DAX resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the DAX resource to which tags should be added.' }),
    ),
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags to be assigned to the DAX resource. ' }),
    ),
  })
  .openapi({ required: ['ResourceName', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tag keys that have been removed from the cluster.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UntagResourceResponse')

const KeyListSchema = z.array(StringSchema).openapi('KeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the DAX resource from which the tags should be removed.',
        }),
    ),
    TagKeys: KeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag keys. If the DAX cluster has any tags with these keys, then the tags are removed from the cluster.',
        }),
    ),
  })
  .openapi({ required: ['ResourceName', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const TagNotFoundFaultSchema = z.any().openapi('TagNotFoundFault')

const UpdateClusterResponseSchema = z
  .object({
    Cluster: ClusterSchema.and(
      z
        .any()
        .openapi({ description: 'A description of the DAX cluster, after it has been modified.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateClusterResponse')

const UpdateClusterRequestSchema = z
  .object({
    ClusterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DAX cluster to be modified.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the changes being made to the cluster.' }),
    ).exactOptional(),
    PreferredMaintenanceWindow: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A range of time when maintenance of DAX cluster software will be performed. For example: <code>sun:01:00-sun:09:00</code>. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.',
        }),
    ).exactOptional(),
    NotificationTopicArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) that identifies the topic.' }),
    ).exactOptional(),
    NotificationTopicStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the topic. A value of “active” means that notifications will be sent to the topic. A value of “inactive” means that notifications will not be sent to the topic.',
        }),
    ).exactOptional(),
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of a parameter group for this cluster.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of user-specified security group IDs to be assigned to each node in the DAX cluster. If this parameter is not specified, DAX assigns the default VPC security group to each node.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ClusterName'], title: 'UpdateClusterRequest' })
  .openapi('UpdateClusterRequest')

const UpdateParameterGroupResponseSchema = z
  .object({
    ParameterGroup: ParameterGroupSchema.and(
      z.any().openapi({ description: 'The parameter group that has been modified.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateParameterGroupResponse')

const ParameterNameValueSchema = z
  .object({
    ParameterName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter.' }),
    ).exactOptional(),
    ParameterValue: StringSchema.and(
      z.any().openapi({ description: 'The value of the parameter.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An individual DAX parameter.', required: [] })
  .openapi('ParameterNameValue')

const ParameterNameValueListSchema = z
  .array(ParameterNameValueSchema)
  .openapi('ParameterNameValueList')

const UpdateParameterGroupRequestSchema = z
  .object({
    ParameterGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the parameter group.' }),
    ),
    ParameterNameValues: ParameterNameValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.</p> <note> <p> <code>record-ttl-millis</code> and <code>query-ttl-millis</code> are the only supported parameter names. For more details, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl">Configuring TTL Settings</a>.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['ParameterGroupName', 'ParameterNameValues'],
    title: 'UpdateParameterGroupRequest',
  })
  .openapi('UpdateParameterGroupRequest')

const UpdateSubnetGroupResponseSchema = z
  .object({
    SubnetGroup: SubnetGroupSchema.and(
      z.any().openapi({ description: 'The subnet group that has been modified.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSubnetGroupResponse')

const UpdateSubnetGroupRequestSchema = z
  .object({
    SubnetGroupName: StringSchema.and(
      z.any().openapi({ description: 'The name of the subnet group.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'A description of the subnet group.' }),
    ).exactOptional(),
    SubnetIds: SubnetIdentifierListSchema.and(
      z.any().openapi({ description: 'A list of subnet IDs in the subnet group.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['SubnetGroupName'], title: 'UpdateSubnetGroupRequest' })
  .openapi('UpdateSubnetGroupRequest')

const SubnetInUseSchema = z.any().openapi('SubnetInUse')

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

export const postXAmzTargetAmazonDAXV3CreateClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.CreateCluster',
  description: 'Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.',
  operationId: 'CreateCluster',
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
        .literal('AmazonDAXV3.CreateCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.CreateCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClusterResponseSchema } },
    },
    480: {
      description: 'ClusterAlreadyExistsFault',
      content: { 'application/json': { schema: ClusterAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    482: {
      description: 'InsufficientClusterCapacityFault',
      content: { 'application/json': { schema: InsufficientClusterCapacityFaultSchema } },
    },
    483: {
      description: 'SubnetGroupNotFoundFault',
      content: { 'application/json': { schema: SubnetGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterGroupStateFault',
      content: { 'application/json': { schema: InvalidParameterGroupStateFaultSchema } },
    },
    485: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    486: {
      description: 'ClusterQuotaForCustomerExceededFault',
      content: { 'application/json': { schema: ClusterQuotaForCustomerExceededFaultSchema } },
    },
    487: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'application/json': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    488: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'application/json': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    489: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'application/json': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    490: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'application/json': { schema: TagQuotaPerResourceExceededSchema } },
    },
    491: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    492: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    493: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
    494: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3CreateParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.CreateParameterGroup',
  description:
    'Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.',
  operationId: 'CreateParameterGroup',
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
        .literal('AmazonDAXV3.CreateParameterGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.CreateParameterGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateParameterGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateParameterGroupResponseSchema } },
    },
    480: {
      description: 'ParameterGroupQuotaExceededFault',
      content: { 'application/json': { schema: ParameterGroupQuotaExceededFaultSchema } },
    },
    481: {
      description: 'ParameterGroupAlreadyExistsFault',
      content: { 'application/json': { schema: ParameterGroupAlreadyExistsFaultSchema } },
    },
    482: {
      description: 'InvalidParameterGroupStateFault',
      content: { 'application/json': { schema: InvalidParameterGroupStateFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3CreateSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup',
  description: 'Creates a new subnet group.',
  operationId: 'CreateSubnetGroup',
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
        .literal('AmazonDAXV3.CreateSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.CreateSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSubnetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSubnetGroupResponseSchema } },
    },
    480: {
      description: 'SubnetGroupAlreadyExistsFault',
      content: { 'application/json': { schema: SubnetGroupAlreadyExistsFaultSchema } },
    },
    481: {
      description: 'SubnetGroupQuotaExceededFault',
      content: { 'application/json': { schema: SubnetGroupQuotaExceededFaultSchema } },
    },
    482: {
      description: 'SubnetQuotaExceededFault',
      content: { 'application/json': { schema: SubnetQuotaExceededFaultSchema } },
    },
    483: {
      description: 'InvalidSubnet',
      content: { 'application/json': { schema: InvalidSubnetSchema } },
    },
    484: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DecreaseReplicationFactorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor',
  description:
    '<p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>',
  operationId: 'DecreaseReplicationFactor',
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
        .literal('AmazonDAXV3.DecreaseReplicationFactor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DecreaseReplicationFactor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DecreaseReplicationFactorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DecreaseReplicationFactorResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'NodeNotFoundFault',
      content: { 'application/json': { schema: NodeNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DeleteClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DeleteCluster',
  description:
    'Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.',
  operationId: 'DeleteCluster',
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
        .literal('AmazonDAXV3.DeleteCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DeleteCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteClusterResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DeleteParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup',
  description:
    'Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.',
  operationId: 'DeleteParameterGroup',
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
        .literal('AmazonDAXV3.DeleteParameterGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DeleteParameterGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteParameterGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteParameterGroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterGroupStateFault',
      content: { 'application/json': { schema: InvalidParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DeleteSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup',
  description:
    '<p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>',
  operationId: 'DeleteSubnetGroup',
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
        .literal('AmazonDAXV3.DeleteSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DeleteSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSubnetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSubnetGroupResponseSchema } },
    },
    480: {
      description: 'SubnetGroupInUseFault',
      content: { 'application/json': { schema: SubnetGroupInUseFaultSchema } },
    },
    481: {
      description: 'SubnetGroupNotFoundFault',
      content: { 'application/json': { schema: SubnetGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeClustersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeClusters',
  description:
    '<p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>',
  operationId: 'DescribeClusters',
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
        .literal('AmazonDAXV3.DescribeClusters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeClusters'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeClustersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClustersResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeDefaultParametersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters',
  description: 'Returns the default system parameter information for the DAX caching software.',
  operationId: 'DescribeDefaultParameters',
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
        .literal('AmazonDAXV3.DescribeDefaultParameters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeDefaultParameters'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDefaultParametersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDefaultParametersResponseSchema } },
    },
    480: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeEvents',
  description:
    "<p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>",
  operationId: 'DescribeEvents',
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
        .literal('AmazonDAXV3.DescribeEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeEvents'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEventsResponseSchema } },
    },
    480: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeParameterGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups',
  description:
    'Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.',
  operationId: 'DescribeParameterGroups',
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
        .literal('AmazonDAXV3.DescribeParameterGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeParameterGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeParameterGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeParameterGroupsResponseSchema } },
    },
    480: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeParametersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeParameters',
  description: 'Returns the detailed parameter list for a particular parameter group.',
  operationId: 'DescribeParameters',
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
        .literal('AmazonDAXV3.DescribeParameters')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeParameters'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeParametersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeParametersResponseSchema } },
    },
    480: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3DescribeSubnetGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups',
  description:
    'Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.',
  operationId: 'DescribeSubnetGroups',
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
        .literal('AmazonDAXV3.DescribeSubnetGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.DescribeSubnetGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeSubnetGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSubnetGroupsResponseSchema } },
    },
    480: {
      description: 'SubnetGroupNotFoundFault',
      content: { 'application/json': { schema: SubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3IncreaseReplicationFactorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor',
  description: 'Adds one or more nodes to a DAX cluster.',
  operationId: 'IncreaseReplicationFactor',
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
        .literal('AmazonDAXV3.IncreaseReplicationFactor')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.IncreaseReplicationFactor'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IncreaseReplicationFactorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IncreaseReplicationFactorResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    482: {
      description: 'InsufficientClusterCapacityFault',
      content: { 'application/json': { schema: InsufficientClusterCapacityFaultSchema } },
    },
    483: {
      description: 'InvalidVPCNetworkStateFault',
      content: { 'application/json': { schema: InvalidVPCNetworkStateFaultSchema } },
    },
    484: {
      description: 'NodeQuotaForClusterExceededFault',
      content: { 'application/json': { schema: NodeQuotaForClusterExceededFaultSchema } },
    },
    485: {
      description: 'NodeQuotaForCustomerExceededFault',
      content: { 'application/json': { schema: NodeQuotaForCustomerExceededFaultSchema } },
    },
    486: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    487: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    488: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3ListTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.ListTags',
  description:
    'List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.',
  operationId: 'ListTags',
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
        .literal('AmazonDAXV3.ListTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.ListTags'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidARNFault',
      content: { 'application/json': { schema: InvalidARNFaultSchema } },
    },
    482: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3RebootNodeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.RebootNode',
  description:
    '<p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>',
  operationId: 'RebootNode',
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
        .literal('AmazonDAXV3.RebootNode')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.RebootNode'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RebootNodeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RebootNodeResponseSchema } },
    },
    480: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'NodeNotFoundFault',
      content: { 'application/json': { schema: NodeNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    483: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    484: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    485: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.TagResource',
  description:
    'Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. ',
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
        .literal('AmazonDAXV3.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.TagResource'] },
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
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'TagQuotaPerResourceExceeded',
      content: { 'application/json': { schema: TagQuotaPerResourceExceededSchema } },
    },
    482: {
      description: 'InvalidARNFault',
      content: { 'application/json': { schema: InvalidARNFaultSchema } },
    },
    483: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    484: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.UntagResource',
  description:
    'Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. ',
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
        .literal('AmazonDAXV3.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.UntagResource'] },
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
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    481: {
      description: 'InvalidARNFault',
      content: { 'application/json': { schema: InvalidARNFaultSchema } },
    },
    482: {
      description: 'TagNotFoundFault',
      content: { 'application/json': { schema: TagNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    484: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3UpdateClusterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.UpdateCluster',
  description:
    'Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.',
  operationId: 'UpdateCluster',
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
        .literal('AmazonDAXV3.UpdateCluster')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.UpdateCluster'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateClusterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClusterResponseSchema } },
    },
    480: {
      description: 'InvalidClusterStateFault',
      content: { 'application/json': { schema: InvalidClusterStateFaultSchema } },
    },
    481: {
      description: 'ClusterNotFoundFault',
      content: { 'application/json': { schema: ClusterNotFoundFaultSchema } },
    },
    482: {
      description: 'InvalidParameterGroupStateFault',
      content: { 'application/json': { schema: InvalidParameterGroupStateFaultSchema } },
    },
    483: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    484: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    485: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3UpdateParameterGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup',
  description:
    'Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.',
  operationId: 'UpdateParameterGroup',
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
        .literal('AmazonDAXV3.UpdateParameterGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.UpdateParameterGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateParameterGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateParameterGroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterGroupStateFault',
      content: { 'application/json': { schema: InvalidParameterGroupStateFaultSchema } },
    },
    481: {
      description: 'ParameterGroupNotFoundFault',
      content: { 'application/json': { schema: ParameterGroupNotFoundFaultSchema } },
    },
    482: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'InvalidParameterCombinationException',
      content: { 'application/json': { schema: InvalidParameterCombinationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonDAXV3UpdateSubnetGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup',
  description: 'Modifies an existing subnet group.',
  operationId: 'UpdateSubnetGroup',
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
        .literal('AmazonDAXV3.UpdateSubnetGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonDAXV3.UpdateSubnetGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSubnetGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSubnetGroupResponseSchema } },
    },
    480: {
      description: 'SubnetGroupNotFoundFault',
      content: { 'application/json': { schema: SubnetGroupNotFoundFaultSchema } },
    },
    481: {
      description: 'SubnetQuotaExceededFault',
      content: { 'application/json': { schema: SubnetQuotaExceededFaultSchema } },
    },
    482: {
      description: 'SubnetInUse',
      content: { 'application/json': { schema: SubnetInUseSchema } },
    },
    483: {
      description: 'InvalidSubnet',
      content: { 'application/json': { schema: InvalidSubnetSchema } },
    },
    484: {
      description: 'ServiceLinkedRoleNotFoundFault',
      content: { 'application/json': { schema: ServiceLinkedRoleNotFoundFaultSchema } },
    },
  },
})
