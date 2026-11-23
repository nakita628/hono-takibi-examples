import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConfigV1AgentsRoute,
  getConfigV1RumAgentsRoute,
  postConfigV1AgentsRoute,
} from '../routes'

export const getConfigV1AgentsRouteHandler: RouteHandler<typeof getConfigV1AgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postConfigV1AgentsRouteHandler: RouteHandler<typeof postConfigV1AgentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConfigV1RumAgentsRouteHandler: RouteHandler<
  typeof getConfigV1RumAgentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
