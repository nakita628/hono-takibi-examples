import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateRoute } from '../routes'

export const postGenerateRouteHandler: RouteHandler<typeof postGenerateRoute> = async (c) => {
  throw new Error('Not implemented')
}
