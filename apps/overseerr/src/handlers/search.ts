import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchCompanyRoute, getSearchKeywordRoute, getSearchRoute } from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchKeywordRouteHandler: RouteHandler<typeof getSearchKeywordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSearchCompanyRouteHandler: RouteHandler<typeof getSearchCompanyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
