import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachmentsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsCreateHandler = app.openapi(postAttachmentsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
