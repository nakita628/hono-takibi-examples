import type { RouteHandler } from '@hono/zod-openapi'
import type { getDxRoute } from '../routes'

export const getDxRouteHandler: RouteHandler<typeof getDxRoute> = async (c) => {
  throw new Error('Not implemented')
}
