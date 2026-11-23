import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteFpgaImageRoute, postActionDeleteFpgaImageRoute } from '../routes'

export const getActionDeleteFpgaImageRouteHandler: RouteHandler<
  typeof getActionDeleteFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteFpgaImageRouteHandler: RouteHandler<
  typeof postActionDeleteFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
