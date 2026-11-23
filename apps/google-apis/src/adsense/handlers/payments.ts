import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentsRoute } from '../routes'

export const getPaymentsRouteHandler: RouteHandler<typeof getPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
