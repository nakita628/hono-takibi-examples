import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetMyCommandsRoute } from '../routes'

export const postGetMyCommandsRouteHandler: RouteHandler<typeof postGetMyCommandsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
