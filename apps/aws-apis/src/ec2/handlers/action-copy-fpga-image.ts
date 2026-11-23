import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCopyFpgaImageRoute, postActionCopyFpgaImageRoute } from '../routes'

export const getActionCopyFpgaImageRouteHandler: RouteHandler<
  typeof getActionCopyFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyFpgaImageRouteHandler: RouteHandler<
  typeof postActionCopyFpgaImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
