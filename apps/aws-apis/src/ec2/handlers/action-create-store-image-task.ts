import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateStoreImageTaskRoute,
  postActionCreateStoreImageTaskRoute,
} from '../routes'

export const getActionCreateStoreImageTaskRouteHandler: RouteHandler<
  typeof getActionCreateStoreImageTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateStoreImageTaskRouteHandler: RouteHandler<
  typeof postActionCreateStoreImageTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
