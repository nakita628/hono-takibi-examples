import type { RouteHandler } from '@hono/zod-openapi'
import type { getNamespacesRoute } from '../routes'

export const getNamespacesRouteHandler: RouteHandler<typeof getNamespacesRoute> = async (c) => {
  throw new Error('Not implemented')
}
