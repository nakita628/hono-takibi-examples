import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FormsFormIdWatchesWatchIdRoute,
  getV1FormsFormIdResponsesResponseIdRoute,
  getV1FormsFormIdResponsesRoute,
  getV1FormsFormIdRoute,
  getV1FormsFormIdWatchesRoute,
  postV1FormsFormIdBatchUpdateRoute,
  postV1FormsFormIdWatchesRoute,
  postV1FormsFormIdWatchesWatchIdRenewRoute,
  postV1FormsRoute,
} from './routes'
import {
  deleteV1FormsFormIdWatchesWatchIdRouteHandler,
  getV1FormsFormIdResponsesResponseIdRouteHandler,
  getV1FormsFormIdResponsesRouteHandler,
  getV1FormsFormIdRouteHandler,
  getV1FormsFormIdWatchesRouteHandler,
  postV1FormsFormIdBatchUpdateRouteHandler,
  postV1FormsFormIdWatchesRouteHandler,
  postV1FormsFormIdWatchesWatchIdRenewRouteHandler,
  postV1FormsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1FormsRoute, postV1FormsRouteHandler)
  .openapi(getV1FormsFormIdRoute, getV1FormsFormIdRouteHandler)
  .openapi(getV1FormsFormIdResponsesRoute, getV1FormsFormIdResponsesRouteHandler)
  .openapi(
    getV1FormsFormIdResponsesResponseIdRoute,
    getV1FormsFormIdResponsesResponseIdRouteHandler,
  )
  .openapi(getV1FormsFormIdWatchesRoute, getV1FormsFormIdWatchesRouteHandler)
  .openapi(postV1FormsFormIdWatchesRoute, postV1FormsFormIdWatchesRouteHandler)
  .openapi(deleteV1FormsFormIdWatchesWatchIdRoute, deleteV1FormsFormIdWatchesWatchIdRouteHandler)
  .openapi(
    postV1FormsFormIdWatchesWatchIdRenewRoute,
    postV1FormsFormIdWatchesWatchIdRenewRouteHandler,
  )
  .openapi(postV1FormsFormIdBatchUpdateRoute, postV1FormsFormIdBatchUpdateRouteHandler)

export default app
