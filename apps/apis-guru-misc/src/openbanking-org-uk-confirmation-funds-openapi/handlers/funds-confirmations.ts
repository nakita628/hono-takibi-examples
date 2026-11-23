import type { RouteHandler } from '@hono/zod-openapi'
import type { postFundsConfirmationsRoute } from '../routes'

export const postFundsConfirmationsRouteHandler: RouteHandler<
  typeof postFundsConfirmationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
