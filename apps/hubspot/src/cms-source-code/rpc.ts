import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCmsSourceCode202609ExtractAsync(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'].extract.async.$post(args, options),
  )
}

export async function getCmsSourceCode202609ExtractAsyncTasksTaskIdStatus(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09']['extract']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'].extract.async.tasks[':taskId'].status.$get(args, options),
  )
}

export async function getCmsSourceCode202609EnvironmentContentPath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].content[':path'].$get(args, options),
  )
}

export async function putCmsSourceCode202609EnvironmentContentPath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].content[':path'].$put(args, options),
  )
}

export async function postCmsSourceCode202609EnvironmentContentPath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].content[':path'].$post(args, options),
  )
}

export async function deleteCmsSourceCode202609EnvironmentContentPath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['content'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].content[':path'].$delete(args, options),
  )
}

export async function getCmsSourceCode202609EnvironmentMetadataPath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['metadata'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].metadata[':path'].$get(args, options),
  )
}

export async function postCmsSourceCode202609EnvironmentValidatePath(
  args: InferRequestType<
    (typeof client.cms)['source-code']['2026-09'][':environment']['validate'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cms['source-code']['2026-09'][':environment'].validate[':path'].$post(args, options),
  )
}
