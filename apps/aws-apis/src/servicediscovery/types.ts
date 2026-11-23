type CreateHttpNamespaceRequest = {
  Name: {}
  CreatorRequestId?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateHttpNamespaceResponse = { OperationId?: {} | undefined }
type CreatePrivateDnsNamespaceRequest = {
  Name: {}
  CreatorRequestId?: {} | undefined
  Description?: {} | undefined
  Vpc: {}
  Tags?: {} | undefined
  Properties?: { DnsProperties: { SOA: { TTL: {} } } } | undefined
}
type CreatePrivateDnsNamespaceResponse = { OperationId?: {} | undefined }
type CreatePublicDnsNamespaceRequest = {
  Name: {}
  CreatorRequestId?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
  Properties?: { DnsProperties: { SOA: { TTL: {} } } } | undefined
}
type CreatePublicDnsNamespaceResponse = { OperationId?: {} | undefined }
type CreateServiceRequest = {
  Name: {}
  NamespaceId?: {} | undefined
  CreatorRequestId?: {} | undefined
  Description?: {} | undefined
  DnsConfig?:
    | { NamespaceId?: {} | undefined; RoutingPolicy?: {} | undefined; DnsRecords: {} }
    | undefined
  HealthCheckConfig?:
    | { Type: {}; ResourcePath?: {} | undefined; FailureThreshold?: {} | undefined }
    | undefined
  HealthCheckCustomConfig?: { FailureThreshold?: {} | undefined } | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
}
type CreateServiceResponse = {
  Service?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        NamespaceId?: {} | undefined
        Description?: {} | undefined
        InstanceCount?: {} | undefined
        DnsConfig?:
          | { NamespaceId?: {} | undefined; RoutingPolicy?: {} | undefined; DnsRecords: {} }
          | undefined
        Type?: {} | undefined
        HealthCheckConfig?:
          | { Type: {}; ResourcePath?: {} | undefined; FailureThreshold?: {} | undefined }
          | undefined
        HealthCheckCustomConfig?: { FailureThreshold?: {} | undefined } | undefined
        CreateDate?: {} | undefined
        CreatorRequestId?: {} | undefined
      }
    | undefined
}
type DeleteNamespaceRequest = { Id: {} }
type DeleteNamespaceResponse = { OperationId?: {} | undefined }
type DeleteServiceRequest = { Id: {} }
type DeleteServiceResponse = { [x: string]: unknown }
type DeregisterInstanceRequest = { ServiceId: {}; InstanceId: {} }
type DeregisterInstanceResponse = { OperationId?: {} | undefined }
type DiscoverInstancesRequest = {
  NamespaceName: {}
  ServiceName: {}
  MaxResults?: {} | undefined
  QueryParameters?: {} | undefined
  OptionalParameters?: {} | undefined
  HealthStatus?: {} | undefined
}
type DiscoverInstancesResponse = { Instances?: {} | undefined }
type GetInstanceRequest = { ServiceId: {}; InstanceId: {} }
type GetInstanceResponse = {
  Instance?: { Id: {}; CreatorRequestId?: {} | undefined; Attributes?: {} | undefined } | undefined
}
type GetInstancesHealthStatusRequest = {
  ServiceId: {}
  Instances?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetInstancesHealthStatusResponse = { Status?: {} | undefined; NextToken?: {} | undefined }
type GetNamespaceRequest = { Id: {} }
type GetNamespaceResponse = {
  Namespace?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        Type?: {} | undefined
        Description?: {} | undefined
        ServiceCount?: {} | undefined
        Properties?:
          | {
              DnsProperties?:
                | { HostedZoneId?: {} | undefined; SOA?: { TTL: {} } | undefined }
                | undefined
              HttpProperties?: { HttpName?: {} | undefined } | undefined
            }
          | undefined
        CreateDate?: {} | undefined
        CreatorRequestId?: {} | undefined
      }
    | undefined
}
type GetOperationRequest = { OperationId: {} }
type GetOperationResponse = {
  Operation?:
    | {
        Id?: {} | undefined
        Type?: {} | undefined
        Status?: {} | undefined
        ErrorMessage?: {} | undefined
        ErrorCode?: {} | undefined
        CreateDate?: {} | undefined
        UpdateDate?: {} | undefined
        Targets?: {} | undefined
      }
    | undefined
}
type GetServiceRequest = { Id: {} }
type GetServiceResponse = {
  Service?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        NamespaceId?: {} | undefined
        Description?: {} | undefined
        InstanceCount?: {} | undefined
        DnsConfig?:
          | { NamespaceId?: {} | undefined; RoutingPolicy?: {} | undefined; DnsRecords: {} }
          | undefined
        Type?: {} | undefined
        HealthCheckConfig?:
          | { Type: {}; ResourcePath?: {} | undefined; FailureThreshold?: {} | undefined }
          | undefined
        HealthCheckCustomConfig?: { FailureThreshold?: {} | undefined } | undefined
        CreateDate?: {} | undefined
        CreatorRequestId?: {} | undefined
      }
    | undefined
}
type ListInstancesRequest = {
  ServiceId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListInstancesResponse = { Instances?: {} | undefined; NextToken?: {} | undefined }
type ListNamespacesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListNamespacesResponse = { Namespaces?: {} | undefined; NextToken?: {} | undefined }
type ListOperationsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListOperationsResponse = { Operations?: {} | undefined; NextToken?: {} | undefined }
type ListServicesRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
}
type ListServicesResponse = { Services?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type RegisterInstanceRequest = {
  ServiceId: {}
  InstanceId: {}
  CreatorRequestId?: {} | undefined
  Attributes: {}
}
type RegisterInstanceResponse = { OperationId?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateHttpNamespaceRequest = {
  Id: {}
  UpdaterRequestId?: {} | undefined
  Namespace: { Description: {} }
}
type UpdateHttpNamespaceResponse = { OperationId?: {} | undefined }
type UpdateInstanceCustomHealthStatusRequest = { ServiceId: {}; InstanceId: {}; Status: {} }
type UpdatePrivateDnsNamespaceRequest = {
  Id: {}
  UpdaterRequestId?: {} | undefined
  Namespace: {
    Description?: {} | undefined
    Properties?: { DnsProperties: { SOA: { TTL: {} } } } | undefined
  }
}
type UpdatePrivateDnsNamespaceResponse = { OperationId?: {} | undefined }
type UpdatePublicDnsNamespaceRequest = {
  Id: {}
  UpdaterRequestId?: {} | undefined
  Namespace: {
    Description?: {} | undefined
    Properties?: { DnsProperties: { SOA: { TTL: {} } } } | undefined
  }
}
type UpdatePublicDnsNamespaceResponse = { OperationId?: {} | undefined }
type UpdateServiceRequest = {
  Id: {}
  Service: {
    Description?: {} | undefined
    DnsConfig?: { DnsRecords: {} } | undefined
    HealthCheckConfig?:
      | { Type: {}; ResourcePath?: {} | undefined; FailureThreshold?: {} | undefined }
      | undefined
  }
}
type UpdateServiceResponse = { OperationId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.CreateHttpNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHttpNamespaceRequest }
        output: CreateHttpNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePrivateDnsNamespaceRequest }
        output: CreatePrivateDnsNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.CreatePublicDnsNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePublicDnsNamespaceRequest }
        output: CreatePublicDnsNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.CreateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceRequest }
        output: CreateServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.DeleteNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNamespaceRequest }
        output: DeleteNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.DeleteService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceRequest }
        output: DeleteServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.DeregisterInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterInstanceRequest }
        output: DeregisterInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.DiscoverInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DiscoverInstancesRequest }
        output: DiscoverInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.GetInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceRequest }
        output: GetInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.GetInstancesHealthStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstancesHealthStatusRequest }
        output: GetInstancesHealthStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.GetNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetNamespaceRequest }
        output: GetNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.GetOperation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOperationRequest }
        output: GetOperationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.GetService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceRequest }
        output: GetServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.ListInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInstancesRequest }
        output: ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.ListNamespaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNamespacesRequest }
        output: ListNamespacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.ListOperations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOperationsRequest }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.ListServices'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServicesRequest }
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.ListTagsForResource'
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
    '/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.RegisterInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterInstanceRequest }
        output: RegisterInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.TagResource'
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
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UntagResource'
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
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UpdateHttpNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateHttpNamespaceRequest }
        output: UpdateHttpNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateInstanceCustomHealthStatusRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePrivateDnsNamespaceRequest }
        output: UpdatePrivateDnsNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePublicDnsNamespaceRequest }
        output: UpdatePublicDnsNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53AutoNaming_v20170314.UpdateService'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceRequest }
        output: UpdateServiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
