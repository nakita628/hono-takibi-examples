import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesDataEntityNameDocumentsIdRoute,
  getApiDataentitiesDataEntityNameDocumentsIdRoute,
  patchApiDataentitiesDataEntityNameDocumentsIdRoute,
  patchApiDataentitiesDataEntityNameDocumentsRoute,
  postApiDataentitiesDataEntityNameDocumentsRoute,
  putApiDataentitiesDataEntityNameDocumentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
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
