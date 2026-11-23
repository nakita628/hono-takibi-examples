import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateFpgaImageRoute, postActionCreateFpgaImageRoute } from '../routes'

export const getActionCreateFpgaImageRouteHandler: RouteHandler<
  typeof getActionCreateFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateFpgaImageRouteHandler: RouteHandler<
  typeof postActionCreateFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
