import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DocumentsDocumentIdRoute,
  postV1DocumentsDocumentIdBatchUpdateRoute,
  postV1DocumentsRoute,
} from './routes'
import {
  getV1DocumentsDocumentIdRouteHandler,
  postV1DocumentsDocumentIdBatchUpdateRouteHandler,
  postV1DocumentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1DocumentsRoute, postV1DocumentsRouteHandler)
  .openapi(getV1DocumentsDocumentIdRoute, getV1DocumentsDocumentIdRouteHandler)
  .openapi(
    postV1DocumentsDocumentIdBatchUpdateRoute,
    postV1DocumentsDocumentIdBatchUpdateRouteHandler,
  )

export default app
