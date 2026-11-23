import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyIdentityIdFormatRoute,
  postActionModifyIdentityIdFormatRoute,
} from '../routes'

export const getActionModifyIdentityIdFormatRouteHandler: RouteHandler<
  typeof getActionModifyIdentityIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIdentityIdFormatRouteHandler: RouteHandler<
  typeof postActionModifyIdentityIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
