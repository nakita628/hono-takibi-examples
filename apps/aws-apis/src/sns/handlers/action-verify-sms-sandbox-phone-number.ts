import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionVerifySMSSandboxPhoneNumberRoute,
  postActionVerifySMSSandboxPhoneNumberRoute,
} from '../routes'

export const getActionVerifySMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof getActionVerifySMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionVerifySMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof postActionVerifySMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
