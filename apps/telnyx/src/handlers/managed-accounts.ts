import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getManagedAccountsAllocatableGlobalOutboundChannelsRoute,
  getManagedAccountsIdRoute,
  getManagedAccountsRoute,
  patchManagedAccountsIdRoute,
  patchManagedAccountsIdUpdateGlobalChannelLimitRoute,
  postManagedAccountsIdActionsDisableRoute,
  postManagedAccountsIdActionsEnableRoute,
  postManagedAccountsRoute,
} from '../routes'

export const getManagedAccountsRouteHandler: RouteHandler<typeof getManagedAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postManagedAccountsRouteHandler: RouteHandler<
  typeof postManagedAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagedAccountsAllocatableGlobalOutboundChannelsRouteHandler: RouteHandler<
  typeof getManagedAccountsAllocatableGlobalOutboundChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagedAccountsIdRouteHandler: RouteHandler<
  typeof getManagedAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagedAccountsIdRouteHandler: RouteHandler<
  typeof patchManagedAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagedAccountsIdActionsDisableRouteHandler: RouteHandler<
  typeof postManagedAccountsIdActionsDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postManagedAccountsIdActionsEnableRouteHandler: RouteHandler<
  typeof postManagedAccountsIdActionsEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchManagedAccountsIdUpdateGlobalChannelLimitRouteHandler: RouteHandler<
  typeof patchManagedAccountsIdUpdateGlobalChannelLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}
