import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute,
  postOrgOrgIdIntegrationsIntegrationIdImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importProjectsHandler = app
  .openapi(postOrgOrgIdIntegrationsIntegrationIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdIntegrationsIntegrationIdImportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
