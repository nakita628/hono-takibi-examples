import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1HashesSearchRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ThreatListsComputeDiffRoute,
  getV1UrisSearchRoute,
  postV1NameCancelRoute,
  postV1ParentSubmissionsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1HashesSearchRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ThreatListsComputeDiffRouteHandler,
  getV1UrisSearchRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentSubmissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1HashesSearchRoute, getV1HashesSearchRouteHandler)
  .openapi(getV1ThreatListsComputeDiffRoute, getV1ThreatListsComputeDiffRouteHandler)
  .openapi(getV1UrisSearchRoute, getV1UrisSearchRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1ParentSubmissionsRoute, postV1ParentSubmissionsRouteHandler)

export default app
