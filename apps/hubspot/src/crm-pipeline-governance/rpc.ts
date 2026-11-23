import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmPipelinesRules202609ObjectTypeIdPipelineId(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$get(args, options),
  )
}

export async function putCrmPipelinesRules202609ObjectTypeIdPipelineId(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$put(args, options),
  )
}

export async function deleteCrmPipelinesRules202609ObjectTypeIdPipelineId(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$delete(args, options),
  )
}

export async function patchCrmPipelinesRules202609ObjectTypeIdPipelineId(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].$patch(args, options),
  )
}

export async function postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStart(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals.start.$post(
      args,
      options,
    ),
  )
}

export async function getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectId(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['approvals'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'].approvals[
      ':objectId'
    ].$get(args, options),
  )
}

export async function getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
      'stage-edit-permissions'
    ].$get(args, options),
  )
}

export async function putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissions(
  args: InferRequestType<
    (typeof client.crm)['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId']['stage-edit-permissions']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm['pipelines-rules']['2026-09'][':objectTypeId'][':pipelineId'][
      'stage-edit-permissions'
    ].$put(args, options),
  )
}
