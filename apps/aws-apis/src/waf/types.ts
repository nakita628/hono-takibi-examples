type CreateByteMatchSetRequest = { Name: {}; ChangeToken: {} }
type CreateByteMatchSetResponse = {
  ByteMatchSet?: { ByteMatchSetId: {}; Name?: {} | undefined; ByteMatchTuples: {} } | undefined
  ChangeToken?: {} | undefined
}
type CreateGeoMatchSetRequest = { Name: {}; ChangeToken: {} }
type CreateGeoMatchSetResponse = {
  GeoMatchSet?: { GeoMatchSetId: {}; Name?: {} | undefined; GeoMatchConstraints: {} } | undefined
  ChangeToken?: {} | undefined
}
type CreateIPSetRequest = { Name: {}; ChangeToken: {} }
type CreateIPSetResponse = {
  IPSet?: { IPSetId: {}; Name?: {} | undefined; IPSetDescriptors: {} } | undefined
  ChangeToken?: {} | undefined
}
type CreateRateBasedRuleRequest = {
  Name: {}
  MetricName: {}
  RateKey: {}
  RateLimit: {}
  ChangeToken: {}
  Tags?: {} | undefined
}
type CreateRateBasedRuleResponse = {
  Rule?:
    | {
        RuleId: {}
        Name?: {} | undefined
        MetricName?: {} | undefined
        MatchPredicates: {}
        RateKey: {}
        RateLimit: {}
      }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateRegexMatchSetRequest = { Name: {}; ChangeToken: {} }
type CreateRegexMatchSetResponse = {
  RegexMatchSet?:
    | { RegexMatchSetId?: {} | undefined; Name?: {} | undefined; RegexMatchTuples?: {} | undefined }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateRegexPatternSetRequest = { Name: {}; ChangeToken: {} }
type CreateRegexPatternSetResponse = {
  RegexPatternSet?:
    | { RegexPatternSetId: {}; Name?: {} | undefined; RegexPatternStrings: {} }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateRuleRequest = { Name: {}; MetricName: {}; ChangeToken: {}; Tags?: {} | undefined }
type CreateRuleResponse = {
  Rule?:
    | { RuleId: {}; Name?: {} | undefined; MetricName?: {} | undefined; Predicates: {} }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateRuleGroupRequest = { Name: {}; MetricName: {}; ChangeToken: {}; Tags?: {} | undefined }
type CreateRuleGroupResponse = {
  RuleGroup?: { RuleGroupId: {}; Name?: {} | undefined; MetricName?: {} | undefined } | undefined
  ChangeToken?: {} | undefined
}
type CreateSizeConstraintSetRequest = { Name: {}; ChangeToken: {} }
type CreateSizeConstraintSetResponse = {
  SizeConstraintSet?:
    | { SizeConstraintSetId: {}; Name?: {} | undefined; SizeConstraints: {} }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateSqlInjectionMatchSetRequest = { Name: {}; ChangeToken: {} }
type CreateSqlInjectionMatchSetResponse = {
  SqlInjectionMatchSet?:
    | { SqlInjectionMatchSetId: {}; Name?: {} | undefined; SqlInjectionMatchTuples: {} }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateWebACLRequest = {
  Name: {}
  MetricName: {}
  DefaultAction: { Type: {} }
  ChangeToken: {}
  Tags?: {} | undefined
}
type CreateWebACLResponse = {
  WebACL?:
    | {
        WebACLId: {}
        Name?: {} | undefined
        MetricName?: {} | undefined
        DefaultAction: { Type: {} }
        Rules: {}
        WebACLArn?: {} | undefined
      }
    | undefined
  ChangeToken?: {} | undefined
}
type CreateWebACLMigrationStackRequest = {
  WebACLId: {}
  S3BucketName: {}
  IgnoreUnsupportedType: {}
}
type CreateWebACLMigrationStackResponse = { S3ObjectUrl: {} }
type CreateXssMatchSetRequest = { Name: {}; ChangeToken: {} }
type CreateXssMatchSetResponse = {
  XssMatchSet?: { XssMatchSetId: {}; Name?: {} | undefined; XssMatchTuples: {} } | undefined
  ChangeToken?: {} | undefined
}
type DeleteByteMatchSetRequest = { ByteMatchSetId: {}; ChangeToken: {} }
type DeleteByteMatchSetResponse = { ChangeToken?: {} | undefined }
type DeleteGeoMatchSetRequest = { GeoMatchSetId: {}; ChangeToken: {} }
type DeleteGeoMatchSetResponse = { ChangeToken?: {} | undefined }
type DeleteIPSetRequest = { IPSetId: {}; ChangeToken: {} }
type DeleteIPSetResponse = { ChangeToken?: {} | undefined }
type DeleteLoggingConfigurationRequest = { ResourceArn: {} }
type DeleteLoggingConfigurationResponse = { [x: string]: unknown }
type DeletePermissionPolicyRequest = { ResourceArn: {} }
type DeletePermissionPolicyResponse = { [x: string]: unknown }
type DeleteRateBasedRuleRequest = { RuleId: {}; ChangeToken: {} }
type DeleteRateBasedRuleResponse = { ChangeToken?: {} | undefined }
type DeleteRegexMatchSetRequest = { RegexMatchSetId: {}; ChangeToken: {} }
type DeleteRegexMatchSetResponse = { ChangeToken?: {} | undefined }
type DeleteRegexPatternSetRequest = { RegexPatternSetId: {}; ChangeToken: {} }
type DeleteRegexPatternSetResponse = { ChangeToken?: {} | undefined }
type DeleteRuleRequest = { RuleId: {}; ChangeToken: {} }
type DeleteRuleResponse = { ChangeToken?: {} | undefined }
type DeleteRuleGroupRequest = { RuleGroupId: {}; ChangeToken: {} }
type DeleteRuleGroupResponse = { ChangeToken?: {} | undefined }
type DeleteSizeConstraintSetRequest = { SizeConstraintSetId: {}; ChangeToken: {} }
type DeleteSizeConstraintSetResponse = { ChangeToken?: {} | undefined }
type DeleteSqlInjectionMatchSetRequest = { SqlInjectionMatchSetId: {}; ChangeToken: {} }
type DeleteSqlInjectionMatchSetResponse = { ChangeToken?: {} | undefined }
type DeleteWebACLRequest = { WebACLId: {}; ChangeToken: {} }
type DeleteWebACLResponse = { ChangeToken?: {} | undefined }
type DeleteXssMatchSetRequest = { XssMatchSetId: {}; ChangeToken: {} }
type DeleteXssMatchSetResponse = { ChangeToken?: {} | undefined }
type GetByteMatchSetRequest = { ByteMatchSetId: {} }
type GetByteMatchSetResponse = {
  ByteMatchSet?: { ByteMatchSetId: {}; Name?: {} | undefined; ByteMatchTuples: {} } | undefined
}
type GetChangeTokenRequest = { [x: string]: unknown }
type GetChangeTokenResponse = { ChangeToken?: {} | undefined }
type GetChangeTokenStatusRequest = { ChangeToken: {} }
type GetChangeTokenStatusResponse = { ChangeTokenStatus?: {} | undefined }
type GetGeoMatchSetRequest = { GeoMatchSetId: {} }
type GetGeoMatchSetResponse = {
  GeoMatchSet?: { GeoMatchSetId: {}; Name?: {} | undefined; GeoMatchConstraints: {} } | undefined
}
type GetIPSetRequest = { IPSetId: {} }
type GetIPSetResponse = {
  IPSet?: { IPSetId: {}; Name?: {} | undefined; IPSetDescriptors: {} } | undefined
}
type GetLoggingConfigurationRequest = { ResourceArn: {} }
type GetLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | { ResourceArn: {}; LogDestinationConfigs: {}; RedactedFields?: {} | undefined }
    | undefined
}
type GetPermissionPolicyRequest = { ResourceArn: {} }
type GetPermissionPolicyResponse = { Policy?: {} | undefined }
type GetRateBasedRuleRequest = { RuleId: {} }
type GetRateBasedRuleResponse = {
  Rule?:
    | {
        RuleId: {}
        Name?: {} | undefined
        MetricName?: {} | undefined
        MatchPredicates: {}
        RateKey: {}
        RateLimit: {}
      }
    | undefined
}
type GetRateBasedRuleManagedKeysRequest = { RuleId: {}; NextMarker?: {} | undefined }
type GetRateBasedRuleManagedKeysResponse = {
  ManagedKeys?: {} | undefined
  NextMarker?: {} | undefined
}
type GetRegexMatchSetRequest = { RegexMatchSetId: {} }
type GetRegexMatchSetResponse = {
  RegexMatchSet?:
    | { RegexMatchSetId?: {} | undefined; Name?: {} | undefined; RegexMatchTuples?: {} | undefined }
    | undefined
}
type GetRegexPatternSetRequest = { RegexPatternSetId: {} }
type GetRegexPatternSetResponse = {
  RegexPatternSet?:
    | { RegexPatternSetId: {}; Name?: {} | undefined; RegexPatternStrings: {} }
    | undefined
}
type GetRuleRequest = { RuleId: {} }
type GetRuleResponse = {
  Rule?:
    | { RuleId: {}; Name?: {} | undefined; MetricName?: {} | undefined; Predicates: {} }
    | undefined
}
type GetRuleGroupRequest = { RuleGroupId: {} }
type GetRuleGroupResponse = {
  RuleGroup?: { RuleGroupId: {}; Name?: {} | undefined; MetricName?: {} | undefined } | undefined
}
type GetSampledRequestsRequest = {
  WebAclId: {}
  RuleId: {}
  TimeWindow: { StartTime: {}; EndTime: {} }
  MaxItems: {}
}
type GetSampledRequestsResponse = {
  SampledRequests?: {} | undefined
  PopulationSize?: {} | undefined
  TimeWindow?: { StartTime: {}; EndTime: {} } | undefined
}
type GetSizeConstraintSetRequest = { SizeConstraintSetId: {} }
type GetSizeConstraintSetResponse = {
  SizeConstraintSet?:
    | { SizeConstraintSetId: {}; Name?: {} | undefined; SizeConstraints: {} }
    | undefined
}
type GetSqlInjectionMatchSetRequest = { SqlInjectionMatchSetId: {} }
type GetSqlInjectionMatchSetResponse = {
  SqlInjectionMatchSet?:
    | { SqlInjectionMatchSetId: {}; Name?: {} | undefined; SqlInjectionMatchTuples: {} }
    | undefined
}
type GetWebACLRequest = { WebACLId: {} }
type GetWebACLResponse = {
  WebACL?:
    | {
        WebACLId: {}
        Name?: {} | undefined
        MetricName?: {} | undefined
        DefaultAction: { Type: {} }
        Rules: {}
        WebACLArn?: {} | undefined
      }
    | undefined
}
type GetXssMatchSetRequest = { XssMatchSetId: {} }
type GetXssMatchSetResponse = {
  XssMatchSet?: { XssMatchSetId: {}; Name?: {} | undefined; XssMatchTuples: {} } | undefined
}
type ListActivatedRulesInRuleGroupRequest = {
  RuleGroupId?: {} | undefined
  NextMarker?: {} | undefined
  Limit?: {} | undefined
}
type ListActivatedRulesInRuleGroupResponse = {
  NextMarker?: {} | undefined
  ActivatedRules?: {} | undefined
}
type ListByteMatchSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListByteMatchSetsResponse = { NextMarker?: {} | undefined; ByteMatchSets?: {} | undefined }
type ListGeoMatchSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListGeoMatchSetsResponse = { NextMarker?: {} | undefined; GeoMatchSets?: {} | undefined }
type ListIPSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListIPSetsResponse = { NextMarker?: {} | undefined; IPSets?: {} | undefined }
type ListLoggingConfigurationsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListLoggingConfigurationsResponse = {
  LoggingConfigurations?: {} | undefined
  NextMarker?: {} | undefined
}
type ListRateBasedRulesRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRateBasedRulesResponse = { NextMarker?: {} | undefined; Rules?: {} | undefined }
type ListRegexMatchSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRegexMatchSetsResponse = { NextMarker?: {} | undefined; RegexMatchSets?: {} | undefined }
type ListRegexPatternSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRegexPatternSetsResponse = {
  NextMarker?: {} | undefined
  RegexPatternSets?: {} | undefined
}
type ListRuleGroupsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRuleGroupsResponse = { NextMarker?: {} | undefined; RuleGroups?: {} | undefined }
type ListRulesRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListRulesResponse = { NextMarker?: {} | undefined; Rules?: {} | undefined }
type ListSizeConstraintSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListSizeConstraintSetsResponse = {
  NextMarker?: {} | undefined
  SizeConstraintSets?: {} | undefined
}
type ListSqlInjectionMatchSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListSqlInjectionMatchSetsResponse = {
  NextMarker?: {} | undefined
  SqlInjectionMatchSets?: {} | undefined
}
type ListSubscribedRuleGroupsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListSubscribedRuleGroupsResponse = { NextMarker?: {} | undefined; RuleGroups?: {} | undefined }
type ListTagsForResourceRequest = {
  NextMarker?: {} | undefined
  Limit?: {} | undefined
  ResourceARN: {}
}
type ListTagsForResourceResponse = {
  NextMarker?: {} | undefined
  TagInfoForResource?: { ResourceARN?: {} | undefined; TagList?: {} | undefined } | undefined
}
type ListWebACLsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListWebACLsResponse = { NextMarker?: {} | undefined; WebACLs?: {} | undefined }
type ListXssMatchSetsRequest = { NextMarker?: {} | undefined; Limit?: {} | undefined }
type ListXssMatchSetsResponse = { NextMarker?: {} | undefined; XssMatchSets?: {} | undefined }
type PutLoggingConfigurationRequest = {
  LoggingConfiguration: {
    ResourceArn: {}
    LogDestinationConfigs: {}
    RedactedFields?: {} | undefined
  }
}
type PutLoggingConfigurationResponse = {
  LoggingConfiguration?:
    | { ResourceArn: {}; LogDestinationConfigs: {}; RedactedFields?: {} | undefined }
    | undefined
}
type PutPermissionPolicyRequest = { ResourceArn: {}; Policy: {} }
type PutPermissionPolicyResponse = { [x: string]: unknown }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateByteMatchSetRequest = { ByteMatchSetId: {}; ChangeToken: {}; Updates: {} }
type UpdateByteMatchSetResponse = { ChangeToken?: {} | undefined }
type UpdateGeoMatchSetRequest = { GeoMatchSetId: {}; ChangeToken: {}; Updates: {} }
type UpdateGeoMatchSetResponse = { ChangeToken?: {} | undefined }
type UpdateIPSetRequest = { IPSetId: {}; ChangeToken: {}; Updates: {} }
type UpdateIPSetResponse = { ChangeToken?: {} | undefined }
type UpdateRateBasedRuleRequest = { RuleId: {}; ChangeToken: {}; Updates: {}; RateLimit: {} }
type UpdateRateBasedRuleResponse = { ChangeToken?: {} | undefined }
type UpdateRegexMatchSetRequest = { RegexMatchSetId: {}; Updates: {}; ChangeToken: {} }
type UpdateRegexMatchSetResponse = { ChangeToken?: {} | undefined }
type UpdateRegexPatternSetRequest = { RegexPatternSetId: {}; Updates: {}; ChangeToken: {} }
type UpdateRegexPatternSetResponse = { ChangeToken?: {} | undefined }
type UpdateRuleRequest = { RuleId: {}; ChangeToken: {}; Updates: {} }
type UpdateRuleResponse = { ChangeToken?: {} | undefined }
type UpdateRuleGroupRequest = { RuleGroupId: {}; Updates: {}; ChangeToken: {} }
type UpdateRuleGroupResponse = { ChangeToken?: {} | undefined }
type UpdateSizeConstraintSetRequest = { SizeConstraintSetId: {}; ChangeToken: {}; Updates: {} }
type UpdateSizeConstraintSetResponse = { ChangeToken?: {} | undefined }
type UpdateSqlInjectionMatchSetRequest = {
  SqlInjectionMatchSetId: {}
  ChangeToken: {}
  Updates: {}
}
type UpdateSqlInjectionMatchSetResponse = { ChangeToken?: {} | undefined }
type UpdateWebACLRequest = {
  WebACLId: {}
  ChangeToken: {}
  Updates?: {} | undefined
  DefaultAction?: { Type: {} } | undefined
}
type UpdateWebACLResponse = { ChangeToken?: {} | undefined }
type UpdateXssMatchSetRequest = { XssMatchSetId: {}; ChangeToken: {}; Updates: {} }
type UpdateXssMatchSetResponse = { ChangeToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateByteMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateByteMatchSetRequest }
        output: CreateByteMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateGeoMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGeoMatchSetRequest }
        output: CreateGeoMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateIPSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateRateBasedRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRateBasedRuleRequest }
        output: CreateRateBasedRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateRegexMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRegexMatchSetRequest }
        output: CreateRegexMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateRegexPatternSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.CreateRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRuleRequest }
        output: CreateRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateSizeConstraintSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSizeConstraintSetRequest }
        output: CreateSizeConstraintSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateSqlInjectionMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSqlInjectionMatchSetRequest }
        output: CreateSqlInjectionMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateWebACL'
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
    '/#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateWebACLMigrationStack'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWebACLMigrationStackRequest }
        output: CreateWebACLMigrationStackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.CreateXssMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateXssMatchSetRequest }
        output: CreateXssMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteByteMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteByteMatchSetRequest }
        output: DeleteByteMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteGeoMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGeoMatchSetRequest }
        output: DeleteGeoMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteIPSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteLoggingConfiguration'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeletePermissionPolicy'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteRateBasedRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRateBasedRuleRequest }
        output: DeleteRateBasedRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteRegexMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRegexMatchSetRequest }
        output: DeleteRegexMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteRegexPatternSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRuleRequest }
        output: DeleteRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteSizeConstraintSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSizeConstraintSetRequest }
        output: DeleteSizeConstraintSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteSqlInjectionMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSqlInjectionMatchSetRequest }
        output: DeleteSqlInjectionMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.DeleteWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteWebACL'
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
    '/#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.DeleteXssMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteXssMatchSetRequest }
        output: DeleteXssMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetByteMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetByteMatchSetRequest }
        output: GetByteMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetChangeToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetChangeTokenRequest }
        output: GetChangeTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetChangeTokenStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetChangeTokenStatusRequest }
        output: GetChangeTokenStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetGeoMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGeoMatchSetRequest }
        output: GetGeoMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetIPSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetLoggingConfiguration'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetPermissionPolicy'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRateBasedRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRateBasedRuleRequest }
        output: GetRateBasedRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRateBasedRuleManagedKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRateBasedRuleManagedKeysRequest }
        output: GetRateBasedRuleManagedKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRegexMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegexMatchSetRequest }
        output: GetRegexMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRegexPatternSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRuleRequest }
        output: GetRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetSampledRequests': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetSampledRequests'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetSizeConstraintSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSizeConstraintSetRequest }
        output: GetSizeConstraintSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetSqlInjectionMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSqlInjectionMatchSetRequest }
        output: GetSqlInjectionMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.GetWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetWebACL'
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
    '/#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.GetXssMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetXssMatchSetRequest }
        output: GetXssMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListActivatedRulesInRuleGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListActivatedRulesInRuleGroupRequest }
        output: ListActivatedRulesInRuleGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListByteMatchSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListByteMatchSetsRequest }
        output: ListByteMatchSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListGeoMatchSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGeoMatchSetsRequest }
        output: ListGeoMatchSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListIPSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListIPSets'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListLoggingConfigurations'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListRateBasedRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRateBasedRulesRequest }
        output: ListRateBasedRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListRegexMatchSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRegexMatchSetsRequest }
        output: ListRegexMatchSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListRegexPatternSets'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListRuleGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListRuleGroups'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRulesRequest }
        output: ListRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListSizeConstraintSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSizeConstraintSetsRequest }
        output: ListSizeConstraintSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListSqlInjectionMatchSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSqlInjectionMatchSetsRequest }
        output: ListSqlInjectionMatchSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListSubscribedRuleGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSubscribedRuleGroupsRequest }
        output: ListSubscribedRuleGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListTagsForResource'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListWebACLs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListWebACLs'
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
    '/#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.ListXssMatchSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListXssMatchSetsRequest }
        output: ListXssMatchSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.PutLoggingConfiguration'
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
    '/#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.PutPermissionPolicy'
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
    '/#X-Amz-Target=AWSWAF_20150824.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.TagResource'
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
    '/#X-Amz-Target=AWSWAF_20150824.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UntagResource'
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
    '/#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateByteMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateByteMatchSetRequest }
        output: UpdateByteMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateGeoMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGeoMatchSetRequest }
        output: UpdateGeoMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateIPSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateIPSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateRateBasedRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRateBasedRuleRequest }
        output: UpdateRateBasedRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateRegexMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRegexMatchSetRequest }
        output: UpdateRegexMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateRegexPatternSet'
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
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRuleRequest }
        output: UpdateRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateRuleGroup'
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
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateSizeConstraintSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSizeConstraintSetRequest }
        output: UpdateSizeConstraintSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateSqlInjectionMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSqlInjectionMatchSetRequest }
        output: UpdateSqlInjectionMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateWebACL': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateWebACL'
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
  } & {
    '/#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSWAF_20150824.UpdateXssMatchSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateXssMatchSetRequest }
        output: UpdateXssMatchSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
