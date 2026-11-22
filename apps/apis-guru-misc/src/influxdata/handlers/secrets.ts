import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrgsOrgIDSecretsRoute,
  patchOrgsOrgIDSecretsRoute,
  postOrgsOrgIDSecretsDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getOrgsOrgIDSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIDSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDSecretsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
