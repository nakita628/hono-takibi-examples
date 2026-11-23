import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdxRoute } from '../routes'

export const getAdxRouteHandler: RouteHandler<typeof getAdxRoute> = async (c) => {
  throw new Error('Not implemented')
}
