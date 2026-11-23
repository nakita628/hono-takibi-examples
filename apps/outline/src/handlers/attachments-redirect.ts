import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachmentsRedirectRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsRedirectHandler = app.openapi(postAttachmentsRedirectRoute, (c) => {
  throw new Error('Not implemented')
})
