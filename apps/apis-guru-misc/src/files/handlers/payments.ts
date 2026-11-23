import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentsIdRoute, getPaymentsRoute } from '../routes'

export const getPaymentsRouteHandler: RouteHandler<typeof getPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsIdRouteHandler: RouteHandler<typeof getPaymentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
