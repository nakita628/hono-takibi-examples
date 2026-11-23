import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClusterNexusEndpointsIdRoute,
  getClusterNamespacesNamespaceRoute,
  getClusterNamespacesNamespaceSearchAttributesRoute,
  getClusterNamespacesRoute,
  getClusterNexusEndpointsIdRoute,
  getClusterNexusEndpointsRoute,
  getClusterRoute,
  postClusterNamespacesNamespaceUpdateRoute,
  postClusterNamespacesRoute,
  postClusterNexusEndpointsIdUpdateRoute,
  postClusterNexusEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clusterHandler = app
  .openapi(getClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNamespacesNamespaceSearchAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterNamespacesNamespaceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterNexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClusterNexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterNexusEndpointsIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
