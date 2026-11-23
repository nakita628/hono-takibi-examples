import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestErrorHandlingRoute } from '../routes'

export const postRestErrorHandlingRouteHandler: RouteHandler<
  typeof postRestErrorHandlingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
