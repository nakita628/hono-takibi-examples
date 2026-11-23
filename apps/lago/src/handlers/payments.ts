import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentsLagoIdRoute, getPaymentsRoute, postPaymentsRoute } from '../routes'

export const postPaymentsRouteHandler: RouteHandler<typeof postPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsRouteHandler: RouteHandler<typeof getPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsLagoIdRouteHandler: RouteHandler<typeof getPaymentsLagoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
