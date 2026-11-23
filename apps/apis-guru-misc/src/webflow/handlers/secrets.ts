import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretsSecretIdRoute,
  getSecretsRoute,
  optionsSecretsRoute,
  optionsSecretsSecretIdRoute,
  patchSecretsSecretIdRoute,
  postSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecretsSecretIdRoute, (c) => {
    throw new Error('Not implemented')
  })
