import type { RouteHandler } from '@hono/zod-openapi'
import type { postRegressionApiRoute } from '../routes'

export const postRegressionApiRouteHandler: RouteHandler<typeof postRegressionApiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
