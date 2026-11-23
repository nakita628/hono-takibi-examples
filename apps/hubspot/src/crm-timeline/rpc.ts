import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIntegratorsTimeline202609Events(
  args: InferRequestType<(typeof client.integrators.timeline)['2026-09']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrators.timeline['2026-09'].events.$post(args, options))
}

export async function postIntegratorsTimeline202609EventsBatch(
  args: InferRequestType<
    (typeof client.integrators.timeline)['2026-09']['events']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrators.timeline['2026-09'].events.batch.$post(args, options),
  )
}

export async function postIntegratorsTimeline202609TypesProjects(
  args: InferRequestType<
    (typeof client.integrators.timeline)['2026-09']['types']['projects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.integrators.timeline['2026-09'].types.projects.$post(args, options),
  )
}
