import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
  getApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
  getApiVersionLkeClustersClusterIdPoolsRoute,
  postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRoute,
  postApiVersionLkeClustersClusterIdPoolsRoute,
  putApiVersionLkeClustersClusterIdPoolsPoolIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodePoolsHandler = app
  .openapi(postApiVersionLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdPoolsPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdPoolsPoolIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
