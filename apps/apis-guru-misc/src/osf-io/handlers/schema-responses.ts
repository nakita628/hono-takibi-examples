import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSchemaResponsesSchemaResponseIdRoute,
  getSchemaResponsesIndexRoute,
  getSchemaResponsesSchemaResponseIdActionsIndexRoute,
  getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute,
  getSchemaResponsesSchemaResponseIdRoute,
  getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute,
  getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute,
  patchSchemaResponsesSchemaResponseIdRoute,
  postSchemaResponsesIndexRoute,
  postSchemaResponsesSchemaResponseIdActionsIndexRoute,
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
  .openapi(getSchemaResponsesSchemaResponseIdActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSchemaResponsesSchemaResponseIdActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdSchemaBlocksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
