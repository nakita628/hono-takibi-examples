import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentPipelinesRoute,
  patchV1NameRoute,
  postV1NameRunRoute,
  postV1NameStopRoute,
  postV1ParentPipelinesRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentJobsRouteHandler,
  getV1ParentPipelinesRouteHandler,
  patchV1NameRouteHandler,
  postV1NameRunRouteHandler,
  postV1NameStopRouteHandler,
  postV1ParentPipelinesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameRunRoute, postV1NameRunRouteHandler)
  .openapi(postV1NameStopRoute, postV1NameStopRouteHandler)
  .openapi(getV1ParentJobsRoute, getV1ParentJobsRouteHandler)
  .openapi(getV1ParentPipelinesRoute, getV1ParentPipelinesRouteHandler)
  .openapi(postV1ParentPipelinesRoute, postV1ParentPipelinesRouteHandler)

export default app
