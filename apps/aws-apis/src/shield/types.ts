type AssociateDRTLogBucketRequest = { LogBucket: {} }
type AssociateDRTLogBucketResponse = { [x: string]: unknown }
type AssociateDRTRoleRequest = { RoleArn: {} }
type AssociateDRTRoleResponse = { [x: string]: unknown }
type AssociateHealthCheckRequest = { ProtectionId: {}; HealthCheckArn: {} }
type AssociateHealthCheckResponse = { [x: string]: unknown }
type AssociateProactiveEngagementDetailsRequest = { EmergencyContactList: {} }
type AssociateProactiveEngagementDetailsResponse = { [x: string]: unknown }
type CreateProtectionRequest = { Name: {}; ResourceArn: {}; Tags?: {} | undefined }
type CreateProtectionResponse = { ProtectionId?: {} | undefined }
type CreateProtectionGroupRequest = {
  ProtectionGroupId: {}
  Aggregation: {}
  Pattern: {}
  ResourceType?: {} | undefined
  Members?: {} | undefined
  Tags?: {} | undefined
}
type CreateProtectionGroupResponse = { [x: string]: unknown }
type CreateSubscriptionRequest = { [x: string]: unknown }
type CreateSubscriptionResponse = { [x: string]: unknown }
type DeleteProtectionRequest = { ProtectionId: {} }
type DeleteProtectionResponse = { [x: string]: unknown }
type DeleteProtectionGroupRequest = { ProtectionGroupId: {} }
type DeleteProtectionGroupResponse = { [x: string]: unknown }
type DeleteSubscriptionRequest = { [x: string]: unknown }
type DeleteSubscriptionResponse = { [x: string]: unknown }
type DescribeAttackRequest = { AttackId: {} }
type DescribeAttackResponse = {
  Attack?:
    | {
        AttackId?: {} | undefined
        ResourceArn?: {} | undefined
        SubResources?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        AttackCounters?: {} | undefined
        AttackProperties?: {} | undefined
        Mitigations?: {} | undefined
      }
    | undefined
}
type DescribeAttackStatisticsRequest = { [x: string]: unknown }
type DescribeAttackStatisticsResponse = {
  TimeRange: { FromInclusive?: {} | undefined; ToExclusive?: {} | undefined }
  DataItems: {}
}
type DescribeDRTAccessRequest = { [x: string]: unknown }
type DescribeDRTAccessResponse = { RoleArn?: {} | undefined; LogBucketList?: {} | undefined }
type DescribeEmergencyContactSettingsRequest = { [x: string]: unknown }
type DescribeEmergencyContactSettingsResponse = { EmergencyContactList?: {} | undefined }
type DescribeProtectionRequest = { ProtectionId?: {} | undefined; ResourceArn?: {} | undefined }
type DescribeProtectionResponse = {
  Protection?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        ResourceArn?: {} | undefined
        HealthCheckIds?: {} | undefined
        ProtectionArn?: {} | undefined
        ApplicationLayerAutomaticResponseConfiguration?:
          | { Status: {}; Action: { Block?: {} | undefined; Count?: {} | undefined } }
          | undefined
      }
    | undefined
}
type DescribeProtectionGroupRequest = { ProtectionGroupId: {} }
type DescribeProtectionGroupResponse = {
  ProtectionGroup: {
    ProtectionGroupId: {}
    Aggregation: {}
    Pattern: {}
    ResourceType?: {} | undefined
    Members: {}
    ProtectionGroupArn?: {} | undefined
  }
}
type DescribeSubscriptionRequest = { [x: string]: unknown }
type DescribeSubscriptionResponse = {
  Subscription?:
    | {
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        TimeCommitmentInSeconds?: {} | undefined
        AutoRenew?: {} | undefined
        Limits?: {} | undefined
        ProactiveEngagementStatus?: {} | undefined
        SubscriptionLimits: {
          ProtectionLimits: { ProtectedResourceTypeLimits: {} }
          ProtectionGroupLimits: {
            MaxProtectionGroups: {}
            PatternTypeLimits: { ArbitraryPatternLimits: { MaxMembers: {} } }
          }
        }
        SubscriptionArn?: {} | undefined
      }
    | undefined
}
type DisableApplicationLayerAutomaticResponseRequest = { ResourceArn: {} }
type DisableApplicationLayerAutomaticResponseResponse = { [x: string]: unknown }
type DisableProactiveEngagementRequest = { [x: string]: unknown }
type DisableProactiveEngagementResponse = { [x: string]: unknown }
type DisassociateDRTLogBucketRequest = { LogBucket: {} }
type DisassociateDRTLogBucketResponse = { [x: string]: unknown }
type DisassociateDRTRoleRequest = { [x: string]: unknown }
type DisassociateDRTRoleResponse = { [x: string]: unknown }
type DisassociateHealthCheckRequest = { ProtectionId: {}; HealthCheckArn: {} }
type DisassociateHealthCheckResponse = { [x: string]: unknown }
type EnableApplicationLayerAutomaticResponseRequest = {
  ResourceArn: {}
  Action: { Block?: {} | undefined; Count?: {} | undefined }
}
type EnableApplicationLayerAutomaticResponseResponse = { [x: string]: unknown }
type EnableProactiveEngagementRequest = { [x: string]: unknown }
type EnableProactiveEngagementResponse = { [x: string]: unknown }
type GetSubscriptionStateRequest = { [x: string]: unknown }
type GetSubscriptionStateResponse = { SubscriptionState: {} }
type ListAttacksRequest = {
  ResourceArns?: {} | undefined
  StartTime?: { FromInclusive?: {} | undefined; ToExclusive?: {} | undefined } | undefined
  EndTime?: { FromInclusive?: {} | undefined; ToExclusive?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAttacksResponse = { AttackSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListProtectionGroupsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  InclusionFilters?:
    | {
        ProtectionGroupIds?: {} | undefined
        Patterns?: {} | undefined
        ResourceTypes?: {} | undefined
        Aggregations?: {} | undefined
      }
    | undefined
}
type ListProtectionGroupsResponse = { ProtectionGroups: {}; NextToken?: {} | undefined }
type ListProtectionsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  InclusionFilters?:
    | {
        ResourceArns?: {} | undefined
        ProtectionNames?: {} | undefined
        ResourceTypes?: {} | undefined
      }
    | undefined
}
type ListProtectionsResponse = { Protections?: {} | undefined; NextToken?: {} | undefined }
type ListResourcesInProtectionGroupRequest = {
  ProtectionGroupId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListResourcesInProtectionGroupResponse = { ResourceArns: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateApplicationLayerAutomaticResponseRequest = {
  ResourceArn: {}
  Action: { Block?: {} | undefined; Count?: {} | undefined }
}
type UpdateApplicationLayerAutomaticResponseResponse = { [x: string]: unknown }
type UpdateEmergencyContactSettingsRequest = { EmergencyContactList?: {} | undefined }
type UpdateEmergencyContactSettingsResponse = { [x: string]: unknown }
type UpdateProtectionGroupRequest = {
  ProtectionGroupId: {}
  Aggregation: {}
  Pattern: {}
  ResourceType?: {} | undefined
  Members?: {} | undefined
}
type UpdateProtectionGroupResponse = { [x: string]: unknown }
type UpdateSubscriptionRequest = { AutoRenew?: {} | undefined }
type UpdateSubscriptionResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.AssociateDRTLogBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDRTLogBucketRequest }
        output: AssociateDRTLogBucketResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.AssociateDRTRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDRTRoleRequest }
        output: AssociateDRTRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.AssociateHealthCheck'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateHealthCheckRequest }
        output: AssociateHealthCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.AssociateProactiveEngagementDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateProactiveEngagementDetailsRequest }
        output: AssociateProactiveEngagementDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.CreateProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.CreateProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProtectionRequest }
        output: CreateProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.CreateProtectionGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProtectionGroupRequest }
        output: CreateProtectionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.CreateSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.CreateSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSubscriptionRequest }
        output: CreateSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DeleteProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProtectionRequest }
        output: DeleteProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DeleteProtectionGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProtectionGroupRequest }
        output: DeleteProtectionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DeleteSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DeleteSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSubscriptionRequest }
        output: DeleteSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttack': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeAttack'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAttackRequest }
        output: DescribeAttackResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeAttackStatistics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAttackStatisticsRequest }
        output: DescribeAttackStatisticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeDRTAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDRTAccessRequest }
        output: DescribeDRTAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeEmergencyContactSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEmergencyContactSettingsRequest }
        output: DescribeEmergencyContactSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProtectionRequest }
        output: DescribeProtectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeProtectionGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProtectionGroupRequest }
        output: DescribeProtectionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DescribeSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DescribeSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSubscriptionRequest }
        output: DescribeSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DisableApplicationLayerAutomaticResponse'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableApplicationLayerAutomaticResponseRequest }
        output: DisableApplicationLayerAutomaticResponseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DisableProactiveEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableProactiveEngagementRequest }
        output: DisableProactiveEngagementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DisassociateDRTLogBucket'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDRTLogBucketRequest }
        output: DisassociateDRTLogBucketResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DisassociateDRTRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDRTRoleRequest }
        output: DisassociateDRTRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.DisassociateHealthCheck'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateHealthCheckRequest }
        output: DisassociateHealthCheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.EnableApplicationLayerAutomaticResponse'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableApplicationLayerAutomaticResponseRequest }
        output: EnableApplicationLayerAutomaticResponseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.EnableProactiveEngagement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableProactiveEngagementRequest }
        output: EnableProactiveEngagementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.GetSubscriptionState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSubscriptionStateRequest }
        output: GetSubscriptionStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.ListAttacks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.ListAttacks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAttacksRequest }
        output: ListAttacksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.ListProtectionGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProtectionGroupsRequest }
        output: ListProtectionGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.ListProtections': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.ListProtections'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProtectionsRequest }
        output: ListProtectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.ListResourcesInProtectionGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourcesInProtectionGroupRequest }
        output: ListResourcesInProtectionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.ListTagsForResource'
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
    '/#X-Amz-Target=AWSShield_20160616.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.TagResource'
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
    '/#X-Amz-Target=AWSShield_20160616.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.UntagResource'
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
    '/#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.UpdateApplicationLayerAutomaticResponse'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateApplicationLayerAutomaticResponseRequest }
        output: UpdateApplicationLayerAutomaticResponseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.UpdateEmergencyContactSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateEmergencyContactSettingsRequest }
        output: UpdateEmergencyContactSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.UpdateProtectionGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProtectionGroupRequest }
        output: UpdateProtectionGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSShield_20160616.UpdateSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSShield_20160616.UpdateSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSubscriptionRequest }
        output: UpdateSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
