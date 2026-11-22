import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1AuthStreamSecretRoute, postV1AuthStreamSecretRotateRoute } from '../routes'

export const getV1AuthStreamSecretRouteHandler: RouteHandler<
  typeof getV1AuthStreamSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AuthStreamSecretRotateRouteHandler: RouteHandler<
  typeof postV1AuthStreamSecretRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
