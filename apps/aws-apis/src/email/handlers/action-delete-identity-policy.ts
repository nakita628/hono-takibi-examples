import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteIdentityPolicyRoute,
  postActionDeleteIdentityPolicyRoute,
} from '../routes'

export const getActionDeleteIdentityPolicyRouteHandler: RouteHandler<
  typeof getActionDeleteIdentityPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIdentityPolicyRouteHandler: RouteHandler<
  typeof postActionDeleteIdentityPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
