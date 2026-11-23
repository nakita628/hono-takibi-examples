import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDesignerTemplatesIdRoute,
  deleteTemplatesIdRoute,
  getDesignerTemplatesIdRoute,
  getDesignerTemplatesIndexRoute,
  getTemplatesIdFileRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postDesignerTemplatesIdGenerateRoute,
  postDesignerTemplatesIndexRoute,
  postDesignerTemplatesPreviewRoute,
  postTemplatesIdFillRoute,
  postTemplatesRoute,
  putDesignerTemplatesIdRoute,
  putTemplatesIdRoute,
} from './routes'
import {
  deleteDesignerTemplatesIdRouteHandler,
  deleteTemplatesIdRouteHandler,
  getDesignerTemplatesIdRouteHandler,
  getDesignerTemplatesIndexRouteHandler,
  getTemplatesIdFileRouteHandler,
  getTemplatesIdRouteHandler,
  getTemplatesRouteHandler,
  postDesignerTemplatesIdGenerateRouteHandler,
  postDesignerTemplatesIndexRouteHandler,
  postDesignerTemplatesPreviewRouteHandler,
  postTemplatesIdFillRouteHandler,
  postTemplatesRouteHandler,
  putDesignerTemplatesIdRouteHandler,
  putTemplatesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDesignerTemplatesIndexRoute, getDesignerTemplatesIndexRouteHandler)
  .openapi(postDesignerTemplatesIndexRoute, postDesignerTemplatesIndexRouteHandler)
  .openapi(postDesignerTemplatesPreviewRoute, postDesignerTemplatesPreviewRouteHandler)
  .openapi(deleteDesignerTemplatesIdRoute, deleteDesignerTemplatesIdRouteHandler)
  .openapi(getDesignerTemplatesIdRoute, getDesignerTemplatesIdRouteHandler)
  .openapi(putDesignerTemplatesIdRoute, putDesignerTemplatesIdRouteHandler)
  .openapi(postDesignerTemplatesIdGenerateRoute, postDesignerTemplatesIdGenerateRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(deleteTemplatesIdRoute, deleteTemplatesIdRouteHandler)
  .openapi(getTemplatesIdRoute, getTemplatesIdRouteHandler)
  .openapi(putTemplatesIdRoute, putTemplatesIdRouteHandler)
  .openapi(getTemplatesIdFileRoute, getTemplatesIdFileRouteHandler)
  .openapi(postTemplatesIdFillRoute, postTemplatesIdFillRouteHandler)

export default app
