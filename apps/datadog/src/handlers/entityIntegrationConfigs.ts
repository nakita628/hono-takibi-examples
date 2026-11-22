import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IdpEntityIntegrationsIntegrationIdRoute,
  getApiV2IdpEntityIntegrationsIntegrationIdRoute,
  putApiV2IdpEntityIntegrationsIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entityIntegrationConfigsHandler = app
  .openapi(deleteApiV2IdpEntityIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IdpEntityIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2IdpEntityIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
