import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelExportTaskRoute, postActionCancelExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCancelExportTaskHandler = app
  .openapi(getActionCancelExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
