import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccount1PushuriRoute, postAccount2VerifyRoute } from '../routes'

export const postAccount1PushuriRouteHandler: RouteHandler<
  typeof postAccount1PushuriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccount2VerifyRouteHandler: RouteHandler<typeof postAccount2VerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
