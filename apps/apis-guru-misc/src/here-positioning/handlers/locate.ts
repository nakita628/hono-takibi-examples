import type { RouteHandler } from '@hono/zod-openapi'
import type { postLocateRoute } from '../routes'

export const postLocateRouteHandler: RouteHandler<typeof postLocateRoute> = async (c) => {
  throw new Error('Not implemented')
}
