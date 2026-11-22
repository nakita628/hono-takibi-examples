import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SecretsSecretIdRoute,
  getApiV1SecretsRoute,
  postApiV1SecretsRoute,
  putApiV1SecretsSecretIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getApiV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
