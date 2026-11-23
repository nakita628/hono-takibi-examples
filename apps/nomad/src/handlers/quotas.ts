import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuotasRoute } from '../routes'

export const getQuotasRouteHandler: RouteHandler<typeof getQuotasRoute> = async (c) => {
  throw new Error('Not implemented')
}
