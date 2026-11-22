import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDataentitiesAcronymDocumentsIdVersionsRoute,
  getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
  putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(getApiDataentitiesAcronymDocumentsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
