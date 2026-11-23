import { OpenAPIHono } from '@hono/zod-openapi'
import { postAttachmentsCreateFromUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsCreateFromUrlHandler = app.openapi(
  postAttachmentsCreateFromUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
