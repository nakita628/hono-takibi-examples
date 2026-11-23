import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameRoute,
  getV1ParentDataSourcesRoute,
  getV1ParentRunsRoute,
  getV1ParentTransferConfigsRoute,
  getV1ParentTransferLogsRoute,
  patchV1NameRoute,
  postV1NameCheckValidCredsRoute,
  postV1NameEnrollDataSourcesRoute,
  postV1ParentScheduleRunsRoute,
  postV1ParentStartManualRunsRoute,
  postV1ParentTransferConfigsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentDataSourcesRouteHandler,
  getV1ParentRunsRouteHandler,
  getV1ParentTransferConfigsRouteHandler,
  getV1ParentTransferLogsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCheckValidCredsRouteHandler,
  postV1NameEnrollDataSourcesRouteHandler,
  postV1ParentScheduleRunsRouteHandler,
  postV1ParentStartManualRunsRouteHandler,
  postV1ParentTransferConfigsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(postV1NameCheckValidCredsRoute, postV1NameCheckValidCredsRouteHandler)
  .openapi(postV1NameEnrollDataSourcesRoute, postV1NameEnrollDataSourcesRouteHandler)
  .openapi(getV1ParentDataSourcesRoute, getV1ParentDataSourcesRouteHandler)
  .openapi(getV1ParentRunsRoute, getV1ParentRunsRouteHandler)
  .openapi(getV1ParentTransferConfigsRoute, getV1ParentTransferConfigsRouteHandler)
  .openapi(postV1ParentTransferConfigsRoute, postV1ParentTransferConfigsRouteHandler)
  .openapi(getV1ParentTransferLogsRoute, getV1ParentTransferLogsRouteHandler)
  .openapi(postV1ParentScheduleRunsRoute, postV1ParentScheduleRunsRouteHandler)
  .openapi(postV1ParentStartManualRunsRoute, postV1ParentStartManualRunsRouteHandler)

export default app
