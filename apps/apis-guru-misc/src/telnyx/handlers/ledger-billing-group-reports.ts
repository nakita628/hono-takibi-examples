import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLedgerBillingGroupReportsIdRoute,
  postLedgerBillingGroupReportsRoute,
} from '../routes'

export const postLedgerBillingGroupReportsRouteHandler: RouteHandler<
  typeof postLedgerBillingGroupReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLedgerBillingGroupReportsIdRouteHandler: RouteHandler<
  typeof getLedgerBillingGroupReportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
