import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnrichmentEventEnrichmentsIdAssociationsRoute,
  deleteEnrichmentEventEnrichmentsIdRoute,
  getEnrichmentEventEnrichmentsDefaultRoute,
  getEnrichmentEventEnrichmentsIdAssociationsRoute,
  getEnrichmentEventEnrichmentsIdRoute,
  getEnrichmentEventEnrichmentsIdRulesRoute,
  getEnrichmentEventEnrichmentsRoute,
  postEnrichmentEventEnrichmentsIdAssociationsRoute,
  postEnrichmentEventEnrichmentsRoute,
  putEnrichmentEventEnrichmentsDefaultRoute,
  putEnrichmentEventEnrichmentsIdRoute,
  putEnrichmentEventEnrichmentsIdRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventEnrichmentsHandler = app
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
