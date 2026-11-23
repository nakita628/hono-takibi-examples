import type { RouteHandler } from '@hono/zod-openapi'
import type { postDateTimeInfoRoute } from '../routes'

export const postDateTimeInfoRouteHandler: RouteHandler<typeof postDateTimeInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
