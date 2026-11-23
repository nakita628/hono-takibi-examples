import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemporaryModelVersionCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const temporaryModelVersionCredentialsHandler = app.openapi(
  postTemporaryModelVersionCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
