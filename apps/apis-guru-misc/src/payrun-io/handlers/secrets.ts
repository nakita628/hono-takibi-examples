import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecretsRoute, postSecretsRoute } from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
