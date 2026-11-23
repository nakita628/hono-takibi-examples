import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateAccountSendingEnabledRoute,
  postActionUpdateAccountSendingEnabledRoute,
} from '../routes'

export const getActionUpdateAccountSendingEnabledRouteHandler: RouteHandler<
  typeof getActionUpdateAccountSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAccountSendingEnabledRouteHandler: RouteHandler<
  typeof postActionUpdateAccountSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
