import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute,
  getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrationSchemaBlocksHandler = app
  .openapi(getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
