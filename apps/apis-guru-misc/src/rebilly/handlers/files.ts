import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFilesIdRoute,
  getFilesIdDownloadExtensionRoute,
  getFilesIdDownloadRoute,
  getFilesIdRoute,
  getFilesRoute,
  postFilesRoute,
  putFilesIdRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFilesIdRouteHandler: RouteHandler<typeof deleteFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesIdRouteHandler: RouteHandler<typeof getFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFilesIdRouteHandler: RouteHandler<typeof putFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesIdDownloadRouteHandler: RouteHandler<typeof getFilesIdDownloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilesIdDownloadExtensionRouteHandler: RouteHandler<
  typeof getFilesIdDownloadExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
