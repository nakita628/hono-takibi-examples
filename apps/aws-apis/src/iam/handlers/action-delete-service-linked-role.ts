import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteServiceLinkedRoleRoute,
  postActionDeleteServiceLinkedRoleRoute,
} from '../routes'

export const getActionDeleteServiceLinkedRoleRouteHandler: RouteHandler<
  typeof getActionDeleteServiceLinkedRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteServiceLinkedRoleRouteHandler: RouteHandler<
  typeof postActionDeleteServiceLinkedRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
