import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1SecretsRoute } from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app.openapi(putV1SecretsRoute, (c) => {
  throw new Error('Not implemented')
})
