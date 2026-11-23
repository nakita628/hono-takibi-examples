import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFilesByIdOrUrlRoute,
  getFilesDownloadRoute,
  getFilesRoute,
  postFilesRoute,
  postFilesUrlRoute,
} from '../routes'

export const getFilesRouteHandler: RouteHandler<typeof getFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFilesRouteHandler: RouteHandler<typeof postFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFilesByIdOrUrlRouteHandler: RouteHandler<typeof getFilesByIdOrUrlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFilesDownloadRouteHandler: RouteHandler<typeof getFilesDownloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFilesUrlRouteHandler: RouteHandler<typeof postFilesUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}
