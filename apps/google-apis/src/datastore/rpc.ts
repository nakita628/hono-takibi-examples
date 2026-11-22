import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1ProjectsProjectIdExport(
  args: InferRequestType<(typeof client.v1beta1.projects)[':projectId:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.projects[':projectId:export'].$post(args, options))
}

export async function postV1beta1ProjectsProjectIdImport(
  args: InferRequestType<(typeof client.v1beta1.projects)[':projectId:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.projects[':projectId:import'].$post(args, options))
}
