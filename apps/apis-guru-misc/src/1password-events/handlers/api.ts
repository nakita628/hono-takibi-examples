import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiAuthIntrospectRoute,
  postApiV1ItemusagesRoute,
  postApiV1SigninattemptsRoute,
} from '../routes'

export const getApiAuthIntrospectRouteHandler: RouteHandler<
  typeof getApiAuthIntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ItemusagesRouteHandler: RouteHandler<
  typeof postApiV1ItemusagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SigninattemptsRouteHandler: RouteHandler<
  typeof postApiV1SigninattemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
