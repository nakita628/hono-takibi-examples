import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOwnersOwnerIdMembersUserIdRoute,
  getOwnersOwnerIdAuditLogsRoute,
  getOwnersOwnerIdMembersRoute,
  getOwnersOwnerIdRoute,
  getOwnersRoute,
  patchOwnersOwnerIdMembersUserIdRoute,
} from '../routes'

export const patchOwnersOwnerIdMembersUserIdRouteHandler: RouteHandler<
  typeof patchOwnersOwnerIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOwnersOwnerIdMembersUserIdRouteHandler: RouteHandler<
  typeof deleteOwnersOwnerIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOwnersRouteHandler: RouteHandler<typeof getOwnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOwnersOwnerIdRouteHandler: RouteHandler<typeof getOwnersOwnerIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOwnersOwnerIdMembersRouteHandler: RouteHandler<
  typeof getOwnersOwnerIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOwnersOwnerIdAuditLogsRouteHandler: RouteHandler<
  typeof getOwnersOwnerIdAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
