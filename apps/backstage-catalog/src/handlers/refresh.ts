import type { RouteHandler } from '@hono/zod-openapi'
import type { postRefreshRoute } from '../routes'

export const postRefreshRouteHandler: RouteHandler<typeof postRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}
