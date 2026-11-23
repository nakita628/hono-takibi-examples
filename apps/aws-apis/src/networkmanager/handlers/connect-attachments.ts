import type { RouteHandler } from '@hono/zod-openapi'
import type { getConnectAttachmentsAttachmentIdRoute, postConnectAttachmentsRoute } from '../routes'

export const postConnectAttachmentsRouteHandler: RouteHandler<
  typeof postConnectAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getConnectAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
