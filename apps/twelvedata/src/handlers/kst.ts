import type { RouteHandler } from '@hono/zod-openapi'
import type { getKstRoute } from '../routes'

export const getKstRouteHandler: RouteHandler<typeof getKstRoute> = async (c) => {
  throw new Error('Not implemented')
}
