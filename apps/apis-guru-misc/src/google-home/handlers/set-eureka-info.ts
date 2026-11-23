import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetEurekaInfoRoute } from '../routes'

export const postSetEurekaInfoRouteHandler: RouteHandler<typeof postSetEurekaInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
