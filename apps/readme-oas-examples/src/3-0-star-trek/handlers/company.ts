import type { RouteHandler } from '@hono/zod-openapi'
import type { getCompanyRoute, getCompanySearchRoute, postCompanySearchRoute } from '../routes'

export const getCompanyRouteHandler: RouteHandler<typeof getCompanyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCompanySearchRouteHandler: RouteHandler<typeof getCompanySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCompanySearchRouteHandler: RouteHandler<typeof postCompanySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
