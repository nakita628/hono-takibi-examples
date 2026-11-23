import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchStopUpdateActionRoute,
  postActionBatchStopUpdateActionRoute,
} from '../routes'

export const getActionBatchStopUpdateActionRouteHandler: RouteHandler<
  typeof getActionBatchStopUpdateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchStopUpdateActionRouteHandler: RouteHandler<
  typeof postActionBatchStopUpdateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
