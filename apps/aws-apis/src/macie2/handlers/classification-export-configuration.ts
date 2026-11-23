import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClassificationExportConfigurationRoute,
  putClassificationExportConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationExportConfigurationHandler = app
  .openapi(getClassificationExportConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putClassificationExportConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
