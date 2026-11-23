import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnrichmentEventEnrichmentsIdAssociationsRoute,
  deleteEnrichmentEventEnrichmentsIdRoute,
  deleteEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  deleteEnrichmentIntegrationsServicenowIntegrationIdRoute,
  deleteEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute,
  deleteEnrichmentSchemasSchemaIdRecordsRecordIdRoute,
  deleteEnrichmentSchemasSchemaIdRoute,
  getEnrichmentEventEnrichmentsDefaultRoute,
  getEnrichmentEventEnrichmentsIdAssociationsRoute,
  getEnrichmentEventEnrichmentsIdRoute,
  getEnrichmentEventEnrichmentsIdRulesRoute,
  getEnrichmentEventEnrichmentsRoute,
  getEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  getEnrichmentIntegrationsServicenowIntegrationIdRoute,
  getEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdTestRoute,
  getEnrichmentIntegrationsServicenowRoute,
  getEnrichmentSchemasRoute,
  getEnrichmentSchemasSchemaIdRecordsRoute,
  getEnrichmentSchemasSchemaIdRoute,
  postEnrichmentEventEnrichmentsIdAssociationsRoute,
  postEnrichmentEventEnrichmentsRoute,
  postEnrichmentIntegrationsServicenowCredentialsRoute,
  postEnrichmentIntegrationsServicenowIntegrationIdTablesRoute,
  postEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdEnableRoute,
  postEnrichmentIntegrationsServicenowRoute,
  postEnrichmentQueryRoute,
  postEnrichmentSchemasRoute,
  postEnrichmentSchemasSchemaIdRecordsRoute,
  putEnrichmentEventEnrichmentsDefaultRoute,
  putEnrichmentEventEnrichmentsIdRoute,
  putEnrichmentEventEnrichmentsIdRulesRoute,
  putEnrichmentIntegrationsServicenowCredentialsCredentialsIdRoute,
  putEnrichmentIntegrationsServicenowIntegrationIdTablesTableIdRoute,
  putEnrichmentSchemasSchemaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrichmentHandler = app
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
  .openapi(postEnrichmentQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentSchemasSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentSchemasSchemaIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentSchemasSchemaIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentSchemasSchemaIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentEventEnrichmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentEventEnrichmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentEventEnrichmentsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentEventEnrichmentsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentEventEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentEventEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentEventEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentEventEnrichmentsIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentEventEnrichmentsIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichmentEventEnrichmentsIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichmentEventEnrichmentsIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichmentEventEnrichmentsIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
