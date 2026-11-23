import type { RouteHandler } from '@hono/zod-openapi'
import type { getCountryAllRoute, getCountryCodeRoute, getCountryRoute } from '../routes'

export const getCountryRouteHandler: RouteHandler<typeof getCountryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCountryAllRouteHandler: RouteHandler<typeof getCountryAllRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCountryCodeRouteHandler: RouteHandler<typeof getCountryCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
