type AcceptSharedDirectoryRequest = { SharedDirectoryId: {} }
type AcceptSharedDirectoryResult = {
  SharedDirectory?:
    | {
        OwnerAccountId?: {} | undefined
        OwnerDirectoryId?: {} | undefined
        ShareMethod?: {} | undefined
        SharedAccountId?: {} | undefined
        SharedDirectoryId?: {} | undefined
        ShareStatus?: {} | undefined
        ShareNotes?: {} | undefined
        CreatedDateTime?: {} | undefined
        LastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type AddIpRoutesRequest = {
  DirectoryId: {}
  IpRoutes: {}
  UpdateSecurityGroupForDirectoryControllers?: {} | undefined
}
type AddIpRoutesResult = { [x: string]: unknown }
type DirectoryVpcSettings = { VpcId: {}; SubnetIds: {} }
type AddRegionRequest = { DirectoryId: {}; RegionName: {}; VPCSettings: DirectoryVpcSettings }
type AddRegionResult = { [x: string]: unknown }
type AddTagsToResourceRequest = { ResourceId: {}; Tags: {} }
type AddTagsToResourceResult = { [x: string]: unknown }
type CancelSchemaExtensionRequest = { DirectoryId: {}; SchemaExtensionId: {} }
type CancelSchemaExtensionResult = { [x: string]: unknown }
type ConnectDirectoryRequest = {
  Name: {}
  ShortName?: {} | undefined
  Password: {}
  Description?: {} | undefined
  Size: {}
  ConnectSettings: { VpcId: {}; SubnetIds: {}; CustomerDnsIps: {}; CustomerUserName: {} }
  Tags?: {} | undefined
}
type ConnectDirectoryResult = { DirectoryId?: {} | undefined }
type CreateAliasRequest = { DirectoryId: {}; Alias: {} }
type CreateAliasResult = { DirectoryId?: {} | undefined; Alias?: {} | undefined }
type CreateComputerRequest = {
  DirectoryId: {}
  ComputerName: {}
  Password: {}
  OrganizationalUnitDistinguishedName?: {} | undefined
  ComputerAttributes?: {} | undefined
}
type CreateComputerResult = {
  Computer?:
    | {
        ComputerId?: {} | undefined
        ComputerName?: {} | undefined
        ComputerAttributes?: {} | undefined
      }
    | undefined
}
type CreateConditionalForwarderRequest = { DirectoryId: {}; RemoteDomainName: {}; DnsIpAddrs: {} }
type CreateConditionalForwarderResult = { [x: string]: unknown }
type CreateDirectoryRequest = {
  Name: {}
  ShortName?: {} | undefined
  Password: {}
  Description?: {} | undefined
  Size: {}
  VpcSettings?: { VpcId: {}; SubnetIds: {} } | undefined
  Tags?: {} | undefined
}
type CreateDirectoryResult = { DirectoryId?: {} | undefined }
type CreateLogSubscriptionRequest = { DirectoryId: {}; LogGroupName: {} }
type CreateLogSubscriptionResult = { [x: string]: unknown }
type CreateMicrosoftADRequest = {
  Name: {}
  ShortName?: {} | undefined
  Password: {}
  Description?: {} | undefined
  VpcSettings: { VpcId: {}; SubnetIds: {} }
  Edition?: {} | undefined
  Tags?: {} | undefined
}
type CreateMicrosoftADResult = { DirectoryId?: {} | undefined }
type CreateSnapshotRequest = { DirectoryId: {}; Name?: {} | undefined }
type CreateSnapshotResult = { SnapshotId?: {} | undefined }
type CreateTrustRequest = {
  DirectoryId: {}
  RemoteDomainName: {}
  TrustPassword: {}
  TrustDirection: {}
  TrustType?: {} | undefined
  ConditionalForwarderIpAddrs?: {} | undefined
  SelectiveAuth?: {} | undefined
}
type CreateTrustResult = { TrustId?: {} | undefined }
type DeleteConditionalForwarderRequest = { DirectoryId: {}; RemoteDomainName: {} }
type DeleteConditionalForwarderResult = { [x: string]: unknown }
type DeleteDirectoryRequest = { DirectoryId: {} }
type DeleteDirectoryResult = { DirectoryId?: {} | undefined }
type DeleteLogSubscriptionRequest = { DirectoryId: {} }
type DeleteLogSubscriptionResult = { [x: string]: unknown }
type DeleteSnapshotRequest = { SnapshotId: {} }
type DeleteSnapshotResult = { SnapshotId?: {} | undefined }
type DeleteTrustRequest = { TrustId: {}; DeleteAssociatedConditionalForwarder?: {} | undefined }
type DeleteTrustResult = { TrustId?: {} | undefined }
type DeregisterCertificateRequest = { DirectoryId: {}; CertificateId: {} }
type DeregisterCertificateResult = { [x: string]: unknown }
type DeregisterEventTopicRequest = { DirectoryId: {}; TopicName: {} }
type DeregisterEventTopicResult = { [x: string]: unknown }
type DescribeCertificateRequest = { DirectoryId: {}; CertificateId: {} }
type DescribeCertificateResult = {
  Certificate?:
    | {
        CertificateId?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        CommonName?: {} | undefined
        RegisteredDateTime?: {} | undefined
        ExpiryDateTime?: {} | undefined
        Type?: {} | undefined
        ClientCertAuthSettings?: { OCSPUrl?: {} | undefined } | undefined
      }
    | undefined
}
type DescribeClientAuthenticationSettingsRequest = {
  DirectoryId: {}
  Type?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeClientAuthenticationSettingsResult = {
  ClientAuthenticationSettingsInfo?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeConditionalForwardersRequest = { DirectoryId: {}; RemoteDomainNames?: {} | undefined }
type DescribeConditionalForwardersResult = { ConditionalForwarders?: {} | undefined }
type DescribeDirectoriesRequest = {
  DirectoryIds?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeDirectoriesResult = {
  DirectoryDescriptions?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeDomainControllersRequest = {
  DirectoryId: {}
  DomainControllerIds?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeDomainControllersResult = {
  DomainControllers?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeEventTopicsRequest = { DirectoryId?: {} | undefined; TopicNames?: {} | undefined }
type DescribeEventTopicsResult = { EventTopics?: {} | undefined }
type DescribeLDAPSSettingsRequest = {
  DirectoryId: {}
  Type?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeLDAPSSettingsResult = {
  LDAPSSettingsInfo?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRegionsRequest = {
  DirectoryId: {}
  RegionName?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeRegionsResult = { RegionsDescription?: {} | undefined; NextToken?: {} | undefined }
type DescribeSettingsRequest = {
  DirectoryId: {}
  Status?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSettingsResult = {
  DirectoryId?: {} | undefined
  SettingEntries?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSharedDirectoriesRequest = {
  OwnerDirectoryId: {}
  SharedDirectoryIds?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeSharedDirectoriesResult = {
  SharedDirectories?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeSnapshotsRequest = {
  DirectoryId?: {} | undefined
  SnapshotIds?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeSnapshotsResult = { Snapshots?: {} | undefined; NextToken?: {} | undefined }
type DescribeTrustsRequest = {
  DirectoryId?: {} | undefined
  TrustIds?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type DescribeTrustsResult = { Trusts?: {} | undefined; NextToken?: {} | undefined }
type DescribeUpdateDirectoryRequest = {
  DirectoryId: {}
  UpdateType: {}
  RegionName?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeUpdateDirectoryResult = {
  UpdateActivities?: {} | undefined
  NextToken?: {} | undefined
}
type DisableClientAuthenticationRequest = { DirectoryId: {}; Type: {} }
type DisableClientAuthenticationResult = { [x: string]: unknown }
type DisableLDAPSRequest = { DirectoryId: {}; Type: {} }
type DisableLDAPSResult = { [x: string]: unknown }
type DisableRadiusRequest = { DirectoryId: {} }
type DisableRadiusResult = { [x: string]: unknown }
type DisableSsoRequest = { DirectoryId: {}; UserName?: {} | undefined; Password?: {} | undefined }
type DisableSsoResult = { [x: string]: unknown }
type EnableClientAuthenticationRequest = { DirectoryId: {}; Type: {} }
type EnableClientAuthenticationResult = { [x: string]: unknown }
type EnableLDAPSRequest = { DirectoryId: {}; Type: {} }
type EnableLDAPSResult = { [x: string]: unknown }
type EnableRadiusRequest = {
  DirectoryId: {}
  RadiusSettings: {
    RadiusServers?: {} | undefined
    RadiusPort?: {} | undefined
    RadiusTimeout?: {} | undefined
    RadiusRetries?: {} | undefined
    SharedSecret?: {} | undefined
    AuthenticationProtocol?: {} | undefined
    DisplayLabel?: {} | undefined
    UseSameUsername?: {} | undefined
  }
}
type EnableRadiusResult = { [x: string]: unknown }
type EnableSsoRequest = { DirectoryId: {}; UserName?: {} | undefined; Password?: {} | undefined }
type EnableSsoResult = { [x: string]: unknown }
type GetDirectoryLimitsRequest = { [x: string]: unknown }
type GetDirectoryLimitsResult = {
  DirectoryLimits?:
    | {
        CloudOnlyDirectoriesLimit?: {} | undefined
        CloudOnlyDirectoriesCurrentCount?: {} | undefined
        CloudOnlyDirectoriesLimitReached?: {} | undefined
        CloudOnlyMicrosoftADLimit?: {} | undefined
        CloudOnlyMicrosoftADCurrentCount?: {} | undefined
        CloudOnlyMicrosoftADLimitReached?: {} | undefined
        ConnectedDirectoriesLimit?: {} | undefined
        ConnectedDirectoriesCurrentCount?: {} | undefined
        ConnectedDirectoriesLimitReached?: {} | undefined
      }
    | undefined
}
type GetSnapshotLimitsRequest = { DirectoryId: {} }
type GetSnapshotLimitsResult = {
  SnapshotLimits?:
    | {
        ManualSnapshotsLimit?: {} | undefined
        ManualSnapshotsCurrentCount?: {} | undefined
        ManualSnapshotsLimitReached?: {} | undefined
      }
    | undefined
}
type ListCertificatesRequest = {
  DirectoryId: {}
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListCertificatesResult = { NextToken?: {} | undefined; CertificatesInfo?: {} | undefined }
type ListIpRoutesRequest = { DirectoryId: {}; NextToken?: {} | undefined; Limit?: {} | undefined }
type ListIpRoutesResult = { IpRoutesInfo?: {} | undefined; NextToken?: {} | undefined }
type ListLogSubscriptionsRequest = {
  DirectoryId?: {} | undefined
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListLogSubscriptionsResult = { LogSubscriptions?: {} | undefined; NextToken?: {} | undefined }
type ListSchemaExtensionsRequest = {
  DirectoryId: {}
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListSchemaExtensionsResult = {
  SchemaExtensionsInfo?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceRequest = {
  ResourceId: {}
  NextToken?: {} | undefined
  Limit?: {} | undefined
}
type ListTagsForResourceResult = { Tags?: {} | undefined; NextToken?: {} | undefined }
type RegisterCertificateRequest = {
  DirectoryId: {}
  CertificateData: {}
  Type?: {} | undefined
  ClientCertAuthSettings?: { OCSPUrl?: {} | undefined } | undefined
}
type RegisterCertificateResult = { CertificateId?: {} | undefined }
type RegisterEventTopicRequest = { DirectoryId: {}; TopicName: {} }
type RegisterEventTopicResult = { [x: string]: unknown }
type RejectSharedDirectoryRequest = { SharedDirectoryId: {} }
type RejectSharedDirectoryResult = { SharedDirectoryId?: {} | undefined }
type RemoveIpRoutesRequest = { DirectoryId: {}; CidrIps: {} }
type RemoveIpRoutesResult = { [x: string]: unknown }
type RemoveRegionRequest = { DirectoryId: {} }
type RemoveRegionResult = { [x: string]: unknown }
type RemoveTagsFromResourceRequest = { ResourceId: {}; TagKeys: {} }
type RemoveTagsFromResourceResult = { [x: string]: unknown }
type ResetUserPasswordRequest = { DirectoryId: {}; UserName: {}; NewPassword: {} }
type ResetUserPasswordResult = { [x: string]: unknown }
type RestoreFromSnapshotRequest = { SnapshotId: {} }
type RestoreFromSnapshotResult = { [x: string]: unknown }
type ShareDirectoryRequest = {
  DirectoryId: {}
  ShareNotes?: {} | undefined
  ShareTarget: { Id: {}; Type: {} }
  ShareMethod: {}
}
type ShareDirectoryResult = { SharedDirectoryId?: {} | undefined }
type StartSchemaExtensionRequest = {
  DirectoryId: {}
  CreateSnapshotBeforeSchemaExtension: {}
  LdifContent: {}
  Description: {}
}
type StartSchemaExtensionResult = { SchemaExtensionId?: {} | undefined }
type UnshareDirectoryRequest = { DirectoryId: {}; UnshareTarget: { Id: {}; Type: {} } }
type UnshareDirectoryResult = { SharedDirectoryId?: {} | undefined }
type UpdateConditionalForwarderRequest = { DirectoryId: {}; RemoteDomainName: {}; DnsIpAddrs: {} }
type UpdateConditionalForwarderResult = { [x: string]: unknown }
type UpdateDirectorySetupRequest = {
  DirectoryId: {}
  UpdateType: {}
  OSUpdateSettings?: { OSVersion?: {} | undefined } | undefined
  CreateSnapshotBeforeUpdate?: {} | undefined
}
type UpdateDirectorySetupResult = { [x: string]: unknown }
type UpdateNumberOfDomainControllersRequest = { DirectoryId: {}; DesiredNumber: {} }
type UpdateNumberOfDomainControllersResult = { [x: string]: unknown }
type UpdateRadiusRequest = {
  DirectoryId: {}
  RadiusSettings: {
    RadiusServers?: {} | undefined
    RadiusPort?: {} | undefined
    RadiusTimeout?: {} | undefined
    RadiusRetries?: {} | undefined
    SharedSecret?: {} | undefined
    AuthenticationProtocol?: {} | undefined
    DisplayLabel?: {} | undefined
    UseSameUsername?: {} | undefined
  }
}
type UpdateRadiusResult = { [x: string]: unknown }
type UpdateSettingsRequest = { DirectoryId: {}; Settings: {} }
type UpdateSettingsResult = { DirectoryId?: {} | undefined }
type UpdateTrustRequest = { TrustId: {}; SelectiveAuth?: {} | undefined }
type RequestId = string
type UpdateTrustResult = { RequestId?: RequestId | undefined; TrustId?: {} | undefined }
type VerifyTrustRequest = { TrustId: {} }
type VerifyTrustResult = { TrustId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.AcceptSharedDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptSharedDirectoryRequest }
        output: AcceptSharedDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.AddIpRoutes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.AddIpRoutes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddIpRoutesRequest }
        output: AddIpRoutesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.AddRegion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.AddRegion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddRegionRequest }
        output: AddRegionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.AddTagsToResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.AddTagsToResource'
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
    '/#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CancelSchemaExtension'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelSchemaExtensionRequest }
        output: CancelSchemaExtensionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ConnectDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ConnectDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ConnectDirectoryRequest }
        output: ConnectDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAliasRequest }
        output: CreateAliasResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateComputer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateComputer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateComputerRequest }
        output: CreateComputerResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateConditionalForwarder'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConditionalForwarderRequest }
        output: CreateConditionalForwarderResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDirectoryRequest }
        output: CreateDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateLogSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLogSubscriptionRequest }
        output: CreateLogSubscriptionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateMicrosoftAD'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMicrosoftADRequest }
        output: CreateMicrosoftADResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSnapshotRequest }
        output: CreateSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.CreateTrust': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.CreateTrust'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateTrustRequest }
        output: CreateTrustResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeleteConditionalForwarder'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConditionalForwarderRequest }
        output: DeleteConditionalForwarderResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeleteDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeleteDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDirectoryRequest }
        output: DeleteDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeleteLogSubscription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLogSubscriptionRequest }
        output: DeleteLogSubscriptionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeleteSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSnapshotRequest }
        output: DeleteSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeleteTrust': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeleteTrust'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteTrustRequest }
        output: DeleteTrustResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeregisterCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterCertificateRequest }
        output: DeregisterCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DeregisterEventTopic'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterEventTopicRequest }
        output: DeregisterEventTopicResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCertificateRequest }
        output: DescribeCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeClientAuthenticationSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClientAuthenticationSettingsRequest }
        output: DescribeClientAuthenticationSettingsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeConditionalForwarders'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConditionalForwardersRequest }
        output: DescribeConditionalForwardersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDirectories': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeDirectories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDirectoriesRequest }
        output: DescribeDirectoriesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeDomainControllers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDomainControllersRequest }
        output: DescribeDomainControllersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeEventTopics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventTopicsRequest }
        output: DescribeEventTopicsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeLDAPSSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLDAPSSettingsRequest }
        output: DescribeLDAPSSettingsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeRegions': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeRegions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRegionsRequest }
        output: DescribeRegionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSettingsRequest }
        output: DescribeSettingsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeSharedDirectories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSharedDirectoriesRequest }
        output: DescribeSharedDirectoriesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeSnapshots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSnapshotsRequest }
        output: DescribeSnapshotsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeTrusts': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeTrusts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTrustsRequest }
        output: DescribeTrustsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DescribeUpdateDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUpdateDirectoryRequest }
        output: DescribeUpdateDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DisableClientAuthentication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableClientAuthenticationRequest }
        output: DisableClientAuthenticationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DisableLDAPS': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DisableLDAPS'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableLDAPSRequest }
        output: DisableLDAPSResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DisableRadius': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DisableRadius'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableRadiusRequest }
        output: DisableRadiusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.DisableSso': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.DisableSso'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableSsoRequest }
        output: DisableSsoResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.EnableClientAuthentication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableClientAuthenticationRequest }
        output: EnableClientAuthenticationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.EnableLDAPS': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.EnableLDAPS'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableLDAPSRequest }
        output: EnableLDAPSResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.EnableRadius': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.EnableRadius'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableRadiusRequest }
        output: EnableRadiusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.EnableSso': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.EnableSso'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableSsoRequest }
        output: EnableSsoResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.GetDirectoryLimits'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDirectoryLimitsRequest }
        output: GetDirectoryLimitsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.GetSnapshotLimits'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSnapshotLimitsRequest }
        output: GetSnapshotLimitsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ListCertificates': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ListCertificates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCertificatesRequest }
        output: ListCertificatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ListIpRoutes': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ListIpRoutes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListIpRoutesRequest }
        output: ListIpRoutesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ListLogSubscriptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLogSubscriptionsRequest }
        output: ListLogSubscriptionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ListSchemaExtensions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSchemaExtensionsRequest }
        output: ListSchemaExtensionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ListTagsForResource': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ListTagsForResource'
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
    '/#X-Amz-Target=DirectoryService_20150416.RegisterCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RegisterCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterCertificateRequest }
        output: RegisterCertificateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RegisterEventTopic'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterEventTopicRequest }
        output: RegisterEventTopicResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RejectSharedDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RejectSharedDirectoryRequest }
        output: RejectSharedDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RemoveIpRoutes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveIpRoutesRequest }
        output: RemoveIpRoutesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RemoveRegion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RemoveRegion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveRegionRequest }
        output: RemoveRegionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RemoveTagsFromResource'
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
    '/#X-Amz-Target=DirectoryService_20150416.ResetUserPassword': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ResetUserPassword'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResetUserPasswordRequest }
        output: ResetUserPasswordResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.RestoreFromSnapshot'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreFromSnapshotRequest }
        output: RestoreFromSnapshotResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.ShareDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.ShareDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ShareDirectoryRequest }
        output: ShareDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.StartSchemaExtension'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartSchemaExtensionRequest }
        output: StartSchemaExtensionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UnshareDirectory': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UnshareDirectory'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UnshareDirectoryRequest }
        output: UnshareDirectoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateConditionalForwarder'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConditionalForwarderRequest }
        output: UpdateConditionalForwarderResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateDirectorySetup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateDirectorySetupRequest }
        output: UpdateDirectorySetupResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateNumberOfDomainControllers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateNumberOfDomainControllersRequest }
        output: UpdateNumberOfDomainControllersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateRadius': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateRadius'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRadiusRequest }
        output: UpdateRadiusResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateSettings': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateSettings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSettingsRequest }
        output: UpdateSettingsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.UpdateTrust': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.UpdateTrust'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateTrustRequest }
        output: UpdateTrustResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DirectoryService_20150416.VerifyTrust': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DirectoryService_20150416.VerifyTrust'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyTrustRequest }
        output: VerifyTrustResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
