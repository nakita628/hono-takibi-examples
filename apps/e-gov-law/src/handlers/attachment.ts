import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttachmentLawRevisionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentHandler = app.openapi(getAttachmentLawRevisionIdRoute, (c) => {
  throw new Error('Not implemented')
})
