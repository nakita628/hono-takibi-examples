import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectClientSecretsIdRoute,
  getConnectApplicationsIdClientSecretsRoute,
  postConnectApplicationsIdClientSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationClientSecretsHandler = app
  .openapi(getConnectApplicationsIdClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectApplicationsIdClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectClientSecretsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
