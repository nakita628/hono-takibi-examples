import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateDataShareConsumerRoute,
  postActionDisassociateDataShareConsumerRoute,
} from '../routes'

export const getActionDisassociateDataShareConsumerRouteHandler: RouteHandler<
  typeof getActionDisassociateDataShareConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateDataShareConsumerRouteHandler: RouteHandler<
  typeof postActionDisassociateDataShareConsumerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
