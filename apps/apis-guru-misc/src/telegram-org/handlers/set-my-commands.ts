import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetMyCommandsRoute } from '../routes'

export const postSetMyCommandsRouteHandler: RouteHandler<typeof postSetMyCommandsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
