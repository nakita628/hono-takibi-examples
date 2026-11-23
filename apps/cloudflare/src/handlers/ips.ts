import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpsRoute } from '../routes'

export const getIpsRouteHandler: RouteHandler<typeof getIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}
