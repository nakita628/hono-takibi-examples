import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicensesLicenseRoute, getLicensesRoute } from '../routes'

export const getLicensesRouteHandler: RouteHandler<typeof getLicensesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicensesLicenseRouteHandler: RouteHandler<typeof getLicensesLicenseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
