type AssociateConnectionAliasRequest = { AliasId: {}; ResourceId: {} }
type AssociateConnectionAliasResult = { ConnectionIdentifier?: {} | undefined }
type AssociateIpGroupsRequest = { DirectoryId: {}; GroupIds: {} }
type AssociateIpGroupsResult = { [x: string]: unknown }
type AuthorizeIpRulesRequest = { GroupId: {}; UserRules: {} }
type AuthorizeIpRulesResult = { [x: string]: unknown }
type CopyWorkspaceImageRequest = {
  Name: {}
  Description?: {} | undefined
  SourceImageId: {}
  SourceRegion: {}
  Tags?: {} | undefined
}
type CopyWorkspaceImageResult = { ImageId?: {} | undefined }
type CreateConnectClientAddInRequest = { ResourceId: {}; Name: {}; URL: {} }
type CreateConnectClientAddInResult = { AddInId?: {} | undefined }
type CreateConnectionAliasRequest = { ConnectionString: {}; Tags?: {} | undefined }
type CreateConnectionAliasResult = { AliasId?: {} | undefined }
type CreateIpGroupRequest = {
  GroupName: {}
  GroupDesc?: {} | undefined
  UserRules?: {} | undefined
  Tags?: {} | undefined
}
type CreateIpGroupResult = { GroupId?: {} | undefined }
type CreateStandbyWorkspacesRequest = { PrimaryRegion: {}; StandbyWorkspaces: {} }
type CreateStandbyWorkspacesResult = {
  FailedStandbyRequests?: {} | undefined
  PendingStandbyRequests?: {} | undefined
}
type CreateTagsRequest = { ResourceId: {}; Tags: {} }
type CreateTagsResult = { [x: string]: unknown }
type CreateUpdatedWorkspaceImageRequest = {
  Name: {}
  Description: {}
  SourceImageId: {}
  Tags?: {} | undefined
}
type CreateUpdatedWorkspaceImageResult = { ImageId?: {} | undefined }
type ComputeType = { Name?: {} | undefined }
type UserStorage = { Capacity?: {} | undefined }
type RootStorage = { Capacity?: {} | undefined }
type CreateWorkspaceBundleRequest = {
  BundleName: {}
  BundleDescription: {}
  ImageId: {}
  ComputeType: ComputeType
  UserStorage: UserStorage
  RootStorage?: RootStorage | undefined
  Tags?: {} | undefined
}
type WorkspaceBundle = {
  BundleId?: {} | undefined
  Name?: {} | undefined
  Owner?: {} | undefined
  Description?: {} | undefined
  ImageId?: {} | undefined
  RootStorage?: { Capacity?: {} | undefined } | undefined
  UserStorage?: { Capacity?: {} | undefined } | undefined
  ComputeType?: { Name?: {} | undefined } | undefined
  LastUpdatedTime?: {} | undefined
  CreationTime?: {} | undefined
  State?: {} | undefined
  BundleType?: {} | undefined
}
type CreateWorkspaceBundleResult = { WorkspaceBundle?: WorkspaceBundle | undefined }
type CreateWorkspaceImageRequest = {
  Name: {}
  Description: {}
  WorkspaceId: {}
  Tags?: {} | undefined
}
type CreateWorkspaceImageResult = {
  ImageId?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  OperatingSystem?: { Type?: {} | undefined } | undefined
  State?: {} | undefined
  RequiredTenancy?: {} | undefined
  Created?: {} | undefined
  OwnerAccountId?: {} | undefined
}
type CreateWorkspacesRequest = { Workspaces: {} }
type CreateWorkspacesResult = { FailedRequests?: {} | undefined; PendingRequests?: {} | undefined }
type DeleteClientBrandingRequest = { ResourceId: {}; Platforms: {} }
type DeleteClientBrandingResult = { [x: string]: unknown }
type DeleteConnectClientAddInRequest = { AddInId: {}; ResourceId: {} }
type DeleteConnectClientAddInResult = { [x: string]: unknown }
type DeleteConnectionAliasRequest = { AliasId: {} }
type DeleteConnectionAliasResult = { [x: string]: unknown }
type DeleteIpGroupRequest = { GroupId: {} }
type DeleteIpGroupResult = { [x: string]: unknown }
type DeleteTagsRequest = { ResourceId: {}; TagKeys: {} }
type DeleteTagsResult = { [x: string]: unknown }
type DeleteWorkspaceBundleRequest = { BundleId?: {} | undefined }
type DeleteWorkspaceBundleResult = { [x: string]: unknown }
type DeleteWorkspaceImageRequest = { ImageId: {} }
type DeleteWorkspaceImageResult = { [x: string]: unknown }
type DeregisterWorkspaceDirectoryRequest = { DirectoryId: {} }
type DeregisterWorkspaceDirectoryResult = { [x: string]: unknown }
type DescribeAccountRequest = { [x: string]: unknown }
type DescribeAccountResult = {
  DedicatedTenancySupport?: {} | undefined
  DedicatedTenancyManagementCidrRange?: {} | undefined
}
type DescribeAccountModificationsRequest = { NextToken?: {} | undefined }
type DescribeAccountModificationsResult = {
  AccountModifications?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeClientBrandingRequest = { ResourceId: {} }
type DescribeClientBrandingResult = {
  DeviceTypeWindows?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeOsx?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeAndroid?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeIos?:
    | {
        LogoUrl?: {} | undefined
        Logo2xUrl?: {} | undefined
        Logo3xUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeLinux?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeWeb?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
}
type DescribeClientPropertiesRequest = { ResourceIds: {} }
type DescribeClientPropertiesResult = { ClientPropertiesList?: {} | undefined }
type DescribeConnectClientAddInsRequest = {
  ResourceId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeConnectClientAddInsResult = { AddIns?: {} | undefined; NextToken?: {} | undefined }
type DescribeConnectionAliasPermissionsRequest = {
  AliasId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeConnectionAliasPermissionsResult = {
  AliasId?: {} | undefined
  ConnectionAliasPermissions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConnectionAliasesRequest = {
  AliasIds?: {} | undefined
  ResourceId?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConnectionAliasesResult = {
  ConnectionAliases?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeIpGroupsRequest = {
  GroupIds?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeIpGroupsResult = { Result?: {} | undefined; NextToken?: {} | undefined }
type DescribeTagsRequest = { ResourceId: {} }
type DescribeTagsResult = { TagList?: {} | undefined }
type DescribeWorkspaceBundlesRequest = {
  BundleIds?: {} | undefined
  Owner?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspaceBundlesResult = { Bundles?: {} | undefined; NextToken?: {} | undefined }
type DescribeWorkspaceDirectoriesRequest = {
  DirectoryIds?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspaceDirectoriesResult = {
  Directories?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspaceImagePermissionsRequest = {
  ImageId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeWorkspaceImagePermissionsResult = {
  ImageId?: {} | undefined
  ImagePermissions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspaceImagesRequest = {
  ImageIds?: {} | undefined
  ImageType?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeWorkspaceImagesResult = { Images?: {} | undefined; NextToken?: {} | undefined }
type DescribeWorkspaceSnapshotsRequest = { WorkspaceId: {} }
type DescribeWorkspaceSnapshotsResult = {
  RebuildSnapshots?: {} | undefined
  RestoreSnapshots?: {} | undefined
}
type DescribeWorkspacesRequest = {
  WorkspaceIds?: {} | undefined
  DirectoryId?: {} | undefined
  UserName?: {} | undefined
  BundleId?: {} | undefined
  Limit?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspacesResult = { Workspaces?: {} | undefined; NextToken?: {} | undefined }
type DescribeWorkspacesConnectionStatusRequest = {
  WorkspaceIds?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeWorkspacesConnectionStatusResult = {
  WorkspacesConnectionStatus?: {} | undefined
  NextToken?: {} | undefined
}
type DisassociateConnectionAliasRequest = { AliasId: {} }
type DisassociateConnectionAliasResult = { [x: string]: unknown }
type DisassociateIpGroupsRequest = { DirectoryId: {}; GroupIds: {} }
type DisassociateIpGroupsResult = { [x: string]: unknown }
type ImportClientBrandingRequest = {
  ResourceId: {}
  DeviceTypeWindows?:
    | {
        Logo?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeOsx?:
    | {
        Logo?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeAndroid?:
    | {
        Logo?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeIos?:
    | {
        Logo?: {} | undefined
        Logo2x?: {} | undefined
        Logo3x?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeLinux?:
    | {
        Logo?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeWeb?:
    | {
        Logo?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
}
type ImportClientBrandingResult = {
  DeviceTypeWindows?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeOsx?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeAndroid?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeIos?:
    | {
        LogoUrl?: {} | undefined
        Logo2xUrl?: {} | undefined
        Logo3xUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeLinux?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
  DeviceTypeWeb?:
    | {
        LogoUrl?: {} | undefined
        SupportEmail?: {} | undefined
        SupportLink?: {} | undefined
        ForgotPasswordLink?: {} | undefined
        LoginMessage?: {} | undefined
      }
    | undefined
}
type ImportWorkspaceImageRequest = {
  Ec2ImageId: {}
  IngestionProcess: {}
  ImageName: {}
  ImageDescription: {}
  Tags?: {} | undefined
  Applications?: {} | undefined
}
type ImportWorkspaceImageResult = { ImageId?: {} | undefined }
type ListAvailableManagementCidrRangesRequest = {
  ManagementCidrRangeConstraint: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAvailableManagementCidrRangesResult = {
  ManagementCidrRanges?: {} | undefined
  NextToken?: {} | undefined
}
type MigrateWorkspaceRequest = { SourceWorkspaceId: {}; BundleId: {} }
type MigrateWorkspaceResult = {
  SourceWorkspaceId?: {} | undefined
  TargetWorkspaceId?: {} | undefined
}
type ModifyAccountRequest = {
  DedicatedTenancySupport?: {} | undefined
  DedicatedTenancyManagementCidrRange?: {} | undefined
}
type ModifyAccountResult = { [x: string]: unknown }
type ModifyCertificateBasedAuthPropertiesRequest = {
  ResourceId: {}
  CertificateBasedAuthProperties?:
    | { Status?: {} | undefined; CertificateAuthorityArn?: {} | undefined }
    | undefined
  PropertiesToDelete?: {} | undefined
}
type ModifyCertificateBasedAuthPropertiesResult = { [x: string]: unknown }
type ModifyClientPropertiesRequest = {
  ResourceId: {}
  ClientProperties: { ReconnectEnabled?: {} | undefined; LogUploadEnabled?: {} | undefined }
}
type ModifyClientPropertiesResult = { [x: string]: unknown }
type ModifySamlPropertiesRequest = {
  ResourceId: {}
  SamlProperties?:
    | {
        Status?: {} | undefined
        UserAccessUrl?: {} | undefined
        RelayStateParameterName?: {} | undefined
      }
    | undefined
  PropertiesToDelete?: {} | undefined
}
type ModifySamlPropertiesResult = { [x: string]: unknown }
type ModifySelfservicePermissionsRequest = {
  ResourceId: {}
  SelfservicePermissions: {
    RestartWorkspace?: {} | undefined
    IncreaseVolumeSize?: {} | undefined
    ChangeComputeType?: {} | undefined
    SwitchRunningMode?: {} | undefined
    RebuildWorkspace?: {} | undefined
  }
}
type ModifySelfservicePermissionsResult = { [x: string]: unknown }
type ModifyWorkspaceAccessPropertiesRequest = {
  ResourceId: {}
  WorkspaceAccessProperties: {
    DeviceTypeWindows?: {} | undefined
    DeviceTypeOsx?: {} | undefined
    DeviceTypeWeb?: {} | undefined
    DeviceTypeIos?: {} | undefined
    DeviceTypeAndroid?: {} | undefined
    DeviceTypeChromeOs?: {} | undefined
    DeviceTypeZeroClient?: {} | undefined
    DeviceTypeLinux?: {} | undefined
  }
}
type ModifyWorkspaceAccessPropertiesResult = { [x: string]: unknown }
type ModifyWorkspaceCreationPropertiesRequest = {
  ResourceId: {}
  WorkspaceCreationProperties: {
    EnableWorkDocs?: {} | undefined
    EnableInternetAccess?: {} | undefined
    DefaultOu?: {} | undefined
    CustomSecurityGroupId?: {} | undefined
    UserEnabledAsLocalAdministrator?: {} | undefined
    EnableMaintenanceMode?: {} | undefined
  }
}
type ModifyWorkspaceCreationPropertiesResult = { [x: string]: unknown }
type ModifyWorkspacePropertiesRequest = {
  WorkspaceId: {}
  WorkspaceProperties: {
    RunningMode?: {} | undefined
    RunningModeAutoStopTimeoutInMinutes?: {} | undefined
    RootVolumeSizeGib?: {} | undefined
    UserVolumeSizeGib?: {} | undefined
    ComputeTypeName?: {} | undefined
    Protocols?: {} | undefined
  }
}
type ModifyWorkspacePropertiesResult = { [x: string]: unknown }
type ModifyWorkspaceStateRequest = { WorkspaceId: {}; WorkspaceState: {} }
type ModifyWorkspaceStateResult = { [x: string]: unknown }
type RebootWorkspacesRequest = { RebootWorkspaceRequests: {} }
type RebootWorkspacesResult = { FailedRequests?: {} | undefined }
type RebuildWorkspacesRequest = { RebuildWorkspaceRequests: {} }
type RebuildWorkspacesResult = { FailedRequests?: {} | undefined }
type RegisterWorkspaceDirectoryRequest = {
  DirectoryId: {}
  SubnetIds?: {} | undefined
  EnableWorkDocs: {}
  EnableSelfService?: {} | undefined
  Tenancy?: {} | undefined
  Tags?: {} | undefined
}
type RegisterWorkspaceDirectoryResult = { [x: string]: unknown }
type RestoreWorkspaceRequest = { WorkspaceId: {} }
type RestoreWorkspaceResult = { [x: string]: unknown }
type RevokeIpRulesRequest = { GroupId: {}; UserRules: {} }
type RevokeIpRulesResult = { [x: string]: unknown }
type StartWorkspacesRequest = { StartWorkspaceRequests: {} }
type StartWorkspacesResult = { FailedRequests?: {} | undefined }
type StopWorkspacesRequest = { StopWorkspaceRequests: {} }
type StopWorkspacesResult = { FailedRequests?: {} | undefined }
type TerminateWorkspacesRequest = { TerminateWorkspaceRequests: {} }
type TerminateWorkspacesResult = { FailedRequests?: {} | undefined }
type UpdateConnectClientAddInRequest = {
  AddInId: {}
  ResourceId: {}
  Name?: {} | undefined
  URL?: {} | undefined
}
type UpdateConnectClientAddInResult = { [x: string]: unknown }
type UpdateConnectionAliasPermissionRequest = {
  AliasId: {}
  ConnectionAliasPermission: { SharedAccountId: {}; AllowAssociation: {} }
}
type UpdateConnectionAliasPermissionResult = { [x: string]: unknown }
type UpdateRulesOfIpGroupRequest = { GroupId: {}; UserRules: {} }
type UpdateRulesOfIpGroupResult = { [x: string]: unknown }
type UpdateWorkspaceBundleRequest = { BundleId?: {} | undefined; ImageId?: {} | undefined }
type UpdateWorkspaceBundleResult = { [x: string]: unknown }
type UpdateWorkspaceImagePermissionRequest = {
  ImageId: {}
  AllowCopyImage: {}
  SharedAccountId: {}
}
type UpdateWorkspaceImagePermissionResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.AssociateConnectionAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateConnectionAliasRequest }
        output: AssociateConnectionAliasResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.AssociateIpGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.AssociateIpGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateIpGroupsRequest }
        output: AssociateIpGroupsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.AuthorizeIpRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.AuthorizeIpRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AuthorizeIpRulesRequest }
        output: AuthorizeIpRulesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CopyWorkspaceImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyWorkspaceImageRequest }
        output: CopyWorkspaceImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateConnectClientAddIn'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectClientAddInRequest }
        output: CreateConnectClientAddInResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateConnectionAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateConnectionAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectionAliasRequest }
        output: CreateConnectionAliasResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateIpGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateIpGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateIpGroupRequest }
        output: CreateIpGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateStandbyWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStandbyWorkspacesRequest }
        output: CreateStandbyWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTagsRequest }
        output: CreateTagsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateUpdatedWorkspaceImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUpdatedWorkspaceImageRequest }
        output: CreateUpdatedWorkspaceImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateWorkspaceBundle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkspaceBundleRequest }
        output: CreateWorkspaceBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateWorkspaceImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkspaceImageRequest }
        output: CreateWorkspaceImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.CreateWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkspacesRequest }
        output: CreateWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteClientBranding': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteClientBranding'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClientBrandingRequest }
        output: DeleteClientBrandingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteConnectClientAddIn'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectClientAddInRequest }
        output: DeleteConnectClientAddInResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteConnectionAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectionAliasRequest }
        output: DeleteConnectionAliasResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteIpGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteIpGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteIpGroupRequest }
        output: DeleteIpGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTagsRequest }
        output: DeleteTagsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteWorkspaceBundle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkspaceBundleRequest }
        output: DeleteWorkspaceBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeleteWorkspaceImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkspaceImageRequest }
        output: DeleteWorkspaceImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DeregisterWorkspaceDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterWorkspaceDirectoryRequest }
        output: DeregisterWorkspaceDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountRequest }
        output: DescribeAccountResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeAccountModifications': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeAccountModifications'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountModificationsRequest }
        output: DescribeAccountModificationsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeClientBranding': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeClientBranding'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClientBrandingRequest }
        output: DescribeClientBrandingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeClientProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeClientProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClientPropertiesRequest }
        output: DescribeClientPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeConnectClientAddIns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConnectClientAddInsRequest }
        output: DescribeConnectClientAddInsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeConnectionAliasPermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConnectionAliasPermissionsRequest }
        output: DescribeConnectionAliasPermissionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeConnectionAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConnectionAliasesRequest }
        output: DescribeConnectionAliasesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeIpGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeIpGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeIpGroupsRequest }
        output: DescribeIpGroupsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTagsRequest }
        output: DescribeTagsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaceBundles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspaceBundlesRequest }
        output: DescribeWorkspaceBundlesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaceDirectories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspaceDirectoriesRequest }
        output: DescribeWorkspaceDirectoriesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaceImagePermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspaceImagePermissionsRequest }
        output: DescribeWorkspaceImagePermissionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaceImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspaceImagesRequest }
        output: DescribeWorkspaceImagesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaceSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspaceSnapshotsRequest }
        output: DescribeWorkspaceSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaces': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspacesRequest }
        output: DescribeWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DescribeWorkspacesConnectionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkspacesConnectionStatusRequest }
        output: DescribeWorkspacesConnectionStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DisassociateConnectionAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateConnectionAliasRequest }
        output: DisassociateConnectionAliasResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.DisassociateIpGroups': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.DisassociateIpGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateIpGroupsRequest }
        output: DisassociateIpGroupsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ImportClientBranding': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ImportClientBranding'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportClientBrandingRequest }
        output: ImportClientBrandingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ImportWorkspaceImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportWorkspaceImageRequest }
        output: ImportWorkspaceImageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ListAvailableManagementCidrRanges'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableManagementCidrRangesRequest }
        output: ListAvailableManagementCidrRangesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.MigrateWorkspace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.MigrateWorkspace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MigrateWorkspaceRequest }
        output: MigrateWorkspaceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyAccountRequest }
        output: ModifyAccountResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyCertificateBasedAuthProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyCertificateBasedAuthPropertiesRequest }
        output: ModifyCertificateBasedAuthPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyClientProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyClientProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClientPropertiesRequest }
        output: ModifyClientPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifySamlProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifySamlProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifySamlPropertiesRequest }
        output: ModifySamlPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifySelfservicePermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifySelfservicePermissionsRequest }
        output: ModifySelfservicePermissionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyWorkspaceAccessProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyWorkspaceAccessPropertiesRequest }
        output: ModifyWorkspaceAccessPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyWorkspaceCreationProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyWorkspaceCreationPropertiesRequest }
        output: ModifyWorkspaceCreationPropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyWorkspaceProperties'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyWorkspacePropertiesRequest }
        output: ModifyWorkspacePropertiesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.ModifyWorkspaceState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyWorkspaceStateRequest }
        output: ModifyWorkspaceStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.RebootWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.RebootWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebootWorkspacesRequest }
        output: RebootWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.RebuildWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.RebuildWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RebuildWorkspacesRequest }
        output: RebuildWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.RegisterWorkspaceDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterWorkspaceDirectoryRequest }
        output: RegisterWorkspaceDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.RestoreWorkspace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.RestoreWorkspace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreWorkspaceRequest }
        output: RestoreWorkspaceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.RevokeIpRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.RevokeIpRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeIpRulesRequest }
        output: RevokeIpRulesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.StartWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.StartWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartWorkspacesRequest }
        output: StartWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.StopWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.StopWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopWorkspacesRequest }
        output: StopWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.TerminateWorkspaces': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.TerminateWorkspaces'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateWorkspacesRequest }
        output: TerminateWorkspacesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.UpdateConnectClientAddIn'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConnectClientAddInRequest }
        output: UpdateConnectClientAddInResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.UpdateConnectionAliasPermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConnectionAliasPermissionRequest }
        output: UpdateConnectionAliasPermissionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.UpdateRulesOfIpGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRulesOfIpGroupRequest }
        output: UpdateRulesOfIpGroupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.UpdateWorkspaceBundle'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWorkspaceBundleRequest }
        output: UpdateWorkspaceBundleResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkspacesService.UpdateWorkspaceImagePermission'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateWorkspaceImagePermissionRequest }
        output: UpdateWorkspaceImagePermissionResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
