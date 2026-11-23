import type { RouteHandler } from '@hono/zod-openapi'
import type { postSignup1DemoauthverifyRoute, postSignup2DemoauthRoute } from '../routes'

export const postSignup1DemoauthverifyRouteHandler: RouteHandler<
  typeof postSignup1DemoauthverifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignup2DemoauthRouteHandler: RouteHandler<
  typeof postSignup2DemoauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
