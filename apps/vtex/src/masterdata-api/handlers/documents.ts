import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAcronymDocumentsIdRoute,
  getApiDataentitiesAcronymDocumentsIdRoute,
  patchApiDataentitiesAcronymDocumentsIdRoute,
  patchApiDataentitiesAcronymDocumentsRoute,
  postApiDataentitiesAcronymDocumentsRoute,
  putApiDataentitiesAcronymDocumentsIdRoute,
  putApiDataentitiesAcronymDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
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
