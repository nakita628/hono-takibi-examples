import type { RouteHandler } from '@hono/zod-openapi'
import type { getAgentsAgentGidRoute } from '../routes'

export const getAgentsAgentGidRouteHandler: RouteHandler<typeof getAgentsAgentGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
