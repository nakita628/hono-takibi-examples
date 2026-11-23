import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreviewsFileIdIndexRoute,
  getProcessesIndexRoute,
  getProjectsIndexRoute,
  getProjectsProjectNumberIndexRoute,
  getReportsIndexRoute,
  getReportsReportNumberIndexRoute,
  getResultsResultFileIdIndexRoute,
  postProjectsIndexRoute,
  postReportsIndexRoute,
  postUploadsIndexRoute,
} from './routes'
import {
  getPreviewsFileIdIndexRouteHandler,
  getProcessesIndexRouteHandler,
  getProjectsIndexRouteHandler,
  getProjectsProjectNumberIndexRouteHandler,
  getReportsIndexRouteHandler,
  getReportsReportNumberIndexRouteHandler,
  getResultsResultFileIdIndexRouteHandler,
  postProjectsIndexRouteHandler,
  postReportsIndexRouteHandler,
  postUploadsIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPreviewsFileIdIndexRoute, getPreviewsFileIdIndexRouteHandler)
  .openapi(getProcessesIndexRoute, getProcessesIndexRouteHandler)
  .openapi(getProjectsIndexRoute, getProjectsIndexRouteHandler)
  .openapi(postProjectsIndexRoute, postProjectsIndexRouteHandler)
  .openapi(getProjectsProjectNumberIndexRoute, getProjectsProjectNumberIndexRouteHandler)
  .openapi(getReportsIndexRoute, getReportsIndexRouteHandler)
  .openapi(postReportsIndexRoute, postReportsIndexRouteHandler)
  .openapi(getReportsReportNumberIndexRoute, getReportsReportNumberIndexRouteHandler)
  .openapi(getResultsResultFileIdIndexRoute, getResultsResultFileIdIndexRouteHandler)
  .openapi(postUploadsIndexRoute, postUploadsIndexRouteHandler)

export default app
