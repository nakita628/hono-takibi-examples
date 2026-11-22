import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTemporaryGluePartitionCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const GetTemporaryGluePartitionCredentialsHandler = app.openapi(
  postGetTemporaryGluePartitionCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
