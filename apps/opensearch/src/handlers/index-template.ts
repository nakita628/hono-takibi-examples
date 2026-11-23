import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexTemplateNameRoute,
  getIndexTemplateNameRoute,
  getIndexTemplateRoute,
  headIndexTemplateNameRoute,
  postIndexTemplateNameRoute,
  postIndexTemplateSimulateIndexNameRoute,
  postIndexTemplateSimulateNameRoute,
  postIndexTemplateSimulateRoute,
  putIndexTemplateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexTemplateHandler = app
  .openapi(getIndexTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateSimulateIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateSimulateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
