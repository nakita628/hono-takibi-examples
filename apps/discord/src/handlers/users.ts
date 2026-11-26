import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersMeRoute,
  patchUsersMeRoute,
  getUsersMeApplicationsApplicationIdEntitlementsRoute,
  getUsersMeApplicationsApplicationIdRoleConnectionRoute,
  putUsersMeApplicationsApplicationIdRoleConnectionRoute,
  deleteUsersMeApplicationsApplicationIdRoleConnectionRoute,
  postUsersMeChannelsRoute,
  getUsersMeConnectionsRoute,
  getUsersMeGuildsRoute,
  deleteUsersMeGuildsGuildIdRoute,
  getUsersMeGuildsGuildIdMemberRoute,
  getUsersUserIdRoute,
} from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersMeRouteHandler: RouteHandler<typeof patchUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeApplicationsApplicationIdEntitlementsRouteHandler: RouteHandler<
  typeof getUsersMeApplicationsApplicationIdEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeApplicationsApplicationIdRoleConnectionRouteHandler: RouteHandler<
  typeof getUsersMeApplicationsApplicationIdRoleConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersMeApplicationsApplicationIdRoleConnectionRouteHandler: RouteHandler<
  typeof putUsersMeApplicationsApplicationIdRoleConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersMeApplicationsApplicationIdRoleConnectionRouteHandler: RouteHandler<
  typeof deleteUsersMeApplicationsApplicationIdRoleConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersMeChannelsRouteHandler: RouteHandler<
  typeof postUsersMeChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeConnectionsRouteHandler: RouteHandler<
  typeof getUsersMeConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeGuildsRouteHandler: RouteHandler<typeof getUsersMeGuildsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUsersMeGuildsGuildIdRouteHandler: RouteHandler<
  typeof deleteUsersMeGuildsGuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeGuildsGuildIdMemberRouteHandler: RouteHandler<
  typeof getUsersMeGuildsGuildIdMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
