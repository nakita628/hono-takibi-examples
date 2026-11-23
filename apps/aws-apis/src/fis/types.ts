type CreateExperimentTemplateStopConditionInput = { source: {}; value?: {} | undefined }
type CreateExperimentTemplateTargetInput = {
  resourceType: {}
  resourceArns?: {} | undefined
  resourceTags?: {} | undefined
  filters?: {} | undefined
  selectionMode: {}
  parameters?: {} | undefined
}
type CreateExperimentTemplateActionInput = {
  actionId: {}
  description?: {} | undefined
  parameters?: {} | undefined
  targets?: {} | undefined
  startAfter?: {} | undefined
}
type TagValue = string
type CreateExperimentTemplateResponse = {
  experimentTemplate?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        roleArn?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListExperimentTemplatesResponse = {
  experimentTemplates?: {} | undefined
  nextToken?: {} | undefined
}
type DeleteExperimentTemplateResponse = {
  experimentTemplate?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        roleArn?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetExperimentTemplateResponse = {
  experimentTemplate?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        roleArn?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateExperimentTemplateStopConditionInput = { source: {}; value?: {} | undefined }
type UpdateExperimentTemplateTargetInput = {
  resourceType: {}
  resourceArns?: {} | undefined
  resourceTags?: {} | undefined
  filters?: {} | undefined
  selectionMode: {}
  parameters?: {} | undefined
}
type UpdateExperimentTemplateActionInputItem = {
  actionId?: {} | undefined
  description?: {} | undefined
  parameters?: {} | undefined
  targets?: {} | undefined
  startAfter?: {} | undefined
}
type UpdateExperimentTemplateResponse = {
  experimentTemplate?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        roleArn?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetActionResponse = {
  action?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        parameters?: {} | undefined
        targets?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetExperimentResponse = {
  experiment?:
    | {
        id?: {} | undefined
        experimentTemplateId?: {} | undefined
        roleArn?: {} | undefined
        state?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type StopExperimentResponse = {
  experiment?:
    | {
        id?: {} | undefined
        experimentTemplateId?: {} | undefined
        roleArn?: {} | undefined
        state?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetTargetResourceTypeResponse = {
  targetResourceType?:
    | { resourceType?: {} | undefined; description?: {} | undefined; parameters?: {} | undefined }
    | undefined
}
type ListActionsResponse = { actions?: {} | undefined; nextToken?: {} | undefined }
type ListExperimentsResponse = { experiments?: {} | undefined; nextToken?: {} | undefined }
type StartExperimentResponse = {
  experiment?:
    | {
        id?: {} | undefined
        experimentTemplateId?: {} | undefined
        roleArn?: {} | undefined
        state?: { status?: {} | undefined; reason?: {} | undefined } | undefined
        targets?: {} | undefined
        actions?: {} | undefined
        stopConditions?: {} | undefined
        creationTime?: {} | undefined
        startTime?: {} | undefined
        endTime?: {} | undefined
        tags?: {} | undefined
        logConfiguration?:
          | {
              cloudWatchLogsConfiguration?: { logGroupArn?: {} | undefined } | undefined
              s3Configuration?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
              logSchemaVersion?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type ListTargetResourceTypesResponse = {
  targetResourceTypes?: {} | undefined
  nextToken?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/experimentTemplates': {
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
            clientToken: string
            description: string
            stopConditions: CreateExperimentTemplateStopConditionInput[]
            targets?: { [x: string]: CreateExperimentTemplateTargetInput } | undefined
            actions: { [x: string]: CreateExperimentTemplateActionInput }
            roleArn: string
            tags?: { [x: string]: TagValue } | undefined
            logConfiguration?:
              | {
                  cloudWatchLogsConfiguration?: { logGroupArn: {} } | undefined
                  s3Configuration?: { bucketName: {}; prefix?: {} | undefined } | undefined
                  logSchemaVersion?: {} | undefined
                }
              | undefined
          }
        }
        output: CreateExperimentTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListExperimentTemplatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/experimentTemplates/:id': {
      $delete: {
        input: { param: { id: string } } & {
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
        output: DeleteExperimentTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
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
        output: GetExperimentTemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
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
            stopConditions?: UpdateExperimentTemplateStopConditionInput[] | undefined
            targets?: { [x: string]: UpdateExperimentTemplateTargetInput } | undefined
            actions?: { [x: string]: UpdateExperimentTemplateActionInputItem } | undefined
            roleArn?: string | undefined
            logConfiguration?:
              | {
                  cloudWatchLogsConfiguration?: { logGroupArn: {} } | undefined
                  s3Configuration?: { bucketName: {}; prefix?: {} | undefined } | undefined
                  logSchemaVersion?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateExperimentTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions/:id': {
      $get: {
        input: { param: { id: string } } & {
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
        output: GetActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/experiments/:id': {
      $get: {
        input: { param: { id: string } } & {
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
        output: GetExperimentResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } } & {
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
        output: StopExperimentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targetResourceTypes/:resourceType': {
      $get: {
        input: { param: { resourceType: string } } & {
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
        output: GetTargetResourceTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/actions': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/experiments': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListExperimentsResponse
        outputFormat: 'json'
        status: 200
      }
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
            clientToken: string
            experimentTemplateId: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: StartExperimentResponse
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
      $delete: {
        input: { param: { resourceArn: string } } & {
          query: { tagKeys?: TagKey[] | undefined }
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/targetResourceTypes': {
      $get: {
        input: { query: { maxResults?: number | undefined; nextToken?: string | undefined } } & {
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
        output: ListTargetResourceTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
