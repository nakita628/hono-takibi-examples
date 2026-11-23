import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateRestoreImageTaskRoute,
  postActionCreateRestoreImageTaskRoute,
} from '../routes'

export const getActionCreateRestoreImageTaskRouteHandler: RouteHandler<
  typeof getActionCreateRestoreImageTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateRestoreImageTaskRouteHandler: RouteHandler<
  typeof postActionCreateRestoreImageTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
