import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetAccountSendingEnabledRoute,
  postActionGetAccountSendingEnabledRoute,
} from '../routes'

export const getActionGetAccountSendingEnabledRouteHandler: RouteHandler<
  typeof getActionGetAccountSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccountSendingEnabledRouteHandler: RouteHandler<
  typeof postActionGetAccountSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
