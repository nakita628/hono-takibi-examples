import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachmentsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsDeleteHandler = app.openapi(postAttachmentsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
