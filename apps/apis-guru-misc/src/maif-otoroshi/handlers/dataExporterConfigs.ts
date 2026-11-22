import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataExporterConfigsBulkRoute,
  deleteApiDataExporterConfigsDataExporterConfigIdRoute,
  getApiDataExporterConfigsDataExporterConfigIdRoute,
  getApiDataExporterConfigsRoute,
  getApiDataExporterConfigsTemplateRoute,
  patchApiDataExporterConfigsBulkRoute,
  patchApiDataExporterConfigsDataExporterConfigIdRoute,
  postApiDataExporterConfigsBulkRoute,
  postApiDataExporterConfigsRoute,
  putApiDataExporterConfigsBulkRoute,
  putApiDataExporterConfigsDataExporterConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataExporterConfigsHandler = app
  .openapi(getApiDataExporterConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataExporterConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataExporterConfigsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataExporterConfigsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataExporterConfigsDataExporterConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
