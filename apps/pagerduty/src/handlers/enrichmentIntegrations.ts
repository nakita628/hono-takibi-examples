import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  deleteEnrichmentIntegrationsServicenowIntegrationIdRoute,
  deleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute,
  getEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  getEnrichmentIntegrationsServicenowIntegrationIdRoute,
  getEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestRoute,
  getEnrichmentIntegrationsServicenowRoute,
  postEnrichmentIntegrationsServicenowCredentialsRoute,
  postEnrichmentIntegrationsServicenowIntegrationIdTablesRoute,
  postEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnableRoute,
  postEnrichmentIntegrationsServicenowRoute,
  putEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  putEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrichmentIntegrationsHandler = app
  .openapi(getEnrichmentIntegrationsServicenowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentIntegrationsServicenowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentIntegrationsServicenowIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentIntegrationsServicenowIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentIntegrationsServicenowIntegrationIdTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentIntegrationsServicenowCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
