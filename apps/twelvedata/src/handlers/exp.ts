import type { RouteHandler } from '@hono/zod-openapi'
import type { getExpRoute } from '../routes'

export const getExpRouteHandler: RouteHandler<typeof getExpRoute> = async (c) => {
  throw new Error('Not implemented')
}
