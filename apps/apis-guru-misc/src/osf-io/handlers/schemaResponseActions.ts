import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchemaResponsesSchemaResponseIdActionsIndexRoute,
  getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute,
  postSchemaResponsesSchemaResponseIdActionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemaResponseActionsHandler = app
  .openapi(getSchemaResponsesSchemaResponseIdActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaResponsesSchemaResponseIdActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
