import type { RouteHandler } from '@hono/zod-openapi'
import type { getCurrenciesIdRoute, getCurrenciesRoute } from '../routes'

export const getCurrenciesRouteHandler: RouteHandler<typeof getCurrenciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCurrenciesIdRouteHandler: RouteHandler<typeof getCurrenciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
