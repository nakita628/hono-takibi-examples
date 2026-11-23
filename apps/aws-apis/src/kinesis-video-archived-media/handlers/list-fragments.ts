import type { RouteHandler } from '@hono/zod-openapi'
import type { postListFragmentsRoute } from '../routes'

export const postListFragmentsRouteHandler: RouteHandler<typeof postListFragmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
