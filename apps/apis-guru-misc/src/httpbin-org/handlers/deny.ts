import type { RouteHandler } from '@hono/zod-openapi'
import type { getDenyRoute } from '../routes'

export const getDenyRouteHandler: RouteHandler<typeof getDenyRoute> = async (c) => {
  throw new Error('Not implemented')
}
