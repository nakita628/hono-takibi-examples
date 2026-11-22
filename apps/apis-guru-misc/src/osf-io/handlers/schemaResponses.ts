import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchemaResponsesSchemaResponseIdRoute,
  getSchemaResponsesIndexRoute,
  getSchemaResponsesSchemaResponseIdRoute,
  patchSchemaResponsesSchemaResponseIdRoute,
  postSchemaResponsesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemaResponsesHandler = app
  .openapi(getSchemaResponsesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaResponsesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSchemaResponsesSchemaResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSchemaResponsesSchemaResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
