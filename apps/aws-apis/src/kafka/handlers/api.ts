import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ClustersClusterArnOperationsRoute,
  getApiV2ClustersClusterArnRoute,
  getApiV2ClustersRoute,
  getApiV2OperationsClusterOperationArnRoute,
  postApiV2ClustersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiV2ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClustersClusterArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OperationsClusterOperationArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClustersClusterArnOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
