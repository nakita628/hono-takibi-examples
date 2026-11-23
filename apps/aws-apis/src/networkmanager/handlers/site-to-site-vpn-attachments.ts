import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSiteToSiteVpnAttachmentsAttachmentIdRoute,
  postSiteToSiteVpnAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const siteToSiteVpnAttachmentsHandler = app
  .openapi(postSiteToSiteVpnAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteToSiteVpnAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
