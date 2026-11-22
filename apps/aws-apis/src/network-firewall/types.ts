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
type InvalidRequestException = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type InvalidTokenException = { [x: string]: unknown }
type InvalidOperationException = { [x: string]: unknown }
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
type InsufficientCapacityException = { [x: string]: unknown }
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
type LimitExceededException = { [x: string]: unknown }
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
type UnsupportedOperationException = { [x: string]: unknown }
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
type InvalidResourcePolicyException = { [x: string]: unknown }
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
type ResourceOwnerCheckException = { [x: string]: unknown }
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
type LogDestinationPermissionException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.AssociateSubnets': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InsufficientCapacityException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewall': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InsufficientCapacityException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateFirewallPolicy': {
      $post:
        | {
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
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InsufficientCapacityException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateRuleGroup': {
      $post:
        | {
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
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InsufficientCapacityException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.CreateTLSInspectionConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewall': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteFirewallPolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidResourcePolicyException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteRuleGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnsupportedOperationException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DeleteTLSInspectionConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewall': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeFirewallPolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeLoggingConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroup': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeRuleGroupMetadata': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DescribeTLSInspectionConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.DisassociateSubnets': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidOperationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewallPolicies': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListFirewalls': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListRuleGroups': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTLSInspectionConfigurations': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.ListTagsForResource': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.PutResourcePolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidResourcePolicyException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.TagResource': {
      $post:
        | {
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
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UntagResource': {
      $post:
        | {
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
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDeleteProtection': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceOwnerCheckException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallDescription': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceOwnerCheckException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicy': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceOwnerCheckException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateLoggingConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: LogDestinationPermissionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateRuleGroup': {
      $post:
        | {
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
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateSubnetChangeProtection': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceOwnerCheckException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=NetworkFirewall_20201112.UpdateTLSInspectionConfiguration': {
      $post:
        | {
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
        | {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidTokenException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
