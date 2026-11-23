import type { RouteHandler } from '@hono/zod-openapi'
import type { getSarextRoute } from '../routes'

export const getSarextRouteHandler: RouteHandler<typeof getSarextRoute> = async (c) => {
  throw new Error('Not implemented')
}
