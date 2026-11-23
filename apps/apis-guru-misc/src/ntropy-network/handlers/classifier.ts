import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClassifierBusinessBatchIdRoute,
  getClassifierConsumerBatchIdRoute,
} from '../routes'

export const getClassifierBusinessBatchIdRouteHandler: RouteHandler<
  typeof getClassifierBusinessBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClassifierConsumerBatchIdRouteHandler: RouteHandler<
  typeof getClassifierConsumerBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
