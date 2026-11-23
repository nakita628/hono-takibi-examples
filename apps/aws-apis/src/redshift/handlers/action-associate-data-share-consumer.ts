import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateDataShareConsumerRoute,
  postActionAssociateDataShareConsumerRoute,
} from '../routes'

export const getActionAssociateDataShareConsumerRouteHandler: RouteHandler<
  typeof getActionAssociateDataShareConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateDataShareConsumerRouteHandler: RouteHandler<
  typeof postActionAssociateDataShareConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
