import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1NexusEndpointsIdRoute,
  deleteClusterNexusEndpointsIdRoute,
  getApiV1NamespacesNamespaceSearchAttributesRoute,
  getApiV1NexusEndpointsIdRoute,
  getApiV1NexusEndpointsRoute,
  getClusterNamespacesNamespaceSearchAttributesRoute,
  getClusterNexusEndpointsIdRoute,
  getClusterNexusEndpointsRoute,
  postApiV1NexusEndpointsIdUpdateRoute,
  postApiV1NexusEndpointsRoute,
  postClusterNexusEndpointsIdUpdateRoute,
  postClusterNexusEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operatorServiceHandler = app
  .openapi(getApiV1NamespacesNamespaceSearchAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NexusEndpointsIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClusterNamespacesNamespaceSearchAttributesRoute, (c) => {
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
