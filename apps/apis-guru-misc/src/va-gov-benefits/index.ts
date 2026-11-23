import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUploadsIdDownloadRoute,
  getUploadsIdRoute,
  postUploadsReportRoute,
  postUploadsRoute,
  postUploadsValidateDocumentRoute,
  putPathRoute,
} from './routes'
import {
  getUploadsIdDownloadRouteHandler,
  getUploadsIdRouteHandler,
  postUploadsReportRouteHandler,
  postUploadsRouteHandler,
  postUploadsValidateDocumentRouteHandler,
  putPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putPathRoute, putPathRouteHandler)
  .openapi(postUploadsRoute, postUploadsRouteHandler)
  .openapi(postUploadsReportRoute, postUploadsReportRouteHandler)
  .openapi(postUploadsValidateDocumentRoute, postUploadsValidateDocumentRouteHandler)
  .openapi(getUploadsIdRoute, getUploadsIdRouteHandler)
  .openapi(getUploadsIdDownloadRoute, getUploadsIdDownloadRouteHandler)

export default app
