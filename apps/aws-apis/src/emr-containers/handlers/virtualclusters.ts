import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
  deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
  deleteVirtualclustersVirtualClusterIdRoute,
  getVirtualclustersRoute,
  getVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute,
  getVirtualclustersVirtualClusterIdEndpointsRoute,
  getVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute,
  getVirtualclustersVirtualClusterIdJobrunsRoute,
  getVirtualclustersVirtualClusterIdRoute,
  postVirtualclustersRoute,
  postVirtualclustersVirtualClusterIdEndpointsRoute,
  postVirtualclustersVirtualClusterIdJobrunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualclustersHandler = app
  .openapi(deleteVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersVirtualClusterIdJobrunsJobRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualclustersVirtualClusterIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersVirtualClusterIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersVirtualClusterIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualclustersVirtualClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersVirtualClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualclustersVirtualClusterIdJobrunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualclustersVirtualClusterIdJobrunsRoute, (c) => {
    throw new Error('Not implemented')
  })
