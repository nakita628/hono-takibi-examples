import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2CredentialsSecretsRoute } from '../routes'

const app = new OpenAPIHono()

export const clientCredentialsHandler = app.openapi(postV2CredentialsSecretsRoute, (c) => {
  throw new Error('Not implemented')
})
