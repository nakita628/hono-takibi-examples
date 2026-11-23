type ActivateOrganizationsAccessOutput = { [x: string]: unknown }
type ActivateOrganizationsAccessInput = { [x: string]: unknown }
type ActivateTypeOutput = { Arn?: {} | undefined }
type ActivateTypeInput = {
  Type?: {} | undefined
  PublicTypeArn?: {} | undefined
  PublisherId?: {} | undefined
  TypeName?: {} | undefined
  TypeNameAlias?: {} | undefined
  AutoUpdate?: {} | undefined
  LoggingConfig?: { LogRoleArn: {}; LogGroupName: {} } | undefined
  ExecutionRoleArn?: {} | undefined
  VersionBump?: {} | undefined
  MajorVersion?: {} | undefined
}
type TypeConfigurationIdentifier = {
  TypeArn?: {} | undefined
  TypeConfigurationAlias?: {} | undefined
  TypeConfigurationArn?: {} | undefined
  Type?: {} | undefined
  TypeName?: {} | undefined
}
type BatchDescribeTypeConfigurationsOutput = {
  Errors?: {} | undefined
  UnprocessedTypeConfigurations?: {} | undefined
  TypeConfigurations?: {} | undefined
}
type BatchDescribeTypeConfigurationsInput = { TypeConfigurationIdentifiers: {} }
type CancelUpdateStackInput = { StackName: {}; ClientRequestToken?: {} | undefined }
type ResourceToSkip = string
type ContinueUpdateRollbackOutput = { [x: string]: unknown }
type ContinueUpdateRollbackInput = {
  StackName: {}
  RoleARN?: {} | undefined
  ResourcesToSkip?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type Parameter = {
  ParameterKey?: {} | undefined
  ParameterValue?: {} | undefined
  UsePreviousValue?: {} | undefined
  ResolvedValue?: {} | undefined
}
type Capability = 'CAPABILITY_IAM' | 'CAPABILITY_NAMED_IAM' | 'CAPABILITY_AUTO_EXPAND'
type ResourceType = string
type NotificationARN = string
type Tag = { Key: {}; Value: {} }
type ResourceToImport = { ResourceType: {}; LogicalResourceId: {}; ResourceIdentifier: {} }
type CreateChangeSetOutput = { Id?: {} | undefined; StackId?: {} | undefined }
type CreateChangeSetInput = {
  StackName: {}
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  UsePreviousTemplate?: {} | undefined
  Parameters?: {} | undefined
  Capabilities?: {} | undefined
  ResourceTypes?: {} | undefined
  RoleARN?: {} | undefined
  RollbackConfiguration?:
    | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
    | undefined
  NotificationARNs?: {} | undefined
  Tags?: {} | undefined
  ChangeSetName: {}
  ClientToken?: {} | undefined
  Description?: {} | undefined
  ChangeSetType?: {} | undefined
  ResourcesToImport?: {} | undefined
  IncludeNestedStacks?: {} | undefined
  OnStackFailure?: {} | undefined
}
type CreateStackOutput = { StackId?: {} | undefined }
type CreateStackInput = {
  StackName: {}
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  Parameters?: {} | undefined
  DisableRollback?: {} | undefined
  RollbackConfiguration?:
    | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
    | undefined
  TimeoutInMinutes?: {} | undefined
  NotificationARNs?: {} | undefined
  Capabilities?: {} | undefined
  ResourceTypes?: {} | undefined
  RoleARN?: {} | undefined
  OnFailure?: {} | undefined
  StackPolicyBody?: {} | undefined
  StackPolicyURL?: {} | undefined
  Tags?: {} | undefined
  ClientRequestToken?: {} | undefined
  EnableTerminationProtection?: {} | undefined
  RetainExceptOnCreate?: {} | undefined
}
type Account = string
type Region = string
type CreateStackInstancesOutput = { OperationId?: {} | undefined }
type CreateStackInstancesInput = {
  StackSetName: {}
  Accounts?: {} | undefined
  DeploymentTargets?:
    | {
        Accounts?: {} | undefined
        AccountsUrl?: {} | undefined
        OrganizationalUnitIds?: {} | undefined
        AccountFilterType?: {} | undefined
      }
    | undefined
  Regions: {}
  ParameterOverrides?: {} | undefined
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  OperationId?: {} | undefined
  CallAs?: {} | undefined
}
type CreateStackSetOutput = { StackSetId?: {} | undefined }
type CreateStackSetInput = {
  StackSetName: {}
  Description?: {} | undefined
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  StackId?: {} | undefined
  Parameters?: {} | undefined
  Capabilities?: {} | undefined
  Tags?: {} | undefined
  AdministrationRoleARN?: {} | undefined
  ExecutionRoleName?: {} | undefined
  PermissionModel?: {} | undefined
  AutoDeployment?:
    | { Enabled?: {} | undefined; RetainStacksOnAccountRemoval?: {} | undefined }
    | undefined
  CallAs?: {} | undefined
  ClientRequestToken?: {} | undefined
  ManagedExecution?: { Active?: {} | undefined } | undefined
}
type DeactivateOrganizationsAccessOutput = { [x: string]: unknown }
type DeactivateOrganizationsAccessInput = { [x: string]: unknown }
type DeactivateTypeOutput = { [x: string]: unknown }
type DeactivateTypeInput = {
  TypeName?: {} | undefined
  Type?: {} | undefined
  Arn?: {} | undefined
}
type DeleteChangeSetOutput = { [x: string]: unknown }
type DeleteChangeSetInput = { ChangeSetName: {}; StackName?: {} | undefined }
type LogicalResourceId = string
type DeleteStackInput = {
  StackName: {}
  RetainResources?: {} | undefined
  RoleARN?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type DeleteStackInstancesOutput = { OperationId?: {} | undefined }
type DeleteStackInstancesInput = {
  StackSetName: {}
  Accounts?: {} | undefined
  DeploymentTargets?:
    | {
        Accounts?: {} | undefined
        AccountsUrl?: {} | undefined
        OrganizationalUnitIds?: {} | undefined
        AccountFilterType?: {} | undefined
      }
    | undefined
  Regions: {}
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  RetainStacks: {}
  OperationId?: {} | undefined
  CallAs?: {} | undefined
}
type DeleteStackSetOutput = { [x: string]: unknown }
type DeleteStackSetInput = { StackSetName: {}; CallAs?: {} | undefined }
type DeregisterTypeOutput = { [x: string]: unknown }
type DeregisterTypeInput = {
  Arn?: {} | undefined
  Type?: {} | undefined
  TypeName?: {} | undefined
  VersionId?: {} | undefined
}
type DescribeAccountLimitsOutput = { AccountLimits?: {} | undefined; NextToken?: {} | undefined }
type DescribeAccountLimitsInput = { NextToken?: {} | undefined }
type DescribeChangeSetOutput = {
  ChangeSetName?: {} | undefined
  ChangeSetId?: {} | undefined
  StackId?: {} | undefined
  StackName?: {} | undefined
  Description?: {} | undefined
  Parameters?: {} | undefined
  CreationTime?: {} | undefined
  ExecutionStatus?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  NotificationARNs?: {} | undefined
  RollbackConfiguration?:
    | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
    | undefined
  Capabilities?: {} | undefined
  Tags?: {} | undefined
  Changes?: {} | undefined
  NextToken?: {} | undefined
  IncludeNestedStacks?: {} | undefined
  ParentChangeSetId?: {} | undefined
  RootChangeSetId?: {} | undefined
  OnStackFailure?: {} | undefined
}
type DescribeChangeSetInput = {
  ChangeSetName: {}
  StackName?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeChangeSetHooksOutput = {
  ChangeSetId?: {} | undefined
  ChangeSetName?: {} | undefined
  Hooks?: {} | undefined
  Status?: {} | undefined
  NextToken?: {} | undefined
  StackId?: {} | undefined
  StackName?: {} | undefined
}
type DescribeChangeSetHooksInput = {
  ChangeSetName: {}
  StackName?: {} | undefined
  NextToken?: {} | undefined
  LogicalResourceId?: {} | undefined
}
type DescribeOrganizationsAccessOutput = { Status?: {} | undefined }
type DescribeOrganizationsAccessInput = { CallAs?: {} | undefined }
type DescribePublisherOutput = {
  PublisherId?: {} | undefined
  PublisherStatus?: {} | undefined
  IdentityProvider?: {} | undefined
  PublisherProfile?: {} | undefined
}
type DescribePublisherInput = { PublisherId?: {} | undefined }
type DescribeStackDriftDetectionStatusOutput = {
  StackId: {}
  StackDriftDetectionId: {}
  StackDriftStatus?: {} | undefined
  DetectionStatus: {}
  DetectionStatusReason?: {} | undefined
  DriftedStackResourceCount?: {} | undefined
  Timestamp: {}
}
type DescribeStackDriftDetectionStatusInput = { StackDriftDetectionId: {} }
type DescribeStackEventsOutput = { StackEvents?: {} | undefined; NextToken?: {} | undefined }
type DescribeStackEventsInput = { StackName?: {} | undefined; NextToken?: {} | undefined }
type DescribeStackInstanceOutput = {
  StackInstance?:
    | {
        StackSetId?: {} | undefined
        Region?: {} | undefined
        Account?: {} | undefined
        StackId?: {} | undefined
        ParameterOverrides?: {} | undefined
        Status?: {} | undefined
        StackInstanceStatus?: { DetailedStatus?: {} | undefined } | undefined
        StatusReason?: {} | undefined
        OrganizationalUnitId?: {} | undefined
        DriftStatus?: {} | undefined
        LastDriftCheckTimestamp?: {} | undefined
        LastOperationId?: {} | undefined
      }
    | undefined
}
type DescribeStackInstanceInput = {
  StackSetName: {}
  StackInstanceAccount: {}
  StackInstanceRegion: {}
  CallAs?: {} | undefined
}
type DescribeStackResourceOutput = {
  StackResourceDetail?:
    | {
        StackName?: {} | undefined
        StackId?: {} | undefined
        LogicalResourceId: {}
        PhysicalResourceId?: {} | undefined
        ResourceType: {}
        LastUpdatedTimestamp: {}
        ResourceStatus: {}
        ResourceStatusReason?: {} | undefined
        Description?: {} | undefined
        Metadata?: {} | undefined
        DriftInformation?:
          | { StackResourceDriftStatus: {}; LastCheckTimestamp?: {} | undefined }
          | undefined
        ModuleInfo?:
          | { TypeHierarchy?: {} | undefined; LogicalIdHierarchy?: {} | undefined }
          | undefined
      }
    | undefined
}
type DescribeStackResourceInput = { StackName: {}; LogicalResourceId: {} }
type StackResourceDriftStatus = 'IN_SYNC' | 'MODIFIED' | 'DELETED' | 'NOT_CHECKED'
type DescribeStackResourceDriftsOutput = { StackResourceDrifts: {}; NextToken?: {} | undefined }
type DescribeStackResourceDriftsInput = {
  StackName: {}
  StackResourceDriftStatusFilters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeStackResourcesOutput = { StackResources?: {} | undefined }
type DescribeStackResourcesInput = {
  StackName?: {} | undefined
  LogicalResourceId?: {} | undefined
  PhysicalResourceId?: {} | undefined
}
type DescribeStackSetOutput = {
  StackSet?:
    | {
        StackSetName?: {} | undefined
        StackSetId?: {} | undefined
        Description?: {} | undefined
        Status?: {} | undefined
        TemplateBody?: {} | undefined
        Parameters?: {} | undefined
        Capabilities?: {} | undefined
        Tags?: {} | undefined
        StackSetARN?: {} | undefined
        AdministrationRoleARN?: {} | undefined
        ExecutionRoleName?: {} | undefined
        StackSetDriftDetectionDetails?:
          | {
              DriftStatus?: {} | undefined
              DriftDetectionStatus?: {} | undefined
              LastDriftCheckTimestamp?: {} | undefined
              TotalStackInstancesCount?: {} | undefined
              DriftedStackInstancesCount?: {} | undefined
              InSyncStackInstancesCount?: {} | undefined
              InProgressStackInstancesCount?: {} | undefined
              FailedStackInstancesCount?: {} | undefined
            }
          | undefined
        AutoDeployment?:
          | { Enabled?: {} | undefined; RetainStacksOnAccountRemoval?: {} | undefined }
          | undefined
        PermissionModel?: {} | undefined
        OrganizationalUnitIds?: {} | undefined
        ManagedExecution?: { Active?: {} | undefined } | undefined
        Regions?: {} | undefined
      }
    | undefined
}
type DescribeStackSetInput = { StackSetName: {}; CallAs?: {} | undefined }
type DescribeStackSetOperationOutput = {
  StackSetOperation?:
    | {
        OperationId?: {} | undefined
        StackSetId?: {} | undefined
        Action?: {} | undefined
        Status?: {} | undefined
        OperationPreferences?:
          | {
              RegionConcurrencyType?: {} | undefined
              RegionOrder?: {} | undefined
              FailureToleranceCount?: {} | undefined
              FailureTolerancePercentage?: {} | undefined
              MaxConcurrentCount?: {} | undefined
              MaxConcurrentPercentage?: {} | undefined
            }
          | undefined
        RetainStacks?: {} | undefined
        AdministrationRoleARN?: {} | undefined
        ExecutionRoleName?: {} | undefined
        CreationTimestamp?: {} | undefined
        EndTimestamp?: {} | undefined
        DeploymentTargets?:
          | {
              Accounts?: {} | undefined
              AccountsUrl?: {} | undefined
              OrganizationalUnitIds?: {} | undefined
              AccountFilterType?: {} | undefined
            }
          | undefined
        StackSetDriftDetectionDetails?:
          | {
              DriftStatus?: {} | undefined
              DriftDetectionStatus?: {} | undefined
              LastDriftCheckTimestamp?: {} | undefined
              TotalStackInstancesCount?: {} | undefined
              DriftedStackInstancesCount?: {} | undefined
              InSyncStackInstancesCount?: {} | undefined
              InProgressStackInstancesCount?: {} | undefined
              FailedStackInstancesCount?: {} | undefined
            }
          | undefined
        StatusReason?: {} | undefined
        StatusDetails?: { FailedStackInstancesCount?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeStackSetOperationInput = { StackSetName: {}; OperationId: {}; CallAs?: {} | undefined }
type DescribeStacksOutput = { Stacks?: {} | undefined; NextToken?: {} | undefined }
type DescribeStacksInput = { StackName?: {} | undefined; NextToken?: {} | undefined }
type DescribeTypeOutput = {
  Arn?: {} | undefined
  Type?: {} | undefined
  TypeName?: {} | undefined
  DefaultVersionId?: {} | undefined
  IsDefaultVersion?: {} | undefined
  TypeTestsStatus?: {} | undefined
  TypeTestsStatusDescription?: {} | undefined
  Description?: {} | undefined
  Schema?: {} | undefined
  ProvisioningType?: {} | undefined
  DeprecatedStatus?: {} | undefined
  LoggingConfig?: { LogRoleArn: {}; LogGroupName: {} } | undefined
  RequiredActivatedTypes?: {} | undefined
  ExecutionRoleArn?: {} | undefined
  Visibility?: {} | undefined
  SourceUrl?: {} | undefined
  DocumentationUrl?: {} | undefined
  LastUpdated?: {} | undefined
  TimeCreated?: {} | undefined
  ConfigurationSchema?: {} | undefined
  PublisherId?: {} | undefined
  OriginalTypeName?: {} | undefined
  OriginalTypeArn?: {} | undefined
  PublicVersionNumber?: {} | undefined
  LatestPublicVersion?: {} | undefined
  IsActivated?: {} | undefined
  AutoUpdate?: {} | undefined
}
type DescribeTypeInput = {
  Type?: {} | undefined
  TypeName?: {} | undefined
  Arn?: {} | undefined
  VersionId?: {} | undefined
  PublisherId?: {} | undefined
  PublicVersionNumber?: {} | undefined
}
type DescribeTypeRegistrationOutput = {
  ProgressStatus?: {} | undefined
  Description?: {} | undefined
  TypeArn?: {} | undefined
  TypeVersionArn?: {} | undefined
}
type DescribeTypeRegistrationInput = { RegistrationToken: {} }
type DetectStackDriftOutput = { StackDriftDetectionId: {} }
type DetectStackDriftInput = { StackName: {}; LogicalResourceIds?: {} | undefined }
type DetectStackResourceDriftOutput = {
  StackResourceDrift: {
    StackId: {}
    LogicalResourceId: {}
    PhysicalResourceId?: {} | undefined
    PhysicalResourceIdContext?: {} | undefined
    ResourceType: {}
    ExpectedProperties?: {} | undefined
    ActualProperties?: {} | undefined
    PropertyDifferences?: {} | undefined
    StackResourceDriftStatus: {}
    Timestamp: {}
    ModuleInfo?: { TypeHierarchy?: {} | undefined; LogicalIdHierarchy?: {} | undefined } | undefined
  }
}
type DetectStackResourceDriftInput = { StackName: {}; LogicalResourceId: {} }
type DetectStackSetDriftOutput = { OperationId?: {} | undefined }
type DetectStackSetDriftInput = {
  StackSetName: {}
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  OperationId?: {} | undefined
  CallAs?: {} | undefined
}
type EstimateTemplateCostOutput = { Url?: {} | undefined }
type EstimateTemplateCostInput = {
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  Parameters?: {} | undefined
}
type ExecuteChangeSetOutput = { [x: string]: unknown }
type ExecuteChangeSetInput = {
  ChangeSetName: {}
  StackName?: {} | undefined
  ClientRequestToken?: {} | undefined
  DisableRollback?: {} | undefined
  RetainExceptOnCreate?: {} | undefined
}
type GetStackPolicyOutput = { StackPolicyBody?: {} | undefined }
type GetStackPolicyInput = { StackName: {} }
type GetTemplateOutput = { TemplateBody?: {} | undefined; StagesAvailable?: {} | undefined }
type GetTemplateInput = {
  StackName?: {} | undefined
  ChangeSetName?: {} | undefined
  TemplateStage?: {} | undefined
}
type GetTemplateSummaryOutput = {
  Parameters?: {} | undefined
  Description?: {} | undefined
  Capabilities?: {} | undefined
  CapabilitiesReason?: {} | undefined
  ResourceTypes?: {} | undefined
  Version?: {} | undefined
  Metadata?: {} | undefined
  DeclaredTransforms?: {} | undefined
  ResourceIdentifierSummaries?: {} | undefined
  Warnings?: { UnrecognizedResourceTypes?: {} | undefined } | undefined
}
type GetTemplateSummaryInput = {
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  StackName?: {} | undefined
  StackSetName?: {} | undefined
  CallAs?: {} | undefined
  TemplateSummaryConfig?: { TreatUnrecognizedResourceTypesAsWarnings?: {} | undefined } | undefined
}
type StackId = string
type OrganizationalUnitId = string
type ImportStacksToStackSetOutput = { OperationId?: {} | undefined }
type ImportStacksToStackSetInput = {
  StackSetName: {}
  StackIds?: {} | undefined
  StackIdsUrl?: {} | undefined
  OrganizationalUnitIds?: {} | undefined
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  OperationId?: {} | undefined
  CallAs?: {} | undefined
}
type ListChangeSetsOutput = { Summaries?: {} | undefined; NextToken?: {} | undefined }
type ListChangeSetsInput = { StackName: {}; NextToken?: {} | undefined }
type ListExportsOutput = { Exports?: {} | undefined; NextToken?: {} | undefined }
type ListExportsInput = { NextToken?: {} | undefined }
type ListImportsOutput = { Imports?: {} | undefined; NextToken?: {} | undefined }
type ListImportsInput = { ExportName: {}; NextToken?: {} | undefined }
type ListStackInstanceResourceDriftsOutput = {
  Summaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListStackInstanceResourceDriftsInput = {
  StackSetName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StackInstanceResourceDriftStatuses?: {} | undefined
  StackInstanceAccount: {}
  StackInstanceRegion: {}
  OperationId: {}
  CallAs?: {} | undefined
}
type StackInstanceFilter = { Name?: {} | undefined; Values?: {} | undefined }
type ListStackInstancesOutput = { Summaries?: {} | undefined; NextToken?: {} | undefined }
type ListStackInstancesInput = {
  StackSetName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  StackInstanceAccount?: {} | undefined
  StackInstanceRegion?: {} | undefined
  CallAs?: {} | undefined
}
type ListStackResourcesOutput = {
  StackResourceSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListStackResourcesInput = { StackName: {}; NextToken?: {} | undefined }
type OperationResultFilter = { Name?: {} | undefined; Values?: {} | undefined }
type ListStackSetOperationResultsOutput = { Summaries?: {} | undefined; NextToken?: {} | undefined }
type ListStackSetOperationResultsInput = {
  StackSetName: {}
  OperationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CallAs?: {} | undefined
  Filters?: {} | undefined
}
type ListStackSetOperationsOutput = { Summaries?: {} | undefined; NextToken?: {} | undefined }
type ListStackSetOperationsInput = {
  StackSetName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  CallAs?: {} | undefined
}
type ListStackSetsOutput = { Summaries?: {} | undefined; NextToken?: {} | undefined }
type ListStackSetsInput = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Status?: {} | undefined
  CallAs?: {} | undefined
}
type StackStatus =
  | 'CREATE_IN_PROGRESS'
  | 'CREATE_FAILED'
  | 'CREATE_COMPLETE'
  | 'ROLLBACK_IN_PROGRESS'
  | 'ROLLBACK_FAILED'
  | 'ROLLBACK_COMPLETE'
  | 'DELETE_IN_PROGRESS'
  | 'DELETE_FAILED'
  | 'DELETE_COMPLETE'
  | 'UPDATE_IN_PROGRESS'
  | 'UPDATE_COMPLETE_CLEANUP_IN_PROGRESS'
  | 'UPDATE_COMPLETE'
  | 'UPDATE_FAILED'
  | 'UPDATE_ROLLBACK_IN_PROGRESS'
  | 'UPDATE_ROLLBACK_FAILED'
  | 'UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS'
  | 'UPDATE_ROLLBACK_COMPLETE'
  | 'REVIEW_IN_PROGRESS'
  | 'IMPORT_IN_PROGRESS'
  | 'IMPORT_COMPLETE'
  | 'IMPORT_ROLLBACK_IN_PROGRESS'
  | 'IMPORT_ROLLBACK_FAILED'
  | 'IMPORT_ROLLBACK_COMPLETE'
type ListStacksOutput = { StackSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListStacksInput = { NextToken?: {} | undefined; StackStatusFilter?: {} | undefined }
type ListTypeRegistrationsOutput = {
  RegistrationTokenList?: {} | undefined
  NextToken?: {} | undefined
}
type ListTypeRegistrationsInput = {
  Type?: {} | undefined
  TypeName?: {} | undefined
  TypeArn?: {} | undefined
  RegistrationStatusFilter?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTypeVersionsOutput = { TypeVersionSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListTypeVersionsInput = {
  Type?: {} | undefined
  TypeName?: {} | undefined
  Arn?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  DeprecatedStatus?: {} | undefined
  PublisherId?: {} | undefined
}
type ListTypesOutput = { TypeSummaries?: {} | undefined; NextToken?: {} | undefined }
type ListTypesInput = {
  Visibility?: {} | undefined
  ProvisioningType?: {} | undefined
  DeprecatedStatus?: {} | undefined
  Type?: {} | undefined
  Filters?:
    | { Category?: {} | undefined; PublisherId?: {} | undefined; TypeNamePrefix?: {} | undefined }
    | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type PublishTypeOutput = { PublicTypeArn?: {} | undefined }
type PublishTypeInput = {
  Type?: {} | undefined
  Arn?: {} | undefined
  TypeName?: {} | undefined
  PublicVersionNumber?: {} | undefined
}
type RecordHandlerProgressOutput = { [x: string]: unknown }
type RecordHandlerProgressInput = {
  BearerToken: {}
  OperationStatus: {}
  CurrentOperationStatus?: {} | undefined
  StatusMessage?: {} | undefined
  ErrorCode?: {} | undefined
  ResourceModel?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type RegisterPublisherOutput = { PublisherId?: {} | undefined }
type RegisterPublisherInput = {
  AcceptTermsAndConditions?: {} | undefined
  ConnectionArn?: {} | undefined
}
type RegisterTypeOutput = { RegistrationToken?: {} | undefined }
type RegisterTypeInput = {
  Type?: {} | undefined
  TypeName: {}
  SchemaHandlerPackage: {}
  LoggingConfig?: { LogRoleArn: {}; LogGroupName: {} } | undefined
  ExecutionRoleArn?: {} | undefined
  ClientRequestToken?: {} | undefined
}
type RollbackStackOutput = { StackId?: {} | undefined }
type RollbackStackInput = {
  StackName: {}
  RoleARN?: {} | undefined
  ClientRequestToken?: {} | undefined
  RetainExceptOnCreate?: {} | undefined
}
type SetStackPolicyInput = {
  StackName: {}
  StackPolicyBody?: {} | undefined
  StackPolicyURL?: {} | undefined
}
type SetTypeConfigurationOutput = { ConfigurationArn?: {} | undefined }
type SetTypeConfigurationInput = {
  TypeArn?: {} | undefined
  Configuration: {}
  ConfigurationAlias?: {} | undefined
  TypeName?: {} | undefined
  Type?: {} | undefined
}
type SetTypeDefaultVersionOutput = { [x: string]: unknown }
type SetTypeDefaultVersionInput = {
  Arn?: {} | undefined
  Type?: {} | undefined
  TypeName?: {} | undefined
  VersionId?: {} | undefined
}
type SignalResourceInput = { StackName: {}; LogicalResourceId: {}; UniqueId: {}; Status: {} }
type StopStackSetOperationOutput = { [x: string]: unknown }
type StopStackSetOperationInput = { StackSetName: {}; OperationId: {}; CallAs?: {} | undefined }
type TestTypeOutput = { TypeVersionArn?: {} | undefined }
type TestTypeInput = {
  Arn?: {} | undefined
  Type?: {} | undefined
  TypeName?: {} | undefined
  VersionId?: {} | undefined
  LogDeliveryBucket?: {} | undefined
}
type UpdateStackOutput = { StackId?: {} | undefined }
type UpdateStackInput = {
  StackName: {}
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  UsePreviousTemplate?: {} | undefined
  StackPolicyDuringUpdateBody?: {} | undefined
  StackPolicyDuringUpdateURL?: {} | undefined
  Parameters?: {} | undefined
  Capabilities?: {} | undefined
  ResourceTypes?: {} | undefined
  RoleARN?: {} | undefined
  RollbackConfiguration?:
    | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
    | undefined
  StackPolicyBody?: {} | undefined
  StackPolicyURL?: {} | undefined
  NotificationARNs?: {} | undefined
  Tags?: {} | undefined
  DisableRollback?: {} | undefined
  ClientRequestToken?: {} | undefined
  RetainExceptOnCreate?: {} | undefined
}
type UpdateStackInstancesOutput = { OperationId?: {} | undefined }
type UpdateStackInstancesInput = {
  StackSetName: {}
  Accounts?: {} | undefined
  DeploymentTargets?:
    | {
        Accounts?: {} | undefined
        AccountsUrl?: {} | undefined
        OrganizationalUnitIds?: {} | undefined
        AccountFilterType?: {} | undefined
      }
    | undefined
  Regions: {}
  ParameterOverrides?: {} | undefined
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  OperationId?: {} | undefined
  CallAs?: {} | undefined
}
type UpdateStackSetOutput = { OperationId?: {} | undefined }
type UpdateStackSetInput = {
  StackSetName: {}
  Description?: {} | undefined
  TemplateBody?: {} | undefined
  TemplateURL?: {} | undefined
  UsePreviousTemplate?: {} | undefined
  Parameters?: {} | undefined
  Capabilities?: {} | undefined
  Tags?: {} | undefined
  OperationPreferences?:
    | {
        RegionConcurrencyType?: {} | undefined
        RegionOrder?: {} | undefined
        FailureToleranceCount?: {} | undefined
        FailureTolerancePercentage?: {} | undefined
        MaxConcurrentCount?: {} | undefined
        MaxConcurrentPercentage?: {} | undefined
      }
    | undefined
  AdministrationRoleARN?: {} | undefined
  ExecutionRoleName?: {} | undefined
  DeploymentTargets?:
    | {
        Accounts?: {} | undefined
        AccountsUrl?: {} | undefined
        OrganizationalUnitIds?: {} | undefined
        AccountFilterType?: {} | undefined
      }
    | undefined
  PermissionModel?: {} | undefined
  AutoDeployment?:
    | { Enabled?: {} | undefined; RetainStacksOnAccountRemoval?: {} | undefined }
    | undefined
  OperationId?: {} | undefined
  Accounts?: {} | undefined
  Regions?: {} | undefined
  CallAs?: {} | undefined
  ManagedExecution?: { Active?: {} | undefined } | undefined
}
type UpdateTerminationProtectionOutput = { StackId?: {} | undefined }
type UpdateTerminationProtectionInput = { EnableTerminationProtection: {}; StackName: {} }
type ValidateTemplateOutput = {
  Parameters?: {} | undefined
  Description?: {} | undefined
  Capabilities?: {} | undefined
  CapabilitiesReason?: {} | undefined
  DeclaredTransforms?: {} | undefined
}
type ValidateTemplateInput = { TemplateBody?: {} | undefined; TemplateURL?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=ActivateOrganizationsAccess': {
      $get: {
        input: { query: { Action: 'ActivateOrganizationsAccess'; Version: '2010-05-15' } } & {
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
        output: ActivateOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ActivateOrganizationsAccess'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivateOrganizationsAccessInput }
        output: ActivateOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ActivateType': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            PublicTypeArn?: string | undefined
            PublisherId?: string | undefined
            TypeName?: string | undefined
            TypeNameAlias?: string | undefined
            AutoUpdate?: boolean | undefined
            LoggingConfig?: { LogRoleArn: {}; LogGroupName: {} } | undefined
            ExecutionRoleArn?: string | undefined
            VersionBump?: 'MAJOR' | 'MINOR' | undefined
            MajorVersion?: number | undefined
            Action: 'ActivateType'
            Version: '2010-05-15'
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
        output: ActivateTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ActivateType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivateTypeInput }
        output: ActivateTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=BatchDescribeTypeConfigurations': {
      $get: {
        input: {
          query: {
            TypeConfigurationIdentifiers: TypeConfigurationIdentifier[]
            Action: 'BatchDescribeTypeConfigurations'
            Version: '2010-05-15'
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
        output: BatchDescribeTypeConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'BatchDescribeTypeConfigurations'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDescribeTypeConfigurationsInput }
        output: BatchDescribeTypeConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CancelUpdateStack': {
      $get: {
        input: {
          query: {
            StackName: string
            ClientRequestToken?: string | undefined
            Action: 'CancelUpdateStack'
            Version: '2010-05-15'
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
        input: { query: { Action: 'CancelUpdateStack'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelUpdateStackInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=ContinueUpdateRollback': {
      $get: {
        input: {
          query: {
            StackName: string
            RoleARN?: string | undefined
            ResourcesToSkip?: ResourceToSkip[] | undefined
            ClientRequestToken?: string | undefined
            Action: 'ContinueUpdateRollback'
            Version: '2010-05-15'
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
        output: ContinueUpdateRollbackOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ContinueUpdateRollback'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ContinueUpdateRollbackInput }
        output: ContinueUpdateRollbackOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateChangeSet': {
      $get: {
        input: {
          query: {
            StackName: string
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            UsePreviousTemplate?: boolean | undefined
            Parameters?: Parameter[] | undefined
            Capabilities?: Capability[] | undefined
            ResourceTypes?: ResourceType[] | undefined
            RoleARN?: string | undefined
            RollbackConfiguration?:
              | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
              | undefined
            NotificationARNs?: NotificationARN[] | undefined
            Tags?: Tag[] | undefined
            ChangeSetName: string
            ClientToken?: string | undefined
            Description?: string | undefined
            ChangeSetType?: 'CREATE' | 'UPDATE' | 'IMPORT' | undefined
            ResourcesToImport?: ResourceToImport[] | undefined
            IncludeNestedStacks?: boolean | undefined
            OnStackFailure?: 'DO_NOTHING' | 'ROLLBACK' | 'DELETE' | undefined
            Action: 'CreateChangeSet'
            Version: '2010-05-15'
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
        output: CreateChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateChangeSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateChangeSetInput }
        output: CreateChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateStack': {
      $get: {
        input: {
          query: {
            StackName: string
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            Parameters?: Parameter[] | undefined
            DisableRollback?: boolean | undefined
            RollbackConfiguration?:
              | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
              | undefined
            TimeoutInMinutes?: number | undefined
            NotificationARNs?: NotificationARN[] | undefined
            Capabilities?: Capability[] | undefined
            ResourceTypes?: ResourceType[] | undefined
            RoleARN?: string | undefined
            OnFailure?: 'DO_NOTHING' | 'ROLLBACK' | 'DELETE' | undefined
            StackPolicyBody?: string | undefined
            StackPolicyURL?: string | undefined
            Tags?: Tag[] | undefined
            ClientRequestToken?: string | undefined
            EnableTerminationProtection?: boolean | undefined
            RetainExceptOnCreate?: boolean | undefined
            Action: 'CreateStack'
            Version: '2010-05-15'
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
        output: CreateStackOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateStack'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStackInput }
        output: CreateStackOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateStackInstances': {
      $get: {
        input: {
          query: {
            StackSetName: string
            Accounts?: Account[] | undefined
            DeploymentTargets?:
              | {
                  Accounts?: {} | undefined
                  AccountsUrl?: {} | undefined
                  OrganizationalUnitIds?: {} | undefined
                  AccountFilterType?: {} | undefined
                }
              | undefined
            Regions: Region[]
            ParameterOverrides?: Parameter[] | undefined
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            OperationId?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'CreateStackInstances'
            Version: '2010-05-15'
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
        output: CreateStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateStackInstances'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStackInstancesInput }
        output: CreateStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateStackSet': {
      $get: {
        input: {
          query: {
            StackSetName: string
            Description?: string | undefined
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            StackId?: string | undefined
            Parameters?: Parameter[] | undefined
            Capabilities?: Capability[] | undefined
            Tags?: Tag[] | undefined
            AdministrationRoleARN?: string | undefined
            ExecutionRoleName?: string | undefined
            PermissionModel?: 'SERVICE_MANAGED' | 'SELF_MANAGED' | undefined
            AutoDeployment?:
              | { Enabled?: {} | undefined; RetainStacksOnAccountRemoval?: {} | undefined }
              | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            ClientRequestToken?: string | undefined
            ManagedExecution?: { Active?: {} | undefined } | undefined
            Action: 'CreateStackSet'
            Version: '2010-05-15'
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
        output: CreateStackSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateStackSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStackSetInput }
        output: CreateStackSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeactivateOrganizationsAccess': {
      $get: {
        input: { query: { Action: 'DeactivateOrganizationsAccess'; Version: '2010-05-15' } } & {
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
        output: DeactivateOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeactivateOrganizationsAccess'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivateOrganizationsAccessInput }
        output: DeactivateOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeactivateType': {
      $get: {
        input: {
          query: {
            TypeName?: string | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            Arn?: string | undefined
            Action: 'DeactivateType'
            Version: '2010-05-15'
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
        output: DeactivateTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeactivateType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivateTypeInput }
        output: DeactivateTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteChangeSet': {
      $get: {
        input: {
          query: {
            ChangeSetName: string
            StackName?: string | undefined
            Action: 'DeleteChangeSet'
            Version: '2010-05-15'
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
        output: DeleteChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteChangeSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteChangeSetInput }
        output: DeleteChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteStack': {
      $get: {
        input: {
          query: {
            StackName: string
            RetainResources?: LogicalResourceId[] | undefined
            RoleARN?: string | undefined
            ClientRequestToken?: string | undefined
            Action: 'DeleteStack'
            Version: '2010-05-15'
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
        input: { query: { Action: 'DeleteStack'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStackInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteStackInstances': {
      $get: {
        input: {
          query: {
            StackSetName: string
            Accounts?: Account[] | undefined
            DeploymentTargets?:
              | {
                  Accounts?: {} | undefined
                  AccountsUrl?: {} | undefined
                  OrganizationalUnitIds?: {} | undefined
                  AccountFilterType?: {} | undefined
                }
              | undefined
            Regions: Region[]
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            RetainStacks: boolean
            OperationId?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DeleteStackInstances'
            Version: '2010-05-15'
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
        output: DeleteStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteStackInstances'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStackInstancesInput }
        output: DeleteStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteStackSet': {
      $get: {
        input: {
          query: {
            StackSetName: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DeleteStackSet'
            Version: '2010-05-15'
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
        output: DeleteStackSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteStackSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStackSetInput }
        output: DeleteStackSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeregisterType': {
      $get: {
        input: {
          query: {
            Arn?: string | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            VersionId?: string | undefined
            Action: 'DeregisterType'
            Version: '2010-05-15'
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
        output: DeregisterTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeregisterType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterTypeInput }
        output: DeregisterTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeAccountLimits': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            Action: 'DescribeAccountLimits'
            Version: '2010-05-15'
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
        output: DescribeAccountLimitsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            NextToken?: string | undefined
            Action: 'DescribeAccountLimits'
            Version: '2010-05-15'
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
        } & { json: DescribeAccountLimitsInput }
        output: DescribeAccountLimitsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeChangeSet': {
      $get: {
        input: {
          query: {
            ChangeSetName: string
            StackName?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeChangeSet'
            Version: '2010-05-15'
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
        output: DescribeChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeChangeSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeChangeSetInput }
        output: DescribeChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeChangeSetHooks': {
      $get: {
        input: {
          query: {
            ChangeSetName: string
            StackName?: string | undefined
            NextToken?: string | undefined
            LogicalResourceId?: string | undefined
            Action: 'DescribeChangeSetHooks'
            Version: '2010-05-15'
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
        output: DescribeChangeSetHooksOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeChangeSetHooks'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeChangeSetHooksInput }
        output: DescribeChangeSetHooksOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeOrganizationsAccess': {
      $get: {
        input: {
          query: {
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DescribeOrganizationsAccess'
            Version: '2010-05-15'
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
        output: DescribeOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeOrganizationsAccess'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOrganizationsAccessInput }
        output: DescribeOrganizationsAccessOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribePublisher': {
      $get: {
        input: {
          query: {
            PublisherId?: string | undefined
            Action: 'DescribePublisher'
            Version: '2010-05-15'
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
        output: DescribePublisherOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribePublisher'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePublisherInput }
        output: DescribePublisherOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackDriftDetectionStatus': {
      $get: {
        input: {
          query: {
            StackDriftDetectionId: string
            Action: 'DescribeStackDriftDetectionStatus'
            Version: '2010-05-15'
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
        output: DescribeStackDriftDetectionStatusOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackDriftDetectionStatus'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackDriftDetectionStatusInput }
        output: DescribeStackDriftDetectionStatusOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackEvents': {
      $get: {
        input: {
          query: {
            StackName?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeStackEvents'
            Version: '2010-05-15'
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
        output: DescribeStackEventsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            NextToken?: string | undefined
            Action: 'DescribeStackEvents'
            Version: '2010-05-15'
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
        } & { json: DescribeStackEventsInput }
        output: DescribeStackEventsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackInstance': {
      $get: {
        input: {
          query: {
            StackSetName: string
            StackInstanceAccount: string
            StackInstanceRegion: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DescribeStackInstance'
            Version: '2010-05-15'
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
        output: DescribeStackInstanceOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackInstance'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackInstanceInput }
        output: DescribeStackInstanceOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackResource': {
      $get: {
        input: {
          query: {
            StackName: string
            LogicalResourceId: string
            Action: 'DescribeStackResource'
            Version: '2010-05-15'
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
        output: DescribeStackResourceOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackResource'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackResourceInput }
        output: DescribeStackResourceOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackResourceDrifts': {
      $get: {
        input: {
          query: {
            StackName: string
            StackResourceDriftStatusFilters?: StackResourceDriftStatus[] | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Action: 'DescribeStackResourceDrifts'
            Version: '2010-05-15'
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
        output: DescribeStackResourceDriftsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeStackResourceDrifts'
            Version: '2010-05-15'
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
        } & { json: DescribeStackResourceDriftsInput }
        output: DescribeStackResourceDriftsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackResources': {
      $get: {
        input: {
          query: {
            StackName?: string | undefined
            LogicalResourceId?: string | undefined
            PhysicalResourceId?: string | undefined
            Action: 'DescribeStackResources'
            Version: '2010-05-15'
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
        output: DescribeStackResourcesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackResources'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackResourcesInput }
        output: DescribeStackResourcesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackSet': {
      $get: {
        input: {
          query: {
            StackSetName: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DescribeStackSet'
            Version: '2010-05-15'
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
        output: DescribeStackSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackSetInput }
        output: DescribeStackSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStackSetOperation': {
      $get: {
        input: {
          query: {
            StackSetName: string
            OperationId: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DescribeStackSetOperation'
            Version: '2010-05-15'
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
        output: DescribeStackSetOperationOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeStackSetOperation'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStackSetOperationInput }
        output: DescribeStackSetOperationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeStacks': {
      $get: {
        input: {
          query: {
            StackName?: string | undefined
            NextToken?: string | undefined
            Action: 'DescribeStacks'
            Version: '2010-05-15'
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
        output: DescribeStacksOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'DescribeStacks'; Version: '2010-05-15' }
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
        } & { json: DescribeStacksInput }
        output: DescribeStacksOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeType': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            Arn?: string | undefined
            VersionId?: string | undefined
            PublisherId?: string | undefined
            PublicVersionNumber?: string | undefined
            Action: 'DescribeType'
            Version: '2010-05-15'
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
        output: DescribeTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTypeInput }
        output: DescribeTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DescribeTypeRegistration': {
      $get: {
        input: {
          query: {
            RegistrationToken: string
            Action: 'DescribeTypeRegistration'
            Version: '2010-05-15'
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
        output: DescribeTypeRegistrationOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DescribeTypeRegistration'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTypeRegistrationInput }
        output: DescribeTypeRegistrationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetectStackDrift': {
      $get: {
        input: {
          query: {
            StackName: string
            LogicalResourceIds?: LogicalResourceId[] | undefined
            Action: 'DetectStackDrift'
            Version: '2010-05-15'
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
        output: DetectStackDriftOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetectStackDrift'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectStackDriftInput }
        output: DetectStackDriftOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetectStackResourceDrift': {
      $get: {
        input: {
          query: {
            StackName: string
            LogicalResourceId: string
            Action: 'DetectStackResourceDrift'
            Version: '2010-05-15'
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
        output: DetectStackResourceDriftOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetectStackResourceDrift'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectStackResourceDriftInput }
        output: DetectStackResourceDriftOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DetectStackSetDrift': {
      $get: {
        input: {
          query: {
            StackSetName: string
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            OperationId?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'DetectStackSetDrift'
            Version: '2010-05-15'
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
        output: DetectStackSetDriftOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DetectStackSetDrift'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetectStackSetDriftInput }
        output: DetectStackSetDriftOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=EstimateTemplateCost': {
      $get: {
        input: {
          query: {
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            Parameters?: Parameter[] | undefined
            Action: 'EstimateTemplateCost'
            Version: '2010-05-15'
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
        output: EstimateTemplateCostOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'EstimateTemplateCost'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EstimateTemplateCostInput }
        output: EstimateTemplateCostOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ExecuteChangeSet': {
      $get: {
        input: {
          query: {
            ChangeSetName: string
            StackName?: string | undefined
            ClientRequestToken?: string | undefined
            DisableRollback?: boolean | undefined
            RetainExceptOnCreate?: boolean | undefined
            Action: 'ExecuteChangeSet'
            Version: '2010-05-15'
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
        output: ExecuteChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ExecuteChangeSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteChangeSetInput }
        output: ExecuteChangeSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetStackPolicy': {
      $get: {
        input: { query: { StackName: string; Action: 'GetStackPolicy'; Version: '2010-05-15' } } & {
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
        output: GetStackPolicyOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetStackPolicy'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStackPolicyInput }
        output: GetStackPolicyOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetTemplate': {
      $get: {
        input: {
          query: {
            StackName?: string | undefined
            ChangeSetName?: string | undefined
            TemplateStage?: 'Original' | 'Processed' | undefined
            Action: 'GetTemplate'
            Version: '2010-05-15'
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
        output: GetTemplateOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetTemplate'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTemplateInput }
        output: GetTemplateOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetTemplateSummary': {
      $get: {
        input: {
          query: {
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            StackName?: string | undefined
            StackSetName?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            TemplateSummaryConfig?:
              | { TreatUnrecognizedResourceTypesAsWarnings?: {} | undefined }
              | undefined
            Action: 'GetTemplateSummary'
            Version: '2010-05-15'
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
        output: GetTemplateSummaryOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetTemplateSummary'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetTemplateSummaryInput }
        output: GetTemplateSummaryOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ImportStacksToStackSet': {
      $get: {
        input: {
          query: {
            StackSetName: string
            StackIds?: StackId[] | undefined
            StackIdsUrl?: string | undefined
            OrganizationalUnitIds?: OrganizationalUnitId[] | undefined
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            OperationId?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'ImportStacksToStackSet'
            Version: '2010-05-15'
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
        output: ImportStacksToStackSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ImportStacksToStackSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportStacksToStackSetInput }
        output: ImportStacksToStackSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListChangeSets': {
      $get: {
        input: {
          query: {
            StackName: string
            NextToken?: string | undefined
            Action: 'ListChangeSets'
            Version: '2010-05-15'
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
        output: ListChangeSetsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListChangeSets'; Version: '2010-05-15' }
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
        } & { json: ListChangeSetsInput }
        output: ListChangeSetsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListExports': {
      $get: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListExports'; Version: '2010-05-15' }
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
        output: ListExportsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListExports'; Version: '2010-05-15' }
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
        } & { json: ListExportsInput }
        output: ListExportsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListImports': {
      $get: {
        input: {
          query: {
            ExportName: string
            NextToken?: string | undefined
            Action: 'ListImports'
            Version: '2010-05-15'
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
        output: ListImportsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListImports'; Version: '2010-05-15' }
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
        } & { json: ListImportsInput }
        output: ListImportsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackInstanceResourceDrifts': {
      $get: {
        input: {
          query: {
            StackSetName: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
            StackInstanceResourceDriftStatuses?: StackResourceDriftStatus[] | undefined
            StackInstanceAccount: string
            StackInstanceRegion: string
            OperationId: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'ListStackInstanceResourceDrifts'
            Version: '2010-05-15'
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
        output: ListStackInstanceResourceDriftsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListStackInstanceResourceDrifts'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStackInstanceResourceDriftsInput }
        output: ListStackInstanceResourceDriftsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackInstances': {
      $get: {
        input: {
          query: {
            StackSetName: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Filters?: StackInstanceFilter[] | undefined
            StackInstanceAccount?: string | undefined
            StackInstanceRegion?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'ListStackInstances'
            Version: '2010-05-15'
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
        output: ListStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListStackInstances'
            Version: '2010-05-15'
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
        } & { json: ListStackInstancesInput }
        output: ListStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackResources': {
      $get: {
        input: {
          query: {
            StackName: string
            NextToken?: string | undefined
            Action: 'ListStackResources'
            Version: '2010-05-15'
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
        output: ListStackResourcesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            NextToken?: string | undefined
            Action: 'ListStackResources'
            Version: '2010-05-15'
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
        } & { json: ListStackResourcesInput }
        output: ListStackResourcesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackSetOperationResults': {
      $get: {
        input: {
          query: {
            StackSetName: string
            OperationId: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Filters?: OperationResultFilter[] | undefined
            Action: 'ListStackSetOperationResults'
            Version: '2010-05-15'
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
        output: ListStackSetOperationResultsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListStackSetOperationResults'
            Version: '2010-05-15'
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
        } & { json: ListStackSetOperationResultsInput }
        output: ListStackSetOperationResultsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackSetOperations': {
      $get: {
        input: {
          query: {
            StackSetName: string
            NextToken?: string | undefined
            MaxResults?: number | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'ListStackSetOperations'
            Version: '2010-05-15'
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
        output: ListStackSetOperationsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListStackSetOperations'
            Version: '2010-05-15'
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
        } & { json: ListStackSetOperationsInput }
        output: ListStackSetOperationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStackSets': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            Status?: 'ACTIVE' | 'DELETED' | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'ListStackSets'
            Version: '2010-05-15'
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
        output: ListStackSetsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListStackSets'
            Version: '2010-05-15'
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
        } & { json: ListStackSetsInput }
        output: ListStackSetsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListStacks': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            StackStatusFilter?: StackStatus[] | undefined
            Action: 'ListStacks'
            Version: '2010-05-15'
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
        output: ListStacksOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { NextToken?: string | undefined; Action: 'ListStacks'; Version: '2010-05-15' }
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
        } & { json: ListStacksInput }
        output: ListStacksOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTypeRegistrations': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            TypeArn?: string | undefined
            RegistrationStatusFilter?: 'COMPLETE' | 'IN_PROGRESS' | 'FAILED' | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            Action: 'ListTypeRegistrations'
            Version: '2010-05-15'
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
        output: ListTypeRegistrationsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListTypeRegistrations'
            Version: '2010-05-15'
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
        } & { json: ListTypeRegistrationsInput }
        output: ListTypeRegistrationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTypeVersions': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            Arn?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            DeprecatedStatus?: 'LIVE' | 'DEPRECATED' | undefined
            PublisherId?: string | undefined
            Action: 'ListTypeVersions'
            Version: '2010-05-15'
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
        output: ListTypeVersionsOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListTypeVersions'
            Version: '2010-05-15'
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
        } & { json: ListTypeVersionsInput }
        output: ListTypeVersionsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListTypes': {
      $get: {
        input: {
          query: {
            Visibility?: 'PUBLIC' | 'PRIVATE' | undefined
            ProvisioningType?: 'NON_PROVISIONABLE' | 'IMMUTABLE' | 'FULLY_MUTABLE' | undefined
            DeprecatedStatus?: 'LIVE' | 'DEPRECATED' | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            Filters?:
              | {
                  Category?: {} | undefined
                  PublisherId?: {} | undefined
                  TypeNamePrefix?: {} | undefined
                }
              | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            Action: 'ListTypes'
            Version: '2010-05-15'
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
        output: ListTypesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxResults?: string | undefined
            NextToken?: string | undefined
            Action: 'ListTypes'
            Version: '2010-05-15'
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
        } & { json: ListTypesInput }
        output: ListTypesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PublishType': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            Arn?: string | undefined
            TypeName?: string | undefined
            PublicVersionNumber?: string | undefined
            Action: 'PublishType'
            Version: '2010-05-15'
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
        output: PublishTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'PublishType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PublishTypeInput }
        output: PublishTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RecordHandlerProgress': {
      $get: {
        input: {
          query: {
            BearerToken: string
            OperationStatus: 'PENDING' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILED'
            CurrentOperationStatus?: 'PENDING' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILED' | undefined
            StatusMessage?: string | undefined
            ErrorCode?:
              | 'NotUpdatable'
              | 'InvalidRequest'
              | 'AccessDenied'
              | 'InvalidCredentials'
              | 'AlreadyExists'
              | 'NotFound'
              | 'ResourceConflict'
              | 'Throttling'
              | 'ServiceLimitExceeded'
              | 'NotStabilized'
              | 'GeneralServiceException'
              | 'ServiceInternalError'
              | 'NetworkFailure'
              | 'InternalFailure'
              | 'InvalidTypeConfiguration'
              | 'HandlerInternalFailure'
              | 'NonCompliant'
              | 'Unknown'
              | 'UnsupportedTarget'
              | undefined
            ResourceModel?: string | undefined
            ClientRequestToken?: string | undefined
            Action: 'RecordHandlerProgress'
            Version: '2010-05-15'
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
        output: RecordHandlerProgressOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RecordHandlerProgress'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RecordHandlerProgressInput }
        output: RecordHandlerProgressOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RegisterPublisher': {
      $get: {
        input: {
          query: {
            AcceptTermsAndConditions?: boolean | undefined
            ConnectionArn?: string | undefined
            Action: 'RegisterPublisher'
            Version: '2010-05-15'
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
        output: RegisterPublisherOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RegisterPublisher'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterPublisherInput }
        output: RegisterPublisherOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RegisterType': {
      $get: {
        input: {
          query: {
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName: string
            SchemaHandlerPackage: string
            LoggingConfig?: { LogRoleArn: {}; LogGroupName: {} } | undefined
            ExecutionRoleArn?: string | undefined
            ClientRequestToken?: string | undefined
            Action: 'RegisterType'
            Version: '2010-05-15'
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
        output: RegisterTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RegisterType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterTypeInput }
        output: RegisterTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=RollbackStack': {
      $get: {
        input: {
          query: {
            StackName: string
            RoleARN?: string | undefined
            ClientRequestToken?: string | undefined
            RetainExceptOnCreate?: boolean | undefined
            Action: 'RollbackStack'
            Version: '2010-05-15'
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
        output: RollbackStackOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'RollbackStack'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RollbackStackInput }
        output: RollbackStackOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetStackPolicy': {
      $get: {
        input: {
          query: {
            StackName: string
            StackPolicyBody?: string | undefined
            StackPolicyURL?: string | undefined
            Action: 'SetStackPolicy'
            Version: '2010-05-15'
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
        input: { query: { Action: 'SetStackPolicy'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetStackPolicyInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SetTypeConfiguration': {
      $get: {
        input: {
          query: {
            TypeArn?: string | undefined
            Configuration: string
            ConfigurationAlias?: string | undefined
            TypeName?: string | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            Action: 'SetTypeConfiguration'
            Version: '2010-05-15'
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
        output: SetTypeConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetTypeConfiguration'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetTypeConfigurationInput }
        output: SetTypeConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SetTypeDefaultVersion': {
      $get: {
        input: {
          query: {
            Arn?: string | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            VersionId?: string | undefined
            Action: 'SetTypeDefaultVersion'
            Version: '2010-05-15'
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
        output: SetTypeDefaultVersionOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'SetTypeDefaultVersion'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetTypeDefaultVersionInput }
        output: SetTypeDefaultVersionOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SignalResource': {
      $get: {
        input: {
          query: {
            StackName: string
            LogicalResourceId: string
            UniqueId: string
            Status: 'SUCCESS' | 'FAILURE'
            Action: 'SignalResource'
            Version: '2010-05-15'
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
        input: { query: { Action: 'SignalResource'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SignalResourceInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=StopStackSetOperation': {
      $get: {
        input: {
          query: {
            StackSetName: string
            OperationId: string
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'StopStackSetOperation'
            Version: '2010-05-15'
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
        output: StopStackSetOperationOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'StopStackSetOperation'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopStackSetOperationInput }
        output: StopStackSetOperationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=TestType': {
      $get: {
        input: {
          query: {
            Arn?: string | undefined
            Type?: 'RESOURCE' | 'MODULE' | 'HOOK' | undefined
            TypeName?: string | undefined
            VersionId?: string | undefined
            LogDeliveryBucket?: string | undefined
            Action: 'TestType'
            Version: '2010-05-15'
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
        output: TestTypeOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'TestType'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestTypeInput }
        output: TestTypeOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateStack': {
      $get: {
        input: {
          query: {
            StackName: string
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            UsePreviousTemplate?: boolean | undefined
            StackPolicyDuringUpdateBody?: string | undefined
            StackPolicyDuringUpdateURL?: string | undefined
            Parameters?: Parameter[] | undefined
            Capabilities?: Capability[] | undefined
            ResourceTypes?: ResourceType[] | undefined
            RoleARN?: string | undefined
            RollbackConfiguration?:
              | { RollbackTriggers?: {} | undefined; MonitoringTimeInMinutes?: {} | undefined }
              | undefined
            StackPolicyBody?: string | undefined
            StackPolicyURL?: string | undefined
            NotificationARNs?: NotificationARN[] | undefined
            Tags?: Tag[] | undefined
            DisableRollback?: boolean | undefined
            ClientRequestToken?: string | undefined
            RetainExceptOnCreate?: boolean | undefined
            Action: 'UpdateStack'
            Version: '2010-05-15'
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
        output: UpdateStackOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateStack'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStackInput }
        output: UpdateStackOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateStackInstances': {
      $get: {
        input: {
          query: {
            StackSetName: string
            Accounts?: Account[] | undefined
            DeploymentTargets?:
              | {
                  Accounts?: {} | undefined
                  AccountsUrl?: {} | undefined
                  OrganizationalUnitIds?: {} | undefined
                  AccountFilterType?: {} | undefined
                }
              | undefined
            Regions: Region[]
            ParameterOverrides?: Parameter[] | undefined
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            OperationId?: string | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            Action: 'UpdateStackInstances'
            Version: '2010-05-15'
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
        output: UpdateStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateStackInstances'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStackInstancesInput }
        output: UpdateStackInstancesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateStackSet': {
      $get: {
        input: {
          query: {
            StackSetName: string
            Description?: string | undefined
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            UsePreviousTemplate?: boolean | undefined
            Parameters?: Parameter[] | undefined
            Capabilities?: Capability[] | undefined
            Tags?: Tag[] | undefined
            OperationPreferences?:
              | {
                  RegionConcurrencyType?: {} | undefined
                  RegionOrder?: {} | undefined
                  FailureToleranceCount?: {} | undefined
                  FailureTolerancePercentage?: {} | undefined
                  MaxConcurrentCount?: {} | undefined
                  MaxConcurrentPercentage?: {} | undefined
                }
              | undefined
            AdministrationRoleARN?: string | undefined
            ExecutionRoleName?: string | undefined
            DeploymentTargets?:
              | {
                  Accounts?: {} | undefined
                  AccountsUrl?: {} | undefined
                  OrganizationalUnitIds?: {} | undefined
                  AccountFilterType?: {} | undefined
                }
              | undefined
            PermissionModel?: 'SERVICE_MANAGED' | 'SELF_MANAGED' | undefined
            AutoDeployment?:
              | { Enabled?: {} | undefined; RetainStacksOnAccountRemoval?: {} | undefined }
              | undefined
            OperationId?: string | undefined
            Accounts?: Account[] | undefined
            Regions?: Region[] | undefined
            CallAs?: 'SELF' | 'DELEGATED_ADMIN' | undefined
            ManagedExecution?: { Active?: {} | undefined } | undefined
            Action: 'UpdateStackSet'
            Version: '2010-05-15'
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
        output: UpdateStackSetOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateStackSet'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStackSetInput }
        output: UpdateStackSetOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateTerminationProtection': {
      $get: {
        input: {
          query: {
            EnableTerminationProtection: boolean
            StackName: string
            Action: 'UpdateTerminationProtection'
            Version: '2010-05-15'
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
        output: UpdateTerminationProtectionOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateTerminationProtection'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTerminationProtectionInput }
        output: UpdateTerminationProtectionOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ValidateTemplate': {
      $get: {
        input: {
          query: {
            TemplateBody?: string | undefined
            TemplateURL?: string | undefined
            Action: 'ValidateTemplate'
            Version: '2010-05-15'
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
        output: ValidateTemplateOutput
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ValidateTemplate'; Version: '2010-05-15' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ValidateTemplateInput }
        output: ValidateTemplateOutput
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
