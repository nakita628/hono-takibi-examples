import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailsEmailIdAttachmentsAttachmentIdRoute,
  getEmailsEmailIdAttachmentsRoute,
  getEmailsEmailIdRoute,
  getEmailsMetricsRoute,
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute,
  getEmailsReceivingEmailIdAttachmentsRoute,
  getEmailsReceivingEmailIdRoute,
  getEmailsReceivingRoute,
  getEmailsRoute,
  patchEmailsEmailIdRoute,
  postEmailsBatchRoute,
  postEmailsEmailIdCancelRoute,
  postEmailsEmailIdShareRoute,
  postEmailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(postEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailsEmailIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailsEmailIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsEmailIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsEmailIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getEmailsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
