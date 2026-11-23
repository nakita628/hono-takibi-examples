import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateAuthenticationProfileRoute,
  postActionCreateAuthenticationProfileRoute,
} from '../routes'

export const getActionCreateAuthenticationProfileRouteHandler: RouteHandler<
  typeof getActionCreateAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateAuthenticationProfileRouteHandler: RouteHandler<
  typeof postActionCreateAuthenticationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
