import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemporaryPathCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const temporaryPathCredentialsHandler = app.openapi(
  postTemporaryPathCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
