import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute,
  getVCmsApiBuilderIdContentTypeRoute,
  getVCmsApiBuilderIdIndexRoute,
} from './routes'
import {
  getVCmsApiBuilderIdContentTypeDocumentIdIndexRouteHandler,
  getVCmsApiBuilderIdContentTypeRouteHandler,
  getVCmsApiBuilderIdIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getVCmsApiBuilderIdIndexRoute, getVCmsApiBuilderIdIndexRouteHandler)
  .openapi(getVCmsApiBuilderIdContentTypeRoute, getVCmsApiBuilderIdContentTypeRouteHandler)
  .openapi(
    getVCmsApiBuilderIdContentTypeDocumentIdIndexRoute,
    getVCmsApiBuilderIdContentTypeDocumentIdIndexRouteHandler,
  )

export default app
