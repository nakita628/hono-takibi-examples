import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAttachmentsAttachmentIdRoute, getAttachmentsRoute } from '../routes'

export const getAttachmentsRouteHandler: RouteHandler<typeof getAttachmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
