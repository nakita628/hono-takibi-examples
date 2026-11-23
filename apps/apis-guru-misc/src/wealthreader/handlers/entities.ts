import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntitiesRoute, postEntitiesRoute } from '../routes'

export const getEntitiesRouteHandler: RouteHandler<typeof getEntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntitiesRouteHandler: RouteHandler<typeof postEntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}
