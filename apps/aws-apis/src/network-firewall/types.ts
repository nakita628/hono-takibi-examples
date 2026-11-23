type AssociateFirewallPolicyRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  FirewallPolicyArn: {}
}
type AssociateFirewallPolicyResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  FirewallPolicyArn?: {} | undefined
  UpdateToken?: {} | undefined
}
type AssociateSubnetsRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetMappings: {}
}
type AssociateSubnetsResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetMappings?: {} | undefined
  UpdateToken?: {} | undefined
}
type CreateFirewallRequest = {
  FirewallName: {}
  FirewallPolicyArn: {}
  VpcId: {}
  SubnetMappings: {}
  DeleteProtection?: {} | undefined
  SubnetChangeProtection?: {} | undefined
  FirewallPolicyChangeProtection?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
}
type CreateFirewallResponse = {
  Firewall?:
    | {
        FirewallName?: {} | undefined
        FirewallArn?: {} | undefined
        FirewallPolicyArn: {}
        VpcId: {}
        SubnetMappings: {}
        DeleteProtection?: {} | undefined
        SubnetChangeProtection?: {} | undefined
        FirewallPolicyChangeProtection?: {} | undefined
        Description?: {} | undefined
        FirewallId: {}
        Tags?: {} | undefined
        EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
      }
    | undefined
  FirewallStatus?:
    | {
        Status: {}
        ConfigurationSyncStateSummary: {}
        SyncStates?: {} | undefined
        CapacityUsageSummary?:
          | {
              CIDRs?:
                | {
                    AvailableCIDRCount?: {} | undefined
                    UtilizedCIDRCount?: {} | undefined
                    IPSetReferences?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateFirewallPolicyRequest = {
  FirewallPolicyName: {}
  FirewallPolicy: {
    StatelessRuleGroupReferences?: {} | undefined
    StatelessDefaultActions: {}
    StatelessFragmentDefaultActions: {}
    StatelessCustomActions?: {} | undefined
    StatefulRuleGroupReferences?: {} | undefined
    StatefulDefaultActions?: {} | undefined
    StatefulEngineOptions?:
      | { RuleOrder?: {} | undefined; StreamExceptionPolicy?: {} | undefined }
      | undefined
    TLSInspectionConfigurationArn?: {} | undefined
  }
  Description?: {} | undefined
  Tags?: {} | undefined
  DryRun?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
}
type CreateFirewallPolicyResponse = {
  UpdateToken: {}
  FirewallPolicyResponse: {
    FirewallPolicyName: {}
    FirewallPolicyArn: {}
    FirewallPolicyId: {}
    Description?: {} | undefined
    FirewallPolicyStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedStatelessRuleCapacity?: {} | undefined
    ConsumedStatefulRuleCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    LastModifiedTime?: {} | undefined
  }
}
type CreateRuleGroupRequest = {
  RuleGroupName: {}
  RuleGroup?:
    | {
        RuleVariables?: { IPSets?: {} | undefined; PortSets?: {} | undefined } | undefined
        ReferenceSets?: { IPSetReferences?: {} | undefined } | undefined
        RulesSource: {
          RulesString?: {} | undefined
          RulesSourceList?: { Targets: {}; TargetTypes: {}; GeneratedRulesType: {} } | undefined
          StatefulRules?: {} | undefined
          StatelessRulesAndCustomActions?:
            | { StatelessRules: {}; CustomActions?: {} | undefined }
            | undefined
        }
        StatefulRuleOptions?: { RuleOrder?: {} | undefined } | undefined
      }
    | undefined
  Rules?: {} | undefined
  Type: {}
  Description?: {} | undefined
  Capacity: {}
  Tags?: {} | undefined
  DryRun?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
  SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
}
type CreateRuleGroupResponse = {
  UpdateToken: {}
  RuleGroupResponse: {
    RuleGroupArn: {}
    RuleGroupName: {}
    RuleGroupId: {}
    Description?: {} | undefined
    Type?: {} | undefined
    Capacity?: {} | undefined
    RuleGroupStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
    SnsTopic?: {} | undefined
    LastModifiedTime?: {} | undefined
  }
}
type EncryptionConfiguration = { KeyId?: {} | undefined; Type: {} }
type CreateTLSInspectionConfigurationRequest = {
  TLSInspectionConfigurationName: {}
  TLSInspectionConfiguration: { ServerCertificateConfigurations?: {} | undefined }
  Description?: {} | undefined
  Tags?: {} | undefined
  EncryptionConfiguration?: EncryptionConfiguration | undefined
}
type CreateTLSInspectionConfigurationResponse = {
  UpdateToken: {}
  TLSInspectionConfigurationResponse: {
    TLSInspectionConfigurationArn: {}
    TLSInspectionConfigurationName: {}
    TLSInspectionConfigurationId: {}
    TLSInspectionConfigurationStatus?: {} | undefined
    Description?: {} | undefined
    Tags?: {} | undefined
    LastModifiedTime?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    Certificates?: {} | undefined
  }
}
type DeleteFirewallRequest = { FirewallName?: {} | undefined; FirewallArn?: {} | undefined }
type Firewall = {
  FirewallName?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallPolicyArn: {}
  VpcId: {}
  SubnetMappings: {}
  DeleteProtection?: {} | undefined
  SubnetChangeProtection?: {} | undefined
  FirewallPolicyChangeProtection?: {} | undefined
  Description?: {} | undefined
  FirewallId: {}
  Tags?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
}
type FirewallStatus = {
  Status: {}
  ConfigurationSyncStateSummary: {}
  SyncStates?: {} | undefined
  CapacityUsageSummary?:
    | {
        CIDRs?:
          | {
              AvailableCIDRCount?: {} | undefined
              UtilizedCIDRCount?: {} | undefined
              IPSetReferences?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteFirewallResponse = {
  Firewall?: Firewall | undefined
  FirewallStatus?: FirewallStatus | undefined
}
type DeleteFirewallPolicyRequest = {
  FirewallPolicyName?: {} | undefined
  FirewallPolicyArn?: {} | undefined
}
type DeleteFirewallPolicyResponse = {
  FirewallPolicyResponse: {
    FirewallPolicyName: {}
    FirewallPolicyArn: {}
    FirewallPolicyId: {}
    Description?: {} | undefined
    FirewallPolicyStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedStatelessRuleCapacity?: {} | undefined
    ConsumedStatefulRuleCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    LastModifiedTime?: {} | undefined
  }
}
type DeleteResourcePolicyRequest = { ResourceArn: {} }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DeleteRuleGroupRequest = {
  RuleGroupName?: {} | undefined
  RuleGroupArn?: {} | undefined
  Type?: {} | undefined
}
type DeleteRuleGroupResponse = {
  RuleGroupResponse: {
    RuleGroupArn: {}
    RuleGroupName: {}
    RuleGroupId: {}
    Description?: {} | undefined
    Type?: {} | undefined
    Capacity?: {} | undefined
    RuleGroupStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
    SnsTopic?: {} | undefined
    LastModifiedTime?: {} | undefined
  }
}
type DeleteTLSInspectionConfigurationRequest = {
  TLSInspectionConfigurationArn?: {} | undefined
  TLSInspectionConfigurationName?: {} | undefined
}
type DeleteTLSInspectionConfigurationResponse = {
  TLSInspectionConfigurationResponse: {
    TLSInspectionConfigurationArn: {}
    TLSInspectionConfigurationName: {}
    TLSInspectionConfigurationId: {}
    TLSInspectionConfigurationStatus?: {} | undefined
    Description?: {} | undefined
    Tags?: {} | undefined
    LastModifiedTime?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    Certificates?: {} | undefined
  }
}
type DescribeFirewallRequest = { FirewallName?: {} | undefined; FirewallArn?: {} | undefined }
type DescribeFirewallResponse = {
  UpdateToken?: {} | undefined
  Firewall?:
    | {
        FirewallName?: {} | undefined
        FirewallArn?: {} | undefined
        FirewallPolicyArn: {}
        VpcId: {}
        SubnetMappings: {}
        DeleteProtection?: {} | undefined
        SubnetChangeProtection?: {} | undefined
        FirewallPolicyChangeProtection?: {} | undefined
        Description?: {} | undefined
        FirewallId: {}
        Tags?: {} | undefined
        EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
      }
    | undefined
  FirewallStatus?:
    | {
        Status: {}
        ConfigurationSyncStateSummary: {}
        SyncStates?: {} | undefined
        CapacityUsageSummary?:
          | {
              CIDRs?:
                | {
                    AvailableCIDRCount?: {} | undefined
                    UtilizedCIDRCount?: {} | undefined
                    IPSetReferences?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeFirewallPolicyRequest = {
  FirewallPolicyName?: {} | undefined
  FirewallPolicyArn?: {} | undefined
}
type DescribeFirewallPolicyResponse = {
  UpdateToken: {}
  FirewallPolicyResponse: {
    FirewallPolicyName: {}
    FirewallPolicyArn: {}
    FirewallPolicyId: {}
    Description?: {} | undefined
    FirewallPolicyStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedStatelessRuleCapacity?: {} | undefined
    ConsumedStatefulRuleCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    LastModifiedTime?: {} | undefined
  }
  FirewallPolicy?:
    | {
        StatelessRuleGroupReferences?: {} | undefined
        StatelessDefaultActions: {}
        StatelessFragmentDefaultActions: {}
        StatelessCustomActions?: {} | undefined
        StatefulRuleGroupReferences?: {} | undefined
        StatefulDefaultActions?: {} | undefined
        StatefulEngineOptions?:
          | { RuleOrder?: {} | undefined; StreamExceptionPolicy?: {} | undefined }
          | undefined
        TLSInspectionConfigurationArn?: {} | undefined
      }
    | undefined
}
type DescribeLoggingConfigurationRequest = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
}
type LoggingConfiguration = { LogDestinationConfigs: {} }
type DescribeLoggingConfigurationResponse = {
  FirewallArn?: {} | undefined
  LoggingConfiguration?: LoggingConfiguration | undefined
}
type DescribeResourcePolicyRequest = { ResourceArn: {} }
type DescribeResourcePolicyResponse = { Policy?: {} | undefined }
type DescribeRuleGroupRequest = {
  RuleGroupName?: {} | undefined
  RuleGroupArn?: {} | undefined
  Type?: {} | undefined
}
type DescribeRuleGroupResponse = {
  UpdateToken: {}
  RuleGroup?:
    | {
        RuleVariables?: { IPSets?: {} | undefined; PortSets?: {} | undefined } | undefined
        ReferenceSets?: { IPSetReferences?: {} | undefined } | undefined
        RulesSource: {
          RulesString?: {} | undefined
          RulesSourceList?: { Targets: {}; TargetTypes: {}; GeneratedRulesType: {} } | undefined
          StatefulRules?: {} | undefined
          StatelessRulesAndCustomActions?:
            | { StatelessRules: {}; CustomActions?: {} | undefined }
            | undefined
        }
        StatefulRuleOptions?: { RuleOrder?: {} | undefined } | undefined
      }
    | undefined
  RuleGroupResponse: {
    RuleGroupArn: {}
    RuleGroupName: {}
    RuleGroupId: {}
    Description?: {} | undefined
    Type?: {} | undefined
    Capacity?: {} | undefined
    RuleGroupStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
    SnsTopic?: {} | undefined
    LastModifiedTime?: {} | undefined
  }
}
type DescribeRuleGroupMetadataRequest = {
  RuleGroupName?: {} | undefined
  RuleGroupArn?: {} | undefined
  Type?: {} | undefined
}
type StatefulRuleOptions = { RuleOrder?: {} | undefined }
type DescribeRuleGroupMetadataResponse = {
  RuleGroupArn: {}
  RuleGroupName: {}
  Description?: {} | undefined
  Type?: {} | undefined
  Capacity?: {} | undefined
  StatefulRuleOptions?: StatefulRuleOptions | undefined
  LastModifiedTime?: {} | undefined
}
type DescribeTLSInspectionConfigurationRequest = {
  TLSInspectionConfigurationArn?: {} | undefined
  TLSInspectionConfigurationName?: {} | undefined
}
type DescribeTLSInspectionConfigurationResponse = {
  UpdateToken: {}
  TLSInspectionConfiguration?: { ServerCertificateConfigurations?: {} | undefined } | undefined
  TLSInspectionConfigurationResponse: {
    TLSInspectionConfigurationArn: {}
    TLSInspectionConfigurationName: {}
    TLSInspectionConfigurationId: {}
    TLSInspectionConfigurationStatus?: {} | undefined
    Description?: {} | undefined
    Tags?: {} | undefined
    LastModifiedTime?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    Certificates?: {} | undefined
  }
}
type DisassociateSubnetsRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetIds: {}
}
type DisassociateSubnetsResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetMappings?: {} | undefined
  UpdateToken?: {} | undefined
}
type ListFirewallPoliciesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListFirewallPoliciesResponse = {
  NextToken?: {} | undefined
  FirewallPolicies?: {} | undefined
}
type ListFirewallsRequest = {
  NextToken?: {} | undefined
  VpcIds?: {} | undefined
  MaxResults?: {} | undefined
}
type ListFirewallsResponse = { NextToken?: {} | undefined; Firewalls?: {} | undefined }
type ListRuleGroupsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Scope?: {} | undefined
  ManagedType?: {} | undefined
  Type?: {} | undefined
}
type ListRuleGroupsResponse = { NextToken?: {} | undefined; RuleGroups?: {} | undefined }
type ListTLSInspectionConfigurationsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTLSInspectionConfigurationsResponse = {
  NextToken?: {} | undefined
  TLSInspectionConfigurations?: {} | undefined
}
type ListTagsForResourceRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ResourceArn: {}
}
type ListTagsForResourceResponse = { NextToken?: {} | undefined; Tags?: {} | undefined }
type PutResourcePolicyRequest = { ResourceArn: {}; Policy: {} }
type PutResourcePolicyResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateFirewallDeleteProtectionRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  DeleteProtection: {}
}
type UpdateFirewallDeleteProtectionResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  DeleteProtection?: {} | undefined
  UpdateToken?: {} | undefined
}
type UpdateFirewallDescriptionRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  Description?: {} | undefined
}
type UpdateFirewallDescriptionResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  Description?: {} | undefined
  UpdateToken?: {} | undefined
}
type UpdateFirewallEncryptionConfigurationRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  EncryptionConfiguration?: EncryptionConfiguration | undefined
}
type UpdateFirewallEncryptionConfigurationResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  UpdateToken?: {} | undefined
  EncryptionConfiguration?: EncryptionConfiguration | undefined
}
type UpdateFirewallPolicyRequest = {
  UpdateToken: {}
  FirewallPolicyArn?: {} | undefined
  FirewallPolicyName?: {} | undefined
  FirewallPolicy: {
    StatelessRuleGroupReferences?: {} | undefined
    StatelessDefaultActions: {}
    StatelessFragmentDefaultActions: {}
    StatelessCustomActions?: {} | undefined
    StatefulRuleGroupReferences?: {} | undefined
    StatefulDefaultActions?: {} | undefined
    StatefulEngineOptions?:
      | { RuleOrder?: {} | undefined; StreamExceptionPolicy?: {} | undefined }
      | undefined
    TLSInspectionConfigurationArn?: {} | undefined
  }
  Description?: {} | undefined
  DryRun?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
}
type UpdateFirewallPolicyResponse = {
  UpdateToken: {}
  FirewallPolicyResponse: {
    FirewallPolicyName: {}
    FirewallPolicyArn: {}
    FirewallPolicyId: {}
    Description?: {} | undefined
    FirewallPolicyStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedStatelessRuleCapacity?: {} | undefined
    ConsumedStatefulRuleCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    LastModifiedTime?: {} | undefined
  }
}
type UpdateFirewallPolicyChangeProtectionRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  FirewallPolicyChangeProtection: {}
}
type UpdateFirewallPolicyChangeProtectionResponse = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  FirewallPolicyChangeProtection?: {} | undefined
}
type UpdateLoggingConfigurationRequest = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  LoggingConfiguration?: { LogDestinationConfigs: {} } | undefined
}
type UpdateLoggingConfigurationResponse = {
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  LoggingConfiguration?: LoggingConfiguration | undefined
}
type UpdateRuleGroupRequest = {
  UpdateToken: {}
  RuleGroupArn?: {} | undefined
  RuleGroupName?: {} | undefined
  RuleGroup?:
    | {
        RuleVariables?: { IPSets?: {} | undefined; PortSets?: {} | undefined } | undefined
        ReferenceSets?: { IPSetReferences?: {} | undefined } | undefined
        RulesSource: {
          RulesString?: {} | undefined
          RulesSourceList?: { Targets: {}; TargetTypes: {}; GeneratedRulesType: {} } | undefined
          StatefulRules?: {} | undefined
          StatelessRulesAndCustomActions?:
            | { StatelessRules: {}; CustomActions?: {} | undefined }
            | undefined
        }
        StatefulRuleOptions?: { RuleOrder?: {} | undefined } | undefined
      }
    | undefined
  Rules?: {} | undefined
  Type?: {} | undefined
  Description?: {} | undefined
  DryRun?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
  SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
}
type UpdateRuleGroupResponse = {
  UpdateToken: {}
  RuleGroupResponse: {
    RuleGroupArn: {}
    RuleGroupName: {}
    RuleGroupId: {}
    Description?: {} | undefined
    Type?: {} | undefined
    Capacity?: {} | undefined
    RuleGroupStatus?: {} | undefined
    Tags?: {} | undefined
    ConsumedCapacity?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    SourceMetadata?: { SourceArn?: {} | undefined; SourceUpdateToken?: {} | undefined } | undefined
    SnsTopic?: {} | undefined
    LastModifiedTime?: {} | undefined
  }
}
type UpdateSubnetChangeProtectionRequest = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetChangeProtection: {}
}
type UpdateSubnetChangeProtectionResponse = {
  UpdateToken?: {} | undefined
  FirewallArn?: {} | undefined
  FirewallName?: {} | undefined
  SubnetChangeProtection?: {} | undefined
}
type UpdateTLSInspectionConfigurationRequest = {
  TLSInspectionConfigurationArn?: {} | undefined
  TLSInspectionConfigurationName?: {} | undefined
  TLSInspectionConfiguration: { ServerCertificateConfigurations?: {} | undefined }
  Description?: {} | undefined
  EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
  UpdateToken: {}
}
type UpdateTLSInspectionConfigurationResponse = {
  UpdateToken: {}
  TLSInspectionConfigurationResponse: {
    TLSInspectionConfigurationArn: {}
    TLSInspectionConfigurationName: {}
    TLSInspectionConfigurationId: {}
    TLSInspectionConfigurationStatus?: {} | undefined
    Description?: {} | undefined
    Tags?: {} | undefined
    LastModifiedTime?: {} | undefined
    NumberOfAssociations?: {} | undefined
    EncryptionConfiguration?: { KeyId?: {} | undefined; Type: {} } | undefined
    Certificates?: {} | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateFirewallPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.AssociateFirewallPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateFirewallPolicyRequest }
        output: AssociateFirewallPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.AssociateSubnets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateSubnetsRequest }
        output: AssociateSubnetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.CreateFirewall'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFirewallRequest }
        output: CreateFirewallResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.CreateFirewallPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFirewallPolicyRequest }
        output: CreateFirewallPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.CreateRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRuleGroupRequest }
        output: CreateRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.CreateTLSInspectionConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTLSInspectionConfigurationRequest }
        output: CreateTLSInspectionConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DeleteFirewall'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallRequest }
        output: DeleteFirewallResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DeleteFirewallPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallPolicyRequest }
        output: DeleteFirewallPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DeleteResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourcePolicyRequest }
        output: DeleteResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DeleteRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRuleGroupRequest }
        output: DeleteRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DeleteTLSInspectionConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTLSInspectionConfigurationRequest }
        output: DeleteTLSInspectionConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeFirewall'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFirewallRequest }
        output: DescribeFirewallResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeFirewallPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFirewallPolicyRequest }
        output: DescribeFirewallPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeLoggingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLoggingConfigurationRequest }
        output: DescribeLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeResourcePolicyRequest }
        output: DescribeResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRuleGroupRequest }
        output: DescribeRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeRuleGroupMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRuleGroupMetadataRequest }
        output: DescribeRuleGroupMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DescribeTLSInspectionConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTLSInspectionConfigurationRequest }
        output: DescribeTLSInspectionConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.DisassociateSubnets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateSubnetsRequest }
        output: DisassociateSubnetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.ListFirewallPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallPoliciesRequest }
        output: ListFirewallPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.ListFirewalls'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFirewallsRequest }
        output: ListFirewallsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.ListRuleGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRuleGroupsRequest }
        output: ListRuleGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.ListTLSInspectionConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTLSInspectionConfigurationsRequest }
        output: ListTLSInspectionConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.ListTagsForResource'
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
    '/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.PutResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutResourcePolicyRequest }
        output: PutResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.TagResource'
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
    '/#X-Amz-Target=NetworkFirewall_20201112.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UntagResource'
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
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateFirewallDeleteProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallDeleteProtectionRequest }
        output: UpdateFirewallDeleteProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateFirewallDescription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallDescriptionRequest }
        output: UpdateFirewallDescriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallEncryptionConfigurationRequest }
        output: UpdateFirewallEncryptionConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateFirewallPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallPolicyRequest }
        output: UpdateFirewallPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFirewallPolicyChangeProtectionRequest }
        output: UpdateFirewallPolicyChangeProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateLoggingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLoggingConfigurationRequest }
        output: UpdateLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRuleGroupRequest }
        output: UpdateRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateSubnetChangeProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSubnetChangeProtectionRequest }
        output: UpdateSubnetChangeProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'NetworkFirewall_20201112.UpdateTLSInspectionConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTLSInspectionConfigurationRequest }
        output: UpdateTLSInspectionConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
