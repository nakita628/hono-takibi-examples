import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSMSSandboxPhoneNumberRoute,
  postActionDeleteSMSSandboxPhoneNumberRoute,
} from '../routes'

export const getActionDeleteSMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof getActionDeleteSMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof postActionDeleteSMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
