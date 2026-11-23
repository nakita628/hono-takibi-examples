import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertPowerRoute } from '../routes'

export const postConvertPowerRouteHandler: RouteHandler<typeof postConvertPowerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
