import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchQueuesRoute } from '../routes'

export const postSearchQueuesRouteHandler: RouteHandler<typeof postSearchQueuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
