type AssociateFirewallRuleGroupRequest = {
  CreatorRequestId: {}
  FirewallRuleGroupId: {}
  VpcId: {}
  Priority: {}
  Name: {}
  MutationProtection?: {} | undefined
  Tags?: {} | undefined
}
type AssociateFirewallRuleGroupResponse = {
  FirewallRuleGroupAssociation?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FirewallRuleGroupId?: {} | undefined
        VpcId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        MutationProtection?: {} | undefined
        ManagedOwnerName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type AssociateResolverEndpointIpAddressRequest = {
  ResolverEndpointId: {}
  IpAddress: {
    IpId?: {} | undefined
    SubnetId?: {} | undefined
    Ip?: {} | undefined
    Ipv6?: {} | undefined
  }
}
type AssociateResolverEndpointIpAddressResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type AssociateResolverQueryLogConfigRequest = { ResolverQueryLogConfigId: {}; ResourceId: {} }
type AssociateResolverQueryLogConfigResponse = {
  ResolverQueryLogConfigAssociation?:
    | {
        Id?: {} | undefined
        ResolverQueryLogConfigId?: {} | undefined
        ResourceId?: {} | undefined
        Status?: {} | undefined
        Error?: {} | undefined
        ErrorMessage?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type AssociateResolverRuleRequest = { ResolverRuleId: {}; Name?: {} | undefined; VPCId: {} }
type AssociateResolverRuleResponse = {
  ResolverRuleAssociation?:
    | {
        Id?: {} | undefined
        ResolverRuleId?: {} | undefined
        Name?: {} | undefined
        VPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
      }
    | undefined
}
type CreateFirewallDomainListRequest = { CreatorRequestId: {}; Name: {}; Tags?: {} | undefined }
type CreateFirewallDomainListResponse = {
  FirewallDomainList?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DomainCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        ManagedOwnerName?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type CreateFirewallRuleRequest = {
  CreatorRequestId: {}
  FirewallRuleGroupId: {}
  FirewallDomainListId: {}
  Priority: {}
  Action: {}
  BlockResponse?: {} | undefined
  BlockOverrideDomain?: {} | undefined
  BlockOverrideDnsType?: {} | undefined
  BlockOverrideTtl?: {} | undefined
  Name: {}
}
type CreateFirewallRuleResponse = {
  FirewallRule?:
    | {
        FirewallRuleGroupId?: {} | undefined
        FirewallDomainListId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        Action?: {} | undefined
        BlockResponse?: {} | undefined
        BlockOverrideDomain?: {} | undefined
        BlockOverrideDnsType?: {} | undefined
        BlockOverrideTtl?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type CreateFirewallRuleGroupRequest = { CreatorRequestId: {}; Name: {}; Tags?: {} | undefined }
type CreateFirewallRuleGroupResponse = {
  FirewallRuleGroup?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        RuleCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        OwnerId?: {} | undefined
        CreatorRequestId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type CreateResolverEndpointRequest = {
  CreatorRequestId: {}
  Name?: {} | undefined
  SecurityGroupIds: {}
  Direction: {}
  IpAddresses: {}
  Tags?: {} | undefined
  ResolverEndpointType?: {} | undefined
}
type CreateResolverEndpointResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type CreateResolverQueryLogConfigRequest = {
  Name: {}
  DestinationArn: {}
  CreatorRequestId: {}
  Tags?: {} | undefined
}
type CreateResolverQueryLogConfigResponse = {
  ResolverQueryLogConfig?:
    | {
        Id?: {} | undefined
        OwnerId?: {} | undefined
        Status?: {} | undefined
        ShareStatus?: {} | undefined
        AssociationCount?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DestinationArn?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type CreateResolverRuleRequest = {
  CreatorRequestId: {}
  Name?: {} | undefined
  RuleType: {}
  DomainName: {}
  TargetIps?: {} | undefined
  ResolverEndpointId?: {} | undefined
  Tags?: {} | undefined
}
type CreateResolverRuleResponse = {
  ResolverRule?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        DomainName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        RuleType?: {} | undefined
        Name?: {} | undefined
        TargetIps?: {} | undefined
        ResolverEndpointId?: {} | undefined
        OwnerId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DeleteFirewallDomainListRequest = { FirewallDomainListId: {} }
type DeleteFirewallDomainListResponse = {
  FirewallDomainList?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DomainCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        ManagedOwnerName?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DeleteFirewallRuleRequest = { FirewallRuleGroupId: {}; FirewallDomainListId: {} }
type DeleteFirewallRuleResponse = {
  FirewallRule?:
    | {
        FirewallRuleGroupId?: {} | undefined
        FirewallDomainListId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        Action?: {} | undefined
        BlockResponse?: {} | undefined
        BlockOverrideDomain?: {} | undefined
        BlockOverrideDnsType?: {} | undefined
        BlockOverrideTtl?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DeleteFirewallRuleGroupRequest = { FirewallRuleGroupId: {} }
type DeleteFirewallRuleGroupResponse = {
  FirewallRuleGroup?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        RuleCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        OwnerId?: {} | undefined
        CreatorRequestId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DeleteResolverEndpointRequest = { ResolverEndpointId: {} }
type DeleteResolverEndpointResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type DeleteResolverQueryLogConfigRequest = { ResolverQueryLogConfigId: {} }
type DeleteResolverQueryLogConfigResponse = {
  ResolverQueryLogConfig?:
    | {
        Id?: {} | undefined
        OwnerId?: {} | undefined
        Status?: {} | undefined
        ShareStatus?: {} | undefined
        AssociationCount?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DestinationArn?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type DeleteResolverRuleRequest = { ResolverRuleId: {} }
type DeleteResolverRuleResponse = {
  ResolverRule?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        DomainName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        RuleType?: {} | undefined
        Name?: {} | undefined
        TargetIps?: {} | undefined
        ResolverEndpointId?: {} | undefined
        OwnerId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DisassociateFirewallRuleGroupRequest = { FirewallRuleGroupAssociationId: {} }
type DisassociateFirewallRuleGroupResponse = {
  FirewallRuleGroupAssociation?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FirewallRuleGroupId?: {} | undefined
        VpcId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        MutationProtection?: {} | undefined
        ManagedOwnerName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type DisassociateResolverEndpointIpAddressRequest = {
  ResolverEndpointId: {}
  IpAddress: {
    IpId?: {} | undefined
    SubnetId?: {} | undefined
    Ip?: {} | undefined
    Ipv6?: {} | undefined
  }
}
type DisassociateResolverEndpointIpAddressResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type DisassociateResolverQueryLogConfigRequest = { ResolverQueryLogConfigId: {}; ResourceId: {} }
type DisassociateResolverQueryLogConfigResponse = {
  ResolverQueryLogConfigAssociation?:
    | {
        Id?: {} | undefined
        ResolverQueryLogConfigId?: {} | undefined
        ResourceId?: {} | undefined
        Status?: {} | undefined
        Error?: {} | undefined
        ErrorMessage?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type DisassociateResolverRuleRequest = { VPCId: {}; ResolverRuleId: {} }
type DisassociateResolverRuleResponse = {
  ResolverRuleAssociation?:
    | {
        Id?: {} | undefined
        ResolverRuleId?: {} | undefined
        Name?: {} | undefined
        VPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
      }
    | undefined
}
type GetFirewallConfigRequest = { ResourceId: {} }
type GetFirewallConfigResponse = {
  FirewallConfig?:
    | {
        Id?: {} | undefined
        ResourceId?: {} | undefined
        OwnerId?: {} | undefined
        FirewallFailOpen?: {} | undefined
      }
    | undefined
}
type GetFirewallDomainListRequest = { FirewallDomainListId: {} }
type GetFirewallDomainListResponse = {
  FirewallDomainList?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DomainCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        ManagedOwnerName?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type GetFirewallRuleGroupRequest = { FirewallRuleGroupId: {} }
type GetFirewallRuleGroupResponse = {
  FirewallRuleGroup?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        RuleCount?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        OwnerId?: {} | undefined
        CreatorRequestId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type GetFirewallRuleGroupAssociationRequest = { FirewallRuleGroupAssociationId: {} }
type GetFirewallRuleGroupAssociationResponse = {
  FirewallRuleGroupAssociation?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FirewallRuleGroupId?: {} | undefined
        VpcId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        MutationProtection?: {} | undefined
        ManagedOwnerName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type GetFirewallRuleGroupPolicyRequest = { Arn: {} }
type GetFirewallRuleGroupPolicyResponse = { FirewallRuleGroupPolicy?: {} | undefined }
type GetResolverConfigRequest = { ResourceId: {} }
type GetResolverConfigResponse = {
  ResolverConfig?:
    | {
        Id?: {} | undefined
        ResourceId?: {} | undefined
        OwnerId?: {} | undefined
        AutodefinedReverse?: {} | undefined
      }
    | undefined
}
type GetResolverDnssecConfigRequest = { ResourceId: {} }
type GetResolverDnssecConfigResponse = {
  ResolverDNSSECConfig?:
    | {
        Id?: {} | undefined
        OwnerId?: {} | undefined
        ResourceId?: {} | undefined
        ValidationStatus?: {} | undefined
      }
    | undefined
}
type GetResolverEndpointRequest = { ResolverEndpointId: {} }
type GetResolverEndpointResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type GetResolverQueryLogConfigRequest = { ResolverQueryLogConfigId: {} }
type GetResolverQueryLogConfigResponse = {
  ResolverQueryLogConfig?:
    | {
        Id?: {} | undefined
        OwnerId?: {} | undefined
        Status?: {} | undefined
        ShareStatus?: {} | undefined
        AssociationCount?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        DestinationArn?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type GetResolverQueryLogConfigAssociationRequest = { ResolverQueryLogConfigAssociationId: {} }
type GetResolverQueryLogConfigAssociationResponse = {
  ResolverQueryLogConfigAssociation?:
    | {
        Id?: {} | undefined
        ResolverQueryLogConfigId?: {} | undefined
        ResourceId?: {} | undefined
        Status?: {} | undefined
        Error?: {} | undefined
        ErrorMessage?: {} | undefined
        CreationTime?: {} | undefined
      }
    | undefined
}
type GetResolverQueryLogConfigPolicyRequest = { Arn: {} }
type GetResolverQueryLogConfigPolicyResponse = { ResolverQueryLogConfigPolicy?: {} | undefined }
type GetResolverRuleRequest = { ResolverRuleId: {} }
type GetResolverRuleResponse = {
  ResolverRule?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        DomainName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        RuleType?: {} | undefined
        Name?: {} | undefined
        TargetIps?: {} | undefined
        ResolverEndpointId?: {} | undefined
        OwnerId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type GetResolverRuleAssociationRequest = { ResolverRuleAssociationId: {} }
type GetResolverRuleAssociationResponse = {
  ResolverRuleAssociation?:
    | {
        Id?: {} | undefined
        ResolverRuleId?: {} | undefined
        Name?: {} | undefined
        VPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
      }
    | undefined
}
type GetResolverRulePolicyRequest = { Arn: {} }
type GetResolverRulePolicyResponse = { ResolverRulePolicy?: {} | undefined }
type ImportFirewallDomainsRequest = { FirewallDomainListId: {}; Operation: {}; DomainFileUrl: {} }
type ImportFirewallDomainsResponse = {
  Id?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  StatusMessage?: {} | undefined
}
type ListFirewallConfigsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListFirewallConfigsResponse = { NextToken?: {} | undefined; FirewallConfigs?: {} | undefined }
type ListFirewallDomainListsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListFirewallDomainListsResponse = {
  NextToken?: {} | undefined
  FirewallDomainLists?: {} | undefined
}
type ListFirewallDomainsRequest = {
  FirewallDomainListId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListFirewallDomainsResponse = { NextToken?: {} | undefined; Domains?: {} | undefined }
type ListFirewallRuleGroupAssociationsRequest = {
  FirewallRuleGroupId?: {} | undefined
  VpcId?: {} | undefined
  Priority?: {} | undefined
  Status?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListFirewallRuleGroupAssociationsResponse = {
  NextToken?: {} | undefined
  FirewallRuleGroupAssociations?: {} | undefined
}
type ListFirewallRuleGroupsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListFirewallRuleGroupsResponse = {
  NextToken?: {} | undefined
  FirewallRuleGroups?: {} | undefined
}
type ListFirewallRulesRequest = {
  FirewallRuleGroupId: {}
  Priority?: {} | undefined
  Action?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListFirewallRulesResponse = { NextToken?: {} | undefined; FirewallRules?: {} | undefined }
type ListResolverConfigsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListResolverConfigsResponse = { NextToken?: {} | undefined; ResolverConfigs?: {} | undefined }
type ListResolverDnssecConfigsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListResolverDnssecConfigsResponse = {
  NextToken?: {} | undefined
  ResolverDnssecConfigs?: {} | undefined
}
type ListResolverEndpointIpAddressesRequest = {
  ResolverEndpointId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListResolverEndpointIpAddressesResponse = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  IpAddresses?: {} | undefined
}
type ListResolverEndpointsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListResolverEndpointsResponse = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResolverEndpoints?: {} | undefined
}
type ListResolverQueryLogConfigAssociationsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListResolverQueryLogConfigAssociationsResponse = {
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
  TotalFilteredCount?: {} | undefined
  ResolverQueryLogConfigAssociations?: {} | undefined
}
type ListResolverQueryLogConfigsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListResolverQueryLogConfigsResponse = {
  NextToken?: {} | undefined
  TotalCount?: {} | undefined
  TotalFilteredCount?: {} | undefined
  ResolverQueryLogConfigs?: {} | undefined
}
type ListResolverRuleAssociationsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListResolverRuleAssociationsResponse = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResolverRuleAssociations?: {} | undefined
}
type ListResolverRulesRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListResolverRulesResponse = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResolverRules?: {} | undefined
}
type ListTagsForResourceRequest = {
  ResourceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type PutFirewallRuleGroupPolicyRequest = { Arn: {}; FirewallRuleGroupPolicy: {} }
type PutFirewallRuleGroupPolicyResponse = { ReturnValue?: {} | undefined }
type PutResolverQueryLogConfigPolicyRequest = { Arn: {}; ResolverQueryLogConfigPolicy: {} }
type PutResolverQueryLogConfigPolicyResponse = { ReturnValue?: {} | undefined }
type PutResolverRulePolicyRequest = { Arn: {}; ResolverRulePolicy: {} }
type PutResolverRulePolicyResponse = { ReturnValue?: {} | undefined }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateFirewallConfigRequest = { ResourceId: {}; FirewallFailOpen: {} }
type UpdateFirewallConfigResponse = {
  FirewallConfig?:
    | {
        Id?: {} | undefined
        ResourceId?: {} | undefined
        OwnerId?: {} | undefined
        FirewallFailOpen?: {} | undefined
      }
    | undefined
}
type UpdateFirewallDomainsRequest = { FirewallDomainListId: {}; Operation: {}; Domains: {} }
type UpdateFirewallDomainsResponse = {
  Id?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  StatusMessage?: {} | undefined
}
type UpdateFirewallRuleRequest = {
  FirewallRuleGroupId: {}
  FirewallDomainListId: {}
  Priority?: {} | undefined
  Action?: {} | undefined
  BlockResponse?: {} | undefined
  BlockOverrideDomain?: {} | undefined
  BlockOverrideDnsType?: {} | undefined
  BlockOverrideTtl?: {} | undefined
  Name?: {} | undefined
}
type UpdateFirewallRuleResponse = {
  FirewallRule?:
    | {
        FirewallRuleGroupId?: {} | undefined
        FirewallDomainListId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        Action?: {} | undefined
        BlockResponse?: {} | undefined
        BlockOverrideDomain?: {} | undefined
        BlockOverrideDnsType?: {} | undefined
        BlockOverrideTtl?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type UpdateFirewallRuleGroupAssociationRequest = {
  FirewallRuleGroupAssociationId: {}
  Priority?: {} | undefined
  MutationProtection?: {} | undefined
  Name?: {} | undefined
}
type UpdateFirewallRuleGroupAssociationResponse = {
  FirewallRuleGroupAssociation?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FirewallRuleGroupId?: {} | undefined
        VpcId?: {} | undefined
        Name?: {} | undefined
        Priority?: {} | undefined
        MutationProtection?: {} | undefined
        ManagedOwnerName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreatorRequestId?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
type UpdateResolverConfigRequest = { ResourceId: {}; AutodefinedReverseFlag: {} }
type UpdateResolverConfigResponse = {
  ResolverConfig?:
    | {
        Id?: {} | undefined
        ResourceId?: {} | undefined
        OwnerId?: {} | undefined
        AutodefinedReverse?: {} | undefined
      }
    | undefined
}
type UpdateResolverDnssecConfigRequest = { ResourceId: {}; Validation: {} }
type UpdateResolverDnssecConfigResponse = {
  ResolverDNSSECConfig?:
    | {
        Id?: {} | undefined
        OwnerId?: {} | undefined
        ResourceId?: {} | undefined
        ValidationStatus?: {} | undefined
      }
    | undefined
}
type UpdateResolverEndpointRequest = {
  ResolverEndpointId: {}
  Name?: {} | undefined
  ResolverEndpointType?: {} | undefined
  UpdateIpAddresses?: {} | undefined
}
type UpdateResolverEndpointResponse = {
  ResolverEndpoint?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        SecurityGroupIds?: {} | undefined
        Direction?: {} | undefined
        IpAddressCount?: {} | undefined
        HostVPCId?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
        ResolverEndpointType?: {} | undefined
      }
    | undefined
}
type UpdateResolverRuleRequest = {
  ResolverRuleId: {}
  Config: { Name?: {} | undefined; TargetIps?: {} | undefined; ResolverEndpointId?: {} | undefined }
}
type UpdateResolverRuleResponse = {
  ResolverRule?:
    | {
        Id?: {} | undefined
        CreatorRequestId?: {} | undefined
        Arn?: {} | undefined
        DomainName?: {} | undefined
        Status?: {} | undefined
        StatusMessage?: {} | undefined
        RuleType?: {} | undefined
        Name?: {} | undefined
        TargetIps?: {} | undefined
        ResolverEndpointId?: {} | undefined
        OwnerId?: {} | undefined
        ShareStatus?: {} | undefined
        CreationTime?: {} | undefined
        ModificationTime?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Route53Resolver.AssociateFirewallRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.AssociateFirewallRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateFirewallRuleGroupRequest }
        output: AssociateFirewallRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.AssociateResolverEndpointIpAddress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.AssociateResolverEndpointIpAddress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateResolverEndpointIpAddressRequest }
        output: AssociateResolverEndpointIpAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.AssociateResolverQueryLogConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.AssociateResolverQueryLogConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateResolverQueryLogConfigRequest }
        output: AssociateResolverQueryLogConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.AssociateResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.AssociateResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateResolverRuleRequest }
        output: AssociateResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateFirewallDomainList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateFirewallDomainList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFirewallDomainListRequest }
        output: CreateFirewallDomainListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateFirewallRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFirewallRuleRequest }
        output: CreateFirewallRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateFirewallRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateFirewallRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFirewallRuleGroupRequest }
        output: CreateFirewallRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateResolverEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateResolverEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResolverEndpointRequest }
        output: CreateResolverEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateResolverQueryLogConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateResolverQueryLogConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResolverQueryLogConfigRequest }
        output: CreateResolverQueryLogConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.CreateResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.CreateResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResolverRuleRequest }
        output: CreateResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallDomainList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteFirewallDomainList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallDomainListRequest }
        output: DeleteFirewallDomainListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteFirewallRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallRuleRequest }
        output: DeleteFirewallRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteFirewallRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteFirewallRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallRuleGroupRequest }
        output: DeleteFirewallRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteResolverEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteResolverEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResolverEndpointRequest }
        output: DeleteResolverEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteResolverQueryLogConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteResolverQueryLogConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResolverQueryLogConfigRequest }
        output: DeleteResolverQueryLogConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DeleteResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DeleteResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResolverRuleRequest }
        output: DeleteResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DisassociateFirewallRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DisassociateFirewallRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateFirewallRuleGroupRequest }
        output: DisassociateFirewallRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverEndpointIpAddress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DisassociateResolverEndpointIpAddress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateResolverEndpointIpAddressRequest }
        output: DisassociateResolverEndpointIpAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverQueryLogConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DisassociateResolverQueryLogConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateResolverQueryLogConfigRequest }
        output: DisassociateResolverQueryLogConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.DisassociateResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.DisassociateResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateResolverRuleRequest }
        output: DisassociateResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetFirewallConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetFirewallConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFirewallConfigRequest }
        output: GetFirewallConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetFirewallDomainList': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetFirewallDomainList'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFirewallDomainListRequest }
        output: GetFirewallDomainListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetFirewallRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFirewallRuleGroupRequest }
        output: GetFirewallRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetFirewallRuleGroupAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFirewallRuleGroupAssociationRequest }
        output: GetFirewallRuleGroupAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetFirewallRuleGroupPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetFirewallRuleGroupPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFirewallRuleGroupPolicyRequest }
        output: GetFirewallRuleGroupPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverConfigRequest }
        output: GetResolverConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverDnssecConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverDnssecConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverDnssecConfigRequest }
        output: GetResolverDnssecConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverEndpointRequest }
        output: GetResolverEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverQueryLogConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverQueryLogConfigRequest }
        output: GetResolverQueryLogConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverQueryLogConfigAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverQueryLogConfigAssociationRequest }
        output: GetResolverQueryLogConfigAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverQueryLogConfigPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverQueryLogConfigPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverQueryLogConfigPolicyRequest }
        output: GetResolverQueryLogConfigPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverRuleRequest }
        output: GetResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverRuleAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverRuleAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverRuleAssociationRequest }
        output: GetResolverRuleAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.GetResolverRulePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.GetResolverRulePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResolverRulePolicyRequest }
        output: GetResolverRulePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ImportFirewallDomains': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.ImportFirewallDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportFirewallDomainsRequest }
        output: ImportFirewallDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallConfigsRequest }
        output: ListFirewallConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomainLists': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallDomainLists'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallDomainListsRequest }
        output: ListFirewallDomainListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallDomains': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallDomainsRequest }
        output: ListFirewallDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroupAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallRuleGroupAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallRuleGroupAssociationsRequest }
        output: ListFirewallRuleGroupAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallRuleGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallRuleGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallRuleGroupsRequest }
        output: ListFirewallRuleGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListFirewallRules': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListFirewallRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallRulesRequest }
        output: ListFirewallRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverConfigsRequest }
        output: ListResolverConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverDnssecConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverDnssecConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverDnssecConfigsRequest }
        output: ListResolverDnssecConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpointIpAddresses': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverEndpointIpAddresses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverEndpointIpAddressesRequest }
        output: ListResolverEndpointIpAddressesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverEndpoints': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverEndpoints'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverEndpointsRequest }
        output: ListResolverEndpointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverQueryLogConfigAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverQueryLogConfigAssociationsRequest }
        output: ListResolverQueryLogConfigAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverQueryLogConfigs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverQueryLogConfigs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverQueryLogConfigsRequest }
        output: ListResolverQueryLogConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverRuleAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverRuleAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverRuleAssociationsRequest }
        output: ListResolverRuleAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListResolverRules': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListResolverRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResolverRulesRequest }
        output: ListResolverRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Route53Resolver.ListTagsForResource'
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
    '/#X-Amz-Target=Route53Resolver.PutFirewallRuleGroupPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.PutFirewallRuleGroupPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutFirewallRuleGroupPolicyRequest }
        output: PutFirewallRuleGroupPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.PutResolverQueryLogConfigPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.PutResolverQueryLogConfigPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResolverQueryLogConfigPolicyRequest }
        output: PutResolverQueryLogConfigPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.PutResolverRulePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.PutResolverRulePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResolverRulePolicyRequest }
        output: PutResolverRulePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.TagResource'
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
    '/#X-Amz-Target=Route53Resolver.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UntagResource'
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
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateFirewallConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallConfigRequest }
        output: UpdateFirewallConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallDomains': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateFirewallDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallDomainsRequest }
        output: UpdateFirewallDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateFirewallRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallRuleRequest }
        output: UpdateFirewallRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateFirewallRuleGroupAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateFirewallRuleGroupAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallRuleGroupAssociationRequest }
        output: UpdateFirewallRuleGroupAssociationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateResolverConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateResolverConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResolverConfigRequest }
        output: UpdateResolverConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateResolverDnssecConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateResolverDnssecConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResolverDnssecConfigRequest }
        output: UpdateResolverDnssecConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateResolverEndpoint': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateResolverEndpoint'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResolverEndpointRequest }
        output: UpdateResolverEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Route53Resolver.UpdateResolverRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Route53Resolver.UpdateResolverRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResolverRuleRequest }
        output: UpdateResolverRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
