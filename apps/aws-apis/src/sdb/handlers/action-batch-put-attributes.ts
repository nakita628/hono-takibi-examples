import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionBatchPutAttributesRoute, postActionBatchPutAttributesRoute } from '../routes'

export const getActionBatchPutAttributesRouteHandler: RouteHandler<
  typeof getActionBatchPutAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchPutAttributesRouteHandler: RouteHandler<
  typeof postActionBatchPutAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
