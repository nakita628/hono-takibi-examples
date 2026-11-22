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
} from '../routes'

const app = new OpenAPIHono()

export const discoveryV1Handler = app
  .openapi(getApisDiscoveryK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1EndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1WatchEndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
