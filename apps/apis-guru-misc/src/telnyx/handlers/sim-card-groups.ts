import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSimCardGroupsIdRoute,
  getSimCardGroupsIdRoute,
  getSimCardGroupsRoute,
  patchSimCardGroupsIdRoute,
  postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute,
  postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute,
  postSimCardGroupsRoute,
} from '../routes'

export const getSimCardGroupsRouteHandler: RouteHandler<typeof getSimCardGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSimCardGroupsRouteHandler: RouteHandler<typeof postSimCardGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSimCardGroupsIdRouteHandler: RouteHandler<
  typeof deleteSimCardGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimCardGroupsIdRouteHandler: RouteHandler<typeof getSimCardGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchSimCardGroupsIdRouteHandler: RouteHandler<
  typeof patchSimCardGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRouteHandler: RouteHandler<
  typeof postSimCardGroupsIdActionsRemovePrivateWirelessGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimCardGroupsIdActionsSetPrivateWirelessGatewayRouteHandler: RouteHandler<
  typeof postSimCardGroupsIdActionsSetPrivateWirelessGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
