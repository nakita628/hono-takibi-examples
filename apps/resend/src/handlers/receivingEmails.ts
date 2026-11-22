import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute,
  getEmailsReceivingEmailIdAttachmentsRoute,
  getEmailsReceivingEmailIdRoute,
  getEmailsReceivingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receivingEmailsHandler = app
  .openapi(getEmailsReceivingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsReceivingEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsReceivingEmailIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
