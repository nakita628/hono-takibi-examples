import type { RouteHandler } from '@hono/zod-openapi'
import type { getAiAgentDefaultRoute } from '../routes'

export const getAiAgentDefaultRouteHandler: RouteHandler<typeof getAiAgentDefaultRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
