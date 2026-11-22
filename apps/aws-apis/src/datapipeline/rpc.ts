import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetDataPipelineActivatePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.ActivatePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineAddTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DataPipeline.AddTags'].$post(args, options))
}

export async function postXAmzTargetDataPipelineCreatePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.CreatePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineDeactivatePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.DeactivatePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineDeletePipeline(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.DeletePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineDescribeObjects(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.DescribeObjects'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineDescribePipelines(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.DescribePipelines'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineEvaluateExpression(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.EvaluateExpression'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineGetPipelineDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.GetPipelineDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineListPipelines(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.ListPipelines'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelinePollForTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DataPipeline.PollForTask'].$post(args, options))
}

export async function postXAmzTargetDataPipelinePutPipelineDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.PutPipelineDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineQueryObjects(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DataPipeline.QueryObjects'].$post(args, options))
}

export async function postXAmzTargetDataPipelineRemoveTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DataPipeline.RemoveTags'].$post(args, options))
}

export async function postXAmzTargetDataPipelineReportTaskProgress(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.ReportTaskProgress'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineReportTaskRunnerHeartbeat(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineSetStatus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=DataPipeline.SetStatus'].$post(args, options))
}

export async function postXAmzTargetDataPipelineSetTaskStatus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.SetTaskStatus'].$post(args, options),
  )
}

export async function postXAmzTargetDataPipelineValidatePipelineDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition'].$post(args, options),
  )
}
