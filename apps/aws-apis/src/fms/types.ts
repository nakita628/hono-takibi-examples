type AssociateAdminAccountRequest = { AdminAccount: {} }
type InvalidOperationException = { [x: string]: unknown }
type InvalidInputException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type InternalErrorException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type AssociateThirdPartyFirewallRequest = { ThirdPartyFirewall: {} }
type AssociateThirdPartyFirewallResponse = { ThirdPartyFirewallStatus?: {} | undefined }
type BatchAssociateResourceRequest = { ResourceSetIdentifier: {}; Items: {} }
type BatchAssociateResourceResponse = { ResourceSetIdentifier: {}; FailedItems: {} }
type BatchDisassociateResourceRequest = { ResourceSetIdentifier: {}; Items: {} }
type BatchDisassociateResourceResponse = { ResourceSetIdentifier: {}; FailedItems: {} }
type DeleteAppsListRequest = { ListId: {} }
type DeleteNotificationChannelRequest = { [x: string]: unknown }
type DeletePolicyRequest = { PolicyId: {}; DeleteAllPolicyResources?: {} | undefined }
type DeleteProtocolsListRequest = { ListId: {} }
type DeleteResourceSetRequest = { Identifier: {} }
type DisassociateAdminAccountRequest = { [x: string]: unknown }
type DisassociateThirdPartyFirewallRequest = { ThirdPartyFirewall: {} }
type DisassociateThirdPartyFirewallResponse = { ThirdPartyFirewallStatus?: {} | undefined }
type GetAdminAccountRequest = { [x: string]: unknown }
type GetAdminAccountResponse = { AdminAccount?: {} | undefined; RoleStatus?: {} | undefined }
type GetAdminScopeRequest = { AdminAccount: {} }
type GetAdminScopeResponse = {
  AdminScope?:
    | {
        AccountScope?:
          | {
              Accounts?: {} | undefined
              AllAccountsEnabled?: {} | undefined
              ExcludeSpecifiedAccounts?: {} | undefined
            }
          | undefined
        OrganizationalUnitScope?:
          | {
              OrganizationalUnits?: {} | undefined
              AllOrganizationalUnitsEnabled?: {} | undefined
              ExcludeSpecifiedOrganizationalUnits?: {} | undefined
            }
          | undefined
        RegionScope?: { Regions?: {} | undefined; AllRegionsEnabled?: {} | undefined } | undefined
        PolicyTypeScope?:
          | { PolicyTypes?: {} | undefined; AllPolicyTypesEnabled?: {} | undefined }
          | undefined
      }
    | undefined
  Status?: {} | undefined
}
type GetAppsListRequest = { ListId: {}; DefaultList?: {} | undefined }
type GetAppsListResponse = {
  AppsList?:
    | {
        ListId?: {} | undefined
        ListName: {}
        ListUpdateToken?: {} | undefined
        CreateTime?: {} | undefined
        LastUpdateTime?: {} | undefined
        AppsList: {}
        PreviousAppsList?: {} | undefined
      }
    | undefined
  AppsListArn?: {} | undefined
}
type GetComplianceDetailRequest = { PolicyId: {}; MemberAccount: {} }
type GetComplianceDetailResponse = {
  PolicyComplianceDetail?:
    | {
        PolicyOwner?: {} | undefined
        PolicyId?: {} | undefined
        MemberAccount?: {} | undefined
        Violators?: {} | undefined
        EvaluationLimitExceeded?: {} | undefined
        ExpiredAt?: {} | undefined
        IssueInfoMap?: {} | undefined
      }
    | undefined
}
type GetNotificationChannelRequest = { [x: string]: unknown }
type GetNotificationChannelResponse = { SnsTopicArn?: {} | undefined; SnsRoleName?: {} | undefined }
type GetPolicyRequest = { PolicyId: {} }
type GetPolicyResponse = {
  Policy?:
    | {
        PolicyId?: {} | undefined
        PolicyName: {}
        PolicyUpdateToken?: {} | undefined
        SecurityServicePolicyData: {
          Type: {}
          ManagedServiceData?: {} | undefined
          PolicyOption?:
            | {
                NetworkFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
                ThirdPartyFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
              }
            | undefined
        }
        ResourceType: {}
        ResourceTypeList?: {} | undefined
        ResourceTags?: {} | undefined
        ExcludeResourceTags: {}
        RemediationEnabled: {}
        DeleteUnusedFMManagedResources?: {} | undefined
        IncludeMap?: {} | undefined
        ExcludeMap?: {} | undefined
        ResourceSetIds?: {} | undefined
        PolicyDescription?: {} | undefined
        PolicyStatus?: {} | undefined
      }
    | undefined
  PolicyArn?: {} | undefined
}
type InvalidTypeException = { [x: string]: unknown }
type GetProtectionStatusRequest = {
  PolicyId: {}
  MemberAccountId?: {} | undefined
  StartTime?: {} | undefined
  EndTime?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type GetProtectionStatusResponse = {
  AdminAccountId?: {} | undefined
  ServiceType?: {} | undefined
  Data?: {} | undefined
  NextToken?: {} | undefined
}
type GetProtocolsListRequest = { ListId: {}; DefaultList?: {} | undefined }
type GetProtocolsListResponse = {
  ProtocolsList?:
    | {
        ListId?: {} | undefined
        ListName: {}
        ListUpdateToken?: {} | undefined
        CreateTime?: {} | undefined
        LastUpdateTime?: {} | undefined
        ProtocolsList: {}
        PreviousProtocolsList?: {} | undefined
      }
    | undefined
  ProtocolsListArn?: {} | undefined
}
type GetResourceSetRequest = { Identifier: {} }
type GetResourceSetResponse = {
  ResourceSet: {
    Id?: {} | undefined
    Name: {}
    Description?: {} | undefined
    UpdateToken?: {} | undefined
    ResourceTypeList: {}
    LastUpdateTime?: {} | undefined
    ResourceSetStatus?: {} | undefined
  }
  ResourceSetArn: {}
}
type GetThirdPartyFirewallAssociationStatusRequest = { ThirdPartyFirewall: {} }
type GetThirdPartyFirewallAssociationStatusResponse = {
  ThirdPartyFirewallStatus?: {} | undefined
  MarketplaceOnboardingStatus?: {} | undefined
}
type GetViolationDetailsRequest = {
  PolicyId: {}
  MemberAccount: {}
  ResourceId: {}
  ResourceType: {}
}
type GetViolationDetailsResponse = {
  ViolationDetail?:
    | {
        PolicyId: {}
        MemberAccount: {}
        ResourceId: {}
        ResourceType: {}
        ResourceViolations: {}
        ResourceTags?: {} | undefined
        ResourceDescription?: {} | undefined
      }
    | undefined
}
type ListAdminAccountsForOrganizationRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAdminAccountsForOrganizationResponse = {
  AdminAccounts?: {} | undefined
  NextToken?: {} | undefined
}
type ListAdminsManagingAccountRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListAdminsManagingAccountResponse = {
  AdminAccounts?: {} | undefined
  NextToken?: {} | undefined
}
type ListAppsListsRequest = {
  DefaultLists?: {} | undefined
  NextToken?: {} | undefined
  MaxResults: {}
}
type ListAppsListsResponse = { AppsLists?: {} | undefined; NextToken?: {} | undefined }
type ListComplianceStatusRequest = {
  PolicyId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListComplianceStatusResponse = {
  PolicyComplianceStatusList?: {} | undefined
  NextToken?: {} | undefined
}
type ListDiscoveredResourcesRequest = {
  MemberAccountIds: {}
  ResourceType: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListDiscoveredResourcesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ListMemberAccountsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListMemberAccountsResponse = { MemberAccounts?: {} | undefined; NextToken?: {} | undefined }
type ListPoliciesRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListPoliciesResponse = { PolicyList?: {} | undefined; NextToken?: {} | undefined }
type ListProtocolsListsRequest = {
  DefaultLists?: {} | undefined
  NextToken?: {} | undefined
  MaxResults: {}
}
type ListProtocolsListsResponse = { ProtocolsLists?: {} | undefined; NextToken?: {} | undefined }
type ListResourceSetResourcesRequest = {
  Identifier: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListResourceSetResourcesResponse = { Items: {}; NextToken?: {} | undefined }
type ListResourceSetsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListResourceSetsResponse = { ResourceSets?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { TagList?: {} | undefined }
type ListThirdPartyFirewallFirewallPoliciesRequest = {
  ThirdPartyFirewall: {}
  NextToken?: {} | undefined
  MaxResults: {}
}
type ListThirdPartyFirewallFirewallPoliciesResponse = {
  ThirdPartyFirewallFirewallPolicies?: {} | undefined
  NextToken?: {} | undefined
}
type PutAdminAccountRequest = {
  AdminAccount: {}
  AdminScope?:
    | {
        AccountScope?:
          | {
              Accounts?: {} | undefined
              AllAccountsEnabled?: {} | undefined
              ExcludeSpecifiedAccounts?: {} | undefined
            }
          | undefined
        OrganizationalUnitScope?:
          | {
              OrganizationalUnits?: {} | undefined
              AllOrganizationalUnitsEnabled?: {} | undefined
              ExcludeSpecifiedOrganizationalUnits?: {} | undefined
            }
          | undefined
        RegionScope?: { Regions?: {} | undefined; AllRegionsEnabled?: {} | undefined } | undefined
        PolicyTypeScope?:
          | { PolicyTypes?: {} | undefined; AllPolicyTypesEnabled?: {} | undefined }
          | undefined
      }
    | undefined
}
type PutAppsListRequest = {
  AppsList: {
    ListId?: {} | undefined
    ListName: {}
    ListUpdateToken?: {} | undefined
    CreateTime?: {} | undefined
    LastUpdateTime?: {} | undefined
    AppsList: {}
    PreviousAppsList?: {} | undefined
  }
  TagList?: {} | undefined
}
type PutAppsListResponse = {
  AppsList?:
    | {
        ListId?: {} | undefined
        ListName: {}
        ListUpdateToken?: {} | undefined
        CreateTime?: {} | undefined
        LastUpdateTime?: {} | undefined
        AppsList: {}
        PreviousAppsList?: {} | undefined
      }
    | undefined
  AppsListArn?: {} | undefined
}
type PutNotificationChannelRequest = { SnsTopicArn: {}; SnsRoleName: {} }
type PutPolicyRequest = {
  Policy: {
    PolicyId?: {} | undefined
    PolicyName: {}
    PolicyUpdateToken?: {} | undefined
    SecurityServicePolicyData: {
      Type: {}
      ManagedServiceData?: {} | undefined
      PolicyOption?:
        | {
            NetworkFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
            ThirdPartyFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
          }
        | undefined
    }
    ResourceType: {}
    ResourceTypeList?: {} | undefined
    ResourceTags?: {} | undefined
    ExcludeResourceTags: {}
    RemediationEnabled: {}
    DeleteUnusedFMManagedResources?: {} | undefined
    IncludeMap?: {} | undefined
    ExcludeMap?: {} | undefined
    ResourceSetIds?: {} | undefined
    PolicyDescription?: {} | undefined
    PolicyStatus?: {} | undefined
  }
  TagList?: {} | undefined
}
type PutPolicyResponse = {
  Policy?:
    | {
        PolicyId?: {} | undefined
        PolicyName: {}
        PolicyUpdateToken?: {} | undefined
        SecurityServicePolicyData: {
          Type: {}
          ManagedServiceData?: {} | undefined
          PolicyOption?:
            | {
                NetworkFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
                ThirdPartyFirewallPolicy?: { FirewallDeploymentModel?: {} | undefined } | undefined
              }
            | undefined
        }
        ResourceType: {}
        ResourceTypeList?: {} | undefined
        ResourceTags?: {} | undefined
        ExcludeResourceTags: {}
        RemediationEnabled: {}
        DeleteUnusedFMManagedResources?: {} | undefined
        IncludeMap?: {} | undefined
        ExcludeMap?: {} | undefined
        ResourceSetIds?: {} | undefined
        PolicyDescription?: {} | undefined
        PolicyStatus?: {} | undefined
      }
    | undefined
  PolicyArn?: {} | undefined
}
type PutProtocolsListRequest = {
  ProtocolsList: {
    ListId?: {} | undefined
    ListName: {}
    ListUpdateToken?: {} | undefined
    CreateTime?: {} | undefined
    LastUpdateTime?: {} | undefined
    ProtocolsList: {}
    PreviousProtocolsList?: {} | undefined
  }
  TagList?: {} | undefined
}
type PutProtocolsListResponse = {
  ProtocolsList?:
    | {
        ListId?: {} | undefined
        ListName: {}
        ListUpdateToken?: {} | undefined
        CreateTime?: {} | undefined
        LastUpdateTime?: {} | undefined
        ProtocolsList: {}
        PreviousProtocolsList?: {} | undefined
      }
    | undefined
  ProtocolsListArn?: {} | undefined
}
type PutResourceSetRequest = {
  ResourceSet: {
    Id?: {} | undefined
    Name: {}
    Description?: {} | undefined
    UpdateToken?: {} | undefined
    ResourceTypeList: {}
    LastUpdateTime?: {} | undefined
    ResourceSetStatus?: {} | undefined
  }
  TagList?: {} | undefined
}
type PutResourceSetResponse = {
  ResourceSet: {
    Id?: {} | undefined
    Name: {}
    Description?: {} | undefined
    UpdateToken?: {} | undefined
    ResourceTypeList: {}
    LastUpdateTime?: {} | undefined
    ResourceSetStatus?: {} | undefined
  }
  ResourceSetArn: {}
}
type TagResourceRequest = { ResourceArn: {}; TagList: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateAdminAccountRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateThirdPartyFirewallRequest }
            output: AssociateThirdPartyFirewallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateThirdPartyFirewallRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateThirdPartyFirewallRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateThirdPartyFirewallRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.AssociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateThirdPartyFirewallRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: BatchAssociateResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchAssociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchAssociateResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchDisassociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDisassociateResourceRequest }
            output: BatchDisassociateResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchDisassociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDisassociateResourceRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchDisassociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDisassociateResourceRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchDisassociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDisassociateResourceRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.BatchDisassociateResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: BatchDisassociateResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DeleteAppsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppsListRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAppsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNotificationChannelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNotificationChannelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNotificationChannelRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteNotificationChannelRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DeletePolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePolicyRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePolicyRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePolicyRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeletePolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeletePolicyRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProtocolsListRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProtocolsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProtocolsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteProtocolsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceSetRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceSetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceSetRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceSetRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DeleteResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteResourceSetRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateAdminAccountRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateAdminAccountRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateAdminAccountRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateAdminAccountRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateThirdPartyFirewallRequest }
            output: DisassociateThirdPartyFirewallResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateThirdPartyFirewallRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateThirdPartyFirewallRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateThirdPartyFirewallRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.DisassociateThirdPartyFirewall'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateThirdPartyFirewallRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminAccountRequest }
            output: GetAdminAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminAccountRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminAccountRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminAccountRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetAdminScope': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminScope'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminScopeRequest }
            output: GetAdminScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminScope'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminScopeRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminScope'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminScopeRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminScope'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminScopeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAdminScope'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAdminScopeRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetAppsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAppsListRequest }
            output: GetAppsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAppsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAppsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetAppsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetComplianceDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailRequest }
            output: GetComplianceDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetComplianceDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetComplianceDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetComplianceDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetComplianceDetail'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetComplianceDetailRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNotificationChannelRequest }
            output: GetNotificationChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNotificationChannelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNotificationChannelRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetNotificationChannelRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetPolicy'
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
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPolicyRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPolicyRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetPolicyRequest }
            output: InvalidTypeException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtectionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtectionStatusRequest }
            output: GetProtectionStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtectionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtectionStatusRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtectionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtectionStatusRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtectionStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtectionStatusRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetProtocolsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtocolsListRequest }
            output: GetProtocolsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtocolsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtocolsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetProtocolsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetResourceSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceSetRequest }
            output: GetResourceSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceSetRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceSetRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceSetRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetResourceSetRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetThirdPartyFirewallAssociationStatusRequest }
            output: GetThirdPartyFirewallAssociationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetThirdPartyFirewallAssociationStatusRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetThirdPartyFirewallAssociationStatusRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetThirdPartyFirewallAssociationStatusRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetThirdPartyFirewallAssociationStatusRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.GetViolationDetails': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetViolationDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetViolationDetailsRequest }
            output: GetViolationDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetViolationDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetViolationDetailsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetViolationDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetViolationDetailsRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.GetViolationDetails'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetViolationDetailsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminAccountsForOrganization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminAccountsForOrganizationRequest }
            output: ListAdminAccountsForOrganizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminAccountsForOrganization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminAccountsForOrganizationRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminAccountsForOrganization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminAccountsForOrganizationRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminAccountsForOrganization'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminAccountsForOrganizationRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminsManagingAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminsManagingAccountRequest }
            output: ListAdminsManagingAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminsManagingAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminsManagingAccountRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminsManagingAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminsManagingAccountRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAdminsManagingAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAdminsManagingAccountRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListAppsLists': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAppsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAppsListsRequest }
            output: ListAppsListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAppsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAppsListsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAppsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAppsListsRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAppsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAppsListsRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListAppsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAppsListsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListComplianceStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComplianceStatusRequest }
            output: ListComplianceStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListComplianceStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComplianceStatusRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListComplianceStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListComplianceStatusRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: ListDiscoveredResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListDiscoveredResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListDiscoveredResourcesRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListMemberAccounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMemberAccountsRequest }
            output: ListMemberAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListMemberAccounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMemberAccountsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListMemberAccounts'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListMemberAccountsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListPolicies': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListPolicies'
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
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPoliciesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPoliciesRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPoliciesRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListPoliciesRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListProtocolsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProtocolsListsRequest }
            output: ListProtocolsListsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListProtocolsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProtocolsListsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListProtocolsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProtocolsListsRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListProtocolsLists'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListProtocolsListsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSetResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetResourcesRequest }
            output: ListResourceSetResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSetResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetResourcesRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSetResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetResourcesRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSetResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetResourcesRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSetResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetResourcesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListResourceSets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetsRequest }
            output: ListResourceSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetsRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetsRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListResourceSets'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListResourceSetsRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListTagsForResource'
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
                'X-Amz-Target': 'AWSFMS_20180101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListThirdPartyFirewallFirewallPoliciesRequest }
            output: ListThirdPartyFirewallFirewallPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListThirdPartyFirewallFirewallPoliciesRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListThirdPartyFirewallFirewallPoliciesRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListThirdPartyFirewallFirewallPoliciesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListThirdPartyFirewallFirewallPoliciesRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutAdminAccount': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAdminAccountRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAdminAccountRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAdminAccountRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAdminAccountRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAdminAccount'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAdminAccountRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutAppsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: PutAppsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutAppsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutAppsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutNotificationChannelRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutNotificationChannelRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutNotificationChannelRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutNotificationChannel'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutNotificationChannelRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutPolicy': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: PutPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutPolicy'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutPolicyRequest }
            output: InvalidTypeException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutProtocolsList': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: PutProtocolsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutProtocolsList'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutProtocolsListRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.PutResourceSet': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceSetRequest }
            output: PutResourceSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceSetRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceSetRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceSetRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.PutResourceSet'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: PutResourceSetRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
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
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
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
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=AWSFMS_20180101.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.UntagResource'
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
                'X-Amz-Target': 'AWSFMS_20180101.UntagResource'
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
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidOperationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AWSFMS_20180101.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidInputException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
