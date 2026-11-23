import type { RouteHandler } from '@hono/zod-openapi'
import type { postSessionForgotPasswordJsonRoute } from '../routes'

export const postSessionForgotPasswordJsonRouteHandler: RouteHandler<
  typeof postSessionForgotPasswordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
