import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DataPathRoute,
  deleteV1PoliciesIdRoute,
  getHealthRoute,
  getV1ConfigRoute,
  getV1DataPathRoute,
  getV1PoliciesIdRoute,
  getV1PoliciesRoute,
  getV1QueryRoute,
  patchV1DataPathRoute,
  postRoute,
  postV0DataPathRoute,
  postV1CompileRoute,
  postV1DataPathRoute,
  postV1QueryRoute,
  putV1DataPathRoute,
  putV1PoliciesIdRoute,
} from './routes'
import {
  deleteV1DataPathRouteHandler,
  deleteV1PoliciesIdRouteHandler,
  getHealthRouteHandler,
  getV1ConfigRouteHandler,
  getV1DataPathRouteHandler,
  getV1PoliciesIdRouteHandler,
  getV1PoliciesRouteHandler,
  getV1QueryRouteHandler,
  patchV1DataPathRouteHandler,
  postRouteHandler,
  postV0DataPathRouteHandler,
  postV1CompileRouteHandler,
  postV1DataPathRouteHandler,
  postV1QueryRouteHandler,
  putV1DataPathRouteHandler,
  putV1PoliciesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRoute, postRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(postV0DataPathRoute, postV0DataPathRouteHandler)
  .openapi(postV1CompileRoute, postV1CompileRouteHandler)
  .openapi(getV1ConfigRoute, getV1ConfigRouteHandler)
  .openapi(deleteV1DataPathRoute, deleteV1DataPathRouteHandler)
  .openapi(getV1DataPathRoute, getV1DataPathRouteHandler)
  .openapi(patchV1DataPathRoute, patchV1DataPathRouteHandler)
  .openapi(postV1DataPathRoute, postV1DataPathRouteHandler)
  .openapi(putV1DataPathRoute, putV1DataPathRouteHandler)
  .openapi(getV1PoliciesRoute, getV1PoliciesRouteHandler)
  .openapi(deleteV1PoliciesIdRoute, deleteV1PoliciesIdRouteHandler)
  .openapi(getV1PoliciesIdRoute, getV1PoliciesIdRouteHandler)
  .openapi(putV1PoliciesIdRoute, putV1PoliciesIdRouteHandler)
  .openapi(getV1QueryRoute, getV1QueryRouteHandler)
  .openapi(postV1QueryRoute, postV1QueryRouteHandler)

export default app
