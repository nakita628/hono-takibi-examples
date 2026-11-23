import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSiteToSiteVpnAttachmentsAttachmentIdRoute,
  postSiteToSiteVpnAttachmentsRoute,
} from '../routes'

export const postSiteToSiteVpnAttachmentsRouteHandler: RouteHandler<
  typeof postSiteToSiteVpnAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSiteToSiteVpnAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getSiteToSiteVpnAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
