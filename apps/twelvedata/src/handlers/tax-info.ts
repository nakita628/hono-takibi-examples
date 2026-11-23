import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaxInfoRoute } from '../routes'

export const getTaxInfoRouteHandler: RouteHandler<typeof getTaxInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
