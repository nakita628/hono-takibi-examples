import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterIamRolesRoute,
  postActionModifyClusterIamRolesRoute,
} from '../routes'

export const getActionModifyClusterIamRolesRouteHandler: RouteHandler<
  typeof getActionModifyClusterIamRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterIamRolesRouteHandler: RouteHandler<
  typeof postActionModifyClusterIamRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
