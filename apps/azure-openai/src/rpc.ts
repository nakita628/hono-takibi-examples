import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDeploymentsDeploymentIdChatCompletions(
  args: InferRequestType<
    (typeof client.deployments)[':deployment-id']['chat']['completions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployments[':deployment-id'].chat.completions.$post(args, options),
  )
}
