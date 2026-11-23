import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuotesLagoIdRoute, getQuotesLagoIdVersionsRoute, getQuotesRoute } from '../routes'

export const getQuotesRouteHandler: RouteHandler<typeof getQuotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotesLagoIdRouteHandler: RouteHandler<typeof getQuotesLagoIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotesLagoIdVersionsRouteHandler: RouteHandler<
  typeof getQuotesLagoIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
