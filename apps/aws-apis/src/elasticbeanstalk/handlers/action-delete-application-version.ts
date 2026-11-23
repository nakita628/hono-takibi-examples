import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteApplicationVersionRoute,
  postActionDeleteApplicationVersionRoute,
} from '../routes'

export const getActionDeleteApplicationVersionRouteHandler: RouteHandler<
  typeof getActionDeleteApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteApplicationVersionRouteHandler: RouteHandler<
  typeof postActionDeleteApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
