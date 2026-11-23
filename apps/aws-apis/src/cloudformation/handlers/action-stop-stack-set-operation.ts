import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStopStackSetOperationRoute,
  postActionStopStackSetOperationRoute,
} from '../routes'

export const getActionStopStackSetOperationRouteHandler: RouteHandler<
  typeof getActionStopStackSetOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStopStackSetOperationRouteHandler: RouteHandler<
  typeof postActionStopStackSetOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
