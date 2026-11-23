import type { RouteHandler } from '@hono/zod-openapi'
import type { putForgotPasswordRoute, putForgotPasswordVerifyRoute } from '../routes'

export const putForgotPasswordRouteHandler: RouteHandler<typeof putForgotPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putForgotPasswordVerifyRouteHandler: RouteHandler<
  typeof putForgotPasswordVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
