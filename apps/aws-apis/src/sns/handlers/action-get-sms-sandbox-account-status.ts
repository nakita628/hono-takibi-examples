import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetSMSSandboxAccountStatusRoute,
  postActionGetSMSSandboxAccountStatusRoute,
} from '../routes'

export const getActionGetSMSSandboxAccountStatusRouteHandler: RouteHandler<
  typeof getActionGetSMSSandboxAccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSMSSandboxAccountStatusRouteHandler: RouteHandler<
  typeof postActionGetSMSSandboxAccountStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
