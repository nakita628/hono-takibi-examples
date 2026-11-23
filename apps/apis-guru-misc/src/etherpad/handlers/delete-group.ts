import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeleteGroupRoute, postDeleteGroupRoute } from '../routes'

export const getDeleteGroupRouteHandler: RouteHandler<typeof getDeleteGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeleteGroupRouteHandler: RouteHandler<typeof postDeleteGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
