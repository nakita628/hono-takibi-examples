import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLedgerAccountBalancesRoute,
  postLedgerAccountBalancesUpdateOverdraftLimitRoute,
} from '../routes'

export const postLedgerAccountBalancesUpdateOverdraftLimitRouteHandler: RouteHandler<
  typeof postLedgerAccountBalancesUpdateOverdraftLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLedgerAccountBalancesRouteHandler: RouteHandler<
  typeof getLedgerAccountBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
