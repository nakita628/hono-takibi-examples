import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListImagesInRecycleBinRoute,
  postActionListImagesInRecycleBinRoute,
} from '../routes'

export const getActionListImagesInRecycleBinRouteHandler: RouteHandler<
  typeof getActionListImagesInRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListImagesInRecycleBinRouteHandler: RouteHandler<
  typeof postActionListImagesInRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}
