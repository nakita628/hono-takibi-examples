import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuotasRoute, putQuotasRoute } from '../routes'

export const getQuotasRouteHandler: RouteHandler<typeof getQuotasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putQuotasRouteHandler: RouteHandler<typeof putQuotasRoute> = async (c) => {
  throw new Error('Not implemented')
}
