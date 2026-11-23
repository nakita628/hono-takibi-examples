type AddCustomRoutingEndpointsRequest = { EndpointConfigurations: {}; EndpointGroupArn: {} }
type AddCustomRoutingEndpointsResponse = {
  EndpointDescriptions?: {} | undefined
  EndpointGroupArn?: {} | undefined
}
type EndpointAlreadyExistsException = { [x: string]: unknown }
type EndpointGroupNotFoundException = { [x: string]: unknown }
type InternalServiceErrorException = { [x: string]: unknown }
type InvalidArgumentException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type AddEndpointsRequest = { EndpointConfigurations: {}; EndpointGroupArn: {} }
type AddEndpointsResponse = {
  EndpointDescriptions?: {} | undefined
  EndpointGroupArn?: {} | undefined
}
type TransactionInProgressException = { [x: string]: unknown }
type AdvertiseByoipCidrRequest = { Cidr: {} }
type AdvertiseByoipCidrResponse = {
  ByoipCidr?: { Cidr?: {} | undefined; State?: {} | undefined; Events?: {} | undefined } | undefined
}
type ByoipCidrNotFoundException = { [x: string]: unknown }
type IncorrectCidrStateException = { [x: string]: unknown }
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
type AcceleratorNotFoundException = { [x: string]: unknown }
type EndpointGroupAlreadyExistsException = { [x: string]: unknown }
type ListenerNotFoundException = { [x: string]: unknown }
type InvalidPortRangeException = { [x: string]: unknown }
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
type AcceleratorNotDisabledException = { [x: string]: unknown }
type AssociatedListenerFoundException = { [x: string]: unknown }
type DeleteCustomRoutingAcceleratorRequest = { AcceleratorArn: {} }
type DeleteCustomRoutingEndpointGroupRequest = { EndpointGroupArn: {} }
type DeleteCustomRoutingListenerRequest = { ListenerArn: {} }
type AssociatedEndpointGroupFoundException = { [x: string]: unknown }
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
type InvalidNextTokenException = { [x: string]: unknown }
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
type EndpointNotFoundException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: EndpointAlreadyExistsException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints': {
      $post:
        | {
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
        | {
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
            output: TransactionInProgressException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ByoipCidrNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: IncorrectCidrStateException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic': {
      $post:
        | {
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
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidPortRangeException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidPortRangeException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidPortRangeException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AcceleratorNotDisabledException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AssociatedListenerFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AcceleratorNotDisabledException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AssociatedListenerFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AssociatedEndpointGroupFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AssociatedEndpointGroupFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic': {
      $post:
        | {
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
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ByoipCidrNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: IncorrectCidrStateException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: EndpointNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: IncorrectCidrStateException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints': {
      $post:
        | {
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
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints': {
      $post:
        | {
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
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TransactionInProgressException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.TagResource': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes': {
      $post:
        | {
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
        | {
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
            output: AcceleratorNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidPortRangeException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: EndpointGroupNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener': {
      $post:
        | {
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
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidPortRangeException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ListenerNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr': {
      $post:
        | {
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
        | {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidArgumentException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ByoipCidrNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: IncorrectCidrStateException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
