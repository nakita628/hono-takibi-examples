import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUntagInstanceProfileRoute,
  postActionUntagInstanceProfileRoute,
} from '../routes'

export const getActionUntagInstanceProfileRouteHandler: RouteHandler<
  typeof getActionUntagInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagInstanceProfileRouteHandler: RouteHandler<
  typeof postActionUntagInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
