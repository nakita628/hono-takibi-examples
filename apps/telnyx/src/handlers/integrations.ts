import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiIntegrationsConnectionsUserConnectionIdRoute,
  getAiIntegrationsConnectionsRoute,
  getAiIntegrationsConnectionsUserConnectionIdRoute,
  getAiIntegrationsIntegrationIdRoute,
  getAiIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getAiIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiIntegrationsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiIntegrationsConnectionsUserConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiIntegrationsConnectionsUserConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
