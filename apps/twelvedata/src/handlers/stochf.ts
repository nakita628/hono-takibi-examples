import type { RouteHandler } from '@hono/zod-openapi'
import type { getStochfRoute } from '../routes'

export const getStochfRouteHandler: RouteHandler<typeof getStochfRoute> = async (c) => {
  throw new Error('Not implemented')
}
