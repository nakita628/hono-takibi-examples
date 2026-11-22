import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SecretsIdOrNameRoute,
  getV3SecretsIdOrNameRoute,
  getV3SecretsRoute,
  patchV2SecretsNameRoute,
  postV2SecretsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(deleteV2SecretsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SecretsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SecretsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
