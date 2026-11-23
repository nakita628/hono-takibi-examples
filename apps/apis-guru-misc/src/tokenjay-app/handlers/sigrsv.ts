import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSigrsvExchangeAmountInfoRoute,
  getSigrsvExchangeIndexRoute,
  getSigrsvPriceRoute,
} from '../routes'

export const getSigrsvExchangeIndexRouteHandler: RouteHandler<
  typeof getSigrsvExchangeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigrsvExchangeAmountInfoRouteHandler: RouteHandler<
  typeof getSigrsvExchangeAmountInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigrsvPriceRouteHandler: RouteHandler<typeof getSigrsvPriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
