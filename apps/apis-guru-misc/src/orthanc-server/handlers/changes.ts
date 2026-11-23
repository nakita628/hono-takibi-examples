import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteChangesRoute, getChangesRoute } from '../routes'

export const deleteChangesRouteHandler: RouteHandler<typeof deleteChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChangesRouteHandler: RouteHandler<typeof getChangesRoute> = async (c) => {
  throw new Error('Not implemented')
}
