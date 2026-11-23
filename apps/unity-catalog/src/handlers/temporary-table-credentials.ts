import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemporaryTableCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const temporaryTableCredentialsHandler = app.openapi(
  postTemporaryTableCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
