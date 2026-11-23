import type { RouteHandler } from '@hono/zod-openapi'
import type { postCanariesLastRunRoute, postCanariesRoute } from '../routes'

export const postCanariesRouteHandler: RouteHandler<typeof postCanariesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCanariesLastRunRouteHandler: RouteHandler<
  typeof postCanariesLastRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
