import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminConfigDefaultsRoute,
  getAdminConfigRoute,
  getAdminConfigStorageTemplateRoute,
  postAdminConfigStorageTemplatePreviewRoute,
  putAdminConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configAdminHandler = app
  .openapi(getAdminConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigStorageTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStorageTemplatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
