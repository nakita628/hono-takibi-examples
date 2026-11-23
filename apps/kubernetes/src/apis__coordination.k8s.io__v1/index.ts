import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  getApisCoordinationK8sIoV1IndexRoute,
  getApisCoordinationK8sIoV1LeasesRoute,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  getApisCoordinationK8sIoV1WatchLeasesRoute,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRoute,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRoute,
  patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
  postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
  putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
} from './routes'
import {
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  getApisCoordinationK8sIoV1IndexRouteHandler,
  getApisCoordinationK8sIoV1LeasesRouteHandler,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  getApisCoordinationK8sIoV1WatchLeasesRouteHandler,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRouteHandler,
  getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRouteHandler,
  patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisCoordinationK8sIoV1IndexRoute, getApisCoordinationK8sIoV1IndexRouteHandler)
  .openapi(getApisCoordinationK8sIoV1LeasesRoute, getApisCoordinationK8sIoV1LeasesRouteHandler)
  .openapi(
    deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
    deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  )
  .openapi(
    getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
    getApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  )
  .openapi(
    postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRoute,
    postApisCoordinationK8sIoV1NamespacesNamespaceLeasesRouteHandler,
  )
  .openapi(
    deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
    deleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  )
  .openapi(
    getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
    getApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  )
  .openapi(
    patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
    patchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  )
  .openapi(
    putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRoute,
    putApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameRouteHandler,
  )
  .openapi(
    getApisCoordinationK8sIoV1WatchLeasesRoute,
    getApisCoordinationK8sIoV1WatchLeasesRouteHandler,
  )
  .openapi(
    getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRoute,
    getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesRouteHandler,
  )
  .openapi(
    getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRoute,
    getApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameRouteHandler,
  )

export default app
