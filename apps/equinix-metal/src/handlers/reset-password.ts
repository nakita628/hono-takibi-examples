import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteResetPasswordRoute, postResetPasswordRoute } from '../routes'

export const deleteResetPasswordRouteHandler: RouteHandler<
  typeof deleteResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResetPasswordRouteHandler: RouteHandler<typeof postResetPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
