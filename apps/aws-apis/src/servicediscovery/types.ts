type CreateHttpNamespaceRequest = {
  Name: {}
  CreatorRequestId?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreateHttpNamespaceResponse = { OperationId?: {} | undefined }
type InvalidInput = { [x: string]: unknown }
type NamespaceAlreadyExists = { [x: string]: unknown }
type ResourceLimitExceeded = { [x: string]: unknown }
type DuplicateRequest = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
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
type NamespaceNotFound = { [x: string]: unknown }
type ServiceAlreadyExists = { [x: string]: unknown }
type DeleteNamespaceRequest = { Id: {} }
type DeleteNamespaceResponse = { OperationId?: {} | undefined }
type ResourceInUse = { [x: string]: unknown }
type DeleteServiceRequest = { Id: {} }
type DeleteServiceResponse = { [x: string]: unknown }
type ServiceNotFound = { [x: string]: unknown }
type DeregisterInstanceRequest = { ServiceId: {}; InstanceId: {} }
type DeregisterInstanceResponse = { OperationId?: {} | undefined }
type InstanceNotFound = { [x: string]: unknown }
type DiscoverInstancesRequest = {
  NamespaceName: {}
  ServiceName: {}
  MaxResults?: {} | undefined
  QueryParameters?: {} | undefined
  OptionalParameters?: {} | undefined
  HealthStatus?: {} | undefined
}
type DiscoverInstancesResponse = { Instances?: {} | undefined }
type RequestLimitExceeded = { [x: string]: unknown }
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
type OperationNotFound = { [x: string]: unknown }
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
type ResourceNotFoundException = { [x: string]: unknown }
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
type CustomHealthNotFound = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceAlreadyExists
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceAlreadyExists
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceAlreadyExists
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceAlreadyExists
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance': {
      $post:
        | {
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
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InstanceNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances': {
      $post:
        | {
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
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: RequestLimitExceeded
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance': {
      $post:
        | {
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
        | {
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
            output: InstanceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InstanceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetService': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance': {
      $post:
        | {
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
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus': {
      $post:
        | {
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
        | {
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
            output: InstanceNotFound
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: CustomHealthNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace': {
      $post:
        | {
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
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NamespaceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceInUse
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService': {
      $post:
        | {
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
        | {
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
            output: DuplicateRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidInput
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServiceNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
