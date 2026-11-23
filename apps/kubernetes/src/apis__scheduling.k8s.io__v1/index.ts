import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisSchedulingK8sIoV1PriorityclassesNameRoute,
  deleteApisSchedulingK8sIoV1PriorityclassesRoute,
  getApisSchedulingK8sIoV1IndexRoute,
  getApisSchedulingK8sIoV1PriorityclassesNameRoute,
  getApisSchedulingK8sIoV1PriorityclassesRoute,
  getApisSchedulingK8sIoV1WatchPriorityclassesNameRoute,
  getApisSchedulingK8sIoV1WatchPriorityclassesRoute,
  patchApisSchedulingK8sIoV1PriorityclassesNameRoute,
  postApisSchedulingK8sIoV1PriorityclassesRoute,
  putApisSchedulingK8sIoV1PriorityclassesNameRoute,
} from './routes'
import {
  deleteApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  deleteApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  getApisSchedulingK8sIoV1IndexRouteHandler,
  getApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  getApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  getApisSchedulingK8sIoV1WatchPriorityclassesNameRouteHandler,
  getApisSchedulingK8sIoV1WatchPriorityclassesRouteHandler,
  patchApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  postApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  putApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisSchedulingK8sIoV1IndexRoute, getApisSchedulingK8sIoV1IndexRouteHandler)
  .openapi(
    deleteApisSchedulingK8sIoV1PriorityclassesRoute,
    deleteApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  )
  .openapi(
    getApisSchedulingK8sIoV1PriorityclassesRoute,
    getApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  )
  .openapi(
    postApisSchedulingK8sIoV1PriorityclassesRoute,
    postApisSchedulingK8sIoV1PriorityclassesRouteHandler,
  )
  .openapi(
    deleteApisSchedulingK8sIoV1PriorityclassesNameRoute,
    deleteApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  )
  .openapi(
    getApisSchedulingK8sIoV1PriorityclassesNameRoute,
    getApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  )
  .openapi(
    patchApisSchedulingK8sIoV1PriorityclassesNameRoute,
    patchApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  )
  .openapi(
    putApisSchedulingK8sIoV1PriorityclassesNameRoute,
    putApisSchedulingK8sIoV1PriorityclassesNameRouteHandler,
  )
  .openapi(
    getApisSchedulingK8sIoV1WatchPriorityclassesRoute,
    getApisSchedulingK8sIoV1WatchPriorityclassesRouteHandler,
  )
  .openapi(
    getApisSchedulingK8sIoV1WatchPriorityclassesNameRoute,
    getApisSchedulingK8sIoV1WatchPriorityclassesNameRouteHandler,
  )

export default app
