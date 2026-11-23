import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationsIntegrationIdRoute,
  getIntegrationsIndexRoute,
  getIntegrationsIntegrationIdActivateRoute,
  getIntegrationsIntegrationIdRoute,
  patchIntegrationsIntegrationIdRoute,
  postIntegrationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIntegrationsIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsIntegrationIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
