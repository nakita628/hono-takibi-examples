import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserAgentRoute } from '../routes'

export const getUserAgentRouteHandler: RouteHandler<typeof getUserAgentRoute> = async (c) => {
  throw new Error('Not implemented')
}
