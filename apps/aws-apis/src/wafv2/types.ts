type AssociateWebACLRequest = { WebACLArn: {}; ResourceArn: {} }
type AssociateWebACLResponse = { [x: string]: unknown }
type CheckCapacityRequest = { Scope: {}; Rules: {} }
type CheckCapacityResponse = { Capacity?: {} | undefined }
type CreateAPIKeyRequest = { Scope: {}; TokenDomains: {} }
type CreateAPIKeyResponse = { APIKey?: {} | undefined }
type CreateIPSetRequest = {
  Name: {}
  Scope: {}
  Description?: {} | undefined
  IPAddressVersion: {}
  Addresses: {}
  Tags?: {} | undefined
}
type CreateIPSetResponse = {
  Summary?:
    | {
        Name?: {} | undefined
        Id?: {} | undefined
        Description?: {} | undefined
        LockToken?: {} | undefined
        ARN?: {} | undefined
      }
    | undefined
}
type CreateRegexPatternSetRequest = {
  Name: {}
  Scope: {}
  Description?: {} | undefined
  RegularExpressionList: {}
  Tags?: {} | undefined
}
type CreateRegexPatternSetResponse = {
  Summary?:
    | {
        Name?: {} | undefined
        Id?: {} | undefined
        Description?: {} | undefined
        LockToken?: {} | undefined
        ARN?: {} | undefined
      }
    | undefined
}
type CreateRuleGroupRequest = {
  Name: {}
  Scope: {}
  Capacity: {}
  Description?: {} | undefined
  Rules?: {} | undefined
  VisibilityConfig: { SampledRequestsEnabled: {}; CloudWatchMetricsEnabled: {}; MetricName: {} }
  Tags?: {} | undefined
  CustomResponseBodies?: {} | undefined
}
type CreateRuleGroupResponse = {
  Summary?:
    | {
        Name?: {} | undefined
        Id?: {} | undefined
        Description?: {} | undefined
        LockToken?: {} | undefined
        ARN?: {} | undefined
      }
    | undefined
}
type CreateWebACLRequest = {
  Name: {}
  Scope: {}
  DefaultAction: {
    Block?:
      | {
          CustomResponse?:
            | {
                ResponseCode: {}
                CustomResponseBodyKey?: {} | undefined
                ResponseHeaders?: {} | undefined
              }
            | undefined
        }
      | undefined
    Allow?: { CustomRequestHandling?: { InsertHeaders: {} } | undefined } | undefined
  }
  Description?: {} | undefined
  Rules?: {} | undefined
  VisibilityConfig: { SampledRequestsEnabled: {}; CloudWatchMetricsEnabled: {}; MetricName: {} }
  Tags?: {} | undefined
  CustomResponseBodies?: {} | undefined
  CaptchaConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
  ChallengeConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
  TokenDomains?: {} | undefined
  AssociationConfig?: { RequestBody?: {} | undefined } | undefined
}
type CreateWebACLResponse = {
  Summary?:
    | {
        Name?: {} | undefined
        Id?: {} | undefined
        Description?: {} | undefined
        LockToken?: {} | undefined
        ARN?: {} | undefined
      }
    | undefined
}
type DeleteFirewallManagerRuleGroupsRequest = { WebACLArn: {}; WebACLLockToken: {} }
type DeleteFirewallManagerRuleGroupsResponse = { NextWebACLLockToken?: {} | undefined }
type DeleteIPSetRequest = { Name: {}; Scope: {}; Id: {}; LockToken: {} }
type DeleteIPSetResponse = { [x: string]: unknown }
type DeleteLoggingConfigurationRequest = { ResourceArn: {} }
type DeleteLoggingConfigurationResponse = { [x: string]: unknown }
type DeletePermissionPolicyRequest = { ResourceArn: {} }
type DeletePermissionPolicyResponse = { [x: string]: unknown }
type DeleteRegexPatternSetRequest = { Name: {}; Scope: {}; Id: {}; LockToken: {} }
type DeleteRegexPatternSetResponse = { [x: string]: unknown }
type DeleteRuleGroupRequest = { Name: {}; Scope: {}; Id: {}; LockToken: {} }
type DeleteRuleGroupResponse = { [x: string]: unknown }
type DeleteWebACLRequest = { Name: {}; Scope: {}; Id: {}; LockToken: {} }
type DeleteWebACLResponse = { [x: string]: unknown }
type DescribeManagedRuleGroupRequest = {
  VendorName: {}
  Name: {}
  Scope: {}
  VersionName?: {} | undefined
}
type DescribeManagedRuleGroupResponse = {
  VersionName?: {} | undefined
  SnsTopicArn?: {} | undefined
  Capacity?: {} | undefined
  Rules?: {} | undefined
  LabelNamespace?: {} | undefined
  AvailableLabels?: {} | undefined
  ConsumedLabels?: {} | undefined
}
type DisassociateWebACLRequest = { ResourceArn: {} }
type DisassociateWebACLResponse = { [x: string]: unknown }
type GenerateMobileSdkReleaseUrlRequest = { Platform: {}; ReleaseVersion: {} }
type GenerateMobileSdkReleaseUrlResponse = { Url?: {} | undefined }
type GetDecryptedAPIKeyRequest = { Scope: {}; APIKey: {} }
type GetDecryptedAPIKeyResponse = {
  TokenDomains?: {} | undefined
  CreationTimestamp?: {} | undefined
}
type GetIPSetRequest = { Name: {}; Scope: {}; Id: {} }
type GetIPSetResponse = {
  IPSet?:
    | {
        Name: {}
        Id: {}
        ARN: {}
        Description?: {} | undefined
        IPAddressVersion: {}
        Addresses: {}
      }
    | undefined
  LockToken?: {} | undefined
}
type GetLoggingConfigurationRequest = { ResourceArn: {} }
type GetLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | {
        ResourceArn: {}
        LogDestinationConfigs: {}
        RedactedFields?: {} | undefined
        ManagedByFirewallManager?: {} | undefined
        LoggingFilter?: { Filters: {}; DefaultBehavior: {} } | undefined
      }
    | undefined
}
type GetManagedRuleSetRequest = { Name: {}; Scope: {}; Id: {} }
type GetManagedRuleSetResponse = {
  ManagedRuleSet?:
    | {
        Name: {}
        Id: {}
        ARN: {}
        Description?: {} | undefined
        PublishedVersions?: {} | undefined
        RecommendedVersion?: {} | undefined
        LabelNamespace?: {} | undefined
      }
    | undefined
  LockToken?: {} | undefined
}
type GetMobileSdkReleaseRequest = { Platform: {}; ReleaseVersion: {} }
type GetMobileSdkReleaseResponse = {
  MobileSdkRelease?:
    | {
        ReleaseVersion?: {} | undefined
        Timestamp?: {} | undefined
        ReleaseNotes?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetPermissionPolicyRequest = { ResourceArn: {} }
type GetPermissionPolicyResponse = { Policy?: {} | undefined }
type GetRateBasedStatementManagedKeysRequest = {
  Scope: {}
  WebACLName: {}
  WebACLId: {}
  RuleGroupRuleName?: {} | undefined
  RuleName: {}
}
type GetRateBasedStatementManagedKeysResponse = {
  ManagedKeysIPV4?: { IPAddressVersion?: {} | undefined; Addresses?: {} | undefined } | undefined
  ManagedKeysIPV6?: { IPAddressVersion?: {} | undefined; Addresses?: {} | undefined } | undefined
}
type GetRegexPatternSetRequest = { Name: {}; Scope: {}; Id: {} }
type GetRegexPatternSetResponse = {
  RegexPatternSet?:
    | {
        Name?: {} | undefined
        Id?: {} | undefined
        ARN?: {} | undefined
        Description?: {} | undefined
        RegularExpressionList?: {} | undefined
      }
    | undefined
  LockToken?: {} | undefined
}
type GetRuleGroupRequest = {
  Name?: {} | undefined
  Scope?: {} | undefined
  Id?: {} | undefined
  ARN?: {} | undefined
}
type GetRuleGroupResponse = {
  RuleGroup?:
    | {
        Name: {}
        Id: {}
        Capacity: {}
        ARN: {}
        Description?: {} | undefined
        Rules?: {} | undefined
        VisibilityConfig: {
          SampledRequestsEnabled: {}
          CloudWatchMetricsEnabled: {}
          MetricName: {}
        }
        LabelNamespace?: {} | undefined
        CustomResponseBodies?: {} | undefined
        AvailableLabels?: {} | undefined
        ConsumedLabels?: {} | undefined
      }
    | undefined
  LockToken?: {} | undefined
}
type GetSampledRequestsRequest = {
  WebAclArn: {}
  RuleMetricName: {}
  Scope: {}
  TimeWindow: { StartTime: {}; EndTime: {} }
  MaxItems: {}
}
type GetSampledRequestsResponse = {
  SampledRequests?: {} | undefined
  PopulationSize?: {} | undefined
  TimeWindow?: { StartTime: {}; EndTime: {} } | undefined
}
type GetWebACLRequest = { Name: {}; Scope: {}; Id: {} }
type GetWebACLResponse = {
  WebACL?:
    | {
        Name: {}
        Id: {}
        ARN: {}
        DefaultAction: {
          Block?:
            | {
                CustomResponse?:
                  | {
                      ResponseCode: {}
                      CustomResponseBodyKey?: {} | undefined
                      ResponseHeaders?: {} | undefined
                    }
                  | undefined
              }
            | undefined
          Allow?: { CustomRequestHandling?: { InsertHeaders: {} } | undefined } | undefined
        }
        Description?: {} | undefined
        Rules?: {} | undefined
        VisibilityConfig: {
          SampledRequestsEnabled: {}
          CloudWatchMetricsEnabled: {}
          MetricName: {}
        }
        Capacity?: {} | undefined
        PreProcessFirewallManagerRuleGroups?: {} | undefined
        PostProcessFirewallManagerRuleGroups?: {} | undefined
        ManagedByFirewallManager?: {} | undefined
        LabelNamespace?: {} | undefined
        CustomResponseBodies?: {} | undefined
        CaptchaConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
        ChallengeConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
        TokenDomains?: {} | undefined
        AssociationConfig?: { RequestBody?: {} | undefined } | undefined
      }
    | undefined
  LockToken?: {} | undefined
  ApplicationIntegrationURL?: {} | undefined
}
type GetWebACLForResourceRequest = { ResourceArn: {} }
type GetWebACLForResourceResponse = {
  WebACL?:
    | {
        Name: {}
        Id: {}
        ARN: {}
        DefaultAction: {
          Block?:
            | {
                CustomResponse?:
                  | {
                      ResponseCode: {}
                      CustomResponseBodyKey?: {} | undefined
                      ResponseHeaders?: {} | undefined
                    }
                  | undefined
              }
            | undefined
          Allow?: { CustomRequestHandling?: { InsertHeaders: {} } | undefined } | undefined
        }
        Description?: {} | undefined
        Rules?: {} | undefined
        VisibilityConfig: {
          SampledRequestsEnabled: {}
          CloudWatchMetricsEnabled: {}
          MetricName: {}
        }
        Capacity?: {} | undefined
        PreProcessFirewallManagerRuleGroups?: {} | undefined
        PostProcessFirewallManagerRuleGroups?: {} | undefined
        ManagedByFirewallManager?: {} | undefined
        LabelNamespace?: {} | undefined
        CustomResponseBodies?: {} | undefined
        CaptchaConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
        ChallengeConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
        TokenDomains?: {} | undefined
        AssociationConfig?: { RequestBody?: {} | undefined } | undefined
      }
    | undefined
}
type ListAPIKeysRequest = { Scope: {}; NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListAPIKeysResponse = {
  NextMarker?: {} | undefined
  APIKeySummaries?: {} | undefined
  ApplicationIntegrationURL?: {} | undefined
}
type ListAvailableManagedRuleGroupVersionsRequest = {
  VendorName: {}
  Name: {}
  Scope: {}
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListAvailableManagedRuleGroupVersionsResponse = {
  NextMarker?: {} | undefined
  Versions?: {} | undefined
  CurrentDefaultVersion?: {} | undefined
}
type ListAvailableManagedRuleGroupsRequest = {
  Scope: {}
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListAvailableManagedRuleGroupsResponse = {
  NextMarker?: {} | undefined
  ManagedRuleGroups?: {} | undefined
}
type ListIPSetsRequest = { Scope: {}; NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListIPSetsResponse = { NextMarker?: {} | undefined; IPSets?: {} | undefined }
type ListLoggingConfigurationsRequest = {
  Scope: {}
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListLoggingConfigurationsResponse = {
  LoggingConfigurations?: {} | undefined
  NextMarker?: {} | undefined
}
type ListManagedRuleSetsRequest = { Scope: {}; NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListManagedRuleSetsResponse = { NextMarker?: {} | undefined; ManagedRuleSets?: {} | undefined }
type ListMobileSdkReleasesRequest = {
  Platform: {}
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListMobileSdkReleasesResponse = {
  ReleaseSummaries?: {} | undefined
  NextMarker?: {} | undefined
}
type ListRegexPatternSetsRequest = {
  Scope: {}
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListRegexPatternSetsResponse = {
  NextMarker?: {} | undefined
  RegexPatternSets?: {} | undefined
}
type ListResourcesForWebACLRequest = { WebACLArn: {}; ResourceType?: {} | undefined }
type ListResourcesForWebACLResponse = { ResourceArns?: {} | undefined }
type ListRuleGroupsRequest = { Scope: {}; NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRuleGroupsResponse = { NextMarker?: {} | undefined; RuleGroups?: {} | undefined }
type ListTagsForResourceRequest = {
  NextMarker?: {} | undefined
  Limit?: {} | undefined
  ResourceARN: {}
}
type ListTagsForResourceResponse = {
  NextMarker?: {} | undefined
  TagInfoForResource?: { ResourceARN?: {} | undefined; TagList?: {} | undefined } | undefined
}
type ListWebACLsRequest = { Scope: {}; NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListWebACLsResponse = { NextMarker?: {} | undefined; WebACLs?: {} | undefined }
type PutLoggingConfigurationRequest = {
  LoggingConfiguration: {
    ResourceArn: {}
    LogDestinationConfigs: {}
    RedactedFields?: {} | undefined
    ManagedByFirewallManager?: {} | undefined
    LoggingFilter?: { Filters: {}; DefaultBehavior: {} } | undefined
  }
}
type PutLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | {
        ResourceArn: {}
        LogDestinationConfigs: {}
        RedactedFields?: {} | undefined
        ManagedByFirewallManager?: {} | undefined
        LoggingFilter?: { Filters: {}; DefaultBehavior: {} } | undefined
      }
    | undefined
}
type PutManagedRuleSetVersionsRequest = {
  Name: {}
  Scope: {}
  Id: {}
  LockToken: {}
  RecommendedVersion?: {} | undefined
  VersionsToPublish?: {} | undefined
}
type PutManagedRuleSetVersionsResponse = { NextLockToken?: {} | undefined }
type PutPermissionPolicyRequest = { ResourceArn: {}; Policy: {} }
type PutPermissionPolicyResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateIPSetRequest = {
  Name: {}
  Scope: {}
  Id: {}
  Description?: {} | undefined
  Addresses: {}
  LockToken: {}
}
type UpdateIPSetResponse = { NextLockToken?: {} | undefined }
type UpdateManagedRuleSetVersionExpiryDateRequest = {
  Name: {}
  Scope: {}
  Id: {}
  LockToken: {}
  VersionToExpire: {}
  ExpiryTimestamp: {}
}
type UpdateManagedRuleSetVersionExpiryDateResponse = {
  ExpiringVersion?: {} | undefined
  ExpiryTimestamp?: {} | undefined
  NextLockToken?: {} | undefined
}
type UpdateRegexPatternSetRequest = {
  Name: {}
  Scope: {}
  Id: {}
  Description?: {} | undefined
  RegularExpressionList: {}
  LockToken: {}
}
type UpdateRegexPatternSetResponse = { NextLockToken?: {} | undefined }
type UpdateRuleGroupRequest = {
  Name: {}
  Scope: {}
  Id: {}
  Description?: {} | undefined
  Rules?: {} | undefined
  VisibilityConfig: { SampledRequestsEnabled: {}; CloudWatchMetricsEnabled: {}; MetricName: {} }
  LockToken: {}
  CustomResponseBodies?: {} | undefined
}
type UpdateRuleGroupResponse = { NextLockToken?: {} | undefined }
type UpdateWebACLRequest = {
  Name: {}
  Scope: {}
  Id: {}
  DefaultAction: {
    Block?:
      | {
          CustomResponse?:
            | {
                ResponseCode: {}
                CustomResponseBodyKey?: {} | undefined
                ResponseHeaders?: {} | undefined
              }
            | undefined
        }
      | undefined
    Allow?: { CustomRequestHandling?: { InsertHeaders: {} } | undefined } | undefined
  }
  Description?: {} | undefined
  Rules?: {} | undefined
  VisibilityConfig: { SampledRequestsEnabled: {}; CloudWatchMetricsEnabled: {}; MetricName: {} }
  LockToken: {}
  CustomResponseBodies?: {} | undefined
  CaptchaConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
  ChallengeConfig?: { ImmunityTimeProperty?: { ImmunityTime: {} } | undefined } | undefined
  TokenDomains?: {} | undefined
  AssociationConfig?: { RequestBody?: {} | undefined } | undefined
}
type UpdateWebACLResponse = { NextLockToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSWAF_20190729.AssociateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.AssociateWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateWebACLRequest }
        output: AssociateWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.CheckCapacity': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CheckCapacity'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CheckCapacityRequest }
        output: CheckCapacityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.CreateAPIKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CreateAPIKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAPIKeyRequest }
        output: CreateAPIKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.CreateIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CreateIPSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateIPSetRequest }
        output: CreateIPSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CreateRegexPatternSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRegexPatternSetRequest }
        output: CreateRegexPatternSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CreateRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20190729.CreateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.CreateWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWebACLRequest }
        output: CreateWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteFirewallManagerRuleGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFirewallManagerRuleGroupsRequest }
        output: DeleteFirewallManagerRuleGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeleteIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteIPSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIPSetRequest }
        output: DeleteIPSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteLoggingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLoggingConfigurationRequest }
        output: DeleteLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeletePermissionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePermissionPolicyRequest }
        output: DeletePermissionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteRegexPatternSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRegexPatternSetRequest }
        output: DeleteRegexPatternSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20190729.DeleteWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DeleteWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWebACLRequest }
        output: DeleteWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DescribeManagedRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeManagedRuleGroupRequest }
        output: DescribeManagedRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.DisassociateWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateWebACLRequest }
        output: DisassociateWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GenerateMobileSdkReleaseUrl'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateMobileSdkReleaseUrlRequest }
        output: GenerateMobileSdkReleaseUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetDecryptedAPIKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDecryptedAPIKeyRequest }
        output: GetDecryptedAPIKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetIPSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetIPSetRequest }
        output: GetIPSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetLoggingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoggingConfigurationRequest }
        output: GetLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetManagedRuleSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetManagedRuleSetRequest }
        output: GetManagedRuleSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetMobileSdkRelease'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMobileSdkReleaseRequest }
        output: GetMobileSdkReleaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetPermissionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPermissionPolicyRequest }
        output: GetPermissionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetRateBasedStatementManagedKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRateBasedStatementManagedKeysRequest }
        output: GetRateBasedStatementManagedKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetRegexPatternSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegexPatternSetRequest }
        output: GetRegexPatternSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRuleGroupRequest }
        output: GetRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetSampledRequests': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetSampledRequests'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSampledRequestsRequest }
        output: GetSampledRequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWebACLRequest }
        output: GetWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.GetWebACLForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetWebACLForResourceRequest }
        output: GetWebACLForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListAPIKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListAPIKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAPIKeysRequest }
        output: ListAPIKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListAvailableManagedRuleGroupVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableManagedRuleGroupVersionsRequest }
        output: ListAvailableManagedRuleGroupVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListAvailableManagedRuleGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableManagedRuleGroupsRequest }
        output: ListAvailableManagedRuleGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListIPSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListIPSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIPSetsRequest }
        output: ListIPSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListLoggingConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLoggingConfigurationsRequest }
        output: ListLoggingConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListManagedRuleSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListManagedRuleSetsRequest }
        output: ListManagedRuleSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListMobileSdkReleases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMobileSdkReleasesRequest }
        output: ListMobileSdkReleasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListRegexPatternSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRegexPatternSetsRequest }
        output: ListRegexPatternSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListResourcesForWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourcesForWebACLRequest }
        output: ListResourcesForWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.ListRuleGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListRuleGroups'
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
    '/#X-Amz-Target=AWSWAF_20190729.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListTagsForResource'
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
    '/#X-Amz-Target=AWSWAF_20190729.ListWebACLs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.ListWebACLs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWebACLsRequest }
        output: ListWebACLsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.PutLoggingConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutLoggingConfigurationRequest }
        output: PutLoggingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.PutManagedRuleSetVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutManagedRuleSetVersionsRequest }
        output: PutManagedRuleSetVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.PutPermissionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPermissionPolicyRequest }
        output: PutPermissionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.TagResource'
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
    '/#X-Amz-Target=AWSWAF_20190729.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UntagResource'
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
    '/#X-Amz-Target=AWSWAF_20190729.UpdateIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UpdateIPSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateIPSetRequest }
        output: UpdateIPSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateManagedRuleSetVersionExpiryDateRequest }
        output: UpdateManagedRuleSetVersionExpiryDateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UpdateRegexPatternSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRegexPatternSetRequest }
        output: UpdateRegexPatternSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UpdateRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20190729.UpdateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20190729.UpdateWebACL'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWebACLRequest }
        output: UpdateWebACLResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
