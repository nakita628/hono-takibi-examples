import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAttachmentsIdRoute, getAttachmentsIdRoute, putAttachmentsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(deleteAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
