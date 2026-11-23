import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertDurationRoute } from '../routes'

export const postConvertDurationRouteHandler: RouteHandler<
  typeof postConvertDurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
