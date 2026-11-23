import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrangeRoute } from '../routes'

export const getTrangeRouteHandler: RouteHandler<typeof getTrangeRoute> = async (c) => {
  throw new Error('Not implemented')
}
