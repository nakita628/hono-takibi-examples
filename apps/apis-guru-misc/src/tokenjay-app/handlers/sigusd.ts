import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSigusdExchangeAmountInfoRoute,
  getSigusdExchangeIndexRoute,
  getSigusdPriceRoute,
} from '../routes'

export const getSigusdExchangeIndexRouteHandler: RouteHandler<
  typeof getSigusdExchangeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigusdExchangeAmountInfoRouteHandler: RouteHandler<
  typeof getSigusdExchangeAmountInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigusdPriceRouteHandler: RouteHandler<typeof getSigusdPriceRoute> = async (c) => {
  throw new Error('Not implemented')
}
