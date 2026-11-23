import type { RouteHandler } from '@hono/zod-openapi'
import type { postPasswordResetConfirmIndexRoute } from '../routes'

export const postPasswordResetConfirmIndexRouteHandler: RouteHandler<
  typeof postPasswordResetConfirmIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
