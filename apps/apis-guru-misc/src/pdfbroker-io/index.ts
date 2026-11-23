import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPdfRoute,
  postApiPdfPdfconcatRoute,
  postApiPdfPdftoimageRoute,
  postApiPdfPdfwritestringRoute,
  postApiPdfWkhtmltopdfRoute,
  postApiPdfXslfoRoute,
  postApiPdfXslfowithtransformRoute,
} from './routes'
import {
  getApiPdfRouteHandler,
  postApiPdfPdfconcatRouteHandler,
  postApiPdfPdftoimageRouteHandler,
  postApiPdfPdfwritestringRouteHandler,
  postApiPdfWkhtmltopdfRouteHandler,
  postApiPdfXslfoRouteHandler,
  postApiPdfXslfowithtransformRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiPdfRoute, getApiPdfRouteHandler)
  .openapi(postApiPdfPdfconcatRoute, postApiPdfPdfconcatRouteHandler)
  .openapi(postApiPdfPdftoimageRoute, postApiPdfPdftoimageRouteHandler)
  .openapi(postApiPdfPdfwritestringRoute, postApiPdfPdfwritestringRouteHandler)
  .openapi(postApiPdfWkhtmltopdfRoute, postApiPdfWkhtmltopdfRouteHandler)
  .openapi(postApiPdfXslfoRoute, postApiPdfXslfoRouteHandler)
  .openapi(postApiPdfXslfowithtransformRoute, postApiPdfXslfowithtransformRouteHandler)

export default app
