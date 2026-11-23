import type { RouteHandler } from '@hono/zod-openapi'
import type { getReferralAccountsRoute } from '../routes'

export const getReferralAccountsRouteHandler: RouteHandler<
  typeof getReferralAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
