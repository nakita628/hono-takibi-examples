type XmlStringMaxLen19 = string
type AttachInstancesQuery = { InstanceIds?: {} | undefined; AutoScalingGroupName: {} }
type XmlStringMaxLen511 = string
type AttachLoadBalancerTargetGroupsResultType = { [x: string]: unknown }
type AttachLoadBalancerTargetGroupsType = { AutoScalingGroupName: {}; TargetGroupARNs: {} }
type XmlStringMaxLen255 = string
type AttachLoadBalancersResultType = { [x: string]: unknown }
type AttachLoadBalancersType = { AutoScalingGroupName: {}; LoadBalancerNames: {} }
type TrafficSourceIdentifier = { Identifier: {}; Type?: {} | undefined }
type AttachTrafficSourcesResultType = { [x: string]: unknown }
type AttachTrafficSourcesType = { AutoScalingGroupName: {}; TrafficSources: {} }
type BatchDeleteScheduledActionAnswer = { FailedScheduledActions?: {} | undefined }
type BatchDeleteScheduledActionType = { AutoScalingGroupName: {}; ScheduledActionNames: {} }
type ScheduledUpdateGroupActionRequest = {
  ScheduledActionName: {}
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Recurrence?: {} | undefined
  MinSize?: {} | undefined
  MaxSize?: {} | undefined
  DesiredCapacity?: {} | undefined
  TimeZone?: {} | undefined
}
type BatchPutScheduledUpdateGroupActionAnswer = {
  FailedScheduledUpdateGroupActions?: {} | undefined
}
type BatchPutScheduledUpdateGroupActionType = {
  AutoScalingGroupName: {}
  ScheduledUpdateGroupActions: {}
}
type CancelInstanceRefreshAnswer = { InstanceRefreshId?: {} | undefined }
type CancelInstanceRefreshType = { AutoScalingGroupName: {} }
type CompleteLifecycleActionAnswer = { [x: string]: unknown }
type CompleteLifecycleActionType = {
  LifecycleHookName: {}
  AutoScalingGroupName: {}
  LifecycleActionToken?: {} | undefined
  LifecycleActionResult: {}
  InstanceId?: {} | undefined
}
type XmlStringMaxLen1600 = string
type LifecycleHookSpecification = {
  LifecycleHookName: {}
  LifecycleTransition: {}
  NotificationMetadata?: {} | undefined
  HeartbeatTimeout?: {} | undefined
  DefaultResult?: {} | undefined
  NotificationTargetARN?: {} | undefined
  RoleARN?: {} | undefined
}
type Tag = {
  ResourceId?: {} | undefined
  ResourceType?: {} | undefined
  Key: {}
  Value?: {} | undefined
  PropagateAtLaunch?: {} | undefined
}
type CreateAutoScalingGroupType = {
  AutoScalingGroupName: {}
  LaunchConfigurationName?: {} | undefined
  LaunchTemplate?:
    | {
        LaunchTemplateId?: {} | undefined
        LaunchTemplateName?: {} | undefined
        Version?: {} | undefined
      }
    | undefined
  MixedInstancesPolicy?:
    | {
        LaunchTemplate?:
          | {
              LaunchTemplateSpecification?:
                | {
                    LaunchTemplateId?: {} | undefined
                    LaunchTemplateName?: {} | undefined
                    Version?: {} | undefined
                  }
                | undefined
              Overrides?: {} | undefined
            }
          | undefined
        InstancesDistribution?:
          | {
              OnDemandAllocationStrategy?: {} | undefined
              OnDemandBaseCapacity?: {} | undefined
              OnDemandPercentageAboveBaseCapacity?: {} | undefined
              SpotAllocationStrategy?: {} | undefined
              SpotInstancePools?: {} | undefined
              SpotMaxPrice?: {} | undefined
            }
          | undefined
      }
    | undefined
  InstanceId?: {} | undefined
  MinSize: {}
  MaxSize: {}
  DesiredCapacity?: {} | undefined
  DefaultCooldown?: {} | undefined
  AvailabilityZones?: {} | undefined
  LoadBalancerNames?: {} | undefined
  TargetGroupARNs?: {} | undefined
  HealthCheckType?: {} | undefined
  HealthCheckGracePeriod?: {} | undefined
  PlacementGroup?: {} | undefined
  VPCZoneIdentifier?: {} | undefined
  TerminationPolicies?: {} | undefined
  NewInstancesProtectedFromScaleIn?: {} | undefined
  CapacityRebalance?: {} | undefined
  LifecycleHookSpecificationList?: {} | undefined
  Tags?: {} | undefined
  ServiceLinkedRoleARN?: {} | undefined
  MaxInstanceLifetime?: {} | undefined
  Context?: {} | undefined
  DesiredCapacityType?: {} | undefined
  DefaultInstanceWarmup?: {} | undefined
  TrafficSources?: {} | undefined
}
type XmlString = string
type BlockDeviceMapping = {
  VirtualName?: {} | undefined
  DeviceName: {}
  Ebs?:
    | {
        SnapshotId?: {} | undefined
        VolumeSize?: {} | undefined
        VolumeType?: {} | undefined
        DeleteOnTermination?: {} | undefined
        Iops?: {} | undefined
        Encrypted?: {} | undefined
        Throughput?: {} | undefined
      }
    | undefined
  NoDevice?: {} | undefined
}
type CreateLaunchConfigurationType = {
  LaunchConfigurationName: {}
  ImageId?: {} | undefined
  KeyName?: {} | undefined
  SecurityGroups?: {} | undefined
  ClassicLinkVPCId?: {} | undefined
  ClassicLinkVPCSecurityGroups?: {} | undefined
  UserData?: {} | undefined
  InstanceId?: {} | undefined
  InstanceType?: {} | undefined
  KernelId?: {} | undefined
  RamdiskId?: {} | undefined
  BlockDeviceMappings?: {} | undefined
  InstanceMonitoring?: { Enabled?: {} | undefined } | undefined
  SpotPrice?: {} | undefined
  IamInstanceProfile?: {} | undefined
  EbsOptimized?: {} | undefined
  AssociatePublicIpAddress?: {} | undefined
  PlacementTenancy?: {} | undefined
  MetadataOptions?:
    | {
        HttpTokens?: {} | undefined
        HttpPutResponseHopLimit?: {} | undefined
        HttpEndpoint?: {} | undefined
      }
    | undefined
}
type CreateOrUpdateTagsType = { Tags: {} }
type DeleteAutoScalingGroupType = { AutoScalingGroupName: {}; ForceDelete?: {} | undefined }
type LaunchConfigurationNameType = { LaunchConfigurationName: {} }
type DeleteLifecycleHookAnswer = { [x: string]: unknown }
type DeleteLifecycleHookType = { LifecycleHookName: {}; AutoScalingGroupName: {} }
type DeleteNotificationConfigurationType = { AutoScalingGroupName: {}; TopicARN: {} }
type DeletePolicyType = { AutoScalingGroupName?: {} | undefined; PolicyName: {} }
type DeleteScheduledActionType = { AutoScalingGroupName: {}; ScheduledActionName: {} }
type DeleteTagsType = { Tags: {} }
type DeleteWarmPoolAnswer = { [x: string]: unknown }
type DeleteWarmPoolType = { AutoScalingGroupName: {}; ForceDelete?: {} | undefined }
type DescribeAccountLimitsAnswer = {
  MaxNumberOfAutoScalingGroups?: {} | undefined
  MaxNumberOfLaunchConfigurations?: {} | undefined
  NumberOfAutoScalingGroups?: {} | undefined
  NumberOfLaunchConfigurations?: {} | undefined
}
type DescribeAdjustmentTypesAnswer = { AdjustmentTypes?: {} | undefined }
type Filter = { Name?: {} | undefined; Values?: {} | undefined }
type AutoScalingGroupsType = { AutoScalingGroups: {}; NextToken?: {} | undefined }
type AutoScalingGroupNamesType = {
  AutoScalingGroupNames?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
  Filters?: {} | undefined
}
type AutoScalingInstancesType = {
  AutoScalingInstances?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAutoScalingInstancesType = {
  InstanceIds?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAutoScalingNotificationTypesAnswer = { AutoScalingNotificationTypes?: {} | undefined }
type DescribeInstanceRefreshesAnswer = {
  InstanceRefreshes?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstanceRefreshesType = {
  AutoScalingGroupName: {}
  InstanceRefreshIds?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type LaunchConfigurationsType = { LaunchConfigurations: {}; NextToken?: {} | undefined }
type LaunchConfigurationNamesType = {
  LaunchConfigurationNames?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeLifecycleHookTypesAnswer = { LifecycleHookTypes?: {} | undefined }
type AsciiStringMaxLen255 = string
type DescribeLifecycleHooksAnswer = { LifecycleHooks?: {} | undefined }
type DescribeLifecycleHooksType = { AutoScalingGroupName: {}; LifecycleHookNames?: {} | undefined }
type DescribeLoadBalancerTargetGroupsResponse = {
  LoadBalancerTargetGroups?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeLoadBalancerTargetGroupsRequest = {
  AutoScalingGroupName: {}
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeLoadBalancersResponse = { LoadBalancers?: {} | undefined; NextToken?: {} | undefined }
type DescribeLoadBalancersRequest = {
  AutoScalingGroupName: {}
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeMetricCollectionTypesAnswer = {
  Metrics?: {} | undefined
  Granularities?: {} | undefined
}
type DescribeNotificationConfigurationsAnswer = {
  NotificationConfigurations: {}
  NextToken?: {} | undefined
}
type DescribeNotificationConfigurationsType = {
  AutoScalingGroupNames?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type ResourceName = string
type XmlStringMaxLen64 = string
type PoliciesType = { ScalingPolicies?: {} | undefined; NextToken?: {} | undefined }
type DescribePoliciesType = {
  AutoScalingGroupName?: {} | undefined
  PolicyNames?: {} | undefined
  PolicyTypes?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type ActivitiesType = { Activities: {}; NextToken?: {} | undefined }
type DescribeScalingActivitiesType = {
  ActivityIds?: {} | undefined
  AutoScalingGroupName?: {} | undefined
  IncludeDeletedGroups?: {} | undefined
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type ProcessesType = { Processes?: {} | undefined }
type ScheduledActionsType = {
  ScheduledUpdateGroupActions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScheduledActionsType = {
  AutoScalingGroupName?: {} | undefined
  ScheduledActionNames?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type TagsType = { Tags?: {} | undefined; NextToken?: {} | undefined }
type DescribeTagsType = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeTerminationPolicyTypesAnswer = { TerminationPolicyTypes?: {} | undefined }
type DescribeTrafficSourcesResponse = {
  TrafficSources?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeTrafficSourcesRequest = {
  AutoScalingGroupName: {}
  TrafficSourceType?: {} | undefined
  NextToken?: {} | undefined
  MaxRecords?: {} | undefined
}
type DescribeWarmPoolAnswer = {
  WarmPoolConfiguration?:
    | {
        MaxGroupPreparedCapacity?: {} | undefined
        MinSize?: {} | undefined
        PoolState?: {} | undefined
        Status?: {} | undefined
        InstanceReusePolicy?: { ReuseOnScaleIn?: {} | undefined } | undefined
      }
    | undefined
  Instances?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWarmPoolType = {
  AutoScalingGroupName: {}
  MaxRecords?: {} | undefined
  NextToken?: {} | undefined
}
type DetachInstancesAnswer = { Activities?: {} | undefined }
type DetachInstancesQuery = {
  InstanceIds?: {} | undefined
  AutoScalingGroupName: {}
  ShouldDecrementDesiredCapacity: {}
}
type DetachLoadBalancerTargetGroupsResultType = { [x: string]: unknown }
type DetachLoadBalancerTargetGroupsType = { AutoScalingGroupName: {}; TargetGroupARNs: {} }
type DetachLoadBalancersResultType = { [x: string]: unknown }
type DetachLoadBalancersType = { AutoScalingGroupName: {}; LoadBalancerNames: {} }
type DetachTrafficSourcesResultType = { [x: string]: unknown }
type DetachTrafficSourcesType = { AutoScalingGroupName: {}; TrafficSources: {} }
type DisableMetricsCollectionQuery = { AutoScalingGroupName: {}; Metrics?: {} | undefined }
type EnableMetricsCollectionQuery = {
  AutoScalingGroupName: {}
  Metrics?: {} | undefined
  Granularity: {}
}
type EnterStandbyAnswer = { Activities?: {} | undefined }
type EnterStandbyQuery = {
  InstanceIds?: {} | undefined
  AutoScalingGroupName: {}
  ShouldDecrementDesiredCapacity: {}
}
type ExecutePolicyType = {
  AutoScalingGroupName?: {} | undefined
  PolicyName: {}
  HonorCooldown?: {} | undefined
  MetricValue?: {} | undefined
  BreachThreshold?: {} | undefined
}
type ExitStandbyAnswer = { Activities?: {} | undefined }
type ExitStandbyQuery = { InstanceIds?: {} | undefined; AutoScalingGroupName: {} }
type GetPredictiveScalingForecastAnswer = {
  LoadForecast: {}
  CapacityForecast: { Timestamps: {}; Values: {} }
  UpdateTime: {}
}
type GetPredictiveScalingForecastType = {
  AutoScalingGroupName: {}
  PolicyName: {}
  StartTime: {}
  EndTime: {}
}
type PutLifecycleHookAnswer = { [x: string]: unknown }
type PutLifecycleHookType = {
  LifecycleHookName: {}
  AutoScalingGroupName: {}
  LifecycleTransition?: {} | undefined
  RoleARN?: {} | undefined
  NotificationTargetARN?: {} | undefined
  NotificationMetadata?: {} | undefined
  HeartbeatTimeout?: {} | undefined
  DefaultResult?: {} | undefined
}
type PutNotificationConfigurationType = {
  AutoScalingGroupName: {}
  TopicARN: {}
  NotificationTypes: {}
}
type StepAdjustment = {
  MetricIntervalLowerBound?: {} | undefined
  MetricIntervalUpperBound?: {} | undefined
  ScalingAdjustment: {}
}
type PolicyARNType = { PolicyARN?: {} | undefined; Alarms?: {} | undefined }
type PutScalingPolicyType = {
  AutoScalingGroupName: {}
  PolicyName: {}
  PolicyType?: {} | undefined
  AdjustmentType?: {} | undefined
  MinAdjustmentStep?: {} | undefined
  MinAdjustmentMagnitude?: {} | undefined
  ScalingAdjustment?: {} | undefined
  Cooldown?: {} | undefined
  MetricAggregationType?: {} | undefined
  StepAdjustments?: {} | undefined
  EstimatedInstanceWarmup?: {} | undefined
  TargetTrackingConfiguration?:
    | {
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
        TargetValue: {}
        DisableScaleIn?: {} | undefined
      }
    | undefined
  Enabled?: {} | undefined
  PredictiveScalingConfiguration?:
    | {
        MetricSpecifications: {}
        Mode?: {} | undefined
        SchedulingBufferTime?: {} | undefined
        MaxCapacityBreachBehavior?: {} | undefined
        MaxCapacityBuffer?: {} | undefined
      }
    | undefined
}
type PutScheduledUpdateGroupActionType = {
  AutoScalingGroupName: {}
  ScheduledActionName: {}
  Time?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Recurrence?: {} | undefined
  MinSize?: {} | undefined
  MaxSize?: {} | undefined
  DesiredCapacity?: {} | undefined
  TimeZone?: {} | undefined
}
type PutWarmPoolAnswer = { [x: string]: unknown }
type PutWarmPoolType = {
  AutoScalingGroupName: {}
  MaxGroupPreparedCapacity?: {} | undefined
  MinSize?: {} | undefined
  PoolState?: {} | undefined
  InstanceReusePolicy?: { ReuseOnScaleIn?: {} | undefined } | undefined
}
type RecordLifecycleActionHeartbeatAnswer = { [x: string]: unknown }
type RecordLifecycleActionHeartbeatType = {
  LifecycleHookName: {}
  AutoScalingGroupName: {}
  LifecycleActionToken?: {} | undefined
  InstanceId?: {} | undefined
}
type ScalingProcessQuery = { AutoScalingGroupName: {}; ScalingProcesses?: {} | undefined }
type RollbackInstanceRefreshAnswer = { InstanceRefreshId?: {} | undefined }
type RollbackInstanceRefreshType = { AutoScalingGroupName: {} }
type SetDesiredCapacityType = {
  AutoScalingGroupName: {}
  DesiredCapacity: {}
  HonorCooldown?: {} | undefined
}
type SetInstanceHealthQuery = {
  InstanceId: {}
  HealthStatus: {}
  ShouldRespectGracePeriod?: {} | undefined
}
type SetInstanceProtectionAnswer = { [x: string]: unknown }
type SetInstanceProtectionQuery = {
  InstanceIds: {}
  AutoScalingGroupName: {}
  ProtectedFromScaleIn: {}
}
type StartInstanceRefreshAnswer = { InstanceRefreshId?: {} | undefined }
type StartInstanceRefreshType = {
  AutoScalingGroupName: {}
  Strategy?: {} | undefined
  DesiredConfiguration?:
    | {
        LaunchTemplate?:
          | {
              LaunchTemplateId?: {} | undefined
              LaunchTemplateName?: {} | undefined
              Version?: {} | undefined
            }
          | undefined
        MixedInstancesPolicy?:
          | {
              LaunchTemplate?:
                | {
                    LaunchTemplateSpecification?:
                      | {
                          LaunchTemplateId?: {} | undefined
                          LaunchTemplateName?: {} | undefined
                          Version?: {} | undefined
                        }
                      | undefined
                    Overrides?: {} | undefined
                  }
                | undefined
              InstancesDistribution?:
                | {
                    OnDemandAllocationStrategy?: {} | undefined
                    OnDemandBaseCapacity?: {} | undefined
                    OnDemandPercentageAboveBaseCapacity?: {} | undefined
                    SpotAllocationStrategy?: {} | undefined
                    SpotInstancePools?: {} | undefined
                    SpotMaxPrice?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  Preferences?:
    | {
        MinHealthyPercentage?: {} | undefined
        InstanceWarmup?: {} | undefined
        CheckpointPercentages?: {} | undefined
        CheckpointDelay?: {} | undefined
        SkipMatching?: {} | undefined
        AutoRollback?: {} | undefined
        ScaleInProtectedInstances?: {} | undefined
        StandbyInstances?: {} | undefined
        AlarmSpecification?: { Alarms?: {} | undefined } | undefined
      }
    | undefined
}
type ActivityType = {
  Activity?:
    | {
        ActivityId: {}
        AutoScalingGroupName: {}
        Description?: {} | undefined
        Cause: {}
        StartTime: {}
        EndTime?: {} | undefined
        StatusCode: {}
        StatusMessage?: {} | undefined
        Progress?: {} | undefined
        Details?: {} | undefined
        AutoScalingGroupState?: {} | undefined
        AutoScalingGroupARN?: {} | undefined
      }
    | undefined
}
type TerminateInstanceInAutoScalingGroupType = {
  InstanceId: {}
  ShouldDecrementDesiredCapacity: {}
}
type UpdateAutoScalingGroupType = {
  AutoScalingGroupName: {}
  LaunchConfigurationName?: {} | undefined
  LaunchTemplate?:
    | {
        LaunchTemplateId?: {} | undefined
        LaunchTemplateName?: {} | undefined
        Version?: {} | undefined
      }
    | undefined
  MixedInstancesPolicy?:
    | {
        LaunchTemplate?:
          | {
              LaunchTemplateSpecification?:
                | {
                    LaunchTemplateId?: {} | undefined
                    LaunchTemplateName?: {} | undefined
                    Version?: {} | undefined
                  }
                | undefined
              Overrides?: {} | undefined
            }
          | undefined
        InstancesDistribution?:
          | {
              OnDemandAllocationStrategy?: {} | undefined
              OnDemandBaseCapacity?: {} | undefined
              OnDemandPercentageAboveBaseCapacity?: {} | undefined
              SpotAllocationStrategy?: {} | undefined
              SpotInstancePools?: {} | undefined
              SpotMaxPrice?: {} | undefined
            }
          | undefined
      }
    | undefined
  MinSize?: {} | undefined
  MaxSize?: {} | undefined
  DesiredCapacity?: {} | undefined
  DefaultCooldown?: {} | undefined
  AvailabilityZones?: {} | undefined
  HealthCheckType?: {} | undefined
  HealthCheckGracePeriod?: {} | undefined
  PlacementGroup?: {} | undefined
  VPCZoneIdentifier?: {} | undefined
  TerminationPolicies?: {} | undefined
  NewInstancesProtectedFromScaleIn?: {} | undefined
  ServiceLinkedRoleARN?: {} | undefined
  MaxInstanceLifetime?: {} | undefined
  CapacityRebalance?: {} | undefined
  Context?: {} | undefined
  DesiredCapacityType?: {} | undefined
  DefaultInstanceWarmup?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AttachInstances': {
      $get: {
        input: {
          query: {
            InstanceIds?: XmlStringMaxLen19[] | undefined
            AutoScalingGroupName: string
            Action: 'AttachInstances'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'AttachInstances'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachInstancesQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AttachLoadBalancerTargetGroups': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TargetGroupARNs: XmlStringMaxLen511[]
            Action: 'AttachLoadBalancerTargetGroups'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AttachLoadBalancerTargetGroupsResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AttachLoadBalancerTargetGroups'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachLoadBalancerTargetGroupsType }
        output: AttachLoadBalancerTargetGroupsResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AttachLoadBalancers': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            LoadBalancerNames: XmlStringMaxLen255[]
            Action: 'AttachLoadBalancers'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AttachLoadBalancersResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AttachLoadBalancers'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachLoadBalancersType }
        output: AttachLoadBalancersResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=AttachTrafficSources': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TrafficSources: TrafficSourceIdentifier[]
            Action: 'AttachTrafficSources'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AttachTrafficSourcesResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'AttachTrafficSources'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachTrafficSourcesType }
        output: AttachTrafficSourcesResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchDeleteScheduledAction': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScheduledActionNames: XmlStringMaxLen255[]
            Action: 'BatchDeleteScheduledAction'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BatchDeleteScheduledActionAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchDeleteScheduledAction'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteScheduledActionType }
        output: BatchDeleteScheduledActionAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchPutScheduledUpdateGroupAction': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[]
            Action: 'BatchPutScheduledUpdateGroupAction'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BatchPutScheduledUpdateGroupActionAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'BatchPutScheduledUpdateGroupAction'; Version: '2011-01-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchPutScheduledUpdateGroupActionType }
        output: BatchPutScheduledUpdateGroupActionAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CancelInstanceRefresh': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            Action: 'CancelInstanceRefresh'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CancelInstanceRefresh'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelInstanceRefreshType }
        output: CancelInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CompleteLifecycleAction': {
      $get: {
        input: {
          query: {
            LifecycleHookName: string
            AutoScalingGroupName: string
            LifecycleActionToken?: string | undefined
            LifecycleActionResult: string
            InstanceId?: string | undefined
            Action: 'CompleteLifecycleAction'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CompleteLifecycleActionAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CompleteLifecycleAction'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CompleteLifecycleActionType }
        output: CompleteLifecycleActionAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateAutoScalingGroup': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            LaunchConfigurationName?: string | undefined
            LaunchTemplate?:
              | {
                  LaunchTemplateId?: {} | undefined
                  LaunchTemplateName?: {} | undefined
                  Version?: {} | undefined
                }
              | undefined
            MixedInstancesPolicy?:
              | {
                  LaunchTemplate?:
                    | {
                        LaunchTemplateSpecification?:
                          | {
                              LaunchTemplateId?: {} | undefined
                              LaunchTemplateName?: {} | undefined
                              Version?: {} | undefined
                            }
                          | undefined
                        Overrides?: {} | undefined
                      }
                    | undefined
                  InstancesDistribution?:
                    | {
                        OnDemandAllocationStrategy?: {} | undefined
                        OnDemandBaseCapacity?: {} | undefined
                        OnDemandPercentageAboveBaseCapacity?: {} | undefined
                        SpotAllocationStrategy?: {} | undefined
                        SpotInstancePools?: {} | undefined
                        SpotMaxPrice?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            InstanceId?: string | undefined
            MinSize: number
            MaxSize: number
            DesiredCapacity?: number | undefined
            DefaultCooldown?: number | undefined
            AvailabilityZones?: XmlStringMaxLen255[] | undefined
            LoadBalancerNames?: XmlStringMaxLen255[] | undefined
            TargetGroupARNs?: XmlStringMaxLen511[] | undefined
            HealthCheckType?: string | undefined
            HealthCheckGracePeriod?: number | undefined
            PlacementGroup?: string | undefined
            VPCZoneIdentifier?: string | undefined
            TerminationPolicies?: XmlStringMaxLen1600[] | undefined
            NewInstancesProtectedFromScaleIn?: boolean | undefined
            CapacityRebalance?: boolean | undefined
            LifecycleHookSpecificationList?: LifecycleHookSpecification[] | undefined
            Tags?: Tag[] | undefined
            ServiceLinkedRoleARN?: string | undefined
            MaxInstanceLifetime?: number | undefined
            Context?: string | undefined
            DesiredCapacityType?: string | undefined
            DefaultInstanceWarmup?: number | undefined
            TrafficSources?: TrafficSourceIdentifier[] | undefined
            Action: 'CreateAutoScalingGroup'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateAutoScalingGroup'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAutoScalingGroupType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CreateLaunchConfiguration': {
      $get: {
        input: {
          query: {
            LaunchConfigurationName: string
            ImageId?: string | undefined
            KeyName?: string | undefined
            SecurityGroups?: XmlString[] | undefined
            ClassicLinkVPCId?: string | undefined
            ClassicLinkVPCSecurityGroups?: XmlStringMaxLen255[] | undefined
            UserData?: string | undefined
            InstanceId?: string | undefined
            InstanceType?: string | undefined
            KernelId?: string | undefined
            RamdiskId?: string | undefined
            BlockDeviceMappings?: BlockDeviceMapping[] | undefined
            InstanceMonitoring?: { Enabled?: {} | undefined } | undefined
            SpotPrice?: string | undefined
            IamInstanceProfile?: string | undefined
            EbsOptimized?: boolean | undefined
            AssociatePublicIpAddress?: boolean | undefined
            PlacementTenancy?: string | undefined
            MetadataOptions?:
              | {
                  HttpTokens?: {} | undefined
                  HttpPutResponseHopLimit?: {} | undefined
                  HttpEndpoint?: {} | undefined
                }
              | undefined
            Action: 'CreateLaunchConfiguration'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateLaunchConfiguration'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLaunchConfigurationType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CreateOrUpdateTags': {
      $get: {
        input: { query: { Tags: Tag[]; Action: 'CreateOrUpdateTags'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateOrUpdateTags'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOrUpdateTagsType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAutoScalingGroup': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ForceDelete?: boolean | undefined
            Action: 'DeleteAutoScalingGroup'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteAutoScalingGroup'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAutoScalingGroupType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteLaunchConfiguration': {
      $get: {
        input: {
          query: {
            LaunchConfigurationName: string
            Action: 'DeleteLaunchConfiguration'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteLaunchConfiguration'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LaunchConfigurationNameType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteLifecycleHook': {
      $get: {
        input: {
          query: {
            LifecycleHookName: string
            AutoScalingGroupName: string
            Action: 'DeleteLifecycleHook'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteLifecycleHookAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteLifecycleHook'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLifecycleHookType }
        output: DeleteLifecycleHookAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteNotificationConfiguration': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TopicARN: string
            Action: 'DeleteNotificationConfiguration'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteNotificationConfiguration'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNotificationConfigurationType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeletePolicy': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName?: string | undefined
            PolicyName: string
            Action: 'DeletePolicy'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeletePolicy'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePolicyType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteScheduledAction': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScheduledActionName: string
            Action: 'DeleteScheduledAction'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteScheduledAction'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteScheduledActionType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteTags': {
      $get: {
        input: { query: { Tags: Tag[]; Action: 'DeleteTags'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteTags'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTagsType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteWarmPool': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ForceDelete?: boolean | undefined
            Action: 'DeleteWarmPool'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteWarmPool'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWarmPoolType }
        output: DeleteWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAccountLimits': {
      $get: {
        input: { query: { Action: 'DescribeAccountLimits'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAccountLimitsAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAccountLimits'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAccountLimitsAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAdjustmentTypes': {
      $get: {
        input: { query: { Action: 'DescribeAdjustmentTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAdjustmentTypesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeAdjustmentTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAdjustmentTypesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAutoScalingGroups': {
      $get: {
        input: {
          query: {
            AutoScalingGroupNames?: XmlStringMaxLen255[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Filters?: Filter[] | undefined
            Action: 'DescribeAutoScalingGroups'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AutoScalingGroupsType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeAutoScalingGroups'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AutoScalingGroupNamesType }
        output: AutoScalingGroupsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAutoScalingInstances': {
      $get: {
        input: {
          query: {
            InstanceIds?: XmlStringMaxLen19[] | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeAutoScalingInstances'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: AutoScalingInstancesType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeAutoScalingInstances'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAutoScalingInstancesType }
        output: AutoScalingInstancesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAutoScalingNotificationTypes': {
      $get: {
        input: {
          query: { Action: 'DescribeAutoScalingNotificationTypes'; Version: '2011-01-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAutoScalingNotificationTypesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'DescribeAutoScalingNotificationTypes'; Version: '2011-01-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAutoScalingNotificationTypesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeInstanceRefreshes': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            InstanceRefreshIds?: XmlStringMaxLen255[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeInstanceRefreshes'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeInstanceRefreshesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeInstanceRefreshes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstanceRefreshesType }
        output: DescribeInstanceRefreshesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLaunchConfigurations': {
      $get: {
        input: {
          query: {
            LaunchConfigurationNames?: XmlStringMaxLen255[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeLaunchConfigurations'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LaunchConfigurationsType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeLaunchConfigurations'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LaunchConfigurationNamesType }
        output: LaunchConfigurationsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLifecycleHookTypes': {
      $get: {
        input: { query: { Action: 'DescribeLifecycleHookTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLifecycleHookTypesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeLifecycleHookTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLifecycleHookTypesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLifecycleHooks': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            LifecycleHookNames?: AsciiStringMaxLen255[] | undefined
            Action: 'DescribeLifecycleHooks'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLifecycleHooksAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeLifecycleHooks'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLifecycleHooksType }
        output: DescribeLifecycleHooksAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLoadBalancerTargetGroups': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeLoadBalancerTargetGroups'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLoadBalancerTargetGroupsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeLoadBalancerTargetGroups'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLoadBalancerTargetGroupsRequest }
        output: DescribeLoadBalancerTargetGroupsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeLoadBalancers': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeLoadBalancers'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLoadBalancersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeLoadBalancers'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLoadBalancersRequest }
        output: DescribeLoadBalancersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeMetricCollectionTypes': {
      $get: {
        input: { query: { Action: 'DescribeMetricCollectionTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMetricCollectionTypesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeMetricCollectionTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMetricCollectionTypesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeNotificationConfigurations': {
      $get: {
        input: {
          query: {
            AutoScalingGroupNames?: XmlStringMaxLen255[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeNotificationConfigurations'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeNotificationConfigurationsAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeNotificationConfigurations'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNotificationConfigurationsType }
        output: DescribeNotificationConfigurationsAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribePolicies': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName?: string | undefined
            PolicyNames?: ResourceName[] | undefined
            PolicyTypes?: XmlStringMaxLen64[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribePolicies'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PoliciesType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribePolicies'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePoliciesType }
        output: PoliciesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeScalingActivities': {
      $get: {
        input: {
          query: {
            ActivityIds?: XmlString[] | undefined
            AutoScalingGroupName?: string | undefined
            IncludeDeletedGroups?: boolean | undefined
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeScalingActivities'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ActivitiesType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeScalingActivities'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScalingActivitiesType }
        output: ActivitiesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeScalingProcessTypes': {
      $get: {
        input: { query: { Action: 'DescribeScalingProcessTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ProcessesType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeScalingProcessTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ProcessesType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeScheduledActions': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName?: string | undefined
            ScheduledActionNames?: XmlStringMaxLen255[] | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeScheduledActions'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ScheduledActionsType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeScheduledActions'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeScheduledActionsType }
        output: ScheduledActionsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTags': {
      $get: {
        input: {
          query: {
            Filters?: Filter[] | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeTags'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: TagsType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeTags'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTagsType }
        output: TagsType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTerminationPolicyTypes': {
      $get: {
        input: { query: { Action: 'DescribeTerminationPolicyTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeTerminationPolicyTypesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeTerminationPolicyTypes'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeTerminationPolicyTypesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTrafficSources': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TrafficSourceType?: string | undefined
            NextToken?: string | undefined
            MaxRecords?: number | undefined
            Action: 'DescribeTrafficSources'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeTrafficSourcesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeTrafficSources'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrafficSourcesRequest }
        output: DescribeTrafficSourcesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeWarmPool': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            MaxRecords?: number | undefined
            NextToken?: string | undefined
            Action: 'DescribeWarmPool'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxRecords?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeWarmPool'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWarmPoolType }
        output: DescribeWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetachInstances': {
      $get: {
        input: {
          query: {
            InstanceIds?: XmlStringMaxLen19[] | undefined
            AutoScalingGroupName: string
            ShouldDecrementDesiredCapacity: boolean
            Action: 'DetachInstances'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DetachInstancesAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetachInstances'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachInstancesQuery }
        output: DetachInstancesAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetachLoadBalancerTargetGroups': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TargetGroupARNs: XmlStringMaxLen511[]
            Action: 'DetachLoadBalancerTargetGroups'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DetachLoadBalancerTargetGroupsResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetachLoadBalancerTargetGroups'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachLoadBalancerTargetGroupsType }
        output: DetachLoadBalancerTargetGroupsResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetachLoadBalancers': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            LoadBalancerNames: XmlStringMaxLen255[]
            Action: 'DetachLoadBalancers'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DetachLoadBalancersResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetachLoadBalancers'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachLoadBalancersType }
        output: DetachLoadBalancersResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetachTrafficSources': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TrafficSources: TrafficSourceIdentifier[]
            Action: 'DetachTrafficSources'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DetachTrafficSourcesResultType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetachTrafficSources'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachTrafficSourcesType }
        output: DetachTrafficSourcesResultType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DisableMetricsCollection': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            Metrics?: XmlStringMaxLen255[] | undefined
            Action: 'DisableMetricsCollection'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'DisableMetricsCollection'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableMetricsCollectionQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=EnableMetricsCollection': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            Metrics?: XmlStringMaxLen255[] | undefined
            Granularity: string
            Action: 'EnableMetricsCollection'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'EnableMetricsCollection'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableMetricsCollectionQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=EnterStandby': {
      $get: {
        input: {
          query: {
            InstanceIds?: XmlStringMaxLen19[] | undefined
            AutoScalingGroupName: string
            ShouldDecrementDesiredCapacity: boolean
            Action: 'EnterStandby'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: EnterStandbyAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'EnterStandby'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnterStandbyQuery }
        output: EnterStandbyAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ExecutePolicy': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName?: string | undefined
            PolicyName: string
            HonorCooldown?: boolean | undefined
            MetricValue?: number | undefined
            BreachThreshold?: number | undefined
            Action: 'ExecutePolicy'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'ExecutePolicy'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecutePolicyType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=ExitStandby': {
      $get: {
        input: {
          query: {
            InstanceIds?: XmlStringMaxLen19[] | undefined
            AutoScalingGroupName: string
            Action: 'ExitStandby'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExitStandbyAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ExitStandby'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExitStandbyQuery }
        output: ExitStandbyAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetPredictiveScalingForecast': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            PolicyName: string
            StartTime: string
            EndTime: string
            Action: 'GetPredictiveScalingForecast'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetPredictiveScalingForecastAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetPredictiveScalingForecast'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPredictiveScalingForecastType }
        output: GetPredictiveScalingForecastAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutLifecycleHook': {
      $get: {
        input: {
          query: {
            LifecycleHookName: string
            AutoScalingGroupName: string
            LifecycleTransition?: string | undefined
            RoleARN?: string | undefined
            NotificationTargetARN?: string | undefined
            NotificationMetadata?: string | undefined
            HeartbeatTimeout?: number | undefined
            DefaultResult?: string | undefined
            Action: 'PutLifecycleHook'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PutLifecycleHookAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutLifecycleHook'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutLifecycleHookType }
        output: PutLifecycleHookAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutNotificationConfiguration': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            TopicARN: string
            NotificationTypes: XmlStringMaxLen255[]
            Action: 'PutNotificationConfiguration'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutNotificationConfiguration'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutNotificationConfigurationType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutScalingPolicy': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            PolicyName: string
            PolicyType?: string | undefined
            AdjustmentType?: string | undefined
            MinAdjustmentStep?: number | undefined
            MinAdjustmentMagnitude?: number | undefined
            ScalingAdjustment?: number | undefined
            Cooldown?: number | undefined
            MetricAggregationType?: string | undefined
            StepAdjustments?: StepAdjustment[] | undefined
            EstimatedInstanceWarmup?: number | undefined
            TargetTrackingConfiguration?:
              | {
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
                  TargetValue: {}
                  DisableScaleIn?: {} | undefined
                }
              | undefined
            Enabled?: boolean | undefined
            PredictiveScalingConfiguration?:
              | {
                  MetricSpecifications: {}
                  Mode?: {} | undefined
                  SchedulingBufferTime?: {} | undefined
                  MaxCapacityBreachBehavior?: {} | undefined
                  MaxCapacityBuffer?: {} | undefined
                }
              | undefined
            Action: 'PutScalingPolicy'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PolicyARNType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutScalingPolicy'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutScalingPolicyType }
        output: PolicyARNType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutScheduledUpdateGroupAction': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScheduledActionName: string
            Time?: string | undefined
            StartTime?: string | undefined
            EndTime?: string | undefined
            Recurrence?: string | undefined
            MinSize?: number | undefined
            MaxSize?: number | undefined
            DesiredCapacity?: number | undefined
            TimeZone?: string | undefined
            Action: 'PutScheduledUpdateGroupAction'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutScheduledUpdateGroupAction'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutScheduledUpdateGroupActionType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutWarmPool': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            MaxGroupPreparedCapacity?: number | undefined
            MinSize?: number | undefined
            PoolState?: 'Stopped' | 'Running' | 'Hibernated' | undefined
            InstanceReusePolicy?: { ReuseOnScaleIn?: {} | undefined } | undefined
            Action: 'PutWarmPool'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PutWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PutWarmPool'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutWarmPoolType }
        output: PutWarmPoolAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RecordLifecycleActionHeartbeat': {
      $get: {
        input: {
          query: {
            LifecycleHookName: string
            AutoScalingGroupName: string
            LifecycleActionToken?: string | undefined
            InstanceId?: string | undefined
            Action: 'RecordLifecycleActionHeartbeat'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RecordLifecycleActionHeartbeatAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RecordLifecycleActionHeartbeat'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RecordLifecycleActionHeartbeatType }
        output: RecordLifecycleActionHeartbeatAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResumeProcesses': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScalingProcesses?: XmlStringMaxLen255[] | undefined
            Action: 'ResumeProcesses'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResumeProcesses'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ScalingProcessQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RollbackInstanceRefresh': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            Action: 'RollbackInstanceRefresh'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: RollbackInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RollbackInstanceRefresh'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RollbackInstanceRefreshType }
        output: RollbackInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetDesiredCapacity': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            DesiredCapacity: number
            HonorCooldown?: boolean | undefined
            Action: 'SetDesiredCapacity'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetDesiredCapacity'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetDesiredCapacityType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SetInstanceHealth': {
      $get: {
        input: {
          query: {
            InstanceId: string
            HealthStatus: string
            ShouldRespectGracePeriod?: boolean | undefined
            Action: 'SetInstanceHealth'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetInstanceHealth'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetInstanceHealthQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SetInstanceProtection': {
      $get: {
        input: {
          query: {
            InstanceIds: XmlStringMaxLen19[]
            AutoScalingGroupName: string
            ProtectedFromScaleIn: boolean
            Action: 'SetInstanceProtection'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SetInstanceProtectionAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetInstanceProtection'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetInstanceProtectionQuery }
        output: SetInstanceProtectionAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=StartInstanceRefresh': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            Strategy?: 'Rolling' | undefined
            DesiredConfiguration?:
              | {
                  LaunchTemplate?:
                    | {
                        LaunchTemplateId?: {} | undefined
                        LaunchTemplateName?: {} | undefined
                        Version?: {} | undefined
                      }
                    | undefined
                  MixedInstancesPolicy?:
                    | {
                        LaunchTemplate?:
                          | {
                              LaunchTemplateSpecification?:
                                | {
                                    LaunchTemplateId?: {} | undefined
                                    LaunchTemplateName?: {} | undefined
                                    Version?: {} | undefined
                                  }
                                | undefined
                              Overrides?: {} | undefined
                            }
                          | undefined
                        InstancesDistribution?:
                          | {
                              OnDemandAllocationStrategy?: {} | undefined
                              OnDemandBaseCapacity?: {} | undefined
                              OnDemandPercentageAboveBaseCapacity?: {} | undefined
                              SpotAllocationStrategy?: {} | undefined
                              SpotInstancePools?: {} | undefined
                              SpotMaxPrice?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            Preferences?:
              | {
                  MinHealthyPercentage?: {} | undefined
                  InstanceWarmup?: {} | undefined
                  CheckpointPercentages?: {} | undefined
                  CheckpointDelay?: {} | undefined
                  SkipMatching?: {} | undefined
                  AutoRollback?: {} | undefined
                  ScaleInProtectedInstances?: {} | undefined
                  StandbyInstances?: {} | undefined
                  AlarmSpecification?: { Alarms?: {} | undefined } | undefined
                }
              | undefined
            Action: 'StartInstanceRefresh'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: StartInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StartInstanceRefresh'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartInstanceRefreshType }
        output: StartInstanceRefreshAnswer
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SuspendProcesses': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            ScalingProcesses?: XmlStringMaxLen255[] | undefined
            Action: 'SuspendProcesses'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'SuspendProcesses'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ScalingProcessQuery }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TerminateInstanceInAutoScalingGroup': {
      $get: {
        input: {
          query: {
            InstanceId: string
            ShouldDecrementDesiredCapacity: boolean
            Action: 'TerminateInstanceInAutoScalingGroup'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ActivityType
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'TerminateInstanceInAutoScalingGroup'; Version: '2011-01-01' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateInstanceInAutoScalingGroupType }
        output: ActivityType
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateAutoScalingGroup': {
      $get: {
        input: {
          query: {
            AutoScalingGroupName: string
            LaunchConfigurationName?: string | undefined
            LaunchTemplate?:
              | {
                  LaunchTemplateId?: {} | undefined
                  LaunchTemplateName?: {} | undefined
                  Version?: {} | undefined
                }
              | undefined
            MixedInstancesPolicy?:
              | {
                  LaunchTemplate?:
                    | {
                        LaunchTemplateSpecification?:
                          | {
                              LaunchTemplateId?: {} | undefined
                              LaunchTemplateName?: {} | undefined
                              Version?: {} | undefined
                            }
                          | undefined
                        Overrides?: {} | undefined
                      }
                    | undefined
                  InstancesDistribution?:
                    | {
                        OnDemandAllocationStrategy?: {} | undefined
                        OnDemandBaseCapacity?: {} | undefined
                        OnDemandPercentageAboveBaseCapacity?: {} | undefined
                        SpotAllocationStrategy?: {} | undefined
                        SpotInstancePools?: {} | undefined
                        SpotMaxPrice?: {} | undefined
                      }
                    | undefined
                }
              | undefined
            MinSize?: number | undefined
            MaxSize?: number | undefined
            DesiredCapacity?: number | undefined
            DefaultCooldown?: number | undefined
            AvailabilityZones?: XmlStringMaxLen255[] | undefined
            HealthCheckType?: string | undefined
            HealthCheckGracePeriod?: number | undefined
            PlacementGroup?: string | undefined
            VPCZoneIdentifier?: string | undefined
            TerminationPolicies?: XmlStringMaxLen1600[] | undefined
            NewInstancesProtectedFromScaleIn?: boolean | undefined
            ServiceLinkedRoleARN?: string | undefined
            MaxInstanceLifetime?: number | undefined
            CapacityRebalance?: boolean | undefined
            Context?: string | undefined
            DesiredCapacityType?: string | undefined
            DefaultInstanceWarmup?: number | undefined
            Action: 'UpdateAutoScalingGroup'
            Version: '2011-01-01'
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateAutoScalingGroup'; Version: '2011-01-01' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAutoScalingGroupType }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
