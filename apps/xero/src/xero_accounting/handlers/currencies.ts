import type { RouteHandler } from '@hono/zod-openapi'
import type { getCurrenciesRoute, putCurrenciesRoute } from '../routes'

export const getCurrenciesRouteHandler: RouteHandler<typeof getCurrenciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCurrenciesRouteHandler: RouteHandler<typeof putCurrenciesRoute> = async (c) => {
  throw new Error('Not implemented')
}
