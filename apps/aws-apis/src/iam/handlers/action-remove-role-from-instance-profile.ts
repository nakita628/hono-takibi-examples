import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveRoleFromInstanceProfileRoute,
  postActionRemoveRoleFromInstanceProfileRoute,
} from '../routes'

export const getActionRemoveRoleFromInstanceProfileRouteHandler: RouteHandler<
  typeof getActionRemoveRoleFromInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveRoleFromInstanceProfileRouteHandler: RouteHandler<
  typeof postActionRemoveRoleFromInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
