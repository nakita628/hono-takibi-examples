import type { RouteHandler } from '@hono/zod-openapi'
import type { getMasterRoute, postMasterDisassociateRoute } from '../routes'

export const postMasterDisassociateRouteHandler: RouteHandler<
  typeof postMasterDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterRouteHandler: RouteHandler<typeof getMasterRoute> = async (c) => {
  throw new Error('Not implemented')
}
