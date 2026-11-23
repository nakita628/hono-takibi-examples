import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListStackSetOperationResultsRoute,
  postActionListStackSetOperationResultsRoute,
} from '../routes'

export const getActionListStackSetOperationResultsRouteHandler: RouteHandler<
  typeof getActionListStackSetOperationResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackSetOperationResultsRouteHandler: RouteHandler<
  typeof postActionListStackSetOperationResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
