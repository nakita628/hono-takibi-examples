import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiAdminFeaturesBatchExportRoute,
  postApiAdminFeaturesBatchImportRoute,
  postApiAdminFeaturesBatchValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importExportHandler = app
  .openapi(postApiAdminFeaturesBatchExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesBatchValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesBatchImportRoute, (c) => {
    throw new Error('Not implemented')
  })
