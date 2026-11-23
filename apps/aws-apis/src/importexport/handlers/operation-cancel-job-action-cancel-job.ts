import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationCancelJobActionCancelJobRoute,
  postOperationCancelJobActionCancelJobRoute,
} from '../routes'

export const getOperationCancelJobActionCancelJobRouteHandler: RouteHandler<
  typeof getOperationCancelJobActionCancelJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationCancelJobActionCancelJobRouteHandler: RouteHandler<
  typeof postOperationCancelJobActionCancelJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
