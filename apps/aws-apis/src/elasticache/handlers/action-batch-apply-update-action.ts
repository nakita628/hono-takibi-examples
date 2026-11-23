import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchApplyUpdateActionRoute,
  postActionBatchApplyUpdateActionRoute,
} from '../routes'

export const getActionBatchApplyUpdateActionRouteHandler: RouteHandler<
  typeof getActionBatchApplyUpdateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchApplyUpdateActionRouteHandler: RouteHandler<
  typeof postActionBatchApplyUpdateActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
