type AssociateAttributeGroupResponse = {
  applicationArn?: {} | undefined
  attributeGroupArn?: {} | undefined
}
type DisassociateAttributeGroupResponse = {
  applicationArn?: {} | undefined
  attributeGroupArn?: {} | undefined
}
type AssociateResourceResponse = { applicationArn?: {} | undefined; resourceArn?: {} | undefined }
type DisassociateResourceResponse = {
  applicationArn?: {} | undefined
  resourceArn?: {} | undefined
}
type GetAssociatedResourceResponse = {
  resource?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        associationTime?: {} | undefined
        integrations?:
          | {
              resourceGroup?:
                | { state?: {} | undefined; arn?: {} | undefined; errorMessage?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type TagValue = string
type CreateApplicationResponse = {
  application?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListApplicationsResponse = { applications?: {} | undefined; nextToken?: {} | undefined }
type CreateAttributeGroupResponse = {
  attributeGroup?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListAttributeGroupsResponse = { attributeGroups?: {} | undefined; nextToken?: {} | undefined }
type DeleteApplicationResponse = {
  application?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
      }
    | undefined
}
type GetApplicationResponse = {
  id?: {} | undefined
  arn?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  creationTime?: {} | undefined
  lastUpdateTime?: {} | undefined
  associatedResourceCount?: {} | undefined
  tags?: {} | undefined
  integrations?:
    | {
        resourceGroup?:
          | { state?: {} | undefined; arn?: {} | undefined; errorMessage?: {} | undefined }
          | undefined
      }
    | undefined
}
type UpdateApplicationResponse = {
  application?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type DeleteAttributeGroupResponse = {
  attributeGroup?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        createdBy?: {} | undefined
      }
    | undefined
}
type GetAttributeGroupResponse = {
  id?: {} | undefined
  arn?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  attributes?: {} | undefined
  creationTime?: {} | undefined
  lastUpdateTime?: {} | undefined
  tags?: {} | undefined
  createdBy?: {} | undefined
}
type UpdateAttributeGroupResponse = {
  attributeGroup?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetConfigurationResponse = {
  configuration?: { tagQueryConfiguration?: { tagKey?: {} | undefined } | undefined } | undefined
}
type ListAssociatedAttributeGroupsResponse = {
  attributeGroups?: {} | undefined
  nextToken?: {} | undefined
}
type ListAssociatedResourcesResponse = { resources?: {} | undefined; nextToken?: {} | undefined }
type ListAttributeGroupsForApplicationResponse = {
  attributeGroupsDetails?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type SyncResourceResponse = {
  applicationArn?: {} | undefined
  resourceArn?: {} | undefined
  actionTaken?: {} | undefined
}
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications/:application/attribute-groups/:attributeGroup': {
      $put: {
        input: { param: { application: string; attributeGroup: string } } & {
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
        output: AssociateAttributeGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { application: string; attributeGroup: string } } & {
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
        output: DisassociateAttributeGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:application/resources/:resourceType/:resource': {
      $put: {
        input: {
          param: {
            application: string
            resourceType: 'CFN_STACK' | 'RESOURCE_TAG_VALUE'
            resource: string
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
        output: AssociateResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: {
            application: string
            resourceType: 'CFN_STACK' | 'RESOURCE_TAG_VALUE'
            resource: string
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
        output: DisassociateResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            application: string
            resourceType: 'CFN_STACK' | 'RESOURCE_TAG_VALUE'
            resource: string
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
        output: GetAssociatedResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications': {
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
            description?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            clientToken: string
          }
        }
        output: CreateApplicationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute-groups': {
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
            description?: string | undefined
            attributes: string
            tags?: { [x: string]: TagValue } | undefined
            clientToken: string
          }
        }
        output: CreateAttributeGroupResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListAttributeGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:application': {
      $delete: {
        input: { param: { application: string } } & {
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
        output: DeleteApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { application: string } } & {
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
        output: GetApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { application: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { name?: string | undefined; description?: string | undefined } }
        output: UpdateApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/attribute-groups/:attributeGroup': {
      $delete: {
        input: { param: { attributeGroup: string } } & {
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
        output: DeleteAttributeGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { attributeGroup: string } } & {
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
        output: GetAttributeGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { attributeGroup: string } } & {
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
            name?: string | undefined
            description?: string | undefined
            attributes?: string | undefined
          }
        }
        output: UpdateAttributeGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/configuration': {
      $get: {
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
        output: GetConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
            configuration: { tagQueryConfiguration?: { tagKey?: {} | undefined } | undefined }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/applications/:application/attribute-groups': {
      $get: {
        input: { param: { application: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
        } & {
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
        output: ListAssociatedAttributeGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:application/resources': {
      $get: {
        input: { param: { application: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
        } & {
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
        output: ListAssociatedResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:application/attribute-group-details': {
      $get: {
        input: { param: { application: string } } & {
          query: { nextToken?: string | undefined; maxResults?: number | undefined }
        } & {
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
        output: ListAttributeGroupsForApplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sync/:resourceType/:resource': {
      $post: {
        input: { param: { resourceType: 'CFN_STACK' | 'RESOURCE_TAG_VALUE'; resource: string } } & {
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
        output: SyncResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
