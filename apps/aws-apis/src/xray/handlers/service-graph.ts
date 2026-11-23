import type { RouteHandler } from '@hono/zod-openapi'
import type { postServiceGraphRoute } from '../routes'

export const postServiceGraphRouteHandler: RouteHandler<typeof postServiceGraphRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
