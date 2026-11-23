import type { RouteHandler } from '@hono/zod-openapi'
import type { getCmoRoute } from '../routes'

export const getCmoRouteHandler: RouteHandler<typeof getCmoRoute> = async (c) => {
  throw new Error('Not implemented')
}
