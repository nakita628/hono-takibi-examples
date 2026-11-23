import type { RouteHandler } from '@hono/zod-openapi'
import type { getClientConfigureGetRoute, postClientConfigureSetRoute } from '../routes'

export const getClientConfigureGetRouteHandler: RouteHandler<
  typeof getClientConfigureGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientConfigureSetRouteHandler: RouteHandler<
  typeof postClientConfigureSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
