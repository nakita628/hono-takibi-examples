import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmPipelines202609ObjectType(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines['2026-09'][':objectType'].$get(args, options))
}

export async function postCrmPipelines202609ObjectType(
  args: InferRequestType<(typeof client.crm.pipelines)['2026-09'][':objectType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipelines['2026-09'][':objectType'].$post(args, options))
}

export async function getCrmPipelines202609ObjectTypePipelineId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$get(args, options),
  )
}

export async function putCrmPipelines202609ObjectTypePipelineId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$put(args, options),
  )
}

export async function deleteCrmPipelines202609ObjectTypePipelineId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$delete(args, options),
  )
}

export async function patchCrmPipelines202609ObjectTypePipelineId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].$patch(args, options),
  )
}

export async function getCrmPipelines202609ObjectTypePipelineIdAudit(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['audit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].audit.$get(args, options),
  )
}

export async function getCrmPipelines202609ObjectTypePipelineIdStages(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$get(args, options),
  )
}

export async function postCrmPipelines202609ObjectTypePipelineIdStages(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages.$post(args, options),
  )
}

export async function getCrmPipelines202609ObjectTypePipelineIdStagesStageId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$get(
      args,
      options,
    ),
  )
}

export async function putCrmPipelines202609ObjectTypePipelineIdStagesStageId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteCrmPipelines202609ObjectTypePipelineIdStagesStageId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchCrmPipelines202609ObjectTypePipelineIdStagesStageId(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].$patch(
      args,
      options,
    ),
  )
}

export async function getCrmPipelines202609ObjectTypePipelineIdStagesStageIdAudit(
  args: InferRequestType<
    (typeof client.crm.pipelines)['2026-09'][':objectType'][':pipelineId']['stages'][':stageId']['audit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.pipelines['2026-09'][':objectType'][':pipelineId'].stages[':stageId'].audit.$get(
      args,
      options,
    ),
  )
}
