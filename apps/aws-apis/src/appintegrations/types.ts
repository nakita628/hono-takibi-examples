type TagValue = string
type Fields = string
type FieldsList = Fields[]
type FieldsMap = { [x: string]: FieldsList }
type CreateDataIntegrationResponse = {
  Arn?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  KmsKey?: {} | undefined
  SourceURI?: {} | undefined
  ScheduleConfiguration?:
    | { FirstExecutionFrom?: {} | undefined; Object?: {} | undefined; ScheduleExpression: {} }
    | undefined
  Tags?: {} | undefined
  ClientToken?: {} | undefined
  FileConfiguration?: { Folders: {}; Filters?: {} | undefined } | undefined
  ObjectConfiguration?: {} | undefined
}
type ListDataIntegrationsResponse = {
  DataIntegrations?: {} | undefined
  NextToken?: {} | undefined
}
type CreateEventIntegrationResponse = { EventIntegrationArn?: {} | undefined }
type ListEventIntegrationsResponse = {
  EventIntegrations?: {} | undefined
  NextToken?: {} | undefined
}
type DeleteDataIntegrationResponse = { [x: string]: unknown }
type GetDataIntegrationResponse = {
  Arn?: {} | undefined
  Id?: {} | undefined
  Name?: {} | undefined
  Description?: {} | undefined
  KmsKey?: {} | undefined
  SourceURI?: {} | undefined
  ScheduleConfiguration?:
    | { FirstExecutionFrom?: {} | undefined; Object?: {} | undefined; ScheduleExpression: {} }
    | undefined
  Tags?: {} | undefined
  FileConfiguration?: { Folders: {}; Filters?: {} | undefined } | undefined
  ObjectConfiguration?: {} | undefined
}
type UpdateDataIntegrationResponse = { [x: string]: unknown }
type DeleteEventIntegrationResponse = { [x: string]: unknown }
type GetEventIntegrationResponse = {
  Name?: {} | undefined
  Description?: {} | undefined
  EventIntegrationArn?: {} | undefined
  EventBridgeBus?: {} | undefined
  EventFilter?: { Source: {} } | undefined
  Tags?: {} | undefined
}
type UpdateEventIntegrationResponse = { [x: string]: unknown }
type ListDataIntegrationAssociationsResponse = {
  DataIntegrationAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type ListEventIntegrationAssociationsResponse = {
  EventIntegrationAssociations?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/dataIntegrations': {
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
            Name: string
            Description?: string | undefined
            KmsKey: string
            SourceURI: string
            ScheduleConfig: {
              FirstExecutionFrom?: {} | undefined
              Object?: {} | undefined
              ScheduleExpression?: {} | undefined
            }
            Tags?: { [x: string]: TagValue } | undefined
            ClientToken?: string | undefined
            FileConfiguration?: { Folders?: {} | undefined; Filters?: {} | undefined } | undefined
            ObjectConfiguration?: { [x: string]: FieldsMap } | undefined
          }
        }
        output: CreateDataIntegrationResponse
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
        output: ListDataIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/eventIntegrations': {
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
            Name: string
            Description?: string | undefined
            EventFilter: { Source?: {} | undefined }
            EventBridgeBus: string
            ClientToken?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateEventIntegrationResponse
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
        output: ListEventIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dataIntegrations/:Identifier': {
      $delete: {
        input: { param: { Identifier: string } } & {
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
        output: DeleteDataIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { Identifier: string } } & {
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
        output: GetDataIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { Identifier: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Name?: string | undefined; Description?: string | undefined } }
        output: UpdateDataIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/eventIntegrations/:Name': {
      $delete: {
        input: { param: { Name: string } } & {
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
        output: DeleteEventIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { Name: string } } & {
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
        output: GetEventIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { Name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Description?: string | undefined } }
        output: UpdateEventIntegrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dataIntegrations/:Identifier/associations': {
      $get: {
        input: { param: { Identifier: string } } & {
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
        output: ListDataIntegrationAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/eventIntegrations/:Name/associations': {
      $get: {
        input: { param: { Name: string } } & {
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
        output: ListEventIntegrationAssociationsResponse
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
