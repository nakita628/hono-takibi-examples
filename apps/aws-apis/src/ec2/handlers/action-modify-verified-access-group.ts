import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVerifiedAccessGroupRoute,
  postActionModifyVerifiedAccessGroupRoute,
} from '../routes'

export const getActionModifyVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof getActionModifyVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof postActionModifyVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
