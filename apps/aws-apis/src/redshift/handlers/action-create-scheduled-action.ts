import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateScheduledActionRoute,
  postActionCreateScheduledActionRoute,
} from '../routes'

export const getActionCreateScheduledActionRouteHandler: RouteHandler<
  typeof getActionCreateScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateScheduledActionRouteHandler: RouteHandler<
  typeof postActionCreateScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
