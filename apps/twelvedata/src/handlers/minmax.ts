import type { RouteHandler } from '@hono/zod-openapi'
import type { getMinmaxRoute } from '../routes'

export const getMinmaxRouteHandler: RouteHandler<typeof getMinmaxRoute> = async (c) => {
  throw new Error('Not implemented')
}
