import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkspacesRoute, postWorkspacesRoute } from '../routes'

export const getWorkspacesRouteHandler: RouteHandler<typeof getWorkspacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesRouteHandler: RouteHandler<typeof postWorkspacesRoute> = async (c) => {
  throw new Error('Not implemented')
}
