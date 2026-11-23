import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVpcAttachmentsAttachmentIdRoute,
  patchVpcAttachmentsAttachmentIdRoute,
  postVpcAttachmentsRoute,
} from '../routes'

export const postVpcAttachmentsRouteHandler: RouteHandler<typeof postVpcAttachmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVpcAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getVpcAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVpcAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof patchVpcAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
