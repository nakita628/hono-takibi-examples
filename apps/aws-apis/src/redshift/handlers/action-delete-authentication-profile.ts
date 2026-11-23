import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteAuthenticationProfileRoute,
  postActionDeleteAuthenticationProfileRoute,
} from '../routes'

export const getActionDeleteAuthenticationProfileRouteHandler: RouteHandler<
  typeof getActionDeleteAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAuthenticationProfileRouteHandler: RouteHandler<
  typeof postActionDeleteAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
