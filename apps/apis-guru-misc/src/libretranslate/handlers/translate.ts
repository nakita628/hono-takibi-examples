import type { RouteHandler } from '@hono/zod-openapi'
import type { postTranslateRoute } from '../routes'

export const postTranslateRouteHandler: RouteHandler<typeof postTranslateRoute> = async (c) => {
  throw new Error('Not implemented')
}
