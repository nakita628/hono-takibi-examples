import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBSecurityGroupRoute,
  postActionCreateDBSecurityGroupRoute,
} from '../routes'

export const getActionCreateDBSecurityGroupRouteHandler: RouteHandler<
  typeof getActionCreateDBSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBSecurityGroupRouteHandler: RouteHandler<
  typeof postActionCreateDBSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
