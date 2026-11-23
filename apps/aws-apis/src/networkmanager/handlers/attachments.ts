import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAttachmentsAttachmentIdRoute,
  getAttachmentsRoute,
  postAttachmentsAttachmentIdAcceptRoute,
  postAttachmentsAttachmentIdRejectRoute,
} from '../routes'

export const postAttachmentsAttachmentIdAcceptRouteHandler: RouteHandler<
  typeof postAttachmentsAttachmentIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentsRouteHandler: RouteHandler<typeof getAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAttachmentsAttachmentIdRejectRouteHandler: RouteHandler<
  typeof postAttachmentsAttachmentIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
