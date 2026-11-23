import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuotaEntityRoute, getQuotaRoute } from '../routes'

export const getQuotaEntityRouteHandler: RouteHandler<typeof getQuotaEntityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotaRouteHandler: RouteHandler<typeof getQuotaRoute> = async (c) => {
  throw new Error('Not implemented')
}
