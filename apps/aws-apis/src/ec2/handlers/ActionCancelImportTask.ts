import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelImportTaskRoute, postActionCancelImportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCancelImportTaskHandler = app
  .openapi(getActionCancelImportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelImportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
