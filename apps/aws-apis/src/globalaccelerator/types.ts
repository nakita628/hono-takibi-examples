type AddCustomRoutingEndpointsRequest = { EndpointConfigurations: {}; EndpointGroupArn: {} }
type AddCustomRoutingEndpointsResponse = {
  EndpointDescriptions?: {} | undefined
  EndpointGroupArn?: {} | undefined
}
type AddEndpointsRequest = { EndpointConfigurations: {}; EndpointGroupArn: {} }
type AddEndpointsResponse = {
  EndpointDescriptions?: {} | undefined
  EndpointGroupArn?: {} | undefined
}
type AdvertiseByoipCidrRequest = { Cidr: {} }
type AdvertiseByoipCidrResponse = {
  ByoipCidr?: { Cidr?: {} | undefined; State?: {} | undefined; Events?: {} | undefined } | undefined
}
type AllowCustomRoutingTrafficRequest = {
  EndpointGroupArn: {}
  EndpointId: {}
  DestinationAddresses?: {} | undefined
  DestinationPorts?: {} | undefined
  AllowAllTrafficToEndpoint?: {} | undefined
}
type CreateAcceleratorRequest = {
  Name: {}
  IpAddressType?: {} | undefined
  IpAddresses?: {} | undefined
  Enabled?: {} | undefined
  IdempotencyToken: {}
  Tags?: {} | undefined
}
type CreateAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        DualStackDnsName?: {} | undefined
        Events?: {} | undefined
      }
    | undefined
}
type CreateCustomRoutingAcceleratorRequest = {
  Name: {}
  IpAddressType?: {} | undefined
  IpAddresses?: {} | undefined
  Enabled?: {} | undefined
  IdempotencyToken: {}
  Tags?: {} | undefined
}
type CreateCustomRoutingAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type CreateCustomRoutingEndpointGroupRequest = {
  ListenerArn: {}
  EndpointGroupRegion: {}
  DestinationConfigurations: {}
  IdempotencyToken: {}
}
type CreateCustomRoutingEndpointGroupResponse = {
  EndpointGroup?:
    | {
        EndpointGroupArn?: {} | undefined
        EndpointGroupRegion?: {} | undefined
        DestinationDescriptions?: {} | undefined
        EndpointDescriptions?: {} | undefined
      }
    | undefined
}
type CreateCustomRoutingListenerRequest = {
  AcceleratorArn: {}
  PortRanges: {}
  IdempotencyToken: {}
}
type CreateCustomRoutingListenerResponse = {
  Listener?: { ListenerArn?: {} | undefined; PortRanges?: {} | undefined } | undefined
}
type CreateEndpointGroupRequest = {
  ListenerArn: {}
  EndpointGroupRegion: {}
  EndpointConfigurations?: {} | undefined
  TrafficDialPercentage?: {} | undefined
  HealthCheckPort?: {} | undefined
  HealthCheckProtocol?: {} | undefined
  HealthCheckPath?: {} | undefined
  HealthCheckIntervalSeconds?: {} | undefined
  ThresholdCount?: {} | undefined
  IdempotencyToken: {}
  PortOverrides?: {} | undefined
}
type CreateEndpointGroupResponse = {
  EndpointGroup?:
    | {
        EndpointGroupArn?: {} | undefined
        EndpointGroupRegion?: {} | undefined
        EndpointDescriptions?: {} | undefined
        TrafficDialPercentage?: {} | undefined
        HealthCheckPort?: {} | undefined
        HealthCheckProtocol?: {} | undefined
        HealthCheckPath?: {} | undefined
        HealthCheckIntervalSeconds?: {} | undefined
        ThresholdCount?: {} | undefined
        PortOverrides?: {} | undefined
      }
    | undefined
}
type CreateListenerRequest = {
  AcceleratorArn: {}
  PortRanges: {}
  Protocol: {}
  ClientAffinity?: {} | undefined
  IdempotencyToken: {}
}
type CreateListenerResponse = {
  Listener?:
    | {
        ListenerArn?: {} | undefined
        PortRanges?: {} | undefined
        Protocol?: {} | undefined
        ClientAffinity?: {} | undefined
      }
    | undefined
}
type DeleteAcceleratorRequest = { AcceleratorArn: {} }
type DeleteCustomRoutingAcceleratorRequest = { AcceleratorArn: {} }
type DeleteCustomRoutingEndpointGroupRequest = { EndpointGroupArn: {} }
type DeleteCustomRoutingListenerRequest = { ListenerArn: {} }
type DeleteEndpointGroupRequest = { EndpointGroupArn: {} }
type DeleteListenerRequest = { ListenerArn: {} }
type DenyCustomRoutingTrafficRequest = {
  EndpointGroupArn: {}
  EndpointId: {}
  DestinationAddresses?: {} | undefined
  DestinationPorts?: {} | undefined
  DenyAllTrafficToEndpoint?: {} | undefined
}
type DeprovisionByoipCidrRequest = { Cidr: {} }
type DeprovisionByoipCidrResponse = {
  ByoipCidr?: { Cidr?: {} | undefined; State?: {} | undefined; Events?: {} | undefined } | undefined
}
type DescribeAcceleratorRequest = { AcceleratorArn: {} }
type DescribeAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        DualStackDnsName?: {} | undefined
        Events?: {} | undefined
      }
    | undefined
}
type DescribeAcceleratorAttributesRequest = { AcceleratorArn: {} }
type DescribeAcceleratorAttributesResponse = {
  AcceleratorAttributes?:
    | {
        FlowLogsEnabled?: {} | undefined
        FlowLogsS3Bucket?: {} | undefined
        FlowLogsS3Prefix?: {} | undefined
      }
    | undefined
}
type DescribeCustomRoutingAcceleratorRequest = { AcceleratorArn: {} }
type DescribeCustomRoutingAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type DescribeCustomRoutingAcceleratorAttributesRequest = { AcceleratorArn: {} }
type DescribeCustomRoutingAcceleratorAttributesResponse = {
  AcceleratorAttributes?:
    | {
        FlowLogsEnabled?: {} | undefined
        FlowLogsS3Bucket?: {} | undefined
        FlowLogsS3Prefix?: {} | undefined
      }
    | undefined
}
type DescribeCustomRoutingEndpointGroupRequest = { EndpointGroupArn: {} }
type DescribeCustomRoutingEndpointGroupResponse = {
  EndpointGroup?:
    | {
        EndpointGroupArn?: {} | undefined
        EndpointGroupRegion?: {} | undefined
        DestinationDescriptions?: {} | undefined
        EndpointDescriptions?: {} | undefined
      }
    | undefined
}
type DescribeCustomRoutingListenerRequest = { ListenerArn: {} }
type DescribeCustomRoutingListenerResponse = {
  Listener?: { ListenerArn?: {} | undefined; PortRanges?: {} | undefined } | undefined
}
type DescribeEndpointGroupRequest = { EndpointGroupArn: {} }
type DescribeEndpointGroupResponse = {
  EndpointGroup?:
    | {
        EndpointGroupArn?: {} | undefined
        EndpointGroupRegion?: {} | undefined
        EndpointDescriptions?: {} | undefined
        TrafficDialPercentage?: {} | undefined
        HealthCheckPort?: {} | undefined
        HealthCheckProtocol?: {} | undefined
        HealthCheckPath?: {} | undefined
        HealthCheckIntervalSeconds?: {} | undefined
        ThresholdCount?: {} | undefined
        PortOverrides?: {} | undefined
      }
    | undefined
}
type DescribeListenerRequest = { ListenerArn: {} }
type DescribeListenerResponse = {
  Listener?:
    | {
        ListenerArn?: {} | undefined
        PortRanges?: {} | undefined
        Protocol?: {} | undefined
        ClientAffinity?: {} | undefined
      }
    | undefined
}
type ListAcceleratorsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListAcceleratorsResponse = { Accelerators?: {} | undefined; NextToken?: {} | undefined }
type ListByoipCidrsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListByoipCidrsResponse = { ByoipCidrs?: {} | undefined; NextToken?: {} | undefined }
type ListCustomRoutingAcceleratorsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingAcceleratorsResponse = {
  Accelerators?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingEndpointGroupsRequest = {
  ListenerArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingEndpointGroupsResponse = {
  EndpointGroups?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingListenersRequest = {
  AcceleratorArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingListenersResponse = { Listeners?: {} | undefined; NextToken?: {} | undefined }
type ListCustomRoutingPortMappingsRequest = {
  AcceleratorArn: {}
  EndpointGroupArn?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingPortMappingsResponse = {
  PortMappings?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingPortMappingsByDestinationRequest = {
  EndpointId: {}
  DestinationAddress: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomRoutingPortMappingsByDestinationResponse = {
  DestinationPortMappings?: {} | undefined
  NextToken?: {} | undefined
}
type ListEndpointGroupsRequest = {
  ListenerArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListEndpointGroupsResponse = { EndpointGroups?: {} | undefined; NextToken?: {} | undefined }
type ListListenersRequest = {
  AcceleratorArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListListenersResponse = { Listeners?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ProvisionByoipCidrRequest = {
  Cidr: {}
  CidrAuthorizationContext: { Message: {}; Signature: {} }
}
type ProvisionByoipCidrResponse = {
  ByoipCidr?: { Cidr?: {} | undefined; State?: {} | undefined; Events?: {} | undefined } | undefined
}
type RemoveCustomRoutingEndpointsRequest = { EndpointIds: {}; EndpointGroupArn: {} }
type RemoveEndpointsRequest = { EndpointIdentifiers: {}; EndpointGroupArn: {} }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAcceleratorRequest = {
  AcceleratorArn: {}
  Name?: {} | undefined
  IpAddressType?: {} | undefined
  Enabled?: {} | undefined
}
type UpdateAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
        DualStackDnsName?: {} | undefined
        Events?: {} | undefined
      }
    | undefined
}
type UpdateAcceleratorAttributesRequest = {
  AcceleratorArn: {}
  FlowLogsEnabled?: {} | undefined
  FlowLogsS3Bucket?: {} | undefined
  FlowLogsS3Prefix?: {} | undefined
}
type UpdateAcceleratorAttributesResponse = {
  AcceleratorAttributes?:
    | {
        FlowLogsEnabled?: {} | undefined
        FlowLogsS3Bucket?: {} | undefined
        FlowLogsS3Prefix?: {} | undefined
      }
    | undefined
}
type UpdateCustomRoutingAcceleratorRequest = {
  AcceleratorArn: {}
  Name?: {} | undefined
  IpAddressType?: {} | undefined
  Enabled?: {} | undefined
}
type UpdateCustomRoutingAcceleratorResponse = {
  Accelerator?:
    | {
        AcceleratorArn?: {} | undefined
        Name?: {} | undefined
        IpAddressType?: {} | undefined
        Enabled?: {} | undefined
        IpSets?: {} | undefined
        DnsName?: {} | undefined
        Status?: {} | undefined
        CreatedTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type UpdateCustomRoutingAcceleratorAttributesRequest = {
  AcceleratorArn: {}
  FlowLogsEnabled?: {} | undefined
  FlowLogsS3Bucket?: {} | undefined
  FlowLogsS3Prefix?: {} | undefined
}
type UpdateCustomRoutingAcceleratorAttributesResponse = {
  AcceleratorAttributes?:
    | {
        FlowLogsEnabled?: {} | undefined
        FlowLogsS3Bucket?: {} | undefined
        FlowLogsS3Prefix?: {} | undefined
      }
    | undefined
}
type UpdateCustomRoutingListenerRequest = { ListenerArn: {}; PortRanges: {} }
type UpdateCustomRoutingListenerResponse = {
  Listener?: { ListenerArn?: {} | undefined; PortRanges?: {} | undefined } | undefined
}
type UpdateEndpointGroupRequest = {
  EndpointGroupArn: {}
  EndpointConfigurations?: {} | undefined
  TrafficDialPercentage?: {} | undefined
  HealthCheckPort?: {} | undefined
  HealthCheckProtocol?: {} | undefined
  HealthCheckPath?: {} | undefined
  HealthCheckIntervalSeconds?: {} | undefined
  ThresholdCount?: {} | undefined
  PortOverrides?: {} | undefined
}
type UpdateEndpointGroupResponse = {
  EndpointGroup?:
    | {
        EndpointGroupArn?: {} | undefined
        EndpointGroupRegion?: {} | undefined
        EndpointDescriptions?: {} | undefined
        TrafficDialPercentage?: {} | undefined
        HealthCheckPort?: {} | undefined
        HealthCheckProtocol?: {} | undefined
        HealthCheckPath?: {} | undefined
        HealthCheckIntervalSeconds?: {} | undefined
        ThresholdCount?: {} | undefined
        PortOverrides?: {} | undefined
      }
    | undefined
}
type UpdateListenerRequest = {
  ListenerArn: {}
  PortRanges?: {} | undefined
  Protocol?: {} | undefined
  ClientAffinity?: {} | undefined
}
type UpdateListenerResponse = {
  Listener?:
    | {
        ListenerArn?: {} | undefined
        PortRanges?: {} | undefined
        Protocol?: {} | undefined
        ClientAffinity?: {} | undefined
      }
    | undefined
}
type WithdrawByoipCidrRequest = { Cidr: {} }
type WithdrawByoipCidrResponse = {
  ByoipCidr?: { Cidr?: {} | undefined; State?: {} | undefined; Events?: {} | undefined } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddCustomRoutingEndpointsRequest }
        output: AddCustomRoutingEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.AddEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddEndpointsRequest }
        output: AddEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.AdvertiseByoipCidr'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AdvertiseByoipCidrRequest }
        output: AdvertiseByoipCidrResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AllowCustomRoutingTrafficRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAcceleratorRequest }
        output: CreateAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomRoutingAcceleratorRequest }
        output: CreateCustomRoutingAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomRoutingEndpointGroupRequest }
        output: CreateCustomRoutingEndpointGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateCustomRoutingListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomRoutingListenerRequest }
        output: CreateCustomRoutingListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEndpointGroupRequest }
        output: CreateEndpointGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.CreateListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateListenerRequest }
        output: CreateListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAcceleratorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomRoutingAcceleratorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomRoutingEndpointGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteCustomRoutingListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomRoutingListenerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEndpointGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeleteListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteListenerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DenyCustomRoutingTrafficRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DeprovisionByoipCidr'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprovisionByoipCidrRequest }
        output: DeprovisionByoipCidrResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAcceleratorRequest }
        output: DescribeAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAcceleratorAttributesRequest }
        output: DescribeAcceleratorAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomRoutingAcceleratorRequest }
        output: DescribeCustomRoutingAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomRoutingAcceleratorAttributesRequest }
        output: DescribeCustomRoutingAcceleratorAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomRoutingEndpointGroupRequest }
        output: DescribeCustomRoutingEndpointGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeCustomRoutingListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomRoutingListenerRequest }
        output: DescribeCustomRoutingListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEndpointGroupRequest }
        output: DescribeEndpointGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.DescribeListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeListenerRequest }
        output: DescribeListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListAccelerators'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAcceleratorsRequest }
        output: ListAcceleratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListByoipCidrs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListByoipCidrsRequest }
        output: ListByoipCidrsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomRoutingAcceleratorsRequest }
        output: ListCustomRoutingAcceleratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomRoutingEndpointGroupsRequest }
        output: ListCustomRoutingEndpointGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListCustomRoutingListeners'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomRoutingListenersRequest }
        output: ListCustomRoutingListenersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomRoutingPortMappingsRequest }
        output: ListCustomRoutingPortMappingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomRoutingPortMappingsByDestinationRequest }
        output: ListCustomRoutingPortMappingsByDestinationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListEndpointGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEndpointGroupsRequest }
        output: ListEndpointGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListListeners'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListListenersRequest }
        output: ListListenersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.ProvisionByoipCidr'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ProvisionByoipCidrRequest }
        output: ProvisionByoipCidrResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveCustomRoutingEndpointsRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.RemoveEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveEndpointsRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.TagResource'
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
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UntagResource'
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
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAcceleratorRequest }
        output: UpdateAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAcceleratorAttributesRequest }
        output: UpdateAcceleratorAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCustomRoutingAcceleratorRequest }
        output: UpdateCustomRoutingAcceleratorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCustomRoutingAcceleratorAttributesRequest }
        output: UpdateCustomRoutingAcceleratorAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateCustomRoutingListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCustomRoutingListenerRequest }
        output: UpdateCustomRoutingListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateEndpointGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEndpointGroupRequest }
        output: UpdateEndpointGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.UpdateListener'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateListenerRequest }
        output: UpdateListenerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'GlobalAccelerator_V20180706.WithdrawByoipCidr'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: WithdrawByoipCidrRequest }
        output: WithdrawByoipCidrResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
