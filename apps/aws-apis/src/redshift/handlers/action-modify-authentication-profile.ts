import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyAuthenticationProfileRoute,
  postActionModifyAuthenticationProfileRoute,
} from '../routes'

export const getActionModifyAuthenticationProfileRouteHandler: RouteHandler<
  typeof getActionModifyAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyAuthenticationProfileRouteHandler: RouteHandler<
  typeof postActionModifyAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
