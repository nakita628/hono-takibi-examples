import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1beta1ProjectsProjectIdExportRoute,
  postV1beta1ProjectsProjectIdImportRoute,
} from './routes'
import {
  postV1beta1ProjectsProjectIdExportRouteHandler,
  postV1beta1ProjectsProjectIdImportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1beta1ProjectsProjectIdExportRoute, postV1beta1ProjectsProjectIdExportRouteHandler)
  .openapi(postV1beta1ProjectsProjectIdImportRoute, postV1beta1ProjectsProjectIdImportRouteHandler)

export default app
