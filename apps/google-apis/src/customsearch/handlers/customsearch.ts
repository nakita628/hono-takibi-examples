import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomsearchV1Route, getCustomsearchV1SiterestrictRoute } from '../routes'

export const getCustomsearchV1RouteHandler: RouteHandler<typeof getCustomsearchV1Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCustomsearchV1SiterestrictRouteHandler: RouteHandler<
  typeof getCustomsearchV1SiterestrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}
