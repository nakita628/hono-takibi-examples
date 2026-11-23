import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
  deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
  getApisDiscoveryK8sIoV1EndpointslicesRoute,
  getApisDiscoveryK8sIoV1IndexRoute,
  getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
  getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
  getApisDiscoveryK8sIoV1WatchEndpointslicesRoute,
  getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameRoute,
  getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesRoute,
  patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
  postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
  putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
} from './routes'
import {
  deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  getApisDiscoveryK8sIoV1EndpointslicesRouteHandler,
  getApisDiscoveryK8sIoV1IndexRouteHandler,
  getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  getApisDiscoveryK8sIoV1WatchEndpointslicesRouteHandler,
  getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameRouteHandler,
  getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesRouteHandler,
  patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApisDiscoveryK8sIoV1IndexRoute, getApisDiscoveryK8sIoV1IndexRouteHandler)
  .openapi(
    getApisDiscoveryK8sIoV1EndpointslicesRoute,
    getApisDiscoveryK8sIoV1EndpointslicesRouteHandler,
  )
  .openapi(
    deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
    deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  )
  .openapi(
    getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
    getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  )
  .openapi(
    postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute,
    postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRouteHandler,
  )
  .openapi(
    deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
    deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  )
  .openapi(
    getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
    getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  )
  .openapi(
    patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
    patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  )
  .openapi(
    putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute,
    putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRouteHandler,
  )
  .openapi(
    getApisDiscoveryK8sIoV1WatchEndpointslicesRoute,
    getApisDiscoveryK8sIoV1WatchEndpointslicesRouteHandler,
  )
  .openapi(
    getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesRoute,
    getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesRouteHandler,
  )
  .openapi(
    getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameRoute,
    getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameRouteHandler,
  )

export default app
