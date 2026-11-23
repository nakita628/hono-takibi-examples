import type { RouteHandler } from '@hono/zod-openapi'
import type { postMcpRoute } from '../routes'

export const postMcpRouteHandler: RouteHandler<typeof postMcpRoute> = async (c) => {
  throw new Error('Not implemented')
}
