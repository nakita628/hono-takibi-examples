import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyEmailRoute, putVerifyEmailRoute } from '../routes'

export const postVerifyEmailRouteHandler: RouteHandler<typeof postVerifyEmailRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVerifyEmailRouteHandler: RouteHandler<typeof putVerifyEmailRoute> = async (c) => {
  throw new Error('Not implemented')
}
