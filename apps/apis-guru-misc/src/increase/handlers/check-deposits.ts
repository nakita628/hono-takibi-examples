import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCheckDepositsCheckDepositIdRoute,
  getCheckDepositsRoute,
  postCheckDepositsRoute,
} from '../routes'

export const getCheckDepositsRouteHandler: RouteHandler<typeof getCheckDepositsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCheckDepositsRouteHandler: RouteHandler<typeof postCheckDepositsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCheckDepositsCheckDepositIdRouteHandler: RouteHandler<
  typeof getCheckDepositsCheckDepositIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
