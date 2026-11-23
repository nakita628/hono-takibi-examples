type Certificate = { CertificateArn?: {} | undefined; IsDefault?: {} | undefined }
type AddListenerCertificatesOutput = { Certificates?: {} | undefined }
type ListenerNotFoundException = { [x: string]: unknown }
type TooManyCertificatesException = { [x: string]: unknown }
type CertificateNotFoundException = { [x: string]: unknown }
type AddListenerCertificatesInput = { ListenerArn: {}; Certificates: {} }
type ResourceArn = string
type Tag = { Key: {}; Value?: {} | undefined }
type AddTagsOutput = { [x: string]: unknown }
type DuplicateTagKeysException = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type LoadBalancerNotFoundException = { [x: string]: unknown }
type TargetGroupNotFoundException = { [x: string]: unknown }
type RuleNotFoundException = { [x: string]: unknown }
type AddTagsInput = { ResourceArns: {}; Tags: {} }
type Action = {
  Type: {}
  TargetGroupArn?: {} | undefined
  AuthenticateOidcConfig?:
    | {
        Issuer: {}
        AuthorizationEndpoint: {}
        TokenEndpoint: {}
        UserInfoEndpoint: {}
        ClientId: {}
        ClientSecret?: {} | undefined
        SessionCookieName?: {} | undefined
        Scope?: {} | undefined
        SessionTimeout?: {} | undefined
        AuthenticationRequestExtraParams?: {} | undefined
        OnUnauthenticatedRequest?: {} | undefined
        UseExistingClientSecret?: {} | undefined
      }
    | undefined
  AuthenticateCognitoConfig?:
    | {
        UserPoolArn: {}
        UserPoolClientId: {}
        UserPoolDomain: {}
        SessionCookieName?: {} | undefined
        Scope?: {} | undefined
        SessionTimeout?: {} | undefined
        AuthenticationRequestExtraParams?: {} | undefined
        OnUnauthenticatedRequest?: {} | undefined
      }
    | undefined
  Order?: {} | undefined
  RedirectConfig?:
    | {
        Protocol?: {} | undefined
        Port?: {} | undefined
        Host?: {} | undefined
        Path?: {} | undefined
        Query?: {} | undefined
        StatusCode: {}
      }
    | undefined
  FixedResponseConfig?:
    | { MessageBody?: {} | undefined; StatusCode: {}; ContentType?: {} | undefined }
    | undefined
  ForwardConfig?:
    | {
        TargetGroups?: {} | undefined
        TargetGroupStickinessConfig?:
          | { Enabled?: {} | undefined; DurationSeconds?: {} | undefined }
          | undefined
      }
    | undefined
}
type AlpnPolicyValue = string
type CreateListenerOutput = { Listeners?: {} | undefined }
type DuplicateListenerException = { [x: string]: unknown }
type TooManyListenersException = { [x: string]: unknown }
type TargetGroupAssociationLimitException = { [x: string]: unknown }
type InvalidConfigurationRequestException = { [x: string]: unknown }
type IncompatibleProtocolsException = { [x: string]: unknown }
type SSLPolicyNotFoundException = { [x: string]: unknown }
type UnsupportedProtocolException = { [x: string]: unknown }
type TooManyRegistrationsForTargetIdException = { [x: string]: unknown }
type TooManyTargetsException = { [x: string]: unknown }
type TooManyActionsException = { [x: string]: unknown }
type InvalidLoadBalancerActionException = { [x: string]: unknown }
type TooManyUniqueTargetGroupsPerLoadBalancerException = { [x: string]: unknown }
type ALPNPolicyNotSupportedException = { [x: string]: unknown }
type CreateListenerInput = {
  LoadBalancerArn: {}
  Protocol?: {} | undefined
  Port?: {} | undefined
  SslPolicy?: {} | undefined
  Certificates?: {} | undefined
  DefaultActions: {}
  AlpnPolicy?: {} | undefined
  Tags?: {} | undefined
}
type SubnetId = string
type SubnetMapping = {
  SubnetId?: {} | undefined
  AllocationId?: {} | undefined
  PrivateIPv4Address?: {} | undefined
  IPv6Address?: {} | undefined
}
type SecurityGroupId = string
type CreateLoadBalancerOutput = { LoadBalancers?: {} | undefined }
type DuplicateLoadBalancerNameException = { [x: string]: unknown }
type TooManyLoadBalancersException = { [x: string]: unknown }
type SubnetNotFoundException = { [x: string]: unknown }
type InvalidSubnetException = { [x: string]: unknown }
type InvalidSecurityGroupException = { [x: string]: unknown }
type InvalidSchemeException = { [x: string]: unknown }
type ResourceInUseException = { [x: string]: unknown }
type AllocationIdNotFoundException = { [x: string]: unknown }
type AvailabilityZoneNotSupportedException = { [x: string]: unknown }
type OperationNotPermittedException = { [x: string]: unknown }
type CreateLoadBalancerInput = {
  Name: {}
  Subnets?: {} | undefined
  SubnetMappings?: {} | undefined
  SecurityGroups?: {} | undefined
  Scheme?: {} | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
  IpAddressType?: {} | undefined
  CustomerOwnedIpv4Pool?: {} | undefined
}
type RuleCondition = {
  Field?: {} | undefined
  Values?: {} | undefined
  HostHeaderConfig?: { Values?: {} | undefined } | undefined
  PathPatternConfig?: { Values?: {} | undefined } | undefined
  HttpHeaderConfig?: { HttpHeaderName?: {} | undefined; Values?: {} | undefined } | undefined
  QueryStringConfig?: { Values?: {} | undefined } | undefined
  HttpRequestMethodConfig?: { Values?: {} | undefined } | undefined
  SourceIpConfig?: { Values?: {} | undefined } | undefined
}
type CreateRuleOutput = { Rules?: {} | undefined }
type PriorityInUseException = { [x: string]: unknown }
type TooManyTargetGroupsException = { [x: string]: unknown }
type TooManyRulesException = { [x: string]: unknown }
type CreateRuleInput = {
  ListenerArn: {}
  Conditions: {}
  Priority: {}
  Actions: {}
  Tags?: {} | undefined
}
type CreateTargetGroupOutput = { TargetGroups?: {} | undefined }
type DuplicateTargetGroupNameException = { [x: string]: unknown }
type CreateTargetGroupInput = {
  Name: {}
  Protocol?: {} | undefined
  ProtocolVersion?: {} | undefined
  Port?: {} | undefined
  VpcId?: {} | undefined
  HealthCheckProtocol?: {} | undefined
  HealthCheckPort?: {} | undefined
  HealthCheckEnabled?: {} | undefined
  HealthCheckPath?: {} | undefined
  HealthCheckIntervalSeconds?: {} | undefined
  HealthCheckTimeoutSeconds?: {} | undefined
  HealthyThresholdCount?: {} | undefined
  UnhealthyThresholdCount?: {} | undefined
  Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
  TargetType?: {} | undefined
  Tags?: {} | undefined
  IpAddressType?: {} | undefined
}
type DeleteListenerOutput = { [x: string]: unknown }
type DeleteListenerInput = { ListenerArn: {} }
type DeleteLoadBalancerOutput = { [x: string]: unknown }
type DeleteLoadBalancerInput = { LoadBalancerArn: {} }
type DeleteRuleOutput = { [x: string]: unknown }
type DeleteRuleInput = { RuleArn: {} }
type DeleteTargetGroupOutput = { [x: string]: unknown }
type DeleteTargetGroupInput = { TargetGroupArn: {} }
type TargetDescription = { Id: {}; Port?: {} | undefined; AvailabilityZone?: {} | undefined }
type DeregisterTargetsOutput = { [x: string]: unknown }
type InvalidTargetException = { [x: string]: unknown }
type DeregisterTargetsInput = { TargetGroupArn: {}; Targets: {} }
type DescribeAccountLimitsOutput = { Limits?: {} | undefined; NextMarker?: {} | undefined }
type DescribeAccountLimitsInput = { Marker?: {} | undefined; PageSize?: {} | undefined }
type DescribeListenerCertificatesOutput = {
  Certificates?: {} | undefined
  NextMarker?: {} | undefined
}
type DescribeListenerCertificatesInput = {
  ListenerArn: {}
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type ListenerArn = string
type DescribeListenersOutput = { Listeners?: {} | undefined; NextMarker?: {} | undefined }
type DescribeListenersInput = {
  LoadBalancerArn?: {} | undefined
  ListenerArns?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type DescribeLoadBalancerAttributesOutput = { Attributes?: {} | undefined }
type DescribeLoadBalancerAttributesInput = { LoadBalancerArn: {} }
type LoadBalancerArn = string
type LoadBalancerName = string
type DescribeLoadBalancersOutput = { LoadBalancers?: {} | undefined; NextMarker?: {} | undefined }
type DescribeLoadBalancersInput = {
  LoadBalancerArns?: {} | undefined
  Names?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type RuleArn = string
type DescribeRulesOutput = { Rules?: {} | undefined; NextMarker?: {} | undefined }
type DescribeRulesInput = {
  ListenerArn?: {} | undefined
  RuleArns?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type SslPolicyName = string
type DescribeSSLPoliciesOutput = { SslPolicies?: {} | undefined; NextMarker?: {} | undefined }
type DescribeSSLPoliciesInput = {
  Names?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
  LoadBalancerType?: {} | undefined
}
type DescribeTagsOutput = { TagDescriptions?: {} | undefined }
type DescribeTagsInput = { ResourceArns: {} }
type DescribeTargetGroupAttributesOutput = { Attributes?: {} | undefined }
type DescribeTargetGroupAttributesInput = { TargetGroupArn: {} }
type TargetGroupArn = string
type TargetGroupName = string
type DescribeTargetGroupsOutput = { TargetGroups?: {} | undefined; NextMarker?: {} | undefined }
type DescribeTargetGroupsInput = {
  LoadBalancerArn?: {} | undefined
  TargetGroupArns?: {} | undefined
  Names?: {} | undefined
  Marker?: {} | undefined
  PageSize?: {} | undefined
}
type DescribeTargetHealthOutput = { TargetHealthDescriptions?: {} | undefined }
type HealthUnavailableException = { [x: string]: unknown }
type DescribeTargetHealthInput = { TargetGroupArn: {}; Targets?: {} | undefined }
type ModifyListenerOutput = { Listeners?: {} | undefined }
type ModifyListenerInput = {
  ListenerArn: {}
  Port?: {} | undefined
  Protocol?: {} | undefined
  SslPolicy?: {} | undefined
  Certificates?: {} | undefined
  DefaultActions?: {} | undefined
  AlpnPolicy?: {} | undefined
}
type LoadBalancerAttribute = { Key?: {} | undefined; Value?: {} | undefined }
type ModifyLoadBalancerAttributesOutput = { Attributes?: {} | undefined }
type ModifyLoadBalancerAttributesInput = { LoadBalancerArn: {}; Attributes: {} }
type ModifyRuleOutput = { Rules?: {} | undefined }
type ModifyRuleInput = { RuleArn: {}; Conditions?: {} | undefined; Actions?: {} | undefined }
type ModifyTargetGroupOutput = { TargetGroups?: {} | undefined }
type ModifyTargetGroupInput = {
  TargetGroupArn: {}
  HealthCheckProtocol?: {} | undefined
  HealthCheckPort?: {} | undefined
  HealthCheckPath?: {} | undefined
  HealthCheckEnabled?: {} | undefined
  HealthCheckIntervalSeconds?: {} | undefined
  HealthCheckTimeoutSeconds?: {} | undefined
  HealthyThresholdCount?: {} | undefined
  UnhealthyThresholdCount?: {} | undefined
  Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
}
type TargetGroupAttribute = { Key?: {} | undefined; Value?: {} | undefined }
type ModifyTargetGroupAttributesOutput = { Attributes?: {} | undefined }
type ModifyTargetGroupAttributesInput = { TargetGroupArn: {}; Attributes: {} }
type RegisterTargetsOutput = { [x: string]: unknown }
type RegisterTargetsInput = { TargetGroupArn: {}; Targets: {} }
type RemoveListenerCertificatesOutput = { [x: string]: unknown }
type RemoveListenerCertificatesInput = { ListenerArn: {}; Certificates: {} }
type TagKey = string
type RemoveTagsOutput = { [x: string]: unknown }
type RemoveTagsInput = { ResourceArns: {}; TagKeys: {} }
type SetIpAddressTypeOutput = { IpAddressType?: {} | undefined }
type SetIpAddressTypeInput = { LoadBalancerArn: {}; IpAddressType: {} }
type RulePriorityPair = { RuleArn?: {} | undefined; Priority?: {} | undefined }
type SetRulePrioritiesOutput = { Rules?: {} | undefined }
type SetRulePrioritiesInput = { RulePriorities: {} }
type SetSecurityGroupsOutput = { SecurityGroupIds?: {} | undefined }
type SetSecurityGroupsInput = { LoadBalancerArn: {}; SecurityGroups: {} }
type SetSubnetsOutput = { AvailabilityZones?: {} | undefined; IpAddressType?: {} | undefined }
type SetSubnetsInput = {
  LoadBalancerArn: {}
  Subnets?: {} | undefined
  SubnetMappings?: {} | undefined
  IpAddressType?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddListenerCertificates': {
      $get:
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'AddListenerCertificates'
                Version: '2015-12-01'
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
            output: AddListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'AddListenerCertificates'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'AddListenerCertificates'
                Version: '2015-12-01'
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
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'AddListenerCertificates'
                Version: '2015-12-01'
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
      $post:
        | {
            input: { query: { Action: 'AddListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddListenerCertificatesInput }
            output: AddListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'AddListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddListenerCertificatesInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'AddListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddListenerCertificatesInput }
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'AddListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AddListenerCertificatesInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=AddTags': {
      $get:
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
            status: 484
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                Tags: Tag[]
                Action: 'AddTags'
                Version: '2015-12-01'
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            status: 480
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'AddTags'; Version: '2015-12-01' } } & {
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Action=CreateListener': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: CreateListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyListenersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            status: 486
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            status: 489
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyActionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            output: ALPNPolicyNotSupportedException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                Port?: number | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions: Action[]
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Tags?: Tag[] | undefined
                Action: 'CreateListener'
                Version: '2015-12-01'
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
            status: 497
          }
      $post:
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: CreateListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: DuplicateListenerException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyListenersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyActionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: ALPNPolicyNotSupportedException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: { query: { Action: 'CreateListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateListenerInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 497
          }
    }
  } & {
    '/#Action=CreateLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: CreateLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: DuplicateLoadBalancerNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: TooManyLoadBalancersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 483
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 484
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 485
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 486
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 487
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 488
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: ResourceInUseException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: AllocationIdNotFoundException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            output: AvailabilityZoneNotSupportedException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                Name: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                SecurityGroups?: SecurityGroupId[] | undefined
                Scheme?: 'internet-facing' | 'internal' | undefined
                Tags?: Tag[] | undefined
                Type?: 'application' | 'network' | 'gateway' | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                CustomerOwnedIpv4Pool?: string | undefined
                Action: 'CreateLoadBalancer'
                Version: '2015-12-01'
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
            status: 492
          }
      $post:
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: CreateLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: DuplicateLoadBalancerNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: TooManyLoadBalancersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: InvalidSchemeException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: DuplicateTagKeysException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: ResourceInUseException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: AllocationIdNotFoundException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: AvailabilityZoneNotSupportedException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'CreateLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLoadBalancerInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 492
          }
    }
  } & {
    '/#Action=CreateRule': {
      $get:
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: CreateRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: PriorityInUseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyTargetGroupsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyRulesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            status: 485
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            status: 487
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyActionsException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Conditions: RuleCondition[]
                Priority: number
                Actions: Action[]
                Tags?: Tag[] | undefined
                Action: 'CreateRule'
                Version: '2015-12-01'
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
            status: 494
          }
      $post:
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: CreateRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: PriorityInUseException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyTargetGroupsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyRulesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyActionsException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'CreateRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateRuleInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 494
          }
    }
  } & {
    '/#Action=CreateTargetGroup': {
      $get:
        | {
            input: {
              query: {
                Name: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                ProtocolVersion?: string | undefined
                Port?: number | undefined
                VpcId?: string | undefined
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckPath?: string | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                TargetType?: 'instance' | 'ip' | 'lambda' | 'alb' | undefined
                Tags?: Tag[] | undefined
                IpAddressType?: 'ipv4' | 'ipv6' | undefined
                Action: 'CreateTargetGroup'
                Version: '2015-12-01'
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
            output: CreateTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Name: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                ProtocolVersion?: string | undefined
                Port?: number | undefined
                VpcId?: string | undefined
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckPath?: string | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                TargetType?: 'instance' | 'ip' | 'lambda' | 'alb' | undefined
                Tags?: Tag[] | undefined
                IpAddressType?: 'ipv4' | 'ipv6' | undefined
                Action: 'CreateTargetGroup'
                Version: '2015-12-01'
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
            output: DuplicateTargetGroupNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Name: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                ProtocolVersion?: string | undefined
                Port?: number | undefined
                VpcId?: string | undefined
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckPath?: string | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                TargetType?: 'instance' | 'ip' | 'lambda' | 'alb' | undefined
                Tags?: Tag[] | undefined
                IpAddressType?: 'ipv4' | 'ipv6' | undefined
                Action: 'CreateTargetGroup'
                Version: '2015-12-01'
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
            output: TooManyTargetGroupsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Name: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                ProtocolVersion?: string | undefined
                Port?: number | undefined
                VpcId?: string | undefined
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckPath?: string | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                TargetType?: 'instance' | 'ip' | 'lambda' | 'alb' | undefined
                Tags?: Tag[] | undefined
                IpAddressType?: 'ipv4' | 'ipv6' | undefined
                Action: 'CreateTargetGroup'
                Version: '2015-12-01'
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
        | {
            input: {
              query: {
                Name: string
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                ProtocolVersion?: string | undefined
                Port?: number | undefined
                VpcId?: string | undefined
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckPath?: string | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                TargetType?: 'instance' | 'ip' | 'lambda' | 'alb' | undefined
                Tags?: Tag[] | undefined
                IpAddressType?: 'ipv4' | 'ipv6' | undefined
                Action: 'CreateTargetGroup'
                Version: '2015-12-01'
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
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'CreateTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTargetGroupInput }
            output: CreateTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'CreateTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTargetGroupInput }
            output: DuplicateTargetGroupNameException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'CreateTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTargetGroupInput }
            output: TooManyTargetGroupsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'CreateTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTargetGroupInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'CreateTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTargetGroupInput }
            output: TooManyTagsException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=DeleteListener': {
      $get:
        | {
            input: {
              query: { ListenerArn: string; Action: 'DeleteListener'; Version: '2015-12-01' }
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
            output: DeleteListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { ListenerArn: string; Action: 'DeleteListener'; Version: '2015-12-01' }
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
            status: 480
          }
        | {
            input: {
              query: { ListenerArn: string; Action: 'DeleteListener'; Version: '2015-12-01' }
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
            output: ResourceInUseException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteListenerInput }
            output: DeleteListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteListenerInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteListenerInput }
            output: ResourceInUseException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteLoadBalancer': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Action: 'DeleteLoadBalancer'
                Version: '2015-12-01'
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
            output: DeleteLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Action: 'DeleteLoadBalancer'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Action: 'DeleteLoadBalancer'
                Version: '2015-12-01'
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
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Action: 'DeleteLoadBalancer'
                Version: '2015-12-01'
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
            output: ResourceInUseException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DeleteLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerInput }
            output: DeleteLoadBalancerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DeleteLoadBalancer'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLoadBalancerInput }
            output: ResourceInUseException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DeleteRule': {
      $get:
        | {
            input: { query: { RuleArn: string; Action: 'DeleteRule'; Version: '2015-12-01' } } & {
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
            output: DeleteRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { RuleArn: string; Action: 'DeleteRule'; Version: '2015-12-01' } } & {
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { RuleArn: string; Action: 'DeleteRule'; Version: '2015-12-01' } } & {
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
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeleteRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRuleInput }
            output: DeleteRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRuleInput }
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeleteRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteRuleInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DeleteTargetGroup': {
      $get:
        | {
            input: {
              query: { TargetGroupArn: string; Action: 'DeleteTargetGroup'; Version: '2015-12-01' }
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
            output: DeleteTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { TargetGroupArn: string; Action: 'DeleteTargetGroup'; Version: '2015-12-01' }
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
            output: ResourceInUseException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DeleteTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTargetGroupInput }
            output: DeleteTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeleteTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTargetGroupInput }
            output: ResourceInUseException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DeregisterTargets': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'DeregisterTargets'
                Version: '2015-12-01'
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
            output: DeregisterTargetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'DeregisterTargets'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'DeregisterTargets'
                Version: '2015-12-01'
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
            output: InvalidTargetException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'DeregisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTargetsInput }
            output: DeregisterTargetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DeregisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTargetsInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DeregisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterTargetsInput }
            output: InvalidTargetException
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
            Version: '2015-12-01'
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
        input: { query: { Action: 'DescribeAccountLimits'; Version: '2015-12-01' } } & {
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
    '/#Action=DescribeListenerCertificates': {
      $get:
        | {
            input: {
              query: {
                ListenerArn: string
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListenerCertificates'
                Version: '2015-12-01'
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
            output: DescribeListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListenerCertificates'
                Version: '2015-12-01'
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
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeListenerCertificatesInput }
            output: DescribeListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeListenerCertificatesInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeListeners': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                ListenerArns?: ListenerArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            output: DescribeListenersOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                ListenerArns?: ListenerArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                ListenerArns?: ListenerArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                ListenerArns?: ListenerArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            status: 482
          }
      $post:
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            } & { json: DescribeListenersInput }
            output: DescribeListenersOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            } & { json: DescribeListenersInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            } & { json: DescribeListenersInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeListeners'
                Version: '2015-12-01'
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
            } & { json: DescribeListenersInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeLoadBalancerAttributes': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Action: 'DescribeLoadBalancerAttributes'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                Action: 'DescribeLoadBalancerAttributes'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: { Action: 'DescribeLoadBalancerAttributes'; Version: '2015-12-01' }
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
              query: { Action: 'DescribeLoadBalancerAttributes'; Version: '2015-12-01' }
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
            output: LoadBalancerNotFoundException
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
                LoadBalancerArns?: LoadBalancerArn[] | undefined
                Names?: LoadBalancerName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2015-12-01'
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
            output: DescribeLoadBalancersOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArns?: LoadBalancerArn[] | undefined
                Names?: LoadBalancerName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2015-12-01'
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
            } & { json: DescribeLoadBalancersInput }
            output: DescribeLoadBalancersOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeLoadBalancers'
                Version: '2015-12-01'
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
            } & { json: DescribeLoadBalancersInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeRules': {
      $get:
        | {
            input: {
              query: {
                ListenerArn?: string | undefined
                RuleArns?: RuleArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeRules'
                Version: '2015-12-01'
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
            output: DescribeRulesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn?: string | undefined
                RuleArns?: RuleArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeRules'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                ListenerArn?: string | undefined
                RuleArns?: RuleArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeRules'
                Version: '2015-12-01'
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ListenerArn?: string | undefined
                RuleArns?: RuleArn[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeRules'
                Version: '2015-12-01'
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
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeRules'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRulesInput }
            output: DescribeRulesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeRules'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRulesInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeRules'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRulesInput }
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeRules'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRulesInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=DescribeSSLPolicies': {
      $get:
        | {
            input: {
              query: {
                Names?: SslPolicyName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                LoadBalancerType?: 'application' | 'network' | 'gateway' | undefined
                Action: 'DescribeSSLPolicies'
                Version: '2015-12-01'
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
            output: DescribeSSLPoliciesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Names?: SslPolicyName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                LoadBalancerType?: 'application' | 'network' | 'gateway' | undefined
                Action: 'DescribeSSLPolicies'
                Version: '2015-12-01'
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
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeSSLPolicies'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSSLPoliciesInput }
            output: DescribeSSLPoliciesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeSSLPolicies'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeSSLPoliciesInput }
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeTags': {
      $get:
        | {
            input: {
              query: { ResourceArns: ResourceArn[]; Action: 'DescribeTags'; Version: '2015-12-01' }
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
              query: { ResourceArns: ResourceArn[]; Action: 'DescribeTags'; Version: '2015-12-01' }
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: { ResourceArns: ResourceArn[]; Action: 'DescribeTags'; Version: '2015-12-01' }
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: { ResourceArns: ResourceArn[]; Action: 'DescribeTags'; Version: '2015-12-01' }
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
              query: { ResourceArns: ResourceArn[]; Action: 'DescribeTags'; Version: '2015-12-01' }
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2015-12-01' } } & {
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
            input: { query: { Action: 'DescribeTags'; Version: '2015-12-01' } } & {
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2015-12-01' } } & {
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2015-12-01' } } & {
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
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'DescribeTags'; Version: '2015-12-01' } } & {
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=DescribeTargetGroupAttributes': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                Action: 'DescribeTargetGroupAttributes'
                Version: '2015-12-01'
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
            output: DescribeTargetGroupAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Action: 'DescribeTargetGroupAttributes'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
      $post:
        | {
            input: { query: { Action: 'DescribeTargetGroupAttributes'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetGroupAttributesInput }
            output: DescribeTargetGroupAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeTargetGroupAttributes'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetGroupAttributesInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
    }
  } & {
    '/#Action=DescribeTargetGroups': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                TargetGroupArns?: TargetGroupArn[] | undefined
                Names?: TargetGroupName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            output: DescribeTargetGroupsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                TargetGroupArns?: TargetGroupArn[] | undefined
                Names?: TargetGroupName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn?: string | undefined
                TargetGroupArns?: TargetGroupArn[] | undefined
                Names?: TargetGroupName[] | undefined
                Marker?: string | undefined
                PageSize?: number | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
      $post:
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            } & { json: DescribeTargetGroupsInput }
            output: DescribeTargetGroupsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            } & { json: DescribeTargetGroupsInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Marker?: string | undefined
                Action: 'DescribeTargetGroups'
                Version: '2015-12-01'
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
            } & { json: DescribeTargetGroupsInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=DescribeTargetHealth': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets?: TargetDescription[] | undefined
                Action: 'DescribeTargetHealth'
                Version: '2015-12-01'
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
            output: DescribeTargetHealthOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets?: TargetDescription[] | undefined
                Action: 'DescribeTargetHealth'
                Version: '2015-12-01'
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
            output: InvalidTargetException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets?: TargetDescription[] | undefined
                Action: 'DescribeTargetHealth'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets?: TargetDescription[] | undefined
                Action: 'DescribeTargetHealth'
                Version: '2015-12-01'
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
            output: HealthUnavailableException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'DescribeTargetHealth'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetHealthInput }
            output: DescribeTargetHealthOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'DescribeTargetHealth'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetHealthInput }
            output: InvalidTargetException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'DescribeTargetHealth'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetHealthInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'DescribeTargetHealth'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTargetHealthInput }
            output: HealthUnavailableException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=ModifyListener': {
      $get:
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: ModifyListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyListenersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            status: 483
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            status: 488
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            status: 489
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyActionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Port?: number | undefined
                Protocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                SslPolicy?: string | undefined
                Certificates?: Certificate[] | undefined
                DefaultActions?: Action[] | undefined
                AlpnPolicy?: AlpnPolicyValue[] | undefined
                Action: 'ModifyListener'
                Version: '2015-12-01'
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
            output: ALPNPolicyNotSupportedException
            outputFormat: 'text'
            status: 496
          }
      $post:
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: ModifyListenerOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: DuplicateListenerException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyListenersException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyCertificatesException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: SSLPolicyNotFoundException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: CertificateNotFoundException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyActionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: { query: { Action: 'ModifyListener'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyListenerInput }
            output: ALPNPolicyNotSupportedException
            outputFormat: 'text'
            status: 496
          }
    }
  } & {
    '/#Action=ModifyLoadBalancerAttributes': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Attributes: LoadBalancerAttribute[]
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                Attributes: LoadBalancerAttribute[]
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Attributes: LoadBalancerAttribute[]
                Action: 'ModifyLoadBalancerAttributes'
                Version: '2015-12-01'
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
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2015-12-01' } } & {
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
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2015-12-01' } } & {
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyLoadBalancerAttributes'; Version: '2015-12-01' } } & {
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
            status: 481
          }
    }
  } & {
    '/#Action=ModifyRule': {
      $get:
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: ModifyRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            status: 483
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            status: 487
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TooManyActionsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                RuleArn: string
                Conditions?: RuleCondition[] | undefined
                Actions?: Action[] | undefined
                Action: 'ModifyRule'
                Version: '2015-12-01'
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
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 490
          }
      $post:
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: ModifyRuleOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TargetGroupAssociationLimitException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: IncompatibleProtocolsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: UnsupportedProtocolException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TooManyActionsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: InvalidLoadBalancerActionException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: { query: { Action: 'ModifyRule'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyRuleInput }
            output: TooManyUniqueTargetGroupsPerLoadBalancerException
            outputFormat: 'text'
            status: 490
          }
    }
  } & {
    '/#Action=ModifyTargetGroup': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckPath?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                Action: 'ModifyTargetGroup'
                Version: '2015-12-01'
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
            output: ModifyTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckPath?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                Action: 'ModifyTargetGroup'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                HealthCheckProtocol?:
                  | 'HTTP'
                  | 'HTTPS'
                  | 'TCP'
                  | 'TLS'
                  | 'UDP'
                  | 'TCP_UDP'
                  | 'GENEVE'
                  | undefined
                HealthCheckPort?: string | undefined
                HealthCheckPath?: string | undefined
                HealthCheckEnabled?: boolean | undefined
                HealthCheckIntervalSeconds?: number | undefined
                HealthCheckTimeoutSeconds?: number | undefined
                HealthyThresholdCount?: number | undefined
                UnhealthyThresholdCount?: number | undefined
                Matcher?: { HttpCode?: {} | undefined; GrpcCode?: {} | undefined } | undefined
                Action: 'ModifyTargetGroup'
                Version: '2015-12-01'
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
            input: { query: { Action: 'ModifyTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupInput }
            output: ModifyTargetGroupOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyTargetGroup'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=ModifyTargetGroupAttributes': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                Attributes: TargetGroupAttribute[]
                Action: 'ModifyTargetGroupAttributes'
                Version: '2015-12-01'
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
            output: ModifyTargetGroupAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Attributes: TargetGroupAttribute[]
                Action: 'ModifyTargetGroupAttributes'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Attributes: TargetGroupAttribute[]
                Action: 'ModifyTargetGroupAttributes'
                Version: '2015-12-01'
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
            input: { query: { Action: 'ModifyTargetGroupAttributes'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupAttributesInput }
            output: ModifyTargetGroupAttributesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'ModifyTargetGroupAttributes'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupAttributesInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'ModifyTargetGroupAttributes'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ModifyTargetGroupAttributesInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
    }
  } & {
    '/#Action=RegisterTargets': {
      $get:
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'RegisterTargets'
                Version: '2015-12-01'
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
            output: RegisterTargetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'RegisterTargets'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'RegisterTargets'
                Version: '2015-12-01'
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
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'RegisterTargets'
                Version: '2015-12-01'
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
            output: InvalidTargetException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                TargetGroupArn: string
                Targets: TargetDescription[]
                Action: 'RegisterTargets'
                Version: '2015-12-01'
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
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 483
          }
      $post:
        | {
            input: { query: { Action: 'RegisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTargetsInput }
            output: RegisterTargetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RegisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTargetsInput }
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RegisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTargetsInput }
            output: TooManyTargetsException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RegisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTargetsInput }
            output: InvalidTargetException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'RegisterTargets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterTargetsInput }
            output: TooManyRegistrationsForTargetIdException
            outputFormat: 'text'
            status: 483
          }
    }
  } & {
    '/#Action=RemoveListenerCertificates': {
      $get:
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'RemoveListenerCertificates'
                Version: '2015-12-01'
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
            output: RemoveListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'RemoveListenerCertificates'
                Version: '2015-12-01'
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
            status: 480
          }
        | {
            input: {
              query: {
                ListenerArn: string
                Certificates: Certificate[]
                Action: 'RemoveListenerCertificates'
                Version: '2015-12-01'
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
            status: 481
          }
      $post:
        | {
            input: { query: { Action: 'RemoveListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveListenerCertificatesInput }
            output: RemoveListenerCertificatesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'RemoveListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveListenerCertificatesInput }
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemoveListenerCertificates'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RemoveListenerCertificatesInput }
            output: OperationNotPermittedException
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
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                ResourceArns: ResourceArn[]
                TagKeys: TagKey[]
                Action: 'RemoveTags'
                Version: '2015-12-01'
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
            status: 484
          }
      $post:
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            output: TargetGroupNotFoundException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            output: ListenerNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'RemoveTags'; Version: '2015-12-01' } } & {
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
            output: TooManyTagsException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Action=SetIpAddressType': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                IpAddressType: 'ipv4' | 'dualstack'
                Action: 'SetIpAddressType'
                Version: '2015-12-01'
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
            output: SetIpAddressTypeOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                IpAddressType: 'ipv4' | 'dualstack'
                Action: 'SetIpAddressType'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                IpAddressType: 'ipv4' | 'dualstack'
                Action: 'SetIpAddressType'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                IpAddressType: 'ipv4' | 'dualstack'
                Action: 'SetIpAddressType'
                Version: '2015-12-01'
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
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'SetIpAddressType'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetIpAddressTypeInput }
            output: SetIpAddressTypeOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetIpAddressType'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetIpAddressTypeInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetIpAddressType'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetIpAddressTypeInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetIpAddressType'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetIpAddressTypeInput }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=SetRulePriorities': {
      $get:
        | {
            input: {
              query: {
                RulePriorities: RulePriorityPair[]
                Action: 'SetRulePriorities'
                Version: '2015-12-01'
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
            output: SetRulePrioritiesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                RulePriorities: RulePriorityPair[]
                Action: 'SetRulePriorities'
                Version: '2015-12-01'
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
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                RulePriorities: RulePriorityPair[]
                Action: 'SetRulePriorities'
                Version: '2015-12-01'
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
            output: PriorityInUseException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                RulePriorities: RulePriorityPair[]
                Action: 'SetRulePriorities'
                Version: '2015-12-01'
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
            status: 482
          }
      $post:
        | {
            input: { query: { Action: 'SetRulePriorities'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetRulePrioritiesInput }
            output: SetRulePrioritiesOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetRulePriorities'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetRulePrioritiesInput }
            output: RuleNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetRulePriorities'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetRulePrioritiesInput }
            output: PriorityInUseException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetRulePriorities'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetRulePrioritiesInput }
            output: OperationNotPermittedException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=SetSecurityGroups': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                SecurityGroups: SecurityGroupId[]
                Action: 'SetSecurityGroups'
                Version: '2015-12-01'
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
            output: SetSecurityGroupsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                SecurityGroups: SecurityGroupId[]
                Action: 'SetSecurityGroups'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                SecurityGroups: SecurityGroupId[]
                Action: 'SetSecurityGroups'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                SecurityGroups: SecurityGroupId[]
                Action: 'SetSecurityGroups'
                Version: '2015-12-01'
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
            input: { query: { Action: 'SetSecurityGroups'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSecurityGroupsInput }
            output: SetSecurityGroupsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetSecurityGroups'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSecurityGroupsInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetSecurityGroups'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSecurityGroupsInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetSecurityGroups'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSecurityGroupsInput }
            output: InvalidSecurityGroupException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Action=SetSubnets': {
      $get:
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
            output: SetSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
            output: AllocationIdNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                LoadBalancerArn: string
                Subnets?: SubnetId[] | undefined
                SubnetMappings?: SubnetMapping[] | undefined
                IpAddressType?: 'ipv4' | 'dualstack' | undefined
                Action: 'SetSubnets'
                Version: '2015-12-01'
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
            output: AvailabilityZoneNotSupportedException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: SetSubnetsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: LoadBalancerNotFoundException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: InvalidConfigurationRequestException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: SubnetNotFoundException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: InvalidSubnetException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: AllocationIdNotFoundException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: { query: { Action: 'SetSubnets'; Version: '2015-12-01' } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetSubnetsInput }
            output: AvailabilityZoneNotSupportedException
            outputFormat: 'text'
            status: 485
          }
    }
  },
  '/'
>
export default routes
