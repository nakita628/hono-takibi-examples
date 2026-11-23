import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertSpeedRoute } from '../routes'

export const postConvertSpeedRouteHandler: RouteHandler<typeof postConvertSpeedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
