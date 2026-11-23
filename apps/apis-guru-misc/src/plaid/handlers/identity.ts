import type { RouteHandler } from '@hono/zod-openapi'
import type { postIdentityGetRoute, postIdentityMatchRoute } from '../routes'

export const postIdentityGetRouteHandler: RouteHandler<typeof postIdentityGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIdentityMatchRouteHandler: RouteHandler<typeof postIdentityMatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
