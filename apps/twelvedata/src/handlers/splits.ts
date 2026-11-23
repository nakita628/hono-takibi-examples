import type { RouteHandler } from '@hono/zod-openapi'
import type { getSplitsRoute } from '../routes'

export const getSplitsRouteHandler: RouteHandler<typeof getSplitsRoute> = async (c) => {
  throw new Error('Not implemented')
}
