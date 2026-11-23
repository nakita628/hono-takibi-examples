import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegistrationVerifyRoute, postRegistrationRoute } from '../routes'

export const postRegistrationRouteHandler: RouteHandler<typeof postRegistrationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRegistrationVerifyRouteHandler: RouteHandler<
  typeof getRegistrationVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
