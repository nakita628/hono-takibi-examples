import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationGetStatusActionGetStatusRoute,
  postOperationGetStatusActionGetStatusRoute,
} from '../routes'

export const getOperationGetStatusActionGetStatusRouteHandler: RouteHandler<
  typeof getOperationGetStatusActionGetStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationGetStatusActionGetStatusRouteHandler: RouteHandler<
  typeof postOperationGetStatusActionGetStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
