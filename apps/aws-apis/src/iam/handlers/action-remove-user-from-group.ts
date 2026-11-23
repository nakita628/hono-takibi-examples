import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveUserFromGroupRoute,
  postActionRemoveUserFromGroupRoute,
} from '../routes'

export const getActionRemoveUserFromGroupRouteHandler: RouteHandler<
  typeof getActionRemoveUserFromGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveUserFromGroupRouteHandler: RouteHandler<
  typeof postActionRemoveUserFromGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
