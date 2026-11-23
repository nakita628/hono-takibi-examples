type ActivatePipelineInput = {
  pipelineId: {}
  parameterValues?: {} | undefined
  startTimestamp?: {} | undefined
}
type ActivatePipelineOutput = { [x: string]: unknown }
type AddTagsInput = { pipelineId: {}; tags: {} }
type AddTagsOutput = { [x: string]: unknown }
type CreatePipelineInput = {
  name: {}
  uniqueId: {}
  description?: {} | undefined
  tags?: {} | undefined
}
type CreatePipelineOutput = { pipelineId: {} }
type DeactivatePipelineInput = { pipelineId: {}; cancelActive?: {} | undefined }
type DeactivatePipelineOutput = { [x: string]: unknown }
type DeletePipelineInput = { pipelineId: {} }
type DescribeObjectsInput = {
  pipelineId: {}
  objectIds: {}
  evaluateExpressions?: {} | undefined
  marker?: {} | undefined
}
type DescribeObjectsOutput = {
  pipelineObjects: {}
  marker?: {} | undefined
  hasMoreResults?: {} | undefined
}
type DescribePipelinesInput = { pipelineIds: {} }
type DescribePipelinesOutput = { pipelineDescriptionList: {} }
type EvaluateExpressionInput = { pipelineId: {}; objectId: {}; expression: {} }
type EvaluateExpressionOutput = { evaluatedExpression: {} }
type GetPipelineDefinitionInput = { pipelineId: {}; version?: {} | undefined }
type GetPipelineDefinitionOutput = {
  pipelineObjects?: {} | undefined
  parameterObjects?: {} | undefined
  parameterValues?: {} | undefined
}
type ListPipelinesInput = { marker?: {} | undefined }
type ListPipelinesOutput = {
  pipelineIdList: {}
  marker?: {} | undefined
  hasMoreResults?: {} | undefined
}
type PollForTaskInput = {
  workerGroup: {}
  hostname?: {} | undefined
  instanceIdentity?: { document?: {} | undefined; signature?: {} | undefined } | undefined
}
type PollForTaskOutput = {
  taskObject?:
    | {
        taskId?: {} | undefined
        pipelineId?: {} | undefined
        attemptId?: {} | undefined
        objects?: {} | undefined
      }
    | undefined
}
type PutPipelineDefinitionInput = {
  pipelineId: {}
  pipelineObjects: {}
  parameterObjects?: {} | undefined
  parameterValues?: {} | undefined
}
type PutPipelineDefinitionOutput = {
  validationErrors?: {} | undefined
  validationWarnings?: {} | undefined
  errored: {}
}
type QueryObjectsInput = {
  pipelineId: {}
  query?: { selectors?: {} | undefined } | undefined
  sphere: {}
  marker?: {} | undefined
  limit?: {} | undefined
}
type QueryObjectsOutput = {
  ids?: {} | undefined
  marker?: {} | undefined
  hasMoreResults?: {} | undefined
}
type RemoveTagsInput = { pipelineId: {}; tagKeys: {} }
type RemoveTagsOutput = { [x: string]: unknown }
type ReportTaskProgressInput = { taskId: {}; fields?: {} | undefined }
type ReportTaskProgressOutput = { canceled: {} }
type ReportTaskRunnerHeartbeatInput = {
  taskrunnerId: {}
  workerGroup?: {} | undefined
  hostname?: {} | undefined
}
type ReportTaskRunnerHeartbeatOutput = { terminate: {} }
type SetStatusInput = { pipelineId: {}; objectIds: {}; status: {} }
type SetTaskStatusInput = {
  taskId: {}
  taskStatus: {}
  errorId?: {} | undefined
  errorMessage?: {} | undefined
  errorStackTrace?: {} | undefined
}
type SetTaskStatusOutput = { [x: string]: unknown }
type ValidatePipelineDefinitionInput = {
  pipelineId: {}
  pipelineObjects: {}
  parameterObjects?: {} | undefined
  parameterValues?: {} | undefined
}
type ValidatePipelineDefinitionOutput = {
  validationErrors?: {} | undefined
  validationWarnings?: {} | undefined
  errored: {}
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=DataPipeline.ActivatePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.ActivatePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ActivatePipelineInput }
        output: ActivatePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.AddTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.AddTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsInput }
        output: AddTagsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.CreatePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.CreatePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePipelineInput }
        output: CreatePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.DeactivatePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.DeactivatePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeactivatePipelineInput }
        output: DeactivatePipelineOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.DeletePipeline': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.DeletePipeline'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePipelineInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.DescribeObjects': {
      $post: {
        input: { query: { marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DataPipeline.DescribeObjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeObjectsInput }
        output: DescribeObjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.DescribePipelines': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.DescribePipelines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePipelinesInput }
        output: DescribePipelinesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.EvaluateExpression': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.EvaluateExpression'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EvaluateExpressionInput }
        output: EvaluateExpressionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.GetPipelineDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.GetPipelineDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPipelineDefinitionInput }
        output: GetPipelineDefinitionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.ListPipelines': {
      $post: {
        input: { query: { marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DataPipeline.ListPipelines'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListPipelinesInput }
        output: ListPipelinesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.PollForTask': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.PollForTask'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PollForTaskInput }
        output: PollForTaskOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.PutPipelineDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.PutPipelineDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutPipelineDefinitionInput }
        output: PutPipelineDefinitionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.QueryObjects': {
      $post: {
        input: { query: { limit?: string | undefined; marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'DataPipeline.QueryObjects'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: QueryObjectsInput }
        output: QueryObjectsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.RemoveTags': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.RemoveTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsInput }
        output: RemoveTagsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.ReportTaskProgress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.ReportTaskProgress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReportTaskProgressInput }
        output: ReportTaskProgressOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.ReportTaskRunnerHeartbeat'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReportTaskRunnerHeartbeatInput }
        output: ReportTaskRunnerHeartbeatOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.SetStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.SetStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetStatusInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.SetTaskStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.SetTaskStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetTaskStatusInput }
        output: SetTaskStatusOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=DataPipeline.ValidatePipelineDefinition': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'DataPipeline.ValidatePipelineDefinition'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ValidatePipelineDefinitionInput }
        output: ValidatePipelineDefinitionOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
