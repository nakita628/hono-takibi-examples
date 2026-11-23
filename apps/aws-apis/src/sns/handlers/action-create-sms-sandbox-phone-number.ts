import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSMSSandboxPhoneNumberRoute,
  postActionCreateSMSSandboxPhoneNumberRoute,
} from '../routes'

export const getActionCreateSMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof getActionCreateSMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSMSSandboxPhoneNumberRouteHandler: RouteHandler<
  typeof postActionCreateSMSSandboxPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
