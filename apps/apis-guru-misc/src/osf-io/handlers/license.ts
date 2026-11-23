import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicenseLicenseIdIndexRoute } from '../routes'

export const getLicenseLicenseIdIndexRouteHandler: RouteHandler<
  typeof getLicenseLicenseIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
