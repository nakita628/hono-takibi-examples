import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDeviceInvitesDeviceInviteIdRoute,
  getDeviceInvitesDeviceInviteIdRoute,
  postDeviceInvitesDashAcceptRoute,
  postDeviceInvitesDeviceInviteIdResendRoute,
} from '../routes'

export const getDeviceInvitesDeviceInviteIdRouteHandler: RouteHandler<
  typeof getDeviceInvitesDeviceInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDeviceInvitesDeviceInviteIdRouteHandler: RouteHandler<
  typeof deleteDeviceInvitesDeviceInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeviceInvitesDeviceInviteIdResendRouteHandler: RouteHandler<
  typeof postDeviceInvitesDeviceInviteIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeviceInvitesDashAcceptRouteHandler: RouteHandler<
  typeof postDeviceInvitesDashAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
