import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmExports202609ExportAsyncTasksTaskIdStatusRoute,
  postCrmExports202609ExportAsyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmExports202609ExportAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExports202609ExportAsyncTasksTaskIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
