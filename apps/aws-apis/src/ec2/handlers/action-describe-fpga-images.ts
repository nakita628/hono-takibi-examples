import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeFpgaImagesRoute, postActionDescribeFpgaImagesRoute } from '../routes'

export const getActionDescribeFpgaImagesRouteHandler: RouteHandler<
  typeof getActionDescribeFpgaImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFpgaImagesRouteHandler: RouteHandler<
  typeof postActionDescribeFpgaImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
