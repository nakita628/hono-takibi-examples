import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateApplicationVersionRoute,
  postActionUpdateApplicationVersionRoute,
} from '../routes'

export const getActionUpdateApplicationVersionRouteHandler: RouteHandler<
  typeof getActionUpdateApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateApplicationVersionRouteHandler: RouteHandler<
  typeof postActionUpdateApplicationVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
