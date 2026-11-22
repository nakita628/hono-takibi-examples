import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLkeClustersClusterIdNodesNodeIdRoute,
  deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  getApiVersionLkeClustersClusterIdNodesNodeIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
  getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRoute,
  postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute,
  putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getApiVersionLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLkeClustersClusterIdNodesNodeIdRecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
