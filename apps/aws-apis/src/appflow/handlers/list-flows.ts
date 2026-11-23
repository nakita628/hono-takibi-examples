import type { RouteHandler } from '@hono/zod-openapi'
import type { postListFlowsRoute } from '../routes'

export const postListFlowsRouteHandler: RouteHandler<typeof postListFlowsRoute> = async (c) => {
  throw new Error('Not implemented')
}
