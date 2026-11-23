import type { RouteHandler } from '@hono/zod-openapi'
import type { getInfoRoute } from '../routes'

export const getInfoRouteHandler: RouteHandler<typeof getInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
