type AcceptResourceShareInvitationResponse = {
  resourceShareInvitation?:
    | {
        resourceShareInvitationArn?: {} | undefined
        resourceShareName?: {} | undefined
        resourceShareArn?: {} | undefined
        senderAccountId?: {} | undefined
        receiverAccountId?: {} | undefined
        invitationTimestamp?: {} | undefined
        status?: {} | undefined
        resourceShareAssociations?: {} | undefined
        receiverArn?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
type String = string
type AssociateResourceShareResponse = {
  resourceShareAssociations?: {} | undefined
  clientToken?: {} | undefined
}
type AssociateResourceSharePermissionResponse = {
  returnValue?: {} | undefined
  clientToken?: {} | undefined
}
type Tag = { key?: {} | undefined; value?: {} | undefined }
type CreatePermissionResponse = {
  permission?:
    | {
        arn?: {} | undefined
        version?: {} | undefined
        defaultVersion?: {} | undefined
        name?: {} | undefined
        resourceType?: {} | undefined
        status?: {} | undefined
        creationTime?: {} | undefined
        lastUpdatedTime?: {} | undefined
        isResourceTypeDefault?: {} | undefined
        permissionType?: {} | undefined
        featureSet?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
type ResourceSharePermissionDetail = {
  arn?: {} | undefined
  version?: {} | undefined
  defaultVersion?: {} | undefined
  name?: {} | undefined
  resourceType?: {} | undefined
  permission?: {} | undefined
  creationTime?: {} | undefined
  lastUpdatedTime?: {} | undefined
  isResourceTypeDefault?: {} | undefined
  permissionType?: {} | undefined
  featureSet?: {} | undefined
  status?: {} | undefined
  tags?: {} | undefined
}
type CreatePermissionVersionResponse = {
  permission?: ResourceSharePermissionDetail | undefined
  clientToken?: {} | undefined
}
type CreateResourceShareResponse = {
  resourceShare?:
    | {
        resourceShareArn?: {} | undefined
        name?: {} | undefined
        owningAccountId?: {} | undefined
        allowExternalPrincipals?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        tags?: {} | undefined
        creationTime?: {} | undefined
        lastUpdatedTime?: {} | undefined
        featureSet?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
type DeletePermissionResponse = {
  returnValue?: {} | undefined
  clientToken?: {} | undefined
  permissionStatus?: {} | undefined
}
type DeletePermissionVersionResponse = {
  returnValue?: {} | undefined
  clientToken?: {} | undefined
  permissionStatus?: {} | undefined
}
type DeleteResourceShareResponse = { returnValue?: {} | undefined; clientToken?: {} | undefined }
type DisassociateResourceShareResponse = {
  resourceShareAssociations?: {} | undefined
  clientToken?: {} | undefined
}
type DisassociateResourceSharePermissionResponse = {
  returnValue?: {} | undefined
  clientToken?: {} | undefined
}
type EnableSharingWithAwsOrganizationResponse = { returnValue?: {} | undefined }
type GetPermissionResponse = {
  permission?:
    | {
        arn?: {} | undefined
        version?: {} | undefined
        defaultVersion?: {} | undefined
        name?: {} | undefined
        resourceType?: {} | undefined
        permission?: {} | undefined
        creationTime?: {} | undefined
        lastUpdatedTime?: {} | undefined
        isResourceTypeDefault?: {} | undefined
        permissionType?: {} | undefined
        featureSet?: {} | undefined
        status?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetResourcePoliciesResponse = { policies?: {} | undefined; nextToken?: {} | undefined }
type GetResourceShareAssociationsResponse = {
  resourceShareAssociations?: {} | undefined
  nextToken?: {} | undefined
}
type GetResourceShareInvitationsResponse = {
  resourceShareInvitations?: {} | undefined
  nextToken?: {} | undefined
}
type TagFilter = { tagKey?: {} | undefined; tagValues?: {} | undefined }
type GetResourceSharesResponse = { resourceShares?: {} | undefined; nextToken?: {} | undefined }
type ListPendingInvitationResourcesResponse = {
  resources?: {} | undefined
  nextToken?: {} | undefined
}
type ListPermissionAssociationsResponse = {
  permissions?: {} | undefined
  nextToken?: {} | undefined
}
type ListPermissionVersionsResponse = { permissions?: {} | undefined; nextToken?: {} | undefined }
type ListPermissionsResponse = { permissions?: {} | undefined; nextToken?: {} | undefined }
type ListPrincipalsResponse = { principals?: {} | undefined; nextToken?: {} | undefined }
type ListReplacePermissionAssociationsWorkResponse = {
  replacePermissionAssociationsWorks?: {} | undefined
  nextToken?: {} | undefined
}
type ListResourceSharePermissionsResponse = {
  permissions?: {} | undefined
  nextToken?: {} | undefined
}
type ListResourceTypesResponse = { resourceTypes?: {} | undefined; nextToken?: {} | undefined }
type ListResourcesResponse = { resources?: {} | undefined; nextToken?: {} | undefined }
type ResourceSharePermissionSummary = {
  arn?: {} | undefined
  version?: {} | undefined
  defaultVersion?: {} | undefined
  name?: {} | undefined
  resourceType?: {} | undefined
  status?: {} | undefined
  creationTime?: {} | undefined
  lastUpdatedTime?: {} | undefined
  isResourceTypeDefault?: {} | undefined
  permissionType?: {} | undefined
  featureSet?: {} | undefined
  tags?: {} | undefined
}
type PromotePermissionCreatedFromPolicyResponse = {
  permission?: ResourceSharePermissionSummary | undefined
  clientToken?: {} | undefined
}
type PromoteResourceShareCreatedFromPolicyResponse = { returnValue?: {} | undefined }
type RejectResourceShareInvitationResponse = {
  resourceShareInvitation?:
    | {
        resourceShareInvitationArn?: {} | undefined
        resourceShareName?: {} | undefined
        resourceShareArn?: {} | undefined
        senderAccountId?: {} | undefined
        receiverAccountId?: {} | undefined
        invitationTimestamp?: {} | undefined
        status?: {} | undefined
        resourceShareAssociations?: {} | undefined
        receiverArn?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
type ReplacePermissionAssociationsResponse = {
  replacePermissionAssociationsWork?:
    | {
        id?: {} | undefined
        fromPermissionArn?: {} | undefined
        fromPermissionVersion?: {} | undefined
        toPermissionArn?: {} | undefined
        toPermissionVersion?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        creationTime?: {} | undefined
        lastUpdatedTime?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
type SetDefaultPermissionVersionResponse = {
  returnValue?: {} | undefined
  clientToken?: {} | undefined
}
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateResourceShareResponse = {
  resourceShare?:
    | {
        resourceShareArn?: {} | undefined
        name?: {} | undefined
        owningAccountId?: {} | undefined
        allowExternalPrincipals?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        tags?: {} | undefined
        creationTime?: {} | undefined
        lastUpdatedTime?: {} | undefined
        featureSet?: {} | undefined
      }
    | undefined
  clientToken?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/acceptresourceshareinvitation': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { resourceShareInvitationArn: string; clientToken?: string | undefined } }
        output: AcceptResourceShareInvitationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associateresourceshare': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            resourceArns?: String[] | undefined
            principals?: String[] | undefined
            clientToken?: string | undefined
          }
        }
        output: AssociateResourceShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/associateresourcesharepermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            permissionArn: string
            replace?: boolean | undefined
            clientToken?: string | undefined
            permissionVersion?: number | undefined
          }
        }
        output: AssociateResourceSharePermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/createpermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            name: string
            resourceType: string
            policyTemplate: string
            clientToken?: string | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreatePermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/createpermissionversion': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { permissionArn: string; policyTemplate: string; clientToken?: string | undefined }
        }
        output: CreatePermissionVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/createresourceshare': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            name: string
            resourceArns?: String[] | undefined
            principals?: String[] | undefined
            tags?: Tag[] | undefined
            allowExternalPrincipals?: boolean | undefined
            clientToken?: string | undefined
            permissionArns?: String[] | undefined
          }
        }
        output: CreateResourceShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deletepermission#permissionArn': {
      $delete: {
        input: { query: { permissionArn: string; clientToken?: string | undefined } } & {
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
        output: DeletePermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deletepermissionversion#permissionArn&permissionVersion': {
      $delete: {
        input: {
          query: {
            permissionArn: string
            permissionVersion: number
            clientToken?: string | undefined
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
        output: DeletePermissionVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deleteresourceshare#resourceShareArn': {
      $delete: {
        input: { query: { resourceShareArn: string; clientToken?: string | undefined } } & {
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
        output: DeleteResourceShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disassociateresourceshare': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            resourceArns?: String[] | undefined
            principals?: String[] | undefined
            clientToken?: string | undefined
          }
        }
        output: DisassociateResourceShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/disassociateresourcesharepermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            permissionArn: string
            clientToken?: string | undefined
          }
        }
        output: DisassociateResourceSharePermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/enablesharingwithawsorganization': {
      $post: {
        input: {
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
        output: EnableSharingWithAwsOrganizationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getpermission': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { permissionArn: string; permissionVersion?: number | undefined } }
        output: GetPermissionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getresourcepolicies': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceArns: String[]
            principal?: string | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: GetResourcePoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getresourceshareassociations': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            associationType: 'PRINCIPAL' | 'RESOURCE'
            resourceShareArns?: String[] | undefined
            resourceArn?: string | undefined
            principal?: string | undefined
            associationStatus?:
              | 'ASSOCIATING'
              | 'ASSOCIATED'
              | 'FAILED'
              | 'DISASSOCIATING'
              | 'DISASSOCIATED'
              | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: GetResourceShareAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getresourceshareinvitations': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareInvitationArns?: String[] | undefined
            resourceShareArns?: String[] | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: GetResourceShareInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getresourceshares': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArns?: String[] | undefined
            resourceShareStatus?:
              | 'PENDING'
              | 'ACTIVE'
              | 'FAILED'
              | 'DELETING'
              | 'DELETED'
              | undefined
            resourceOwner: 'SELF' | 'OTHER-ACCOUNTS'
            name?: string | undefined
            tagFilters?: TagFilter[] | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
            permissionArn?: string | undefined
            permissionVersion?: number | undefined
          }
        }
        output: GetResourceSharesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listpendinginvitationresources': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareInvitationArn: string
            nextToken?: string | undefined
            maxResults?: number | undefined
            resourceRegionScope?: 'ALL' | 'REGIONAL' | 'GLOBAL' | undefined
          }
        }
        output: ListPendingInvitationResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listpermissionassociations': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            permissionArn?: string | undefined
            permissionVersion?: number | undefined
            associationStatus?:
              | 'ASSOCIATING'
              | 'ASSOCIATED'
              | 'FAILED'
              | 'DISASSOCIATING'
              | 'DISASSOCIATED'
              | undefined
            resourceType?: string | undefined
            featureSet?: 'CREATED_FROM_POLICY' | 'PROMOTING_TO_STANDARD' | 'STANDARD' | undefined
            defaultVersion?: boolean | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListPermissionAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listpermissionversions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            permissionArn: string
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListPermissionVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listpermissions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceType?: string | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
            permissionType?: 'ALL' | 'AWS_MANAGED' | 'CUSTOMER_MANAGED' | undefined
          }
        }
        output: ListPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listprincipals': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceOwner: 'SELF' | 'OTHER-ACCOUNTS'
            resourceArn?: string | undefined
            principals?: String[] | undefined
            resourceType?: string | undefined
            resourceShareArns?: String[] | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListPrincipalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listreplacepermissionassociationswork': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            workIds?: String[] | undefined
            status?: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListReplacePermissionAssociationsWorkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listresourcesharepermissions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            nextToken?: string | undefined
            maxResults?: number | undefined
          }
        }
        output: ListResourceSharePermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listresourcetypes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            resourceRegionScope?: 'ALL' | 'REGIONAL' | 'GLOBAL' | undefined
          }
        }
        output: ListResourceTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listresources': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceOwner: 'SELF' | 'OTHER-ACCOUNTS'
            principal?: string | undefined
            resourceType?: string | undefined
            resourceArns?: String[] | undefined
            resourceShareArns?: String[] | undefined
            nextToken?: string | undefined
            maxResults?: number | undefined
            resourceRegionScope?: 'ALL' | 'REGIONAL' | 'GLOBAL' | undefined
          }
        }
        output: ListResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/promotepermissioncreatedfrompolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { permissionArn: string; name: string; clientToken?: string | undefined } }
        output: PromotePermissionCreatedFromPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/promoteresourcesharecreatedfrompolicy#resourceShareArn': {
      $post: {
        input: { query: { resourceShareArn: string } } & {
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
        output: PromoteResourceShareCreatedFromPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rejectresourceshareinvitation': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { resourceShareInvitationArn: string; clientToken?: string | undefined } }
        output: RejectResourceShareInvitationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/replacepermissionassociations': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            fromPermissionArn: string
            fromPermissionVersion?: number | undefined
            toPermissionArn: string
            clientToken?: string | undefined
          }
        }
        output: ReplacePermissionAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/setdefaultpermissionversion': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            permissionArn: string
            permissionVersion: number
            clientToken?: string | undefined
          }
        }
        output: SetDefaultPermissionVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tagresource': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn?: string | undefined
            tags: Tag[]
            resourceArn?: string | undefined
          }
        }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/untagresource': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn?: string | undefined
            tagKeys: TagKey[]
            resourceArn?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/updateresourceshare': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            resourceShareArn: string
            name?: string | undefined
            allowExternalPrincipals?: boolean | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdateResourceShareResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
