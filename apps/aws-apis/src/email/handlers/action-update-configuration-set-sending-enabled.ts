import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateConfigurationSetSendingEnabledRoute,
  postActionUpdateConfigurationSetSendingEnabledRoute,
} from '../routes'

export const getActionUpdateConfigurationSetSendingEnabledRouteHandler: RouteHandler<
  typeof getActionUpdateConfigurationSetSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateConfigurationSetSendingEnabledRouteHandler: RouteHandler<
  typeof postActionUpdateConfigurationSetSendingEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
