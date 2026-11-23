import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateServiceLinkedRoleRoute,
  postActionCreateServiceLinkedRoleRoute,
} from '../routes'

export const getActionCreateServiceLinkedRoleRouteHandler: RouteHandler<
  typeof getActionCreateServiceLinkedRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateServiceLinkedRoleRouteHandler: RouteHandler<
  typeof postActionCreateServiceLinkedRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
