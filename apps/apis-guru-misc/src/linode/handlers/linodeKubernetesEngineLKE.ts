import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLkeClustersClusterIdKubeconfigRoute,
  deleteLkeClustersClusterIdNodesNodeIdRoute,
  deleteLkeClustersClusterIdPoolsPoolIdRoute,
  deleteLkeClustersClusterIdRoute,
  deleteLkeClustersClusterIdServicetokenRoute,
  getLkeClustersClusterIdApiEndpointsRoute,
  getLkeClustersClusterIdDashboardRoute,
  getLkeClustersClusterIdKubeconfigRoute,
  getLkeClustersClusterIdNodesNodeIdRoute,
  getLkeClustersClusterIdPoolsPoolIdRoute,
  getLkeClustersClusterIdPoolsRoute,
  getLkeClustersClusterIdRoute,
  getLkeClustersRoute,
  getLkeVersionsRoute,
  getLkeVersionsVersionRoute,
  postLkeClustersClusterIdNodesNodeIdRecycleRoute,
  postLkeClustersClusterIdPoolsPoolIdRecycleRoute,
  postLkeClustersClusterIdPoolsRoute,
  postLkeClustersClusterIdRecycleRoute,
  postLkeClustersClusterIdRegenerateRoute,
  postLkeClustersRoute,
  putLkeClustersClusterIdPoolsPoolIdRoute,
  putLkeClustersClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linodeKubernetesEngineLKEHandler = app
  .openapi(getLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdApiEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersClusterIdNodesNodeIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersClusterIdPoolsPoolIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersClusterIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLkeClustersClusterIdRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLkeClustersClusterIdServicetokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLkeVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
