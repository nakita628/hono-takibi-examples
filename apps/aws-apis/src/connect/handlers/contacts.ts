import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContactsInstanceIdContactIdRoute,
  postContactsInstanceIdContactIdRoute,
} from '../routes'

export const getContactsInstanceIdContactIdRouteHandler: RouteHandler<
  typeof getContactsInstanceIdContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactsInstanceIdContactIdRouteHandler: RouteHandler<
  typeof postContactsInstanceIdContactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
