import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSecretsAccountKindIdentifierRoute,
  getSecretsRoute,
  postSecretsAccountKindIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
