import type { RouteHandler } from '@hono/zod-openapi'
import type { postResetPasswordRequestRoute, postResetPasswordRoute } from '../routes'

export const postResetPasswordRequestRouteHandler: RouteHandler<
  typeof postResetPasswordRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResetPasswordRouteHandler: RouteHandler<typeof postResetPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
