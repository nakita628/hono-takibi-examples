import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationSecretsIdRoute,
  getIntegrationSecretsRoute,
  postIntegrationSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationSecretsHandler = app
  .openapi(getIntegrationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
