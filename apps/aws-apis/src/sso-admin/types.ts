type AttachCustomerManagedPolicyReferenceToPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  CustomerManagedPolicyReference: { Name: {}; Path?: {} | undefined }
}
type AttachCustomerManagedPolicyReferenceToPermissionSetResponse = { [x: string]: unknown }
type AttachManagedPolicyToPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  ManagedPolicyArn: {}
}
type AttachManagedPolicyToPermissionSetResponse = { [x: string]: unknown }
type CreateAccountAssignmentRequest = {
  InstanceArn: {}
  TargetId: {}
  TargetType: {}
  PermissionSetArn: {}
  PrincipalType: {}
  PrincipalId: {}
}
type CreateAccountAssignmentResponse = {
  AccountAssignmentCreationStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        FailureReason?: {} | undefined
        TargetId?: {} | undefined
        TargetType?: {} | undefined
        PermissionSetArn?: {} | undefined
        PrincipalType?: {} | undefined
        PrincipalId?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type CreateInstanceAccessControlAttributeConfigurationRequest = {
  InstanceArn: {}
  InstanceAccessControlAttributeConfiguration: { AccessControlAttributes: {} }
}
type CreateInstanceAccessControlAttributeConfigurationResponse = { [x: string]: unknown }
type CreatePermissionSetRequest = {
  Name: {}
  Description?: {} | undefined
  InstanceArn: {}
  SessionDuration?: {} | undefined
  RelayState?: {} | undefined
  Tags?: {} | undefined
}
type CreatePermissionSetResponse = {
  PermissionSet?:
    | {
        Name?: {} | undefined
        PermissionSetArn?: {} | undefined
        Description?: {} | undefined
        CreatedDate?: {} | undefined
        SessionDuration?: {} | undefined
        RelayState?: {} | undefined
      }
    | undefined
}
type DeleteAccountAssignmentRequest = {
  InstanceArn: {}
  TargetId: {}
  TargetType: {}
  PermissionSetArn: {}
  PrincipalType: {}
  PrincipalId: {}
}
type DeleteAccountAssignmentResponse = {
  AccountAssignmentDeletionStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        FailureReason?: {} | undefined
        TargetId?: {} | undefined
        TargetType?: {} | undefined
        PermissionSetArn?: {} | undefined
        PrincipalType?: {} | undefined
        PrincipalId?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type DeleteInlinePolicyFromPermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type DeleteInlinePolicyFromPermissionSetResponse = { [x: string]: unknown }
type DeleteInstanceAccessControlAttributeConfigurationRequest = { InstanceArn: {} }
type DeleteInstanceAccessControlAttributeConfigurationResponse = { [x: string]: unknown }
type DeletePermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type DeletePermissionSetResponse = { [x: string]: unknown }
type DeletePermissionsBoundaryFromPermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type DeletePermissionsBoundaryFromPermissionSetResponse = { [x: string]: unknown }
type DescribeAccountAssignmentCreationStatusRequest = {
  InstanceArn: {}
  AccountAssignmentCreationRequestId: {}
}
type DescribeAccountAssignmentCreationStatusResponse = {
  AccountAssignmentCreationStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        FailureReason?: {} | undefined
        TargetId?: {} | undefined
        TargetType?: {} | undefined
        PermissionSetArn?: {} | undefined
        PrincipalType?: {} | undefined
        PrincipalId?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type DescribeAccountAssignmentDeletionStatusRequest = {
  InstanceArn: {}
  AccountAssignmentDeletionRequestId: {}
}
type DescribeAccountAssignmentDeletionStatusResponse = {
  AccountAssignmentDeletionStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        FailureReason?: {} | undefined
        TargetId?: {} | undefined
        TargetType?: {} | undefined
        PermissionSetArn?: {} | undefined
        PrincipalType?: {} | undefined
        PrincipalId?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type DescribeInstanceAccessControlAttributeConfigurationRequest = { InstanceArn: {} }
type DescribeInstanceAccessControlAttributeConfigurationResponse = {
  Status?: {} | undefined
  StatusReason?: {} | undefined
  InstanceAccessControlAttributeConfiguration?: { AccessControlAttributes: {} } | undefined
}
type DescribePermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type DescribePermissionSetResponse = {
  PermissionSet?:
    | {
        Name?: {} | undefined
        PermissionSetArn?: {} | undefined
        Description?: {} | undefined
        CreatedDate?: {} | undefined
        SessionDuration?: {} | undefined
        RelayState?: {} | undefined
      }
    | undefined
}
type DescribePermissionSetProvisioningStatusRequest = {
  InstanceArn: {}
  ProvisionPermissionSetRequestId: {}
}
type DescribePermissionSetProvisioningStatusResponse = {
  PermissionSetProvisioningStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        AccountId?: {} | undefined
        PermissionSetArn?: {} | undefined
        FailureReason?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type DetachCustomerManagedPolicyReferenceFromPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  CustomerManagedPolicyReference: { Name: {}; Path?: {} | undefined }
}
type DetachCustomerManagedPolicyReferenceFromPermissionSetResponse = { [x: string]: unknown }
type DetachManagedPolicyFromPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  ManagedPolicyArn: {}
}
type DetachManagedPolicyFromPermissionSetResponse = { [x: string]: unknown }
type GetInlinePolicyForPermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type GetInlinePolicyForPermissionSetResponse = { InlinePolicy?: {} | undefined }
type GetPermissionsBoundaryForPermissionSetRequest = { InstanceArn: {}; PermissionSetArn: {} }
type GetPermissionsBoundaryForPermissionSetResponse = {
  PermissionsBoundary?:
    | {
        CustomerManagedPolicyReference?: { Name: {}; Path?: {} | undefined } | undefined
        ManagedPolicyArn?: {} | undefined
      }
    | undefined
}
type ListAccountAssignmentCreationStatusRequest = {
  InstanceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filter?: { Status?: {} | undefined } | undefined
}
type ListAccountAssignmentCreationStatusResponse = {
  AccountAssignmentsCreationStatus?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountAssignmentDeletionStatusRequest = {
  InstanceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filter?: { Status?: {} | undefined } | undefined
}
type ListAccountAssignmentDeletionStatusResponse = {
  AccountAssignmentsDeletionStatus?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountAssignmentsRequest = {
  InstanceArn: {}
  AccountId: {}
  PermissionSetArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountAssignmentsResponse = {
  AccountAssignments?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountsForProvisionedPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  ProvisioningStatus?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListAccountsForProvisionedPermissionSetResponse = {
  AccountIds?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomerManagedPolicyReferencesInPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListCustomerManagedPolicyReferencesInPermissionSetResponse = {
  CustomerManagedPolicyReferences?: {} | undefined
  NextToken?: {} | undefined
}
type ListInstancesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListInstancesResponse = { Instances?: {} | undefined; NextToken?: {} | undefined }
type ListManagedPoliciesInPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListManagedPoliciesInPermissionSetResponse = {
  AttachedManagedPolicies?: {} | undefined
  NextToken?: {} | undefined
}
type ListPermissionSetProvisioningStatusRequest = {
  InstanceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filter?: { Status?: {} | undefined } | undefined
}
type ListPermissionSetProvisioningStatusResponse = {
  PermissionSetsProvisioningStatus?: {} | undefined
  NextToken?: {} | undefined
}
type ListPermissionSetsRequest = {
  InstanceArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListPermissionSetsResponse = { PermissionSets?: {} | undefined; NextToken?: {} | undefined }
type ListPermissionSetsProvisionedToAccountRequest = {
  InstanceArn: {}
  AccountId: {}
  ProvisioningStatus?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListPermissionSetsProvisionedToAccountResponse = {
  NextToken?: {} | undefined
  PermissionSets?: {} | undefined
}
type ListTagsForResourceRequest = { InstanceArn: {}; ResourceArn: {}; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ProvisionPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  TargetId?: {} | undefined
  TargetType: {}
}
type ProvisionPermissionSetResponse = {
  PermissionSetProvisioningStatus?:
    | {
        Status?: {} | undefined
        RequestId?: {} | undefined
        AccountId?: {} | undefined
        PermissionSetArn?: {} | undefined
        FailureReason?: {} | undefined
        CreatedDate?: {} | undefined
      }
    | undefined
}
type PutInlinePolicyToPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  InlinePolicy: {}
}
type PutInlinePolicyToPermissionSetResponse = { [x: string]: unknown }
type PutPermissionsBoundaryToPermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  PermissionsBoundary: {
    CustomerManagedPolicyReference?: { Name: {}; Path?: {} | undefined } | undefined
    ManagedPolicyArn?: {} | undefined
  }
}
type PutPermissionsBoundaryToPermissionSetResponse = { [x: string]: unknown }
type TagResourceRequest = { InstanceArn: {}; ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { InstanceArn: {}; ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateInstanceAccessControlAttributeConfigurationRequest = {
  InstanceArn: {}
  InstanceAccessControlAttributeConfiguration: { AccessControlAttributes: {} }
}
type UpdateInstanceAccessControlAttributeConfigurationResponse = { [x: string]: unknown }
type UpdatePermissionSetRequest = {
  InstanceArn: {}
  PermissionSetArn: {}
  Description?: {} | undefined
  SessionDuration?: {} | undefined
  RelayState?: {} | undefined
}
type UpdatePermissionSetResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachCustomerManagedPolicyReferenceToPermissionSetRequest }
        output: AttachCustomerManagedPolicyReferenceToPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.AttachManagedPolicyToPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AttachManagedPolicyToPermissionSetRequest }
        output: AttachManagedPolicyToPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.CreateAccountAssignment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.CreateAccountAssignment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccountAssignmentRequest }
        output: CreateAccountAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.CreateInstanceAccessControlAttributeConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateInstanceAccessControlAttributeConfigurationRequest }
        output: CreateInstanceAccessControlAttributeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.CreatePermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.CreatePermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePermissionSetRequest }
        output: CreatePermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DeleteAccountAssignment': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DeleteAccountAssignment'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccountAssignmentRequest }
        output: DeleteAccountAssignmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DeleteInlinePolicyFromPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInlinePolicyFromPermissionSetRequest }
        output: DeleteInlinePolicyFromPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteInstanceAccessControlAttributeConfigurationRequest }
        output: DeleteInstanceAccessControlAttributeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DeletePermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DeletePermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePermissionSetRequest }
        output: DeletePermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DeletePermissionsBoundaryFromPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePermissionsBoundaryFromPermissionSetRequest }
        output: DeletePermissionsBoundaryFromPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DescribeAccountAssignmentCreationStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountAssignmentCreationStatusRequest }
        output: DescribeAccountAssignmentCreationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DescribeAccountAssignmentDeletionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountAssignmentDeletionStatusRequest }
        output: DescribeAccountAssignmentDeletionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeInstanceAccessControlAttributeConfigurationRequest }
        output: DescribeInstanceAccessControlAttributeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DescribePermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePermissionSetRequest }
        output: DescribePermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DescribePermissionSetProvisioningStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePermissionSetProvisioningStatusRequest }
        output: DescribePermissionSetProvisioningStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest }
        output: DetachCustomerManagedPolicyReferenceFromPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.DetachManagedPolicyFromPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DetachManagedPolicyFromPermissionSetRequest }
        output: DetachManagedPolicyFromPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.GetInlinePolicyForPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetInlinePolicyForPermissionSetRequest }
        output: GetInlinePolicyForPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.GetPermissionsBoundaryForPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPermissionsBoundaryForPermissionSetRequest }
        output: GetPermissionsBoundaryForPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListAccountAssignmentCreationStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountAssignmentCreationStatusRequest }
        output: ListAccountAssignmentCreationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListAccountAssignmentDeletionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountAssignmentDeletionStatusRequest }
        output: ListAccountAssignmentDeletionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListAccountAssignments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListAccountAssignments'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountAssignmentsRequest }
        output: ListAccountAssignmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListAccountsForProvisionedPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccountsForProvisionedPermissionSetRequest }
        output: ListAccountsForProvisionedPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCustomerManagedPolicyReferencesInPermissionSetRequest }
        output: ListCustomerManagedPolicyReferencesInPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListInstances': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListInstancesRequest }
        output: ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListManagedPoliciesInPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListManagedPoliciesInPermissionSetRequest }
        output: ListManagedPoliciesInPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListPermissionSetProvisioningStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPermissionSetProvisioningStatusRequest }
        output: ListPermissionSetProvisioningStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListPermissionSets': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListPermissionSets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPermissionSetsRequest }
        output: ListPermissionSetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListPermissionSetsProvisionedToAccount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPermissionSetsProvisionedToAccountRequest }
        output: ListPermissionSetsProvisionedToAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.ListTagsForResource': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SWBExternalService.ListTagsForResource'
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
    '/#X-Amz-Target=SWBExternalService.ProvisionPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.ProvisionPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ProvisionPermissionSetRequest }
        output: ProvisionPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.PutInlinePolicyToPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutInlinePolicyToPermissionSetRequest }
        output: PutInlinePolicyToPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.PutPermissionsBoundaryToPermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPermissionsBoundaryToPermissionSetRequest }
        output: PutPermissionsBoundaryToPermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.TagResource'
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
    '/#X-Amz-Target=SWBExternalService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.UntagResource'
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
    '/#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateInstanceAccessControlAttributeConfigurationRequest }
        output: UpdateInstanceAccessControlAttributeConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SWBExternalService.UpdatePermissionSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SWBExternalService.UpdatePermissionSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePermissionSetRequest }
        output: UpdatePermissionSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
