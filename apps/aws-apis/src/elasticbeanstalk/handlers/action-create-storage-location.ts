import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateStorageLocationRoute,
  postActionCreateStorageLocationRoute,
} from '../routes'

export const getActionCreateStorageLocationRouteHandler: RouteHandler<
  typeof getActionCreateStorageLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateStorageLocationRouteHandler: RouteHandler<
  typeof postActionCreateStorageLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
