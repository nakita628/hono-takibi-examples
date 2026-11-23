import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListSMSSandboxPhoneNumbersRoute,
  postActionListSMSSandboxPhoneNumbersRoute,
} from '../routes'

export const getActionListSMSSandboxPhoneNumbersRouteHandler: RouteHandler<
  typeof getActionListSMSSandboxPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSMSSandboxPhoneNumbersRouteHandler: RouteHandler<
  typeof postActionListSMSSandboxPhoneNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
