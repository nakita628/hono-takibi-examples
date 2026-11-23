import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreatorRolesRoute } from '../routes'

export const getCreatorRolesRouteHandler: RouteHandler<typeof getCreatorRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}
