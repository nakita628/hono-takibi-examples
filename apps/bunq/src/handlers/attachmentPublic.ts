import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttachmentPublicItemIdRoute, postAttachmentPublicRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentPublicHandler = app
  .openapi(postAttachmentPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentPublicItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
