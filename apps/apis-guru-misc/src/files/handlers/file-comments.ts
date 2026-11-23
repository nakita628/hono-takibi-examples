import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFileCommentsIdRoute,
  getFileCommentsFilesPathRoute,
  patchFileCommentsIdRoute,
  postFileCommentsRoute,
} from '../routes'

export const postFileCommentsRouteHandler: RouteHandler<typeof postFileCommentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFileCommentsFilesPathRouteHandler: RouteHandler<
  typeof getFileCommentsFilesPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFileCommentsIdRouteHandler: RouteHandler<
  typeof deleteFileCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFileCommentsIdRouteHandler: RouteHandler<
  typeof patchFileCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
