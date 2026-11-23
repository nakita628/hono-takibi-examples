import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemporaryVolumeCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const temporaryVolumeCredentialsHandler = app.openapi(
  postTemporaryVolumeCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
