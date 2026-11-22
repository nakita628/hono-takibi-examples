import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeAttachmentsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
