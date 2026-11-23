type DeleteScalingPolicyRequest = {
  PolicyName: {}
  ServiceNamespace: {}
  ResourceId: {}
  ScalableDimension: {}
}
type DeleteScalingPolicyResponse = { [x: string]: unknown }
type DeleteScheduledActionRequest = {
  ServiceNamespace: {}
  ScheduledActionName: {}
  ResourceId: {}
  ScalableDimension: {}
}
type DeleteScheduledActionResponse = { [x: string]: unknown }
type DeregisterScalableTargetRequest = {
  ServiceNamespace: {}
  ResourceId: {}
  ScalableDimension: {}
}
type DeregisterScalableTargetResponse = { [x: string]: unknown }
type DescribeScalableTargetsRequest = {
  ServiceNamespace: {}
  ResourceIds?: {} | undefined
  ScalableDimension?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalableTargetsResponse = {
  ScalableTargets?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalingActivitiesRequest = {
  ServiceNamespace: {}
  ResourceId?: {} | undefined
  ScalableDimension?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  IncludeNotScaledActivities?: {} | undefined
}
type DescribeScalingActivitiesResponse = {
  ScalingActivities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalingPoliciesRequest = {
  PolicyNames?: {} | undefined
  ServiceNamespace: {}
  ResourceId?: {} | undefined
  ScalableDimension?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalingPoliciesResponse = {
  ScalingPolicies?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScheduledActionsRequest = {
  ScheduledActionNames?: {} | undefined
  ServiceNamespace: {}
  ResourceId?: {} | undefined
  ScalableDimension?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScheduledActionsResponse = {
  ScheduledActions?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type PutScalingPolicyRequest = {
  PolicyName: {}
  ServiceNamespace: {}
  ResourceId: {}
  ScalableDimension: {}
  PolicyType?: {} | undefined
  StepScalingPolicyConfiguration?:
    | {
        AdjustmentType?: {} | undefined
        StepAdjustments?: {} | undefined
        MinAdjustmentMagnitude?: {} | undefined
        Cooldown?: {} | undefined
        MetricAggregationType?: {} | undefined
      }
    | undefined
  TargetTrackingScalingPolicyConfiguration?:
    | {
        TargetValue: {}
        PredefinedMetricSpecification?:
          | { PredefinedMetricType: {}; ResourceLabel?: {} | undefined }
          | undefined
        CustomizedMetricSpecification?:
          | {
              MetricName?: {} | undefined
              Namespace?: {} | undefined
              Dimensions?: {} | undefined
              Statistic?: {} | undefined
              Unit?: {} | undefined
              Metrics?: {} | undefined
            }
          | undefined
        ScaleOutCooldown?: {} | undefined
        ScaleInCooldown?: {} | undefined
        DisableScaleIn?: {} | undefined
      }
    | undefined
}
type PutScalingPolicyResponse = { PolicyARN: {}; Alarms?: {} | undefined }
type PutScheduledActionRequest = {
  ServiceNamespace: {}
  Schedule?: {} | undefined
  Timezone?: {} | undefined
  ScheduledActionName: {}
  ResourceId: {}
  ScalableDimension: {}
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  ScalableTargetAction?: { MinCapacity?: {} | undefined; MaxCapacity?: {} | undefined } | undefined
}
type PutScheduledActionResponse = { [x: string]: unknown }
type RegisterScalableTargetRequest = {
  ServiceNamespace: {}
  ResourceId: {}
  ScalableDimension: {}
  MinCapacity?: {} | undefined
  MaxCapacity?: {} | undefined
  RoleARN?: {} | undefined
  SuspendedState?:
    | {
        DynamicScalingInSuspended?: {} | undefined
        DynamicScalingOutSuspended?: {} | undefined
        ScheduledScalingSuspended?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type RegisterScalableTargetResponse = { ScalableTargetARN?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DeleteScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteScalingPolicyRequest }
        output: DeleteScalingPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DeleteScheduledAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteScheduledActionRequest }
        output: DeleteScheduledActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DeregisterScalableTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterScalableTargetRequest }
        output: DeregisterScalableTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DescribeScalableTargets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScalableTargetsRequest }
        output: DescribeScalableTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DescribeScalingActivities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScalingActivitiesRequest }
        output: DescribeScalingActivitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DescribeScalingPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScalingPoliciesRequest }
        output: DescribeScalingPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.DescribeScheduledActions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScheduledActionsRequest }
        output: DescribeScheduledActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.ListTagsForResource'
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
    '/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.PutScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutScalingPolicyRequest }
        output: PutScalingPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.PutScheduledAction'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutScheduledActionRequest }
        output: PutScheduledActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.RegisterScalableTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterScalableTargetRequest }
        output: RegisterScalableTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AnyScaleFrontendService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.TagResource'
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
    '/#X-Amz-Target=AnyScaleFrontendService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AnyScaleFrontendService.UntagResource'
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
  },
  '/'
>
export default routes
