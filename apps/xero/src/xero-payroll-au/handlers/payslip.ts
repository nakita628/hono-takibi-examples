import type { RouteHandler } from '@hono/zod-openapi'
import type { getPayslipPayslipIDRoute, postPayslipPayslipIDRoute } from '../routes'

export const getPayslipPayslipIDRouteHandler: RouteHandler<
  typeof getPayslipPayslipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPayslipPayslipIDRouteHandler: RouteHandler<
  typeof postPayslipPayslipIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
