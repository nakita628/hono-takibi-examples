import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAddressDocumentsIdRoute,
  deleteApiDataentitiesClientDocumentsIdRoute,
  deleteApiDataentitiesDataEntityNameDocumentsIdRoute,
  deleteApiDataentitiesDataEntityNameIndicesIndexNameRoute,
  deleteApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
  getApiDataentitiesDataEntityNameDocumentsIdRoute,
  getApiDataentitiesDataEntityNameDocumentsIdVersionsRoute,
  getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute,
  getApiDataentitiesDataEntityNameIndicesIndexNameRoute,
  getApiDataentitiesDataEntityNameIndicesRoute,
  getApiDataentitiesDataEntityNameSchemasRoute,
  getApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
  getApiDataentitiesDataEntityNameScrollRoute,
  getApiDataentitiesDataEntityNameSearchRoute,
  patchApiDataentitiesAddressDocumentsIdRoute,
  patchApiDataentitiesClientDocumentsIdRoute,
  patchApiDataentitiesDataEntityNameDocumentsIdRoute,
  patchApiDataentitiesDataEntityNameDocumentsRoute,
  postApiDataentitiesAddressDocumentsRoute,
  postApiDataentitiesClientDocumentsRoute,
  postApiDataentitiesDataEntityNameDocumentsIdClustersRoute,
  postApiDataentitiesDataEntityNameDocumentsRoute,
  putApiDataentitiesDataEntityNameDocumentsIdRoute,
  putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute,
  putApiDataentitiesDataEntityNameIndicesRoute,
  putApiDataentitiesDataEntityNameSchemasSchemaNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiDataentitiesAddressDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesAddressDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesAddressDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesClientDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesClientDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesClientDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesDataEntityNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesDataEntityNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesDataEntityNameDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesDataEntityNameDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesDataEntityNameDocumentsIdClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameDocumentsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesDataEntityNameIndicesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameIndicesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameSchemasSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
