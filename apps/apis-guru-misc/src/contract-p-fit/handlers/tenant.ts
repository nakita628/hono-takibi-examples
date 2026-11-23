import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteTenantRoute, patchTenantActivateRoute } from '../routes'

export const deleteTenantRouteHandler: RouteHandler<typeof deleteTenantRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTenantActivateRouteHandler: RouteHandler<
  typeof patchTenantActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
