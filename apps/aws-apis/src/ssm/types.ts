type AddTagsToResourceRequest = { ResourceType: {}; ResourceId: {}; Tags: {} }
type AddTagsToResourceResult = { [x: string]: unknown }
type AssociateOpsItemRelatedItemRequest = {
  OpsItemId: {}
  AssociationType: {}
  ResourceType: {}
  ResourceUri: {}
}
type AssociateOpsItemRelatedItemResponse = { AssociationId?: {} | undefined }
type CancelCommandRequest = { CommandId: {}; InstanceIds?: {} | undefined }
type CancelCommandResult = { [x: string]: unknown }
type CancelMaintenanceWindowExecutionRequest = { WindowExecutionId: {} }
type CancelMaintenanceWindowExecutionResult = { WindowExecutionId?: {} | undefined }
type CreateActivationRequest = {
  Description?: {} | undefined
  DefaultInstanceName?: {} | undefined
  IamRole: {}
  RegistrationLimit?: {} | undefined
  ExpirationDate?: {} | undefined
  Tags?: {} | undefined
  RegistrationMetadata?: {} | undefined
}
type CreateActivationResult = { ActivationId?: {} | undefined; ActivationCode?: {} | undefined }
type AlarmConfiguration = { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} }
type CreateAssociationRequest = {
  Name: {}
  DocumentVersion?: {} | undefined
  InstanceId?: {} | undefined
  Parameters?: {} | undefined
  Targets?: {} | undefined
  ScheduleExpression?: {} | undefined
  OutputLocation?:
    | {
        S3Location?:
          | {
              OutputS3Region?: {} | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
            }
          | undefined
      }
    | undefined
  AssociationName?: {} | undefined
  AutomationTargetParameterName?: {} | undefined
  MaxErrors?: {} | undefined
  MaxConcurrency?: {} | undefined
  ComplianceSeverity?: {} | undefined
  SyncCompliance?: {} | undefined
  ApplyOnlyAtCronInterval?: {} | undefined
  CalendarNames?: {} | undefined
  TargetLocations?: {} | undefined
  ScheduleOffset?: {} | undefined
  TargetMaps?: {} | undefined
  Tags?: {} | undefined
  AlarmConfiguration?: AlarmConfiguration | undefined
}
type CreateAssociationResult = {
  AssociationDescription?:
    | {
        Name?: {} | undefined
        InstanceId?: {} | undefined
        AssociationVersion?: {} | undefined
        Date?: {} | undefined
        LastUpdateAssociationDate?: {} | undefined
        Status?: { Date: {}; Name: {}; Message: {}; AdditionalInfo?: {} | undefined } | undefined
        Overview?:
          | {
              Status?: {} | undefined
              DetailedStatus?: {} | undefined
              AssociationStatusAggregatedCount?: {} | undefined
            }
          | undefined
        DocumentVersion?: {} | undefined
        AutomationTargetParameterName?: {} | undefined
        Parameters?: {} | undefined
        AssociationId?: {} | undefined
        Targets?: {} | undefined
        ScheduleExpression?: {} | undefined
        OutputLocation?:
          | {
              S3Location?:
                | {
                    OutputS3Region?: {} | undefined
                    OutputS3BucketName?: {} | undefined
                    OutputS3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LastExecutionDate?: {} | undefined
        LastSuccessfulExecutionDate?: {} | undefined
        AssociationName?: {} | undefined
        MaxErrors?: {} | undefined
        MaxConcurrency?: {} | undefined
        ComplianceSeverity?: {} | undefined
        SyncCompliance?: {} | undefined
        ApplyOnlyAtCronInterval?: {} | undefined
        CalendarNames?: {} | undefined
        TargetLocations?: {} | undefined
        ScheduleOffset?: {} | undefined
        TargetMaps?: {} | undefined
        AlarmConfiguration?: AlarmConfiguration | undefined
        TriggeredAlarms?: {} | undefined
      }
    | undefined
}
type CreateAssociationBatchRequest = { Entries: {} }
type CreateAssociationBatchResult = { Successful?: {} | undefined; Failed?: {} | undefined }
type CreateDocumentRequest = {
  Content: {}
  Requires?: {} | undefined
  Attachments?: {} | undefined
  Name: {}
  DisplayName?: {} | undefined
  VersionName?: {} | undefined
  DocumentType?: {} | undefined
  DocumentFormat?: {} | undefined
  TargetType?: {} | undefined
  Tags?: {} | undefined
}
type CreateDocumentResult = {
  DocumentDescription?:
    | {
        Sha1?: {} | undefined
        Hash?: {} | undefined
        HashType?: {} | undefined
        Name?: {} | undefined
        DisplayName?: {} | undefined
        VersionName?: {} | undefined
        Owner?: {} | undefined
        CreatedDate?: {} | undefined
        Status?: {} | undefined
        StatusInformation?: {} | undefined
        DocumentVersion?: {} | undefined
        Description?: {} | undefined
        Parameters?: {} | undefined
        PlatformTypes?: {} | undefined
        DocumentType?: {} | undefined
        SchemaVersion?: {} | undefined
        LatestVersion?: {} | undefined
        DefaultVersion?: {} | undefined
        DocumentFormat?: {} | undefined
        TargetType?: {} | undefined
        Tags?: {} | undefined
        AttachmentsInformation?: {} | undefined
        Requires?: {} | undefined
        Author?: {} | undefined
        ReviewInformation?: {} | undefined
        ApprovedVersion?: {} | undefined
        PendingReviewVersion?: {} | undefined
        ReviewStatus?: {} | undefined
        Category?: {} | undefined
        CategoryEnum?: {} | undefined
      }
    | undefined
}
type CreateMaintenanceWindowRequest = {
  Name: {}
  Description?: {} | undefined
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Schedule: {}
  ScheduleTimezone?: {} | undefined
  ScheduleOffset?: {} | undefined
  Duration: {}
  Cutoff: {}
  AllowUnassociatedTargets: {}
  ClientToken?: {} | undefined
  Tags?: {} | undefined
}
type CreateMaintenanceWindowResult = { WindowId?: {} | undefined }
type CreateOpsItemRequest = {
  Description: {}
  OpsItemType?: {} | undefined
  OperationalData?: {} | undefined
  Notifications?: {} | undefined
  Priority?: {} | undefined
  RelatedOpsItems?: {} | undefined
  Source: {}
  Title: {}
  Tags?: {} | undefined
  Category?: {} | undefined
  Severity?: {} | undefined
  ActualStartTime?: {} | undefined
  ActualEndTime?: {} | undefined
  PlannedStartTime?: {} | undefined
  PlannedEndTime?: {} | undefined
  AccountId?: {} | undefined
}
type CreateOpsItemResponse = { OpsItemId?: {} | undefined; OpsItemArn?: {} | undefined }
type CreateOpsMetadataRequest = { ResourceId: {}; Metadata?: {} | undefined; Tags?: {} | undefined }
type CreateOpsMetadataResult = { OpsMetadataArn?: {} | undefined }
type CreatePatchBaselineRequest = {
  OperatingSystem?: {} | undefined
  Name: {}
  GlobalFilters?: { PatchFilters: {} } | undefined
  ApprovalRules?: { PatchRules: {} } | undefined
  ApprovedPatches?: {} | undefined
  ApprovedPatchesComplianceLevel?: {} | undefined
  ApprovedPatchesEnableNonSecurity?: {} | undefined
  RejectedPatches?: {} | undefined
  RejectedPatchesAction?: {} | undefined
  Description?: {} | undefined
  Sources?: {} | undefined
  ClientToken?: {} | undefined
  Tags?: {} | undefined
}
type CreatePatchBaselineResult = { BaselineId?: {} | undefined }
type CreateResourceDataSyncRequest = {
  SyncName: {}
  S3Destination?:
    | {
        BucketName: {}
        Prefix?: {} | undefined
        SyncFormat: {}
        Region: {}
        AWSKMSKeyARN?: {} | undefined
        DestinationDataSharing?: { DestinationDataSharingType?: {} | undefined } | undefined
      }
    | undefined
  SyncType?: {} | undefined
  SyncSource?:
    | {
        SourceType: {}
        AwsOrganizationsSource?:
          | { OrganizationSourceType: {}; OrganizationalUnits?: {} | undefined }
          | undefined
        SourceRegions: {}
        IncludeFutureRegions?: {} | undefined
        EnableAllOpsDataSources?: {} | undefined
      }
    | undefined
}
type CreateResourceDataSyncResult = { [x: string]: unknown }
type DeleteActivationRequest = { ActivationId: {} }
type DeleteActivationResult = { [x: string]: unknown }
type DeleteAssociationRequest = {
  Name?: {} | undefined
  InstanceId?: {} | undefined
  AssociationId?: {} | undefined
}
type DeleteAssociationResult = { [x: string]: unknown }
type DeleteDocumentRequest = {
  Name: {}
  DocumentVersion?: {} | undefined
  VersionName?: {} | undefined
  Force?: {} | undefined
}
type DeleteDocumentResult = { [x: string]: unknown }
type DeleteInventoryRequest = {
  TypeName: {}
  SchemaDeleteOption?: {} | undefined
  DryRun?: {} | undefined
  ClientToken?: {} | undefined
}
type DeleteInventoryResult = {
  DeletionId?: {} | undefined
  TypeName?: {} | undefined
  DeletionSummary?:
    | {
        TotalCount?: {} | undefined
        RemainingCount?: {} | undefined
        SummaryItems?: {} | undefined
      }
    | undefined
}
type DeleteMaintenanceWindowRequest = { WindowId: {} }
type DeleteMaintenanceWindowResult = { WindowId?: {} | undefined }
type DeleteOpsMetadataRequest = { OpsMetadataArn: {} }
type DeleteOpsMetadataResult = { [x: string]: unknown }
type DeleteParameterRequest = { Name: {} }
type DeleteParameterResult = { [x: string]: unknown }
type DeleteParametersRequest = { Names: {} }
type DeleteParametersResult = {
  DeletedParameters?: {} | undefined
  InvalidParameters?: {} | undefined
}
type DeletePatchBaselineRequest = { BaselineId: {} }
type DeletePatchBaselineResult = { BaselineId?: {} | undefined }
type DeleteResourceDataSyncRequest = { SyncName: {}; SyncType?: {} | undefined }
type DeleteResourceDataSyncResult = { [x: string]: unknown }
type DeleteResourcePolicyRequest = { ResourceArn: {}; PolicyId: {}; PolicyHash: {} }
type DeleteResourcePolicyResponse = { [x: string]: unknown }
type DeregisterManagedInstanceRequest = { InstanceId: {} }
type DeregisterManagedInstanceResult = { [x: string]: unknown }
type DeregisterPatchBaselineForPatchGroupRequest = { BaselineId: {}; PatchGroup: {} }
type DeregisterPatchBaselineForPatchGroupResult = {
  BaselineId?: {} | undefined
  PatchGroup?: {} | undefined
}
type DeregisterTargetFromMaintenanceWindowRequest = {
  WindowId: {}
  WindowTargetId: {}
  Safe?: {} | undefined
}
type DeregisterTargetFromMaintenanceWindowResult = {
  WindowId?: {} | undefined
  WindowTargetId?: {} | undefined
}
type DeregisterTaskFromMaintenanceWindowRequest = { WindowId: {}; WindowTaskId: {} }
type DeregisterTaskFromMaintenanceWindowResult = {
  WindowId?: {} | undefined
  WindowTaskId?: {} | undefined
}
type DescribeActivationsRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeActivationsResult = { ActivationList?: {} | undefined; NextToken?: {} | undefined }
type DescribeAssociationRequest = {
  Name?: {} | undefined
  InstanceId?: {} | undefined
  AssociationId?: {} | undefined
  AssociationVersion?: {} | undefined
}
type DescribeAssociationResult = {
  AssociationDescription?:
    | {
        Name?: {} | undefined
        InstanceId?: {} | undefined
        AssociationVersion?: {} | undefined
        Date?: {} | undefined
        LastUpdateAssociationDate?: {} | undefined
        Status?: { Date: {}; Name: {}; Message: {}; AdditionalInfo?: {} | undefined } | undefined
        Overview?:
          | {
              Status?: {} | undefined
              DetailedStatus?: {} | undefined
              AssociationStatusAggregatedCount?: {} | undefined
            }
          | undefined
        DocumentVersion?: {} | undefined
        AutomationTargetParameterName?: {} | undefined
        Parameters?: {} | undefined
        AssociationId?: {} | undefined
        Targets?: {} | undefined
        ScheduleExpression?: {} | undefined
        OutputLocation?:
          | {
              S3Location?:
                | {
                    OutputS3Region?: {} | undefined
                    OutputS3BucketName?: {} | undefined
                    OutputS3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LastExecutionDate?: {} | undefined
        LastSuccessfulExecutionDate?: {} | undefined
        AssociationName?: {} | undefined
        MaxErrors?: {} | undefined
        MaxConcurrency?: {} | undefined
        ComplianceSeverity?: {} | undefined
        SyncCompliance?: {} | undefined
        ApplyOnlyAtCronInterval?: {} | undefined
        CalendarNames?: {} | undefined
        TargetLocations?: {} | undefined
        ScheduleOffset?: {} | undefined
        TargetMaps?: {} | undefined
        AlarmConfiguration?: AlarmConfiguration | undefined
        TriggeredAlarms?: {} | undefined
      }
    | undefined
}
type DescribeAssociationExecutionTargetsRequest = {
  AssociationId: {}
  ExecutionId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAssociationExecutionTargetsResult = {
  AssociationExecutionTargets?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAssociationExecutionsRequest = {
  AssociationId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAssociationExecutionsResult = {
  AssociationExecutions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAutomationExecutionsRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAutomationExecutionsResult = {
  AutomationExecutionMetadataList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAutomationStepExecutionsRequest = {
  AutomationExecutionId: {}
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  ReverseOrder?: {} | undefined
}
type DescribeAutomationStepExecutionsResult = {
  StepExecutions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAvailablePatchesRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeAvailablePatchesResult = { Patches?: {} | undefined; NextToken?: {} | undefined }
type DescribeDocumentRequest = {
  Name: {}
  DocumentVersion?: {} | undefined
  VersionName?: {} | undefined
}
type DescribeDocumentResult = {
  Document?:
    | {
        Sha1?: {} | undefined
        Hash?: {} | undefined
        HashType?: {} | undefined
        Name?: {} | undefined
        DisplayName?: {} | undefined
        VersionName?: {} | undefined
        Owner?: {} | undefined
        CreatedDate?: {} | undefined
        Status?: {} | undefined
        StatusInformation?: {} | undefined
        DocumentVersion?: {} | undefined
        Description?: {} | undefined
        Parameters?: {} | undefined
        PlatformTypes?: {} | undefined
        DocumentType?: {} | undefined
        SchemaVersion?: {} | undefined
        LatestVersion?: {} | undefined
        DefaultVersion?: {} | undefined
        DocumentFormat?: {} | undefined
        TargetType?: {} | undefined
        Tags?: {} | undefined
        AttachmentsInformation?: {} | undefined
        Requires?: {} | undefined
        Author?: {} | undefined
        ReviewInformation?: {} | undefined
        ApprovedVersion?: {} | undefined
        PendingReviewVersion?: {} | undefined
        ReviewStatus?: {} | undefined
        Category?: {} | undefined
        CategoryEnum?: {} | undefined
      }
    | undefined
}
type DescribeDocumentPermissionRequest = {
  Name: {}
  PermissionType: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeDocumentPermissionResponse = {
  AccountIds?: {} | undefined
  AccountSharingInfoList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEffectiveInstanceAssociationsRequest = {
  InstanceId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEffectiveInstanceAssociationsResult = {
  Associations?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEffectivePatchesForPatchBaselineRequest = {
  BaselineId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEffectivePatchesForPatchBaselineResult = {
  EffectivePatches?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstanceAssociationsStatusRequest = {
  InstanceId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstanceAssociationsStatusResult = {
  InstanceAssociationStatusInfos?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstanceInformationRequest = {
  InstanceInformationFilterList?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstanceInformationResult = {
  InstanceInformationList?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstancePatchStatesRequest = {
  InstanceIds: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeInstancePatchStatesResult = {
  InstancePatchStates?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstancePatchStatesForPatchGroupRequest = {
  PatchGroup: {}
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeInstancePatchStatesForPatchGroupResult = {
  InstancePatchStates?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeInstancePatchesRequest = {
  InstanceId: {}
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeInstancePatchesResult = { Patches?: {} | undefined; NextToken?: {} | undefined }
type DescribeInventoryDeletionsRequest = {
  DeletionId?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeInventoryDeletionsResult = {
  InventoryDeletions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionTaskInvocationsRequest = {
  WindowExecutionId: {}
  TaskId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionTaskInvocationsResult = {
  WindowExecutionTaskInvocationIdentities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionTasksRequest = {
  WindowExecutionId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionTasksResult = {
  WindowExecutionTaskIdentities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionsRequest = {
  WindowId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowExecutionsResult = {
  WindowExecutions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowScheduleRequest = {
  WindowId?: {} | undefined
  Targets?: {} | undefined
  ResourceType?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowScheduleResult = {
  ScheduledWindowExecutions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowTargetsRequest = {
  WindowId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowTargetsResult = {
  Targets?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowTasksRequest = {
  WindowId: {}
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowTasksResult = { Tasks?: {} | undefined; NextToken?: {} | undefined }
type DescribeMaintenanceWindowsRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowsResult = {
  WindowIdentities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowsForTargetRequest = {
  Targets: {}
  ResourceType: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeMaintenanceWindowsForTargetResult = {
  WindowIdentities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOpsItemsRequest = {
  OpsItemFilters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeOpsItemsResponse = { NextToken?: {} | undefined; OpsItemSummaries?: {} | undefined }
type DescribeParametersRequest = {
  Filters?: {} | undefined
  ParameterFilters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeParametersResult = { Parameters?: {} | undefined; NextToken?: {} | undefined }
type DescribePatchBaselinesRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePatchBaselinesResult = {
  BaselineIdentities?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePatchGroupStateRequest = { PatchGroup: {} }
type DescribePatchGroupStateResult = {
  Instances?: {} | undefined
  InstancesWithInstalledPatches?: {} | undefined
  InstancesWithInstalledOtherPatches?: {} | undefined
  InstancesWithInstalledPendingRebootPatches?: {} | undefined
  InstancesWithInstalledRejectedPatches?: {} | undefined
  InstancesWithMissingPatches?: {} | undefined
  InstancesWithFailedPatches?: {} | undefined
  InstancesWithNotApplicablePatches?: {} | undefined
  InstancesWithUnreportedNotApplicablePatches?: {} | undefined
  InstancesWithCriticalNonCompliantPatches?: {} | undefined
  InstancesWithSecurityNonCompliantPatches?: {} | undefined
  InstancesWithOtherNonCompliantPatches?: {} | undefined
}
type DescribePatchGroupsRequest = {
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePatchGroupsResult = { Mappings?: {} | undefined; NextToken?: {} | undefined }
type DescribePatchPropertiesRequest = {
  OperatingSystem: {}
  Property: {}
  PatchSet?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribePatchPropertiesResult = { Properties?: {} | undefined; NextToken?: {} | undefined }
type DescribeSessionsRequest = {
  State: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type DescribeSessionsResponse = { Sessions?: {} | undefined; NextToken?: {} | undefined }
type DisassociateOpsItemRelatedItemRequest = { OpsItemId: {}; AssociationId: {} }
type DisassociateOpsItemRelatedItemResponse = { [x: string]: unknown }
type GetAutomationExecutionRequest = { AutomationExecutionId: {} }
type GetAutomationExecutionResult = {
  AutomationExecution?:
    | {
        AutomationExecutionId?: {} | undefined
        DocumentName?: {} | undefined
        DocumentVersion?: {} | undefined
        ExecutionStartTime?: {} | undefined
        ExecutionEndTime?: {} | undefined
        AutomationExecutionStatus?: {} | undefined
        StepExecutions?: {} | undefined
        StepExecutionsTruncated?: {} | undefined
        Parameters?: {} | undefined
        Outputs?: {} | undefined
        FailureMessage?: {} | undefined
        Mode?: {} | undefined
        ParentAutomationExecutionId?: {} | undefined
        ExecutedBy?: {} | undefined
        CurrentStepName?: {} | undefined
        CurrentAction?: {} | undefined
        TargetParameterName?: {} | undefined
        Targets?: {} | undefined
        TargetMaps?: {} | undefined
        ResolvedTargets?:
          | { ParameterValues?: {} | undefined; Truncated?: {} | undefined }
          | undefined
        MaxConcurrency?: {} | undefined
        MaxErrors?: {} | undefined
        Target?: {} | undefined
        TargetLocations?: {} | undefined
        ProgressCounters?:
          | {
              TotalSteps?: {} | undefined
              SuccessSteps?: {} | undefined
              FailedSteps?: {} | undefined
              CancelledSteps?: {} | undefined
              TimedOutSteps?: {} | undefined
            }
          | undefined
        AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
        TriggeredAlarms?: {} | undefined
        AutomationSubtype?: {} | undefined
        ScheduledTime?: {} | undefined
        Runbooks?: {} | undefined
        OpsItemId?: {} | undefined
        AssociationId?: {} | undefined
        ChangeRequestName?: {} | undefined
      }
    | undefined
}
type GetCalendarStateRequest = { CalendarNames: {}; AtTime?: {} | undefined }
type GetCalendarStateResponse = {
  State?: {} | undefined
  AtTime?: {} | undefined
  NextTransitionTime?: {} | undefined
}
type GetCommandInvocationRequest = { CommandId: {}; InstanceId: {}; PluginName?: {} | undefined }
type GetCommandInvocationResult = {
  CommandId?: {} | undefined
  InstanceId?: {} | undefined
  Comment?: {} | undefined
  DocumentName?: {} | undefined
  DocumentVersion?: {} | undefined
  PluginName?: {} | undefined
  ResponseCode?: {} | undefined
  ExecutionStartDateTime?: {} | undefined
  ExecutionElapsedTime?: {} | undefined
  ExecutionEndDateTime?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  StandardOutputContent?: {} | undefined
  StandardOutputUrl?: {} | undefined
  StandardErrorContent?: {} | undefined
  StandardErrorUrl?: {} | undefined
  CloudWatchOutputConfig?:
    | { CloudWatchLogGroupName?: {} | undefined; CloudWatchOutputEnabled?: {} | undefined }
    | undefined
}
type GetConnectionStatusRequest = { Target: {} }
type GetConnectionStatusResponse = { Target?: {} | undefined; Status?: {} | undefined }
type GetDefaultPatchBaselineRequest = { OperatingSystem?: {} | undefined }
type GetDefaultPatchBaselineResult = {
  BaselineId?: {} | undefined
  OperatingSystem?: {} | undefined
}
type PatchFilterGroup = { PatchFilters: {} }
type PatchRuleGroup = { PatchRules: {} }
type GetDeployablePatchSnapshotForInstanceRequest = {
  InstanceId: {}
  SnapshotId: {}
  BaselineOverride?:
    | {
        OperatingSystem?: {} | undefined
        GlobalFilters?: PatchFilterGroup | undefined
        ApprovalRules?: PatchRuleGroup | undefined
        ApprovedPatches?: {} | undefined
        ApprovedPatchesComplianceLevel?: {} | undefined
        RejectedPatches?: {} | undefined
        RejectedPatchesAction?: {} | undefined
        ApprovedPatchesEnableNonSecurity?: {} | undefined
        Sources?: {} | undefined
      }
    | undefined
}
type GetDeployablePatchSnapshotForInstanceResult = {
  InstanceId?: {} | undefined
  SnapshotId?: {} | undefined
  SnapshotDownloadUrl?: {} | undefined
  Product?: {} | undefined
}
type GetDocumentRequest = {
  Name: {}
  VersionName?: {} | undefined
  DocumentVersion?: {} | undefined
  DocumentFormat?: {} | undefined
}
type GetDocumentResult = {
  Name?: {} | undefined
  CreatedDate?: {} | undefined
  DisplayName?: {} | undefined
  VersionName?: {} | undefined
  DocumentVersion?: {} | undefined
  Status?: {} | undefined
  StatusInformation?: {} | undefined
  Content?: {} | undefined
  DocumentType?: {} | undefined
  DocumentFormat?: {} | undefined
  Requires?: {} | undefined
  AttachmentsContent?: {} | undefined
  ReviewStatus?: {} | undefined
}
type GetInventoryRequest = {
  Filters?: {} | undefined
  Aggregators?: {} | undefined
  ResultAttributes?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetInventoryResult = { Entities?: {} | undefined; NextToken?: {} | undefined }
type GetInventorySchemaRequest = {
  TypeName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Aggregator?: {} | undefined
  SubType?: {} | undefined
}
type GetInventorySchemaResult = { Schemas?: {} | undefined; NextToken?: {} | undefined }
type GetMaintenanceWindowRequest = { WindowId: {} }
type GetMaintenanceWindowResult = {
  WindowId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Schedule?: {} | undefined
  ScheduleTimezone?: {} | undefined
  ScheduleOffset?: {} | undefined
  NextExecutionTime?: {} | undefined
  Duration?: {} | undefined
  Cutoff?: {} | undefined
  AllowUnassociatedTargets?: {} | undefined
  Enabled?: {} | undefined
  CreatedDate?: {} | undefined
  ModifiedDate?: {} | undefined
}
type GetMaintenanceWindowExecutionRequest = { WindowExecutionId: {} }
type GetMaintenanceWindowExecutionResult = {
  WindowExecutionId?: {} | undefined
  TaskIds?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
}
type GetMaintenanceWindowExecutionTaskRequest = { WindowExecutionId: {}; TaskId: {} }
type GetMaintenanceWindowExecutionTaskResult = {
  WindowExecutionId?: {} | undefined
  TaskExecutionId?: {} | undefined
  TaskArn?: {} | undefined
  ServiceRole?: {} | undefined
  Type?: {} | undefined
  TaskParameters?: {} | undefined
  Priority?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
  TriggeredAlarms?: {} | undefined
}
type GetMaintenanceWindowExecutionTaskInvocationRequest = {
  WindowExecutionId: {}
  TaskId: {}
  InvocationId: {}
}
type GetMaintenanceWindowExecutionTaskInvocationResult = {
  WindowExecutionId?: {} | undefined
  TaskExecutionId?: {} | undefined
  InvocationId?: {} | undefined
  ExecutionId?: {} | undefined
  TaskType?: {} | undefined
  Parameters?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  OwnerInformation?: {} | undefined
  WindowTargetId?: {} | undefined
}
type GetMaintenanceWindowTaskRequest = { WindowId: {}; WindowTaskId: {} }
type CloudWatchOutputConfig = {
  CloudWatchLogGroupName?: {} | undefined
  CloudWatchOutputEnabled?: {} | undefined
}
type GetMaintenanceWindowTaskResult = {
  WindowId?: {} | undefined
  WindowTaskId?: {} | undefined
  Targets?: {} | undefined
  TaskArn?: {} | undefined
  ServiceRoleArn?: {} | undefined
  TaskType?: {} | undefined
  TaskParameters?: {} | undefined
  TaskInvocationParameters?:
    | {
        RunCommand?:
          | {
              Comment?: {} | undefined
              CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined
              DocumentHash?: {} | undefined
              DocumentHashType?: {} | undefined
              DocumentVersion?: {} | undefined
              NotificationConfig?:
                | {
                    NotificationArn?: {} | undefined
                    NotificationEvents?: {} | undefined
                    NotificationType?: {} | undefined
                  }
                | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
              Parameters?: {} | undefined
              ServiceRoleArn?: {} | undefined
              TimeoutSeconds?: {} | undefined
            }
          | undefined
        Automation?: { DocumentVersion?: {} | undefined; Parameters?: {} | undefined } | undefined
        StepFunctions?: { Input?: {} | undefined; Name?: {} | undefined } | undefined
        Lambda?:
          | { ClientContext?: {} | undefined; Qualifier?: {} | undefined; Payload?: {} | undefined }
          | undefined
      }
    | undefined
  Priority?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  LoggingInfo?: { S3BucketName: {}; S3KeyPrefix?: {} | undefined; S3Region: {} } | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  CutoffBehavior?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type GetOpsItemRequest = { OpsItemId: {}; OpsItemArn?: {} | undefined }
type GetOpsItemResponse = {
  OpsItem?:
    | {
        CreatedBy?: {} | undefined
        OpsItemType?: {} | undefined
        CreatedTime?: {} | undefined
        Description?: {} | undefined
        LastModifiedBy?: {} | undefined
        LastModifiedTime?: {} | undefined
        Notifications?: {} | undefined
        Priority?: {} | undefined
        RelatedOpsItems?: {} | undefined
        Status?: {} | undefined
        OpsItemId?: {} | undefined
        Version?: {} | undefined
        Title?: {} | undefined
        Source?: {} | undefined
        OperationalData?: {} | undefined
        Category?: {} | undefined
        Severity?: {} | undefined
        ActualStartTime?: {} | undefined
        ActualEndTime?: {} | undefined
        PlannedStartTime?: {} | undefined
        PlannedEndTime?: {} | undefined
        OpsItemArn?: {} | undefined
      }
    | undefined
}
type GetOpsMetadataRequest = {
  OpsMetadataArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetOpsMetadataResult = {
  ResourceId?: {} | undefined
  Metadata?: {} | undefined
  NextToken?: {} | undefined
}
type GetOpsSummaryRequest = {
  SyncName?: {} | undefined
  Filters?: {} | undefined
  Aggregators?: {} | undefined
  ResultAttributes?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetOpsSummaryResult = { Entities?: {} | undefined; NextToken?: {} | undefined }
type GetParameterRequest = { Name: {}; WithDecryption?: {} | undefined }
type GetParameterResult = {
  Parameter?:
    | {
        Name?: {} | undefined
        Type?: {} | undefined
        Value?: {} | undefined
        Version?: {} | undefined
        Selector?: {} | undefined
        SourceResult?: {} | undefined
        LastModifiedDate?: {} | undefined
        ARN?: {} | undefined
        DataType?: {} | undefined
      }
    | undefined
}
type GetParameterHistoryRequest = {
  Name: {}
  WithDecryption?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetParameterHistoryResult = { Parameters?: {} | undefined; NextToken?: {} | undefined }
type GetParametersRequest = { Names: {}; WithDecryption?: {} | undefined }
type GetParametersResult = { Parameters?: {} | undefined; InvalidParameters?: {} | undefined }
type GetParametersByPathRequest = {
  Path: {}
  Recursive?: {} | undefined
  ParameterFilters?: {} | undefined
  WithDecryption?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type GetParametersByPathResult = { Parameters?: {} | undefined; NextToken?: {} | undefined }
type GetPatchBaselineRequest = { BaselineId: {} }
type GetPatchBaselineResult = {
  BaselineId?: {} | undefined
  Name?: {} | undefined
  OperatingSystem?: {} | undefined
  GlobalFilters?: { PatchFilters: {} } | undefined
  ApprovalRules?: { PatchRules: {} } | undefined
  ApprovedPatches?: {} | undefined
  ApprovedPatchesComplianceLevel?: {} | undefined
  ApprovedPatchesEnableNonSecurity?: {} | undefined
  RejectedPatches?: {} | undefined
  RejectedPatchesAction?: {} | undefined
  PatchGroups?: {} | undefined
  CreatedDate?: {} | undefined
  ModifiedDate?: {} | undefined
  Description?: {} | undefined
  Sources?: {} | undefined
}
type GetPatchBaselineForPatchGroupRequest = { PatchGroup: {}; OperatingSystem?: {} | undefined }
type GetPatchBaselineForPatchGroupResult = {
  BaselineId?: {} | undefined
  PatchGroup?: {} | undefined
  OperatingSystem?: {} | undefined
}
type GetResourcePoliciesRequest = {
  ResourceArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetResourcePoliciesResponse = { NextToken?: {} | undefined; Policies?: {} | undefined }
type GetServiceSettingRequest = { SettingId: {} }
type GetServiceSettingResult = {
  ServiceSetting?:
    | {
        SettingId?: {} | undefined
        SettingValue?: {} | undefined
        LastModifiedDate?: {} | undefined
        LastModifiedUser?: {} | undefined
        ARN?: {} | undefined
        Status?: {} | undefined
      }
    | undefined
}
type LabelParameterVersionRequest = { Name: {}; ParameterVersion?: {} | undefined; Labels: {} }
type LabelParameterVersionResult = {
  InvalidLabels?: {} | undefined
  ParameterVersion?: {} | undefined
}
type ListAssociationVersionsRequest = {
  AssociationId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAssociationVersionsResult = {
  AssociationVersions?: {} | undefined
  NextToken?: {} | undefined
}
type ListAssociationsRequest = {
  AssociationFilterList?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAssociationsResult = { Associations?: {} | undefined; NextToken?: {} | undefined }
type ListCommandInvocationsRequest = {
  CommandId?: {} | undefined
  InstanceId?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
  Details?: {} | undefined
}
type ListCommandInvocationsResult = {
  CommandInvocations?: {} | undefined
  NextToken?: {} | undefined
}
type ListCommandsRequest = {
  CommandId?: {} | undefined
  InstanceId?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListCommandsResult = { Commands?: {} | undefined; NextToken?: {} | undefined }
type ListComplianceItemsRequest = {
  Filters?: {} | undefined
  ResourceIds?: {} | undefined
  ResourceTypes?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListComplianceItemsResult = { ComplianceItems?: {} | undefined; NextToken?: {} | undefined }
type ListComplianceSummariesRequest = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListComplianceSummariesResult = {
  ComplianceSummaryItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListDocumentMetadataHistoryRequest = {
  Name: {}
  DocumentVersion?: {} | undefined
  Metadata: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDocumentMetadataHistoryResponse = {
  Name?: {} | undefined
  DocumentVersion?: {} | undefined
  Author?: {} | undefined
  Metadata?: { ReviewerResponse?: {} | undefined } | undefined
  NextToken?: {} | undefined
}
type ListDocumentVersionsRequest = {
  Name: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListDocumentVersionsResult = { DocumentVersions?: {} | undefined; NextToken?: {} | undefined }
type ListDocumentsRequest = {
  DocumentFilterList?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListDocumentsResult = { DocumentIdentifiers?: {} | undefined; NextToken?: {} | undefined }
type ListInventoryEntriesRequest = {
  InstanceId: {}
  TypeName: {}
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListInventoryEntriesResult = {
  TypeName?: {} | undefined
  InstanceId?: {} | undefined
  SchemaVersion?: {} | undefined
  CaptureTime?: {} | undefined
  Entries?: {} | undefined
  NextToken?: {} | undefined
}
type ListOpsItemEventsRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListOpsItemEventsResponse = { NextToken?: {} | undefined; Summaries?: {} | undefined }
type ListOpsItemRelatedItemsRequest = {
  OpsItemId?: {} | undefined
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListOpsItemRelatedItemsResponse = { NextToken?: {} | undefined; Summaries?: {} | undefined }
type ListOpsMetadataRequest = {
  Filters?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListOpsMetadataResult = { OpsMetadataList?: {} | undefined; NextToken?: {} | undefined }
type ListResourceComplianceSummariesRequest = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListResourceComplianceSummariesResult = {
  ResourceComplianceSummaryItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceDataSyncRequest = {
  SyncType?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListResourceDataSyncResult = {
  ResourceDataSyncItems?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = { ResourceType: {}; ResourceId: {} }
type ListTagsForResourceResult = { TagList?: {} | undefined }
type ModifyDocumentPermissionRequest = {
  Name: {}
  PermissionType: {}
  AccountIdsToAdd?: {} | undefined
  AccountIdsToRemove?: {} | undefined
  SharedDocumentVersion?: {} | undefined
}
type ModifyDocumentPermissionResponse = { [x: string]: unknown }
type PutComplianceItemsRequest = {
  ResourceId: {}
  ResourceType: {}
  ComplianceType: {}
  ExecutionSummary: {
    ExecutionTime: {}
    ExecutionId?: {} | undefined
    ExecutionType?: {} | undefined
  }
  Items: {}
  ItemContentHash?: {} | undefined
  UploadType?: {} | undefined
}
type PutComplianceItemsResult = { [x: string]: unknown }
type PutInventoryRequest = { InstanceId: {}; Items: {} }
type PutInventoryResult = { Message?: {} | undefined }
type PutParameterRequest = {
  Name: {}
  Description?: {} | undefined
  Value: {}
  Type?: {} | undefined
  KeyId?: {} | undefined
  Overwrite?: {} | undefined
  AllowedPattern?: {} | undefined
  Tags?: {} | undefined
  Tier?: {} | undefined
  Policies?: {} | undefined
  DataType?: {} | undefined
}
type PutParameterResult = { Version?: {} | undefined; Tier?: {} | undefined }
type PutResourcePolicyRequest = {
  ResourceArn: {}
  Policy: {}
  PolicyId?: {} | undefined
  PolicyHash?: {} | undefined
}
type PutResourcePolicyResponse = { PolicyId?: {} | undefined; PolicyHash?: {} | undefined }
type RegisterDefaultPatchBaselineRequest = { BaselineId: {} }
type RegisterDefaultPatchBaselineResult = { BaselineId?: {} | undefined }
type RegisterPatchBaselineForPatchGroupRequest = { BaselineId: {}; PatchGroup: {} }
type RegisterPatchBaselineForPatchGroupResult = {
  BaselineId?: {} | undefined
  PatchGroup?: {} | undefined
}
type RegisterTargetWithMaintenanceWindowRequest = {
  WindowId: {}
  ResourceType: {}
  Targets: {}
  OwnerInformation?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  ClientToken?: {} | undefined
}
type RegisterTargetWithMaintenanceWindowResult = { WindowTargetId?: {} | undefined }
type RegisterTaskWithMaintenanceWindowRequest = {
  WindowId: {}
  Targets?: {} | undefined
  TaskArn: {}
  ServiceRoleArn?: {} | undefined
  TaskType: {}
  TaskParameters?: {} | undefined
  TaskInvocationParameters?:
    | {
        RunCommand?:
          | {
              Comment?: {} | undefined
              CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined
              DocumentHash?: {} | undefined
              DocumentHashType?: {} | undefined
              DocumentVersion?: {} | undefined
              NotificationConfig?:
                | {
                    NotificationArn?: {} | undefined
                    NotificationEvents?: {} | undefined
                    NotificationType?: {} | undefined
                  }
                | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
              Parameters?: {} | undefined
              ServiceRoleArn?: {} | undefined
              TimeoutSeconds?: {} | undefined
            }
          | undefined
        Automation?: { DocumentVersion?: {} | undefined; Parameters?: {} | undefined } | undefined
        StepFunctions?: { Input?: {} | undefined; Name?: {} | undefined } | undefined
        Lambda?:
          | { ClientContext?: {} | undefined; Qualifier?: {} | undefined; Payload?: {} | undefined }
          | undefined
      }
    | undefined
  Priority?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  LoggingInfo?: { S3BucketName: {}; S3KeyPrefix?: {} | undefined; S3Region: {} } | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  ClientToken?: {} | undefined
  CutoffBehavior?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type RegisterTaskWithMaintenanceWindowResult = { WindowTaskId?: {} | undefined }
type RemoveTagsFromResourceRequest = { ResourceType: {}; ResourceId: {}; TagKeys: {} }
type RemoveTagsFromResourceResult = { [x: string]: unknown }
type ResetServiceSettingRequest = { SettingId: {} }
type ResetServiceSettingResult = {
  ServiceSetting?:
    | {
        SettingId?: {} | undefined
        SettingValue?: {} | undefined
        LastModifiedDate?: {} | undefined
        LastModifiedUser?: {} | undefined
        ARN?: {} | undefined
        Status?: {} | undefined
      }
    | undefined
}
type ResumeSessionRequest = { SessionId: {} }
type ResumeSessionResponse = {
  SessionId?: {} | undefined
  TokenValue?: {} | undefined
  StreamUrl?: {} | undefined
}
type SendAutomationSignalRequest = {
  AutomationExecutionId: {}
  SignalType: {}
  Payload?: {} | undefined
}
type SendAutomationSignalResult = { [x: string]: unknown }
type SendCommandRequest = {
  InstanceIds?: {} | undefined
  Targets?: {} | undefined
  DocumentName: {}
  DocumentVersion?: {} | undefined
  DocumentHash?: {} | undefined
  DocumentHashType?: {} | undefined
  TimeoutSeconds?: {} | undefined
  Comment?: {} | undefined
  Parameters?: {} | undefined
  OutputS3Region?: {} | undefined
  OutputS3BucketName?: {} | undefined
  OutputS3KeyPrefix?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  ServiceRoleArn?: {} | undefined
  NotificationConfig?:
    | {
        NotificationArn?: {} | undefined
        NotificationEvents?: {} | undefined
        NotificationType?: {} | undefined
      }
    | undefined
  CloudWatchOutputConfig?:
    | { CloudWatchLogGroupName?: {} | undefined; CloudWatchOutputEnabled?: {} | undefined }
    | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type SendCommandResult = {
  Command?:
    | {
        CommandId?: {} | undefined
        DocumentName?: {} | undefined
        DocumentVersion?: {} | undefined
        Comment?: {} | undefined
        ExpiresAfter?: {} | undefined
        Parameters?: {} | undefined
        InstanceIds?: {} | undefined
        Targets?: {} | undefined
        RequestedDateTime?: {} | undefined
        Status?: {} | undefined
        StatusDetails?: {} | undefined
        OutputS3Region?: {} | undefined
        OutputS3BucketName?: {} | undefined
        OutputS3KeyPrefix?: {} | undefined
        MaxConcurrency?: {} | undefined
        MaxErrors?: {} | undefined
        TargetCount?: {} | undefined
        CompletedCount?: {} | undefined
        ErrorCount?: {} | undefined
        DeliveryTimedOutCount?: {} | undefined
        ServiceRole?: {} | undefined
        NotificationConfig?:
          | {
              NotificationArn?: {} | undefined
              NotificationEvents?: {} | undefined
              NotificationType?: {} | undefined
            }
          | undefined
        CloudWatchOutputConfig?:
          | { CloudWatchLogGroupName?: {} | undefined; CloudWatchOutputEnabled?: {} | undefined }
          | undefined
        TimeoutSeconds?: {} | undefined
        AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
        TriggeredAlarms?: {} | undefined
      }
    | undefined
}
type StartAssociationsOnceRequest = { AssociationIds: {} }
type StartAssociationsOnceResult = { [x: string]: unknown }
type StartAutomationExecutionRequest = {
  DocumentName: {}
  DocumentVersion?: {} | undefined
  Parameters?: {} | undefined
  ClientToken?: {} | undefined
  Mode?: {} | undefined
  TargetParameterName?: {} | undefined
  Targets?: {} | undefined
  TargetMaps?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  TargetLocations?: {} | undefined
  Tags?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type StartAutomationExecutionResult = { AutomationExecutionId?: {} | undefined }
type StartChangeRequestExecutionRequest = {
  ScheduledTime?: {} | undefined
  DocumentName: {}
  DocumentVersion?: {} | undefined
  Parameters?: {} | undefined
  ChangeRequestName?: {} | undefined
  ClientToken?: {} | undefined
  AutoApprove?: {} | undefined
  Runbooks: {}
  Tags?: {} | undefined
  ScheduledEndTime?: {} | undefined
  ChangeDetails?: {} | undefined
}
type StartChangeRequestExecutionResult = { AutomationExecutionId?: {} | undefined }
type StartSessionRequest = {
  Target: {}
  DocumentName?: {} | undefined
  Reason?: {} | undefined
  Parameters?: {} | undefined
}
type StartSessionResponse = {
  SessionId?: {} | undefined
  TokenValue?: {} | undefined
  StreamUrl?: {} | undefined
}
type StopAutomationExecutionRequest = { AutomationExecutionId: {}; Type?: {} | undefined }
type StopAutomationExecutionResult = { [x: string]: unknown }
type TerminateSessionRequest = { SessionId: {} }
type TerminateSessionResponse = { SessionId?: {} | undefined }
type UnlabelParameterVersionRequest = { Name: {}; ParameterVersion: {}; Labels: {} }
type UnlabelParameterVersionResult = {
  RemovedLabels?: {} | undefined
  InvalidLabels?: {} | undefined
}
type UpdateAssociationRequest = {
  AssociationId: {}
  Parameters?: {} | undefined
  DocumentVersion?: {} | undefined
  ScheduleExpression?: {} | undefined
  OutputLocation?:
    | {
        S3Location?:
          | {
              OutputS3Region?: {} | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
            }
          | undefined
      }
    | undefined
  Name?: {} | undefined
  Targets?: {} | undefined
  AssociationName?: {} | undefined
  AssociationVersion?: {} | undefined
  AutomationTargetParameterName?: {} | undefined
  MaxErrors?: {} | undefined
  MaxConcurrency?: {} | undefined
  ComplianceSeverity?: {} | undefined
  SyncCompliance?: {} | undefined
  ApplyOnlyAtCronInterval?: {} | undefined
  CalendarNames?: {} | undefined
  TargetLocations?: {} | undefined
  ScheduleOffset?: {} | undefined
  TargetMaps?: {} | undefined
  AlarmConfiguration?: AlarmConfiguration | undefined
}
type UpdateAssociationResult = {
  AssociationDescription?:
    | {
        Name?: {} | undefined
        InstanceId?: {} | undefined
        AssociationVersion?: {} | undefined
        Date?: {} | undefined
        LastUpdateAssociationDate?: {} | undefined
        Status?: { Date: {}; Name: {}; Message: {}; AdditionalInfo?: {} | undefined } | undefined
        Overview?:
          | {
              Status?: {} | undefined
              DetailedStatus?: {} | undefined
              AssociationStatusAggregatedCount?: {} | undefined
            }
          | undefined
        DocumentVersion?: {} | undefined
        AutomationTargetParameterName?: {} | undefined
        Parameters?: {} | undefined
        AssociationId?: {} | undefined
        Targets?: {} | undefined
        ScheduleExpression?: {} | undefined
        OutputLocation?:
          | {
              S3Location?:
                | {
                    OutputS3Region?: {} | undefined
                    OutputS3BucketName?: {} | undefined
                    OutputS3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LastExecutionDate?: {} | undefined
        LastSuccessfulExecutionDate?: {} | undefined
        AssociationName?: {} | undefined
        MaxErrors?: {} | undefined
        MaxConcurrency?: {} | undefined
        ComplianceSeverity?: {} | undefined
        SyncCompliance?: {} | undefined
        ApplyOnlyAtCronInterval?: {} | undefined
        CalendarNames?: {} | undefined
        TargetLocations?: {} | undefined
        ScheduleOffset?: {} | undefined
        TargetMaps?: {} | undefined
        AlarmConfiguration?: AlarmConfiguration | undefined
        TriggeredAlarms?: {} | undefined
      }
    | undefined
}
type UpdateAssociationStatusRequest = {
  Name: {}
  InstanceId: {}
  AssociationStatus: { Date: {}; Name: {}; Message: {}; AdditionalInfo?: {} | undefined }
}
type UpdateAssociationStatusResult = {
  AssociationDescription?:
    | {
        Name?: {} | undefined
        InstanceId?: {} | undefined
        AssociationVersion?: {} | undefined
        Date?: {} | undefined
        LastUpdateAssociationDate?: {} | undefined
        Status?: { Date: {}; Name: {}; Message: {}; AdditionalInfo?: {} | undefined } | undefined
        Overview?:
          | {
              Status?: {} | undefined
              DetailedStatus?: {} | undefined
              AssociationStatusAggregatedCount?: {} | undefined
            }
          | undefined
        DocumentVersion?: {} | undefined
        AutomationTargetParameterName?: {} | undefined
        Parameters?: {} | undefined
        AssociationId?: {} | undefined
        Targets?: {} | undefined
        ScheduleExpression?: {} | undefined
        OutputLocation?:
          | {
              S3Location?:
                | {
                    OutputS3Region?: {} | undefined
                    OutputS3BucketName?: {} | undefined
                    OutputS3KeyPrefix?: {} | undefined
                  }
                | undefined
            }
          | undefined
        LastExecutionDate?: {} | undefined
        LastSuccessfulExecutionDate?: {} | undefined
        AssociationName?: {} | undefined
        MaxErrors?: {} | undefined
        MaxConcurrency?: {} | undefined
        ComplianceSeverity?: {} | undefined
        SyncCompliance?: {} | undefined
        ApplyOnlyAtCronInterval?: {} | undefined
        CalendarNames?: {} | undefined
        TargetLocations?: {} | undefined
        ScheduleOffset?: {} | undefined
        TargetMaps?: {} | undefined
        AlarmConfiguration?: AlarmConfiguration | undefined
        TriggeredAlarms?: {} | undefined
      }
    | undefined
}
type UpdateDocumentRequest = {
  Content: {}
  Attachments?: {} | undefined
  Name: {}
  DisplayName?: {} | undefined
  VersionName?: {} | undefined
  DocumentVersion?: {} | undefined
  DocumentFormat?: {} | undefined
  TargetType?: {} | undefined
}
type UpdateDocumentResult = {
  DocumentDescription?:
    | {
        Sha1?: {} | undefined
        Hash?: {} | undefined
        HashType?: {} | undefined
        Name?: {} | undefined
        DisplayName?: {} | undefined
        VersionName?: {} | undefined
        Owner?: {} | undefined
        CreatedDate?: {} | undefined
        Status?: {} | undefined
        StatusInformation?: {} | undefined
        DocumentVersion?: {} | undefined
        Description?: {} | undefined
        Parameters?: {} | undefined
        PlatformTypes?: {} | undefined
        DocumentType?: {} | undefined
        SchemaVersion?: {} | undefined
        LatestVersion?: {} | undefined
        DefaultVersion?: {} | undefined
        DocumentFormat?: {} | undefined
        TargetType?: {} | undefined
        Tags?: {} | undefined
        AttachmentsInformation?: {} | undefined
        Requires?: {} | undefined
        Author?: {} | undefined
        ReviewInformation?: {} | undefined
        ApprovedVersion?: {} | undefined
        PendingReviewVersion?: {} | undefined
        ReviewStatus?: {} | undefined
        Category?: {} | undefined
        CategoryEnum?: {} | undefined
      }
    | undefined
}
type UpdateDocumentDefaultVersionRequest = { Name: {}; DocumentVersion: {} }
type UpdateDocumentDefaultVersionResult = {
  Description?:
    | {
        Name?: {} | undefined
        DefaultVersion?: {} | undefined
        DefaultVersionName?: {} | undefined
      }
    | undefined
}
type UpdateDocumentMetadataRequest = {
  Name: {}
  DocumentVersion?: {} | undefined
  DocumentReviews: { Action: {}; Comment?: {} | undefined }
}
type UpdateDocumentMetadataResponse = { [x: string]: unknown }
type UpdateMaintenanceWindowRequest = {
  WindowId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Schedule?: {} | undefined
  ScheduleTimezone?: {} | undefined
  ScheduleOffset?: {} | undefined
  Duration?: {} | undefined
  Cutoff?: {} | undefined
  AllowUnassociatedTargets?: {} | undefined
  Enabled?: {} | undefined
  Replace?: {} | undefined
}
type UpdateMaintenanceWindowResult = {
  WindowId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  StartDate?: {} | undefined
  EndDate?: {} | undefined
  Schedule?: {} | undefined
  ScheduleTimezone?: {} | undefined
  ScheduleOffset?: {} | undefined
  Duration?: {} | undefined
  Cutoff?: {} | undefined
  AllowUnassociatedTargets?: {} | undefined
  Enabled?: {} | undefined
}
type UpdateMaintenanceWindowTargetRequest = {
  WindowId: {}
  WindowTargetId: {}
  Targets?: {} | undefined
  OwnerInformation?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  Replace?: {} | undefined
}
type UpdateMaintenanceWindowTargetResult = {
  WindowId?: {} | undefined
  WindowTargetId?: {} | undefined
  Targets?: {} | undefined
  OwnerInformation?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
}
type UpdateMaintenanceWindowTaskRequest = {
  WindowId: {}
  WindowTaskId: {}
  Targets?: {} | undefined
  TaskArn?: {} | undefined
  ServiceRoleArn?: {} | undefined
  TaskParameters?: {} | undefined
  TaskInvocationParameters?:
    | {
        RunCommand?:
          | {
              Comment?: {} | undefined
              CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined
              DocumentHash?: {} | undefined
              DocumentHashType?: {} | undefined
              DocumentVersion?: {} | undefined
              NotificationConfig?:
                | {
                    NotificationArn?: {} | undefined
                    NotificationEvents?: {} | undefined
                    NotificationType?: {} | undefined
                  }
                | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
              Parameters?: {} | undefined
              ServiceRoleArn?: {} | undefined
              TimeoutSeconds?: {} | undefined
            }
          | undefined
        Automation?: { DocumentVersion?: {} | undefined; Parameters?: {} | undefined } | undefined
        StepFunctions?: { Input?: {} | undefined; Name?: {} | undefined } | undefined
        Lambda?:
          | { ClientContext?: {} | undefined; Qualifier?: {} | undefined; Payload?: {} | undefined }
          | undefined
      }
    | undefined
  Priority?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  LoggingInfo?: { S3BucketName: {}; S3KeyPrefix?: {} | undefined; S3Region: {} } | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  Replace?: {} | undefined
  CutoffBehavior?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type UpdateMaintenanceWindowTaskResult = {
  WindowId?: {} | undefined
  WindowTaskId?: {} | undefined
  Targets?: {} | undefined
  TaskArn?: {} | undefined
  ServiceRoleArn?: {} | undefined
  TaskParameters?: {} | undefined
  TaskInvocationParameters?:
    | {
        RunCommand?:
          | {
              Comment?: {} | undefined
              CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined
              DocumentHash?: {} | undefined
              DocumentHashType?: {} | undefined
              DocumentVersion?: {} | undefined
              NotificationConfig?:
                | {
                    NotificationArn?: {} | undefined
                    NotificationEvents?: {} | undefined
                    NotificationType?: {} | undefined
                  }
                | undefined
              OutputS3BucketName?: {} | undefined
              OutputS3KeyPrefix?: {} | undefined
              Parameters?: {} | undefined
              ServiceRoleArn?: {} | undefined
              TimeoutSeconds?: {} | undefined
            }
          | undefined
        Automation?: { DocumentVersion?: {} | undefined; Parameters?: {} | undefined } | undefined
        StepFunctions?: { Input?: {} | undefined; Name?: {} | undefined } | undefined
        Lambda?:
          | { ClientContext?: {} | undefined; Qualifier?: {} | undefined; Payload?: {} | undefined }
          | undefined
      }
    | undefined
  Priority?: {} | undefined
  MaxConcurrency?: {} | undefined
  MaxErrors?: {} | undefined
  LoggingInfo?: { S3BucketName: {}; S3KeyPrefix?: {} | undefined; S3Region: {} } | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  CutoffBehavior?: {} | undefined
  AlarmConfiguration?: { IgnorePollAlarmFailure?: {} | undefined; Alarms: {} } | undefined
}
type UpdateManagedInstanceRoleRequest = { InstanceId: {}; IamRole: {} }
type UpdateManagedInstanceRoleResult = { [x: string]: unknown }
type UpdateOpsItemRequest = {
  Description?: {} | undefined
  OperationalData?: {} | undefined
  OperationalDataToDelete?: {} | undefined
  Notifications?: {} | undefined
  Priority?: {} | undefined
  RelatedOpsItems?: {} | undefined
  Status?: {} | undefined
  OpsItemId: {}
  Title?: {} | undefined
  Category?: {} | undefined
  Severity?: {} | undefined
  ActualStartTime?: {} | undefined
  ActualEndTime?: {} | undefined
  PlannedStartTime?: {} | undefined
  PlannedEndTime?: {} | undefined
  OpsItemArn?: {} | undefined
}
type UpdateOpsItemResponse = { [x: string]: unknown }
type UpdateOpsMetadataRequest = {
  OpsMetadataArn: {}
  MetadataToUpdate?: {} | undefined
  KeysToDelete?: {} | undefined
}
type UpdateOpsMetadataResult = { OpsMetadataArn?: {} | undefined }
type UpdatePatchBaselineRequest = {
  BaselineId: {}
  Name?: {} | undefined
  GlobalFilters?: { PatchFilters: {} } | undefined
  ApprovalRules?: { PatchRules: {} } | undefined
  ApprovedPatches?: {} | undefined
  ApprovedPatchesComplianceLevel?: {} | undefined
  ApprovedPatchesEnableNonSecurity?: {} | undefined
  RejectedPatches?: {} | undefined
  RejectedPatchesAction?: {} | undefined
  Description?: {} | undefined
  Sources?: {} | undefined
  Replace?: {} | undefined
}
type UpdatePatchBaselineResult = {
  BaselineId?: {} | undefined
  Name?: {} | undefined
  OperatingSystem?: {} | undefined
  GlobalFilters?: { PatchFilters: {} } | undefined
  ApprovalRules?: { PatchRules: {} } | undefined
  ApprovedPatches?: {} | undefined
  ApprovedPatchesComplianceLevel?: {} | undefined
  ApprovedPatchesEnableNonSecurity?: {} | undefined
  RejectedPatches?: {} | undefined
  RejectedPatchesAction?: {} | undefined
  CreatedDate?: {} | undefined
  ModifiedDate?: {} | undefined
  Description?: {} | undefined
  Sources?: {} | undefined
}
type UpdateResourceDataSyncRequest = {
  SyncName: {}
  SyncType: {}
  SyncSource: {
    SourceType: {}
    AwsOrganizationsSource?:
      | { OrganizationSourceType: {}; OrganizationalUnits?: {} | undefined }
      | undefined
    SourceRegions: {}
    IncludeFutureRegions?: {} | undefined
    EnableAllOpsDataSources?: {} | undefined
  }
}
type UpdateResourceDataSyncResult = { [x: string]: unknown }
type UpdateServiceSettingRequest = { SettingId: {}; SettingValue: {} }
type UpdateServiceSettingResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonSSM.AddTagsToResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.AddTagsToResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToResourceRequest }
        output: AddTagsToResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.AssociateOpsItemRelatedItem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.AssociateOpsItemRelatedItem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateOpsItemRelatedItemRequest }
        output: AssociateOpsItemRelatedItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CancelCommand': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CancelCommand'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelCommandRequest }
        output: CancelCommandResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CancelMaintenanceWindowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CancelMaintenanceWindowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelMaintenanceWindowExecutionRequest }
        output: CancelMaintenanceWindowExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateActivation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateActivation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateActivationRequest }
        output: CreateActivationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAssociationRequest }
        output: CreateAssociationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateAssociationBatch': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateAssociationBatch'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAssociationBatchRequest }
        output: CreateAssociationBatchResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDocumentRequest }
        output: CreateDocumentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMaintenanceWindowRequest }
        output: CreateMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateOpsItem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateOpsItem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOpsItemRequest }
        output: CreateOpsItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateOpsMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateOpsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOpsMetadataRequest }
        output: CreateOpsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreatePatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreatePatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePatchBaselineRequest }
        output: CreatePatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.CreateResourceDataSync': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.CreateResourceDataSync'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResourceDataSyncRequest }
        output: CreateResourceDataSyncResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteActivation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteActivation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteActivationRequest }
        output: DeleteActivationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAssociationRequest }
        output: DeleteAssociationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDocumentRequest }
        output: DeleteDocumentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteInventory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteInventory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInventoryRequest }
        output: DeleteInventoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMaintenanceWindowRequest }
        output: DeleteMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteOpsMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteOpsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOpsMetadataRequest }
        output: DeleteOpsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteParameterRequest }
        output: DeleteParameterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteParametersRequest }
        output: DeleteParametersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeletePatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeletePatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePatchBaselineRequest }
        output: DeletePatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteResourceDataSync': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteResourceDataSync'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourceDataSyncRequest }
        output: DeleteResourceDataSyncResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeleteResourcePolicy'
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
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeregisterManagedInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeregisterManagedInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterManagedInstanceRequest }
        output: DeregisterManagedInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeregisterPatchBaselineForPatchGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeregisterPatchBaselineForPatchGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterPatchBaselineForPatchGroupRequest }
        output: DeregisterPatchBaselineForPatchGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeregisterTargetFromMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeregisterTargetFromMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterTargetFromMaintenanceWindowRequest }
        output: DeregisterTargetFromMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DeregisterTaskFromMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DeregisterTaskFromMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterTaskFromMaintenanceWindowRequest }
        output: DeregisterTaskFromMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeActivations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeActivations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeActivationsRequest }
        output: DescribeActivationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAssociationRequest }
        output: DescribeAssociationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutionTargets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAssociationExecutionTargets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAssociationExecutionTargetsRequest }
        output: DescribeAssociationExecutionTargetsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAssociationExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAssociationExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAssociationExecutionsRequest }
        output: DescribeAssociationExecutionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAutomationExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAutomationExecutionsRequest }
        output: DescribeAutomationExecutionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAutomationStepExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAutomationStepExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAutomationStepExecutionsRequest }
        output: DescribeAutomationStepExecutionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeAvailablePatches': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeAvailablePatches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAvailablePatchesRequest }
        output: DescribeAvailablePatchesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDocumentRequest }
        output: DescribeDocumentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeDocumentPermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeDocumentPermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDocumentPermissionRequest }
        output: DescribeDocumentPermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeEffectiveInstanceAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeEffectiveInstanceAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEffectiveInstanceAssociationsRequest }
        output: DescribeEffectiveInstanceAssociationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeEffectivePatchesForPatchBaseline': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeEffectivePatchesForPatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEffectivePatchesForPatchBaselineRequest }
        output: DescribeEffectivePatchesForPatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceAssociationsStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInstanceAssociationsStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstanceAssociationsStatusRequest }
        output: DescribeInstanceAssociationsStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInstanceInformation': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInstanceInformation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstanceInformationRequest }
        output: DescribeInstanceInformationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStates': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInstancePatchStates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstancePatchStatesRequest }
        output: DescribeInstancePatchStatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatchStatesForPatchGroup': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInstancePatchStatesForPatchGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstancePatchStatesForPatchGroupRequest }
        output: DescribeInstancePatchStatesForPatchGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInstancePatches': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInstancePatches'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstancePatchesRequest }
        output: DescribeInstancePatchesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeInventoryDeletions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeInventoryDeletions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInventoryDeletionsRequest }
        output: DescribeInventoryDeletionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowExecutionTaskInvocationsRequest }
        output: DescribeMaintenanceWindowExecutionTaskInvocationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutionTasks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowExecutionTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowExecutionTasksRequest }
        output: DescribeMaintenanceWindowExecutionTasksResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowExecutionsRequest }
        output: DescribeMaintenanceWindowExecutionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowSchedule': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowSchedule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowScheduleRequest }
        output: DescribeMaintenanceWindowScheduleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTargets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowTargets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowTargetsRequest }
        output: DescribeMaintenanceWindowTargetsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowTasks': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowTasks'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowTasksRequest }
        output: DescribeMaintenanceWindowTasksResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindows': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowsRequest }
        output: DescribeMaintenanceWindowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeMaintenanceWindowsForTarget': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeMaintenanceWindowsForTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMaintenanceWindowsForTargetRequest }
        output: DescribeMaintenanceWindowsForTargetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeOpsItems': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeOpsItems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOpsItemsRequest }
        output: DescribeOpsItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeParameters': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeParametersRequest }
        output: DescribeParametersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribePatchBaselines': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribePatchBaselines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePatchBaselinesRequest }
        output: DescribePatchBaselinesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroupState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribePatchGroupState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePatchGroupStateRequest }
        output: DescribePatchGroupStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribePatchGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribePatchGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePatchGroupsRequest }
        output: DescribePatchGroupsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribePatchProperties': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribePatchProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePatchPropertiesRequest }
        output: DescribePatchPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DescribeSessions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.DescribeSessions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSessionsRequest }
        output: DescribeSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.DisassociateOpsItemRelatedItem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.DisassociateOpsItemRelatedItem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateOpsItemRelatedItemRequest }
        output: DisassociateOpsItemRelatedItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetAutomationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetAutomationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAutomationExecutionRequest }
        output: GetAutomationExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetCalendarState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetCalendarState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCalendarStateRequest }
        output: GetCalendarStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetCommandInvocation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetCommandInvocation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCommandInvocationRequest }
        output: GetCommandInvocationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetConnectionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetConnectionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConnectionStatusRequest }
        output: GetConnectionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetDefaultPatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetDefaultPatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDefaultPatchBaselineRequest }
        output: GetDefaultPatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetDeployablePatchSnapshotForInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetDeployablePatchSnapshotForInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDeployablePatchSnapshotForInstanceRequest }
        output: GetDeployablePatchSnapshotForInstanceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDocumentRequest }
        output: GetDocumentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetInventory': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetInventory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInventoryRequest }
        output: GetInventoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetInventorySchema': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetInventorySchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInventorySchemaRequest }
        output: GetInventorySchemaResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMaintenanceWindowRequest }
        output: GetMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetMaintenanceWindowExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMaintenanceWindowExecutionRequest }
        output: GetMaintenanceWindowExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetMaintenanceWindowExecutionTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMaintenanceWindowExecutionTaskRequest }
        output: GetMaintenanceWindowExecutionTaskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMaintenanceWindowExecutionTaskInvocationRequest }
        output: GetMaintenanceWindowExecutionTaskInvocationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetMaintenanceWindowTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetMaintenanceWindowTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMaintenanceWindowTaskRequest }
        output: GetMaintenanceWindowTaskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetOpsItem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetOpsItem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpsItemRequest }
        output: GetOpsItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetOpsMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetOpsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpsMetadataRequest }
        output: GetOpsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetOpsSummary': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetOpsSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpsSummaryRequest }
        output: GetOpsSummaryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParameterRequest }
        output: GetParameterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetParameterHistory': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetParameterHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParameterHistoryRequest }
        output: GetParameterHistoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetParameters': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetParameters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParametersRequest }
        output: GetParametersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetParametersByPath': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetParametersByPath'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParametersByPathRequest }
        output: GetParametersByPathResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetPatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetPatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPatchBaselineRequest }
        output: GetPatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetPatchBaselineForPatchGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetPatchBaselineForPatchGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPatchBaselineForPatchGroupRequest }
        output: GetPatchBaselineForPatchGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetResourcePolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetResourcePolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetResourcePoliciesRequest }
        output: GetResourcePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.GetServiceSetting': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.GetServiceSetting'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceSettingRequest }
        output: GetServiceSettingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.LabelParameterVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.LabelParameterVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LabelParameterVersionRequest }
        output: LabelParameterVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListAssociationVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListAssociationVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAssociationVersionsRequest }
        output: ListAssociationVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListAssociations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListAssociations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAssociationsRequest }
        output: ListAssociationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListCommandInvocations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListCommandInvocations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCommandInvocationsRequest }
        output: ListCommandInvocationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListCommands': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListCommands'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCommandsRequest }
        output: ListCommandsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListComplianceItems': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListComplianceItems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListComplianceItemsRequest }
        output: ListComplianceItemsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListComplianceSummaries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListComplianceSummaries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListComplianceSummariesRequest }
        output: ListComplianceSummariesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListDocumentMetadataHistory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListDocumentMetadataHistory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDocumentMetadataHistoryRequest }
        output: ListDocumentMetadataHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListDocumentVersions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListDocumentVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDocumentVersionsRequest }
        output: ListDocumentVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListDocuments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListDocuments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDocumentsRequest }
        output: ListDocumentsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListInventoryEntries': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListInventoryEntries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInventoryEntriesRequest }
        output: ListInventoryEntriesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListOpsItemEvents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListOpsItemEvents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOpsItemEventsRequest }
        output: ListOpsItemEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListOpsItemRelatedItems': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListOpsItemRelatedItems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOpsItemRelatedItemsRequest }
        output: ListOpsItemRelatedItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListOpsMetadata': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListOpsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOpsMetadataRequest }
        output: ListOpsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListResourceComplianceSummaries': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListResourceComplianceSummaries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceComplianceSummariesRequest }
        output: ListResourceComplianceSummariesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListResourceDataSync': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListResourceDataSync'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceDataSyncRequest }
        output: ListResourceDataSyncResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ModifyDocumentPermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ModifyDocumentPermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyDocumentPermissionRequest }
        output: ModifyDocumentPermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.PutComplianceItems': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.PutComplianceItems'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutComplianceItemsRequest }
        output: PutComplianceItemsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.PutInventory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.PutInventory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInventoryRequest }
        output: PutInventoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.PutParameter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.PutParameter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutParameterRequest }
        output: PutParameterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.PutResourcePolicy'
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
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.RegisterDefaultPatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.RegisterDefaultPatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterDefaultPatchBaselineRequest }
        output: RegisterDefaultPatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.RegisterPatchBaselineForPatchGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.RegisterPatchBaselineForPatchGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterPatchBaselineForPatchGroupRequest }
        output: RegisterPatchBaselineForPatchGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.RegisterTargetWithMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.RegisterTargetWithMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterTargetWithMaintenanceWindowRequest }
        output: RegisterTargetWithMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.RegisterTaskWithMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.RegisterTaskWithMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterTaskWithMaintenanceWindowRequest }
        output: RegisterTaskWithMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.RemoveTagsFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.RemoveTagsFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromResourceRequest }
        output: RemoveTagsFromResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ResetServiceSetting': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ResetServiceSetting'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetServiceSettingRequest }
        output: ResetServiceSettingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.ResumeSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.ResumeSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResumeSessionRequest }
        output: ResumeSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.SendAutomationSignal': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.SendAutomationSignal'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendAutomationSignalRequest }
        output: SendAutomationSignalResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.SendCommand': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.SendCommand'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendCommandRequest }
        output: SendCommandResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.StartAssociationsOnce': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.StartAssociationsOnce'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartAssociationsOnceRequest }
        output: StartAssociationsOnceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.StartAutomationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.StartAutomationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartAutomationExecutionRequest }
        output: StartAutomationExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.StartChangeRequestExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.StartChangeRequestExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartChangeRequestExecutionRequest }
        output: StartChangeRequestExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.StartSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.StartSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSessionRequest }
        output: StartSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.StopAutomationExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.StopAutomationExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopAutomationExecutionRequest }
        output: StopAutomationExecutionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.TerminateSession': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.TerminateSession'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateSessionRequest }
        output: TerminateSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UnlabelParameterVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UnlabelParameterVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UnlabelParameterVersionRequest }
        output: UnlabelParameterVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateAssociation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateAssociation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAssociationRequest }
        output: UpdateAssociationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateAssociationStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateAssociationStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAssociationStatusRequest }
        output: UpdateAssociationStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateDocument': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateDocument'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDocumentRequest }
        output: UpdateDocumentResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentDefaultVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateDocumentDefaultVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDocumentDefaultVersionRequest }
        output: UpdateDocumentDefaultVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateDocumentMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateDocumentMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDocumentMetadataRequest }
        output: UpdateDocumentMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateMaintenanceWindow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMaintenanceWindowRequest }
        output: UpdateMaintenanceWindowResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTarget': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateMaintenanceWindowTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMaintenanceWindowTargetRequest }
        output: UpdateMaintenanceWindowTargetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateMaintenanceWindowTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateMaintenanceWindowTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMaintenanceWindowTaskRequest }
        output: UpdateMaintenanceWindowTaskResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateManagedInstanceRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateManagedInstanceRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateManagedInstanceRoleRequest }
        output: UpdateManagedInstanceRoleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateOpsItem': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateOpsItem'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateOpsItemRequest }
        output: UpdateOpsItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateOpsMetadata': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateOpsMetadata'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateOpsMetadataRequest }
        output: UpdateOpsMetadataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdatePatchBaseline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdatePatchBaseline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePatchBaselineRequest }
        output: UpdatePatchBaselineResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateResourceDataSync': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateResourceDataSync'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResourceDataSyncRequest }
        output: UpdateResourceDataSyncResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonSSM.UpdateServiceSetting': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonSSM.UpdateServiceSetting'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceSettingRequest }
        output: UpdateServiceSettingResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
