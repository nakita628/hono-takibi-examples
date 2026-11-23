import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdxrRoute } from '../routes'

export const getAdxrRouteHandler: RouteHandler<typeof getAdxrRoute> = async (c) => {
  throw new Error('Not implemented')
}
