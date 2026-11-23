import type { RouteHandler } from '@hono/zod-openapi'
import type { postStandardDeviationRoute } from '../routes'

export const postStandardDeviationRouteHandler: RouteHandler<
  typeof postStandardDeviationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
