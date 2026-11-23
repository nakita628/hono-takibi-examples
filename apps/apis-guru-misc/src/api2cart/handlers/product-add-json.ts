import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductAddJsonRoute } from '../routes'

export const postProductAddJsonRouteHandler: RouteHandler<typeof postProductAddJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
