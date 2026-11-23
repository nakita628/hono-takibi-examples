import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentLineageEventsRoute,
  getV1ParentProcessesRoute,
  getV1ParentRunsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentBatchSearchLinkProcessesRoute,
  postV1ParentLineageEventsRoute,
  postV1ParentProcessesRoute,
  postV1ParentRunsRoute,
  postV1ParentSearchLinksRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentLineageEventsRouteHandler,
  getV1ParentProcessesRouteHandler,
  getV1ParentRunsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentBatchSearchLinkProcessesRouteHandler,
  postV1ParentLineageEventsRouteHandler,
  postV1ParentProcessesRouteHandler,
  postV1ParentRunsRouteHandler,
  postV1ParentSearchLinksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentLineageEventsRoute, getV1ParentLineageEventsRouteHandler)
  .openapi(postV1ParentLineageEventsRoute, postV1ParentLineageEventsRouteHandler)
  .openapi(getV1ParentProcessesRoute, getV1ParentProcessesRouteHandler)
  .openapi(postV1ParentProcessesRoute, postV1ParentProcessesRouteHandler)
  .openapi(getV1ParentRunsRoute, getV1ParentRunsRouteHandler)
  .openapi(postV1ParentRunsRoute, postV1ParentRunsRouteHandler)
  .openapi(
    postV1ParentBatchSearchLinkProcessesRoute,
    postV1ParentBatchSearchLinkProcessesRouteHandler,
  )
  .openapi(postV1ParentSearchLinksRoute, postV1ParentSearchLinksRouteHandler)

export default app
