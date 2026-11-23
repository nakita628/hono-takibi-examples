import type { RouteHandler } from '@hono/zod-openapi'
import type { getAtrRoute } from '../routes'

export const getAtrRouteHandler: RouteHandler<typeof getAtrRoute> = async (c) => {
  throw new Error('Not implemented')
}
