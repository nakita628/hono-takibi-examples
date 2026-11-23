import type { RouteHandler } from '@hono/zod-openapi'
import type { getPrioritiesRoute } from '../routes'

export const getPrioritiesRouteHandler: RouteHandler<typeof getPrioritiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
