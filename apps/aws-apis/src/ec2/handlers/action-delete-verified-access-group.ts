import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVerifiedAccessGroupRoute,
  postActionDeleteVerifiedAccessGroupRoute,
} from '../routes'

export const getActionDeleteVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof getActionDeleteVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof postActionDeleteVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
