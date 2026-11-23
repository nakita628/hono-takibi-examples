type AssociateEntityToThingRequest = {
  thingName: {}
  entityId: {}
  namespaceVersion?: {} | undefined
}
type AssociateEntityToThingResponse = { [x: string]: unknown }
type CreateFlowTemplateRequest = {
  definition: { language: {}; text: {} }
  compatibleNamespaceVersion?: {} | undefined
}
type CreateFlowTemplateResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        revisionNumber?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
}
type DefinitionDocument = { language: {}; text: {} }
type MetricsConfiguration = {
  cloudMetricEnabled?: {} | undefined
  metricRuleRoleArn?: {} | undefined
}
type CreateSystemInstanceRequest = {
  tags?: {} | undefined
  definition: DefinitionDocument
  target: {}
  greengrassGroupName?: {} | undefined
  s3BucketName?: {} | undefined
  metricsConfiguration?: MetricsConfiguration | undefined
  flowActionsRoleArn?: {} | undefined
}
type CreateSystemInstanceResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        status?: {} | undefined
        target?: {} | undefined
        greengrassGroupName?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        greengrassGroupId?: {} | undefined
        greengrassGroupVersionId?: {} | undefined
      }
    | undefined
}
type CreateSystemTemplateRequest = {
  definition: { language: {}; text: {} }
  compatibleNamespaceVersion?: {} | undefined
}
type CreateSystemTemplateResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        revisionNumber?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
}
type DeleteFlowTemplateRequest = { id: {} }
type DeleteFlowTemplateResponse = { [x: string]: unknown }
type DeleteNamespaceRequest = { [x: string]: unknown }
type DeleteNamespaceResponse = { namespaceArn?: {} | undefined; namespaceName?: {} | undefined }
type DeleteSystemInstanceRequest = { id?: {} | undefined }
type DeleteSystemInstanceResponse = { [x: string]: unknown }
type DeleteSystemTemplateRequest = { id: {} }
type DeleteSystemTemplateResponse = { [x: string]: unknown }
type DeploySystemInstanceRequest = { id?: {} | undefined }
type DeploySystemInstanceResponse = {
  summary: {
    id?: {} | undefined
    arn?: {} | undefined
    status?: {} | undefined
    target?: {} | undefined
    greengrassGroupName?: {} | undefined
    createdAt?: {} | undefined
    updatedAt?: {} | undefined
    greengrassGroupId?: {} | undefined
    greengrassGroupVersionId?: {} | undefined
  }
  greengrassDeploymentId?: {} | undefined
}
type DeprecateFlowTemplateRequest = { id: {} }
type DeprecateFlowTemplateResponse = { [x: string]: unknown }
type DeprecateSystemTemplateRequest = { id: {} }
type DeprecateSystemTemplateResponse = { [x: string]: unknown }
type DescribeNamespaceRequest = { namespaceName?: {} | undefined }
type DescribeNamespaceResponse = {
  namespaceArn?: {} | undefined
  namespaceName?: {} | undefined
  trackingNamespaceName?: {} | undefined
  trackingNamespaceVersion?: {} | undefined
  namespaceVersion?: {} | undefined
}
type DissociateEntityFromThingRequest = { thingName: {}; entityType: {} }
type DissociateEntityFromThingResponse = { [x: string]: unknown }
type GetEntitiesRequest = { ids: {}; namespaceVersion?: {} | undefined }
type GetEntitiesResponse = { descriptions?: {} | undefined }
type GetFlowTemplateRequest = { id: {}; revisionNumber?: {} | undefined }
type GetFlowTemplateResponse = {
  description?:
    | {
        summary?:
          | {
              id?: {} | undefined
              arn?: {} | undefined
              revisionNumber?: {} | undefined
              createdAt?: {} | undefined
            }
          | undefined
        definition?: { language: {}; text: {} } | undefined
        validatedNamespaceVersion?: {} | undefined
      }
    | undefined
}
type GetFlowTemplateRevisionsRequest = {
  id: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetFlowTemplateRevisionsResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type GetNamespaceDeletionStatusRequest = { [x: string]: unknown }
type GetNamespaceDeletionStatusResponse = {
  namespaceArn?: {} | undefined
  namespaceName?: {} | undefined
  status?: {} | undefined
  errorCode?: {} | undefined
  errorMessage?: {} | undefined
}
type GetSystemInstanceRequest = { id: {} }
type GetSystemInstanceResponse = {
  description?:
    | {
        summary?:
          | {
              id?: {} | undefined
              arn?: {} | undefined
              status?: {} | undefined
              target?: {} | undefined
              greengrassGroupName?: {} | undefined
              createdAt?: {} | undefined
              updatedAt?: {} | undefined
              greengrassGroupId?: {} | undefined
              greengrassGroupVersionId?: {} | undefined
            }
          | undefined
        definition?: DefinitionDocument | undefined
        s3BucketName?: {} | undefined
        metricsConfiguration?: MetricsConfiguration | undefined
        validatedNamespaceVersion?: {} | undefined
        validatedDependencyRevisions?: {} | undefined
        flowActionsRoleArn?: {} | undefined
      }
    | undefined
}
type GetSystemTemplateRequest = { id: {}; revisionNumber?: {} | undefined }
type GetSystemTemplateResponse = {
  description?:
    | {
        summary?:
          | {
              id?: {} | undefined
              arn?: {} | undefined
              revisionNumber?: {} | undefined
              createdAt?: {} | undefined
            }
          | undefined
        definition?: { language: {}; text: {} } | undefined
        validatedNamespaceVersion?: {} | undefined
      }
    | undefined
}
type GetSystemTemplateRevisionsRequest = {
  id: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetSystemTemplateRevisionsResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type GetUploadStatusRequest = { uploadId: {} }
type GetUploadStatusResponse = {
  uploadId: {}
  uploadStatus: {}
  namespaceArn?: {} | undefined
  namespaceName?: {} | undefined
  namespaceVersion?: {} | undefined
  failureReason?: {} | undefined
  createdDate: {}
}
type ListFlowExecutionMessagesRequest = {
  flowExecutionId: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListFlowExecutionMessagesResponse = { messages?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceRequest = {
  maxResults?: {} | undefined
  resourceArn: {}
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined; nextToken?: {} | undefined }
type SearchEntitiesRequest = {
  entityTypes: {}
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  namespaceVersion?: {} | undefined
}
type SearchEntitiesResponse = { descriptions?: {} | undefined; nextToken?: {} | undefined }
type SearchFlowExecutionsRequest = {
  systemInstanceId: {}
  flowExecutionId?: {} | undefined
  startTime?: {} | undefined
  endTime?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type SearchFlowExecutionsResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type SearchFlowTemplatesRequest = {
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type SearchFlowTemplatesResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type SearchSystemInstancesRequest = {
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type SearchSystemInstancesResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type SearchSystemTemplatesRequest = {
  filters?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type SearchSystemTemplatesResponse = { summaries?: {} | undefined; nextToken?: {} | undefined }
type SearchThingsRequest = {
  entityId: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  namespaceVersion?: {} | undefined
}
type SearchThingsResponse = { things?: {} | undefined; nextToken?: {} | undefined }
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UndeploySystemInstanceRequest = { id?: {} | undefined }
type UndeploySystemInstanceResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        status?: {} | undefined
        target?: {} | undefined
        greengrassGroupName?: {} | undefined
        createdAt?: {} | undefined
        updatedAt?: {} | undefined
        greengrassGroupId?: {} | undefined
        greengrassGroupVersionId?: {} | undefined
      }
    | undefined
}
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateFlowTemplateRequest = {
  id: {}
  definition: { language: {}; text: {} }
  compatibleNamespaceVersion?: {} | undefined
}
type UpdateFlowTemplateResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        revisionNumber?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
}
type UpdateSystemTemplateRequest = {
  id: {}
  definition: { language: {}; text: {} }
  compatibleNamespaceVersion?: {} | undefined
}
type UpdateSystemTemplateResponse = {
  summary?:
    | {
        id?: {} | undefined
        arn?: {} | undefined
        revisionNumber?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
}
type UploadEntityDefinitionsRequest = {
  document?: { language: {}; text: {} } | undefined
  syncWithPublicNamespace?: {} | undefined
  deprecateExistingEntities?: {} | undefined
}
type UploadEntityDefinitionsResponse = { uploadId: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.AssociateEntityToThing'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AssociateEntityToThingRequest }
        output: AssociateEntityToThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.CreateFlowTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFlowTemplateRequest }
        output: CreateFlowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.CreateSystemInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSystemInstanceRequest }
        output: CreateSystemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.CreateSystemTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSystemTemplateRequest }
        output: CreateSystemTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeleteFlowTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFlowTemplateRequest }
        output: DeleteFlowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeleteNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteNamespaceRequest }
        output: DeleteNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeleteSystemInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSystemInstanceRequest }
        output: DeleteSystemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeleteSystemTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSystemTemplateRequest }
        output: DeleteSystemTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeploySystemInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeploySystemInstanceRequest }
        output: DeploySystemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeprecateFlowTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprecateFlowTemplateRequest }
        output: DeprecateFlowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DeprecateSystemTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeprecateSystemTemplateRequest }
        output: DeprecateSystemTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DescribeNamespace'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeNamespaceRequest }
        output: DescribeNamespaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.DissociateEntityFromThing'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DissociateEntityFromThingRequest }
        output: DissociateEntityFromThingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetEntitiesRequest }
        output: GetEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetFlowTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFlowTemplateRequest }
        output: GetFlowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetFlowTemplateRevisions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetFlowTemplateRevisionsRequest }
        output: GetFlowTemplateRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetNamespaceDeletionStatusRequest }
        output: GetNamespaceDeletionStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetSystemInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSystemInstanceRequest }
        output: GetSystemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetSystemTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSystemTemplateRequest }
        output: GetSystemTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetSystemTemplateRevisions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSystemTemplateRevisionsRequest }
        output: GetSystemTemplateRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.GetUploadStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetUploadStatusRequest }
        output: GetUploadStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.ListFlowExecutionMessages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFlowExecutionMessagesRequest }
        output: ListFlowExecutionMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.ListTagsForResource'
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
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchEntities'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchEntitiesRequest }
        output: SearchEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchFlowExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchFlowExecutionsRequest }
        output: SearchFlowExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchFlowTemplates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchFlowTemplatesRequest }
        output: SearchFlowTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchSystemInstances'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchSystemInstancesRequest }
        output: SearchSystemInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchSystemTemplates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchSystemTemplatesRequest }
        output: SearchSystemTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.SearchThings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SearchThingsRequest }
        output: SearchThingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.TagResource'
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
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.UndeploySystemInstance'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UndeploySystemInstanceRequest }
        output: UndeploySystemInstanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.UntagResource'
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
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.UpdateFlowTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateFlowTemplateRequest }
        output: UpdateFlowTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.UpdateSystemTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateSystemTemplateRequest }
        output: UpdateSystemTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IotThingsGraphFrontEndService.UploadEntityDefinitions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UploadEntityDefinitionsRequest }
        output: UploadEntityDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
