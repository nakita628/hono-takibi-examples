import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretsIdRoute,
  getSecretsCountRoute,
  getSecretsIdRoute,
  getSecretsRoute,
  postSecretsRoute,
  putSecretsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
