import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesFileIdRoute,
  getFilesFileIdDownloadRoute,
  getFilesFileIdRoute,
  getFilesRoute,
  postFilesRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesFileIdRouteHandler: RouteHandler<typeof deleteFilesFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdRouteHandler: RouteHandler<typeof getFilesFileIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesFileIdDownloadRouteHandler: RouteHandler<
  typeof getFilesFileIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
