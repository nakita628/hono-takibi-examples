import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchDeleteScheduledActionRoute,
  postActionBatchDeleteScheduledActionRoute,
} from '../routes'

export const getActionBatchDeleteScheduledActionRouteHandler: RouteHandler<
  typeof getActionBatchDeleteScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchDeleteScheduledActionRouteHandler: RouteHandler<
  typeof postActionBatchDeleteScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
