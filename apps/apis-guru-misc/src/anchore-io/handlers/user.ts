import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserCredentialsRoute, getUserRoute, postUserCredentialsRoute } from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserCredentialsRouteHandler: RouteHandler<typeof getUserCredentialsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserCredentialsRouteHandler: RouteHandler<
  typeof postUserCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
