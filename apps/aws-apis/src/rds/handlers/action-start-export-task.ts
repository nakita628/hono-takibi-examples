import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartExportTaskRoute, postActionStartExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStartExportTaskHandler = app
  .openapi(getActionStartExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
