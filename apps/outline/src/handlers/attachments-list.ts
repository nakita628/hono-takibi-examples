import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachmentsListRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsListHandler = app.openapi(postAttachmentsListRoute, (c) => {
  throw new Error('Not implemented')
})
