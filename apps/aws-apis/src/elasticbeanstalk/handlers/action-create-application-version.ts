import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateApplicationVersionRoute,
  postActionCreateApplicationVersionRoute,
} from '../routes'

export const getActionCreateApplicationVersionRouteHandler: RouteHandler<
  typeof getActionCreateApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateApplicationVersionRouteHandler: RouteHandler<
  typeof postActionCreateApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
