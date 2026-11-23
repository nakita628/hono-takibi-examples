import type { RouteHandler } from '@hono/zod-openapi'
import type { getRolesRoute } from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}
