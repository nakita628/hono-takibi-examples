import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListStackSetOperationsRoute,
  postActionListStackSetOperationsRoute,
} from '../routes'

export const getActionListStackSetOperationsRouteHandler: RouteHandler<
  typeof getActionListStackSetOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackSetOperationsRouteHandler: RouteHandler<
  typeof postActionListStackSetOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
