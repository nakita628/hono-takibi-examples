import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommissionsRoute, postCommissionsRoute } from '../routes'

export const getCommissionsRouteHandler: RouteHandler<typeof getCommissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommissionsRouteHandler: RouteHandler<typeof postCommissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
