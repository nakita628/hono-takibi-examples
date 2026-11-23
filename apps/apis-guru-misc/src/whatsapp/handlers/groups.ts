import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGroupsGroupIdAdminsRoute,
  deleteGroupsGroupIdIconRoute,
  deleteGroupsGroupIdInviteRoute,
  deleteGroupsGroupIdParticipantsRoute,
  getGroupsGroupIdIconRoute,
  getGroupsGroupIdInviteRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdAdminsRoute,
  postGroupsGroupIdIconRoute,
  postGroupsGroupIdLeaveRoute,
  postGroupsRoute,
  putGroupsGroupIdRoute,
} from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdRouteHandler: RouteHandler<typeof getGroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGroupsGroupIdRouteHandler: RouteHandler<typeof putGroupsGroupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteGroupsGroupIdAdminsRouteHandler: RouteHandler<
  typeof deleteGroupsGroupIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchGroupsGroupIdAdminsRouteHandler: RouteHandler<
  typeof patchGroupsGroupIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsGroupIdIconRouteHandler: RouteHandler<
  typeof deleteGroupsGroupIdIconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdIconRouteHandler: RouteHandler<
  typeof getGroupsGroupIdIconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsGroupIdIconRouteHandler: RouteHandler<
  typeof postGroupsGroupIdIconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsGroupIdInviteRouteHandler: RouteHandler<
  typeof deleteGroupsGroupIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsGroupIdInviteRouteHandler: RouteHandler<
  typeof getGroupsGroupIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGroupsGroupIdLeaveRouteHandler: RouteHandler<
  typeof postGroupsGroupIdLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGroupsGroupIdParticipantsRouteHandler: RouteHandler<
  typeof deleteGroupsGroupIdParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
