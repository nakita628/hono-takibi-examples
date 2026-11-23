type AssociateDeviceWithPlacementResponse = { [x: string]: unknown }
type DisassociateDeviceFromPlacementResponse = { [x: string]: unknown }
type AttributeValue = string
type CreatePlacementResponse = { [x: string]: unknown }
type ListPlacementsResponse = { placements: {}; nextToken?: {} | undefined }
type TagValue = string
type CreateProjectResponse = { [x: string]: unknown }
type ListProjectsResponse = { projects: {}; nextToken?: {} | undefined }
type DeletePlacementResponse = { [x: string]: unknown }
type DescribePlacementResponse = {
  placement: {
    projectName: {}
    placementName: {}
    attributes: {}
    createdDate: {}
    updatedDate: {}
  }
}
type UpdatePlacementResponse = { [x: string]: unknown }
type DeleteProjectResponse = { [x: string]: unknown }
type DescribeProjectResponse = {
  project: {
    arn?: {} | undefined
    projectName: {}
    description?: {} | undefined
    createdDate: {}
    updatedDate: {}
    placementTemplate?:
      | { defaultAttributes?: {} | undefined; deviceTemplates?: {} | undefined }
      | undefined
    tags?: {} | undefined
  }
}
type UpdateProjectResponse = { [x: string]: unknown }
type GetDevicesInPlacementResponse = { devices: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/projects/:projectName/placements/:placementName/devices/:deviceTemplateName': {
      $put: {
        input: {
          param: { projectName: string; placementName: string; deviceTemplateName: string }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { deviceId: string } }
        output: AssociateDeviceWithPlacementResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: { projectName: string; placementName: string; deviceTemplateName: string }
        } & {
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
        output: DisassociateDeviceFromPlacementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectName/placements': {
      $post: {
        input: { param: { projectName: string } } & {
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
          json: { placementName: string; attributes?: { [x: string]: AttributeValue } | undefined }
        }
        output: CreatePlacementResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectName: string } } & {
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
        output: ListPlacementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects': {
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
            projectName: string
            description?: string | undefined
            placementTemplate?:
              | { defaultAttributes?: {} | undefined; deviceTemplates?: {} | undefined }
              | undefined
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateProjectResponse
        outputFormat: 'json'
        status: 200
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
        output: ListProjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectName/placements/:placementName': {
      $delete: {
        input: { param: { placementName: string; projectName: string } } & {
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
        output: DeletePlacementResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { placementName: string; projectName: string } } & {
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
        output: DescribePlacementResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { placementName: string; projectName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { attributes?: { [x: string]: AttributeValue } | undefined } }
        output: UpdatePlacementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectName': {
      $delete: {
        input: { param: { projectName: string } } & {
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
        output: DeleteProjectResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectName: string } } & {
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
        output: DescribeProjectResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectName: string } } & {
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
            description?: string | undefined
            placementTemplate?:
              | { defaultAttributes?: {} | undefined; deviceTemplates?: {} | undefined }
              | undefined
          }
        }
        output: UpdateProjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/projects/:projectName/placements/:placementName/devices': {
      $get: {
        input: { param: { projectName: string; placementName: string } } & {
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
        output: GetDevicesInPlacementResponse
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
