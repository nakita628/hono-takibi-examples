import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretsSecretIDRoute,
  getSecretsRoute,
  getSecretsSecretIDRoute,
  postSecretsRoute,
  postSecretsSecretIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsSecretIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsSecretIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretsSecretIDRoute, (c) => {
    throw new Error('Not implemented')
  })
