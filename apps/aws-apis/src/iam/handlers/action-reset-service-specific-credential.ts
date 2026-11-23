import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetServiceSpecificCredentialRoute,
  postActionResetServiceSpecificCredentialRoute,
} from '../routes'

export const getActionResetServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof getActionResetServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetServiceSpecificCredentialRouteHandler: RouteHandler<
  typeof postActionResetServiceSpecificCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
