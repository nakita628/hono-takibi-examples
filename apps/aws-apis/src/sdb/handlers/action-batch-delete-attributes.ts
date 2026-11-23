import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchDeleteAttributesRoute,
  postActionBatchDeleteAttributesRoute,
} from '../routes'

export const getActionBatchDeleteAttributesRouteHandler: RouteHandler<
  typeof getActionBatchDeleteAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchDeleteAttributesRouteHandler: RouteHandler<
  typeof postActionBatchDeleteAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
