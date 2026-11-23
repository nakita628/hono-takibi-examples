import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSendBulkTemplatedEmailRoute,
  postActionSendBulkTemplatedEmailRoute,
} from '../routes'

export const getActionSendBulkTemplatedEmailRouteHandler: RouteHandler<
  typeof getActionSendBulkTemplatedEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendBulkTemplatedEmailRouteHandler: RouteHandler<
  typeof postActionSendBulkTemplatedEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
