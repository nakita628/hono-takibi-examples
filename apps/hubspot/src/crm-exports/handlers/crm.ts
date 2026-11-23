import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmExports202609ExportAsyncTasksTaskIdStatusRoute,
  getCrmExports202609ExportExportIdRoute,
  postCrmExports202609ExportAsyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(postCrmExports202609ExportAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExports202609ExportAsyncTasksTaskIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExports202609ExportExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
