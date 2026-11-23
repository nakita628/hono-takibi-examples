import type { RouteHandler } from '@hono/zod-openapi'
import type { getBytesNRoute } from '../routes'

export const getBytesNRouteHandler: RouteHandler<typeof getBytesNRoute> = async (c) => {
  throw new Error('Not implemented')
}
