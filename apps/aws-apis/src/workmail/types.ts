type AssociateDelegateToResourceRequest = { OrganizationId: {}; ResourceId: {}; EntityId: {} }
type AssociateDelegateToResourceResponse = { [x: string]: unknown }
type AssociateMemberToGroupRequest = { OrganizationId: {}; GroupId: {}; MemberId: {} }
type AssociateMemberToGroupResponse = { [x: string]: unknown }
type AssumeImpersonationRoleRequest = { OrganizationId: {}; ImpersonationRoleId: {} }
type AssumeImpersonationRoleResponse = { Token?: {} | undefined; ExpiresIn?: {} | undefined }
type CancelMailboxExportJobRequest = { ClientToken: {}; JobId: {}; OrganizationId: {} }
type CancelMailboxExportJobResponse = { [x: string]: unknown }
type CreateAliasRequest = { OrganizationId: {}; EntityId: {}; Alias: {} }
type CreateAliasResponse = { [x: string]: unknown }
type CreateAvailabilityConfigurationRequest = {
  ClientToken?: {} | undefined
  OrganizationId: {}
  DomainName: {}
  EwsProvider?: { EwsEndpoint: {}; EwsUsername: {}; EwsPassword: {} } | undefined
  LambdaProvider?: { LambdaArn: {} } | undefined
}
type CreateAvailabilityConfigurationResponse = { [x: string]: unknown }
type CreateGroupRequest = { OrganizationId: {}; Name: {} }
type CreateGroupResponse = { GroupId?: {} | undefined }
type CreateImpersonationRoleRequest = {
  ClientToken?: {} | undefined
  OrganizationId: {}
  Name: {}
  Type: {}
  Description?: {} | undefined
  Rules: {}
}
type CreateImpersonationRoleResponse = { ImpersonationRoleId?: {} | undefined }
type CreateMobileDeviceAccessRuleRequest = {
  OrganizationId: {}
  ClientToken?: {} | undefined
  Name: {}
  Description?: {} | undefined
  Effect: {}
  DeviceTypes?: {} | undefined
  NotDeviceTypes?: {} | undefined
  DeviceModels?: {} | undefined
  NotDeviceModels?: {} | undefined
  DeviceOperatingSystems?: {} | undefined
  NotDeviceOperatingSystems?: {} | undefined
  DeviceUserAgents?: {} | undefined
  NotDeviceUserAgents?: {} | undefined
}
type CreateMobileDeviceAccessRuleResponse = { MobileDeviceAccessRuleId?: {} | undefined }
type CreateOrganizationRequest = {
  DirectoryId?: {} | undefined
  Alias: {}
  ClientToken?: {} | undefined
  Domains?: {} | undefined
  KmsKeyArn?: {} | undefined
  EnableInteroperability?: {} | undefined
}
type CreateOrganizationResponse = { OrganizationId?: {} | undefined }
type CreateResourceRequest = { OrganizationId: {}; Name: {}; Type: {} }
type CreateResourceResponse = { ResourceId?: {} | undefined }
type CreateUserRequest = { OrganizationId: {}; Name: {}; DisplayName: {}; Password: {} }
type CreateUserResponse = { UserId?: {} | undefined }
type DeleteAccessControlRuleRequest = { OrganizationId: {}; Name: {} }
type DeleteAccessControlRuleResponse = { [x: string]: unknown }
type DeleteAliasRequest = { OrganizationId: {}; EntityId: {}; Alias: {} }
type DeleteAliasResponse = { [x: string]: unknown }
type DeleteAvailabilityConfigurationRequest = { OrganizationId: {}; DomainName: {} }
type DeleteAvailabilityConfigurationResponse = { [x: string]: unknown }
type DeleteEmailMonitoringConfigurationRequest = { OrganizationId: {} }
type DeleteEmailMonitoringConfigurationResponse = { [x: string]: unknown }
type DeleteGroupRequest = { OrganizationId: {}; GroupId: {} }
type DeleteGroupResponse = { [x: string]: unknown }
type DeleteImpersonationRoleRequest = { OrganizationId: {}; ImpersonationRoleId: {} }
type DeleteImpersonationRoleResponse = { [x: string]: unknown }
type DeleteMailboxPermissionsRequest = { OrganizationId: {}; EntityId: {}; GranteeId: {} }
type DeleteMailboxPermissionsResponse = { [x: string]: unknown }
type DeleteMobileDeviceAccessOverrideRequest = { OrganizationId: {}; UserId: {}; DeviceId: {} }
type DeleteMobileDeviceAccessOverrideResponse = { [x: string]: unknown }
type DeleteMobileDeviceAccessRuleRequest = { OrganizationId: {}; MobileDeviceAccessRuleId: {} }
type DeleteMobileDeviceAccessRuleResponse = { [x: string]: unknown }
type DeleteOrganizationRequest = {
  ClientToken?: {} | undefined
  OrganizationId: {}
  DeleteDirectory: {}
}
type DeleteOrganizationResponse = { OrganizationId?: {} | undefined; State?: {} | undefined }
type DeleteResourceRequest = { OrganizationId: {}; ResourceId: {} }
type DeleteResourceResponse = { [x: string]: unknown }
type DeleteRetentionPolicyRequest = { OrganizationId: {}; Id: {} }
type DeleteRetentionPolicyResponse = { [x: string]: unknown }
type DeleteUserRequest = { OrganizationId: {}; UserId: {} }
type DeleteUserResponse = { [x: string]: unknown }
type DeregisterFromWorkMailRequest = { OrganizationId: {}; EntityId: {} }
type DeregisterFromWorkMailResponse = { [x: string]: unknown }
type DeregisterMailDomainRequest = { OrganizationId: {}; DomainName: {} }
type DeregisterMailDomainResponse = { [x: string]: unknown }
type DescribeEmailMonitoringConfigurationRequest = { OrganizationId: {} }
type DescribeEmailMonitoringConfigurationResponse = {
  RoleArn?: {} | undefined
  LogGroupArn?: {} | undefined
}
type DescribeGroupRequest = { OrganizationId: {}; GroupId: {} }
type DescribeGroupResponse = {
  GroupId?: {} | undefined
  Name?: {} | undefined
  Email?: {} | undefined
  State?: {} | undefined
  EnabledDate?: {} | undefined
  DisabledDate?: {} | undefined
}
type DescribeInboundDmarcSettingsRequest = { OrganizationId: {} }
type DescribeInboundDmarcSettingsResponse = { Enforced?: {} | undefined }
type DescribeMailboxExportJobRequest = { JobId: {}; OrganizationId: {} }
type DescribeMailboxExportJobResponse = {
  EntityId?: {} | undefined
  Description?: {} | undefined
  RoleArn?: {} | undefined
  KmsKeyArn?: {} | undefined
  S3BucketName?: {} | undefined
  S3Prefix?: {} | undefined
  S3Path?: {} | undefined
  EstimatedProgress?: {} | undefined
  State?: {} | undefined
  ErrorInfo?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
}
type DescribeOrganizationRequest = { OrganizationId: {} }
type DescribeOrganizationResponse = {
  OrganizationId?: {} | undefined
  Alias?: {} | undefined
  State?: {} | undefined
  DirectoryId?: {} | undefined
  DirectoryType?: {} | undefined
  DefaultMailDomain?: {} | undefined
  CompletedDate?: {} | undefined
  ErrorMessage?: {} | undefined
  ARN?: {} | undefined
}
type DescribeResourceRequest = { OrganizationId: {}; ResourceId: {} }
type DescribeResourceResponse = {
  ResourceId?: {} | undefined
  Email?: {} | undefined
  Name?: {} | undefined
  Type?: {} | undefined
  BookingOptions?:
    | {
        AutoAcceptRequests?: {} | undefined
        AutoDeclineRecurringRequests?: {} | undefined
        AutoDeclineConflictingRequests?: {} | undefined
      }
    | undefined
  State?: {} | undefined
  EnabledDate?: {} | undefined
  DisabledDate?: {} | undefined
}
type DescribeUserRequest = { OrganizationId: {}; UserId: {} }
type DescribeUserResponse = {
  UserId?: {} | undefined
  Name?: {} | undefined
  Email?: {} | undefined
  DisplayName?: {} | undefined
  State?: {} | undefined
  UserRole?: {} | undefined
  EnabledDate?: {} | undefined
  DisabledDate?: {} | undefined
}
type DisassociateDelegateFromResourceRequest = { OrganizationId: {}; ResourceId: {}; EntityId: {} }
type DisassociateDelegateFromResourceResponse = { [x: string]: unknown }
type DisassociateMemberFromGroupRequest = { OrganizationId: {}; GroupId: {}; MemberId: {} }
type DisassociateMemberFromGroupResponse = { [x: string]: unknown }
type GetAccessControlEffectRequest = {
  OrganizationId: {}
  IpAddress: {}
  Action: {}
  UserId?: {} | undefined
  ImpersonationRoleId?: {} | undefined
}
type GetAccessControlEffectResponse = { Effect?: {} | undefined; MatchedRules?: {} | undefined }
type GetDefaultRetentionPolicyRequest = { OrganizationId: {} }
type GetDefaultRetentionPolicyResponse = {
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  FolderConfigurations?: {} | undefined
}
type GetImpersonationRoleRequest = { OrganizationId: {}; ImpersonationRoleId: {} }
type GetImpersonationRoleResponse = {
  ImpersonationRoleId?: {} | undefined
  Name?: {} | undefined
  Type?: {} | undefined
  Description?: {} | undefined
  Rules?: {} | undefined
  DateCreated?: {} | undefined
  DateModified?: {} | undefined
}
type GetImpersonationRoleEffectRequest = {
  OrganizationId: {}
  ImpersonationRoleId: {}
  TargetUser: {}
}
type GetImpersonationRoleEffectResponse = {
  Type?: {} | undefined
  Effect?: {} | undefined
  MatchedRules?: {} | undefined
}
type GetMailDomainRequest = { OrganizationId: {}; DomainName: {} }
type GetMailDomainResponse = {
  Records?: {} | undefined
  IsTestDomain?: {} | undefined
  IsDefault?: {} | undefined
  OwnershipVerificationStatus?: {} | undefined
  DkimVerificationStatus?: {} | undefined
}
type GetMailboxDetailsRequest = { OrganizationId: {}; UserId: {} }
type GetMailboxDetailsResponse = { MailboxQuota?: {} | undefined; MailboxSize?: {} | undefined }
type GetMobileDeviceAccessEffectRequest = {
  OrganizationId: {}
  DeviceType?: {} | undefined
  DeviceModel?: {} | undefined
  DeviceOperatingSystem?: {} | undefined
  DeviceUserAgent?: {} | undefined
}
type GetMobileDeviceAccessEffectResponse = {
  Effect?: {} | undefined
  MatchedRules?: {} | undefined
}
type GetMobileDeviceAccessOverrideRequest = { OrganizationId: {}; UserId: {}; DeviceId: {} }
type GetMobileDeviceAccessOverrideResponse = {
  UserId?: {} | undefined
  DeviceId?: {} | undefined
  Effect?: {} | undefined
  Description?: {} | undefined
  DateCreated?: {} | undefined
  DateModified?: {} | undefined
}
type ListAccessControlRulesRequest = { OrganizationId: {} }
type ListAccessControlRulesResponse = { Rules?: {} | undefined }
type ListAliasesRequest = {
  OrganizationId: {}
  EntityId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAliasesResponse = { Aliases?: {} | undefined; NextToken?: {} | undefined }
type ListAvailabilityConfigurationsRequest = {
  OrganizationId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAvailabilityConfigurationsResponse = {
  AvailabilityConfigurations?: {} | undefined
  NextToken?: {} | undefined
}
type ListGroupMembersRequest = {
  OrganizationId: {}
  GroupId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListGroupMembersResponse = { Members?: {} | undefined; NextToken?: {} | undefined }
type ListGroupsRequest = {
  OrganizationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListGroupsResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type ListImpersonationRolesRequest = {
  OrganizationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListImpersonationRolesResponse = { Roles?: {} | undefined; NextToken?: {} | undefined }
type ListMailDomainsRequest = {
  OrganizationId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListMailDomainsResponse = { MailDomains?: {} | undefined; NextToken?: {} | undefined }
type ListMailboxExportJobsRequest = {
  OrganizationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMailboxExportJobsResponse = { Jobs?: {} | undefined; NextToken?: {} | undefined }
type ListMailboxPermissionsRequest = {
  OrganizationId: {}
  EntityId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMailboxPermissionsResponse = { Permissions?: {} | undefined; NextToken?: {} | undefined }
type ListMobileDeviceAccessOverridesRequest = {
  OrganizationId: {}
  UserId?: {} | undefined
  DeviceId?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListMobileDeviceAccessOverridesResponse = {
  Overrides?: {} | undefined
  NextToken?: {} | undefined
}
type ListMobileDeviceAccessRulesRequest = { OrganizationId: {} }
type ListMobileDeviceAccessRulesResponse = { Rules?: {} | undefined }
type ListOrganizationsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListOrganizationsResponse = {
  OrganizationSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceDelegatesRequest = {
  OrganizationId: {}
  ResourceId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListResourceDelegatesResponse = { Delegates?: {} | undefined; NextToken?: {} | undefined }
type ListResourcesRequest = {
  OrganizationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListResourcesResponse = { Resources?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceARN: {} }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type ListUsersRequest = {
  OrganizationId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListUsersResponse = { Users?: {} | undefined; NextToken?: {} | undefined }
type PutAccessControlRuleRequest = {
  Name: {}
  Effect: {}
  Description: {}
  IpRanges?: {} | undefined
  NotIpRanges?: {} | undefined
  Actions?: {} | undefined
  NotActions?: {} | undefined
  UserIds?: {} | undefined
  NotUserIds?: {} | undefined
  OrganizationId: {}
  ImpersonationRoleIds?: {} | undefined
  NotImpersonationRoleIds?: {} | undefined
}
type PutAccessControlRuleResponse = { [x: string]: unknown }
type PutEmailMonitoringConfigurationRequest = { OrganizationId: {}; RoleArn: {}; LogGroupArn: {} }
type PutEmailMonitoringConfigurationResponse = { [x: string]: unknown }
type PutInboundDmarcSettingsRequest = { OrganizationId: {}; Enforced: {} }
type PutInboundDmarcSettingsResponse = { [x: string]: unknown }
type PutMailboxPermissionsRequest = {
  OrganizationId: {}
  EntityId: {}
  GranteeId: {}
  PermissionValues: {}
}
type PutMailboxPermissionsResponse = { [x: string]: unknown }
type PutMobileDeviceAccessOverrideRequest = {
  OrganizationId: {}
  UserId: {}
  DeviceId: {}
  Effect: {}
  Description?: {} | undefined
}
type PutMobileDeviceAccessOverrideResponse = { [x: string]: unknown }
type PutRetentionPolicyRequest = {
  OrganizationId: {}
  Id?: {} | undefined
  Name: {}
  Description?: {} | undefined
  FolderConfigurations: {}
}
type PutRetentionPolicyResponse = { [x: string]: unknown }
type RegisterMailDomainRequest = {
  ClientToken?: {} | undefined
  OrganizationId: {}
  DomainName: {}
}
type RegisterMailDomainResponse = { [x: string]: unknown }
type RegisterToWorkMailRequest = { OrganizationId: {}; EntityId: {}; Email: {} }
type RegisterToWorkMailResponse = { [x: string]: unknown }
type ResetPasswordRequest = { OrganizationId: {}; UserId: {}; Password: {} }
type ResetPasswordResponse = { [x: string]: unknown }
type StartMailboxExportJobRequest = {
  ClientToken: {}
  OrganizationId: {}
  EntityId: {}
  Description?: {} | undefined
  RoleArn: {}
  KmsKeyArn: {}
  S3BucketName: {}
  S3Prefix: {}
}
type StartMailboxExportJobResponse = { JobId?: {} | undefined }
type TagResourceRequest = { ResourceARN: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type EwsAvailabilityProvider = { EwsEndpoint: {}; EwsUsername: {}; EwsPassword: {} }
type LambdaAvailabilityProvider = { LambdaArn: {} }
type TestAvailabilityConfigurationRequest = {
  OrganizationId: {}
  DomainName?: {} | undefined
  EwsProvider?: EwsAvailabilityProvider | undefined
  LambdaProvider?: LambdaAvailabilityProvider | undefined
}
type TestAvailabilityConfigurationResponse = {
  TestPassed?: {} | undefined
  FailureReason?: {} | undefined
}
type UntagResourceRequest = { ResourceARN: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAvailabilityConfigurationRequest = {
  OrganizationId: {}
  DomainName: {}
  EwsProvider?: { EwsEndpoint: {}; EwsUsername: {}; EwsPassword: {} } | undefined
  LambdaProvider?: { LambdaArn: {} } | undefined
}
type UpdateAvailabilityConfigurationResponse = { [x: string]: unknown }
type UpdateDefaultMailDomainRequest = { OrganizationId: {}; DomainName: {} }
type UpdateDefaultMailDomainResponse = { [x: string]: unknown }
type UpdateImpersonationRoleRequest = {
  OrganizationId: {}
  ImpersonationRoleId: {}
  Name: {}
  Type: {}
  Description?: {} | undefined
  Rules: {}
}
type UpdateImpersonationRoleResponse = { [x: string]: unknown }
type UpdateMailboxQuotaRequest = { OrganizationId: {}; UserId: {}; MailboxQuota: {} }
type UpdateMailboxQuotaResponse = { [x: string]: unknown }
type UpdateMobileDeviceAccessRuleRequest = {
  OrganizationId: {}
  MobileDeviceAccessRuleId: {}
  Name: {}
  Description?: {} | undefined
  Effect: {}
  DeviceTypes?: {} | undefined
  NotDeviceTypes?: {} | undefined
  DeviceModels?: {} | undefined
  NotDeviceModels?: {} | undefined
  DeviceOperatingSystems?: {} | undefined
  NotDeviceOperatingSystems?: {} | undefined
  DeviceUserAgents?: {} | undefined
  NotDeviceUserAgents?: {} | undefined
}
type UpdateMobileDeviceAccessRuleResponse = { [x: string]: unknown }
type UpdatePrimaryEmailAddressRequest = { OrganizationId: {}; EntityId: {}; Email: {} }
type UpdatePrimaryEmailAddressResponse = { [x: string]: unknown }
type UpdateResourceRequest = {
  OrganizationId: {}
  ResourceId: {}
  Name?: {} | undefined
  BookingOptions?:
    | {
        AutoAcceptRequests?: {} | undefined
        AutoDeclineRecurringRequests?: {} | undefined
        AutoDeclineConflictingRequests?: {} | undefined
      }
    | undefined
}
type UpdateResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=WorkMailService.AssociateDelegateToResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.AssociateDelegateToResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateDelegateToResourceRequest }
        output: AssociateDelegateToResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.AssociateMemberToGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.AssociateMemberToGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateMemberToGroupRequest }
        output: AssociateMemberToGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.AssumeImpersonationRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.AssumeImpersonationRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssumeImpersonationRoleRequest }
        output: AssumeImpersonationRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CancelMailboxExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CancelMailboxExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelMailboxExportJobRequest }
        output: CancelMailboxExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAliasRequest }
        output: CreateAliasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateAvailabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateAvailabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAvailabilityConfigurationRequest }
        output: CreateAvailabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGroupRequest }
        output: CreateGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateImpersonationRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateImpersonationRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateImpersonationRoleRequest }
        output: CreateImpersonationRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateMobileDeviceAccessRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateMobileDeviceAccessRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMobileDeviceAccessRuleRequest }
        output: CreateMobileDeviceAccessRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOrganizationRequest }
        output: CreateOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateResourceRequest }
        output: CreateResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.CreateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.CreateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserRequest }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteAccessControlRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteAccessControlRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccessControlRuleRequest }
        output: DeleteAccessControlRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAliasRequest }
        output: DeleteAliasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteAvailabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteAvailabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAvailabilityConfigurationRequest }
        output: DeleteAvailabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteEmailMonitoringConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteEmailMonitoringConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEmailMonitoringConfigurationRequest }
        output: DeleteEmailMonitoringConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupRequest }
        output: DeleteGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteImpersonationRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteImpersonationRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteImpersonationRoleRequest }
        output: DeleteImpersonationRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteMailboxPermissions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteMailboxPermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMailboxPermissionsRequest }
        output: DeleteMailboxPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteMobileDeviceAccessOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMobileDeviceAccessOverrideRequest }
        output: DeleteMobileDeviceAccessOverrideResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteMobileDeviceAccessRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteMobileDeviceAccessRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMobileDeviceAccessRuleRequest }
        output: DeleteMobileDeviceAccessRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOrganizationRequest }
        output: DeleteOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteResourceRequest }
        output: DeleteResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteRetentionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteRetentionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRetentionPolicyRequest }
        output: DeleteRetentionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: DeleteUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeregisterFromWorkMail': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeregisterFromWorkMail'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterFromWorkMailRequest }
        output: DeregisterFromWorkMailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DeregisterMailDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DeregisterMailDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterMailDomainRequest }
        output: DeregisterMailDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeEmailMonitoringConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeEmailMonitoringConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEmailMonitoringConfigurationRequest }
        output: DescribeEmailMonitoringConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeGroupRequest }
        output: DescribeGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeInboundDmarcSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeInboundDmarcSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInboundDmarcSettingsRequest }
        output: DescribeInboundDmarcSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeMailboxExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeMailboxExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMailboxExportJobRequest }
        output: DescribeMailboxExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOrganizationRequest }
        output: DescribeOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeResourceRequest }
        output: DescribeResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DescribeUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DescribeUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserRequest }
        output: DescribeUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DisassociateDelegateFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DisassociateDelegateFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateDelegateFromResourceRequest }
        output: DisassociateDelegateFromResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.DisassociateMemberFromGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.DisassociateMemberFromGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateMemberFromGroupRequest }
        output: DisassociateMemberFromGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetAccessControlEffect': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetAccessControlEffect'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccessControlEffectRequest }
        output: GetAccessControlEffectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetDefaultRetentionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetDefaultRetentionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDefaultRetentionPolicyRequest }
        output: GetDefaultRetentionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetImpersonationRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetImpersonationRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetImpersonationRoleRequest }
        output: GetImpersonationRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetImpersonationRoleEffect': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetImpersonationRoleEffect'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetImpersonationRoleEffectRequest }
        output: GetImpersonationRoleEffectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetMailDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetMailDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMailDomainRequest }
        output: GetMailDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetMailboxDetails': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetMailboxDetails'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMailboxDetailsRequest }
        output: GetMailboxDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessEffect': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetMobileDeviceAccessEffect'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMobileDeviceAccessEffectRequest }
        output: GetMobileDeviceAccessEffectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.GetMobileDeviceAccessOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.GetMobileDeviceAccessOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMobileDeviceAccessOverrideRequest }
        output: GetMobileDeviceAccessOverrideResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListAccessControlRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.ListAccessControlRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccessControlRulesRequest }
        output: ListAccessControlRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListAliases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAliasesRequest }
        output: ListAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListAvailabilityConfigurations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListAvailabilityConfigurations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailabilityConfigurationsRequest }
        output: ListAvailabilityConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListGroupMembers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListGroupMembers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupMembersRequest }
        output: ListGroupMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListGroups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGroupsRequest }
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListImpersonationRoles': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListImpersonationRoles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListImpersonationRolesRequest }
        output: ListImpersonationRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListMailDomains': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListMailDomains'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMailDomainsRequest }
        output: ListMailDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListMailboxExportJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListMailboxExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMailboxExportJobsRequest }
        output: ListMailboxExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListMailboxPermissions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListMailboxPermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMailboxPermissionsRequest }
        output: ListMailboxPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessOverrides': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListMobileDeviceAccessOverrides'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMobileDeviceAccessOverridesRequest }
        output: ListMobileDeviceAccessOverridesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListMobileDeviceAccessRules': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.ListMobileDeviceAccessRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMobileDeviceAccessRulesRequest }
        output: ListMobileDeviceAccessRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListOrganizations': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListOrganizations'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOrganizationsRequest }
        output: ListOrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListResourceDelegates': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListResourceDelegates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceDelegatesRequest }
        output: ListResourceDelegatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListResources': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListResources'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourcesRequest }
        output: ListResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.ListTagsForResource'
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
    '/#X-Amz-Target=WorkMailService.ListUsers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'WorkMailService.ListUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUsersRequest }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutAccessControlRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutAccessControlRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAccessControlRuleRequest }
        output: PutAccessControlRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutEmailMonitoringConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutEmailMonitoringConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutEmailMonitoringConfigurationRequest }
        output: PutEmailMonitoringConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutInboundDmarcSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutInboundDmarcSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInboundDmarcSettingsRequest }
        output: PutInboundDmarcSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutMailboxPermissions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutMailboxPermissions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMailboxPermissionsRequest }
        output: PutMailboxPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutMobileDeviceAccessOverride': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutMobileDeviceAccessOverride'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutMobileDeviceAccessOverrideRequest }
        output: PutMobileDeviceAccessOverrideResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.PutRetentionPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.PutRetentionPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRetentionPolicyRequest }
        output: PutRetentionPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.RegisterMailDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.RegisterMailDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterMailDomainRequest }
        output: RegisterMailDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.RegisterToWorkMail': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.RegisterToWorkMail'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterToWorkMailRequest }
        output: RegisterToWorkMailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.ResetPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.ResetPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetPasswordRequest }
        output: ResetPasswordResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.StartMailboxExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.StartMailboxExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartMailboxExportJobRequest }
        output: StartMailboxExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.TagResource'
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
    '/#X-Amz-Target=WorkMailService.TestAvailabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.TestAvailabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestAvailabilityConfigurationRequest }
        output: TestAvailabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UntagResource'
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
    '/#X-Amz-Target=WorkMailService.UpdateAvailabilityConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateAvailabilityConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAvailabilityConfigurationRequest }
        output: UpdateAvailabilityConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdateDefaultMailDomain': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateDefaultMailDomain'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDefaultMailDomainRequest }
        output: UpdateDefaultMailDomainResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdateImpersonationRole': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateImpersonationRole'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateImpersonationRoleRequest }
        output: UpdateImpersonationRoleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdateMailboxQuota': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateMailboxQuota'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMailboxQuotaRequest }
        output: UpdateMailboxQuotaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdateMobileDeviceAccessRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateMobileDeviceAccessRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMobileDeviceAccessRuleRequest }
        output: UpdateMobileDeviceAccessRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdatePrimaryEmailAddress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdatePrimaryEmailAddress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePrimaryEmailAddressRequest }
        output: UpdatePrimaryEmailAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=WorkMailService.UpdateResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'WorkMailService.UpdateResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateResourceRequest }
        output: UpdateResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
