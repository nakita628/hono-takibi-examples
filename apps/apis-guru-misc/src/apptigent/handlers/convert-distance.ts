import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertDistanceRoute } from '../routes'

export const postConvertDistanceRouteHandler: RouteHandler<
  typeof postConvertDistanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
