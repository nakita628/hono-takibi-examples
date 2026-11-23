import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDerivedHoldingSummaryRoute,
  getDerivedNetworthRoute,
  getDerivedTransactionSummaryRoute,
} from '../routes'

export const getDerivedHoldingSummaryRouteHandler: RouteHandler<
  typeof getDerivedHoldingSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDerivedNetworthRouteHandler: RouteHandler<typeof getDerivedNetworthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDerivedTransactionSummaryRouteHandler: RouteHandler<
  typeof getDerivedTransactionSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
