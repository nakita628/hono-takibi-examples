import type { RouteHandler } from '@hono/zod-openapi'
import type { postPqTableSearchRoute } from '../routes'

export const postPqTableSearchRouteHandler: RouteHandler<typeof postPqTableSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
