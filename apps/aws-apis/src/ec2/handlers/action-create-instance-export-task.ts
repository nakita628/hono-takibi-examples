import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateInstanceExportTaskRoute,
  postActionCreateInstanceExportTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateInstanceExportTaskHandler = app
  .openapi(getActionCreateInstanceExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateInstanceExportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
