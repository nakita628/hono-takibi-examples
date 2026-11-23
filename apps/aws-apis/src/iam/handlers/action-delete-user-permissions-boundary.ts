import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteUserPermissionsBoundaryRoute,
  postActionDeleteUserPermissionsBoundaryRoute,
} from '../routes'

export const getActionDeleteUserPermissionsBoundaryRouteHandler: RouteHandler<
  typeof getActionDeleteUserPermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteUserPermissionsBoundaryRouteHandler: RouteHandler<
  typeof postActionDeleteUserPermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
