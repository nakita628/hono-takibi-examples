type CreateClusterRequest = {
  ClusterName: {}
  NodeType: {}
  Description?: {} | undefined
  ReplicationFactor: {}
  AvailabilityZones?: {} | undefined
  SubnetGroupName?: {} | undefined
  SecurityGroupIds?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  NotificationTopicArn?: {} | undefined
  IamRoleArn: {}
  ParameterGroupName?: {} | undefined
  Tags?: {} | undefined
  SSESpecification?: { Enabled: {} } | undefined
  ClusterEndpointEncryptionType?: {} | undefined
}
type CreateClusterResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type CreateParameterGroupRequest = { ParameterGroupName: {}; Description?: {} | undefined }
type CreateParameterGroupResponse = {
  ParameterGroup?: { ParameterGroupName?: {} | undefined; Description?: {} | undefined } | undefined
}
type CreateSubnetGroupRequest = { SubnetGroupName: {}; Description?: {} | undefined; SubnetIds: {} }
type CreateSubnetGroupResponse = {
  SubnetGroup?:
    | {
        SubnetGroupName?: {} | undefined
        Description?: {} | undefined
        VpcId?: {} | undefined
        Subnets?: {} | undefined
      }
    | undefined
}
type DecreaseReplicationFactorRequest = {
  ClusterName: {}
  NewReplicationFactor: {}
  AvailabilityZones?: {} | undefined
  NodeIdsToRemove?: {} | undefined
}
type DecreaseReplicationFactorResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type DeleteClusterRequest = { ClusterName: {} }
type DeleteClusterResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type DeleteParameterGroupRequest = { ParameterGroupName: {} }
type DeleteParameterGroupResponse = { DeletionMessage?: {} | undefined }
type DeleteSubnetGroupRequest = { SubnetGroupName: {} }
type DeleteSubnetGroupResponse = { DeletionMessage?: {} | undefined }
type DescribeClustersRequest = {
  ClusterNames?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeClustersResponse = { NextToken?: {} | undefined; Clusters?: {} | undefined }
type DescribeDefaultParametersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type DescribeDefaultParametersResponse = { NextToken?: {} | undefined; Parameters?: {} | undefined }
type DescribeEventsRequest = {
  SourceName?: {} | undefined
  SourceType?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Duration?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEventsResponse = { NextToken?: {} | undefined; Events?: {} | undefined }
type DescribeParameterGroupsRequest = {
  ParameterGroupNames?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeParameterGroupsResponse = {
  NextToken?: {} | undefined
  ParameterGroups?: {} | undefined
}
type DescribeParametersRequest = {
  ParameterGroupName: {}
  Source?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeParametersResponse = { NextToken?: {} | undefined; Parameters?: {} | undefined }
type DescribeSubnetGroupsRequest = {
  SubnetGroupNames?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSubnetGroupsResponse = { NextToken?: {} | undefined; SubnetGroups?: {} | undefined }
type IncreaseReplicationFactorRequest = {
  ClusterName: {}
  NewReplicationFactor: {}
  AvailabilityZones?: {} | undefined
}
type IncreaseReplicationFactorResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type ListTagsRequest = { ResourceName: {}; NextToken?: {} | undefined }
type ListTagsResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type RebootNodeRequest = { ClusterName: {}; NodeId: {} }
type RebootNodeResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceName: {}; Tags: {} }
type TagResourceResponse = { Tags?: {} | undefined }
type UntagResourceRequest = { ResourceName: {}; TagKeys: {} }
type UntagResourceResponse = { Tags?: {} | undefined }
type UpdateClusterRequest = {
  ClusterName: {}
  Description?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  NotificationTopicArn?: {} | undefined
  NotificationTopicStatus?: {} | undefined
  ParameterGroupName?: {} | undefined
  SecurityGroupIds?: {} | undefined
}
type UpdateClusterResponse = {
  Cluster?:
    | {
        ClusterName?: {} | undefined
        Description?: {} | undefined
        ClusterArn?: {} | undefined
        TotalNodes?: {} | undefined
        ActiveNodes?: {} | undefined
        NodeType?: {} | undefined
        Status?: {} | undefined
        ClusterDiscoveryEndpoint?:
          | { Address?: {} | undefined; Port?: {} | undefined; URL?: {} | undefined }
          | undefined
        NodeIdsToRemove?: {} | undefined
        Nodes?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        NotificationConfiguration?:
          | { TopicArn?: {} | undefined; TopicStatus?: {} | undefined }
          | undefined
        SubnetGroup?: {} | undefined
        SecurityGroups?: {} | undefined
        IamRoleArn?: {} | undefined
        ParameterGroup?:
          | {
              ParameterGroupName?: {} | undefined
              ParameterApplyStatus?: {} | undefined
              NodeIdsToReboot?: {} | undefined
            }
          | undefined
        SSEDescription?: { Status?: {} | undefined } | undefined
        ClusterEndpointEncryptionType?: {} | undefined
      }
    | undefined
}
type UpdateParameterGroupRequest = { ParameterGroupName: {}; ParameterNameValues: {} }
type UpdateParameterGroupResponse = {
  ParameterGroup?: { ParameterGroupName?: {} | undefined; Description?: {} | undefined } | undefined
}
type UpdateSubnetGroupRequest = {
  SubnetGroupName: {}
  Description?: {} | undefined
  SubnetIds?: {} | undefined
}
type UpdateSubnetGroupResponse = {
  SubnetGroup?:
    | {
        SubnetGroupName?: {} | undefined
        Description?: {} | undefined
        VpcId?: {} | undefined
        Subnets?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonDAXV3.CreateCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.CreateCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterRequest }
        output: CreateClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.CreateParameterGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.CreateParameterGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateParameterGroupRequest }
        output: CreateParameterGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.CreateSubnetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSubnetGroupRequest }
        output: CreateSubnetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DecreaseReplicationFactor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DecreaseReplicationFactorRequest }
        output: DecreaseReplicationFactorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DeleteCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DeleteCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterRequest }
        output: DeleteClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DeleteParameterGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteParameterGroupRequest }
        output: DeleteParameterGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DeleteSubnetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSubnetGroupRequest }
        output: DeleteSubnetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeClusters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeClusters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClustersRequest }
        output: DescribeClustersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeDefaultParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDefaultParametersRequest }
        output: DescribeDefaultParametersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeEvents': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventsRequest }
        output: DescribeEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeParameterGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeParameterGroupsRequest }
        output: DescribeParameterGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeParametersRequest }
        output: DescribeParametersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.DescribeSubnetGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSubnetGroupsRequest }
        output: DescribeSubnetGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.IncreaseReplicationFactor'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IncreaseReplicationFactorRequest }
        output: IncreaseReplicationFactorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.ListTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.ListTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsRequest }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.RebootNode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.RebootNode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootNodeRequest }
        output: RebootNodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.UpdateCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.UpdateCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateClusterRequest }
        output: UpdateClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.UpdateParameterGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateParameterGroupRequest }
        output: UpdateParameterGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonDAXV3.UpdateSubnetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSubnetGroupRequest }
        output: UpdateSubnetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
