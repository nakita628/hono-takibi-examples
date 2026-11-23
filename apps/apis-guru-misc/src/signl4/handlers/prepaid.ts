import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPrepaidBalanceRoute,
  getPrepaidSettingsRoute,
  getPrepaidTransactionsRoute,
  putPrepaidSettingsRoute,
} from '../routes'

export const getPrepaidBalanceRouteHandler: RouteHandler<typeof getPrepaidBalanceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPrepaidSettingsRouteHandler: RouteHandler<typeof getPrepaidSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPrepaidSettingsRouteHandler: RouteHandler<typeof putPrepaidSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPrepaidTransactionsRouteHandler: RouteHandler<
  typeof getPrepaidTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
