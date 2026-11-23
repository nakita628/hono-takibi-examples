import type { RouteHandler } from '@hono/zod-openapi'
import type { getPayslipsPayslipIDRoute, getPayslipsRoute } from '../routes'

export const getPayslipsRouteHandler: RouteHandler<typeof getPayslipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPayslipsPayslipIDRouteHandler: RouteHandler<
  typeof getPayslipsPayslipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
