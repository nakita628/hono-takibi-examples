import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTrashEmptyRoute,
  postTrashRestoreRoute,
  postTrashRestoreAssetsRoute,
} from '../routes'

export const postTrashEmptyRouteHandler: RouteHandler<typeof postTrashEmptyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTrashRestoreRouteHandler: RouteHandler<typeof postTrashRestoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTrashRestoreAssetsRouteHandler: RouteHandler<
  typeof postTrashRestoreAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
