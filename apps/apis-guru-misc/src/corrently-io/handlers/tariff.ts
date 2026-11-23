import type { RouteHandler } from '@hono/zod-openapi'
import type { getTariffComponentsRoute, getTariffSlph0Route } from '../routes'

export const getTariffComponentsRouteHandler: RouteHandler<
  typeof getTariffComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTariffSlph0RouteHandler: RouteHandler<typeof getTariffSlph0Route> = async (c) => {
  throw new Error('Not implemented')
}
