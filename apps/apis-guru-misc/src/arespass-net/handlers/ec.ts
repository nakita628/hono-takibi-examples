import type { RouteHandler } from '@hono/zod-openapi'
import type { getEcRoute } from '../routes'

export const getEcRouteHandler: RouteHandler<typeof getEcRoute> = async (c) => {
  throw new Error('Not implemented')
}
