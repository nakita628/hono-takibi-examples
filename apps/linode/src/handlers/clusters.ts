import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLkeClustersClusterIdRoute,
  getApiVersionLkeClustersClusterIdRoute,
  getApiVersionLkeClustersRoute,
  getApiVersionObjectStorageClustersClusterIdRoute,
  getApiVersionObjectStorageClustersRoute,
  postApiVersionLkeClustersClusterIdRecycleRoute,
  postApiVersionLkeClustersClusterIdRegenerateRoute,
  postApiVersionLkeClustersRoute,
  putApiVersionLkeClustersClusterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(postApiVersionLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionObjectStorageClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
