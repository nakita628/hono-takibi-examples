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
type MalformedArnException = { [x: string]: unknown }
type OperationNotPermittedException = { [x: string]: unknown }
type ResourceShareInvitationArnNotFoundException = { [x: string]: unknown }
type ResourceShareInvitationAlreadyAcceptedException = { [x: string]: unknown }
type ResourceShareInvitationAlreadyRejectedException = { [x: string]: unknown }
type ResourceShareInvitationExpiredException = { [x: string]: unknown }
type ServerInternalException = { [x: string]: unknown }
type ServiceUnavailableException = { [x: string]: unknown }
type InvalidClientTokenException = { [x: string]: unknown }
type IdempotentParameterMismatchException = { [x: string]: unknown }
type String = string
type AssociateResourceShareResponse = {
  resourceShareAssociations?: {} | undefined
  clientToken?: {} | undefined
}
type UnknownResourceException = { [x: string]: unknown }
type InvalidStateTransitionException = { [x: string]: unknown }
type ResourceShareLimitExceededException = { [x: string]: unknown }
type InvalidParameterException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
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
type InvalidPolicyException = { [x: string]: unknown }
type PermissionAlreadyExistsException = { [x: string]: unknown }
type MalformedPolicyTemplateException = { [x: string]: unknown }
type PermissionLimitExceededException = { [x: string]: unknown }
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
type PermissionVersionsLimitExceededException = { [x: string]: unknown }
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
type TagPolicyViolationException = { [x: string]: unknown }
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
type InvalidNextTokenException = { [x: string]: unknown }
type ResourceArnNotFoundException = { [x: string]: unknown }
type GetResourceShareAssociationsResponse = {
  resourceShareAssociations?: {} | undefined
  nextToken?: {} | undefined
}
type GetResourceShareInvitationsResponse = {
  resourceShareInvitations?: {} | undefined
  nextToken?: {} | undefined
}
type InvalidMaxResultsException = { [x: string]: unknown }
type TagFilter = { tagKey?: {} | undefined; tagValues?: {} | undefined }
type GetResourceSharesResponse = { resourceShares?: {} | undefined; nextToken?: {} | undefined }
type ListPendingInvitationResourcesResponse = {
  resources?: {} | undefined
  nextToken?: {} | undefined
}
type MissingRequiredParameterException = { [x: string]: unknown }
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
type InvalidResourceTypeException = { [x: string]: unknown }
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
type UnmatchedPolicyPermissionException = { [x: string]: unknown }
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
type TagLimitExceededException = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceShareInvitationArnNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceShareInvitationAlreadyAcceptedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ResourceShareInvitationAlreadyRejectedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceShareInvitationExpiredException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/associateresourceshare': {
      $post:
        | {
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
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceShareLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 492
          }
    }
  } & {
    '/associateresourcesharepermission': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/createpermission': {
      $post:
        | {
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
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidPolicyException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: PermissionAlreadyExistsException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: MalformedPolicyTemplateException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: PermissionLimitExceededException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/createpermissionversion': {
      $post:
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: CreatePermissionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: InvalidPolicyException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: UnknownResourceException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: MalformedPolicyTemplateException
            outputFormat: 'json'
            status: 485
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: MalformedArnException
            outputFormat: 'json'
            status: 486
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 488
          }
        | {
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
                policyTemplate: string
                clientToken?: string | undefined
              }
            }
            output: PermissionVersionsLimitExceededException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/createresourceshare': {
      $post:
        | {
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
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ResourceShareLimitExceededException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: TagPolicyViolationException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/deletepermission#permissionArn': {
      $delete:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/deletepermissionversion#permissionArn&permissionVersion': {
      $delete:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/deleteresourceshare#resourceShareArn': {
      $delete:
        | {
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
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/disassociateresourceshare': {
      $post:
        | {
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
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceShareLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/disassociateresourcesharepermission': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/enablesharingwithawsorganization': {
      $post:
        | {
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
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/getpermission': {
      $post:
        | {
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
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/getresourcepolicies': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ResourceArnNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/getresourceshareassociations': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/getresourceshareinvitations': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ResourceShareInvitationArnNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidMaxResultsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/getresourceshares': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/listpendinginvitationresources': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ResourceShareInvitationArnNotFoundException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MissingRequiredParameterException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ResourceShareInvitationAlreadyRejectedException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ResourceShareInvitationExpiredException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/listpermissionassociations': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ListPermissionAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
                featureSet?:
                  | 'CREATED_FROM_POLICY'
                  | 'PROMOTING_TO_STANDARD'
                  | 'STANDARD'
                  | undefined
                defaultVersion?: boolean | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/listpermissionversions': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/listpermissions': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/listprincipals': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/listreplacepermissionassociationswork': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/listresourcesharepermissions': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/listresourcetypes': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/listresources': {
      $post:
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidResourceTypeException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { maxResults?: string | undefined; nextToken?: string | undefined }
            } & {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/promotepermissioncreatedfrompolicy': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: MissingRequiredParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/promoteresourcesharecreatedfrompolicy#resourceShareArn': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceShareLimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: MissingRequiredParameterException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidStateTransitionException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: UnmatchedPolicyPermissionException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/rejectresourceshareinvitation': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ResourceShareInvitationArnNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ResourceShareInvitationAlreadyAcceptedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ResourceShareInvitationAlreadyRejectedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ResourceShareInvitationExpiredException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/replacepermissionassociations': {
      $post:
        | {
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
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/setdefaultpermissionversion': {
      $post:
        | {
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
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/tagresource': {
      $post:
        | {
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
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: TagLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ResourceArnNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: TagPolicyViolationException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/untagresource': {
      $post:
        | {
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
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/updateresourceshare': {
      $post:
        | {
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
        | {
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
            output: IdempotentParameterMismatchException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: MissingRequiredParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: UnknownResourceException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: MalformedArnException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InvalidClientTokenException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: InvalidParameterException
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: OperationNotPermittedException
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: ServerInternalException
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ServiceUnavailableException
            outputFormat: 'json'
            status: 488
          }
    }
  },
  '/'
>
export default routes
