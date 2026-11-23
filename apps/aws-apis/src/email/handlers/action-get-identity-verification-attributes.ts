import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIdentityVerificationAttributesRoute,
  postActionGetIdentityVerificationAttributesRoute,
} from '../routes'

export const getActionGetIdentityVerificationAttributesRouteHandler: RouteHandler<
  typeof getActionGetIdentityVerificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIdentityVerificationAttributesRouteHandler: RouteHandler<
  typeof postActionGetIdentityVerificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
