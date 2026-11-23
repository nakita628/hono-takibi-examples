import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAddRoleToInstanceProfileRoute,
  postActionAddRoleToInstanceProfileRoute,
} from '../routes'

export const getActionAddRoleToInstanceProfileRouteHandler: RouteHandler<
  typeof getActionAddRoleToInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddRoleToInstanceProfileRouteHandler: RouteHandler<
  typeof postActionAddRoleToInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
