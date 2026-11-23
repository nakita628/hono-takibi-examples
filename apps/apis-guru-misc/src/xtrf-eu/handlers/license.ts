import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicenseRoute, postLicenseRefreshRoute } from '../routes'

export const getLicenseRouteHandler: RouteHandler<typeof getLicenseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLicenseRefreshRouteHandler: RouteHandler<typeof postLicenseRefreshRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
