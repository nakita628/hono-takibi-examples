import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20120925JobsId(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].jobs[':Id'].$get(args, options))
}

export async function delete20120925JobsId(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].jobs[':Id'].$delete(args, options))
}

export async function post20120925Jobs(
  args: InferRequestType<(typeof client)['2012-09-25']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].jobs.$post(args, options))
}

export async function get20120925Pipelines(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines.$get(args, options))
}

export async function post20120925Pipelines(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines.$post(args, options))
}

export async function get20120925Presets(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].presets.$get(args, options))
}

export async function post20120925Presets(
  args: InferRequestType<(typeof client)['2012-09-25']['presets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].presets.$post(args, options))
}

export async function get20120925PipelinesId(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines[':Id'].$get(args, options))
}

export async function put20120925PipelinesId(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines[':Id'].$put(args, options))
}

export async function delete20120925PipelinesId(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines[':Id'].$delete(args, options))
}

export async function get20120925PresetsId(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].presets[':Id'].$get(args, options))
}

export async function delete20120925PresetsId(
  args: InferRequestType<(typeof client)['2012-09-25']['presets'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].presets[':Id'].$delete(args, options))
}

export async function get20120925JobsByPipelinePipelineId(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByPipeline'][':PipelineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].jobsByPipeline[':PipelineId'].$get(args, options))
}

export async function get20120925JobsByStatusStatus(
  args: InferRequestType<(typeof client)['2012-09-25']['jobsByStatus'][':Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].jobsByStatus[':Status'].$get(args, options))
}

export async function post20120925RoleTests(
  args: InferRequestType<(typeof client)['2012-09-25']['roleTests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].roleTests.$post(args, options))
}

export async function post20120925PipelinesIdNotifications(
  args: InferRequestType<
    (typeof client)['2012-09-25']['pipelines'][':Id']['notifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2012-09-25'].pipelines[':Id'].notifications.$post(args, options),
  )
}

export async function post20120925PipelinesIdStatus(
  args: InferRequestType<(typeof client)['2012-09-25']['pipelines'][':Id']['status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2012-09-25'].pipelines[':Id'].status.$post(args, options))
}
