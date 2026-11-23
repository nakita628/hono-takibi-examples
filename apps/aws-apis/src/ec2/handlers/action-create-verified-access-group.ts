import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVerifiedAccessGroupRoute,
  postActionCreateVerifiedAccessGroupRoute,
} from '../routes'

export const getActionCreateVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof getActionCreateVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVerifiedAccessGroupRouteHandler: RouteHandler<
  typeof postActionCreateVerifiedAccessGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
