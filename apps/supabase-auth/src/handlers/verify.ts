import type { RouteHandler } from '@hono/zod-openapi'
import type { getVerifyRoute, postVerifyRoute } from '../routes'

export const getVerifyRouteHandler: RouteHandler<typeof getVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVerifyRouteHandler: RouteHandler<typeof postVerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
