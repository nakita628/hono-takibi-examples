type AccessPointName = string
type Tag = { Key: {}; Value?: {} | undefined }
type AddTagsOutput = { [x: string]: unknown }
type AccessPointNotFoundException = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type DuplicateTagKeysException = { [x: string]: unknown }
type AddTagsInput = { LoadBalancerNames: {}; Tags: {} }
type SecurityGroupId = string
type ApplySecurityGroupsToLoadBalancerOutput = { SecurityGroups?: {} | undefined }
type InvalidConfigurationRequestException = { [x: string]: unknown }
type InvalidSecurityGroupException = { [x: string]: unknown }
type ApplySecurityGroupsToLoadBalancerInput = { LoadBalancerName: {}; SecurityGroups: {} }
type SubnetId = string
type AttachLoadBalancerToSubnetsOutput = { Subnets?: {} | undefined }
type SubnetNotFoundException = { [x: string]: unknown }
type InvalidSubnetException = { [x: string]: unknown }
type AttachLoadBalancerToSubnetsInput = { LoadBalancerName: {}; Subnets: {} }
type ConfigureHealthCheckOutput = {
  HealthCheck?:
    | { Target: {}; Interval: {}; Timeout: {}; UnhealthyThreshold: {}; HealthyThreshold: {} }
    | undefined
}
type ConfigureHealthCheckInput = {
  LoadBalancerName: {}
  HealthCheck: {
    Target: {}
    Interval: {}
    Timeout: {}
    UnhealthyThreshold: {}
    HealthyThreshold: {}
  }
}
type CreateAppCookieStickinessPolicyOutput = { [x: string]: unknown }
type DuplicatePolicyNameException = { [x: string]: unknown }
type TooManyPoliciesException = { [x: string]: unknown }
type CreateAppCookieStickinessPolicyInput = { LoadBalancerName: {}; PolicyName: {}; CookieName: {} }
type CreateLBCookieStickinessPolicyOutput = { [x: string]: unknown }
type CreateLBCookieStickinessPolicyInput = {
  LoadBalancerName: {}
  PolicyName: {}
  CookieExpirationPeriod?: {} | undefined
}
type Listener = {
  Protocol: {}
  LoadBalancerPort: {}
  InstanceProtocol?: {} | undefined
  InstancePort: {}
  SSLCertificateId?: {} | undefined
}
type AvailabilityZone = string
type CreateAccessPointOutput = { DNSName?: {} | undefined }
type DuplicateAccessPointNameException = { [x: string]: unknown }
type TooManyAccessPointsException = { [x: string]: unknown }
type CertificateNotFoundException = { [x: string]: unknown }
type InvalidSchemeException = { [x: string]: unknown }
type UnsupportedProtocolException = { [x: string]: unknown }
type OperationNotPermittedException = { [x: string]: unknown }
type CreateAccessPointInput = {
  LoadBalancerName: {}
  Listeners: {}
  AvailabilityZones?: {} | undefined
  Subnets?: {} | undefined
  SecurityGroups?: {} | undefined
  Scheme?: {} | undefined
  Tags?: {} | undefined
}
type CreateLoadBalancerListenerOutput = { [x: string]: unknown }
type DuplicateListenerException = { [x: string]: unknown }
type CreateLoadBalancerListenerInput = { LoadBalancerName: {}; Listeners: {} }
type PolicyAttribute = { AttributeName?: {} | undefined; AttributeValue?: {} | undefined }
type CreateLoadBalancerPolicyOutput = { [x: string]: unknown }
type PolicyTypeNotFoundException = { [x: string]: unknown }
type CreateLoadBalancerPolicyInput = {
  LoadBalancerName: {}
  PolicyName: {}
  PolicyTypeName: {}
  PolicyAttributes?: {} | undefined
}
type DeleteAccessPointOutput = { [x: string]: unknown }
type DeleteAccessPointInput = { LoadBalancerName: {} }
type AccessPointPort = number
type DeleteLoadBalancerListenerOutput = { [x: string]: unknown }
type DeleteLoadBalancerListenerInput = { LoadBalancerName: {}; LoadBalancerPorts: {} }
type DeleteLoadBalancerPolicyOutput = { [x: string]: unknown }
type DeleteLoadBalancerPolicyInput = { LoadBalancerName: {}; PolicyName: {} }
type Instance = { InstanceId?: {} | undefined }
type DeregisterEndPointsOutput = { Instances?: {} | undefined }
type InvalidEndPointException = { [x: string]: unknown }
type DeregisterEndPointsInput = { LoadBalancerName: {}; Instances: {} }
type DescribeAccountLimitsOutput = { Limits?: {} | undefined; NextMarker?: {} | undefined }
type DescribeAccountLimitsInput = { Marker?: {} | undefined; PageSize?: {} | undefined }
type DescribeEndPointStateOutput = { InstanceStates?: {} | undefined }
type DescribeEndPointStateInput = { LoadBalancerName: {}; Instances?: {} | undefined }
type DescribeLoadBalancerAttributesOutput = {
  LoadBalancerAttributes?:
    | {
        CrossZoneLoadBalancing?: { Enabled: {} } | undefined
        AccessLog?:
          | {
              Enabled: {}
              S3BucketName?: {} | undefined
              EmitInterval?: {} | undefined
              S3BucketPrefix?: {} | undefined
            }
          | undefined
        ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
        ConnectionSettings?: { IdleTimeout: {} } | undefined
        AdditionalAttributes?: {} | undefined
      }
    | undefined
}
type LoadBalancerAttributeNotFoundException = { [x: string]: unknown }
type DescribeLoadBalancerAttributesInput = { LoadBalancerName: {} }
type PolicyName = string
type DescribeLoadBalancerPoliciesOutput = { PolicyDescriptions?: {} | undefined }
type PolicyNotFoundException = { [x: string]: unknown }
type DescribeLoadBalancerPoliciesInput = {
  LoadBalancerName?: {} | undefined
  PolicyNames?: {} | undefined
}
type PolicyTypeName = string
type DescribeLoadBalancerPolicyTypesOutput = { PolicyTypeDescriptions?: {} | undefined }
type DescribeLoadBalancerPolicyTypesInput = { PolicyTypeNames?: {} | undefined }
type DescribeAccessPointsOutput = {
  LoadBalancerDescriptions?: {} | undefined
  NextMarker?: {} | undefined
}
type DependencyThrottleException = { [x: string]: unknown }
type DescribeAccessPointsInput = {
  LoadBalancerNames?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type DescribeTagsOutput = { TagDescriptions?: {} | undefined }
type DescribeTagsInput = { LoadBalancerNames: {} }
type DetachLoadBalancerFromSubnetsOutput = { Subnets?: {} | undefined }
type DetachLoadBalancerFromSubnetsInput = { LoadBalancerName: {}; Subnets: {} }
type RemoveAvailabilityZonesOutput = { AvailabilityZones?: {} | undefined }
type RemoveAvailabilityZonesInput = { LoadBalancerName: {}; AvailabilityZones: {} }
type AddAvailabilityZonesOutput = { AvailabilityZones?: {} | undefined }
type AddAvailabilityZonesInput = { LoadBalancerName: {}; AvailabilityZones: {} }
type ModifyLoadBalancerAttributesOutput = {
  LoadBalancerName?: {} | undefined
  LoadBalancerAttributes?:
    | {
        CrossZoneLoadBalancing?: { Enabled: {} } | undefined
        AccessLog?:
          | {
              Enabled: {}
              S3BucketName?: {} | undefined
              EmitInterval?: {} | undefined
              S3BucketPrefix?: {} | undefined
            }
          | undefined
        ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
        ConnectionSettings?: { IdleTimeout: {} } | undefined
        AdditionalAttributes?: {} | undefined
      }
    | undefined
}
type ModifyLoadBalancerAttributesInput = {
  LoadBalancerName: {}
  LoadBalancerAttributes: {
    CrossZoneLoadBalancing?: { Enabled: {} } | undefined
    AccessLog?:
      | {
          Enabled: {}
          S3BucketName?: {} | undefined
          EmitInterval?: {} | undefined
          S3BucketPrefix?: {} | undefined
        }
      | undefined
    ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
    ConnectionSettings?: { IdleTimeout: {} } | undefined
    AdditionalAttributes?: {} | undefined
  }
}
type RegisterEndPointsOutput = { Instances?: {} | undefined }
type RegisterEndPointsInput = { LoadBalancerName: {}; Instances: {} }
type TagKeyOnly = { Key?: {} | undefined }
type RemoveTagsOutput = { [x: string]: unknown }
type RemoveTagsInput = { LoadBalancerNames: {}; Tags: {} }
type SetLoadBalancerListenerSSLCertificateOutput = { [x: string]: unknown }
type ListenerNotFoundException = { [x: string]: unknown }
type SetLoadBalancerListenerSSLCertificateInput = {
  LoadBalancerName: {}
  LoadBalancerPort: {}
  SSLCertificateId: {}
}
type SetLoadBalancerPoliciesForBackendServerOutput = { [x: string]: unknown }
type SetLoadBalancerPoliciesForBackendServerInput = {
  LoadBalancerName: {}
  InstancePort: {}
  PolicyNames: {}
}
type SetLoadBalancerPoliciesOfListenerOutput = { [x: string]: unknown }
type SetLoadBalancerPoliciesOfListenerInput = {
  LoadBalancerName: {}
  LoadBalancerPort: {}
  PolicyNames: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddTags': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AddTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicateTagKeysException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'AddTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: AddTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddTagsInput }
            output: DuplicateTagKeysException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ApplySecurityGroupsToLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                SecurityGroups: SecurityGroupId[]
                Action: 'ApplySecurityGroupsToLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ApplySecurityGroupsToLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                SecurityGroups: SecurityGroupId[]
                Action: 'ApplySecurityGroupsToLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                SecurityGroups: SecurityGroupId[]
                Action: 'ApplySecurityGroupsToLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                SecurityGroups: SecurityGroupId[]
                Action: 'ApplySecurityGroupsToLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'ApplySecurityGroupsToLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplySecurityGroupsToLoadBalancerInput }
            output: ApplySecurityGroupsToLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'ApplySecurityGroupsToLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplySecurityGroupsToLoadBalancerInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'ApplySecurityGroupsToLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplySecurityGroupsToLoadBalancerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'ApplySecurityGroupsToLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ApplySecurityGroupsToLoadBalancerInput }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=AttachLoadBalancerToSubnets': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'AttachLoadBalancerToSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AttachLoadBalancerToSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'AttachLoadBalancerToSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'AttachLoadBalancerToSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'AttachLoadBalancerToSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'AttachLoadBalancerToSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'AttachLoadBalancerToSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachLoadBalancerToSubnetsInput }
            output: AttachLoadBalancerToSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AttachLoadBalancerToSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachLoadBalancerToSubnetsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AttachLoadBalancerToSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachLoadBalancerToSubnetsInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AttachLoadBalancerToSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachLoadBalancerToSubnetsInput }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AttachLoadBalancerToSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachLoadBalancerToSubnetsInput }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=ConfigureHealthCheck': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                HealthCheck: {
                  Target: {}
                  Interval: {}
                  Timeout: {}
                  UnhealthyThreshold: {}
                  HealthyThreshold: {}
                }
                Action: 'ConfigureHealthCheck'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConfigureHealthCheckOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                HealthCheck: {
                  Target: {}
                  Interval: {}
                  Timeout: {}
                  UnhealthyThreshold: {}
                  HealthyThreshold: {}
                }
                Action: 'ConfigureHealthCheck'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'ConfigureHealthCheck'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfigureHealthCheckInput }
            output: ConfigureHealthCheckOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ConfigureHealthCheck'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ConfigureHealthCheckInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=CreateAppCookieStickinessPolicy': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieName: string
                Action: 'CreateAppCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateAppCookieStickinessPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieName: string
                Action: 'CreateAppCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieName: string
                Action: 'CreateAppCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieName: string
                Action: 'CreateAppCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieName: string
                Action: 'CreateAppCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'CreateAppCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppCookieStickinessPolicyInput }
            output: CreateAppCookieStickinessPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'CreateAppCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppCookieStickinessPolicyInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'CreateAppCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppCookieStickinessPolicyInput }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'CreateAppCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppCookieStickinessPolicyInput }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'CreateAppCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppCookieStickinessPolicyInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CreateLBCookieStickinessPolicy': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieExpirationPeriod?: number | undefined
                Action: 'CreateLBCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateLBCookieStickinessPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieExpirationPeriod?: number | undefined
                Action: 'CreateLBCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieExpirationPeriod?: number | undefined
                Action: 'CreateLBCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieExpirationPeriod?: number | undefined
                Action: 'CreateLBCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                CookieExpirationPeriod?: number | undefined
                Action: 'CreateLBCookieStickinessPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'CreateLBCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLBCookieStickinessPolicyInput }
            output: CreateLBCookieStickinessPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'CreateLBCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLBCookieStickinessPolicyInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'CreateLBCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLBCookieStickinessPolicyInput }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'CreateLBCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLBCookieStickinessPolicyInput }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'CreateLBCookieStickinessPolicy'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLBCookieStickinessPolicyInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=CreateLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateAccessPointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicateAccessPointNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyAccessPointsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidSchemeException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicateTagKeysException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                AvailabilityZones?: AvailabilityZone[] | undefined
                Subnets?: SubnetId[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: string | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 491
          }
      $post:
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: CreateAccessPointOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: DuplicateAccessPointNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: TooManyAccessPointsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: InvalidSchemeException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: DuplicateTagKeysException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAccessPointInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 491
          }
    }
  } & {
    '/#Action=CreateLoadBalancerListeners': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateLoadBalancerListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicateListenerException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Listeners: Listener[]
                Action: 'CreateLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: CreateLoadBalancerListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: DuplicateListenerException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerListenerInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=CreateLoadBalancerPolicy': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateLoadBalancerPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PolicyTypeNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                PolicyTypeName: string
                PolicyAttributes?: PolicyAttribute[] | undefined
                Action: 'CreateLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: CreateLoadBalancerPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: PolicyTypeNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: DuplicatePolicyNameException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: TooManyPoliciesException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerPolicyInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=DeleteLoadBalancer': {
      $get: {
        input: {
          query: { LoadBalancerName: string; Action: 'DeleteLoadBalancer'; Version: '2012-06-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteAccessPointOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteLoadBalancer'; Version: '2012-06-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccessPointInput }
        output: DeleteAccessPointOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteLoadBalancerListeners': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPorts: AccessPointPort[]
                Action: 'DeleteLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLoadBalancerListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPorts: AccessPointPort[]
                Action: 'DeleteLoadBalancerListeners'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerListenerInput }
            output: DeleteLoadBalancerListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancerListeners'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerListenerInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeleteLoadBalancerPolicy': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                Action: 'DeleteLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteLoadBalancerPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                Action: 'DeleteLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                PolicyName: string
                Action: 'DeleteLoadBalancerPolicy'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerPolicyInput }
            output: DeleteLoadBalancerPolicyOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerPolicyInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancerPolicy'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerPolicyInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeregisterInstancesFromLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'DeregisterInstancesFromLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeregisterEndPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'DeregisterInstancesFromLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'DeregisterInstancesFromLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DeregisterInstancesFromLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEndPointsInput }
            output: DeregisterEndPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DeregisterInstancesFromLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEndPointsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DeregisterInstancesFromLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEndPointsInput }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeAccountLimits': {
      $get: {
        input: {
          query: {
            Marker?: string | undefined
            PageSize?: number | undefined
            Action: 'DescribeAccountLimits'
            Version: '2012-06-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAccountLimitsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAccountLimits'; Version: '2012-06-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountLimitsInput }
        output: DescribeAccountLimitsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeInstanceHealth': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances?: Instance[] | undefined
                Action: 'DescribeInstanceHealth'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeEndPointStateOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances?: Instance[] | undefined
                Action: 'DescribeInstanceHealth'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances?: Instance[] | undefined
                Action: 'DescribeInstanceHealth'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeInstanceHealth'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndPointStateInput }
            output: DescribeEndPointStateOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeInstanceHealth'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndPointStateInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeInstanceHealth'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEndPointStateInput }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeLoadBalancerAttributes': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Action: 'DescribeLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeLoadBalancerAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Action: 'DescribeLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Action: 'DescribeLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LoadBalancerAttributeNotFoundException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerAttributes'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerAttributesInput }
            output: DescribeLoadBalancerAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerAttributes'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerAttributesInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerAttributes'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerAttributesInput }
            output: LoadBalancerAttributeNotFoundException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeLoadBalancerPolicies': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName?: string | undefined
                PolicyNames?: PolicyName[] | undefined
                Action: 'DescribeLoadBalancerPolicies'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeLoadBalancerPoliciesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName?: string | undefined
                PolicyNames?: PolicyName[] | undefined
                Action: 'DescribeLoadBalancerPolicies'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName?: string | undefined
                PolicyNames?: PolicyName[] | undefined
                Action: 'DescribeLoadBalancerPolicies'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DescribeLoadBalancerPolicies'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerPoliciesInput }
            output: DescribeLoadBalancerPoliciesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeLoadBalancerPolicies'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerPoliciesInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeLoadBalancerPolicies'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerPoliciesInput }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeLoadBalancerPolicyTypes': {
      $get:
        | {
            input: {
              query: {
                PolicyTypeNames?: PolicyTypeName[] | undefined
                Action: 'DescribeLoadBalancerPolicyTypes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeLoadBalancerPolicyTypesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                PolicyTypeNames?: PolicyTypeName[] | undefined
                Action: 'DescribeLoadBalancerPolicyTypes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PolicyTypeNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerPolicyTypes'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerPolicyTypesInput }
            output: DescribeLoadBalancerPolicyTypesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerPolicyTypes'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBalancerPolicyTypesInput }
            output: PolicyTypeNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeLoadBalancers': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerNames?: AccessPointName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeAccessPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerNames?: AccessPointName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerNames?: AccessPointName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DependencyThrottleException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAccessPointsInput }
            output: DescribeAccessPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAccessPointsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAccessPointsInput }
            output: DependencyThrottleException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeTags': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Action: 'DescribeTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Action: 'DescribeTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: DescribeTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTagsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DetachLoadBalancerFromSubnets': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'DetachLoadBalancerFromSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DetachLoadBalancerFromSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'DetachLoadBalancerFromSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Subnets: SubnetId[]
                Action: 'DetachLoadBalancerFromSubnets'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DetachLoadBalancerFromSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetachLoadBalancerFromSubnetsInput }
            output: DetachLoadBalancerFromSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DetachLoadBalancerFromSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetachLoadBalancerFromSubnetsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DetachLoadBalancerFromSubnets'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetachLoadBalancerFromSubnetsInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DisableAvailabilityZonesForLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                AvailabilityZones: AvailabilityZone[]
                Action: 'DisableAvailabilityZonesForLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RemoveAvailabilityZonesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                AvailabilityZones: AvailabilityZone[]
                Action: 'DisableAvailabilityZonesForLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                AvailabilityZones: AvailabilityZone[]
                Action: 'DisableAvailabilityZonesForLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'DisableAvailabilityZonesForLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveAvailabilityZonesInput }
            output: RemoveAvailabilityZonesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'DisableAvailabilityZonesForLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveAvailabilityZonesInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'DisableAvailabilityZonesForLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveAvailabilityZonesInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=EnableAvailabilityZonesForLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                AvailabilityZones: AvailabilityZone[]
                Action: 'EnableAvailabilityZonesForLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AddAvailabilityZonesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                AvailabilityZones: AvailabilityZone[]
                Action: 'EnableAvailabilityZonesForLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'EnableAvailabilityZonesForLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddAvailabilityZonesInput }
            output: AddAvailabilityZonesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'EnableAvailabilityZonesForLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddAvailabilityZonesInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=ModifyLoadBalancerAttributes': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerAttributes: {
                  CrossZoneLoadBalancing?: { Enabled: {} } | undefined
                  AccessLog?:
                    | {
                        Enabled: {}
                        S3BucketName?: {} | undefined
                        EmitInterval?: {} | undefined
                        S3BucketPrefix?: {} | undefined
                      }
                    | undefined
                  ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
                  ConnectionSettings?: { IdleTimeout: {} } | undefined
                  AdditionalAttributes?: {} | undefined
                }
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ModifyLoadBalancerAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerAttributes: {
                  CrossZoneLoadBalancing?: { Enabled: {} } | undefined
                  AccessLog?:
                    | {
                        Enabled: {}
                        S3BucketName?: {} | undefined
                        EmitInterval?: {} | undefined
                        S3BucketPrefix?: {} | undefined
                      }
                    | undefined
                  ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
                  ConnectionSettings?: { IdleTimeout: {} } | undefined
                  AdditionalAttributes?: {} | undefined
                }
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerAttributes: {
                  CrossZoneLoadBalancing?: { Enabled: {} } | undefined
                  AccessLog?:
                    | {
                        Enabled: {}
                        S3BucketName?: {} | undefined
                        EmitInterval?: {} | undefined
                        S3BucketPrefix?: {} | undefined
                      }
                    | undefined
                  ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
                  ConnectionSettings?: { IdleTimeout: {} } | undefined
                  AdditionalAttributes?: {} | undefined
                }
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LoadBalancerAttributeNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerAttributes: {
                  CrossZoneLoadBalancing?: { Enabled: {} } | undefined
                  AccessLog?:
                    | {
                        Enabled: {}
                        S3BucketName?: {} | undefined
                        EmitInterval?: {} | undefined
                        S3BucketPrefix?: {} | undefined
                      }
                    | undefined
                  ConnectionDraining?: { Enabled: {}; Timeout?: {} | undefined } | undefined
                  ConnectionSettings?: { IdleTimeout: {} } | undefined
                  AdditionalAttributes?: {} | undefined
                }
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyLoadBalancerAttributesInput }
            output: ModifyLoadBalancerAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyLoadBalancerAttributesInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyLoadBalancerAttributesInput }
            output: LoadBalancerAttributeNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyLoadBalancerAttributesInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=RegisterInstancesWithLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'RegisterInstancesWithLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RegisterEndPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'RegisterInstancesWithLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                Instances: Instance[]
                Action: 'RegisterInstancesWithLoadBalancer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: { Action: 'RegisterInstancesWithLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEndPointsInput }
            output: RegisterEndPointsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'RegisterInstancesWithLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEndPointsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'RegisterInstancesWithLoadBalancer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEndPointsInput }
            output: InvalidEndPointException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RemoveTags': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: TagKeyOnly[]
                Action: 'RemoveTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RemoveTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerNames: AccessPointName[]
                Tags: TagKeyOnly[]
                Action: 'RemoveTags'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsInput }
            output: RemoveTagsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2012-06-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveTagsInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=SetLoadBalancerListenerSSLCertificate': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SetLoadBalancerListenerSSLCertificateOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                SSLCertificateId: string
                Action: 'SetLoadBalancerListenerSSLCertificate'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: SetLoadBalancerListenerSSLCertificateOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerListenerSSLCertificate'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerListenerSSLCertificateInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SetLoadBalancerPoliciesForBackendServer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                InstancePort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesForBackendServer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SetLoadBalancerPoliciesForBackendServerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                InstancePort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesForBackendServer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                InstancePort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesForBackendServer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                InstancePort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesForBackendServer'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesForBackendServer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesForBackendServerInput }
            output: SetLoadBalancerPoliciesForBackendServerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesForBackendServer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesForBackendServerInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesForBackendServer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesForBackendServerInput }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesForBackendServer'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesForBackendServerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=SetLoadBalancerPoliciesOfListener': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesOfListener'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SetLoadBalancerPoliciesOfListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesOfListener'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesOfListener'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesOfListener'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerName: string
                LoadBalancerPort: number
                PolicyNames: PolicyName[]
                Action: 'SetLoadBalancerPoliciesOfListener'
                Version: '2012-06-01'
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesOfListener'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesOfListenerInput }
            output: SetLoadBalancerPoliciesOfListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesOfListener'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesOfListenerInput }
            output: AccessPointNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesOfListener'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesOfListenerInput }
            output: PolicyNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesOfListener'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesOfListenerInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: { Action: 'SetLoadBalancerPoliciesOfListener'; Version: '2012-06-01' }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBalancerPoliciesOfListenerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 483
          }
    }
  },
  '/'
>
export default routes
