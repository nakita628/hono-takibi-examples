import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicepacksRoute } from '../routes'

export const getServicepacksRouteHandler: RouteHandler<typeof getServicepacksRoute> = async (c) => {
  throw new Error('Not implemented')
}
