import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssumeRoleWithWebIdentityRoute,
  postActionAssumeRoleWithWebIdentityRoute,
} from '../routes'

export const getActionAssumeRoleWithWebIdentityRouteHandler: RouteHandler<
  typeof getActionAssumeRoleWithWebIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssumeRoleWithWebIdentityRouteHandler: RouteHandler<
  typeof postActionAssumeRoleWithWebIdentityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
