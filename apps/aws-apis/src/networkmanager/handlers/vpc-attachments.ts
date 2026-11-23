import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVpcAttachmentsAttachmentIdRoute,
  patchVpcAttachmentsAttachmentIdRoute,
  postVpcAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vpcAttachmentsHandler = app
  .openapi(postVpcAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVpcAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVpcAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
