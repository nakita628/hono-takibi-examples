import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculatePowerRoute } from '../routes'

export const postCalculatePowerRouteHandler: RouteHandler<typeof postCalculatePowerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
