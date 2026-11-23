import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTemporaryGlueTableCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const getTemporaryGlueTableCredentialsHandler = app.openapi(
  postGetTemporaryGlueTableCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
