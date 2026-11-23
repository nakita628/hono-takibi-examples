import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PresentationsPresentationIdPagesPageObjectIdRoute,
  getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute,
  getV1PresentationsPresentationIdRoute,
  postV1PresentationsPresentationIdBatchUpdateRoute,
  postV1PresentationsRoute,
} from './routes'
import {
  getV1PresentationsPresentationIdPagesPageObjectIdRouteHandler,
  getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRouteHandler,
  getV1PresentationsPresentationIdRouteHandler,
  postV1PresentationsPresentationIdBatchUpdateRouteHandler,
  postV1PresentationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1PresentationsRoute, postV1PresentationsRouteHandler)
  .openapi(getV1PresentationsPresentationIdRoute, getV1PresentationsPresentationIdRouteHandler)
  .openapi(
    getV1PresentationsPresentationIdPagesPageObjectIdRoute,
    getV1PresentationsPresentationIdPagesPageObjectIdRouteHandler,
  )
  .openapi(
    getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute,
    getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRouteHandler,
  )
  .openapi(
    postV1PresentationsPresentationIdBatchUpdateRoute,
    postV1PresentationsPresentationIdBatchUpdateRouteHandler,
  )

export default app
