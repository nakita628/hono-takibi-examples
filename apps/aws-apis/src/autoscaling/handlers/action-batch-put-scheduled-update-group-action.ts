import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchPutScheduledUpdateGroupActionRoute,
  postActionBatchPutScheduledUpdateGroupActionRoute,
} from '../routes'

export const getActionBatchPutScheduledUpdateGroupActionRouteHandler: RouteHandler<
  typeof getActionBatchPutScheduledUpdateGroupActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchPutScheduledUpdateGroupActionRouteHandler: RouteHandler<
  typeof postActionBatchPutScheduledUpdateGroupActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
