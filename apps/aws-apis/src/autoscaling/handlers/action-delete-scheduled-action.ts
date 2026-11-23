import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteScheduledActionRoute,
  postActionDeleteScheduledActionRoute,
} from '../routes'

export const getActionDeleteScheduledActionRouteHandler: RouteHandler<
  typeof getActionDeleteScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteScheduledActionRouteHandler: RouteHandler<
  typeof postActionDeleteScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
