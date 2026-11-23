type AddInstanceFleetInput = {
  ClusterId: {}
  InstanceFleet: {
    Name?: {} | undefined
    InstanceFleetType: {}
    TargetOnDemandCapacity?: {} | undefined
    TargetSpotCapacity?: {} | undefined
    InstanceTypeConfigs?: {} | undefined
    LaunchSpecifications?:
      | {
          SpotSpecification?:
            | {
                TimeoutDurationMinutes: {}
                TimeoutAction: {}
                BlockDurationMinutes?: {} | undefined
                AllocationStrategy?: {} | undefined
              }
            | undefined
          OnDemandSpecification?:
            | {
                AllocationStrategy: {}
                CapacityReservationOptions?:
                  | {
                      UsageStrategy?: {} | undefined
                      CapacityReservationPreference?: {} | undefined
                      CapacityReservationResourceGroupArn?: {} | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    ResizeSpecifications?:
      | {
          SpotResizeSpecification?: { TimeoutDurationMinutes: {} } | undefined
          OnDemandResizeSpecification?: { TimeoutDurationMinutes: {} } | undefined
        }
      | undefined
  }
}
type AddInstanceFleetOutput = {
  ClusterId?: {} | undefined
  InstanceFleetId?: {} | undefined
  ClusterArn?: {} | undefined
}
type AddInstanceGroupsInput = { InstanceGroups: {}; JobFlowId: {} }
type AddInstanceGroupsOutput = {
  JobFlowId?: {} | undefined
  InstanceGroupIds?: {} | undefined
  ClusterArn?: {} | undefined
}
type AddJobFlowStepsInput = { JobFlowId: {}; Steps: {}; ExecutionRoleArn?: {} | undefined }
type AddJobFlowStepsOutput = { StepIds?: {} | undefined }
type AddTagsInput = { ResourceId: {}; Tags: {} }
type AddTagsOutput = { [x: string]: unknown }
type CancelStepsInput = { ClusterId: {}; StepIds: {}; StepCancellationOption?: {} | undefined }
type CancelStepsOutput = { CancelStepsInfoList?: {} | undefined }
type CreateSecurityConfigurationInput = { Name: {}; SecurityConfiguration: {} }
type CreateSecurityConfigurationOutput = { Name: {}; CreationDateTime: {} }
type CreateStudioInput = {
  Name: {}
  Description?: {} | undefined
  AuthMode: {}
  VpcId: {}
  SubnetIds: {}
  ServiceRole: {}
  UserRole?: {} | undefined
  WorkspaceSecurityGroupId: {}
  EngineSecurityGroupId: {}
  DefaultS3Location: {}
  IdpAuthUrl?: {} | undefined
  IdpRelayStateParameterName?: {} | undefined
  Tags?: {} | undefined
}
type CreateStudioOutput = { StudioId?: {} | undefined; Url?: {} | undefined }
type CreateStudioSessionMappingInput = {
  StudioId: {}
  IdentityId?: {} | undefined
  IdentityName?: {} | undefined
  IdentityType: {}
  SessionPolicyArn: {}
}
type DeleteSecurityConfigurationInput = { Name: {} }
type DeleteSecurityConfigurationOutput = { [x: string]: unknown }
type DeleteStudioInput = { StudioId: {} }
type DeleteStudioSessionMappingInput = {
  StudioId: {}
  IdentityId?: {} | undefined
  IdentityName?: {} | undefined
  IdentityType: {}
}
type DescribeClusterInput = { ClusterId: {} }
type DescribeClusterOutput = {
  Cluster?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Status?:
          | {
              State?: {} | undefined
              StateChangeReason?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
              Timeline?:
                | {
                    CreationDateTime?: {} | undefined
                    ReadyDateTime?: {} | undefined
                    EndDateTime?: {} | undefined
                  }
                | undefined
              ErrorDetails?: {} | undefined
            }
          | undefined
        Ec2InstanceAttributes?:
          | {
              Ec2KeyName?: {} | undefined
              Ec2SubnetId?: {} | undefined
              RequestedEc2SubnetIds?: {} | undefined
              Ec2AvailabilityZone?: {} | undefined
              RequestedEc2AvailabilityZones?: {} | undefined
              IamInstanceProfile?: {} | undefined
              EmrManagedMasterSecurityGroup?: {} | undefined
              EmrManagedSlaveSecurityGroup?: {} | undefined
              ServiceAccessSecurityGroup?: {} | undefined
              AdditionalMasterSecurityGroups?: {} | undefined
              AdditionalSlaveSecurityGroups?: {} | undefined
            }
          | undefined
        InstanceCollectionType?: {} | undefined
        LogUri?: {} | undefined
        LogEncryptionKmsKeyId?: {} | undefined
        RequestedAmiVersion?: {} | undefined
        RunningAmiVersion?: {} | undefined
        ReleaseLabel?: {} | undefined
        AutoTerminate?: {} | undefined
        TerminationProtected?: {} | undefined
        VisibleToAllUsers?: {} | undefined
        Applications?: {} | undefined
        Tags?: {} | undefined
        ServiceRole?: {} | undefined
        NormalizedInstanceHours?: {} | undefined
        MasterPublicDnsName?: {} | undefined
        Configurations?: {} | undefined
        SecurityConfiguration?: {} | undefined
        AutoScalingRole?: {} | undefined
        ScaleDownBehavior?: {} | undefined
        CustomAmiId?: {} | undefined
        EbsRootVolumeSize?: {} | undefined
        RepoUpgradeOnBoot?: {} | undefined
        KerberosAttributes?:
          | {
              Realm: {}
              KdcAdminPassword: {}
              CrossRealmTrustPrincipalPassword?: {} | undefined
              ADDomainJoinUser?: {} | undefined
              ADDomainJoinPassword?: {} | undefined
            }
          | undefined
        ClusterArn?: {} | undefined
        OutpostArn?: {} | undefined
        StepConcurrencyLevel?: {} | undefined
        PlacementGroups?: {} | undefined
        OSReleaseLabel?: {} | undefined
      }
    | undefined
}
type DescribeJobFlowsInput = {
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  JobFlowIds?: {} | undefined
  JobFlowStates?: {} | undefined
}
type DescribeJobFlowsOutput = { JobFlows?: {} | undefined }
type DescribeNotebookExecutionInput = { NotebookExecutionId: {} }
type DescribeNotebookExecutionOutput = {
  NotebookExecution?:
    | {
        NotebookExecutionId?: {} | undefined
        EditorId?: {} | undefined
        ExecutionEngine?:
          | { Id: {}; Type?: {} | undefined; MasterInstanceSecurityGroupId?: {} | undefined }
          | undefined
        NotebookExecutionName?: {} | undefined
        NotebookParams?: {} | undefined
        Status?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        Arn?: {} | undefined
        OutputNotebookURI?: {} | undefined
        LastStateChangeReason?: {} | undefined
        NotebookInstanceSecurityGroupId?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DescribeReleaseLabelInput = {
  ReleaseLabel?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeReleaseLabelOutput = {
  ReleaseLabel?: {} | undefined
  Applications?: {} | undefined
  NextToken?: {} | undefined
  AvailableOSReleases?: {} | undefined
}
type DescribeSecurityConfigurationInput = { Name: {} }
type DescribeSecurityConfigurationOutput = {
  Name?: {} | undefined
  SecurityConfiguration?: {} | undefined
  CreationDateTime?: {} | undefined
}
type DescribeStepInput = { ClusterId: {}; StepId: {} }
type DescribeStepOutput = {
  Step?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Config?:
          | {
              Jar?: {} | undefined
              Properties?: {} | undefined
              MainClass?: {} | undefined
              Args?: {} | undefined
            }
          | undefined
        ActionOnFailure?: {} | undefined
        Status?:
          | {
              State?: {} | undefined
              StateChangeReason?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
              FailureDetails?:
                | { Reason?: {} | undefined; Message?: {} | undefined; LogFile?: {} | undefined }
                | undefined
              Timeline?:
                | {
                    CreationDateTime?: {} | undefined
                    StartDateTime?: {} | undefined
                    EndDateTime?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ExecutionRoleArn?: {} | undefined
      }
    | undefined
}
type DescribeStudioInput = { StudioId: {} }
type DescribeStudioOutput = {
  Studio?:
    | {
        StudioId?: {} | undefined
        StudioArn?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        AuthMode?: {} | undefined
        VpcId?: {} | undefined
        SubnetIds?: {} | undefined
        ServiceRole?: {} | undefined
        UserRole?: {} | undefined
        WorkspaceSecurityGroupId?: {} | undefined
        EngineSecurityGroupId?: {} | undefined
        Url?: {} | undefined
        CreationTime?: {} | undefined
        DefaultS3Location?: {} | undefined
        IdpAuthUrl?: {} | undefined
        IdpRelayStateParameterName?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetAutoTerminationPolicyInput = { ClusterId: {} }
type GetAutoTerminationPolicyOutput = {
  AutoTerminationPolicy?: { IdleTimeout?: {} | undefined } | undefined
}
type GetBlockPublicAccessConfigurationInput = { [x: string]: unknown }
type GetBlockPublicAccessConfigurationOutput = {
  BlockPublicAccessConfiguration: {
    BlockPublicSecurityGroupRules: {}
    PermittedPublicSecurityGroupRuleRanges?: {} | undefined
  }
  BlockPublicAccessConfigurationMetadata: { CreationDateTime: {}; CreatedByArn: {} }
}
type GetClusterSessionCredentialsInput = { ClusterId: {}; ExecutionRoleArn: {} }
type GetClusterSessionCredentialsOutput = {
  Credentials?:
    | { UsernamePassword?: { Username?: {} | undefined; Password?: {} | undefined } | undefined }
    | undefined
  ExpiresAt?: {} | undefined
}
type GetManagedScalingPolicyInput = { ClusterId: {} }
type GetManagedScalingPolicyOutput = {
  ManagedScalingPolicy?:
    | {
        ComputeLimits?:
          | {
              UnitType: {}
              MinimumCapacityUnits: {}
              MaximumCapacityUnits: {}
              MaximumOnDemandCapacityUnits?: {} | undefined
              MaximumCoreCapacityUnits?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetStudioSessionMappingInput = {
  StudioId: {}
  IdentityId?: {} | undefined
  IdentityName?: {} | undefined
  IdentityType: {}
}
type GetStudioSessionMappingOutput = {
  SessionMapping?:
    | {
        StudioId?: {} | undefined
        IdentityId?: {} | undefined
        IdentityName?: {} | undefined
        IdentityType?: {} | undefined
        SessionPolicyArn?: {} | undefined
        CreationTime?: {} | undefined
        LastModifiedTime?: {} | undefined
      }
    | undefined
}
type ListBootstrapActionsInput = { ClusterId: {}; Marker?: {} | undefined }
type ListBootstrapActionsOutput = { BootstrapActions?: {} | undefined; Marker?: {} | undefined }
type ListClustersInput = {
  CreatedAfter?: {} | undefined
  CreatedBefore?: {} | undefined
  ClusterStates?: {} | undefined
  Marker?: {} | undefined
}
type ListClustersOutput = { Clusters?: {} | undefined; Marker?: {} | undefined }
type ListInstanceFleetsInput = { ClusterId: {}; Marker?: {} | undefined }
type ListInstanceFleetsOutput = { InstanceFleets?: {} | undefined; Marker?: {} | undefined }
type ListInstanceGroupsInput = { ClusterId: {}; Marker?: {} | undefined }
type ListInstanceGroupsOutput = { InstanceGroups?: {} | undefined; Marker?: {} | undefined }
type ListInstancesInput = {
  ClusterId: {}
  InstanceGroupId?: {} | undefined
  InstanceGroupTypes?: {} | undefined
  InstanceFleetId?: {} | undefined
  InstanceFleetType?: {} | undefined
  InstanceStates?: {} | undefined
  Marker?: {} | undefined
}
type ListInstancesOutput = { Instances?: {} | undefined; Marker?: {} | undefined }
type ListNotebookExecutionsInput = {
  EditorId?: {} | undefined
  Status?: {} | undefined
  From?: {} | undefined
  To?: {} | undefined
  Marker?: {} | undefined
}
type ListNotebookExecutionsOutput = { NotebookExecutions?: {} | undefined; Marker?: {} | undefined }
type ListReleaseLabelsInput = {
  Filters?: { Prefix?: {} | undefined; Application?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListReleaseLabelsOutput = { ReleaseLabels?: {} | undefined; NextToken?: {} | undefined }
type ListSecurityConfigurationsInput = { Marker?: {} | undefined }
type ListSecurityConfigurationsOutput = {
  SecurityConfigurations?: {} | undefined
  Marker?: {} | undefined
}
type ListStepsInput = {
  ClusterId: {}
  StepStates?: {} | undefined
  StepIds?: {} | undefined
  Marker?: {} | undefined
}
type ListStepsOutput = { Steps?: {} | undefined; Marker?: {} | undefined }
type ListStudioSessionMappingsInput = {
  StudioId?: {} | undefined
  IdentityType?: {} | undefined
  Marker?: {} | undefined
}
type ListStudioSessionMappingsOutput = { SessionMappings?: {} | undefined; Marker?: {} | undefined }
type ListStudiosInput = { Marker?: {} | undefined }
type ListStudiosOutput = { Studios?: {} | undefined; Marker?: {} | undefined }
type ModifyClusterInput = { ClusterId: {}; StepConcurrencyLevel?: {} | undefined }
type ModifyClusterOutput = { StepConcurrencyLevel?: {} | undefined }
type ModifyInstanceFleetInput = {
  ClusterId: {}
  InstanceFleet: {
    InstanceFleetId: {}
    TargetOnDemandCapacity?: {} | undefined
    TargetSpotCapacity?: {} | undefined
    ResizeSpecifications?:
      | {
          SpotResizeSpecification?: { TimeoutDurationMinutes: {} } | undefined
          OnDemandResizeSpecification?: { TimeoutDurationMinutes: {} } | undefined
        }
      | undefined
  }
}
type ModifyInstanceGroupsInput = { ClusterId?: {} | undefined; InstanceGroups?: {} | undefined }
type PutAutoScalingPolicyInput = {
  ClusterId: {}
  InstanceGroupId: {}
  AutoScalingPolicy: { Constraints: { MinCapacity: {}; MaxCapacity: {} }; Rules: {} }
}
type PutAutoScalingPolicyOutput = {
  ClusterId?: {} | undefined
  InstanceGroupId?: {} | undefined
  AutoScalingPolicy?:
    | {
        Status?:
          | {
              State?: {} | undefined
              StateChangeReason?: { Code?: {} | undefined; Message?: {} | undefined } | undefined
            }
          | undefined
        Constraints?: { MinCapacity: {}; MaxCapacity: {} } | undefined
        Rules?: {} | undefined
      }
    | undefined
  ClusterArn?: {} | undefined
}
type PutAutoTerminationPolicyInput = {
  ClusterId: {}
  AutoTerminationPolicy?: { IdleTimeout?: {} | undefined } | undefined
}
type PutAutoTerminationPolicyOutput = { [x: string]: unknown }
type PutBlockPublicAccessConfigurationInput = {
  BlockPublicAccessConfiguration: {
    BlockPublicSecurityGroupRules: {}
    PermittedPublicSecurityGroupRuleRanges?: {} | undefined
  }
}
type PutBlockPublicAccessConfigurationOutput = { [x: string]: unknown }
type PutManagedScalingPolicyInput = {
  ClusterId: {}
  ManagedScalingPolicy: {
    ComputeLimits?:
      | {
          UnitType: {}
          MinimumCapacityUnits: {}
          MaximumCapacityUnits: {}
          MaximumOnDemandCapacityUnits?: {} | undefined
          MaximumCoreCapacityUnits?: {} | undefined
        }
      | undefined
  }
}
type PutManagedScalingPolicyOutput = { [x: string]: unknown }
type RemoveAutoScalingPolicyInput = { ClusterId: {}; InstanceGroupId: {} }
type RemoveAutoScalingPolicyOutput = { [x: string]: unknown }
type RemoveAutoTerminationPolicyInput = { ClusterId: {} }
type RemoveAutoTerminationPolicyOutput = { [x: string]: unknown }
type RemoveManagedScalingPolicyInput = { ClusterId: {} }
type RemoveManagedScalingPolicyOutput = { [x: string]: unknown }
type RemoveTagsInput = { ResourceId: {}; TagKeys: {} }
type RemoveTagsOutput = { [x: string]: unknown }
type AutoTerminationPolicy = { IdleTimeout?: {} | undefined }
type RunJobFlowInput = {
  Name: {}
  LogUri?: {} | undefined
  LogEncryptionKmsKeyId?: {} | undefined
  AdditionalInfo?: {} | undefined
  AmiVersion?: {} | undefined
  ReleaseLabel?: {} | undefined
  Instances: {
    MasterInstanceType?: {} | undefined
    SlaveInstanceType?: {} | undefined
    InstanceCount?: {} | undefined
    InstanceGroups?: {} | undefined
    InstanceFleets?: {} | undefined
    Ec2KeyName?: {} | undefined
    Placement?:
      | { AvailabilityZone?: {} | undefined; AvailabilityZones?: {} | undefined }
      | undefined
    KeepJobFlowAliveWhenNoSteps?: {} | undefined
    TerminationProtected?: {} | undefined
    HadoopVersion?: {} | undefined
    Ec2SubnetId?: {} | undefined
    Ec2SubnetIds?: {} | undefined
    EmrManagedMasterSecurityGroup?: {} | undefined
    EmrManagedSlaveSecurityGroup?: {} | undefined
    ServiceAccessSecurityGroup?: {} | undefined
    AdditionalMasterSecurityGroups?: {} | undefined
    AdditionalSlaveSecurityGroups?: {} | undefined
  }
  Steps?: {} | undefined
  BootstrapActions?: {} | undefined
  SupportedProducts?: {} | undefined
  NewSupportedProducts?: {} | undefined
  Applications?: {} | undefined
  Configurations?: {} | undefined
  VisibleToAllUsers?: {} | undefined
  JobFlowRole?: {} | undefined
  ServiceRole?: {} | undefined
  Tags?: {} | undefined
  SecurityConfiguration?: {} | undefined
  AutoScalingRole?: {} | undefined
  ScaleDownBehavior?: {} | undefined
  CustomAmiId?: {} | undefined
  EbsRootVolumeSize?: {} | undefined
  RepoUpgradeOnBoot?: {} | undefined
  KerberosAttributes?:
    | {
        Realm: {}
        KdcAdminPassword: {}
        CrossRealmTrustPrincipalPassword?: {} | undefined
        ADDomainJoinUser?: {} | undefined
        ADDomainJoinPassword?: {} | undefined
      }
    | undefined
  StepConcurrencyLevel?: {} | undefined
  ManagedScalingPolicy?:
    | {
        ComputeLimits?:
          | {
              UnitType: {}
              MinimumCapacityUnits: {}
              MaximumCapacityUnits: {}
              MaximumOnDemandCapacityUnits?: {} | undefined
              MaximumCoreCapacityUnits?: {} | undefined
            }
          | undefined
      }
    | undefined
  PlacementGroupConfigs?: {} | undefined
  AutoTerminationPolicy?: AutoTerminationPolicy | undefined
  OSReleaseLabel?: {} | undefined
}
type RunJobFlowOutput = { JobFlowId?: {} | undefined; ClusterArn?: {} | undefined }
type SetTerminationProtectionInput = { JobFlowIds: {}; TerminationProtected: {} }
type SetVisibleToAllUsersInput = { JobFlowIds: {}; VisibleToAllUsers: {} }
type StartNotebookExecutionInput = {
  EditorId: {}
  RelativePath: {}
  NotebookExecutionName?: {} | undefined
  NotebookParams?: {} | undefined
  ExecutionEngine: { Id: {}; Type?: {} | undefined; MasterInstanceSecurityGroupId?: {} | undefined }
  ServiceRole: {}
  NotebookInstanceSecurityGroupId?: {} | undefined
  Tags?: {} | undefined
}
type StartNotebookExecutionOutput = { NotebookExecutionId?: {} | undefined }
type StopNotebookExecutionInput = { NotebookExecutionId: {} }
type TerminateJobFlowsInput = { JobFlowIds: {} }
type UpdateStudioInput = {
  StudioId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  SubnetIds?: {} | undefined
  DefaultS3Location?: {} | undefined
}
type UpdateStudioSessionMappingInput = {
  StudioId: {}
  IdentityId?: {} | undefined
  IdentityName?: {} | undefined
  IdentityType: {}
  SessionPolicyArn: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.AddInstanceFleet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddInstanceFleetInput }
        output: AddInstanceFleetOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.AddInstanceGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddInstanceGroupsInput }
        output: AddInstanceGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.AddJobFlowSteps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddJobFlowStepsInput }
        output: AddJobFlowStepsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.AddTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.AddTags'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.CancelSteps': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.CancelSteps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelStepsInput }
        output: CancelStepsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.CreateSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSecurityConfigurationInput }
        output: CreateSecurityConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.CreateStudio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.CreateStudio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStudioInput }
        output: CreateStudioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.CreateStudioSessionMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStudioSessionMappingInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DeleteSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSecurityConfigurationInput }
        output: DeleteSecurityConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DeleteStudio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStudioInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DeleteStudioSessionMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStudioSessionMappingInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterInput }
        output: DescribeClusterOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeJobFlows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeJobFlowsInput }
        output: DescribeJobFlowsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeNotebookExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNotebookExecutionInput }
        output: DescribeNotebookExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeReleaseLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReleaseLabelInput }
        output: DescribeReleaseLabelOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeSecurityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSecurityConfigurationInput }
        output: DescribeSecurityConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeStep': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeStep'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStepInput }
        output: DescribeStepOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.DescribeStudio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.DescribeStudio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStudioInput }
        output: DescribeStudioOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.GetAutoTerminationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAutoTerminationPolicyInput }
        output: GetAutoTerminationPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.GetBlockPublicAccessConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetBlockPublicAccessConfigurationInput }
        output: GetBlockPublicAccessConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.GetClusterSessionCredentials'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetClusterSessionCredentialsInput }
        output: GetClusterSessionCredentialsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.GetManagedScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetManagedScalingPolicyInput }
        output: GetManagedScalingPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.GetStudioSessionMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStudioSessionMappingInput }
        output: GetStudioSessionMappingOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListBootstrapActions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBootstrapActionsInput }
        output: ListBootstrapActionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListClusters': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListClusters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListClustersInput }
        output: ListClustersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListInstanceFleets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInstanceFleetsInput }
        output: ListInstanceFleetsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListInstanceGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInstanceGroupsInput }
        output: ListInstanceGroupsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListInstances': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInstancesInput }
        output: ListInstancesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListNotebookExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListNotebookExecutionsInput }
        output: ListNotebookExecutionsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListReleaseLabels': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListReleaseLabels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListReleaseLabelsInput }
        output: ListReleaseLabelsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListSecurityConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSecurityConfigurationsInput }
        output: ListSecurityConfigurationsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListSteps': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListSteps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStepsInput }
        output: ListStepsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListStudioSessionMappings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStudioSessionMappingsInput }
        output: ListStudioSessionMappingsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ListStudios': {
      $post: {
        input: { query: { Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ListStudios'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStudiosInput }
        output: ListStudiosOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ModifyCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ModifyCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterInput }
        output: ModifyClusterOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ModifyInstanceFleet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyInstanceFleetInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.ModifyInstanceGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyInstanceGroupsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.PutAutoScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAutoScalingPolicyInput }
        output: PutAutoScalingPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.PutAutoTerminationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAutoTerminationPolicyInput }
        output: PutAutoTerminationPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.PutBlockPublicAccessConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutBlockPublicAccessConfigurationInput }
        output: PutBlockPublicAccessConfigurationOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.PutManagedScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutManagedScalingPolicyInput }
        output: PutManagedScalingPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.RemoveAutoScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveAutoScalingPolicyInput }
        output: RemoveAutoScalingPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.RemoveAutoTerminationPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveAutoTerminationPolicyInput }
        output: RemoveAutoTerminationPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.RemoveManagedScalingPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveManagedScalingPolicyInput }
        output: RemoveManagedScalingPolicyOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.RemoveTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.RemoveTags'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.RunJobFlow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.RunJobFlow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RunJobFlowInput }
        output: RunJobFlowOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.SetTerminationProtection'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetTerminationProtectionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.SetVisibleToAllUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetVisibleToAllUsersInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.StartNotebookExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.StartNotebookExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartNotebookExecutionInput }
        output: StartNotebookExecutionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.StopNotebookExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.StopNotebookExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopNotebookExecutionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.TerminateJobFlows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateJobFlowsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudio': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.UpdateStudio'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStudioInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'ElasticMapReduce.UpdateStudioSessionMapping'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStudioSessionMappingInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
