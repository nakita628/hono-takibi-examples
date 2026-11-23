import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStartInstanceRefreshRoute,
  postActionStartInstanceRefreshRoute,
} from '../routes'

export const getActionStartInstanceRefreshRouteHandler: RouteHandler<
  typeof getActionStartInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartInstanceRefreshRouteHandler: RouteHandler<
  typeof postActionStartInstanceRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
