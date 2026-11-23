import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteRolePermissionsBoundaryRoute,
  postActionDeleteRolePermissionsBoundaryRoute,
} from '../routes'

export const getActionDeleteRolePermissionsBoundaryRouteHandler: RouteHandler<
  typeof getActionDeleteRolePermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRolePermissionsBoundaryRouteHandler: RouteHandler<
  typeof postActionDeleteRolePermissionsBoundaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
