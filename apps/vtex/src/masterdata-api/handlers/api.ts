import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAcronymDocumentsIdRoute,
  deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute,
  getApiDataentitiesAcronymDocumentsIdRoute,
  getApiDataentitiesAcronymDocumentsIdVersionsRoute,
  getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
  getApiDataentitiesAcronymRoute,
  getApiDataentitiesAcronymScrollRoute,
  getApiDataentitiesAcronymSearchRoute,
  getApiDataentitiesRoute,
  patchApiDataentitiesAcronymDocumentsIdRoute,
  patchApiDataentitiesAcronymDocumentsRoute,
  postApiDataentitiesAcronymDocumentsIdClustersRoute,
  postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute,
  postApiDataentitiesAcronymDocumentsRoute,
  putApiDataentitiesAcronymDocumentsIdRoute,
  putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  putApiDataentitiesAcronymDocumentsIdScoreRoute,
  putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
  putApiDataentitiesAcronymDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiDataentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesAcronymDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesAcronymDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesAcronymDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesAcronymDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesAcronymDocumentsIdClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdScoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
