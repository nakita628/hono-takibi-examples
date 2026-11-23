import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPutRolePermissionsBoundaryRoute,
  postActionPutRolePermissionsBoundaryRoute,
} from '../routes'

export const getActionPutRolePermissionsBoundaryRouteHandler: RouteHandler<
  typeof getActionPutRolePermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutRolePermissionsBoundaryRouteHandler: RouteHandler<
  typeof postActionPutRolePermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
