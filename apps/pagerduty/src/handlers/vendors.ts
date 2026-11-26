import type { RouteHandler } from '@hono/zod-openapi'
import type { getVendorsRoute, getVendorsIdRoute } from '../routes'

export const getVendorsRouteHandler: RouteHandler<typeof getVendorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVendorsIdRouteHandler: RouteHandler<typeof getVendorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
