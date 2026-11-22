type AssignInstanceRequest = { InstanceId: {}; LayerIds: {} }
type ValidationException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type AssignVolumeRequest = { VolumeId: {}; InstanceId?: {} | undefined }
type AssociateElasticIpRequest = { ElasticIp: {}; InstanceId?: {} | undefined }
type AttachElasticLoadBalancerRequest = { ElasticLoadBalancerName: {}; LayerId: {} }
type CloneStackRequest = {
  SourceStackId: {}
  Name?: {} | undefined
  Region?: {} | undefined
  VpcId?: {} | undefined
  Attributes?: {} | undefined
  ServiceRoleArn: {}
  DefaultInstanceProfileArn?: {} | undefined
  DefaultOs?: {} | undefined
  HostnameTheme?: {} | undefined
  DefaultAvailabilityZone?: {} | undefined
  DefaultSubnetId?: {} | undefined
  CustomJson?: {} | undefined
  ConfigurationManager?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
  ChefConfiguration?:
    | { ManageBerkshelf?: {} | undefined; BerkshelfVersion?: {} | undefined }
    | undefined
  UseCustomCookbooks?: {} | undefined
  UseOpsworksSecurityGroups?: {} | undefined
  CustomCookbooksSource?:
    | {
        Type?: {} | undefined
        Url?: {} | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        SshKey?: {} | undefined
        Revision?: {} | undefined
      }
    | undefined
  DefaultSshKeyName?: {} | undefined
  ClonePermissions?: {} | undefined
  CloneAppIds?: {} | undefined
  DefaultRootDeviceType?: {} | undefined
  AgentVersion?: {} | undefined
}
type CloneStackResult = { StackId?: {} | undefined }
type CreateAppRequest = {
  StackId: {}
  Shortname?: {} | undefined
  Name: {}
  Description?: {} | undefined
  DataSources?: {} | undefined
  Type: {}
  AppSource?:
    | {
        Type?: {} | undefined
        Url?: {} | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        SshKey?: {} | undefined
        Revision?: {} | undefined
      }
    | undefined
  Domains?: {} | undefined
  EnableSsl?: {} | undefined
  SslConfiguration?: { Certificate: {}; PrivateKey: {}; Chain?: {} | undefined } | undefined
  Attributes?: {} | undefined
  Environment?: {} | undefined
}
type CreateAppResult = { AppId?: {} | undefined }
type CreateDeploymentRequest = {
  StackId: {}
  AppId?: {} | undefined
  InstanceIds?: {} | undefined
  LayerIds?: {} | undefined
  Command: { Name: {}; Args?: {} | undefined }
  Comment?: {} | undefined
  CustomJson?: {} | undefined
}
type CreateDeploymentResult = { DeploymentId?: {} | undefined }
type CreateInstanceRequest = {
  StackId: {}
  LayerIds: {}
  InstanceType: {}
  AutoScalingType?: {} | undefined
  Hostname?: {} | undefined
  Os?: {} | undefined
  AmiId?: {} | undefined
  SshKeyName?: {} | undefined
  AvailabilityZone?: {} | undefined
  VirtualizationType?: {} | undefined
  SubnetId?: {} | undefined
  Architecture?: {} | undefined
  RootDeviceType?: {} | undefined
  BlockDeviceMappings?: {} | undefined
  InstallUpdatesOnBoot?: {} | undefined
  EbsOptimized?: {} | undefined
  AgentVersion?: {} | undefined
  Tenancy?: {} | undefined
}
type CreateInstanceResult = { InstanceId?: {} | undefined }
type CreateLayerRequest = {
  StackId: {}
  Type: {}
  Name: {}
  Shortname: {}
  Attributes?: {} | undefined
  CloudWatchLogsConfiguration?:
    | { Enabled?: {} | undefined; LogStreams?: {} | undefined }
    | undefined
  CustomInstanceProfileArn?: {} | undefined
  CustomJson?: {} | undefined
  CustomSecurityGroupIds?: {} | undefined
  Packages?: {} | undefined
  VolumeConfigurations?: {} | undefined
  EnableAutoHealing?: {} | undefined
  AutoAssignElasticIps?: {} | undefined
  AutoAssignPublicIps?: {} | undefined
  CustomRecipes?:
    | {
        Setup?: {} | undefined
        Configure?: {} | undefined
        Deploy?: {} | undefined
        Undeploy?: {} | undefined
        Shutdown?: {} | undefined
      }
    | undefined
  InstallUpdatesOnBoot?: {} | undefined
  UseEbsOptimizedInstances?: {} | undefined
  LifecycleEventConfiguration?:
    | {
        Shutdown?:
          | { ExecutionTimeout?: {} | undefined; DelayUntilElbConnectionsDrained?: {} | undefined }
          | undefined
      }
    | undefined
}
type CreateLayerResult = { LayerId?: {} | undefined }
type CreateStackRequest = {
  Name: {}
  Region: {}
  VpcId?: {} | undefined
  Attributes?: {} | undefined
  ServiceRoleArn: {}
  DefaultInstanceProfileArn: {}
  DefaultOs?: {} | undefined
  HostnameTheme?: {} | undefined
  DefaultAvailabilityZone?: {} | undefined
  DefaultSubnetId?: {} | undefined
  CustomJson?: {} | undefined
  ConfigurationManager?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
  ChefConfiguration?:
    | { ManageBerkshelf?: {} | undefined; BerkshelfVersion?: {} | undefined }
    | undefined
  UseCustomCookbooks?: {} | undefined
  UseOpsworksSecurityGroups?: {} | undefined
  CustomCookbooksSource?:
    | {
        Type?: {} | undefined
        Url?: {} | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        SshKey?: {} | undefined
        Revision?: {} | undefined
      }
    | undefined
  DefaultSshKeyName?: {} | undefined
  DefaultRootDeviceType?: {} | undefined
  AgentVersion?: {} | undefined
}
type CreateStackResult = { StackId?: {} | undefined }
type CreateUserProfileRequest = {
  IamUserArn: {}
  SshUsername?: {} | undefined
  SshPublicKey?: {} | undefined
  AllowSelfManagement?: {} | undefined
}
type CreateUserProfileResult = { IamUserArn?: {} | undefined }
type DeleteAppRequest = { AppId: {} }
type DeleteInstanceRequest = {
  InstanceId: {}
  DeleteElasticIp?: {} | undefined
  DeleteVolumes?: {} | undefined
}
type DeleteLayerRequest = { LayerId: {} }
type DeleteStackRequest = { StackId: {} }
type DeleteUserProfileRequest = { IamUserArn: {} }
type DeregisterEcsClusterRequest = { EcsClusterArn: {} }
type DeregisterElasticIpRequest = { ElasticIp: {} }
type DeregisterInstanceRequest = { InstanceId: {} }
type DeregisterRdsDbInstanceRequest = { RdsDbInstanceArn: {} }
type DeregisterVolumeRequest = { VolumeId: {} }
type DescribeAgentVersionsRequest = {
  StackId?: {} | undefined
  ConfigurationManager?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
}
type DescribeAgentVersionsResult = { AgentVersions?: {} | undefined }
type DescribeAppsRequest = { StackId?: {} | undefined; AppIds?: {} | undefined }
type DescribeAppsResult = { Apps?: {} | undefined }
type DescribeCommandsRequest = {
  DeploymentId?: {} | undefined
  InstanceId?: {} | undefined
  CommandIds?: {} | undefined
}
type DescribeCommandsResult = { Commands?: {} | undefined }
type DescribeDeploymentsRequest = {
  StackId?: {} | undefined
  AppId?: {} | undefined
  DeploymentIds?: {} | undefined
}
type DescribeDeploymentsResult = { Deployments?: {} | undefined }
type DescribeEcsClustersRequest = {
  EcsClusterArns?: {} | undefined
  StackId?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeEcsClustersResult = { EcsClusters?: {} | undefined; NextToken?: {} | undefined }
type DescribeElasticIpsRequest = {
  InstanceId?: {} | undefined
  StackId?: {} | undefined
  Ips?: {} | undefined
}
type DescribeElasticIpsResult = { ElasticIps?: {} | undefined }
type DescribeElasticLoadBalancersRequest = { StackId?: {} | undefined; LayerIds?: {} | undefined }
type DescribeElasticLoadBalancersResult = { ElasticLoadBalancers?: {} | undefined }
type DescribeInstancesRequest = {
  StackId?: {} | undefined
  LayerId?: {} | undefined
  InstanceIds?: {} | undefined
}
type DescribeInstancesResult = { Instances?: {} | undefined }
type DescribeLayersRequest = { StackId?: {} | undefined; LayerIds?: {} | undefined }
type DescribeLayersResult = { Layers?: {} | undefined }
type DescribeLoadBasedAutoScalingRequest = { LayerIds: {} }
type DescribeLoadBasedAutoScalingResult = { LoadBasedAutoScalingConfigurations?: {} | undefined }
type DescribeMyUserProfileResult = {
  UserProfile?:
    | {
        IamUserArn?: {} | undefined
        Name?: {} | undefined
        SshUsername?: {} | undefined
        SshPublicKey?: {} | undefined
      }
    | undefined
}
type DescribeOperatingSystemsResponse = { OperatingSystems?: {} | undefined }
type DescribePermissionsRequest = { IamUserArn?: {} | undefined; StackId?: {} | undefined }
type DescribePermissionsResult = { Permissions?: {} | undefined }
type DescribeRaidArraysRequest = {
  InstanceId?: {} | undefined
  StackId?: {} | undefined
  RaidArrayIds?: {} | undefined
}
type DescribeRaidArraysResult = { RaidArrays?: {} | undefined }
type DescribeRdsDbInstancesRequest = { StackId: {}; RdsDbInstanceArns?: {} | undefined }
type DescribeRdsDbInstancesResult = { RdsDbInstances?: {} | undefined }
type DescribeServiceErrorsRequest = {
  StackId?: {} | undefined
  InstanceId?: {} | undefined
  ServiceErrorIds?: {} | undefined
}
type DescribeServiceErrorsResult = { ServiceErrors?: {} | undefined }
type DescribeStackProvisioningParametersRequest = { StackId: {} }
type DescribeStackProvisioningParametersResult = {
  AgentInstallerUrl?: {} | undefined
  Parameters?: {} | undefined
}
type DescribeStackSummaryRequest = { StackId: {} }
type DescribeStackSummaryResult = {
  StackSummary?:
    | {
        StackId?: {} | undefined
        Name?: {} | undefined
        Arn?: {} | undefined
        LayersCount?: {} | undefined
        AppsCount?: {} | undefined
        InstancesCount?:
          | {
              Assigning?: {} | undefined
              Booting?: {} | undefined
              ConnectionLost?: {} | undefined
              Deregistering?: {} | undefined
              Online?: {} | undefined
              Pending?: {} | undefined
              Rebooting?: {} | undefined
              Registered?: {} | undefined
              Registering?: {} | undefined
              Requested?: {} | undefined
              RunningSetup?: {} | undefined
              SetupFailed?: {} | undefined
              ShuttingDown?: {} | undefined
              StartFailed?: {} | undefined
              StopFailed?: {} | undefined
              Stopped?: {} | undefined
              Stopping?: {} | undefined
              Terminated?: {} | undefined
              Terminating?: {} | undefined
              Unassigning?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeStacksRequest = { StackIds?: {} | undefined }
type DescribeStacksResult = { Stacks?: {} | undefined }
type DescribeTimeBasedAutoScalingRequest = { InstanceIds: {} }
type DescribeTimeBasedAutoScalingResult = { TimeBasedAutoScalingConfigurations?: {} | undefined }
type DescribeUserProfilesRequest = { IamUserArns?: {} | undefined }
type DescribeUserProfilesResult = { UserProfiles?: {} | undefined }
type DescribeVolumesRequest = {
  InstanceId?: {} | undefined
  StackId?: {} | undefined
  RaidArrayId?: {} | undefined
  VolumeIds?: {} | undefined
}
type DescribeVolumesResult = { Volumes?: {} | undefined }
type DetachElasticLoadBalancerRequest = { ElasticLoadBalancerName: {}; LayerId: {} }
type DisassociateElasticIpRequest = { ElasticIp: {} }
type GetHostnameSuggestionRequest = { LayerId: {} }
type GetHostnameSuggestionResult = { LayerId?: {} | undefined; Hostname?: {} | undefined }
type GrantAccessRequest = { InstanceId: {}; ValidForInMinutes?: {} | undefined }
type GrantAccessResult = {
  TemporaryCredential?:
    | {
        Username?: {} | undefined
        Password?: {} | undefined
        ValidForInMinutes?: {} | undefined
        InstanceId?: {} | undefined
      }
    | undefined
}
type ListTagsRequest = { ResourceArn: {}; MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListTagsResult = { Tags?: {} | undefined; NextToken?: {} | undefined }
type RebootInstanceRequest = { InstanceId: {} }
type RegisterEcsClusterRequest = { EcsClusterArn: {}; StackId: {} }
type RegisterEcsClusterResult = { EcsClusterArn?: {} | undefined }
type RegisterElasticIpRequest = { ElasticIp: {}; StackId: {} }
type RegisterElasticIpResult = { ElasticIp?: {} | undefined }
type RegisterInstanceRequest = {
  StackId: {}
  Hostname?: {} | undefined
  PublicIp?: {} | undefined
  PrivateIp?: {} | undefined
  RsaPublicKey?: {} | undefined
  RsaPublicKeyFingerprint?: {} | undefined
  InstanceIdentity?: { Document?: {} | undefined; Signature?: {} | undefined } | undefined
}
type RegisterInstanceResult = { InstanceId?: {} | undefined }
type RegisterRdsDbInstanceRequest = {
  StackId: {}
  RdsDbInstanceArn: {}
  DbUser: {}
  DbPassword: {}
}
type RegisterVolumeRequest = { Ec2VolumeId?: {} | undefined; StackId: {} }
type RegisterVolumeResult = { VolumeId?: {} | undefined }
type SetLoadBasedAutoScalingRequest = {
  LayerId: {}
  Enable?: {} | undefined
  UpScaling?:
    | {
        InstanceCount?: {} | undefined
        ThresholdsWaitTime?: {} | undefined
        IgnoreMetricsTime?: {} | undefined
        CpuThreshold?: {} | undefined
        MemoryThreshold?: {} | undefined
        LoadThreshold?: {} | undefined
        Alarms?: {} | undefined
      }
    | undefined
  DownScaling?:
    | {
        InstanceCount?: {} | undefined
        ThresholdsWaitTime?: {} | undefined
        IgnoreMetricsTime?: {} | undefined
        CpuThreshold?: {} | undefined
        MemoryThreshold?: {} | undefined
        LoadThreshold?: {} | undefined
        Alarms?: {} | undefined
      }
    | undefined
}
type SetPermissionRequest = {
  StackId: {}
  IamUserArn: {}
  AllowSsh?: {} | undefined
  AllowSudo?: {} | undefined
  Level?: {} | undefined
}
type SetTimeBasedAutoScalingRequest = {
  InstanceId: {}
  AutoScalingSchedule?:
    | {
        Monday?: {} | undefined
        Tuesday?: {} | undefined
        Wednesday?: {} | undefined
        Thursday?: {} | undefined
        Friday?: {} | undefined
        Saturday?: {} | undefined
        Sunday?: {} | undefined
      }
    | undefined
}
type StartInstanceRequest = { InstanceId: {} }
type StartStackRequest = { StackId: {} }
type StopInstanceRequest = { InstanceId: {}; Force?: {} | undefined }
type StopStackRequest = { StackId: {} }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type UnassignInstanceRequest = { InstanceId: {} }
type UnassignVolumeRequest = { VolumeId: {} }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UpdateAppRequest = {
  AppId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  DataSources?: {} | undefined
  Type?: {} | undefined
  AppSource?:
    | {
        Type?: {} | undefined
        Url?: {} | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        SshKey?: {} | undefined
        Revision?: {} | undefined
      }
    | undefined
  Domains?: {} | undefined
  EnableSsl?: {} | undefined
  SslConfiguration?: { Certificate: {}; PrivateKey: {}; Chain?: {} | undefined } | undefined
  Attributes?: {} | undefined
  Environment?: {} | undefined
}
type UpdateElasticIpRequest = { ElasticIp: {}; Name?: {} | undefined }
type UpdateInstanceRequest = {
  InstanceId: {}
  LayerIds?: {} | undefined
  InstanceType?: {} | undefined
  AutoScalingType?: {} | undefined
  Hostname?: {} | undefined
  Os?: {} | undefined
  AmiId?: {} | undefined
  SshKeyName?: {} | undefined
  Architecture?: {} | undefined
  InstallUpdatesOnBoot?: {} | undefined
  EbsOptimized?: {} | undefined
  AgentVersion?: {} | undefined
}
type UpdateLayerRequest = {
  LayerId: {}
  Name?: {} | undefined
  Shortname?: {} | undefined
  Attributes?: {} | undefined
  CloudWatchLogsConfiguration?:
    | { Enabled?: {} | undefined; LogStreams?: {} | undefined }
    | undefined
  CustomInstanceProfileArn?: {} | undefined
  CustomJson?: {} | undefined
  CustomSecurityGroupIds?: {} | undefined
  Packages?: {} | undefined
  VolumeConfigurations?: {} | undefined
  EnableAutoHealing?: {} | undefined
  AutoAssignElasticIps?: {} | undefined
  AutoAssignPublicIps?: {} | undefined
  CustomRecipes?:
    | {
        Setup?: {} | undefined
        Configure?: {} | undefined
        Deploy?: {} | undefined
        Undeploy?: {} | undefined
        Shutdown?: {} | undefined
      }
    | undefined
  InstallUpdatesOnBoot?: {} | undefined
  UseEbsOptimizedInstances?: {} | undefined
  LifecycleEventConfiguration?:
    | {
        Shutdown?:
          | { ExecutionTimeout?: {} | undefined; DelayUntilElbConnectionsDrained?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateMyUserProfileRequest = { SshPublicKey?: {} | undefined }
type UpdateRdsDbInstanceRequest = {
  RdsDbInstanceArn: {}
  DbUser?: {} | undefined
  DbPassword?: {} | undefined
}
type UpdateStackRequest = {
  StackId: {}
  Name?: {} | undefined
  Attributes?: {} | undefined
  ServiceRoleArn?: {} | undefined
  DefaultInstanceProfileArn?: {} | undefined
  DefaultOs?: {} | undefined
  HostnameTheme?: {} | undefined
  DefaultAvailabilityZone?: {} | undefined
  DefaultSubnetId?: {} | undefined
  CustomJson?: {} | undefined
  ConfigurationManager?: { Name?: {} | undefined; Version?: {} | undefined } | undefined
  ChefConfiguration?:
    | { ManageBerkshelf?: {} | undefined; BerkshelfVersion?: {} | undefined }
    | undefined
  UseCustomCookbooks?: {} | undefined
  CustomCookbooksSource?:
    | {
        Type?: {} | undefined
        Url?: {} | undefined
        Username?: {} | undefined
        Password?: {} | undefined
        SshKey?: {} | undefined
        Revision?: {} | undefined
      }
    | undefined
  DefaultSshKeyName?: {} | undefined
  DefaultRootDeviceType?: {} | undefined
  UseOpsworksSecurityGroups?: {} | undefined
  AgentVersion?: {} | undefined
}
type UpdateUserProfileRequest = {
  IamUserArn: {}
  SshUsername?: {} | undefined
  SshPublicKey?: {} | undefined
  AllowSelfManagement?: {} | undefined
}
type UpdateVolumeRequest = { VolumeId: {}; Name?: {} | undefined; MountPoint?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=OpsWorks_20130218.AssignInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.AssignVolume': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignVolumeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignVolumeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssignVolumeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateElasticIpRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateElasticIpRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AssociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateElasticIpRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AttachElasticLoadBalancer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachElasticLoadBalancerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AttachElasticLoadBalancer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachElasticLoadBalancerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.AttachElasticLoadBalancer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AttachElasticLoadBalancerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CloneStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CloneStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneStackRequest }
            output: CloneStackResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CloneStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CloneStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CloneStackRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: CreateAppResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAppRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateDeployment': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentRequest }
            output: CreateDeploymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateDeployment'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateDeploymentRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceRequest }
            output: CreateInstanceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateLayer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLayerRequest }
            output: CreateLayerResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLayerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLayerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStackRequest }
            output: CreateStackResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.CreateUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserProfileRequest }
            output: CreateUserProfileResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.CreateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateUserProfileRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeleteApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeleteInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeleteLayer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLayerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLayerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLayerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeleteStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteStackRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeleteUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteUserProfileRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEcsClusterRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEcsClusterRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterEcsClusterRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterElasticIpRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterElasticIpRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterElasticIpRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterRdsDbInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterRdsDbInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterRdsDbInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DeregisterVolume': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterVolumeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterVolumeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DeregisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterVolumeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeAgentVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentVersionsRequest }
            output: DescribeAgentVersionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeAgentVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentVersionsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeAgentVersions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentVersionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeApps': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeApps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppsRequest }
            output: DescribeAppsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeApps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeApps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAppsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeCommands': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeCommands'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCommandsRequest }
            output: DescribeCommandsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeCommands'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCommandsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeCommands'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeCommandsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeDeployments': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeploymentsRequest }
            output: DescribeDeploymentsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeploymentsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeDeployments'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeDeploymentsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeEcsClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEcsClustersRequest }
            output: DescribeEcsClustersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeEcsClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEcsClustersRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeEcsClusters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEcsClustersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticIps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticIpsRequest }
            output: DescribeElasticIpsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticIps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticIpsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticIps'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticIpsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticLoadBalancers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticLoadBalancersRequest }
            output: DescribeElasticLoadBalancersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticLoadBalancers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticLoadBalancersRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeElasticLoadBalancers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeElasticLoadBalancersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesRequest }
            output: DescribeInstancesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLayers': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLayers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLayersRequest }
            output: DescribeLayersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLayers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLayersRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLayers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLayersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBasedAutoScalingRequest }
            output: DescribeLoadBasedAutoScalingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBasedAutoScalingRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLoadBasedAutoScalingRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'OpsWorks_20130218.DescribeMyUserProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMyUserProfileResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'OpsWorks_20130218.DescribeOperatingSystems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeOperatingSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribePermissions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribePermissions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePermissionsRequest }
            output: DescribePermissionsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribePermissions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePermissionsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribePermissions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePermissionsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRaidArrays'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRaidArraysRequest }
            output: DescribeRaidArraysResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRaidArrays'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRaidArraysRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRaidArrays'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRaidArraysRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRdsDbInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRdsDbInstancesRequest }
            output: DescribeRdsDbInstancesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRdsDbInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRdsDbInstancesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeRdsDbInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRdsDbInstancesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeServiceErrors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceErrorsRequest }
            output: DescribeServiceErrorsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeServiceErrors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceErrorsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeServiceErrors'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServiceErrorsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackProvisioningParameters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackProvisioningParametersRequest }
            output: DescribeStackProvisioningParametersResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackProvisioningParameters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackProvisioningParametersRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackProvisioningParameters'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackProvisioningParametersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackSummaryRequest }
            output: DescribeStackSummaryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackSummaryRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStackSummary'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStackSummaryRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeStacks': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStacksRequest }
            output: DescribeStacksResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStacksRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeStacks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStacksRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeBasedAutoScalingRequest }
            output: DescribeTimeBasedAutoScalingResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeBasedAutoScalingRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTimeBasedAutoScalingRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeUserProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeUserProfilesRequest }
            output: DescribeUserProfilesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeUserProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeUserProfilesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeUserProfiles'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeUserProfilesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DescribeVolumes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeVolumes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVolumesRequest }
            output: DescribeVolumesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeVolumes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVolumesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DescribeVolumes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVolumesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DetachElasticLoadBalancer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetachElasticLoadBalancerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DetachElasticLoadBalancer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DetachElasticLoadBalancerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DisassociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateElasticIpRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DisassociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateElasticIpRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.DisassociateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateElasticIpRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GetHostnameSuggestion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHostnameSuggestionRequest }
            output: GetHostnameSuggestionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GetHostnameSuggestion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHostnameSuggestionRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GetHostnameSuggestion'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetHostnameSuggestionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.GrantAccess': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GrantAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GrantAccessRequest }
            output: GrantAccessResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GrantAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GrantAccessRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.GrantAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GrantAccessRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.ListTags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.ListTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsRequest }
            output: ListTagsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.ListTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.ListTags'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RebootInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RebootInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RebootInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RebootInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RebootInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEcsClusterRequest }
            output: RegisterEcsClusterResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEcsClusterRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterEcsCluster'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterEcsClusterRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterElasticIpRequest }
            output: RegisterElasticIpResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterElasticIpRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterElasticIpRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RegisterInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterInstanceRequest }
            output: RegisterInstanceResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterRdsDbInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterRdsDbInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterRdsDbInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.RegisterVolume': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterVolumeRequest }
            output: RegisterVolumeResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterVolumeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.RegisterVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterVolumeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBasedAutoScalingRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBasedAutoScalingRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetLoadBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetLoadBasedAutoScalingRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.SetPermission': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetPermission'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPermissionRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetPermission'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPermissionRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetPermission'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetPermissionRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTimeBasedAutoScalingRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTimeBasedAutoScalingRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.SetTimeBasedAutoScaling'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SetTimeBasedAutoScalingRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.StartInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.StartStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StartStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartStackRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.StopInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.StopStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.StopStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopStackRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.TagResource'
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
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UnassignInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UnassignVolume': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignVolumeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignVolumeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UnassignVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UnassignVolumeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UntagResource'
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
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateApp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAppRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAppRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateApp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAppRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateElasticIpRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateElasticIpRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateElasticIp'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateElasticIpRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateLayer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLayerRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLayerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateLayer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLayerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateMyUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMyUserProfileRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateMyUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMyUserProfileRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRdsDbInstanceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRdsDbInstanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateRdsDbInstance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRdsDbInstanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateStack': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStackRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStackRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateStack'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateStackRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateUserProfile'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateUserProfileRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorks_20130218.UpdateVolume': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVolumeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVolumeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorks_20130218.UpdateVolume'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateVolumeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
