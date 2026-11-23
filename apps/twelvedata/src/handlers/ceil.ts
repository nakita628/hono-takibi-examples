import type { RouteHandler } from '@hono/zod-openapi'
import type { getCeilRoute } from '../routes'

export const getCeilRouteHandler: RouteHandler<typeof getCeilRoute> = async (c) => {
  throw new Error('Not implemented')
}
