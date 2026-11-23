type AcceptMatchInput = { TicketId: {}; PlayerIds: {}; AcceptanceType: {} }
type AcceptMatchOutput = { [x: string]: unknown }
type InvalidRequestException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type InternalServiceException = { [x: string]: unknown }
type UnsupportedRegionException = { [x: string]: unknown }
type ClaimGameServerInput = {
  GameServerGroupName: {}
  GameServerId?: {} | undefined
  GameServerData?: {} | undefined
}
type ClaimGameServerOutput = {
  GameServer?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        GameServerId?: {} | undefined
        InstanceId?: {} | undefined
        ConnectionInfo?: {} | undefined
        GameServerData?: {} | undefined
        ClaimStatus?: {} | undefined
        UtilizationStatus?: {} | undefined
        RegistrationTime?: {} | undefined
        LastClaimTime?: {} | undefined
        LastHealthCheckTime?: {} | undefined
      }
    | undefined
}
type ConflictException = { [x: string]: unknown }
type OutOfCapacityException = { [x: string]: unknown }
type UnauthorizedException = { [x: string]: unknown }
type CreateAliasInput = {
  Name: {}
  Description?: {} | undefined
  RoutingStrategy: { Type?: {} | undefined; FleetId?: {} | undefined; Message?: {} | undefined }
  Tags?: {} | undefined
}
type CreateAliasOutput = {
  Alias?:
    | {
        AliasId?: {} | undefined
        Name?: {} | undefined
        AliasArn?: {} | undefined
        Description?: {} | undefined
        RoutingStrategy?:
          | { Type?: {} | undefined; FleetId?: {} | undefined; Message?: {} | undefined }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type LimitExceededException = { [x: string]: unknown }
type TaggingFailedException = { [x: string]: unknown }
type CreateBuildInput = {
  Name?: {} | undefined
  Version?: {} | undefined
  StorageLocation?:
    | {
        Bucket?: {} | undefined
        Key?: {} | undefined
        RoleArn?: {} | undefined
        ObjectVersion?: {} | undefined
      }
    | undefined
  OperatingSystem?: {} | undefined
  Tags?: {} | undefined
  ServerSdkVersion?: {} | undefined
}
type CreateBuildOutput = {
  Build?:
    | {
        BuildId?: {} | undefined
        BuildArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        Status?: {} | undefined
        SizeOnDisk?: {} | undefined
        OperatingSystem?: {} | undefined
        CreationTime?: {} | undefined
        ServerSdkVersion?: {} | undefined
      }
    | undefined
  UploadCredentials?:
    | {
        AccessKeyId?: {} | undefined
        SecretAccessKey?: {} | undefined
        SessionToken?: {} | undefined
      }
    | undefined
  StorageLocation?:
    | {
        Bucket?: {} | undefined
        Key?: {} | undefined
        RoleArn?: {} | undefined
        ObjectVersion?: {} | undefined
      }
    | undefined
}
type CreateFleetInput = {
  Name: {}
  Description?: {} | undefined
  BuildId?: {} | undefined
  ScriptId?: {} | undefined
  ServerLaunchPath?: {} | undefined
  ServerLaunchParameters?: {} | undefined
  LogPaths?: {} | undefined
  EC2InstanceType?: {} | undefined
  EC2InboundPermissions?: {} | undefined
  NewGameSessionProtectionPolicy?: {} | undefined
  RuntimeConfiguration?:
    | {
        ServerProcesses?: {} | undefined
        MaxConcurrentGameSessionActivations?: {} | undefined
        GameSessionActivationTimeoutSeconds?: {} | undefined
      }
    | undefined
  ResourceCreationLimitPolicy?:
    | { NewGameSessionsPerCreator?: {} | undefined; PolicyPeriodInMinutes?: {} | undefined }
    | undefined
  MetricGroups?: {} | undefined
  PeerVpcAwsAccountId?: {} | undefined
  PeerVpcId?: {} | undefined
  FleetType?: {} | undefined
  InstanceRoleArn?: {} | undefined
  CertificateConfiguration?: { CertificateType: {} } | undefined
  Locations?: {} | undefined
  Tags?: {} | undefined
  ComputeType?: {} | undefined
  AnywhereConfiguration?: { Cost: {} } | undefined
}
type ResourceCreationLimitPolicy = {
  NewGameSessionsPerCreator?: {} | undefined
  PolicyPeriodInMinutes?: {} | undefined
}
type CertificateConfiguration = { CertificateType: {} }
type AnywhereConfiguration = { Cost: {} }
type CreateFleetOutput = {
  FleetAttributes?:
    | {
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        FleetType?: {} | undefined
        InstanceType?: {} | undefined
        Description?: {} | undefined
        Name?: {} | undefined
        CreationTime?: {} | undefined
        TerminationTime?: {} | undefined
        Status?: {} | undefined
        BuildId?: {} | undefined
        BuildArn?: {} | undefined
        ScriptId?: {} | undefined
        ScriptArn?: {} | undefined
        ServerLaunchPath?: {} | undefined
        ServerLaunchParameters?: {} | undefined
        LogPaths?: {} | undefined
        NewGameSessionProtectionPolicy?: {} | undefined
        OperatingSystem?: {} | undefined
        ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined
        MetricGroups?: {} | undefined
        StoppedActions?: {} | undefined
        InstanceRoleArn?: {} | undefined
        CertificateConfiguration?: CertificateConfiguration | undefined
        ComputeType?: {} | undefined
        AnywhereConfiguration?: AnywhereConfiguration | undefined
      }
    | undefined
  LocationStates?: {} | undefined
}
type CreateFleetLocationsInput = { FleetId: {}; Locations: {} }
type CreateFleetLocationsOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  LocationStates?: {} | undefined
}
type InvalidFleetStatusException = { [x: string]: unknown }
type CreateGameServerGroupInput = {
  GameServerGroupName: {}
  RoleArn: {}
  MinSize: {}
  MaxSize: {}
  LaunchTemplate: {
    LaunchTemplateId?: {} | undefined
    LaunchTemplateName?: {} | undefined
    Version?: {} | undefined
  }
  InstanceDefinitions: {}
  AutoScalingPolicy?:
    | { EstimatedInstanceWarmup?: {} | undefined; TargetTrackingConfiguration: { TargetValue: {} } }
    | undefined
  BalancingStrategy?: {} | undefined
  GameServerProtectionPolicy?: {} | undefined
  VpcSubnets?: {} | undefined
  Tags?: {} | undefined
}
type CreateGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type CreateGameSessionInput = {
  FleetId?: {} | undefined
  AliasId?: {} | undefined
  MaximumPlayerSessionCount: {}
  Name?: {} | undefined
  GameProperties?: {} | undefined
  CreatorId?: {} | undefined
  GameSessionId?: {} | undefined
  IdempotencyToken?: {} | undefined
  GameSessionData?: {} | undefined
  Location?: {} | undefined
}
type CreateGameSessionOutput = {
  GameSession?:
    | {
        GameSessionId?: {} | undefined
        Name?: {} | undefined
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        CreationTime?: {} | undefined
        TerminationTime?: {} | undefined
        CurrentPlayerSessionCount?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        GameProperties?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlayerSessionCreationPolicy?: {} | undefined
        CreatorId?: {} | undefined
        GameSessionData?: {} | undefined
        MatchmakerData?: {} | undefined
        Location?: {} | undefined
      }
    | undefined
}
type TerminalRoutingStrategyException = { [x: string]: unknown }
type FleetCapacityExceededException = { [x: string]: unknown }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type CreateGameSessionQueueInput = {
  Name: {}
  TimeoutInSeconds?: {} | undefined
  PlayerLatencyPolicies?: {} | undefined
  Destinations?: {} | undefined
  FilterConfiguration?: { AllowedLocations?: {} | undefined } | undefined
  PriorityConfiguration?:
    | { PriorityOrder?: {} | undefined; LocationOrder?: {} | undefined }
    | undefined
  CustomEventData?: {} | undefined
  NotificationTarget?: {} | undefined
  Tags?: {} | undefined
}
type CreateGameSessionQueueOutput = {
  GameSessionQueue?:
    | {
        Name?: {} | undefined
        GameSessionQueueArn?: {} | undefined
        TimeoutInSeconds?: {} | undefined
        PlayerLatencyPolicies?: {} | undefined
        Destinations?: {} | undefined
        FilterConfiguration?: { AllowedLocations?: {} | undefined } | undefined
        PriorityConfiguration?:
          | { PriorityOrder?: {} | undefined; LocationOrder?: {} | undefined }
          | undefined
        CustomEventData?: {} | undefined
        NotificationTarget?: {} | undefined
      }
    | undefined
}
type CreateLocationInput = { LocationName: {}; Tags?: {} | undefined }
type CreateLocationOutput = {
  Location?: { LocationName?: {} | undefined; LocationArn?: {} | undefined } | undefined
}
type CreateMatchmakingConfigurationInput = {
  Name: {}
  Description?: {} | undefined
  GameSessionQueueArns?: {} | undefined
  RequestTimeoutSeconds: {}
  AcceptanceTimeoutSeconds?: {} | undefined
  AcceptanceRequired: {}
  RuleSetName: {}
  NotificationTarget?: {} | undefined
  AdditionalPlayerCount?: {} | undefined
  CustomEventData?: {} | undefined
  GameProperties?: {} | undefined
  GameSessionData?: {} | undefined
  BackfillMode?: {} | undefined
  FlexMatchMode?: {} | undefined
  Tags?: {} | undefined
}
type CreateMatchmakingConfigurationOutput = {
  Configuration?:
    | {
        Name?: {} | undefined
        ConfigurationArn?: {} | undefined
        Description?: {} | undefined
        GameSessionQueueArns?: {} | undefined
        RequestTimeoutSeconds?: {} | undefined
        AcceptanceTimeoutSeconds?: {} | undefined
        AcceptanceRequired?: {} | undefined
        RuleSetName?: {} | undefined
        RuleSetArn?: {} | undefined
        NotificationTarget?: {} | undefined
        AdditionalPlayerCount?: {} | undefined
        CustomEventData?: {} | undefined
        CreationTime?: {} | undefined
        GameProperties?: {} | undefined
        GameSessionData?: {} | undefined
        BackfillMode?: {} | undefined
        FlexMatchMode?: {} | undefined
      }
    | undefined
}
type CreateMatchmakingRuleSetInput = { Name: {}; RuleSetBody: {}; Tags?: {} | undefined }
type CreateMatchmakingRuleSetOutput = {
  RuleSet: {
    RuleSetName?: {} | undefined
    RuleSetArn?: {} | undefined
    RuleSetBody: {}
    CreationTime?: {} | undefined
  }
}
type CreatePlayerSessionInput = { GameSessionId: {}; PlayerId: {}; PlayerData?: {} | undefined }
type CreatePlayerSessionOutput = {
  PlayerSession?:
    | {
        PlayerSessionId?: {} | undefined
        PlayerId?: {} | undefined
        GameSessionId?: {} | undefined
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        CreationTime?: {} | undefined
        TerminationTime?: {} | undefined
        Status?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlayerData?: {} | undefined
      }
    | undefined
}
type InvalidGameSessionStatusException = { [x: string]: unknown }
type GameSessionFullException = { [x: string]: unknown }
type CreatePlayerSessionsInput = {
  GameSessionId: {}
  PlayerIds: {}
  PlayerDataMap?: {} | undefined
}
type CreatePlayerSessionsOutput = { PlayerSessions?: {} | undefined }
type CreateScriptInput = {
  Name?: {} | undefined
  Version?: {} | undefined
  StorageLocation?:
    | {
        Bucket?: {} | undefined
        Key?: {} | undefined
        RoleArn?: {} | undefined
        ObjectVersion?: {} | undefined
      }
    | undefined
  ZipFile?: {} | undefined
  Tags?: {} | undefined
}
type CreateScriptOutput = {
  Script?:
    | {
        ScriptId?: {} | undefined
        ScriptArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        SizeOnDisk?: {} | undefined
        CreationTime?: {} | undefined
        StorageLocation?:
          | {
              Bucket?: {} | undefined
              Key?: {} | undefined
              RoleArn?: {} | undefined
              ObjectVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type CreateVpcPeeringAuthorizationInput = { GameLiftAwsAccountId: {}; PeerVpcId: {} }
type CreateVpcPeeringAuthorizationOutput = {
  VpcPeeringAuthorization?:
    | {
        GameLiftAwsAccountId?: {} | undefined
        PeerVpcAwsAccountId?: {} | undefined
        PeerVpcId?: {} | undefined
        CreationTime?: {} | undefined
        ExpirationTime?: {} | undefined
      }
    | undefined
}
type CreateVpcPeeringConnectionInput = { FleetId: {}; PeerVpcAwsAccountId: {}; PeerVpcId: {} }
type CreateVpcPeeringConnectionOutput = { [x: string]: unknown }
type DeleteAliasInput = { AliasId: {} }
type DeleteBuildInput = { BuildId: {} }
type DeleteFleetInput = { FleetId: {} }
type DeleteFleetLocationsInput = { FleetId: {}; Locations: {} }
type DeleteFleetLocationsOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  LocationStates?: {} | undefined
}
type DeleteGameServerGroupInput = { GameServerGroupName: {}; DeleteOption?: {} | undefined }
type DeleteGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type DeleteGameSessionQueueInput = { Name: {} }
type DeleteGameSessionQueueOutput = { [x: string]: unknown }
type DeleteLocationInput = { LocationName: {} }
type DeleteLocationOutput = { [x: string]: unknown }
type DeleteMatchmakingConfigurationInput = { Name: {} }
type DeleteMatchmakingConfigurationOutput = { [x: string]: unknown }
type DeleteMatchmakingRuleSetInput = { Name: {} }
type DeleteMatchmakingRuleSetOutput = { [x: string]: unknown }
type DeleteScalingPolicyInput = { Name: {}; FleetId: {} }
type DeleteScriptInput = { ScriptId: {} }
type DeleteVpcPeeringAuthorizationInput = { GameLiftAwsAccountId: {}; PeerVpcId: {} }
type DeleteVpcPeeringAuthorizationOutput = { [x: string]: unknown }
type DeleteVpcPeeringConnectionInput = { FleetId: {}; VpcPeeringConnectionId: {} }
type DeleteVpcPeeringConnectionOutput = { [x: string]: unknown }
type DeregisterComputeInput = { FleetId: {}; ComputeName: {} }
type DeregisterComputeOutput = { [x: string]: unknown }
type DeregisterGameServerInput = { GameServerGroupName: {}; GameServerId: {} }
type DescribeAliasInput = { AliasId: {} }
type DescribeAliasOutput = {
  Alias?:
    | {
        AliasId?: {} | undefined
        Name?: {} | undefined
        AliasArn?: {} | undefined
        Description?: {} | undefined
        RoutingStrategy?:
          | { Type?: {} | undefined; FleetId?: {} | undefined; Message?: {} | undefined }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type DescribeBuildInput = { BuildId: {} }
type DescribeBuildOutput = {
  Build?:
    | {
        BuildId?: {} | undefined
        BuildArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        Status?: {} | undefined
        SizeOnDisk?: {} | undefined
        OperatingSystem?: {} | undefined
        CreationTime?: {} | undefined
        ServerSdkVersion?: {} | undefined
      }
    | undefined
}
type DescribeComputeInput = { FleetId: {}; ComputeName: {} }
type DescribeComputeOutput = {
  Compute?:
    | {
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        ComputeName?: {} | undefined
        ComputeArn?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        ComputeStatus?: {} | undefined
        Location?: {} | undefined
        CreationTime?: {} | undefined
        OperatingSystem?: {} | undefined
        Type?: {} | undefined
        GameLiftServiceSdkEndpoint?: {} | undefined
      }
    | undefined
}
type DescribeEC2InstanceLimitsInput = {
  EC2InstanceType?: {} | undefined
  Location?: {} | undefined
}
type DescribeEC2InstanceLimitsOutput = { EC2InstanceLimits?: {} | undefined }
type DescribeFleetAttributesInput = {
  FleetIds?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetAttributesOutput = {
  FleetAttributes?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetCapacityInput = {
  FleetIds?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetCapacityOutput = { FleetCapacity?: {} | undefined; NextToken?: {} | undefined }
type DescribeFleetEventsInput = {
  FleetId: {}
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetEventsOutput = { Events?: {} | undefined; NextToken?: {} | undefined }
type DescribeFleetLocationAttributesInput = {
  FleetId: {}
  Locations?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetLocationAttributesOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  LocationAttributes?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetLocationCapacityInput = { FleetId: {}; Location: {} }
type EC2InstanceCounts = {
  DESIRED?: {} | undefined
  MINIMUM?: {} | undefined
  MAXIMUM?: {} | undefined
  PENDING?: {} | undefined
  ACTIVE?: {} | undefined
  IDLE?: {} | undefined
  TERMINATING?: {} | undefined
}
type DescribeFleetLocationCapacityOutput = {
  FleetCapacity?:
    | {
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        InstanceType?: {} | undefined
        InstanceCounts?: EC2InstanceCounts | undefined
        Location?: {} | undefined
      }
    | undefined
}
type DescribeFleetLocationUtilizationInput = { FleetId: {}; Location: {} }
type DescribeFleetLocationUtilizationOutput = {
  FleetUtilization?:
    | {
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        ActiveServerProcessCount?: {} | undefined
        ActiveGameSessionCount?: {} | undefined
        CurrentPlayerSessionCount?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        Location?: {} | undefined
      }
    | undefined
}
type DescribeFleetPortSettingsInput = { FleetId: {}; Location?: {} | undefined }
type DescribeFleetPortSettingsOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  InboundPermissions?: {} | undefined
  UpdateStatus?: {} | undefined
  Location?: {} | undefined
}
type DescribeFleetUtilizationInput = {
  FleetIds?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeFleetUtilizationOutput = {
  FleetUtilization?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameServerInput = { GameServerGroupName: {}; GameServerId: {} }
type DescribeGameServerOutput = {
  GameServer?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        GameServerId?: {} | undefined
        InstanceId?: {} | undefined
        ConnectionInfo?: {} | undefined
        GameServerData?: {} | undefined
        ClaimStatus?: {} | undefined
        UtilizationStatus?: {} | undefined
        RegistrationTime?: {} | undefined
        LastClaimTime?: {} | undefined
        LastHealthCheckTime?: {} | undefined
      }
    | undefined
}
type DescribeGameServerGroupInput = { GameServerGroupName: {} }
type DescribeGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type DescribeGameServerInstancesInput = {
  GameServerGroupName: {}
  InstanceIds?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameServerInstancesOutput = {
  GameServerInstances?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionDetailsInput = {
  FleetId?: {} | undefined
  GameSessionId?: {} | undefined
  AliasId?: {} | undefined
  Location?: {} | undefined
  StatusFilter?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionDetailsOutput = {
  GameSessionDetails?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionPlacementInput = { PlacementId: {} }
type DescribeGameSessionPlacementOutput = {
  GameSessionPlacement?:
    | {
        PlacementId?: {} | undefined
        GameSessionQueueName?: {} | undefined
        Status?: {} | undefined
        GameProperties?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        GameSessionName?: {} | undefined
        GameSessionId?: {} | undefined
        GameSessionArn?: {} | undefined
        GameSessionRegion?: {} | undefined
        PlayerLatencies?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlacedPlayerSessions?: {} | undefined
        GameSessionData?: {} | undefined
        MatchmakerData?: {} | undefined
      }
    | undefined
}
type DescribeGameSessionQueuesInput = {
  Names?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionQueuesOutput = {
  GameSessionQueues?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionsInput = {
  FleetId?: {} | undefined
  GameSessionId?: {} | undefined
  AliasId?: {} | undefined
  Location?: {} | undefined
  StatusFilter?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeGameSessionsOutput = { GameSessions?: {} | undefined; NextToken?: {} | undefined }
type DescribeInstancesInput = {
  FleetId: {}
  InstanceId?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
  Location?: {} | undefined
}
type DescribeInstancesOutput = { Instances?: {} | undefined; NextToken?: {} | undefined }
type DescribeMatchmakingInput = { TicketIds: {} }
type DescribeMatchmakingOutput = { TicketList?: {} | undefined }
type DescribeMatchmakingConfigurationsInput = {
  Names?: {} | undefined
  RuleSetName?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMatchmakingConfigurationsOutput = {
  Configurations?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMatchmakingRuleSetsInput = {
  Names?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMatchmakingRuleSetsOutput = { RuleSets: {}; NextToken?: {} | undefined }
type DescribePlayerSessionsInput = {
  GameSessionId?: {} | undefined
  PlayerId?: {} | undefined
  PlayerSessionId?: {} | undefined
  PlayerSessionStatusFilter?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePlayerSessionsOutput = { PlayerSessions?: {} | undefined; NextToken?: {} | undefined }
type DescribeRuntimeConfigurationInput = { FleetId: {} }
type DescribeRuntimeConfigurationOutput = {
  RuntimeConfiguration?:
    | {
        ServerProcesses?: {} | undefined
        MaxConcurrentGameSessionActivations?: {} | undefined
        GameSessionActivationTimeoutSeconds?: {} | undefined
      }
    | undefined
}
type DescribeScalingPoliciesInput = {
  FleetId: {}
  StatusFilter?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
  Location?: {} | undefined
}
type DescribeScalingPoliciesOutput = {
  ScalingPolicies?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScriptInput = { ScriptId: {} }
type DescribeScriptOutput = {
  Script?:
    | {
        ScriptId?: {} | undefined
        ScriptArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        SizeOnDisk?: {} | undefined
        CreationTime?: {} | undefined
        StorageLocation?:
          | {
              Bucket?: {} | undefined
              Key?: {} | undefined
              RoleArn?: {} | undefined
              ObjectVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeVpcPeeringAuthorizationsInput = { [x: string]: unknown }
type DescribeVpcPeeringAuthorizationsOutput = { VpcPeeringAuthorizations?: {} | undefined }
type DescribeVpcPeeringConnectionsInput = { FleetId?: {} | undefined }
type DescribeVpcPeeringConnectionsOutput = { VpcPeeringConnections?: {} | undefined }
type GetComputeAccessInput = { FleetId: {}; ComputeName: {} }
type GetComputeAccessOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  ComputeName?: {} | undefined
  ComputeArn?: {} | undefined
  Credentials?:
    | {
        AccessKeyId?: {} | undefined
        SecretAccessKey?: {} | undefined
        SessionToken?: {} | undefined
      }
    | undefined
}
type GetComputeAuthTokenInput = { FleetId: {}; ComputeName: {} }
type GetComputeAuthTokenOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  ComputeName?: {} | undefined
  ComputeArn?: {} | undefined
  AuthToken?: {} | undefined
  ExpirationTimestamp?: {} | undefined
}
type GetGameSessionLogUrlInput = { GameSessionId: {} }
type GetGameSessionLogUrlOutput = { PreSignedUrl?: {} | undefined }
type GetInstanceAccessInput = { FleetId: {}; InstanceId: {} }
type GetInstanceAccessOutput = {
  InstanceAccess?:
    | {
        FleetId?: {} | undefined
        InstanceId?: {} | undefined
        IpAddress?: {} | undefined
        OperatingSystem?: {} | undefined
        Credentials?: { UserName?: {} | undefined; Secret?: {} | undefined } | undefined
      }
    | undefined
}
type ListAliasesInput = {
  RoutingStrategyType?: {} | undefined
  Name?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListAliasesOutput = { Aliases?: {} | undefined; NextToken?: {} | undefined }
type ListBuildsInput = {
  Status?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListBuildsOutput = { Builds?: {} | undefined; NextToken?: {} | undefined }
type ListComputeInput = {
  FleetId: {}
  Location?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListComputeOutput = { ComputeList?: {} | undefined; NextToken?: {} | undefined }
type ListFleetsInput = {
  BuildId?: {} | undefined
  ScriptId?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListFleetsOutput = { FleetIds?: {} | undefined; NextToken?: {} | undefined }
type ListGameServerGroupsInput = { Limit?: {} | undefined; NextToken?: {} | undefined }
type ListGameServerGroupsOutput = { GameServerGroups?: {} | undefined; NextToken?: {} | undefined }
type ListGameServersInput = {
  GameServerGroupName: {}
  SortOrder?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListGameServersOutput = { GameServers?: {} | undefined; NextToken?: {} | undefined }
type ListLocationsInput = {
  Filters?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type ListLocationsOutput = { Locations?: {} | undefined; NextToken?: {} | undefined }
type ListScriptsInput = { Limit?: {} | undefined; NextToken?: {} | undefined }
type ListScriptsOutput = { Scripts?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type PutScalingPolicyInput = {
  Name: {}
  FleetId: {}
  ScalingAdjustment?: {} | undefined
  ScalingAdjustmentType?: {} | undefined
  Threshold?: {} | undefined
  ComparisonOperator?: {} | undefined
  EvaluationPeriods?: {} | undefined
  MetricName: {}
  PolicyType?: {} | undefined
  TargetConfiguration?: { TargetValue: {} } | undefined
}
type PutScalingPolicyOutput = { Name?: {} | undefined }
type RegisterComputeInput = {
  FleetId: {}
  ComputeName: {}
  CertificatePath?: {} | undefined
  DnsName?: {} | undefined
  IpAddress?: {} | undefined
  Location?: {} | undefined
}
type RegisterComputeOutput = {
  Compute?:
    | {
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        ComputeName?: {} | undefined
        ComputeArn?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        ComputeStatus?: {} | undefined
        Location?: {} | undefined
        CreationTime?: {} | undefined
        OperatingSystem?: {} | undefined
        Type?: {} | undefined
        GameLiftServiceSdkEndpoint?: {} | undefined
      }
    | undefined
}
type RegisterGameServerInput = {
  GameServerGroupName: {}
  GameServerId: {}
  InstanceId: {}
  ConnectionInfo?: {} | undefined
  GameServerData?: {} | undefined
}
type RegisterGameServerOutput = {
  GameServer?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        GameServerId?: {} | undefined
        InstanceId?: {} | undefined
        ConnectionInfo?: {} | undefined
        GameServerData?: {} | undefined
        ClaimStatus?: {} | undefined
        UtilizationStatus?: {} | undefined
        RegistrationTime?: {} | undefined
        LastClaimTime?: {} | undefined
        LastHealthCheckTime?: {} | undefined
      }
    | undefined
}
type RequestUploadCredentialsInput = { BuildId: {} }
type RequestUploadCredentialsOutput = {
  UploadCredentials?:
    | {
        AccessKeyId?: {} | undefined
        SecretAccessKey?: {} | undefined
        SessionToken?: {} | undefined
      }
    | undefined
  StorageLocation?:
    | {
        Bucket?: {} | undefined
        Key?: {} | undefined
        RoleArn?: {} | undefined
        ObjectVersion?: {} | undefined
      }
    | undefined
}
type ResolveAliasInput = { AliasId: {} }
type ResolveAliasOutput = { FleetId?: {} | undefined; FleetArn?: {} | undefined }
type ResumeGameServerGroupInput = { GameServerGroupName: {}; ResumeActions: {} }
type ResumeGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type SearchGameSessionsInput = {
  FleetId?: {} | undefined
  AliasId?: {} | undefined
  Location?: {} | undefined
  FilterExpression?: {} | undefined
  SortExpression?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type SearchGameSessionsOutput = { GameSessions?: {} | undefined; NextToken?: {} | undefined }
type StartFleetActionsInput = { FleetId: {}; Actions: {}; Location?: {} | undefined }
type StartFleetActionsOutput = { FleetId?: {} | undefined; FleetArn?: {} | undefined }
type StartGameSessionPlacementInput = {
  PlacementId: {}
  GameSessionQueueName: {}
  GameProperties?: {} | undefined
  MaximumPlayerSessionCount: {}
  GameSessionName?: {} | undefined
  PlayerLatencies?: {} | undefined
  DesiredPlayerSessions?: {} | undefined
  GameSessionData?: {} | undefined
}
type StartGameSessionPlacementOutput = {
  GameSessionPlacement?:
    | {
        PlacementId?: {} | undefined
        GameSessionQueueName?: {} | undefined
        Status?: {} | undefined
        GameProperties?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        GameSessionName?: {} | undefined
        GameSessionId?: {} | undefined
        GameSessionArn?: {} | undefined
        GameSessionRegion?: {} | undefined
        PlayerLatencies?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlacedPlayerSessions?: {} | undefined
        GameSessionData?: {} | undefined
        MatchmakerData?: {} | undefined
      }
    | undefined
}
type StartMatchBackfillInput = {
  TicketId?: {} | undefined
  ConfigurationName: {}
  GameSessionArn?: {} | undefined
  Players: {}
}
type StartMatchBackfillOutput = {
  MatchmakingTicket?:
    | {
        TicketId?: {} | undefined
        ConfigurationName?: {} | undefined
        ConfigurationArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        StatusMessage?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        Players?: {} | undefined
        GameSessionConnectionInfo?:
          | {
              GameSessionArn?: {} | undefined
              IpAddress?: {} | undefined
              DnsName?: {} | undefined
              Port?: {} | undefined
              MatchedPlayerSessions?: {} | undefined
            }
          | undefined
        EstimatedWaitTime?: {} | undefined
      }
    | undefined
}
type StartMatchmakingInput = { TicketId?: {} | undefined; ConfigurationName: {}; Players: {} }
type StartMatchmakingOutput = {
  MatchmakingTicket?:
    | {
        TicketId?: {} | undefined
        ConfigurationName?: {} | undefined
        ConfigurationArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        StatusMessage?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        Players?: {} | undefined
        GameSessionConnectionInfo?:
          | {
              GameSessionArn?: {} | undefined
              IpAddress?: {} | undefined
              DnsName?: {} | undefined
              Port?: {} | undefined
              MatchedPlayerSessions?: {} | undefined
            }
          | undefined
        EstimatedWaitTime?: {} | undefined
      }
    | undefined
}
type StopFleetActionsInput = { FleetId: {}; Actions: {}; Location?: {} | undefined }
type StopFleetActionsOutput = { FleetId?: {} | undefined; FleetArn?: {} | undefined }
type StopGameSessionPlacementInput = { PlacementId: {} }
type StopGameSessionPlacementOutput = {
  GameSessionPlacement?:
    | {
        PlacementId?: {} | undefined
        GameSessionQueueName?: {} | undefined
        Status?: {} | undefined
        GameProperties?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        GameSessionName?: {} | undefined
        GameSessionId?: {} | undefined
        GameSessionArn?: {} | undefined
        GameSessionRegion?: {} | undefined
        PlayerLatencies?: {} | undefined
        StartTime?: {} | undefined
        EndTime?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlacedPlayerSessions?: {} | undefined
        GameSessionData?: {} | undefined
        MatchmakerData?: {} | undefined
      }
    | undefined
}
type StopMatchmakingInput = { TicketId: {} }
type StopMatchmakingOutput = { [x: string]: unknown }
type SuspendGameServerGroupInput = { GameServerGroupName: {}; SuspendActions: {} }
type SuspendGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAliasInput = {
  AliasId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  RoutingStrategy?:
    | { Type?: {} | undefined; FleetId?: {} | undefined; Message?: {} | undefined }
    | undefined
}
type UpdateAliasOutput = {
  Alias?:
    | {
        AliasId?: {} | undefined
        Name?: {} | undefined
        AliasArn?: {} | undefined
        Description?: {} | undefined
        RoutingStrategy?:
          | { Type?: {} | undefined; FleetId?: {} | undefined; Message?: {} | undefined }
          | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type UpdateBuildInput = { BuildId: {}; Name?: {} | undefined; Version?: {} | undefined }
type UpdateBuildOutput = {
  Build?:
    | {
        BuildId?: {} | undefined
        BuildArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        Status?: {} | undefined
        SizeOnDisk?: {} | undefined
        OperatingSystem?: {} | undefined
        CreationTime?: {} | undefined
        ServerSdkVersion?: {} | undefined
      }
    | undefined
}
type UpdateFleetAttributesInput = {
  FleetId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  NewGameSessionProtectionPolicy?: {} | undefined
  ResourceCreationLimitPolicy?:
    | { NewGameSessionsPerCreator?: {} | undefined; PolicyPeriodInMinutes?: {} | undefined }
    | undefined
  MetricGroups?: {} | undefined
  AnywhereConfiguration?: { Cost: {} } | undefined
}
type UpdateFleetAttributesOutput = { FleetId?: {} | undefined; FleetArn?: {} | undefined }
type UpdateFleetCapacityInput = {
  FleetId: {}
  DesiredInstances?: {} | undefined
  MinSize?: {} | undefined
  MaxSize?: {} | undefined
  Location?: {} | undefined
}
type UpdateFleetCapacityOutput = {
  FleetId?: {} | undefined
  FleetArn?: {} | undefined
  Location?: {} | undefined
}
type UpdateFleetPortSettingsInput = {
  FleetId: {}
  InboundPermissionAuthorizations?: {} | undefined
  InboundPermissionRevocations?: {} | undefined
}
type UpdateFleetPortSettingsOutput = { FleetId?: {} | undefined; FleetArn?: {} | undefined }
type UpdateGameServerInput = {
  GameServerGroupName: {}
  GameServerId: {}
  GameServerData?: {} | undefined
  UtilizationStatus?: {} | undefined
  HealthCheck?: {} | undefined
}
type UpdateGameServerOutput = {
  GameServer?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        GameServerId?: {} | undefined
        InstanceId?: {} | undefined
        ConnectionInfo?: {} | undefined
        GameServerData?: {} | undefined
        ClaimStatus?: {} | undefined
        UtilizationStatus?: {} | undefined
        RegistrationTime?: {} | undefined
        LastClaimTime?: {} | undefined
        LastHealthCheckTime?: {} | undefined
      }
    | undefined
}
type UpdateGameServerGroupInput = {
  GameServerGroupName: {}
  RoleArn?: {} | undefined
  InstanceDefinitions?: {} | undefined
  GameServerProtectionPolicy?: {} | undefined
  BalancingStrategy?: {} | undefined
}
type UpdateGameServerGroupOutput = {
  GameServerGroup?:
    | {
        GameServerGroupName?: {} | undefined
        GameServerGroupArn?: {} | undefined
        RoleArn?: {} | undefined
        InstanceDefinitions?: {} | undefined
        BalancingStrategy?: {} | undefined
        GameServerProtectionPolicy?: {} | undefined
        AutoScalingGroupArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SuspendedActions?: {} | undefined
        CreationTime?: {} | undefined
        LastUpdatedTime?: {} | undefined
      }
    | undefined
}
type UpdateGameSessionInput = {
  GameSessionId: {}
  MaximumPlayerSessionCount?: {} | undefined
  Name?: {} | undefined
  PlayerSessionCreationPolicy?: {} | undefined
  ProtectionPolicy?: {} | undefined
}
type UpdateGameSessionOutput = {
  GameSession?:
    | {
        GameSessionId?: {} | undefined
        Name?: {} | undefined
        FleetId?: {} | undefined
        FleetArn?: {} | undefined
        CreationTime?: {} | undefined
        TerminationTime?: {} | undefined
        CurrentPlayerSessionCount?: {} | undefined
        MaximumPlayerSessionCount?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        GameProperties?: {} | undefined
        IpAddress?: {} | undefined
        DnsName?: {} | undefined
        Port?: {} | undefined
        PlayerSessionCreationPolicy?: {} | undefined
        CreatorId?: {} | undefined
        GameSessionData?: {} | undefined
        MatchmakerData?: {} | undefined
        Location?: {} | undefined
      }
    | undefined
}
type UpdateGameSessionQueueInput = {
  Name: {}
  TimeoutInSeconds?: {} | undefined
  PlayerLatencyPolicies?: {} | undefined
  Destinations?: {} | undefined
  FilterConfiguration?: { AllowedLocations?: {} | undefined } | undefined
  PriorityConfiguration?:
    | { PriorityOrder?: {} | undefined; LocationOrder?: {} | undefined }
    | undefined
  CustomEventData?: {} | undefined
  NotificationTarget?: {} | undefined
}
type UpdateGameSessionQueueOutput = {
  GameSessionQueue?:
    | {
        Name?: {} | undefined
        GameSessionQueueArn?: {} | undefined
        TimeoutInSeconds?: {} | undefined
        PlayerLatencyPolicies?: {} | undefined
        Destinations?: {} | undefined
        FilterConfiguration?: { AllowedLocations?: {} | undefined } | undefined
        PriorityConfiguration?:
          | { PriorityOrder?: {} | undefined; LocationOrder?: {} | undefined }
          | undefined
        CustomEventData?: {} | undefined
        NotificationTarget?: {} | undefined
      }
    | undefined
}
type UpdateMatchmakingConfigurationInput = {
  Name: {}
  Description?: {} | undefined
  GameSessionQueueArns?: {} | undefined
  RequestTimeoutSeconds?: {} | undefined
  AcceptanceTimeoutSeconds?: {} | undefined
  AcceptanceRequired?: {} | undefined
  RuleSetName?: {} | undefined
  NotificationTarget?: {} | undefined
  AdditionalPlayerCount?: {} | undefined
  CustomEventData?: {} | undefined
  GameProperties?: {} | undefined
  GameSessionData?: {} | undefined
  BackfillMode?: {} | undefined
  FlexMatchMode?: {} | undefined
}
type UpdateMatchmakingConfigurationOutput = {
  Configuration?:
    | {
        Name?: {} | undefined
        ConfigurationArn?: {} | undefined
        Description?: {} | undefined
        GameSessionQueueArns?: {} | undefined
        RequestTimeoutSeconds?: {} | undefined
        AcceptanceTimeoutSeconds?: {} | undefined
        AcceptanceRequired?: {} | undefined
        RuleSetName?: {} | undefined
        RuleSetArn?: {} | undefined
        NotificationTarget?: {} | undefined
        AdditionalPlayerCount?: {} | undefined
        CustomEventData?: {} | undefined
        CreationTime?: {} | undefined
        GameProperties?: {} | undefined
        GameSessionData?: {} | undefined
        BackfillMode?: {} | undefined
        FlexMatchMode?: {} | undefined
      }
    | undefined
}
type UpdateRuntimeConfigurationInput = {
  FleetId: {}
  RuntimeConfiguration: {
    ServerProcesses?: {} | undefined
    MaxConcurrentGameSessionActivations?: {} | undefined
    GameSessionActivationTimeoutSeconds?: {} | undefined
  }
}
type UpdateRuntimeConfigurationOutput = {
  RuntimeConfiguration?:
    | {
        ServerProcesses?: {} | undefined
        MaxConcurrentGameSessionActivations?: {} | undefined
        GameSessionActivationTimeoutSeconds?: {} | undefined
      }
    | undefined
}
type UpdateScriptInput = {
  ScriptId: {}
  Name?: {} | undefined
  Version?: {} | undefined
  StorageLocation?:
    | {
        Bucket?: {} | undefined
        Key?: {} | undefined
        RoleArn?: {} | undefined
        ObjectVersion?: {} | undefined
      }
    | undefined
  ZipFile?: {} | undefined
}
type UpdateScriptOutput = {
  Script?:
    | {
        ScriptId?: {} | undefined
        ScriptArn?: {} | undefined
        Name?: {} | undefined
        Version?: {} | undefined
        SizeOnDisk?: {} | undefined
        CreationTime?: {} | undefined
        StorageLocation?:
          | {
              Bucket?: {} | undefined
              Key?: {} | undefined
              RoleArn?: {} | undefined
              ObjectVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ValidateMatchmakingRuleSetInput = { RuleSetBody: {} }
type ValidateMatchmakingRuleSetOutput = { Valid?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=GameLift.AcceptMatch': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.AcceptMatch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptMatchInput }
            output: AcceptMatchOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.AcceptMatch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptMatchInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.AcceptMatch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptMatchInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.AcceptMatch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptMatchInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.AcceptMatch'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AcceptMatchInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ClaimGameServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: ClaimGameServerOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: OutOfCapacityException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ClaimGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ClaimGameServerInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: CreateAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAliasInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateBuild': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: CreateBuildOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBuildInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: CreateFleetOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateFleetLocations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: CreateFleetLocationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: ConflictException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateFleetLocationsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: CreateGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameServerGroupInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateGameSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: CreateGameSessionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: ConflictException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: FleetCapacityExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateGameSessionQueue': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: CreateGameSessionQueueOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateGameSessionQueueInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateLocation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: CreateLocationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: ConflictException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateMatchmakingConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: CreateMatchmakingConfigurationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingConfigurationInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateMatchmakingRuleSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: CreateMatchmakingRuleSetOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateMatchmakingRuleSetInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreatePlayerSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: CreatePlayerSessionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: InvalidGameSessionStatusException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: GameSessionFullException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreatePlayerSessions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: CreatePlayerSessionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: InvalidGameSessionStatusException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: GameSessionFullException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreatePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreatePlayerSessionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateScript': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: CreateScriptOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScriptInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringAuthorizationInput }
            output: CreateVpcPeeringAuthorizationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringAuthorizationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringAuthorizationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringAuthorizationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringAuthorizationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.CreateVpcPeeringConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringConnectionInput }
            output: CreateVpcPeeringConnectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringConnectionInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringConnectionInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringConnectionInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.CreateVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateVpcPeeringConnectionInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAliasInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteBuild': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBuildInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteFleet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteFleetLocations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: DeleteFleetLocationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteFleetLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteFleetLocationsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameServerGroupInput }
            output: DeleteGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameServerGroupInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteGameSessionQueue': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: DeleteGameSessionQueueOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteGameSessionQueueInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteLocation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationInput }
            output: DeleteLocationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: DeleteMatchmakingConfigurationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingConfigurationInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: DeleteMatchmakingRuleSetOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteMatchmakingRuleSetInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteScalingPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPolicyInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPolicyInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPolicyInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPolicyInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPolicyInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteScript': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScriptInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringAuthorizationInput }
            output: DeleteVpcPeeringAuthorizationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringAuthorizationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringAuthorizationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringAuthorizationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringAuthorization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringAuthorizationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringConnection': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringConnectionInput }
            output: DeleteVpcPeeringConnectionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringConnectionInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringConnectionInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringConnectionInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeleteVpcPeeringConnection'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteVpcPeeringConnectionInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeregisterCompute': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterComputeInput }
            output: DeregisterComputeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterComputeInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterComputeInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterComputeInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterComputeInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DeregisterGameServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterGameServerInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterGameServerInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterGameServerInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterGameServerInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DeregisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeregisterGameServerInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAliasInput }
            output: DescribeAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAliasInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAliasInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAliasInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAliasInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeBuild': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBuildInput }
            output: DescribeBuildOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBuildInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBuildInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBuildInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBuildInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeCompute': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComputeInput }
            output: DescribeComputeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComputeInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComputeInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComputeInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeComputeInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeEC2InstanceLimits': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeEC2InstanceLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEC2InstanceLimitsInput }
            output: DescribeEC2InstanceLimitsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeEC2InstanceLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEC2InstanceLimitsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeEC2InstanceLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEC2InstanceLimitsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeEC2InstanceLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEC2InstanceLimitsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeEC2InstanceLimits'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEC2InstanceLimitsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetAttributes': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAttributesInput }
            output: DescribeFleetAttributesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAttributesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAttributesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAttributesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetAttributesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetCapacity': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetCapacityInput }
            output: DescribeFleetCapacityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetCapacityInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetCapacityInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetCapacityInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetCapacityInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetEvents': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetEventsInput }
            output: DescribeFleetEventsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetEventsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetEventsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetEventsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetEventsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetLocationAttributes': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: DescribeFleetLocationAttributesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationAttributesInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetLocationCapacity': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: DescribeFleetLocationCapacityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationCapacityInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetLocationUtilization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: DescribeFleetLocationUtilizationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetLocationUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetLocationUtilizationInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetPortSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: DescribeFleetPortSettingsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetPortSettingsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeFleetUtilization': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetUtilizationInput }
            output: DescribeFleetUtilizationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetUtilizationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetUtilizationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetUtilizationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeFleetUtilization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeFleetUtilizationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInput }
            output: DescribeGameServerOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerGroupInput }
            output: DescribeGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerGroupInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameServerInstances': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInstancesInput }
            output: DescribeGameServerInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInstancesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInstancesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInstancesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameServerInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameServerInstancesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameSessionDetails': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: DescribeGameSessionDetailsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionDetailsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameSessionPlacement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionPlacementInput }
            output: DescribeGameSessionPlacementOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionPlacementInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionPlacementInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionPlacementInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionPlacementInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameSessionQueues': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionQueues'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionQueuesInput }
            output: DescribeGameSessionQueuesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionQueues'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionQueuesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionQueues'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionQueuesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionQueues'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionQueuesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessionQueues'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionQueuesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeGameSessions': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: DescribeGameSessionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeGameSessionsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeInstances': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: DescribeInstancesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeInstances'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeInstancesInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeMatchmaking': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingInput }
            output: DescribeMatchmakingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingConfigurationsInput }
            output: DescribeMatchmakingConfigurationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingConfigurationsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingConfigurationsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingConfigurations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingConfigurationsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingRuleSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingRuleSetsInput }
            output: DescribeMatchmakingRuleSetsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingRuleSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingRuleSetsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingRuleSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingRuleSetsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingRuleSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingRuleSetsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeMatchmakingRuleSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeMatchmakingRuleSetsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribePlayerSessions': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlayerSessionsInput }
            output: DescribePlayerSessionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlayerSessionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlayerSessionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlayerSessionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribePlayerSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribePlayerSessionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeRuntimeConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRuntimeConfigurationInput }
            output: DescribeRuntimeConfigurationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRuntimeConfigurationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRuntimeConfigurationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRuntimeConfigurationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeRuntimeConfigurationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeScalingPolicies': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: DescribeScalingPoliciesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScalingPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPoliciesInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeScript': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScriptInput }
            output: DescribeScriptOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScriptInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScriptInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScriptInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScriptInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringAuthorizationsInput }
            output: DescribeVpcPeeringAuthorizationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringAuthorizationsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringAuthorizationsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringAuthorizations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringAuthorizationsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringConnections': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringConnectionsInput }
            output: DescribeVpcPeeringConnectionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringConnectionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringConnectionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringConnectionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.DescribeVpcPeeringConnections'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeVpcPeeringConnectionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.GetComputeAccess': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAccessInput }
            output: GetComputeAccessOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAccessInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAccessInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAccessInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAccessInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.GetComputeAuthToken': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAuthToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAuthTokenInput }
            output: GetComputeAuthTokenOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAuthToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAuthTokenInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAuthToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAuthTokenInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAuthToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAuthTokenInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetComputeAuthToken'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComputeAuthTokenInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.GetGameSessionLogUrl': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetGameSessionLogUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetGameSessionLogUrlInput }
            output: GetGameSessionLogUrlOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetGameSessionLogUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetGameSessionLogUrlInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetGameSessionLogUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetGameSessionLogUrlInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetGameSessionLogUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetGameSessionLogUrlInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetGameSessionLogUrl'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetGameSessionLogUrlInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.GetInstanceAccess': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetInstanceAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceAccessInput }
            output: GetInstanceAccessOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetInstanceAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceAccessInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetInstanceAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceAccessInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetInstanceAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceAccessInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.GetInstanceAccess'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetInstanceAccessInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListAliases': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesInput }
            output: ListAliasesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListAliases'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAliasesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListBuilds': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListBuilds'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBuildsInput }
            output: ListBuildsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListBuilds'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBuildsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListBuilds'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBuildsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListBuilds'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListBuildsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListCompute': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComputeInput }
            output: ListComputeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComputeInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComputeInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComputeInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListFleets': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListFleets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFleetsInput }
            output: ListFleetsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListFleets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFleetsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListFleets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFleetsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListFleets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFleetsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListFleets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListFleetsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListGameServerGroups': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServerGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServerGroupsInput }
            output: ListGameServerGroupsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServerGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServerGroupsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServerGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServerGroupsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServerGroups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServerGroupsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListGameServers': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServersInput }
            output: ListGameServersOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServersInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServersInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListGameServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListGameServersInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListLocations': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsInput }
            output: ListLocationsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListScripts': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListScripts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListScriptsInput }
            output: ListScriptsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListScripts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListScriptsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListScripts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListScriptsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.ListScripts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListScriptsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ListTagsForResource'
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
              header: {
                'X-Amz-Target': 'GameLift.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ListTagsForResource'
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
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.PutScalingPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.PutScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutScalingPolicyInput }
            output: PutScalingPolicyOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.PutScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutScalingPolicyInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.PutScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutScalingPolicyInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.PutScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutScalingPolicyInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.PutScalingPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutScalingPolicyInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.RegisterCompute': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterComputeInput }
            output: RegisterComputeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterComputeInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterComputeInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterComputeInput }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterCompute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterComputeInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.RegisterGameServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: RegisterGameServerOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RegisterGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RegisterGameServerInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.RequestUploadCredentials': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RequestUploadCredentials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RequestUploadCredentialsInput }
            output: RequestUploadCredentialsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RequestUploadCredentials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RequestUploadCredentialsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RequestUploadCredentials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RequestUploadCredentialsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RequestUploadCredentials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RequestUploadCredentialsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.RequestUploadCredentials'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RequestUploadCredentialsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ResolveAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: ResolveAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResolveAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResolveAliasInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ResumeGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResumeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResumeGameServerGroupInput }
            output: ResumeGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResumeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResumeGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResumeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResumeGameServerGroupInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResumeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResumeGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ResumeGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ResumeGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.SearchGameSessions': {
      $post:
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: SearchGameSessionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: TerminalRoutingStrategyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
              header: {
                'X-Amz-Target': 'GameLift.SearchGameSessions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SearchGameSessionsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StartFleetActions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: StartFleetActionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartFleetActionsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StartGameSessionPlacement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartGameSessionPlacementInput }
            output: StartGameSessionPlacementOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartGameSessionPlacementInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartGameSessionPlacementInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartGameSessionPlacementInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartGameSessionPlacementInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StartMatchBackfill': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchBackfill'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchBackfillInput }
            output: StartMatchBackfillOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchBackfill'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchBackfillInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchBackfill'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchBackfillInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchBackfill'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchBackfillInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchBackfill'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchBackfillInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StartMatchmaking': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchmakingInput }
            output: StartMatchmakingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchmakingInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchmakingInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchmakingInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StartMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMatchmakingInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StopFleetActions': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: StopFleetActionsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopFleetActions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopFleetActionsInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StopGameSessionPlacement': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopGameSessionPlacementInput }
            output: StopGameSessionPlacementOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopGameSessionPlacementInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopGameSessionPlacementInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopGameSessionPlacementInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopGameSessionPlacement'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopGameSessionPlacementInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.StopMatchmaking': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMatchmakingInput }
            output: StopMatchmakingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMatchmakingInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMatchmakingInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMatchmakingInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.StopMatchmaking'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StopMatchmakingInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.SuspendGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.SuspendGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SuspendGameServerGroupInput }
            output: SuspendGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.SuspendGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SuspendGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.SuspendGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SuspendGameServerGroupInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.SuspendGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SuspendGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.SuspendGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: SuspendGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.TagResource'
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
                'X-Amz-Target': 'GameLift.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.TagResource'
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
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UntagResource'
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
                'X-Amz-Target': 'GameLift.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UntagResource'
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
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: TaggingFailedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateAlias': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAliasInput }
            output: UpdateAliasOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAliasInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAliasInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAliasInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateAlias'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAliasInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateBuild': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBuildInput }
            output: UpdateBuildOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBuildInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBuildInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBuildInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateBuild'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateBuildInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateFleetAttributes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: UpdateFleetAttributesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetAttributesInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateFleetCapacity': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: UpdateFleetCapacityOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetCapacity'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetCapacityInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateFleetPortSettings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: UpdateFleetPortSettingsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateFleetPortSettings'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateFleetPortSettingsInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateGameServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerInput }
            output: UpdateGameServerOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateGameServerGroup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerGroupInput }
            output: UpdateGameServerGroupOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerGroupInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerGroupInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerGroupInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameServerGroup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameServerGroupInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateGameSession': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: UpdateGameSessionOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: InvalidGameSessionStatusException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSession'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateGameSessionQueue': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionQueueInput }
            output: UpdateGameSessionQueueOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionQueueInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionQueueInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionQueueInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateGameSessionQueue'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateGameSessionQueueInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMatchmakingConfigurationInput }
            output: UpdateMatchmakingConfigurationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMatchmakingConfigurationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMatchmakingConfigurationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMatchmakingConfigurationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateMatchmakingConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateMatchmakingConfigurationInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateRuntimeConfiguration': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: UpdateRuntimeConfigurationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateRuntimeConfiguration'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateRuntimeConfigurationInput }
            output: InvalidFleetStatusException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.UpdateScript': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScriptInput }
            output: UpdateScriptOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScriptInput }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScriptInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScriptInput }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.UpdateScript'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScriptInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ValidateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateMatchmakingRuleSetInput }
            output: ValidateMatchmakingRuleSetOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ValidateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateMatchmakingRuleSetInput }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ValidateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateMatchmakingRuleSetInput }
            output: UnsupportedRegionException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'GameLift.ValidateMatchmakingRuleSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ValidateMatchmakingRuleSetInput }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
