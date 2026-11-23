import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsRoute,
  getDisputesIdRoute,
  getDisputesRoute,
  patchDisputesIdRoute,
  postDisputesDisputeIdAttachmentsRoute,
  postDisputesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesDisputeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesDisputeIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesDisputeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDisputesDisputeIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDisputesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
