import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDataentitiesDataEntityNameDocumentsIdVersionsRoute,
  getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute,
  putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(getApiDataentitiesDataEntityNameDocumentsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
