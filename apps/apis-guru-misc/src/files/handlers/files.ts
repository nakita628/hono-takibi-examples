import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesPathRoute,
  getFilesPathRoute,
  patchFilesPathRoute,
  postFilesPathRoute,
} from '../routes'

export const deleteFilesPathRouteHandler: RouteHandler<typeof deleteFilesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesPathRouteHandler: RouteHandler<typeof getFilesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFilesPathRouteHandler: RouteHandler<typeof patchFilesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesPathRouteHandler: RouteHandler<typeof postFilesPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
