import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserauthLoginOptionsRoute, postUserauthRoute } from '../routes'

export const postUserauthRouteHandler: RouteHandler<typeof postUserauthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserauthLoginOptionsRouteHandler: RouteHandler<
  typeof postUserauthLoginOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
