import type { RouteHandler } from '@hono/zod-openapi'
import type { postApplePaySessionsRoute } from '../routes'

export const postApplePaySessionsRouteHandler: RouteHandler<
  typeof postApplePaySessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
