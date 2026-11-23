import type { RouteHandler } from '@hono/zod-openapi'
import type { getArrRoute } from '../routes'

export const getArrRouteHandler: RouteHandler<typeof getArrRoute> = async (c) => {
  throw new Error('Not implemented')
}
