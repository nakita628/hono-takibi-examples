import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertAngleRoute } from '../routes'

export const postConvertAngleRouteHandler: RouteHandler<typeof postConvertAngleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
