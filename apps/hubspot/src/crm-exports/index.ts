import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmExports202609ExportAsyncTasksTaskIdStatusRoute,
  getCrmExports202609ExportExportIdRoute,
  postCrmExports202609ExportAsyncRoute,
} from './routes'
import {
  getCrmExports202609ExportAsyncTasksTaskIdStatusRouteHandler,
  getCrmExports202609ExportExportIdRouteHandler,
  postCrmExports202609ExportAsyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCrmExports202609ExportAsyncRoute, postCrmExports202609ExportAsyncRouteHandler)
  .openapi(
    getCrmExports202609ExportAsyncTasksTaskIdStatusRoute,
    getCrmExports202609ExportAsyncTasksTaskIdStatusRouteHandler,
  )
  .openapi(getCrmExports202609ExportExportIdRoute, getCrmExports202609ExportExportIdRouteHandler)

export default app
