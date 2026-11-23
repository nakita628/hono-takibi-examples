import type { RouteHandler } from '@hono/zod-openapi'
import type { getStochRoute } from '../routes'

export const getStochRouteHandler: RouteHandler<typeof getStochRoute> = async (c) => {
  throw new Error('Not implemented')
}
