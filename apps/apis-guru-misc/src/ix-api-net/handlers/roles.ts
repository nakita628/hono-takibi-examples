import type { RouteHandler } from '@hono/zod-openapi'
import type { getRolesIdRoute, getRolesRoute } from '../routes'

export const getRolesRouteHandler: RouteHandler<typeof getRolesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRolesIdRouteHandler: RouteHandler<typeof getRolesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
