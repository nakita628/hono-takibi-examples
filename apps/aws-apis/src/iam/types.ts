type AddClientIDToOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {}; ClientID: {} }
type AddRoleToInstanceProfileRequest = { InstanceProfileName: {}; RoleName: {} }
type AddUserToGroupRequest = { GroupName: {}; UserName: {} }
type AttachGroupPolicyRequest = { GroupName: {}; PolicyArn: {} }
type AttachRolePolicyRequest = { RoleName: {}; PolicyArn: {} }
type AttachUserPolicyRequest = { UserName: {}; PolicyArn: {} }
type ChangePasswordRequest = { OldPassword: {}; NewPassword: {} }
type CreateAccessKeyResponse = {
  AccessKey: {
    UserName: {}
    AccessKeyId: {}
    Status: {}
    SecretAccessKey: {}
    CreateDate?: {} | undefined
  }
}
type CreateAccessKeyRequest = { UserName?: {} | undefined }
type CreateAccountAliasRequest = { AccountAlias: {} }
type CreateGroupResponse = {
  Group: { Path: {}; GroupName: {}; GroupId: {}; Arn: {}; CreateDate: {} }
}
type CreateGroupRequest = { Path?: {} | undefined; GroupName: {} }
type Tag = { Key: {}; Value: {} }
type CreateInstanceProfileResponse = {
  InstanceProfile: {
    Path: {}
    InstanceProfileName: {}
    InstanceProfileId: {}
    Arn: {}
    CreateDate: {}
    Roles: {}
    Tags?: {} | undefined
  }
}
type CreateInstanceProfileRequest = {
  InstanceProfileName: {}
  Path?: {} | undefined
  Tags?: {} | undefined
}
type CreateLoginProfileResponse = {
  LoginProfile: { UserName: {}; CreateDate: {}; PasswordResetRequired?: {} | undefined }
}
type CreateLoginProfileRequest = {
  UserName: {}
  Password: {}
  PasswordResetRequired?: {} | undefined
}
type ClientIDType = string
type ThumbprintType = string
type CreateOpenIDConnectProviderResponse = {
  OpenIDConnectProviderArn?: {} | undefined
  Tags?: {} | undefined
}
type CreateOpenIDConnectProviderRequest = {
  Url: {}
  ClientIDList?: {} | undefined
  ThumbprintList: {}
  Tags?: {} | undefined
}
type ArnType = string
type CreatePolicyResponse = {
  Policy?:
    | {
        PolicyName?: {} | undefined
        PolicyId?: {} | undefined
        Arn?: ArnType | undefined
        Path?: {} | undefined
        DefaultVersionId?: {} | undefined
        AttachmentCount?: {} | undefined
        PermissionsBoundaryUsageCount?: {} | undefined
        IsAttachable?: {} | undefined
        Description?: {} | undefined
        CreateDate?: {} | undefined
        UpdateDate?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type CreatePolicyRequest = {
  PolicyName: {}
  Path?: {} | undefined
  PolicyDocument: {}
  Description?: {} | undefined
  Tags?: {} | undefined
}
type CreatePolicyVersionResponse = {
  PolicyVersion?:
    | {
        Document?: {} | undefined
        VersionId?: {} | undefined
        IsDefaultVersion?: {} | undefined
        CreateDate?: {} | undefined
      }
    | undefined
}
type CreatePolicyVersionRequest = {
  PolicyArn: {}
  PolicyDocument: {}
  SetAsDefault?: {} | undefined
}
type CreateRoleResponse = {
  Role: {
    Path: {}
    RoleName: {}
    RoleId: {}
    Arn: {}
    CreateDate: {}
    AssumeRolePolicyDocument?: {} | undefined
    Description?: {} | undefined
    MaxSessionDuration?: {} | undefined
    PermissionsBoundary?:
      | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
      | undefined
    Tags?: {} | undefined
    RoleLastUsed?: { LastUsedDate?: {} | undefined; Region?: {} | undefined } | undefined
  }
}
type CreateRoleRequest = {
  Path?: {} | undefined
  RoleName: {}
  AssumeRolePolicyDocument: {}
  Description?: {} | undefined
  MaxSessionDuration?: {} | undefined
  PermissionsBoundary?: {} | undefined
  Tags?: {} | undefined
}
type CreateSAMLProviderResponse = { SAMLProviderArn?: {} | undefined; Tags?: {} | undefined }
type CreateSAMLProviderRequest = { SAMLMetadataDocument: {}; Name: {}; Tags?: {} | undefined }
type CreateServiceLinkedRoleResponse = {
  Role?:
    | {
        Path: {}
        RoleName: {}
        RoleId: {}
        Arn: {}
        CreateDate: {}
        AssumeRolePolicyDocument?: {} | undefined
        Description?: {} | undefined
        MaxSessionDuration?: {} | undefined
        PermissionsBoundary?:
          | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
          | undefined
        Tags?: {} | undefined
        RoleLastUsed?: { LastUsedDate?: {} | undefined; Region?: {} | undefined } | undefined
      }
    | undefined
}
type CreateServiceLinkedRoleRequest = {
  AWSServiceName: {}
  Description?: {} | undefined
  CustomSuffix?: {} | undefined
}
type CreateServiceSpecificCredentialResponse = {
  ServiceSpecificCredential?:
    | {
        CreateDate: {}
        ServiceName: {}
        ServiceUserName: {}
        ServicePassword: {}
        ServiceSpecificCredentialId: {}
        UserName: {}
        Status: {}
      }
    | undefined
}
type CreateServiceSpecificCredentialRequest = { UserName: {}; ServiceName: {} }
type CreateUserResponse = {
  User?:
    | {
        Path: {}
        UserName: {}
        UserId: {}
        Arn: {}
        CreateDate: {}
        PasswordLastUsed?: {} | undefined
        PermissionsBoundary?:
          | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
          | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type CreateUserRequest = {
  Path?: {} | undefined
  UserName: {}
  PermissionsBoundary?: {} | undefined
  Tags?: {} | undefined
}
type CreateVirtualMFADeviceResponse = {
  VirtualMFADevice: {
    SerialNumber: {}
    Base32StringSeed?: {} | undefined
    QRCodePNG?: {} | undefined
    User?:
      | {
          Path: {}
          UserName: {}
          UserId: {}
          Arn: {}
          CreateDate: {}
          PasswordLastUsed?: {} | undefined
          PermissionsBoundary?:
            | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
            | undefined
          Tags?: {} | undefined
        }
      | undefined
    EnableDate?: {} | undefined
    Tags?: {} | undefined
  }
}
type CreateVirtualMFADeviceRequest = {
  Path?: {} | undefined
  VirtualMFADeviceName: {}
  Tags?: {} | undefined
}
type DeactivateMFADeviceRequest = { UserName: {}; SerialNumber: {} }
type DeleteAccessKeyRequest = { UserName?: {} | undefined; AccessKeyId: {} }
type DeleteAccountAliasRequest = { AccountAlias: {} }
type DeleteGroupRequest = { GroupName: {} }
type DeleteGroupPolicyRequest = { GroupName: {}; PolicyName: {} }
type DeleteInstanceProfileRequest = { InstanceProfileName: {} }
type DeleteLoginProfileRequest = { UserName: {} }
type DeleteOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {} }
type DeletePolicyRequest = { PolicyArn: {} }
type DeletePolicyVersionRequest = { PolicyArn: {}; VersionId: {} }
type DeleteRoleRequest = { RoleName: {} }
type DeleteRolePermissionsBoundaryRequest = { RoleName: {} }
type DeleteRolePolicyRequest = { RoleName: {}; PolicyName: {} }
type DeleteSAMLProviderRequest = { SAMLProviderArn: {} }
type DeleteSSHPublicKeyRequest = { UserName: {}; SSHPublicKeyId: {} }
type DeleteServerCertificateRequest = { ServerCertificateName: {} }
type DeleteServiceLinkedRoleResponse = { DeletionTaskId: {} }
type DeleteServiceLinkedRoleRequest = { RoleName: {} }
type DeleteServiceSpecificCredentialRequest = {
  UserName?: {} | undefined
  ServiceSpecificCredentialId: {}
}
type DeleteSigningCertificateRequest = { UserName?: {} | undefined; CertificateId: {} }
type DeleteUserRequest = { UserName: {} }
type DeleteUserPermissionsBoundaryRequest = { UserName: {} }
type DeleteUserPolicyRequest = { UserName: {}; PolicyName: {} }
type DeleteVirtualMFADeviceRequest = { SerialNumber: {} }
type DetachGroupPolicyRequest = { GroupName: {}; PolicyArn: {} }
type DetachRolePolicyRequest = { RoleName: {}; PolicyArn: {} }
type DetachUserPolicyRequest = { UserName: {}; PolicyArn: {} }
type EnableMFADeviceRequest = {
  UserName: {}
  SerialNumber: {}
  AuthenticationCode1: {}
  AuthenticationCode2: {}
}
type GenerateCredentialReportResponse = { State?: {} | undefined; Description?: {} | undefined }
type GenerateOrganizationsAccessReportResponse = { JobId?: {} | undefined }
type GenerateOrganizationsAccessReportRequest = {
  EntityPath: {}
  OrganizationsPolicyId?: {} | undefined
}
type GenerateServiceLastAccessedDetailsResponse = { JobId?: {} | undefined }
type GenerateServiceLastAccessedDetailsRequest = { Arn: {}; Granularity?: {} | undefined }
type GetAccessKeyLastUsedResponse = {
  UserName?: {} | undefined
  AccessKeyLastUsed?: { LastUsedDate: {}; ServiceName: {}; Region: {} } | undefined
}
type GetAccessKeyLastUsedRequest = { AccessKeyId: {} }
type EntityType = 'User' | 'Role' | 'Group' | 'LocalManagedPolicy' | 'AWSManagedPolicy'
type GetAccountAuthorizationDetailsResponse = {
  UserDetailList?: {} | undefined
  GroupDetailList?: {} | undefined
  RoleDetailList?: {} | undefined
  Policies?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type GetAccountAuthorizationDetailsRequest = {
  Filter?: {} | undefined
  MaxItems?: {} | undefined
  Marker?: {} | undefined
}
type GetAccountPasswordPolicyResponse = {
  PasswordPolicy: {
    MinimumPasswordLength?: {} | undefined
    RequireSymbols?: {} | undefined
    RequireNumbers?: {} | undefined
    RequireUppercaseCharacters?: {} | undefined
    RequireLowercaseCharacters?: {} | undefined
    AllowUsersToChangePassword?: {} | undefined
    ExpirePasswords?: {} | undefined
    MaxPasswordAge?: {} | undefined
    PasswordReusePrevention?: {} | undefined
    HardExpiry?: {} | undefined
  }
}
type GetAccountSummaryResponse = { SummaryMap?: {} | undefined }
type PolicyDocumentType = string
type GetContextKeysForPolicyResponse = { ContextKeyNames?: {} | undefined }
type GetContextKeysForCustomPolicyRequest = { PolicyInputList: {} }
type GetContextKeysForPrincipalPolicyRequest = {
  PolicySourceArn: {}
  PolicyInputList?: {} | undefined
}
type GetCredentialReportResponse = {
  Content?: {} | undefined
  ReportFormat?: {} | undefined
  GeneratedTime?: {} | undefined
}
type GetGroupResponse = {
  Group: { Path: {}; GroupName: {}; GroupId: {}; Arn: {}; CreateDate: {} }
  Users: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type GetGroupRequest = { GroupName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type GetGroupPolicyResponse = { GroupName: {}; PolicyName: {}; PolicyDocument: {} }
type GetGroupPolicyRequest = { GroupName: {}; PolicyName: {} }
type GetInstanceProfileResponse = {
  InstanceProfile: {
    Path: {}
    InstanceProfileName: {}
    InstanceProfileId: {}
    Arn: {}
    CreateDate: {}
    Roles: {}
    Tags?: {} | undefined
  }
}
type GetInstanceProfileRequest = { InstanceProfileName: {} }
type GetLoginProfileResponse = {
  LoginProfile: { UserName: {}; CreateDate: {}; PasswordResetRequired?: {} | undefined }
}
type GetLoginProfileRequest = { UserName: {} }
type GetMFADeviceResponse = {
  UserName?: {} | undefined
  SerialNumber: {}
  EnableDate?: {} | undefined
  Certifications?: {} | undefined
}
type GetMFADeviceRequest = { SerialNumber: {}; UserName?: {} | undefined }
type GetOpenIDConnectProviderResponse = {
  Url?: {} | undefined
  ClientIDList?: {} | undefined
  ThumbprintList?: {} | undefined
  CreateDate?: {} | undefined
  Tags?: {} | undefined
}
type GetOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {} }
type ErrorDetails = { Message: {}; Code: {} }
type GetOrganizationsAccessReportResponse = {
  JobStatus: {}
  JobCreationDate: {}
  JobCompletionDate?: {} | undefined
  NumberOfServicesAccessible?: {} | undefined
  NumberOfServicesNotAccessed?: {} | undefined
  AccessDetails?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
  ErrorDetails?: ErrorDetails | undefined
}
type GetOrganizationsAccessReportRequest = {
  JobId: {}
  MaxItems?: {} | undefined
  Marker?: {} | undefined
  SortKey?: {} | undefined
}
type GetPolicyResponse = {
  Policy?:
    | {
        PolicyName?: {} | undefined
        PolicyId?: {} | undefined
        Arn?: ArnType | undefined
        Path?: {} | undefined
        DefaultVersionId?: {} | undefined
        AttachmentCount?: {} | undefined
        PermissionsBoundaryUsageCount?: {} | undefined
        IsAttachable?: {} | undefined
        Description?: {} | undefined
        CreateDate?: {} | undefined
        UpdateDate?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type GetPolicyRequest = { PolicyArn: {} }
type GetPolicyVersionResponse = {
  PolicyVersion?:
    | {
        Document?: {} | undefined
        VersionId?: {} | undefined
        IsDefaultVersion?: {} | undefined
        CreateDate?: {} | undefined
      }
    | undefined
}
type GetPolicyVersionRequest = { PolicyArn: {}; VersionId: {} }
type GetRoleResponse = {
  Role: {
    Path: {}
    RoleName: {}
    RoleId: {}
    Arn: {}
    CreateDate: {}
    AssumeRolePolicyDocument?: {} | undefined
    Description?: {} | undefined
    MaxSessionDuration?: {} | undefined
    PermissionsBoundary?:
      | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
      | undefined
    Tags?: {} | undefined
    RoleLastUsed?: { LastUsedDate?: {} | undefined; Region?: {} | undefined } | undefined
  }
}
type GetRoleRequest = { RoleName: {} }
type GetRolePolicyResponse = { RoleName: {}; PolicyName: {}; PolicyDocument: {} }
type GetRolePolicyRequest = { RoleName: {}; PolicyName: {} }
type GetSAMLProviderResponse = {
  SAMLMetadataDocument?: {} | undefined
  CreateDate?: {} | undefined
  ValidUntil?: {} | undefined
  Tags?: {} | undefined
}
type GetSAMLProviderRequest = { SAMLProviderArn: {} }
type GetSSHPublicKeyResponse = {
  SSHPublicKey?:
    | {
        UserName: {}
        SSHPublicKeyId: {}
        Fingerprint: {}
        SSHPublicKeyBody: {}
        Status: {}
        UploadDate?: {} | undefined
      }
    | undefined
}
type GetSSHPublicKeyRequest = { UserName: {}; SSHPublicKeyId: {}; Encoding: {} }
type GetServerCertificateResponse = {
  ServerCertificate: {
    ServerCertificateMetadata: {
      Path: {}
      ServerCertificateName: {}
      ServerCertificateId: {}
      Arn: {}
      UploadDate?: {} | undefined
      Expiration?: {} | undefined
    }
    CertificateBody: {}
    CertificateChain?: {} | undefined
    Tags?: {} | undefined
  }
}
type GetServerCertificateRequest = { ServerCertificateName: {} }
type GetServiceLastAccessedDetailsResponse = {
  JobStatus: {}
  JobType?: {} | undefined
  JobCreationDate: {}
  ServicesLastAccessed: {}
  JobCompletionDate: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
  Error?: { Message: {}; Code: {} } | undefined
}
type GetServiceLastAccessedDetailsRequest = {
  JobId: {}
  MaxItems?: {} | undefined
  Marker?: {} | undefined
}
type GetServiceLastAccessedDetailsWithEntitiesResponse = {
  JobStatus: {}
  JobCreationDate: {}
  JobCompletionDate: {}
  EntityDetailsList: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
  Error?: { Message: {}; Code: {} } | undefined
}
type GetServiceLastAccessedDetailsWithEntitiesRequest = {
  JobId: {}
  ServiceNamespace: {}
  MaxItems?: {} | undefined
  Marker?: {} | undefined
}
type GetServiceLinkedRoleDeletionStatusResponse = {
  Status: {}
  Reason?: { Reason?: {} | undefined; RoleUsageList?: {} | undefined } | undefined
}
type GetServiceLinkedRoleDeletionStatusRequest = { DeletionTaskId: {} }
type GetUserResponse = {
  User: {
    Path: {}
    UserName: {}
    UserId: {}
    Arn: {}
    CreateDate: {}
    PasswordLastUsed?: {} | undefined
    PermissionsBoundary?:
      | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
      | undefined
    Tags?: {} | undefined
  }
}
type GetUserRequest = { UserName?: {} | undefined }
type GetUserPolicyResponse = { UserName: {}; PolicyName: {}; PolicyDocument: {} }
type GetUserPolicyRequest = { UserName: {}; PolicyName: {} }
type ListAccessKeysResponse = {
  AccessKeyMetadata: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListAccessKeysRequest = {
  UserName?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListAccountAliasesResponse = {
  AccountAliases: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListAccountAliasesRequest = { Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListAttachedGroupPoliciesResponse = {
  AttachedPolicies?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListAttachedGroupPoliciesRequest = {
  GroupName: {}
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListAttachedRolePoliciesResponse = {
  AttachedPolicies?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListAttachedRolePoliciesRequest = {
  RoleName: {}
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListAttachedUserPoliciesResponse = {
  AttachedPolicies?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListAttachedUserPoliciesRequest = {
  UserName: {}
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListEntitiesForPolicyResponse = {
  PolicyGroups?: {} | undefined
  PolicyUsers?: {} | undefined
  PolicyRoles?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListEntitiesForPolicyRequest = {
  PolicyArn: {}
  EntityFilter?: {} | undefined
  PathPrefix?: {} | undefined
  PolicyUsageFilter?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListGroupPoliciesResponse = {
  PolicyNames: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListGroupPoliciesRequest = {
  GroupName: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListGroupsResponse = { Groups: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListGroupsRequest = {
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListGroupsForUserResponse = {
  Groups: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListGroupsForUserRequest = { UserName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListInstanceProfileTagsResponse = {
  Tags: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListInstanceProfileTagsRequest = {
  InstanceProfileName: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListInstanceProfilesResponse = {
  InstanceProfiles: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListInstanceProfilesRequest = {
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListInstanceProfilesForRoleResponse = {
  InstanceProfiles: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListInstanceProfilesForRoleRequest = {
  RoleName: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListMFADeviceTagsResponse = { Tags: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListMFADeviceTagsRequest = {
  SerialNumber: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListMFADevicesResponse = {
  MFADevices: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListMFADevicesRequest = {
  UserName?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListOpenIDConnectProviderTagsResponse = {
  Tags: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListOpenIDConnectProviderTagsRequest = {
  OpenIDConnectProviderArn: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListOpenIDConnectProvidersResponse = { OpenIDConnectProviderList?: {} | undefined }
type ListOpenIDConnectProvidersRequest = { [x: string]: unknown }
type ListPoliciesResponse = {
  Policies?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListPoliciesRequest = {
  Scope?: {} | undefined
  OnlyAttached?: {} | undefined
  PathPrefix?: {} | undefined
  PolicyUsageFilter?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ServiceNamespaceType = string
type ListPoliciesGrantingServiceAccessResponse = {
  PoliciesGrantingServiceAccess: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListPoliciesGrantingServiceAccessRequest = {
  Marker?: {} | undefined
  Arn: {}
  ServiceNamespaces: {}
}
type ListPolicyTagsResponse = { Tags: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListPolicyTagsRequest = { PolicyArn: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListPolicyVersionsResponse = {
  Versions?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListPolicyVersionsRequest = {
  PolicyArn: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListRolePoliciesResponse = {
  PolicyNames: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListRolePoliciesRequest = { RoleName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListRoleTagsResponse = { Tags: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListRoleTagsRequest = { RoleName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListRolesResponse = { Roles: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListRolesRequest = {
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListSAMLProviderTagsResponse = {
  Tags: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListSAMLProviderTagsRequest = {
  SAMLProviderArn: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListSAMLProvidersResponse = { SAMLProviderList?: {} | undefined }
type ListSAMLProvidersRequest = { [x: string]: unknown }
type ListSSHPublicKeysResponse = {
  SSHPublicKeys?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListSSHPublicKeysRequest = {
  UserName?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListServerCertificateTagsResponse = {
  Tags: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListServerCertificateTagsRequest = {
  ServerCertificateName: {}
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListServerCertificatesResponse = {
  ServerCertificateMetadataList: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListServerCertificatesRequest = {
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListServiceSpecificCredentialsResponse = { ServiceSpecificCredentials?: {} | undefined }
type ListServiceSpecificCredentialsRequest = {
  UserName?: {} | undefined
  ServiceName?: {} | undefined
}
type ListSigningCertificatesResponse = {
  Certificates: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListSigningCertificatesRequest = {
  UserName?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListUserPoliciesResponse = {
  PolicyNames: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListUserPoliciesRequest = { UserName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListUserTagsResponse = { Tags: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListUserTagsRequest = { UserName: {}; Marker?: {} | undefined; MaxItems?: {} | undefined }
type ListUsersResponse = { Users: {}; IsTruncated?: {} | undefined; Marker?: {} | undefined }
type ListUsersRequest = {
  PathPrefix?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type ListVirtualMFADevicesResponse = {
  VirtualMFADevices: {}
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type ListVirtualMFADevicesRequest = {
  AssignmentStatus?: {} | undefined
  Marker?: {} | undefined
  MaxItems?: {} | undefined
}
type PutGroupPolicyRequest = { GroupName: {}; PolicyName: {}; PolicyDocument: {} }
type PutRolePermissionsBoundaryRequest = { RoleName: {}; PermissionsBoundary: {} }
type PutRolePolicyRequest = { RoleName: {}; PolicyName: {}; PolicyDocument: {} }
type PutUserPermissionsBoundaryRequest = { UserName: {}; PermissionsBoundary: {} }
type PutUserPolicyRequest = { UserName: {}; PolicyName: {}; PolicyDocument: {} }
type RemoveClientIDFromOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {}; ClientID: {} }
type RemoveRoleFromInstanceProfileRequest = { InstanceProfileName: {}; RoleName: {} }
type RemoveUserFromGroupRequest = { GroupName: {}; UserName: {} }
type ResetServiceSpecificCredentialResponse = {
  ServiceSpecificCredential?:
    | {
        CreateDate: {}
        ServiceName: {}
        ServiceUserName: {}
        ServicePassword: {}
        ServiceSpecificCredentialId: {}
        UserName: {}
        Status: {}
      }
    | undefined
}
type ResetServiceSpecificCredentialRequest = {
  UserName?: {} | undefined
  ServiceSpecificCredentialId: {}
}
type ResyncMFADeviceRequest = {
  UserName: {}
  SerialNumber: {}
  AuthenticationCode1: {}
  AuthenticationCode2: {}
}
type SetDefaultPolicyVersionRequest = { PolicyArn: {}; VersionId: {} }
type SetSecurityTokenServicePreferencesRequest = { GlobalEndpointTokenVersion: {} }
type ActionNameType = string
type ResourceNameType = string
type ContextEntry = {
  ContextKeyName?: {} | undefined
  ContextKeyValues?: {} | undefined
  ContextKeyType?: {} | undefined
}
type SimulatePolicyResponse = {
  EvaluationResults?: {} | undefined
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
}
type SimulateCustomPolicyRequest = {
  PolicyInputList: {}
  PermissionsBoundaryPolicyInputList?: {} | undefined
  ActionNames: {}
  ResourceArns?: {} | undefined
  ResourcePolicy?: {} | undefined
  ResourceOwner?: {} | undefined
  CallerArn?: {} | undefined
  ContextEntries?: {} | undefined
  ResourceHandlingOption?: {} | undefined
  MaxItems?: {} | undefined
  Marker?: {} | undefined
}
type SimulatePrincipalPolicyRequest = {
  PolicySourceArn: {}
  PolicyInputList?: {} | undefined
  PermissionsBoundaryPolicyInputList?: {} | undefined
  ActionNames: {}
  ResourceArns?: {} | undefined
  ResourcePolicy?: {} | undefined
  ResourceOwner?: {} | undefined
  CallerArn?: {} | undefined
  ContextEntries?: {} | undefined
  ResourceHandlingOption?: {} | undefined
  MaxItems?: {} | undefined
  Marker?: {} | undefined
}
type TagInstanceProfileRequest = { InstanceProfileName: {}; Tags: {} }
type TagMFADeviceRequest = { SerialNumber: {}; Tags: {} }
type TagOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {}; Tags: {} }
type TagPolicyRequest = { PolicyArn: {}; Tags: {} }
type TagRoleRequest = { RoleName: {}; Tags: {} }
type TagSAMLProviderRequest = { SAMLProviderArn: {}; Tags: {} }
type TagServerCertificateRequest = { ServerCertificateName: {}; Tags: {} }
type TagUserRequest = { UserName: {}; Tags: {} }
type TagKeyType = string
type UntagInstanceProfileRequest = { InstanceProfileName: {}; TagKeys: {} }
type UntagMFADeviceRequest = { SerialNumber: {}; TagKeys: {} }
type UntagOpenIDConnectProviderRequest = { OpenIDConnectProviderArn: {}; TagKeys: {} }
type UntagPolicyRequest = { PolicyArn: {}; TagKeys: {} }
type UntagRoleRequest = { RoleName: {}; TagKeys: {} }
type UntagSAMLProviderRequest = { SAMLProviderArn: {}; TagKeys: {} }
type UntagServerCertificateRequest = { ServerCertificateName: {}; TagKeys: {} }
type UntagUserRequest = { UserName: {}; TagKeys: {} }
type UpdateAccessKeyRequest = { UserName?: {} | undefined; AccessKeyId: {}; Status: {} }
type UpdateAccountPasswordPolicyRequest = {
  MinimumPasswordLength?: {} | undefined
  RequireSymbols?: {} | undefined
  RequireNumbers?: {} | undefined
  RequireUppercaseCharacters?: {} | undefined
  RequireLowercaseCharacters?: {} | undefined
  AllowUsersToChangePassword?: {} | undefined
  MaxPasswordAge?: {} | undefined
  PasswordReusePrevention?: {} | undefined
  HardExpiry?: {} | undefined
}
type UpdateAssumeRolePolicyRequest = { RoleName: {}; PolicyDocument: {} }
type UpdateGroupRequest = { GroupName: {}; NewPath?: {} | undefined; NewGroupName?: {} | undefined }
type UpdateLoginProfileRequest = {
  UserName: {}
  Password?: {} | undefined
  PasswordResetRequired?: {} | undefined
}
type UpdateOpenIDConnectProviderThumbprintRequest = {
  OpenIDConnectProviderArn: {}
  ThumbprintList: {}
}
type UpdateRoleResponse = { [x: string]: unknown }
type UpdateRoleRequest = {
  RoleName: {}
  Description?: {} | undefined
  MaxSessionDuration?: {} | undefined
}
type UpdateRoleDescriptionResponse = {
  Role?:
    | {
        Path: {}
        RoleName: {}
        RoleId: {}
        Arn: {}
        CreateDate: {}
        AssumeRolePolicyDocument?: {} | undefined
        Description?: {} | undefined
        MaxSessionDuration?: {} | undefined
        PermissionsBoundary?:
          | { PermissionsBoundaryType?: {} | undefined; PermissionsBoundaryArn?: {} | undefined }
          | undefined
        Tags?: {} | undefined
        RoleLastUsed?: { LastUsedDate?: {} | undefined; Region?: {} | undefined } | undefined
      }
    | undefined
}
type UpdateRoleDescriptionRequest = { RoleName: {}; Description: {} }
type UpdateSAMLProviderResponse = { SAMLProviderArn?: {} | undefined }
type UpdateSAMLProviderRequest = { SAMLMetadataDocument: {}; SAMLProviderArn: {} }
type UpdateSSHPublicKeyRequest = { UserName: {}; SSHPublicKeyId: {}; Status: {} }
type UpdateServerCertificateRequest = {
  ServerCertificateName: {}
  NewPath?: {} | undefined
  NewServerCertificateName?: {} | undefined
}
type UpdateServiceSpecificCredentialRequest = {
  UserName?: {} | undefined
  ServiceSpecificCredentialId: {}
  Status: {}
}
type UpdateSigningCertificateRequest = { UserName?: {} | undefined; CertificateId: {}; Status: {} }
type UpdateUserRequest = { UserName: {}; NewPath?: {} | undefined; NewUserName?: {} | undefined }
type UploadSSHPublicKeyResponse = {
  SSHPublicKey?:
    | {
        UserName: {}
        SSHPublicKeyId: {}
        Fingerprint: {}
        SSHPublicKeyBody: {}
        Status: {}
        UploadDate?: {} | undefined
      }
    | undefined
}
type UploadSSHPublicKeyRequest = { UserName: {}; SSHPublicKeyBody: {} }
type UploadServerCertificateResponse = {
  ServerCertificateMetadata?:
    | {
        Path: {}
        ServerCertificateName: {}
        ServerCertificateId: {}
        Arn: {}
        UploadDate?: {} | undefined
        Expiration?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type UploadServerCertificateRequest = {
  Path?: {} | undefined
  ServerCertificateName: {}
  CertificateBody: {}
  PrivateKey: {}
  CertificateChain?: {} | undefined
  Tags?: {} | undefined
}
type UploadSigningCertificateResponse = {
  Certificate: {
    UserName: {}
    CertificateId: {}
    CertificateBody: {}
    Status: {}
    UploadDate?: {} | undefined
  }
}
type UploadSigningCertificateRequest = { UserName?: {} | undefined; CertificateBody: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Action=AddClientIDToOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            ClientID: string
            Action: 'AddClientIDToOpenIDConnectProvider'
            Version: '2010-05-08'
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
        input: {
          query: { Action: 'AddClientIDToOpenIDConnectProvider'; Version: '2010-05-08' }
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
        } & { json: AddClientIDToOpenIDConnectProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AddRoleToInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            RoleName: string
            Action: 'AddRoleToInstanceProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'AddRoleToInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddRoleToInstanceProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AddUserToGroup': {
      $get: {
        input: {
          query: {
            GroupName: string
            UserName: string
            Action: 'AddUserToGroup'
            Version: '2010-05-08'
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
        input: { query: { Action: 'AddUserToGroup'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddUserToGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AttachGroupPolicy': {
      $get: {
        input: {
          query: {
            GroupName: string
            PolicyArn: string
            Action: 'AttachGroupPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'AttachGroupPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachGroupPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AttachRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyArn: string
            Action: 'AttachRolePolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'AttachRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachRolePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=AttachUserPolicy': {
      $get: {
        input: {
          query: {
            UserName: string
            PolicyArn: string
            Action: 'AttachUserPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'AttachUserPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachUserPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=ChangePassword': {
      $get: {
        input: {
          query: {
            OldPassword: string
            NewPassword: string
            Action: 'ChangePassword'
            Version: '2010-05-08'
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
        input: { query: { Action: 'ChangePassword'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ChangePasswordRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CreateAccessKey': {
      $get: {
        input: {
          query: { UserName?: string | undefined; Action: 'CreateAccessKey'; Version: '2010-05-08' }
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
        output: CreateAccessKeyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateAccessKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccessKeyRequest }
        output: CreateAccessKeyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateAccountAlias': {
      $get: {
        input: {
          query: { AccountAlias: string; Action: 'CreateAccountAlias'; Version: '2010-05-08' }
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
        input: { query: { Action: 'CreateAccountAlias'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccountAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=CreateGroup': {
      $get: {
        input: {
          query: {
            Path?: string | undefined
            GroupName: string
            Action: 'CreateGroup'
            Version: '2010-05-08'
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
        output: CreateGroupResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateGroup'; Version: '2010-05-08' } } & {
          header: {
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
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            Path?: string | undefined
            Tags?: Tag[] | undefined
            Action: 'CreateInstanceProfile'
            Version: '2010-05-08'
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
        output: CreateInstanceProfileResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInstanceProfileRequest }
        output: CreateInstanceProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateLoginProfile': {
      $get: {
        input: {
          query: {
            UserName: string
            Password: string
            PasswordResetRequired?: boolean | undefined
            Action: 'CreateLoginProfile'
            Version: '2010-05-08'
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
        output: CreateLoginProfileResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateLoginProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLoginProfileRequest }
        output: CreateLoginProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            Url: string
            ClientIDList?: ClientIDType[] | undefined
            ThumbprintList: ThumbprintType[]
            Tags?: Tag[] | undefined
            Action: 'CreateOpenIDConnectProvider'
            Version: '2010-05-08'
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
        output: CreateOpenIDConnectProviderResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateOpenIDConnectProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOpenIDConnectProviderRequest }
        output: CreateOpenIDConnectProviderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreatePolicy': {
      $get: {
        input: {
          query: {
            PolicyName: string
            Path?: string | undefined
            PolicyDocument: string
            Description?: string | undefined
            Tags?: Tag[] | undefined
            Action: 'CreatePolicy'
            Version: '2010-05-08'
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
        output: CreatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreatePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePolicyRequest }
        output: CreatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreatePolicyVersion': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            PolicyDocument: string
            SetAsDefault?: boolean | undefined
            Action: 'CreatePolicyVersion'
            Version: '2010-05-08'
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
        output: CreatePolicyVersionResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreatePolicyVersion'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePolicyVersionRequest }
        output: CreatePolicyVersionResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateRole': {
      $get: {
        input: {
          query: {
            Path?: string | undefined
            RoleName: string
            AssumeRolePolicyDocument: string
            Description?: string | undefined
            MaxSessionDuration?: number | undefined
            PermissionsBoundary?: string | undefined
            Tags?: Tag[] | undefined
            Action: 'CreateRole'
            Version: '2010-05-08'
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
        output: CreateRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRoleRequest }
        output: CreateRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateSAMLProvider': {
      $get: {
        input: {
          query: {
            SAMLMetadataDocument: string
            Name: string
            Tags?: Tag[] | undefined
            Action: 'CreateSAMLProvider'
            Version: '2010-05-08'
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
        output: CreateSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSAMLProviderRequest }
        output: CreateSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateServiceLinkedRole': {
      $get: {
        input: {
          query: {
            AWSServiceName: string
            Description?: string | undefined
            CustomSuffix?: string | undefined
            Action: 'CreateServiceLinkedRole'
            Version: '2010-05-08'
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
        output: CreateServiceLinkedRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateServiceLinkedRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceLinkedRoleRequest }
        output: CreateServiceLinkedRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateServiceSpecificCredential': {
      $get: {
        input: {
          query: {
            UserName: string
            ServiceName: string
            Action: 'CreateServiceSpecificCredential'
            Version: '2010-05-08'
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
        output: CreateServiceSpecificCredentialResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateServiceSpecificCredential'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServiceSpecificCredentialRequest }
        output: CreateServiceSpecificCredentialResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateUser': {
      $get: {
        input: {
          query: {
            Path?: string | undefined
            UserName: string
            PermissionsBoundary?: string | undefined
            Tags?: Tag[] | undefined
            Action: 'CreateUser'
            Version: '2010-05-08'
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
        output: CreateUserResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateUser'; Version: '2010-05-08' } } & {
          header: {
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
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=CreateVirtualMFADevice': {
      $get: {
        input: {
          query: {
            Path?: string | undefined
            VirtualMFADeviceName: string
            Tags?: Tag[] | undefined
            Action: 'CreateVirtualMFADevice'
            Version: '2010-05-08'
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
        output: CreateVirtualMFADeviceResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'CreateVirtualMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateVirtualMFADeviceRequest }
        output: CreateVirtualMFADeviceResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeactivateMFADevice': {
      $get: {
        input: {
          query: {
            UserName: string
            SerialNumber: string
            Action: 'DeactivateMFADevice'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeactivateMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivateMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAccessKey': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            AccessKeyId: string
            Action: 'DeleteAccessKey'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteAccessKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccessKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAccountAlias': {
      $get: {
        input: {
          query: { AccountAlias: string; Action: 'DeleteAccountAlias'; Version: '2010-05-08' }
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
        input: { query: { Action: 'DeleteAccountAlias'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccountAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteAccountPasswordPolicy': {
      $get: {
        input: { query: { Action: 'DeleteAccountPasswordPolicy'; Version: '2010-05-08' } } & {
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
        input: { query: { Action: 'DeleteAccountPasswordPolicy'; Version: '2010-05-08' } } & {
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
    }
  } & {
    '/#Action=DeleteGroup': {
      $get: {
        input: { query: { GroupName: string; Action: 'DeleteGroup'; Version: '2010-05-08' } } & {
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
        input: { query: { Action: 'DeleteGroup'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteGroupPolicy': {
      $get: {
        input: {
          query: {
            GroupName: string
            PolicyName: string
            Action: 'DeleteGroupPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteGroupPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteGroupPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            Action: 'DeleteInstanceProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInstanceProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteLoginProfile': {
      $get: {
        input: {
          query: { UserName: string; Action: 'DeleteLoginProfile'; Version: '2010-05-08' }
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
        input: { query: { Action: 'DeleteLoginProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLoginProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            Action: 'DeleteOpenIDConnectProvider'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteOpenIDConnectProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOpenIDConnectProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeletePolicy': {
      $get: {
        input: { query: { PolicyArn: string; Action: 'DeletePolicy'; Version: '2010-05-08' } } & {
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
        input: { query: { Action: 'DeletePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeletePolicyVersion': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            VersionId: string
            Action: 'DeletePolicyVersion'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeletePolicyVersion'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePolicyVersionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteRole': {
      $get: {
        input: { query: { RoleName: string; Action: 'DeleteRole'; Version: '2010-05-08' } } & {
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
        input: { query: { Action: 'DeleteRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteRolePermissionsBoundary': {
      $get: {
        input: {
          query: {
            RoleName: string
            Action: 'DeleteRolePermissionsBoundary'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteRolePermissionsBoundary'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRolePermissionsBoundaryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyName: string
            Action: 'DeleteRolePolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRolePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSAMLProvider': {
      $get: {
        input: {
          query: { SAMLProviderArn: string; Action: 'DeleteSAMLProvider'; Version: '2010-05-08' }
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
        input: { query: { Action: 'DeleteSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSAMLProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSSHPublicKey': {
      $get: {
        input: {
          query: {
            UserName: string
            SSHPublicKeyId: string
            Action: 'DeleteSSHPublicKey'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteSSHPublicKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSSHPublicKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteServerCertificate': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            Action: 'DeleteServerCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServerCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteServiceLinkedRole': {
      $get: {
        input: {
          query: { RoleName: string; Action: 'DeleteServiceLinkedRole'; Version: '2010-05-08' }
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
        output: DeleteServiceLinkedRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'DeleteServiceLinkedRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceLinkedRoleRequest }
        output: DeleteServiceLinkedRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=DeleteServiceSpecificCredential': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            ServiceSpecificCredentialId: string
            Action: 'DeleteServiceSpecificCredential'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteServiceSpecificCredential'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServiceSpecificCredentialRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteSigningCertificate': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            CertificateId: string
            Action: 'DeleteSigningCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteSigningCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSigningCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUser': {
      $get: {
        input: { query: { UserName: string; Action: 'DeleteUser'; Version: '2010-05-08' } } & {
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
        input: { query: { Action: 'DeleteUser'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUserPermissionsBoundary': {
      $get: {
        input: {
          query: {
            UserName: string
            Action: 'DeleteUserPermissionsBoundary'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteUserPermissionsBoundary'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserPermissionsBoundaryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteUserPolicy': {
      $get: {
        input: {
          query: {
            UserName: string
            PolicyName: string
            Action: 'DeleteUserPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DeleteUserPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DeleteVirtualMFADevice': {
      $get: {
        input: {
          query: { SerialNumber: string; Action: 'DeleteVirtualMFADevice'; Version: '2010-05-08' }
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
        input: { query: { Action: 'DeleteVirtualMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteVirtualMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DetachGroupPolicy': {
      $get: {
        input: {
          query: {
            GroupName: string
            PolicyArn: string
            Action: 'DetachGroupPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DetachGroupPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachGroupPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DetachRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyArn: string
            Action: 'DetachRolePolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DetachRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachRolePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=DetachUserPolicy': {
      $get: {
        input: {
          query: {
            UserName: string
            PolicyArn: string
            Action: 'DetachUserPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'DetachUserPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachUserPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=EnableMFADevice': {
      $get: {
        input: {
          query: {
            UserName: string
            SerialNumber: string
            AuthenticationCode1: string
            AuthenticationCode2: string
            Action: 'EnableMFADevice'
            Version: '2010-05-08'
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
        input: { query: { Action: 'EnableMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=GenerateCredentialReport': {
      $get: {
        input: { query: { Action: 'GenerateCredentialReport'; Version: '2010-05-08' } } & {
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
        output: GenerateCredentialReportResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GenerateCredentialReport'; Version: '2010-05-08' } } & {
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
        output: GenerateCredentialReportResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GenerateOrganizationsAccessReport': {
      $get: {
        input: {
          query: {
            EntityPath: string
            OrganizationsPolicyId?: string | undefined
            Action: 'GenerateOrganizationsAccessReport'
            Version: '2010-05-08'
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
        output: GenerateOrganizationsAccessReportResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GenerateOrganizationsAccessReport'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateOrganizationsAccessReportRequest }
        output: GenerateOrganizationsAccessReportResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GenerateServiceLastAccessedDetails': {
      $get: {
        input: {
          query: {
            Arn: string
            Granularity?: 'SERVICE_LEVEL' | 'ACTION_LEVEL' | undefined
            Action: 'GenerateServiceLastAccessedDetails'
            Version: '2010-05-08'
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
        output: GenerateServiceLastAccessedDetailsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'GenerateServiceLastAccessedDetails'; Version: '2010-05-08' }
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
        } & { json: GenerateServiceLastAccessedDetailsRequest }
        output: GenerateServiceLastAccessedDetailsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetAccessKeyLastUsed': {
      $get: {
        input: {
          query: { AccessKeyId: string; Action: 'GetAccessKeyLastUsed'; Version: '2010-05-08' }
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
        output: GetAccessKeyLastUsedResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetAccessKeyLastUsed'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAccessKeyLastUsedRequest }
        output: GetAccessKeyLastUsedResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetAccountAuthorizationDetails': {
      $get: {
        input: {
          query: {
            Filter?: EntityType[] | undefined
            MaxItems?: number | undefined
            Marker?: string | undefined
            Action: 'GetAccountAuthorizationDetails'
            Version: '2010-05-08'
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
        output: GetAccountAuthorizationDetailsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'GetAccountAuthorizationDetails'
            Version: '2010-05-08'
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
        } & { json: GetAccountAuthorizationDetailsRequest }
        output: GetAccountAuthorizationDetailsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetAccountPasswordPolicy': {
      $get: {
        input: { query: { Action: 'GetAccountPasswordPolicy'; Version: '2010-05-08' } } & {
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
        output: GetAccountPasswordPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetAccountPasswordPolicy'; Version: '2010-05-08' } } & {
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
        output: GetAccountPasswordPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetAccountSummary': {
      $get: {
        input: { query: { Action: 'GetAccountSummary'; Version: '2010-05-08' } } & {
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
        output: GetAccountSummaryResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetAccountSummary'; Version: '2010-05-08' } } & {
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
        output: GetAccountSummaryResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetContextKeysForCustomPolicy': {
      $get: {
        input: {
          query: {
            PolicyInputList: PolicyDocumentType[]
            Action: 'GetContextKeysForCustomPolicy'
            Version: '2010-05-08'
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
        output: GetContextKeysForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetContextKeysForCustomPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContextKeysForCustomPolicyRequest }
        output: GetContextKeysForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetContextKeysForPrincipalPolicy': {
      $get: {
        input: {
          query: {
            PolicySourceArn: string
            PolicyInputList?: PolicyDocumentType[] | undefined
            Action: 'GetContextKeysForPrincipalPolicy'
            Version: '2010-05-08'
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
        output: GetContextKeysForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetContextKeysForPrincipalPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetContextKeysForPrincipalPolicyRequest }
        output: GetContextKeysForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetCredentialReport': {
      $get: {
        input: { query: { Action: 'GetCredentialReport'; Version: '2010-05-08' } } & {
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
        output: GetCredentialReportResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetCredentialReport'; Version: '2010-05-08' } } & {
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
        output: GetCredentialReportResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetGroup': {
      $get: {
        input: {
          query: {
            GroupName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'GetGroup'
            Version: '2010-05-08'
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
        output: GetGroupResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'GetGroup'
            Version: '2010-05-08'
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
        } & { json: GetGroupRequest }
        output: GetGroupResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetGroupPolicy': {
      $get: {
        input: {
          query: {
            GroupName: string
            PolicyName: string
            Action: 'GetGroupPolicy'
            Version: '2010-05-08'
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
        output: GetGroupPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetGroupPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetGroupPolicyRequest }
        output: GetGroupPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            Action: 'GetInstanceProfile'
            Version: '2010-05-08'
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
        output: GetInstanceProfileResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInstanceProfileRequest }
        output: GetInstanceProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetLoginProfile': {
      $get: {
        input: { query: { UserName: string; Action: 'GetLoginProfile'; Version: '2010-05-08' } } & {
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
        output: GetLoginProfileResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetLoginProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLoginProfileRequest }
        output: GetLoginProfileResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetMFADevice': {
      $get: {
        input: {
          query: {
            SerialNumber: string
            UserName?: string | undefined
            Action: 'GetMFADevice'
            Version: '2010-05-08'
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
        output: GetMFADeviceResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetMFADeviceRequest }
        output: GetMFADeviceResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            Action: 'GetOpenIDConnectProvider'
            Version: '2010-05-08'
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
        output: GetOpenIDConnectProviderResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetOpenIDConnectProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOpenIDConnectProviderRequest }
        output: GetOpenIDConnectProviderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetOrganizationsAccessReport': {
      $get: {
        input: {
          query: {
            JobId: string
            MaxItems?: number | undefined
            Marker?: string | undefined
            SortKey?:
              | 'SERVICE_NAMESPACE_ASCENDING'
              | 'SERVICE_NAMESPACE_DESCENDING'
              | 'LAST_AUTHENTICATED_TIME_ASCENDING'
              | 'LAST_AUTHENTICATED_TIME_DESCENDING'
              | undefined
            Action: 'GetOrganizationsAccessReport'
            Version: '2010-05-08'
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
        output: GetOrganizationsAccessReportResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetOrganizationsAccessReport'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetOrganizationsAccessReportRequest }
        output: GetOrganizationsAccessReportResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetPolicy': {
      $get: {
        input: { query: { PolicyArn: string; Action: 'GetPolicy'; Version: '2010-05-08' } } & {
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
        output: GetPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPolicyRequest }
        output: GetPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetPolicyVersion': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            VersionId: string
            Action: 'GetPolicyVersion'
            Version: '2010-05-08'
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
        output: GetPolicyVersionResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetPolicyVersion'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPolicyVersionRequest }
        output: GetPolicyVersionResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetRole': {
      $get: {
        input: { query: { RoleName: string; Action: 'GetRole'; Version: '2010-05-08' } } & {
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
        output: GetRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRoleRequest }
        output: GetRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyName: string
            Action: 'GetRolePolicy'
            Version: '2010-05-08'
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
        output: GetRolePolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRolePolicyRequest }
        output: GetRolePolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetSAMLProvider': {
      $get: {
        input: {
          query: { SAMLProviderArn: string; Action: 'GetSAMLProvider'; Version: '2010-05-08' }
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
        output: GetSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSAMLProviderRequest }
        output: GetSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetSSHPublicKey': {
      $get: {
        input: {
          query: {
            UserName: string
            SSHPublicKeyId: string
            Encoding: 'SSH' | 'PEM'
            Action: 'GetSSHPublicKey'
            Version: '2010-05-08'
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
        output: GetSSHPublicKeyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetSSHPublicKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSSHPublicKeyRequest }
        output: GetSSHPublicKeyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetServerCertificate': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            Action: 'GetServerCertificate'
            Version: '2010-05-08'
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
        output: GetServerCertificateResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServerCertificateRequest }
        output: GetServerCertificateResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetServiceLastAccessedDetails': {
      $get: {
        input: {
          query: {
            JobId: string
            MaxItems?: number | undefined
            Marker?: string | undefined
            Action: 'GetServiceLastAccessedDetails'
            Version: '2010-05-08'
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
        output: GetServiceLastAccessedDetailsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetServiceLastAccessedDetails'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServiceLastAccessedDetailsRequest }
        output: GetServiceLastAccessedDetailsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetServiceLastAccessedDetailsWithEntities': {
      $get: {
        input: {
          query: {
            JobId: string
            ServiceNamespace: string
            MaxItems?: number | undefined
            Marker?: string | undefined
            Action: 'GetServiceLastAccessedDetailsWithEntities'
            Version: '2010-05-08'
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
        output: GetServiceLastAccessedDetailsWithEntitiesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'GetServiceLastAccessedDetailsWithEntities'; Version: '2010-05-08' }
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
        } & { json: GetServiceLastAccessedDetailsWithEntitiesRequest }
        output: GetServiceLastAccessedDetailsWithEntitiesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetServiceLinkedRoleDeletionStatus': {
      $get: {
        input: {
          query: {
            DeletionTaskId: string
            Action: 'GetServiceLinkedRoleDeletionStatus'
            Version: '2010-05-08'
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
        output: GetServiceLinkedRoleDeletionStatusResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: { Action: 'GetServiceLinkedRoleDeletionStatus'; Version: '2010-05-08' }
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
        } & { json: GetServiceLinkedRoleDeletionStatusRequest }
        output: GetServiceLinkedRoleDeletionStatusResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetUser': {
      $get: {
        input: {
          query: { UserName?: string | undefined; Action: 'GetUser'; Version: '2010-05-08' }
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
        output: GetUserResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetUser'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserRequest }
        output: GetUserResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=GetUserPolicy': {
      $get: {
        input: {
          query: {
            UserName: string
            PolicyName: string
            Action: 'GetUserPolicy'
            Version: '2010-05-08'
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
        output: GetUserPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'GetUserPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUserPolicyRequest }
        output: GetUserPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAccessKeys': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListAccessKeys'
            Version: '2010-05-08'
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
        output: ListAccessKeysResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListAccessKeys'
            Version: '2010-05-08'
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
        } & { json: ListAccessKeysRequest }
        output: ListAccessKeysResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAccountAliases': {
      $get: {
        input: {
          query: {
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListAccountAliases'
            Version: '2010-05-08'
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
        output: ListAccountAliasesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListAccountAliases'
            Version: '2010-05-08'
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
        } & { json: ListAccountAliasesRequest }
        output: ListAccountAliasesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAttachedGroupPolicies': {
      $get: {
        input: {
          query: {
            GroupName: string
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListAttachedGroupPolicies'
            Version: '2010-05-08'
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
        output: ListAttachedGroupPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListAttachedGroupPolicies'
            Version: '2010-05-08'
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
        } & { json: ListAttachedGroupPoliciesRequest }
        output: ListAttachedGroupPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAttachedRolePolicies': {
      $get: {
        input: {
          query: {
            RoleName: string
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListAttachedRolePolicies'
            Version: '2010-05-08'
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
        output: ListAttachedRolePoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListAttachedRolePolicies'
            Version: '2010-05-08'
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
        } & { json: ListAttachedRolePoliciesRequest }
        output: ListAttachedRolePoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListAttachedUserPolicies': {
      $get: {
        input: {
          query: {
            UserName: string
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListAttachedUserPolicies'
            Version: '2010-05-08'
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
        output: ListAttachedUserPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListAttachedUserPolicies'
            Version: '2010-05-08'
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
        } & { json: ListAttachedUserPoliciesRequest }
        output: ListAttachedUserPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListEntitiesForPolicy': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            EntityFilter?:
              | 'User'
              | 'Role'
              | 'Group'
              | 'LocalManagedPolicy'
              | 'AWSManagedPolicy'
              | undefined
            PathPrefix?: string | undefined
            PolicyUsageFilter?: 'PermissionsPolicy' | 'PermissionsBoundary' | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListEntitiesForPolicy'
            Version: '2010-05-08'
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
        output: ListEntitiesForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListEntitiesForPolicy'
            Version: '2010-05-08'
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
        } & { json: ListEntitiesForPolicyRequest }
        output: ListEntitiesForPolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListGroupPolicies': {
      $get: {
        input: {
          query: {
            GroupName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListGroupPolicies'
            Version: '2010-05-08'
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
        output: ListGroupPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListGroupPolicies'
            Version: '2010-05-08'
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
        } & { json: ListGroupPoliciesRequest }
        output: ListGroupPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListGroups': {
      $get: {
        input: {
          query: {
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListGroups'
            Version: '2010-05-08'
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
        output: ListGroupsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListGroups'
            Version: '2010-05-08'
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
        } & { json: ListGroupsRequest }
        output: ListGroupsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListGroupsForUser': {
      $get: {
        input: {
          query: {
            UserName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListGroupsForUser'
            Version: '2010-05-08'
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
        output: ListGroupsForUserResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListGroupsForUser'
            Version: '2010-05-08'
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
        } & { json: ListGroupsForUserRequest }
        output: ListGroupsForUserResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListInstanceProfileTags': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListInstanceProfileTags'
            Version: '2010-05-08'
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
        output: ListInstanceProfileTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListInstanceProfileTags'
            Version: '2010-05-08'
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
        } & { json: ListInstanceProfileTagsRequest }
        output: ListInstanceProfileTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListInstanceProfiles': {
      $get: {
        input: {
          query: {
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListInstanceProfiles'
            Version: '2010-05-08'
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
        output: ListInstanceProfilesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListInstanceProfiles'
            Version: '2010-05-08'
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
        } & { json: ListInstanceProfilesRequest }
        output: ListInstanceProfilesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListInstanceProfilesForRole': {
      $get: {
        input: {
          query: {
            RoleName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListInstanceProfilesForRole'
            Version: '2010-05-08'
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
        output: ListInstanceProfilesForRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListInstanceProfilesForRole'
            Version: '2010-05-08'
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
        } & { json: ListInstanceProfilesForRoleRequest }
        output: ListInstanceProfilesForRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListMFADeviceTags': {
      $get: {
        input: {
          query: {
            SerialNumber: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListMFADeviceTags'
            Version: '2010-05-08'
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
        output: ListMFADeviceTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListMFADeviceTags'
            Version: '2010-05-08'
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
        } & { json: ListMFADeviceTagsRequest }
        output: ListMFADeviceTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListMFADevices': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListMFADevices'
            Version: '2010-05-08'
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
        output: ListMFADevicesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListMFADevices'
            Version: '2010-05-08'
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
        } & { json: ListMFADevicesRequest }
        output: ListMFADevicesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListOpenIDConnectProviderTags': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListOpenIDConnectProviderTags'
            Version: '2010-05-08'
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
        output: ListOpenIDConnectProviderTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListOpenIDConnectProviderTags'
            Version: '2010-05-08'
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
        } & { json: ListOpenIDConnectProviderTagsRequest }
        output: ListOpenIDConnectProviderTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListOpenIDConnectProviders': {
      $get: {
        input: { query: { Action: 'ListOpenIDConnectProviders'; Version: '2010-05-08' } } & {
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
        output: ListOpenIDConnectProvidersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListOpenIDConnectProviders'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOpenIDConnectProvidersRequest }
        output: ListOpenIDConnectProvidersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPolicies': {
      $get: {
        input: {
          query: {
            Scope?: 'All' | 'AWS' | 'Local' | undefined
            OnlyAttached?: boolean | undefined
            PathPrefix?: string | undefined
            PolicyUsageFilter?: 'PermissionsPolicy' | 'PermissionsBoundary' | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListPolicies'
            Version: '2010-05-08'
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
        output: ListPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListPolicies'
            Version: '2010-05-08'
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
        } & { json: ListPoliciesRequest }
        output: ListPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPoliciesGrantingServiceAccess': {
      $get: {
        input: {
          query: {
            Marker?: string | undefined
            Arn: string
            ServiceNamespaces: ServiceNamespaceType[]
            Action: 'ListPoliciesGrantingServiceAccess'
            Version: '2010-05-08'
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
        output: ListPoliciesGrantingServiceAccessResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListPoliciesGrantingServiceAccess'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPoliciesGrantingServiceAccessRequest }
        output: ListPoliciesGrantingServiceAccessResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPolicyTags': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListPolicyTags'
            Version: '2010-05-08'
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
        output: ListPolicyTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListPolicyTags'
            Version: '2010-05-08'
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
        } & { json: ListPolicyTagsRequest }
        output: ListPolicyTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListPolicyVersions': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListPolicyVersions'
            Version: '2010-05-08'
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
        output: ListPolicyVersionsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListPolicyVersions'
            Version: '2010-05-08'
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
        } & { json: ListPolicyVersionsRequest }
        output: ListPolicyVersionsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListRolePolicies': {
      $get: {
        input: {
          query: {
            RoleName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListRolePolicies'
            Version: '2010-05-08'
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
        output: ListRolePoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListRolePolicies'
            Version: '2010-05-08'
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
        } & { json: ListRolePoliciesRequest }
        output: ListRolePoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListRoleTags': {
      $get: {
        input: {
          query: {
            RoleName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListRoleTags'
            Version: '2010-05-08'
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
        output: ListRoleTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListRoleTags'
            Version: '2010-05-08'
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
        } & { json: ListRoleTagsRequest }
        output: ListRoleTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListRoles': {
      $get: {
        input: {
          query: {
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListRoles'
            Version: '2010-05-08'
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
        output: ListRolesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListRoles'
            Version: '2010-05-08'
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
        } & { json: ListRolesRequest }
        output: ListRolesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListSAMLProviderTags': {
      $get: {
        input: {
          query: {
            SAMLProviderArn: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListSAMLProviderTags'
            Version: '2010-05-08'
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
        output: ListSAMLProviderTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListSAMLProviderTags'
            Version: '2010-05-08'
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
        } & { json: ListSAMLProviderTagsRequest }
        output: ListSAMLProviderTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListSAMLProviders': {
      $get: {
        input: { query: { Action: 'ListSAMLProviders'; Version: '2010-05-08' } } & {
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
        output: ListSAMLProvidersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListSAMLProviders'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSAMLProvidersRequest }
        output: ListSAMLProvidersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListSSHPublicKeys': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListSSHPublicKeys'
            Version: '2010-05-08'
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
        output: ListSSHPublicKeysResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListSSHPublicKeys'
            Version: '2010-05-08'
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
        } & { json: ListSSHPublicKeysRequest }
        output: ListSSHPublicKeysResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListServerCertificateTags': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListServerCertificateTags'
            Version: '2010-05-08'
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
        output: ListServerCertificateTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListServerCertificateTags'
            Version: '2010-05-08'
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
        } & { json: ListServerCertificateTagsRequest }
        output: ListServerCertificateTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListServerCertificates': {
      $get: {
        input: {
          query: {
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListServerCertificates'
            Version: '2010-05-08'
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
        output: ListServerCertificatesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListServerCertificates'
            Version: '2010-05-08'
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
        } & { json: ListServerCertificatesRequest }
        output: ListServerCertificatesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListServiceSpecificCredentials': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            ServiceName?: string | undefined
            Action: 'ListServiceSpecificCredentials'
            Version: '2010-05-08'
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
        output: ListServiceSpecificCredentialsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ListServiceSpecificCredentials'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceSpecificCredentialsRequest }
        output: ListServiceSpecificCredentialsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListSigningCertificates': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListSigningCertificates'
            Version: '2010-05-08'
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
        output: ListSigningCertificatesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListSigningCertificates'
            Version: '2010-05-08'
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
        } & { json: ListSigningCertificatesRequest }
        output: ListSigningCertificatesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListUserPolicies': {
      $get: {
        input: {
          query: {
            UserName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListUserPolicies'
            Version: '2010-05-08'
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
        output: ListUserPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListUserPolicies'
            Version: '2010-05-08'
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
        } & { json: ListUserPoliciesRequest }
        output: ListUserPoliciesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListUserTags': {
      $get: {
        input: {
          query: {
            UserName: string
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListUserTags'
            Version: '2010-05-08'
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
        output: ListUserTagsResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListUserTags'
            Version: '2010-05-08'
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
        } & { json: ListUserTagsRequest }
        output: ListUserTagsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListUsers': {
      $get: {
        input: {
          query: {
            PathPrefix?: string | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListUsers'
            Version: '2010-05-08'
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
        output: ListUsersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListUsers'
            Version: '2010-05-08'
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
        } & { json: ListUsersRequest }
        output: ListUsersResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ListVirtualMFADevices': {
      $get: {
        input: {
          query: {
            AssignmentStatus?: 'Assigned' | 'Unassigned' | 'Any' | undefined
            Marker?: string | undefined
            MaxItems?: number | undefined
            Action: 'ListVirtualMFADevices'
            Version: '2010-05-08'
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
        output: ListVirtualMFADevicesResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'ListVirtualMFADevices'
            Version: '2010-05-08'
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
        } & { json: ListVirtualMFADevicesRequest }
        output: ListVirtualMFADevicesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=PutGroupPolicy': {
      $get: {
        input: {
          query: {
            GroupName: string
            PolicyName: string
            PolicyDocument: string
            Action: 'PutGroupPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'PutGroupPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutGroupPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutRolePermissionsBoundary': {
      $get: {
        input: {
          query: {
            RoleName: string
            PermissionsBoundary: string
            Action: 'PutRolePermissionsBoundary'
            Version: '2010-05-08'
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
        input: { query: { Action: 'PutRolePermissionsBoundary'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRolePermissionsBoundaryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyName: string
            PolicyDocument: string
            Action: 'PutRolePolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'PutRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRolePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutUserPermissionsBoundary': {
      $get: {
        input: {
          query: {
            UserName: string
            PermissionsBoundary: string
            Action: 'PutUserPermissionsBoundary'
            Version: '2010-05-08'
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
        input: { query: { Action: 'PutUserPermissionsBoundary'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutUserPermissionsBoundaryRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=PutUserPolicy': {
      $get: {
        input: {
          query: {
            UserName: string
            PolicyName: string
            PolicyDocument: string
            Action: 'PutUserPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'PutUserPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutUserPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RemoveClientIDFromOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            ClientID: string
            Action: 'RemoveClientIDFromOpenIDConnectProvider'
            Version: '2010-05-08'
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
        input: {
          query: { Action: 'RemoveClientIDFromOpenIDConnectProvider'; Version: '2010-05-08' }
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
        } & { json: RemoveClientIDFromOpenIDConnectProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RemoveRoleFromInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            RoleName: string
            Action: 'RemoveRoleFromInstanceProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'RemoveRoleFromInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveRoleFromInstanceProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=RemoveUserFromGroup': {
      $get: {
        input: {
          query: {
            GroupName: string
            UserName: string
            Action: 'RemoveUserFromGroup'
            Version: '2010-05-08'
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
        input: { query: { Action: 'RemoveUserFromGroup'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveUserFromGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=ResetServiceSpecificCredential': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            ServiceSpecificCredentialId: string
            Action: 'ResetServiceSpecificCredential'
            Version: '2010-05-08'
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
        output: ResetServiceSpecificCredentialResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'ResetServiceSpecificCredential'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetServiceSpecificCredentialRequest }
        output: ResetServiceSpecificCredentialResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=ResyncMFADevice': {
      $get: {
        input: {
          query: {
            UserName: string
            SerialNumber: string
            AuthenticationCode1: string
            AuthenticationCode2: string
            Action: 'ResyncMFADevice'
            Version: '2010-05-08'
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
        input: { query: { Action: 'ResyncMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResyncMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SetDefaultPolicyVersion': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            VersionId: string
            Action: 'SetDefaultPolicyVersion'
            Version: '2010-05-08'
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
        input: { query: { Action: 'SetDefaultPolicyVersion'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetDefaultPolicyVersionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SetSecurityTokenServicePreferences': {
      $get: {
        input: {
          query: {
            GlobalEndpointTokenVersion: 'v1Token' | 'v2Token'
            Action: 'SetSecurityTokenServicePreferences'
            Version: '2010-05-08'
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
        input: {
          query: { Action: 'SetSecurityTokenServicePreferences'; Version: '2010-05-08' }
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
        } & { json: SetSecurityTokenServicePreferencesRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=SimulateCustomPolicy': {
      $get: {
        input: {
          query: {
            PolicyInputList: PolicyDocumentType[]
            PermissionsBoundaryPolicyInputList?: PolicyDocumentType[] | undefined
            ActionNames: ActionNameType[]
            ResourceArns?: ResourceNameType[] | undefined
            ResourcePolicy?: string | undefined
            ResourceOwner?: string | undefined
            CallerArn?: string | undefined
            ContextEntries?: ContextEntry[] | undefined
            ResourceHandlingOption?: string | undefined
            MaxItems?: number | undefined
            Marker?: string | undefined
            Action: 'SimulateCustomPolicy'
            Version: '2010-05-08'
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
        output: SimulatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'SimulateCustomPolicy'
            Version: '2010-05-08'
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
        } & { json: SimulateCustomPolicyRequest }
        output: SimulatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=SimulatePrincipalPolicy': {
      $get: {
        input: {
          query: {
            PolicySourceArn: string
            PolicyInputList?: PolicyDocumentType[] | undefined
            PermissionsBoundaryPolicyInputList?: PolicyDocumentType[] | undefined
            ActionNames: ActionNameType[]
            ResourceArns?: ResourceNameType[] | undefined
            ResourcePolicy?: string | undefined
            ResourceOwner?: string | undefined
            CallerArn?: string | undefined
            ContextEntries?: ContextEntry[] | undefined
            ResourceHandlingOption?: string | undefined
            MaxItems?: number | undefined
            Marker?: string | undefined
            Action: 'SimulatePrincipalPolicy'
            Version: '2010-05-08'
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
        output: SimulatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            MaxItems?: string | undefined
            Marker?: string | undefined
            Action: 'SimulatePrincipalPolicy'
            Version: '2010-05-08'
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
        } & { json: SimulatePrincipalPolicyRequest }
        output: SimulatePolicyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=TagInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            Tags: Tag[]
            Action: 'TagInstanceProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'TagInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagInstanceProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagMFADevice': {
      $get: {
        input: {
          query: {
            SerialNumber: string
            Tags: Tag[]
            Action: 'TagMFADevice'
            Version: '2010-05-08'
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
        input: { query: { Action: 'TagMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            Tags: Tag[]
            Action: 'TagOpenIDConnectProvider'
            Version: '2010-05-08'
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
        input: { query: { Action: 'TagOpenIDConnectProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagOpenIDConnectProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagPolicy': {
      $get: {
        input: {
          query: { PolicyArn: string; Tags: Tag[]; Action: 'TagPolicy'; Version: '2010-05-08' }
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
        input: { query: { Action: 'TagPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagRole': {
      $get: {
        input: {
          query: { RoleName: string; Tags: Tag[]; Action: 'TagRole'; Version: '2010-05-08' }
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
        input: { query: { Action: 'TagRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagSAMLProvider': {
      $get: {
        input: {
          query: {
            SAMLProviderArn: string
            Tags: Tag[]
            Action: 'TagSAMLProvider'
            Version: '2010-05-08'
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
        input: { query: { Action: 'TagSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagSAMLProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagServerCertificate': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            Tags: Tag[]
            Action: 'TagServerCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'TagServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagServerCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=TagUser': {
      $get: {
        input: {
          query: { UserName: string; Tags: Tag[]; Action: 'TagUser'; Version: '2010-05-08' }
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
        input: { query: { Action: 'TagUser'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagInstanceProfile': {
      $get: {
        input: {
          query: {
            InstanceProfileName: string
            TagKeys: TagKeyType[]
            Action: 'UntagInstanceProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagInstanceProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagInstanceProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagMFADevice': {
      $get: {
        input: {
          query: {
            SerialNumber: string
            TagKeys: TagKeyType[]
            Action: 'UntagMFADevice'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagMFADevice'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagMFADeviceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagOpenIDConnectProvider': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            TagKeys: TagKeyType[]
            Action: 'UntagOpenIDConnectProvider'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagOpenIDConnectProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagOpenIDConnectProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagPolicy': {
      $get: {
        input: {
          query: {
            PolicyArn: string
            TagKeys: TagKeyType[]
            Action: 'UntagPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagRole': {
      $get: {
        input: {
          query: {
            RoleName: string
            TagKeys: TagKeyType[]
            Action: 'UntagRole'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagRoleRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagSAMLProvider': {
      $get: {
        input: {
          query: {
            SAMLProviderArn: string
            TagKeys: TagKeyType[]
            Action: 'UntagSAMLProvider'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagSAMLProviderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagServerCertificate': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            TagKeys: TagKeyType[]
            Action: 'UntagServerCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagServerCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UntagUser': {
      $get: {
        input: {
          query: {
            UserName: string
            TagKeys: TagKeyType[]
            Action: 'UntagUser'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UntagUser'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateAccessKey': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            AccessKeyId: string
            Status: 'Active' | 'Inactive'
            Action: 'UpdateAccessKey'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateAccessKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccessKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateAccountPasswordPolicy': {
      $get: {
        input: {
          query: {
            MinimumPasswordLength?: number | undefined
            RequireSymbols?: boolean | undefined
            RequireNumbers?: boolean | undefined
            RequireUppercaseCharacters?: boolean | undefined
            RequireLowercaseCharacters?: boolean | undefined
            AllowUsersToChangePassword?: boolean | undefined
            MaxPasswordAge?: number | undefined
            PasswordReusePrevention?: number | undefined
            HardExpiry?: boolean | undefined
            Action: 'UpdateAccountPasswordPolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateAccountPasswordPolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccountPasswordPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateAssumeRolePolicy': {
      $get: {
        input: {
          query: {
            RoleName: string
            PolicyDocument: string
            Action: 'UpdateAssumeRolePolicy'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateAssumeRolePolicy'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAssumeRolePolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateGroup': {
      $get: {
        input: {
          query: {
            GroupName: string
            NewPath?: string | undefined
            NewGroupName?: string | undefined
            Action: 'UpdateGroup'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateGroup'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateLoginProfile': {
      $get: {
        input: {
          query: {
            UserName: string
            Password?: string | undefined
            PasswordResetRequired?: boolean | undefined
            Action: 'UpdateLoginProfile'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateLoginProfile'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLoginProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateOpenIDConnectProviderThumbprint': {
      $get: {
        input: {
          query: {
            OpenIDConnectProviderArn: string
            ThumbprintList: ThumbprintType[]
            Action: 'UpdateOpenIDConnectProviderThumbprint'
            Version: '2010-05-08'
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
        input: {
          query: { Action: 'UpdateOpenIDConnectProviderThumbprint'; Version: '2010-05-08' }
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
        } & { json: UpdateOpenIDConnectProviderThumbprintRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateRole': {
      $get: {
        input: {
          query: {
            RoleName: string
            Description?: string | undefined
            MaxSessionDuration?: number | undefined
            Action: 'UpdateRole'
            Version: '2010-05-08'
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
        output: UpdateRoleResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateRole'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRoleRequest }
        output: UpdateRoleResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateRoleDescription': {
      $get: {
        input: {
          query: {
            RoleName: string
            Description: string
            Action: 'UpdateRoleDescription'
            Version: '2010-05-08'
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
        output: UpdateRoleDescriptionResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateRoleDescription'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRoleDescriptionRequest }
        output: UpdateRoleDescriptionResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateSAMLProvider': {
      $get: {
        input: {
          query: {
            SAMLMetadataDocument: string
            SAMLProviderArn: string
            Action: 'UpdateSAMLProvider'
            Version: '2010-05-08'
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
        output: UpdateSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UpdateSAMLProvider'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSAMLProviderRequest }
        output: UpdateSAMLProviderResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UpdateSSHPublicKey': {
      $get: {
        input: {
          query: {
            UserName: string
            SSHPublicKeyId: string
            Status: 'Active' | 'Inactive'
            Action: 'UpdateSSHPublicKey'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateSSHPublicKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSSHPublicKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateServerCertificate': {
      $get: {
        input: {
          query: {
            ServerCertificateName: string
            NewPath?: string | undefined
            NewServerCertificateName?: string | undefined
            Action: 'UpdateServerCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServerCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateServiceSpecificCredential': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            ServiceSpecificCredentialId: string
            Status: 'Active' | 'Inactive'
            Action: 'UpdateServiceSpecificCredential'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateServiceSpecificCredential'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServiceSpecificCredentialRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateSigningCertificate': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            CertificateId: string
            Status: 'Active' | 'Inactive'
            Action: 'UpdateSigningCertificate'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateSigningCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSigningCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UpdateUser': {
      $get: {
        input: {
          query: {
            UserName: string
            NewPath?: string | undefined
            NewUserName?: string | undefined
            Action: 'UpdateUser'
            Version: '2010-05-08'
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
        input: { query: { Action: 'UpdateUser'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#Action=UploadSSHPublicKey': {
      $get: {
        input: {
          query: {
            UserName: string
            SSHPublicKeyBody: string
            Action: 'UploadSSHPublicKey'
            Version: '2010-05-08'
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
        output: UploadSSHPublicKeyResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UploadSSHPublicKey'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UploadSSHPublicKeyRequest }
        output: UploadSSHPublicKeyResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UploadServerCertificate': {
      $get: {
        input: {
          query: {
            Path?: string | undefined
            ServerCertificateName: string
            CertificateBody: string
            PrivateKey: string
            CertificateChain?: string | undefined
            Tags?: Tag[] | undefined
            Action: 'UploadServerCertificate'
            Version: '2010-05-08'
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
        output: UploadServerCertificateResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UploadServerCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UploadServerCertificateRequest }
        output: UploadServerCertificateResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/#Action=UploadSigningCertificate': {
      $get: {
        input: {
          query: {
            UserName?: string | undefined
            CertificateBody: string
            Action: 'UploadSigningCertificate'
            Version: '2010-05-08'
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
        output: UploadSigningCertificateResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { query: { Action: 'UploadSigningCertificate'; Version: '2010-05-08' } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UploadSigningCertificateRequest }
        output: UploadSigningCertificateResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
