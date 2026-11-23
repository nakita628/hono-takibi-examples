import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRecordHandlerProgressRoute,
  postActionRecordHandlerProgressRoute,
} from '../routes'

export const getActionRecordHandlerProgressRouteHandler: RouteHandler<
  typeof getActionRecordHandlerProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRecordHandlerProgressRouteHandler: RouteHandler<
  typeof postActionRecordHandlerProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
