import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthGetRoute, postAuthVerifyRoute } from '../routes'

export const postAuthGetRouteHandler: RouteHandler<typeof postAuthGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthVerifyRouteHandler: RouteHandler<typeof postAuthVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
