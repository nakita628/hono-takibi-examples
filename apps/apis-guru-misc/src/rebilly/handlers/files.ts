import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttachmentsIdRoute,
  deleteFilesIdRoute,
  getAttachmentsIdRoute,
  getAttachmentsRoute,
  getFilesIdDownloadExtensionRoute,
  getFilesIdDownloadRoute,
  getFilesIdRoute,
  getFilesRoute,
  postAttachmentsRoute,
  postFilesRoute,
  putAttachmentsIdRoute,
  putFilesIdRoute,
} from '../routes'

export const getAttachmentsRouteHandler: RouteHandler<typeof getAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachmentsRouteHandler: RouteHandler<typeof postAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttachmentsIdRouteHandler: RouteHandler<
  typeof deleteAttachmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentsIdRouteHandler: RouteHandler<typeof getAttachmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAttachmentsIdRouteHandler: RouteHandler<typeof putAttachmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

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
