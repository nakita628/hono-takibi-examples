import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttachmentsAttachmentGidRoute,
  getAttachmentsAttachmentGidRoute,
  getAttachmentsRoute,
  postAttachmentsRoute,
} from '../routes'

export const getAttachmentsAttachmentGidRouteHandler: RouteHandler<
  typeof getAttachmentsAttachmentGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttachmentsAttachmentGidRouteHandler: RouteHandler<
  typeof deleteAttachmentsAttachmentGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentsRouteHandler: RouteHandler<typeof getAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachmentsRouteHandler: RouteHandler<typeof postAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
