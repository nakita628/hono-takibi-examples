import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreateGroupRoute, postCreateGroupRoute } from '../routes'

export const getCreateGroupRouteHandler: RouteHandler<typeof getCreateGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreateGroupRouteHandler: RouteHandler<typeof postCreateGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
