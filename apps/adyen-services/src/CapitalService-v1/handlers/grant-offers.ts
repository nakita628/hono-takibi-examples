import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrantOffersIdRoute, getGrantOffersRoute } from '../routes'

export const getGrantOffersRouteHandler: RouteHandler<typeof getGrantOffersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGrantOffersIdRouteHandler: RouteHandler<typeof getGrantOffersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
