type AcceptHandshakeRequest = { HandshakeId: {} }
type AcceptHandshakeResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type AttachPolicyRequest = { PolicyId: {}; TargetId: {} }
type CancelHandshakeRequest = { HandshakeId: {} }
type CancelHandshakeResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type CloseAccountRequest = { AccountId: {} }
type CreateAccountRequest = {
  Email: {}
  AccountName: {}
  RoleName?: {} | undefined
  IamUserAccessToBilling?: {} | undefined
  Tags?: {} | undefined
}
type CreateAccountResponse = {
  CreateAccountStatus?:
    | {
        Id?: {} | undefined
        AccountName?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        CompletedTimestamp?: {} | undefined
        AccountId?: {} | undefined
        GovCloudAccountId?: {} | undefined
        FailureReason?: {} | undefined
      }
    | undefined
}
type CreateGovCloudAccountRequest = {
  Email: {}
  AccountName: {}
  RoleName?: {} | undefined
  IamUserAccessToBilling?: {} | undefined
  Tags?: {} | undefined
}
type CreateAccountStatus = {
  Id?: {} | undefined
  AccountName?: {} | undefined
  State?: {} | undefined
  RequestedTimestamp?: {} | undefined
  CompletedTimestamp?: {} | undefined
  AccountId?: {} | undefined
  GovCloudAccountId?: {} | undefined
  FailureReason?: {} | undefined
}
type CreateGovCloudAccountResponse = { CreateAccountStatus?: CreateAccountStatus | undefined }
type CreateOrganizationRequest = { FeatureSet?: {} | undefined }
type CreateOrganizationResponse = {
  Organization?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FeatureSet?: {} | undefined
        MasterAccountArn?: {} | undefined
        MasterAccountId?: {} | undefined
        MasterAccountEmail?: {} | undefined
        AvailablePolicyTypes?: {} | undefined
      }
    | undefined
}
type CreateOrganizationalUnitRequest = { ParentId: {}; Name: {}; Tags?: {} | undefined }
type CreateOrganizationalUnitResponse = {
  OrganizationalUnit?:
    | { Id?: {} | undefined; Arn?: {} | undefined; Name?: {} | undefined }
    | undefined
}
type CreatePolicyRequest = {
  Content: {}
  Description: {}
  Name: {}
  Type: {}
  Tags?: {} | undefined
}
type CreatePolicyResponse = {
  Policy?:
    | {
        PolicySummary?:
          | {
              Id?: {} | undefined
              Arn?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              Type?: {} | undefined
              AwsManaged?: {} | undefined
            }
          | undefined
        Content?: {} | undefined
      }
    | undefined
}
type DeclineHandshakeRequest = { HandshakeId: {} }
type DeclineHandshakeResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type DeleteOrganizationalUnitRequest = { OrganizationalUnitId: {} }
type DeletePolicyRequest = { PolicyId: {} }
type DeregisterDelegatedAdministratorRequest = { AccountId: {}; ServicePrincipal: {} }
type DescribeAccountRequest = { AccountId: {} }
type DescribeAccountResponse = {
  Account?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Email?: {} | undefined
        Name?: {} | undefined
        Status?: {} | undefined
        JoinedMethod?: {} | undefined
        JoinedTimestamp?: {} | undefined
      }
    | undefined
}
type DescribeCreateAccountStatusRequest = { CreateAccountRequestId: {} }
type DescribeCreateAccountStatusResponse = {
  CreateAccountStatus?:
    | {
        Id?: {} | undefined
        AccountName?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        CompletedTimestamp?: {} | undefined
        AccountId?: {} | undefined
        GovCloudAccountId?: {} | undefined
        FailureReason?: {} | undefined
      }
    | undefined
}
type DescribeEffectivePolicyRequest = { PolicyType: {}; TargetId?: {} | undefined }
type DescribeEffectivePolicyResponse = {
  EffectivePolicy?:
    | {
        PolicyContent?: {} | undefined
        LastUpdatedTimestamp?: {} | undefined
        TargetId?: {} | undefined
        PolicyType?: {} | undefined
      }
    | undefined
}
type DescribeHandshakeRequest = { HandshakeId: {} }
type DescribeHandshakeResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type DescribeOrganizationResponse = {
  Organization?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        FeatureSet?: {} | undefined
        MasterAccountArn?: {} | undefined
        MasterAccountId?: {} | undefined
        MasterAccountEmail?: {} | undefined
        AvailablePolicyTypes?: {} | undefined
      }
    | undefined
}
type DescribeOrganizationalUnitRequest = { OrganizationalUnitId: {} }
type DescribeOrganizationalUnitResponse = {
  OrganizationalUnit?:
    | { Id?: {} | undefined; Arn?: {} | undefined; Name?: {} | undefined }
    | undefined
}
type DescribePolicyRequest = { PolicyId: {} }
type DescribePolicyResponse = {
  Policy?:
    | {
        PolicySummary?:
          | {
              Id?: {} | undefined
              Arn?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              Type?: {} | undefined
              AwsManaged?: {} | undefined
            }
          | undefined
        Content?: {} | undefined
      }
    | undefined
}
type DescribeResourcePolicyResponse = {
  ResourcePolicy?:
    | {
        ResourcePolicySummary?: { Id?: {} | undefined; Arn?: {} | undefined } | undefined
        Content?: {} | undefined
      }
    | undefined
}
type DetachPolicyRequest = { PolicyId: {}; TargetId: {} }
type DisableAWSServiceAccessRequest = { ServicePrincipal: {} }
type DisablePolicyTypeRequest = { RootId: {}; PolicyType: {} }
type DisablePolicyTypeResponse = {
  Root?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        PolicyTypes?: {} | undefined
      }
    | undefined
}
type EnableAWSServiceAccessRequest = { ServicePrincipal: {} }
type EnableAllFeaturesRequest = { [x: string]: unknown }
type EnableAllFeaturesResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type EnablePolicyTypeRequest = { RootId: {}; PolicyType: {} }
type EnablePolicyTypeResponse = {
  Root?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Name?: {} | undefined
        PolicyTypes?: {} | undefined
      }
    | undefined
}
type InviteAccountToOrganizationRequest = {
  Target: { Id: {}; Type: {} }
  Notes?: {} | undefined
  Tags?: {} | undefined
}
type InviteAccountToOrganizationResponse = {
  Handshake?:
    | {
        Id?: {} | undefined
        Arn?: {} | undefined
        Parties?: {} | undefined
        State?: {} | undefined
        RequestedTimestamp?: {} | undefined
        ExpirationTimestamp?: {} | undefined
        Action?: {} | undefined
        Resources?: {} | undefined
      }
    | undefined
}
type ListAWSServiceAccessForOrganizationRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAWSServiceAccessForOrganizationResponse = {
  EnabledServicePrincipals?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListAccountsResponse = { Accounts?: {} | undefined; NextToken?: {} | undefined }
type ListAccountsForParentRequest = {
  ParentId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListAccountsForParentResponse = { Accounts?: {} | undefined; NextToken?: {} | undefined }
type ListChildrenRequest = {
  ParentId: {}
  ChildType: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListChildrenResponse = { Children?: {} | undefined; NextToken?: {} | undefined }
type ListCreateAccountStatusRequest = {
  States?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListCreateAccountStatusResponse = {
  CreateAccountStatuses?: {} | undefined
  NextToken?: {} | undefined
}
type ListDelegatedAdministratorsRequest = {
  ServicePrincipal?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDelegatedAdministratorsResponse = {
  DelegatedAdministrators?: {} | undefined
  NextToken?: {} | undefined
}
type ListDelegatedServicesForAccountRequest = {
  AccountId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListDelegatedServicesForAccountResponse = {
  DelegatedServices?: {} | undefined
  NextToken?: {} | undefined
}
type ListHandshakesForAccountRequest = {
  Filter?: { ActionType?: {} | undefined; ParentHandshakeId?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListHandshakesForAccountResponse = { Handshakes?: {} | undefined; NextToken?: {} | undefined }
type ListHandshakesForOrganizationRequest = {
  Filter?: { ActionType?: {} | undefined; ParentHandshakeId?: {} | undefined } | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListHandshakesForOrganizationResponse = {
  Handshakes?: {} | undefined
  NextToken?: {} | undefined
}
type ListOrganizationalUnitsForParentRequest = {
  ParentId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListOrganizationalUnitsForParentResponse = {
  OrganizationalUnits?: {} | undefined
  NextToken?: {} | undefined
}
type ListParentsRequest = { ChildId: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListParentsResponse = { Parents?: {} | undefined; NextToken?: {} | undefined }
type ListPoliciesRequest = { Filter: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListPoliciesResponse = { Policies?: {} | undefined; NextToken?: {} | undefined }
type ListPoliciesForTargetRequest = {
  TargetId: {}
  Filter: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPoliciesForTargetResponse = { Policies?: {} | undefined; NextToken?: {} | undefined }
type ListRootsRequest = { NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListRootsResponse = { Roots?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceId: {}; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ListTargetsForPolicyRequest = {
  PolicyId: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTargetsForPolicyResponse = { Targets?: {} | undefined; NextToken?: {} | undefined }
type MoveAccountRequest = { AccountId: {}; SourceParentId: {}; DestinationParentId: {} }
type PutResourcePolicyRequest = { Content: {}; Tags?: {} | undefined }
type PutResourcePolicyResponse = {
  ResourcePolicy?:
    | {
        ResourcePolicySummary?: { Id?: {} | undefined; Arn?: {} | undefined } | undefined
        Content?: {} | undefined
      }
    | undefined
}
type RegisterDelegatedAdministratorRequest = { AccountId: {}; ServicePrincipal: {} }
type RemoveAccountFromOrganizationRequest = { AccountId: {} }
type TagResourceRequest = { ResourceId: {}; Tags: {} }
type UntagResourceRequest = { ResourceId: {}; TagKeys: {} }
type UpdateOrganizationalUnitRequest = { OrganizationalUnitId: {}; Name?: {} | undefined }
type UpdateOrganizationalUnitResponse = {
  OrganizationalUnit?:
    | { Id?: {} | undefined; Arn?: {} | undefined; Name?: {} | undefined }
    | undefined
}
type UpdatePolicyRequest = {
  PolicyId: {}
  Name?: {} | undefined
  Description?: {} | undefined
  Content?: {} | undefined
}
type UpdatePolicyResponse = {
  Policy?:
    | {
        PolicySummary?:
          | {
              Id?: {} | undefined
              Arn?: {} | undefined
              Name?: {} | undefined
              Description?: {} | undefined
              Type?: {} | undefined
              AwsManaged?: {} | undefined
            }
          | undefined
        Content?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSOrganizationsV20161128.AcceptHandshake': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.AcceptHandshake'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AcceptHandshakeRequest }
        output: AcceptHandshakeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.AttachPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.AttachPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CancelHandshake': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CancelHandshake'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelHandshakeRequest }
        output: CancelHandshakeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CloseAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CloseAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CloseAccountRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CreateAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccountRequest }
        output: CreateAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateGovCloudAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CreateGovCloudAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGovCloudAccountRequest }
        output: CreateGovCloudAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CreateOrganization'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreateOrganizationalUnit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CreateOrganizationalUnit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateOrganizationalUnitRequest }
        output: CreateOrganizationalUnitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.CreatePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.CreatePolicy'
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
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeclineHandshake': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeclineHandshake'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeclineHandshakeRequest }
        output: DeclineHandshakeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeleteOrganization'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteOrganizationalUnit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeleteOrganizationalUnit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteOrganizationalUnitRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeletePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeletePolicy'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeleteResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeleteResourcePolicy'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.DeregisterDelegatedAdministrator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DeregisterDelegatedAdministrator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterDelegatedAdministratorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountRequest }
        output: DescribeAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeCreateAccountStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeCreateAccountStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCreateAccountStatusRequest }
        output: DescribeCreateAccountStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeEffectivePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeEffectivePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEffectivePolicyRequest }
        output: DescribeEffectivePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeHandshake': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeHandshake'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHandshakeRequest }
        output: DescribeHandshakeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeOrganizationalUnit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeOrganizationalUnit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeOrganizationalUnitRequest }
        output: DescribeOrganizationalUnitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePolicyRequest }
        output: DescribePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DescribeResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DescribeResourcePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeResourcePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DetachPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DetachPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisableAWSServiceAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DisableAWSServiceAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableAWSServiceAccessRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.DisablePolicyType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.DisablePolicyType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisablePolicyTypeRequest }
        output: DisablePolicyTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAWSServiceAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.EnableAWSServiceAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableAWSServiceAccessRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnableAllFeatures': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.EnableAllFeatures'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableAllFeaturesRequest }
        output: EnableAllFeaturesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.EnablePolicyType': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.EnablePolicyType'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnablePolicyTypeRequest }
        output: EnablePolicyTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.InviteAccountToOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.InviteAccountToOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InviteAccountToOrganizationRequest }
        output: InviteAccountToOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.LeaveOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.LeaveOrganization'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAWSServiceAccessForOrganizationRequest }
        output: ListAWSServiceAccessForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccounts': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListAccounts'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountsRequest }
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListAccountsForParent': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListAccountsForParent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountsForParentRequest }
        output: ListAccountsForParentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListChildren': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListChildren'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListChildrenRequest }
        output: ListChildrenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListCreateAccountStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListCreateAccountStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCreateAccountStatusRequest }
        output: ListCreateAccountStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedAdministrators': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListDelegatedAdministrators'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDelegatedAdministratorsRequest }
        output: ListDelegatedAdministratorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListDelegatedServicesForAccount': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListDelegatedServicesForAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDelegatedServicesForAccountRequest }
        output: ListDelegatedServicesForAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForAccount': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListHandshakesForAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHandshakesForAccountRequest }
        output: ListHandshakesForAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListHandshakesForOrganization': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListHandshakesForOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHandshakesForOrganizationRequest }
        output: ListHandshakesForOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListOrganizationalUnitsForParent': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListOrganizationalUnitsForParent'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListOrganizationalUnitsForParentRequest }
        output: ListOrganizationalUnitsForParentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListParents': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListParents'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListParentsRequest }
        output: ListParentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListPolicies'
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
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListPoliciesForTarget': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListPoliciesForTarget'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPoliciesForTargetRequest }
        output: ListPoliciesForTargetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListRoots': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListRoots'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRootsRequest }
        output: ListRootsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTagsForResource': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListTagsForResource'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.ListTargetsForPolicy': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.ListTargetsForPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTargetsForPolicyRequest }
        output: ListTargetsForPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.MoveAccount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.MoveAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MoveAccountRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.PutResourcePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.PutResourcePolicy'
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
    '/#X-Amz-Target=AWSOrganizationsV20161128.RegisterDelegatedAdministrator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.RegisterDelegatedAdministrator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterDelegatedAdministratorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.RemoveAccountFromOrganization': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.RemoveAccountFromOrganization'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveAccountFromOrganizationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.TagResource'
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
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.UntagResource'
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
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdateOrganizationalUnit': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.UpdateOrganizationalUnit'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateOrganizationalUnitRequest }
        output: UpdateOrganizationalUnitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSOrganizationsV20161128.UpdatePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSOrganizationsV20161128.UpdatePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePolicyRequest }
        output: UpdatePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
