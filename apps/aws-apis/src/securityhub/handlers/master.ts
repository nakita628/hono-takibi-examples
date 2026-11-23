import type { RouteHandler } from '@hono/zod-openapi'
import type { getMasterRoute, postMasterDisassociateRoute, postMasterRoute } from '../routes'

export const postMasterRouteHandler: RouteHandler<typeof postMasterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMasterRouteHandler: RouteHandler<typeof getMasterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMasterDisassociateRouteHandler: RouteHandler<
  typeof postMasterDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
