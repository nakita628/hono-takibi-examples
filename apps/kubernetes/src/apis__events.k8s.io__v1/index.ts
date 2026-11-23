import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  getApisEventsK8sIoV1EventsRoute,
  getApisEventsK8sIoV1IndexRoute,
  getApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  getApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  getApisEventsK8sIoV1WatchEventsRoute,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRoute,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRoute,
  patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
  postApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
  putApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
} from './routes'
import {
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  deleteApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  getApisEventsK8sIoV1EventsRouteHandler,
  getApisEventsK8sIoV1IndexRouteHandler,
  getApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  getApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  getApisEventsK8sIoV1WatchEventsRouteHandler,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRouteHandler,
  getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRouteHandler,
  patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  postApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  putApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisEventsK8sIoV1IndexRoute, getApisEventsK8sIoV1IndexRouteHandler)
  .openapi(getApisEventsK8sIoV1EventsRoute, getApisEventsK8sIoV1EventsRouteHandler)
  .openapi(
    deleteApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
    deleteApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  )
  .openapi(
    getApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
    getApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  )
  .openapi(
    postApisEventsK8sIoV1NamespacesNamespaceEventsRoute,
    postApisEventsK8sIoV1NamespacesNamespaceEventsRouteHandler,
  )
  .openapi(
    deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
    deleteApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  )
  .openapi(
    getApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
    getApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  )
  .openapi(
    patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
    patchApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  )
  .openapi(
    putApisEventsK8sIoV1NamespacesNamespaceEventsNameRoute,
    putApisEventsK8sIoV1NamespacesNamespaceEventsNameRouteHandler,
  )
  .openapi(getApisEventsK8sIoV1WatchEventsRoute, getApisEventsK8sIoV1WatchEventsRouteHandler)
  .openapi(
    getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRoute,
    getApisEventsK8sIoV1WatchNamespacesNamespaceEventsRouteHandler,
  )
  .openapi(
    getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRoute,
    getApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameRouteHandler,
  )

export default app
