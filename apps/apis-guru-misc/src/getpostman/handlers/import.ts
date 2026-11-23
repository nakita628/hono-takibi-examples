import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportExportedRoute, postImportOpenapiRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(postImportExportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
