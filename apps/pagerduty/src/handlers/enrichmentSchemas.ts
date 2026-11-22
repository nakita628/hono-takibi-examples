import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnrichmentSchemasSchemaIdRecordsRecordIdRoute,
  deleteEnrichmentSchemasSchemaIdRoute,
  getEnrichmentSchemasRoute,
  getEnrichmentSchemasSchemaIdRecordsRoute,
  getEnrichmentSchemasSchemaIdRoute,
  postEnrichmentQueryRoute,
  postEnrichmentSchemasRoute,
  postEnrichmentSchemasSchemaIdRecordsRoute,
  putEnrichmentSchemasSchemaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrichmentSchemasHandler = app
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
