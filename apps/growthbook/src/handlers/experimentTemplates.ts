import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ExperimentTemplatesIdRoute,
  getV1ExperimentTemplatesIdRoute,
  getV1ExperimentTemplatesRoute,
  postV1ExperimentTemplatesBulkImportRoute,
  postV1ExperimentTemplatesRoute,
  putV1ExperimentTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentTemplatesHandler = app
  .openapi(getV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ExperimentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExperimentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExperimentTemplatesBulkImportRoute, (c) => {
    throw new Error('Not implemented')
  })
