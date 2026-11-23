import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisNodeK8sIoV1RuntimeclassesNameRoute,
  deleteApisNodeK8sIoV1RuntimeclassesRoute,
  getApisNodeK8sIoV1IndexRoute,
  getApisNodeK8sIoV1RuntimeclassesNameRoute,
  getApisNodeK8sIoV1RuntimeclassesRoute,
  getApisNodeK8sIoV1WatchRuntimeclassesNameRoute,
  getApisNodeK8sIoV1WatchRuntimeclassesRoute,
  patchApisNodeK8sIoV1RuntimeclassesNameRoute,
  postApisNodeK8sIoV1RuntimeclassesRoute,
  putApisNodeK8sIoV1RuntimeclassesNameRoute,
} from './routes'
import {
  deleteApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  deleteApisNodeK8sIoV1RuntimeclassesRouteHandler,
  getApisNodeK8sIoV1IndexRouteHandler,
  getApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  getApisNodeK8sIoV1RuntimeclassesRouteHandler,
  getApisNodeK8sIoV1WatchRuntimeclassesNameRouteHandler,
  getApisNodeK8sIoV1WatchRuntimeclassesRouteHandler,
  patchApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  postApisNodeK8sIoV1RuntimeclassesRouteHandler,
  putApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisNodeK8sIoV1IndexRoute, getApisNodeK8sIoV1IndexRouteHandler)
  .openapi(
    deleteApisNodeK8sIoV1RuntimeclassesRoute,
    deleteApisNodeK8sIoV1RuntimeclassesRouteHandler,
  )
  .openapi(getApisNodeK8sIoV1RuntimeclassesRoute, getApisNodeK8sIoV1RuntimeclassesRouteHandler)
  .openapi(postApisNodeK8sIoV1RuntimeclassesRoute, postApisNodeK8sIoV1RuntimeclassesRouteHandler)
  .openapi(
    deleteApisNodeK8sIoV1RuntimeclassesNameRoute,
    deleteApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  )
  .openapi(
    getApisNodeK8sIoV1RuntimeclassesNameRoute,
    getApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  )
  .openapi(
    patchApisNodeK8sIoV1RuntimeclassesNameRoute,
    patchApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  )
  .openapi(
    putApisNodeK8sIoV1RuntimeclassesNameRoute,
    putApisNodeK8sIoV1RuntimeclassesNameRouteHandler,
  )
  .openapi(
    getApisNodeK8sIoV1WatchRuntimeclassesRoute,
    getApisNodeK8sIoV1WatchRuntimeclassesRouteHandler,
  )
  .openapi(
    getApisNodeK8sIoV1WatchRuntimeclassesNameRoute,
    getApisNodeK8sIoV1WatchRuntimeclassesNameRouteHandler,
  )

export default app
